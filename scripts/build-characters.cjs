#!/usr/bin/env node
"use strict";

// Generates the level-1 (3500 common characters) block in js/data.js.
// Sources are downloaded at build time and cached outside the repository.

const fs = require("fs");
const os = require("os");
const path = require("path");
const https = require("https");

const ROOT = path.resolve(__dirname, "..");
const DATA_PATH = path.join(ROOT, "js", "data.js");
const OVERRIDES_PATH = path.join(__dirname, "character-overrides.json");
const QA_PATH = path.join(ROOT, "outputs", "character-qa.json");
const CACHE_DIR = process.env.FINDNAME_CHAR_CACHE || path.join(os.tmpdir(), "findname-char-sources");

const START_MARKER = "# === GENERATED COMMON CHARACTERS START ===";
const END_MARKER = "# === GENERATED COMMON CHARACTERS END ===";

const SOURCES = {
  level1: {
    file: "gsc_level_1.txt",
    url: "https://raw.githubusercontent.com/ben-hua/general_standard_chinese/ec5f981f64027e89fcb536da12a9c7b6f8eb2d7e/gsc_level_1.txt",
    license: "Apache-2.0"
  },
  pinyin: {
    file: "gsc_pinyin_with_tone.csv",
    url: "https://raw.githubusercontent.com/ben-hua/general_standard_chinese/ec5f981f64027e89fcb536da12a9c7b6f8eb2d7e/gsc_pinyin_with_tone.csv",
    license: "Apache-2.0"
  },
  dictionary: {
    file: "word.json",
    url: "https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/fe6d6c2e8baa82187f4c96bbe042e43f96c05666/data/word.json",
    license: "MIT"
  },
  names: {
    file: "names.txt",
    url: "https://raw.githubusercontent.com/wainshine/Chinese-Names-Corpus/47d4af8d816f6212787ddfc49173cac3b994b58d/Chinese_Names_Corpus/Chinese_Names_Corpus%EF%BC%88120W%EF%BC%89.txt",
    license: "Apache-2.0"
  }
};

const IMAGERY_ORDER = [
  "mountain", "celestial", "flora", "water", "jade", "literary",
  "virtue", "warm", "cool", "strength", "season", "bird"
];

// Only unambiguous terms are listed here; noisy words (高、远、光、明、飞、
// 清、空 etc.) are omitted so a single incidental gloss word cannot decide a tag.
const TAG_KEYWORDS = {
  mountain: ["原野", "高峻", "巍峨", "山", "峰", "岭", "岩", "谷", "崖", "岳", "川", "丘", "陵", "峻", "崇", "岸", "洲", "屿"],
  celestial: ["天空", "宇宙", "光明", "光辉", "晴朗", "日", "月", "星", "辰", "天", "云", "霞", "霄", "曙", "旭", "晗", "晞"],
  flora: ["森林", "树林", "草木", "芬芳", "芙蓉", "梧桐", "花", "草", "叶", "枝", "根", "蕊", "芳", "兰", "竹", "松", "柏", "荷", "莲", "薇", "萱", "桐", "柳", "梅", "桃", "杏", "桂", "禾", "苗", "英", "菲", "芝", "芷", "芸", "榆", "棠", "樱", "梨", "穗", "苒", "芊", "茵", "茜", "萌", "茂", "葱", "郁"],
  water: ["江河", "海洋", "溪流", "清澈", "澄澈", "水", "江", "河", "湖", "海", "波", "浪", "泉", "溪", "流", "潮", "汐", "雨", "雪", "冰", "润", "涵", "沐", "湘", "洛", "沅", "沁", "澜", "漪", "洋", "涛", "涌", "浩", "淼", "潇", "泠", "沛", "湛", "汀", "泽"],
  jade: ["美玉", "宝石", "珍贵", "玉", "珠", "璧", "瑶", "瑾", "瑜", "琳", "琅", "璇", "琪", "琦", "珂", "瑞", "环", "佩", "珍", "宝", "琼", "瑄", "玥", "珩", "璟", "玹", "钰", "金", "银", "晶", "莹", "璀", "璨", "琥", "珀", "珊", "琮"],
  literary: ["文章", "诗书", "才华", "智慧", "聪明", "知识", "文", "书", "诗", "词", "章", "墨", "笔", "砚", "琴", "棋", "画", "韵", "律", "音", "歌", "赋", "篇", "典", "雅", "儒", "学", "辞", "咏", "吟", "诵", "籍", "简", "编"],
  virtue: ["品德", "高尚", "善良", "正直", "德", "仁", "义", "礼", "信", "忠", "孝", "廉", "诚", "善", "良", "贤", "淑", "贞", "静", "和", "谦", "恭", "敬", "慎", "勤", "俭", "让", "慈", "惠", "恩", "正", "直", "端", "操", "守", "品", "格", "怀", "襟", "度", "宽", "容", "恕", "恒", "毅", "勇", "志", "达", "弘", "康", "健", "卓", "逸", "坦", "朴", "淳"],
  warm: ["温暖", "快乐", "欢喜", "幸福", "安宁", "温", "暖", "柔", "煦", "熙", "悦", "欣", "怡", "恬", "馨", "甜", "亲", "爱", "安", "宁", "乐", "欢", "喜", "福", "吉", "祥", "畅", "舒", "泰", "平", "融"],
  cool: ["清冷", "幽静", "淡泊", "清", "冷", "寒", "凉", "冰", "雪", "霜", "露", "寂", "静", "幽", "淡", "素", "白", "皎", "皓", "邃", "玄"],
  strength: ["坚强", "力量", "雄伟", "壮志", "力", "强", "刚", "毅", "勇", "猛", "锐", "锋", "剑", "戈", "军", "武", "雄", "伟", "宏", "壮", "豪", "迈", "昂", "扬", "振", "兴", "坚", "定", "拓", "擎", "骁", "骏", "驰", "腾", "峥", "嵘"],
  season: ["四季", "时光", "春秋", "岁月", "春", "夏", "秋", "冬", "岁", "时", "晨", "夕", "晓", "暮", "朝", "昼", "夜", "季", "旦", "朔", "初", "元", "新"],
  bird: ["飞鸟", "凤凰", "鸿雁", "麒麟", "鸟", "凤", "凰", "鹤", "鸿", "雁", "燕", "莺", "鸥", "鹭", "鹃", "鹊", "鹏", "鹰", "鸾", "羽", "翼", "鹿", "麒", "麟", "龙", "骥"]
};

// Radicals are a weak fallback when the gloss has no keyword at all.
const RADICAL_TAGS = {
  "山": "mountain", "谷": "mountain", "丘": "mountain", "阜": "mountain", "土": "mountain",
  "石": "mountain", "田": "mountain", "原": "mountain", "阝": "mountain",
  "日": "celestial", "月": "celestial", "夕": "celestial", "辰": "celestial",
  "木": "flora", "艹": "flora", "艸": "flora", "竹": "flora", "禾": "flora",
  "米": "flora", "豆": "flora", "瓜": "flora",
  "水": "water", "氵": "water", "雨": "water", "川": "water", "泉": "water", "鱼": "water",
  "王": "jade", "玉": "jade", "金": "jade", "钅": "jade", "贝": "jade", "珠": "jade",
  "言": "literary", "讠": "literary", "文": "literary", "糸": "literary",
  "纟": "literary", "彡": "literary", "音": "literary", "页": "literary", "书": "literary",
  "心": "virtue", "忄": "virtue", "人": "virtue", "亻": "virtue", "子": "virtue",
  "女": "warm", "父": "warm", "母": "warm", "火": "warm", "灬": "warm",
  "光": "warm", "香": "warm", "甘": "warm", "食": "warm", "饣": "warm", "口": "warm",
  "冫": "cool",
  "刀": "strength", "刂": "strength", "力": "strength", "戈": "strength",
  "弓": "strength", "矢": "strength", "斤": "strength", "矛": "strength",
  "革": "strength", "韦": "strength", "车": "strength", "舟": "strength", "马": "strength",
  "鸟": "bird", "隹": "bird", "羽": "bird", "鹿": "bird", "龙": "bird", "龟": "bird", "虫": "bird",
  "气": "season", "风": "season", "时": "season"
};

const TONE_MARKS = {
  "\u0304": 1,
  "\u0301": 2,
  "\u030c": 3,
  "\u0300": 4
};

function download(url, dest) {
  return new Promise(function (resolve, reject) {
    const request = https.get(url, {
      headers: { "User-Agent": "findname-character-build", "Accept": "*/*" }
    }, function (response) {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume();
        download(response.headers.location, dest).then(resolve, reject);
        return;
      }
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error("HTTP " + response.statusCode + " for " + url));
        return;
      }
      const temp = dest + ".part";
      const output = fs.createWriteStream(temp);
      response.pipe(output);
      output.on("finish", function () {
        output.close(function () {
          fs.renameSync(temp, dest);
          resolve();
        });
      });
      output.on("error", reject);
    });
    request.on("error", reject);
  });
}

async function ensureSources() {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  for (const key of Object.keys(SOURCES)) {
    const source = SOURCES[key];
    const target = path.join(CACHE_DIR, source.file);
    if (fs.existsSync(target) && fs.statSync(target).size > 0) continue;
    process.stdout.write("Downloading " + key + "...\n");
    await download(source.url, target);
  }
  return {
    level1: path.join(CACHE_DIR, SOURCES.level1.file),
    pinyin: path.join(CACHE_DIR, SOURCES.pinyin.file),
    dictionary: path.join(CACHE_DIR, SOURCES.dictionary.file),
    names: path.join(CACHE_DIR, SOURCES.names.file)
  };
}

function parseCsvLine(line) {
  const out = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      out.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  out.push(current);
  return out;
}

function convertReading(raw) {
  const source = String(raw || "").trim().replace(/^·/, "");
  if (!source) return null;
  let tone = 0;
  let hasUmlaut = false;
  let base = "";
  const normalized = source.normalize("NFD");
  for (const ch of normalized) {
    if (TONE_MARKS[ch]) {
      tone = TONE_MARKS[ch];
      continue;
    }
    if (ch === "\u0308") {
      hasUmlaut = true;
      continue;
    }
    if (/[\u0300-\u036f]/.test(ch)) continue;
    base += ch.toLowerCase();
  }
  if (!tone || !base) return null;
  if (hasUmlaut) base = base.replace(/u/g, "v");
  if (!/^[a-zv]+$/.test(base)) return null;
  return base + tone;
}

function extractTemplate(source, name) {
  const re = new RegExp("const " + name + " = `([\\s\\S]*?)`;");
  const match = source.match(re);
  if (!match) throw new Error("Cannot find " + name + " in js/data.js");
  return {
    raw: match[1],
    index: match.index,
    fullLength: match[0].length
  };
}

function stripGenerated(raw) {
  const start = raw.indexOf(START_MARKER);
  if (start === -1) return raw;
  const end = raw.indexOf(END_MARKER, start);
  if (end === -1) throw new Error("Generated block start marker has no end marker");
  const before = raw.slice(0, start).replace(/\s+$/, "");
  const after = raw.slice(end + END_MARKER.length).replace(/^\s*/, "");
  return before + (after ? "\n" + after : "");
}

function parseCharRows(raw) {
  const rows = [];
  raw.split(/\r?\n/).forEach(function (line) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === "#") return;
    const parts = trimmed.split("|");
    if (parts.length < 4) return;
    const char = parts[0].trim();
    const pinyin = parts[1].trim();
    if (!char || !/^[a-zv]+[1-4]$/.test(pinyin)) return;
    rows.push({
      char: char,
      pinyin: pinyin,
      meaning: parts[2].trim(),
      tags: parts[3].split(",").map(function (tag) { return tag.trim(); }).filter(Boolean),
      raw: trimmed
    });
  });
  return rows;
}

function parseSurnameRows(raw) {
  const result = [];
  raw.split(/\r?\n/).forEach(function (line) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === "#") return;
    const parts = trimmed.split("|");
    if (parts.length >= 2 && parts[0].trim()) result.push(parts[0].trim());
  });
  return result;
}

function loadReadings(file) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean);
  const byChar = new Map();
  const stats = { rows: lines.length - 1, readings: 0, skipped: 0, invalid: 0 };
  for (const line of lines.slice(1)) {
    const cols = parseCsvLine(line);
    if (cols.length < 3) continue;
    const char = cols[1].trim();
    if (!char) continue;
    const rawReadings = cols[2].split(",");
    for (const raw of rawReadings) {
      const reading = convertReading(raw);
      if (!reading) {
        stats.skipped += 1;
        if (raw.trim()) stats.invalid += 1;
        continue;
      }
      let list = byChar.get(char);
      if (!list) {
        list = [];
        byChar.set(char, list);
      }
      if (list.indexOf(reading) === -1) {
        list.push(reading);
        stats.readings += 1;
      }
    }
  }
  byChar.forEach(function (list) {
    list.sort(function (a, b) {
      const aMatch = /^([a-zv]+)([1-4])$/.exec(a);
      const bMatch = /^([a-zv]+)([1-4])$/.exec(b);
      return aMatch[1].localeCompare(bMatch[1]) || Number(aMatch[2]) - Number(bMatch[2]);
    });
  });
  return { byChar: byChar, stats: stats };
}

function loadDictionary(file) {
  const entries = JSON.parse(fs.readFileSync(file, "utf8"));
  const byChar = new Map();
  for (const entry of entries) {
    if (!entry || !entry.word) continue;
    if (!byChar.has(entry.word)) byChar.set(entry.word, entry);
  }
  return byChar;
}

function countGivenChars(file, singleSurnames, compoundSurnames) {
  const single = new Set(singleSurnames);
  const compound = new Set(compoundSurnames);
  const frequency = new Map();
  let names = 0;
  let skipped = 0;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const name = line.trim();
    if (!name) continue;
    if (!/^[\u4e00-\u9fff]+$/.test(name)) {
      skipped += 1;
      continue;
    }
    const chars = Array.from(name);
    let surnameLength = 0;
    if (chars.length >= 3 && compound.has(chars[0] + chars[1])) {
      surnameLength = 2;
    } else if (single.has(chars[0])) {
      surnameLength = 1;
    }
    if (!surnameLength) {
      skipped += 1;
      continue;
    }
    const given = chars.slice(surnameLength);
    if (!given.length) continue;
    names += 1;
    new Set(given).forEach(function (ch) {
      frequency.set(ch, (frequency.get(ch) || 0) + 1);
    });
  }
  return { frequency: frequency, names: names, skipped: skipped };
}

const MODERN_MARKER_FAMILIES = [
  ["⒈", "⒉", "⒊", "⒋", "⒌", "⒍", "⒎", "⒏", "⒐", "⒑"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"]
];

function findModernSenses(text) {
  const normalized = String(text || "").replace(/\r/g, "");
  let chosen = null;
  let chosenLast = -1;
  MODERN_MARKER_FAMILIES.forEach(function (family) {
    let last = -1;
    family.forEach(function (marker) {
      const index = normalized.lastIndexOf(marker);
      if (index > last) last = index;
    });
    if (last > chosenLast) {
      chosenLast = last;
      chosen = family;
    }
  });
  if (!chosen || chosenLast === -1) return [];

  const other = MODERN_MARKER_FAMILIES.filter(function (family) { return family !== chosen; })[0];
  const positions = [];
  chosen.forEach(function (marker, order) {
    const index = normalized.lastIndexOf(marker);
    if (index !== -1) positions.push({ index: index, order: order });
  });
  positions.sort(function (a, b) { return a.index - b.index; });

  // Keep the trailing contiguous run of this marker family; earlier senses often
  // belong to an older, more literary section of the entry.
  let runStart = positions.length - 1;
  while (runStart > 0) {
    const previous = positions[runStart - 1];
    const between = normalized.slice(previous.index, positions[runStart].index);
    if (other.some(function (marker) { return between.indexOf(marker) !== -1; })) break;
    runStart -= 1;
  }
  const run = positions.slice(runStart);
  if (!run.length) return [];

  const senses = [];
  run.forEach(function (position, order) {
    const start = position.index + chosen[position.order].length;
    let end = order + 1 < run.length ? run[order + 1].index : normalized.length;
    const compound = normalized.indexOf("【", start);
    if (compound !== -1 && compound < end) end = compound;
    const raw = normalized.slice(start, end);
    const value = cleanGlossText(raw, "");
    if (value && Array.from(value).length >= 1) senses.push(value);
  });
  return senses;
}

function cleanGlossText(value, char) {
  let text = String(value || "").replace(/\s+/g, " ").trim();
  text = text.replace(/^[◇◆△▲*]+\s*/, "");
  text = text.replace(/^通.{0,4}[”"]。[，,、]?/, "");
  text = text.replace(/^(引申为|引申指|泛指|比喻|借指|转指|形容)+/, "");
  text = text.replace(/\[[^\]]{0,20}\]/g, "");
  text = text.replace(/［[^］]{0,20}］/g, "");
  text = text.replace(/[（(][^）)]{0,40}[）)]/g, "");
  text = text.replace(/〈[^〉]{0,8}〉/g, "");
  text = text.replace(/["“”'']/g, "");
  text = text.split("。如")[0].split("；如")[0];
  text = text.replace(/,/g, "，").replace(/;/g, "；");
  text = text.replace(/^[\s:：,，。;；、]+/, "");
  text = text.replace(/[。；;]+$/, "");
  if (char) {
    const tilde = text.indexOf("～");
    if (tilde !== -1) text = text.slice(0, tilde);
  }
  if (Array.from(text).length > 20) {
    const clauses = text.split(/[，,；;。]/).map(function (part) { return part.trim(); }).filter(Boolean);
    if (clauses.length && Array.from(clauses[0]).length >= 4) text = clauses[0];
  }
  if (Array.from(text).length > 26) text = Array.from(text).slice(0, 26).join("");
  return text.trim();
}

function extractMoreGloss(entry) {
  if (!entry || !entry.more) return "";
  const lines = String(entry.more).replace(/\r/g, "").split(/\n+/);
  const candidates = [];
  for (const line of lines) {
    const match = line.match(/^(.+?)\s*\[([a-zA-Z][^\[\]]*)\](.*)$/);
    if (!match) continue;
    let core = match[1].trim().replace(/^同本义/, "").trim();
    if (!core && match[3]) core = match[3].trim();
    if (!core) continue;
    core = cleanGlossText(core, "");
    const length = Array.from(core).length;
    if (length < 2) continue;
    if (/本义|同.{0,3}义|^声。|\)$|^字本作/.test(core)) continue;
    if (/^(姓|见|参见|古|古代|古时|旧时|一种|用于|量词|译音|人名|地名|简称)$/.test(core)) continue;
    candidates.push(core);
  }
  if (!candidates.length) return "";
  const first = candidates[0];
  if (Array.from(first).length > 16) {
    const shorter = candidates.slice(1, 6).find(function (item) {
      return Array.from(item).length <= 14;
    });
    if (shorter) return shorter;
  }
  return first;
}

function pickDefinitionParagraph(text) {
  const paragraphs = String(text || "")
    .replace(/\r/g, "")
    .split(/\n+/)
    .map(function (part) { return part.trim(); })
    .filter(Boolean);
  for (const paragraph of paragraphs) {
    if (/^[（(〈<]/.test(paragraph)) continue;
    if (/本义|^同本义|^引申|^又如|^注|--|《|》/.test(paragraph)) continue;
    if (/[A-Za-z0-9]/.test(paragraph)) continue;
    const length = Array.from(paragraph).length;
    if (length < 2 || length > 16) continue;
    if (/[，,。；;]$/.test(paragraph)) continue;
    return paragraph;
  }
  return "";
}

function pickGlossCandidate(text, char) {
  const normalized = String(text || "").replace(/\r/g, "");
  const senses = findModernSenses(normalized);
  if (senses.length) {
    const clean = cleanGlossText(senses[0], char);
    if (clean) return clean;
  }
  const paragraph = pickDefinitionParagraph(normalized);
  if (paragraph) return paragraph;
  const original = normalized.match(/本义[：:]?\s*([\s\S]{1,80}?)(?:[)）]|。|$)/);
  if (original) return original[1];
  return "";
}

function extractGloss(entry, char) {
  if (!entry) return "";
  const fromMore = cleanGlossText(extractMoreGloss(entry), char);
  if (fromMore && fromMore !== char) return fromMore;
  const fallback = cleanGlossText(pickGlossCandidate(entry.explanation, char), char);
  if (fallback && fallback !== char) return fallback;
  return "";
}

function parseDictionaryReadings(entry) {
  if (!entry || !entry.pinyin) return [];
  const parts = String(entry.pinyin)
    .replace(/ɡ/g, "g")
    .replace(/[（）()]/g, " ")
    .split(/[,，、;；\s]+/)
    .map(function (part) { return part.trim(); })
    .filter(Boolean);
  const result = [];
  parts.forEach(function (part) {
    const reading = convertReading(part);
    if (reading && result.indexOf(reading) === -1) result.push(reading);
  });
  return result;
}

function generateTags(meaning, radical, char) {
  const text = meaning || "";
  const radicalTag = radical ? RADICAL_TAGS[radical] : "";
  const scores = [];
  Object.keys(TAG_KEYWORDS).forEach(function (id) {
    let score = 0;
    TAG_KEYWORDS[id].forEach(function (word) {
      if (text.indexOf(word) !== -1) score += word.length >= 2 ? 2 : 1;
    });
    if (radicalTag === id) score += 2;
    if (score > 0) scores.push({ id: id, score: score });
  });
  scores.sort(function (a, b) {
    return b.score - a.score ||
      IMAGERY_ORDER.indexOf(a.id) - IMAGERY_ORDER.indexOf(b.id);
  });
  const tags = scores
    .filter(function (item) { return item.score >= 2; })
    .slice(0, 3)
    .map(function (item) { return item.id; });
  if (!tags.length && radicalTag) tags.push(radicalTag);
  if (!tags.length) tags.push("virtue");
  return tags;
}

function sanitizeField(value) {
  return String(value || "")
    .replace(/\|/g, "／")
    .replace(/`/g, "'")
    .replace(/\$\{/g, "$ {")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTags(tags) {
  const result = [];
  (tags || []).forEach(function (tag) {
    if (IMAGERY_ORDER.indexOf(tag) !== -1 && result.indexOf(tag) === -1 && result.length < 3) {
      result.push(tag);
    }
  });
  return result;
}

async function main() {
  const sources = await ensureSources();
  const source = fs.readFileSync(DATA_PATH, "utf8");
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, "utf8"));

  const charBlock = extractTemplate(source, "CHAR_ROWS");
  const baseRaw = stripGenerated(charBlock.raw);
  const existingRows = parseCharRows(baseRaw);
  if (existingRows.length !== 465) {
    throw new Error("Expected 465 curated character rows, found " + existingRows.length);
  }
  const existingByChar = new Map();
  const existingKeys = new Set();
  existingRows.forEach(function (row) {
    if (!existingByChar.has(row.char)) existingByChar.set(row.char, []);
    existingByChar.get(row.char).push(row);
    existingKeys.add(row.char + "|" + row.pinyin);
  });

  const level1 = fs.readFileSync(sources.level1, "utf8")
    .split(/\r?\n/)
    .map(function (line) { return line.trim().split(/\s+/)[1]; })
    .filter(Boolean);
  const level1Set = new Set(level1);
  if (level1.length !== 3500 || level1Set.size !== 3500) {
    throw new Error("Level-1 list must contain 3500 unique characters, found " +
      level1.length + " / " + level1Set.size);
  }

  const pinyin = loadReadings(sources.pinyin);
  const missingPinyin = level1.filter(function (ch) { return !pinyin.byChar.has(ch); });
  if (missingPinyin.length) {
    throw new Error("Level-1 characters without pinyin: " + missingPinyin.join(""));
  }

  const dictionary = loadDictionary(sources.dictionary);
  const missingDictionary = level1.filter(function (ch) { return !dictionary.has(ch); });

  const surnameBlock = extractTemplate(source, "SURNAME_ROWS");
  const compoundBlock = extractTemplate(source, "COMPOUND_SURNAME_ROWS");
  const surnameStats = countGivenChars(
    sources.names,
    parseSurnameRows(surnameBlock.raw),
    parseSurnameRows(compoundBlock.raw)
  );

  const blockSet = new Set();
  (overrides.blocklist || []).forEach(function (group) {
    Array.from(group).forEach(function (ch) {
      if (/[\u4e00-\u9fff]/.test(ch)) blockSet.add(ch);
    });
  });
  const allowSet = new Set(overrides.allow || []);
  const denySet = new Set(overrides.deny || []);
  const charOverrides = overrides.chars || {};
  const readingOverrides = overrides.readings || {};
  const threshold = Number(overrides.nameableThreshold || 20);

  const unionChars = [];
  const unionSet = new Set();
  level1.forEach(function (ch) {
    if (!unionSet.has(ch)) { unionSet.add(ch); unionChars.push(ch); }
  });
  existingRows.forEach(function (row) {
    if (!unionSet.has(row.char)) { unionSet.add(row.char); unionChars.push(row.char); }
  });

  const nameableByChar = new Map();
  const lowPriorityByChar = new Map();
  unionChars.forEach(function (ch) {
    const override = charOverrides[ch] || {};
    const frequent = (surnameStats.frequency.get(ch) || 0) >= threshold;
    let nameable = true;
    let lowPriority = existingByChar.has(ch)
      ? false
      : (!frequent || blockSet.has(ch) || denySet.has(ch));
    if (allowSet.has(ch)) {
      nameable = true;
      lowPriority = false;
    }
    if (override.nameable === true) nameable = true;
    if (override.nameable === false) nameable = false;
    if (override.lowPriority === true) lowPriority = true;
    if (override.lowPriority === false) lowPriority = false;
    nameableByChar.set(ch, nameable);
    lowPriorityByChar.set(ch, lowPriority);
  });

  const generated = [];
  const warnings = [];
  const emptyGlossNameable = [];
  const fallbackTagRows = [];
  const readingStats = { generated: 0, nameable: 0, nonNameable: 0, lowPriority: 0 };

  unionChars.forEach(function (ch) {
    const curated = existingByChar.get(ch) || [];
    const curatedReadings = new Set(curated.map(function (row) { return row.pinyin; }));
    let readings = pinyin.byChar.get(ch) || [];
    if (!readings.length) {
      readings = curated.map(function (row) { return row.pinyin; });
    }
    if (!readings.length) {
      warnings.push("No readings for " + ch);
      return;
    }
    const dictionaryEntry = dictionary.get(ch);
    const primaryReadings = parseDictionaryReadings(dictionaryEntry);
    readings.forEach(function (reading) {
      if (curatedReadings.has(reading)) return;
      const key = ch + "|" + reading;
      if (existingKeys.has(key)) return;

      const readingOverride = readingOverrides[key] || {};
      const charOverride = charOverrides[ch] || {};
      let nameable;
      if (readingOverride.nameable === true) nameable = true;
      else if (readingOverride.nameable === false) nameable = false;
      else if (existingByChar.has(ch)) nameable = false;
      else if (!nameableByChar.get(ch)) nameable = false;
      else if (primaryReadings.length) nameable = primaryReadings.indexOf(reading) !== -1;
      else nameable = reading === readings[0];
      let lowPriority = nameable && (
        readingOverride.lowPriority === true ||
        (readingOverride.lowPriority !== false && lowPriorityByChar.get(ch))
      );

      let meaning = readingOverride.meaning || charOverride.meaning || extractGloss(dictionaryEntry, ch);
      meaning = sanitizeField(meaning);
      if (!meaning) {
        meaning = "—";
        if (nameable) emptyGlossNameable.push(key);
      }

      let tags = [];
      if (nameable) {
        tags = normalizeTags(readingOverride.tags || charOverride.tags);
        if (!tags.length) {
          const radical = dictionaryEntry && dictionaryEntry.radicals ? Array.from(dictionaryEntry.radicals)[0] : "";
          tags = generateTags(meaning, radical, ch);
          if (tags.length === 1 && tags[0] === "virtue") fallbackTagRows.push(key);
        }
        tags = normalizeTags(tags);
        if (!tags.length) tags = ["virtue"];
      }

      if (!nameable) lowPriority = false;

      generated.push({
        char: ch,
        pinyin: reading,
        meaning: meaning,
        tags: tags,
        nameable: nameable,
        lowPriority: lowPriority
      });
      readingStats.generated += 1;
      if (nameable) readingStats.nameable += 1;
      else readingStats.nonNameable += 1;
      if (lowPriority) readingStats.lowPriority += 1;
    });
  });

  generated.sort(function (a, b) {
    return a.pinyin.localeCompare(b.pinyin, "en") ||
      a.char.localeCompare(b.char, "zh");
  });

  const generatedLines = generated.map(function (row) {
    const base = [row.char, row.pinyin, row.meaning, row.tags.join(",")];
    if (!row.nameable) return base.concat("false").join("|");
    if (row.lowPriority) return base.concat("low").join("|");
    return base.join("|");
  });

  const baseBody = baseRaw.replace(/^\s+/, "").replace(/\s+$/, "");
  const newRaw = "\n" + baseBody + "\n" + START_MARKER + "\n" +
    generatedLines.join("\n") + "\n" + END_MARKER + "\n";
  const newSource = source.slice(0, charBlock.index) +
    "const CHAR_ROWS = `" + newRaw + "`;" +
    source.slice(charBlock.index + charBlock.fullLength);

  const allKeys = new Set(existingKeys);
  generated.forEach(function (row) {
    const key = row.char + "|" + row.pinyin;
    if (allKeys.has(key)) warnings.push("Duplicate row " + key);
    allKeys.add(key);
  });

  const nameableRows = generated.filter(function (row) { return row.nameable; });
  const nameableChars = new Set(nameableRows.map(function (row) { return row.char; }));
  existingRows.forEach(function (row) {
    if (nameableByChar.get(row.char)) nameableChars.add(row.char);
  });
  const lowPriorityRows = generated.filter(function (row) { return row.lowPriority; });
  const lowPriorityChars = new Set(lowPriorityRows.map(function (row) { return row.char; }));
  const tagCoverage = nameableRows.length
    ? nameableRows.filter(function (row) { return row.tags.length > 0; }).length / nameableRows.length
    : 1;
  const validTags = generated.every(function (row) {
    return row.tags.every(function (tag) { return IMAGERY_ORDER.indexOf(tag) !== -1; });
  });
  if (!validTags) throw new Error("Generated an unknown imagery tag");

  const blocklistedExisting = Array.from(blockSet).filter(function (ch) {
    return existingByChar.has(ch);
  });

  const qa = {
    generatedAt: new Date().toISOString(),
    sources: Object.keys(SOURCES).reduce(function (acc, key) {
      acc[key] = { url: SOURCES[key].url, license: SOURCES[key].license };
      return acc;
    }, {}),
    stats: {
      level1: level1.length,
      existingRows: existingRows.length,
      unionChars: unionChars.length,
      unionInLevel1: unionChars.filter(function (ch) { return level1Set.has(ch); }).length,
      generatedRows: generated.length,
      totalRows: existingRows.length + generated.length,
      nameableRows: nameableRows.length,
      nameableChars: nameableChars.size,
      lowPriorityRows: lowPriorityRows.length,
      lowPriorityChars: lowPriorityChars.size,
      nonNameableRows: readingStats.nonNameable,
      tagCoverage: Number(tagCoverage.toFixed(4)),
      pinyinRows: pinyin.stats.rows,
      pinyinReadings: pinyin.stats.readings,
      pinyinSkipped: pinyin.stats.skipped,
      namesCorpusNames: surnameStats.names,
      namesCorpusSkipped: surnameStats.skipped,
      missingDictionary: missingDictionary.length
    },
    warnings: warnings,
    missingDictionaryCharacters: missingDictionary,
    emptyGlossNameable: emptyGlossNameable,
    fallbackTagRows: fallbackTagRows.slice(0, 200),
    fallbackTagCount: fallbackTagRows.length,
    blocklistedExisting: blocklistedExisting,
    lowPrioritySamples: lowPriorityRows.slice(0, 40).map(function (row) {
      return row.char + "|" + row.pinyin + "|" + row.meaning + "|" + row.tags.join(",");
    }),
    nameableSamples: nameableRows.slice(0, 40).map(function (row) {
      return row.char + "|" + row.pinyin + "|" + row.meaning + "|" + row.tags.join(",");
    }),
    nonNameableSamples: generated.filter(function (row) { return !row.nameable; }).slice(0, 30).map(function (row) {
      return row.char + "|" + row.pinyin + "|" + row.meaning;
    })
  };

  fs.mkdirSync(path.dirname(QA_PATH), { recursive: true });
  fs.writeFileSync(QA_PATH, JSON.stringify(qa, null, 2) + "\n", "utf8");
  fs.writeFileSync(DATA_PATH, newSource, "utf8");

  console.log("Wrote " + DATA_PATH);
  console.log("Wrote " + QA_PATH);
  console.log(JSON.stringify(qa.stats, null, 2));
  if (emptyGlossNameable.length) {
    console.log("Empty gloss for nameable rows: " + emptyGlossNameable.length);
  }
  if (blocklistedExisting.length) {
    console.log("Blocklist chars already curated (kept): " + blocklistedExisting.join(""));
  }
}

main().catch(function (error) {
  console.error(error);
  process.exit(1);
});
