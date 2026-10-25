"use strict";

const assert = require("assert");

global.window = {};
require("../js/data.js");
require("../js/engine.js");

const DATA = window.NameData;
const ENGINE = window.NameEngine;

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log("PASS " + name);
  } catch (error) {
    failed += 1;
    console.error("FAIL " + name);
    console.error(error && error.stack ? error.stack : error);
  }
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return function () {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function findSyllableOption(surname, givenTones, first, second) {
  const options = ENGINE.buildSyllableOptions(surname.syllables, givenTones, { limit: 20000 });
  return options.find(function (option) {
    return option.givenSyllables[0].syllable === first &&
      option.givenSyllables[1].syllable === second;
  });
}

test("data: character rows are unique and tagged", function () {
  assert(DATA.characters.length >= 400);
  const validTags = new Set(DATA.imagery.map(function (item) { return item.id; }));
  const seen = new Set();
  DATA.characters.forEach(function (entry) {
    assert(/^[a-zv]+$/.test(entry.syllable), entry.char + " syllable");
    assert(entry.tone >= 1 && entry.tone <= 4, entry.char + " tone");
    assert(!seen.has(entry.char + entry.pinyin), "duplicate " + entry.char + entry.pinyin);
    seen.add(entry.char + entry.pinyin);
    assert(entry.tags.length > 0, entry.char + " tags");
    entry.tags.forEach(function (tag) {
      assert(validTags.has(tag), entry.char + " invalid tag " + tag);
    });
  });
});

test("data: surnames and compounds parse", function () {
  assert(Object.keys(DATA.surnames).length > 350);
  assert(Object.keys(DATA.compoundSurnames).length > 50);
  Object.keys(DATA.surnames).forEach(function (name) {
    assert.strictEqual(Array.from(name).length, 1, name);
    assert(ENGINE.parseTonePinyin(DATA.surnames[name][0]), name);
  });
  Object.keys(DATA.compoundSurnames).forEach(function (name) {
    const pinyins = DATA.compoundSurnames[name];
    assert.strictEqual(Array.from(name).length, pinyins.length, name);
    pinyins.forEach(function (pinyin) {
      assert(ENGINE.parseTonePinyin(pinyin), name + " " + pinyin);
    });
  });
  DATA.commonSurnames.forEach(function (name) {
    assert(DATA.surnames[name], name);
  });
});

test("pinyin tone marks", function () {
  const cases = {
    zhang1: "zhāng",
    yu3: "yǔ",
    lv4: "lǜ",
    liu2: "liú",
    gui4: "guì",
    xue3: "xuě",
    shui3: "shuǐ",
    ou1: "ōu",
    yue4: "yuè",
    lve4: "lüè"
  };
  Object.keys(cases).forEach(function (raw) {
    assert.strictEqual(ENGINE.displaySyllable(ENGINE.parseTonePinyin(raw)), cases[raw]);
  });
});

test("resolve common, compound and manual surnames", function () {
  const zhang = ENGINE.resolveSurname("张");
  assert(zhang.ok);
  assert.strictEqual(zhang.pinyin, "zhāng");
  assert.deepStrictEqual(zhang.tones, [1]);

  const ouyang = ENGINE.resolveSurname("欧阳");
  assert(ouyang.ok);
  assert.strictEqual(ouyang.syllables.length, 2);
  assert.strictEqual(ouyang.pinyin, "ōu yáng");

  const ou = ENGINE.resolveSurname("区");
  assert(ou.ok);
  assert.strictEqual(ou.pinyin, "ōu");

  const unknown = ENGINE.resolveSurname("雒");
  assert(!unknown.ok);
  assert(unknown.manualAllowed);

  const manual = ENGINE.resolveSurname("雒", "luo4");
  assert(manual.ok);
  assert.strictEqual(manual.pinyin, "luò");

  assert(!ENGINE.resolveSurname("雒", "bad").ok);
  assert(!ENGINE.resolveSurname("").ok);
});

test("tone options: counts, ranges and sort order", function () {
  const zhang = ENGINE.resolveSurname("张");
  const double = ENGINE.buildToneOptions(zhang.syllables, 2);
  const single = ENGINE.buildToneOptions(zhang.syllables, 1);
  assert.strictEqual(double.length, 16);
  assert.strictEqual(single.length, 4);
  [double, single].forEach(function (list) {
    for (let i = 0; i < list.length; i += 1) {
      assert(list[i].score >= 45 && list[i].score <= 98);
      if (i > 0) assert(list[i - 1].score >= list[i].score);
      list[i].givenTones.forEach(function (tone) {
        assert(tone >= 1 && tone <= 4);
      });
    }
  });

  const ouyang = ENGINE.resolveSurname("欧阳");
  const compoundOptions = ENGINE.buildToneOptions(ouyang.syllables, 2);
  assert.strictEqual(compoundOptions[0].fullTones.length, 4);
});

test("syllable options: tone matching, ranking and search coverage", function () {
  const zhang = ENGINE.resolveSurname("张");
  const options = ENGINE.buildSyllableOptions(zhang.syllables, [3, 2], { limit: 20000 });
  assert(options.length > 100);
  for (let i = 0; i < 50; i += 1) {
    assert(options[i].score >= 50 && options[i].score <= 97);
    if (i > 0) assert(options[i - 1].score >= options[i].score);
    assert.strictEqual(options[i].givenSyllables[0].tone, 3);
    assert.strictEqual(options[i].givenSyllables[1].tone, 2);
  }

  const yongLing = options.find(function (option) {
    return option.givenSyllables[0].syllable === "yong" &&
      option.givenSyllables[1].syllable === "ling";
  });
  assert(yongLing);
  const poolChars = DATA.bySyllableTone.yong3.concat(DATA.bySyllableTone.ling2)
    .map(function (entry) { return entry.char; }).join("");
  poolChars.split("").forEach(function (char) {
    assert(yongLing.searchText.indexOf(char) !== -1, "search missing " + char);
  });

  const qingYu = findSyllableOption(zhang, [1, 4], "qing", "yu");
  assert(qingYu, "qing yu should exist");
  assert.strictEqual(qingYu.givenPinyin, "qīng yù");
});

test("imagery availability covers every category", function () {
  const zhang = ENGINE.resolveSurname("张");
  const option = findSyllableOption(zhang, [1, 4], "qing", "yu");
  const availability = ENGINE.imageryAvailability(option.givenSyllables);
  assert.strictEqual(availability.length, DATA.imagery.length);
  availability.forEach(function (item) {
    assert.strictEqual(item.perPosition.length, 2);
    assert(item.characterCount >= 0);
    assert(item.combinations >= 0);
  });
});

test("naming examples cover every tone pattern", function () {
  assert.strictEqual(DATA.namingExamples.length, 60);
  const validTypes = new Set(["史", "文", "诗"]);
  DATA.namingExamples.forEach(function (example) {
    const tokens = example.pinyin.split(/\s+/);
    assert.strictEqual(tokens.length, Array.from(example.given).length, example.given);
    tokens.forEach(function (token) {
      assert(ENGINE.parseTonePinyin(token), example.given + " " + token);
    });
    assert(validTypes.has(example.type), example.given + " type");
    assert(example.origin, example.given + " origin");
    assert(example.note, example.given + " note");
    assert.strictEqual(!!example.surname, !!example.surnamePinyin,
      example.given + " surname fields must pair");
    if (example.surname) {
      const expected = DATA.surnames[example.surname] ||
        DATA.compoundSurnames[example.surname];
      assert(expected, example.surname + " is not a known surname");
      assert.deepStrictEqual(expected.slice(), example.surnamePinyin.split(/\s+/),
        example.surname + " pinyin must match surname data");
    }
  });

  for (let tone = 1; tone <= 4; tone += 1) {
    const single = ENGINE.getNamingExamples([tone], 1, 3);
    assert.strictEqual(single.length, 3, "single tone " + tone);
    single.forEach(function (example) {
      assert.strictEqual(example.length, 1);
      assert.strictEqual(example.tones[0], tone);
    });
  }

  for (let first = 1; first <= 4; first += 1) {
    for (let second = 1; second <= 4; second += 1) {
      const examples = ENGINE.getNamingExamples([first, second], 2, 3);
      assert.strictEqual(examples.length, 3, "double tones " + first + second);
      examples.forEach(function (example) {
        assert.strictEqual(example.length, 2);
        assert.deepStrictEqual(example.tones, [first, second]);
        assert(example.pinyinDisplay.length > 0);
      });
    }
  }
});

test("surname examples require the exact same surname", function () {
  const xue = ENGINE.resolveSurname("薛");
  const baoChai = ENGINE.getSurnameExamples(xue, [3, 1], 2, 3);
  assert.strictEqual(baoChai.length, 1);
  assert.strictEqual(baoChai[0].fullName, "薛宝钗");
  assert.strictEqual(baoChai[0].fullPinyinDisplay, "xuē bǎo chāi");

  const wang = ENGINE.resolveSurname("王");
  assert.deepStrictEqual(ENGINE.getSurnameExamples(wang, [3, 1], 2, 3), []);

  const zhang = ENGINE.resolveSurname("张");
  const ziFang = ENGINE.getSurnameExamples(zhang, [3, 2], 2, 3);
  assert.strictEqual(ziFang.length, 1);
  assert.strictEqual(ziFang[0].fullName, "张子房");
  assert.strictEqual(ziFang[0].fullPinyinDisplay, "zhāng zǐ fáng");

  const sima = ENGINE.resolveSurname("司马");
  const xiangRu = ENGINE.getSurnameExamples(sima, [4, 2], 2, 3);
  assert.strictEqual(xiangRu.length, 1);
  assert.strictEqual(xiangRu[0].fullName, "司马相如");
  assert.strictEqual(xiangRu[0].fullPinyinDisplay, "sī mǎ xiàng rú");

  assert.deepStrictEqual(ENGINE.getSurnameExamples(null, [3, 1], 2, 3), []);
});

test("double-character recommendations are coherent", function () {
  const zhang = ENGINE.resolveSurname("张");
  const toneOption = ENGINE.buildToneOptions(zhang.syllables, 2)
    .find(function (option) { return option.givenTones.join("") === "14"; });
  const syllableOption = findSyllableOption(zhang, toneOption.givenTones, "qing", "yu");
  const result = ENGINE.recommendNames({
    surname: zhang,
    givenSyllables: syllableOption.givenSyllables,
    toneOption: toneOption,
    syllableOption: syllableOption,
    imageryIds: ["water", "jade", "literary"],
    count: 6,
    exclude: {},
    random: seededRandom(42)
  });
  assert(result.names.length > 0);
  assert.strictEqual(new Set(result.names.map(function (name) { return name.name; })).size, result.names.length);
  result.names.forEach(function (name) {
    assert(name.name.indexOf("张") === 0);
    assert.strictEqual(Array.from(name.name).length, 3);
    assert.strictEqual(name.chars.length, 2);
    assert(name.chars[0].char !== name.chars[1].char);
    assert(name.score >= 50 && name.score <= 98);
    assert(name.imageryTags.length >= 0);
    assert(ENGINE.BLOCKED_NAMES.indexOf(name.name) === -1);
    name.chars.forEach(function (detail, index) {
      const given = syllableOption.givenSyllables[index];
      const pool = DATA.bySyllableTone[given.syllable + given.tone];
      assert(pool.some(function (entry) { return entry.char === detail.char; }),
        detail.char + " does not belong to " + given.syllable + given.tone);
    });
  });
  const names = new Set(result.names.map(function (name) { return name.name; }));
  const excluded = {};
  names.forEach(function (name) { excluded[name] = true; });
  const second = ENGINE.recommendNames({
    surname: zhang,
    givenSyllables: syllableOption.givenSyllables,
    toneOption: toneOption,
    syllableOption: syllableOption,
    imageryIds: ["water", "jade", "literary"],
    count: 6,
    exclude: excluded,
    random: seededRandom(77)
  });
  second.names.forEach(function (name) {
    assert(!names.has(name.name), "excluded name repeated: " + name.name);
  });
});

test("single-character recommendations work", function () {
  const li = ENGINE.resolveSurname("李");
  const toneOption = ENGINE.buildToneOptions(li.syllables, 1)[0];
  const options = ENGINE.buildSyllableOptions(li.syllables, toneOption.givenTones);
  const result = ENGINE.recommendNames({
    surname: li,
    givenSyllables: options[0].givenSyllables,
    toneOption: toneOption,
    syllableOption: options[0],
    imageryIds: ["virtue"],
    count: 4,
    exclude: {},
    random: seededRandom(11)
  });
  assert(result.names.length > 0);
  result.names.forEach(function (name) {
    assert.strictEqual(Array.from(name.name).length, 2);
    assert.strictEqual(name.chars.length, 1);
  });
});

test("compound surname recommendations work", function () {
  const surname = ENGINE.resolveSurname("欧阳");
  const toneOption = ENGINE.buildToneOptions(surname.syllables, 2)[0];
  const options = ENGINE.buildSyllableOptions(surname.syllables, toneOption.givenTones);
  const result = ENGINE.recommendNames({
    surname: surname,
    givenSyllables: options[0].givenSyllables,
    toneOption: toneOption,
    syllableOption: options[0],
    imageryIds: ["literary"],
    count: 4,
    exclude: {},
    random: seededRandom(5)
  });
  assert(result.names.length > 0);
  result.names.forEach(function (name) {
    assert(name.name.indexOf("欧阳") === 0);
    assert.strictEqual(Array.from(name.name).length, 4);
  });
});

test("fifty randomized recommendation scenarios do not crash", function () {
  const surnames = ["张", "李", "王", "陈", "欧阳", "司马"];
  const imagery = DATA.imagery.map(function (item) { return item.id; });
  const rng = seededRandom(20261024);
  for (let i = 0; i < 50; i += 1) {
    const surname = ENGINE.resolveSurname(surnames[Math.floor(rng() * surnames.length)]);
    const length = i % 2 === 0 ? 2 : 1;
    const toneOption = ENGINE.buildToneOptions(surname.syllables, length)[Math.floor(rng() * (length === 2 ? 16 : 4))];
    const options = ENGINE.buildSyllableOptions(surname.syllables, toneOption.givenTones);
    assert(options.length > 0);
    const option = options[Math.floor(rng() * Math.min(options.length, 40))];
    const chosenImagery = imagery.filter(function () { return rng() < 0.15; }).slice(0, 3);
    const result = ENGINE.recommendNames({
      surname: surname,
      givenSyllables: option.givenSyllables,
      toneOption: toneOption,
      syllableOption: option,
      imageryIds: chosenImagery,
      count: 6,
      exclude: {},
      random: rng
    });
    assert(result.names.length > 0, "no names for " + surname.text + " " + option.givenPinyin);
    result.names.forEach(function (name) {
      assert.strictEqual(Array.from(name.name).length,
        surname.syllables.length + length, name.name);
      assert(name.score >= 50 && name.score <= 98);
    });
  }
});

console.log("\n" + passed + " passed, " + failed + " failed");
if (failed) process.exitCode = 1;
