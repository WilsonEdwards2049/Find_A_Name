#!/usr/bin/env node
"use strict";

// Fills gaps in the same-surname naming examples from the 120W Chinese names
// corpus. Only surname + full-name tone combinations without a curated example
// are added. Curated rows are never replaced.

const fs = require("fs");
const os = require("os");
const path = require("path");
const https = require("https");

const ROOT = path.resolve(__dirname, "..");
const DATA_PATH = path.join(ROOT, "js", "data.js");
const CACHE_DIR = process.env.FINDNAME_CHAR_CACHE || path.join(os.tmpdir(), "findname-char-sources");
const CORPUS_PATH = process.env.FINDNAME_NAMES_FILE || path.join(CACHE_DIR, "names.txt");
const CORPUS_URL =
  "https://raw.githubusercontent.com/wainshine/Chinese-Names-Corpus/" +
  "47d4af8d816f6212787ddfc49173cac3b994b58d/Chinese_Names_Corpus/" +
  "Chinese_Names_Corpus%EF%BC%88120W%EF%BC%89.txt";

const START_MARKER = "# === GENERATED SAME-SURNAME EXAMPLES START ===";
const END_MARKER = "# === GENERATED SAME-SURNAME EXAMPLES END ===";
const CORPUS_ORIGIN = "120W 中文姓名语料";
const NOTE = "同名实录，姓氏与声调均一致。";

function download(url, dest) {
  return new Promise(function (resolve, reject) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest + ".part");
    https
      .get(url, function (response) {
        if (response.statusCode !== 200) {
          reject(new Error("HTTP " + response.statusCode + " for " + url));
          response.resume();
          return;
        }
        response.pipe(file);
        file.on("finish", function () {
          file.close(function () {
            fs.renameSync(dest + ".part", dest);
            resolve(dest);
          });
        });
      })
      .on("error", function (error) {
        file.close();
        try { fs.unlinkSync(dest + ".part"); } catch (ignored) {}
        reject(error);
      });
  });
}

async function ensureCorpus() {
  if (fs.existsSync(CORPUS_PATH)) return CORPUS_PATH;
  await download(CORPUS_URL, CORPUS_PATH);
  return CORPUS_PATH;
}

global.window = {};
require(path.join(ROOT, "js", "data.js"));
require(path.join(ROOT, "js", "engine.js"));
const DATA = global.window.NameData;
const ENGINE = global.window.NameEngine;

const charMeta = new Map();
DATA.characters.forEach(function (entry) {
  let meta = charMeta.get(entry.char);
  if (!meta) {
    meta = { tones: new Set(), pinyins: new Set(), nameable: false, low: false, tagCount: 0 };
    charMeta.set(entry.char, meta);
  }
  meta.tones.add(entry.tone);
  meta.pinyins.add(entry.pinyin);
  if (entry.nameable) meta.nameable = true;
  if (entry.low) meta.low = true;
  meta.tagCount = Math.max(meta.tagCount, entry.tags ? entry.tags.length : 0);
});

const givenChars = new Map();
charMeta.forEach(function (meta, char) {
  if (meta.nameable && meta.tones.size === 1) {
    givenChars.set(char, {
      tone: Array.from(meta.tones)[0],
      pinyin: Array.from(meta.pinyins)[0],
      core: !meta.low,
      tagCount: meta.tagCount
    });
  }
});

function nameScore(chars) {
  let score = 0;
  const metas = chars.map(function (char) { return givenChars.get(char); });
  metas.forEach(function (meta) {
    if (meta.core) score += 2;
    score += Math.min(meta.tagCount, 2);
  });
  if (metas.length === 2 && metas[0].tagCount && metas[1].tagCount) score += 2;
  if (chars.length === 2 && chars[0] === chars[1]) score -= 4;
  return score;
}

function tonePatterns() {
  const patterns = [];
  for (let first = 1; first <= 4; first++) {
    patterns.push({ tones: [first], length: 1 });
    for (let second = 1; second <= 4; second++) {
      patterns.push({ tones: [first, second], length: 2 });
    }
  }
  return patterns;
}

function patternKey(surnameText, surnameTones, tones, length) {
  return [surnameText, surnameTones.join("-"), length, tones.join("-")].join("|");
}

const curated = new Set();
DATA.namingExamples.forEach(function (example) {
  if (example.origin === CORPUS_ORIGIN || !example.surname) return;
  const surname = ENGINE.resolveSurname(example.surname);
  if (!surname || !surname.text) return;
  const givenTones = example.pinyin.split(/\s+/)
    .map(function (token) { return ENGINE.parseTonePinyin(token); })
    .filter(Boolean)
    .map(function (item) { return item.tone; });
  if (!givenTones.length) return;
  curated.add(patternKey(surname.text, surname.tones, givenTones, givenTones.length));
});

const surnameTexts = Array.from(
  new Set(Object.keys(DATA.surnames || {}).concat(Object.keys(DATA.compoundSurnames || {})))
);
const compoundSet = new Set(Object.keys(DATA.compoundSurnames || {}));
const singleSet = new Set(Object.keys(DATA.surnames || {}));
const resolved = new Map();
surnameTexts.forEach(function (text) {
  resolved.set(text, ENGINE.resolveSurname(text));
});

async function main() {
  const corpusPath = await ensureCorpus();
  const lines = fs.readFileSync(corpusPath, "utf8").split(/\r?\n/);
  const best = new Map();

  lines.forEach(function (raw) {
    const name = raw.trim();
    if (!name || name.startsWith("By@") || !/^[\u4e00-\u9fff]{2,4}$/.test(name)) return;
    let surname = null;
    if (compoundSet.has(name.slice(0, 2))) surname = name.slice(0, 2);
    else if (singleSet.has(name.charAt(0))) surname = name.charAt(0);
    if (!surname) return;
    const given = name.slice(surname.length);
    if (given.length < 1 || given.length > 2) return;
    const chars = Array.from(given);
    if (!chars.every(function (char) { return givenChars.has(char); })) return;
    const tones = chars.map(function (char) { return givenChars.get(char).tone; });
    const key = patternKey(surname, resolved.get(surname).tones, tones, given.length);
    const row = {
      surname: surname,
      given: given,
      tones: tones,
      length: given.length,
      pinyin: chars.map(function (char) { return givenChars.get(char).pinyin; }).join(" "),
      score: nameScore(chars)
    };
    const prev = best.get(key);
    if (!prev || row.score > prev.score ||
        (row.score === prev.score && row.given < prev.given)) {
      best.set(key, row);
    }
  });

  const rows = [];
  let missing = 0;
  surnameTexts.forEach(function (text) {
    const surname = resolved.get(text);
    if (!surname || !surname.text) return;
    tonePatterns().forEach(function (pattern) {
      const key = patternKey(surname.text, surname.tones, pattern.tones, pattern.length);
      if (curated.has(key)) return;
      const row = best.get(key);
      if (!row) {
        missing += 1;
        return;
      }
      const surnamePinyin = surname.syllables.map(function (item) { return item.raw; }).join(" ");
      rows.push(
        row.given + "|" + row.pinyin + "|" + CORPUS_ORIGIN + "|名|" + NOTE +
        "|" + surname.text + "|" + surnamePinyin
      );
    });
  });

  const block = [START_MARKER]
    .concat("# 由 scripts/build-example-fills.cjs 生成；仅补无手写名例的姓氏与声调组合。")
    .concat(rows)
    .concat([END_MARKER])
    .join("\n");

  let raw = fs.readFileSync(DATA_PATH, "utf8").replace(/\r?\n/g, "\n");
  const start = raw.indexOf(START_MARKER);
  if (start >= 0) {
    const end = raw.indexOf(END_MARKER, start);
    if (end < 0) throw new Error("generated example block has no end marker");
    raw = raw.slice(0, start) + block + raw.slice(end + END_MARKER.length);
  } else {
    const templateStart = raw.indexOf("const NAMING_EXAMPLE_ROWS = `");
    if (templateStart < 0) throw new Error("NAMING_EXAMPLE_ROWS not found");
    const templateEnd = raw.indexOf("`;", templateStart);
    if (templateEnd < 0) throw new Error("NAMING_EXAMPLE_ROWS end not found");
    raw = raw.slice(0, templateEnd) + block + "\n" + raw.slice(templateEnd);
  }
  fs.writeFileSync(DATA_PATH, raw.replace(/\n/g, "\r\n"), "utf8");

  console.log("generated same-surname fills:", rows.length);
  console.log("combinations still without an example:", missing);
  console.log("corpus:", corpusPath);
}

main().catch(function (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
