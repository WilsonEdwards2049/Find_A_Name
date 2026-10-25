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
  assert(DATA.characters.length >= 3500);
  const validTags = new Set(DATA.imagery.map(function (item) { return item.id; }));
  const seen = new Set();
  DATA.characters.forEach(function (entry) {
    assert(/^[a-zv]+$/.test(entry.syllable), entry.char + " syllable");
    assert(entry.tone >= 1 && entry.tone <= 4, entry.char + " tone");
    assert(!seen.has(entry.char + entry.pinyin), "duplicate " + entry.char + entry.pinyin);
    seen.add(entry.char + entry.pinyin);
    if (entry.nameable) {
      assert(entry.tags.length > 0, entry.char + " nameable tags");
      assert(entry.meaning && entry.meaning.trim(), entry.char + " nameable meaning");
    }
    entry.tags.forEach(function (tag) {
      assert(validTags.has(tag), entry.char + " invalid tag " + tag);
    });
  });
});

test("data: level-1 coverage and nameability", function () {
  const uniqueChars = new Set(DATA.characters.map(function (entry) { return entry.char; }));
  assert(uniqueChars.size >= 3500, "unique chars " + uniqueChars.size);
  ["商", "尚", "赏", "铝", "刁", "死", "病", "非", "我"].forEach(function (char) {
    assert(uniqueChars.has(char), char + " should be in the dictionary");
  });

  const nameableChars = new Set(
    DATA.characters.filter(function (entry) { return entry.nameable; })
      .map(function (entry) { return entry.char; })
  );
  assert(nameableChars.size >= 3500, "nameable chars " + nameableChars.size);
  ["商", "尚", "清", "玉", "乐", "非", "我"].forEach(function (char) {
    assert(nameableChars.has(char), char + " should be nameable");
  });

  ["非", "我", "死", "病", "的", "不", "二", "忌", "愚", "党", "刁", "赏"].forEach(function (char) {
    const entry = DATA.characters.find(function (row) {
      return row.char === char && row.nameable;
    });
    assert(entry, char + " should remain nameable (low priority)");
    assert.strictEqual(entry.lowPriority, true, char + " should be low priority");
  });

  const le = DATA.characters.filter(function (entry) { return entry.char === "乐"; });
  assert(le.some(function (entry) { return entry.pinyin === "le4" && entry.nameable; }));
  assert(le.some(function (entry) { return entry.pinyin === "yue4" && entry.nameable; }));
  assert(le.every(function (entry) {
    return entry.pinyin === "le4" || entry.pinyin === "yue4" || !entry.nameable;
  }), "secondary 乐 readings stay non-nameable");

  const qing = DATA.characters.find(function (entry) {
    return entry.char === "清" && entry.pinyin === "qing1";
  });
  assert.strictEqual(qing.meaning, "水体澄澈明净；引申为清朗高洁。");
  assert.deepStrictEqual(qing.tags, ["water", "cool", "virtue"]);
  assert.strictEqual(qing.lowPriority, false);
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

  const firstPageScores = options.slice(0, 12).map(function (option) {
    return option.score;
  });
  assert(new Set(firstPageScores).size > 1, "top syllable options should not share one score");
  assert(new Set(options.map(function (option) {
    return option.score;
  })).size >= 8, "syllable scores should have a usable spread");

  const yongLing = options.find(function (option) {
    return option.givenSyllables[0].syllable === "yong" &&
      option.givenSyllables[1].syllable === "ling";
  });
  assert(yongLing);
  assert.strictEqual(yongLing.selectable, true);
  const namingYong = DATA.namingBySyllableTone.yong3;
  const namingLing = DATA.namingBySyllableTone.ling2;
  assert.deepStrictEqual(yongLing.support, [namingYong.length, namingLing.length]);
  assert.deepStrictEqual(yongLing.coreSupport, [
    namingYong.filter(function (entry) { return !entry.lowPriority; }).length,
    namingLing.filter(function (entry) { return !entry.lowPriority; }).length
  ]);
  yongLing.samples.forEach(function (chars, index) {
    const pool = index === 0 ? namingYong : namingLing;
    const normal = pool.filter(function (entry) { return !entry.lowPriority; });
    chars.forEach(function (char) {
      assert(pool.some(function (entry) { return entry.char === char; }),
        char + " sample is missing from the pool");
      if (normal.length) {
        assert(normal.some(function (entry) { return entry.char === char; }),
          char + " sample should prefer normal-priority chars");
      }
    });
  });
  const poolChars = DATA.bySyllableTone.yong3.concat(DATA.bySyllableTone.ling2)
    .map(function (entry) { return entry.char; }).join("");
  poolChars.split("").forEach(function (char) {
    assert(yongLing.searchText.indexOf(char) !== -1, "search missing " + char);
  });

  const qingYu = findSyllableOption(zhang, [1, 4], "qing", "yu");
  assert(qingYu, "qing yu should exist");
  assert.strictEqual(qingYu.givenPinyin, "qīng yù");

  const single = ENGINE.buildSyllableOptions(zhang.syllables, [3], { limit: 20000 });
  assert(single.length > 0);
  single.forEach(function (option) {
    assert.strictEqual(option.selectable, true);
    assert(option.support[0] > 0);
  });
});

test("syllable search: exact pinyin, characters and low-priority matches", function () {
  const zhang = ENGINE.resolveSurname("张");

  const shang = ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "shang", 500);
  assert(shang.length > 0, "shang should match");
  shang.forEach(function (option) {
    assert.strictEqual(option.givenSyllables[0].syllable, "shang");
    assert.strictEqual(option.givenSyllables[0].tone, 1);
    assert.strictEqual(option.selectable, true);
    assert(option.samples[0].length > 0);
  });

  const shan = ENGINE.searchSyllableOptions(zhang.syllables, [3, 2], "shan", 500);
  assert(shan.length > 0);
  shan.forEach(function (option) {
    assert.strictEqual(option.givenSyllables[0].syllable, "shan");
  });

  const shangChar = ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "商", 500);
  assert(shangChar.length > 0);
  assert(shangChar.every(function (option) { return option.selectable; }));
  assert(shangChar[0].samples[0].indexOf("商") !== -1);

  const diaoChar = ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "刁", 500);
  assert(diaoChar.length > 0);
  diaoChar.forEach(function (option) {
    assert.strictEqual(option.selectable, true);
    assert.strictEqual(option.givenSyllables[0].syllable, "diao");
    assert(option.support[0] > 0);
    assert.strictEqual(option.coreSupport[0], 0);
    assert(option.samples[0].indexOf("刁") !== -1);
  });

  const qingYu = ENGINE.searchSyllableOptions(zhang.syllables, [1, 4], "qingyu", 20);
  assert.strictEqual(qingYu.length, 1);
  assert.strictEqual(qingYu[0].givenPinyin, "qīng yù");

  const spaced = ENGINE.searchSyllableOptions(zhang.syllables, [1, 4], "qing yu", 20);
  assert.strictEqual(spaced.length, 1);
  assert.strictEqual(spaced[0].givenPinyin, "qīng yù");

  assert.deepStrictEqual(ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "", 20), []);
  assert.deepStrictEqual(ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "zzz", 20), []);
});

test("imagery availability covers every category", function () {
  const zhang = ENGINE.resolveSurname("张");
  const option = findSyllableOption(zhang, [1, 4], "qing", "yu");
  const availability = ENGINE.imageryAvailability(option.givenSyllables);
  assert.strictEqual(availability.length, DATA.imagery.length);
  const namingPools = option.givenSyllables.map(function (given) {
    return DATA.namingBySyllableTone[given.syllable + given.tone];
  });
  availability.forEach(function (item) {
    assert.strictEqual(item.perPosition.length, 2);
    item.perPosition.forEach(function (count, index) {
      const expected = namingPools[index].filter(function (entry) {
        return !entry.lowPriority && entry.tags.indexOf(item.id) !== -1;
      }).length;
      assert.strictEqual(count, expected, item.id + " counts only nameable chars");
    });
    assert(item.characterCount >= 0);
    assert(item.combinations >= 0);
  });
});

test("naming examples cover every tone pattern", function () {
  assert(DATA.namingExamples.length >= 100);
  const validTypes = new Set(["史", "文", "诗", "名"]);
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
    const single = ENGINE.getNamingExamples([tone], 1, 5);
    assert(single.length >= 3, "single tone " + tone);
    assert(single.filter(function (example) { return example.fullName; }).length >= 3,
      "single tone " + tone + " full names");
    single.forEach(function (example) {
      assert.strictEqual(example.length, 1);
      assert.strictEqual(example.tones[0], tone);
    });
  }

  for (let first = 1; first <= 4; first += 1) {
    for (let second = 1; second <= 4; second += 1) {
      const examples = ENGINE.getNamingExamples([first, second], 2, 20);
      assert(examples.length >= 3, "double tones " + first + second);
      assert(examples.filter(function (example) { return example.fullName; }).length >= 3,
        "double tones " + first + second + " full names");
      examples.slice(0, 3).forEach(function (example) {
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
  const wangExamples = ENGINE.getSurnameExamples(wang, [3, 1], 2, 3);
  assert(wangExamples.length >= 1);
  wangExamples.forEach(function (example) {
    assert.strictEqual(example.surname, "王");
    assert.notStrictEqual(example.fullName, "薛宝钗");
  });
  const zhaoJun = ENGINE.getSurnameExamples(wang, [1, 1], 2, 3);
  assert(zhaoJun.some(function (example) { return example.fullName === "王昭君"; }));

  const zhang = ENGINE.resolveSurname("张");
  const ziFang = ENGINE.getSurnameExamples(zhang, [3, 2], 2, 3);
  assert(ziFang.length >= 1);
  assert.strictEqual(ziFang[0].fullName, "张子房");
  assert.strictEqual(ziFang[0].fullPinyinDisplay, "zhāng zǐ fáng");
  assert(ziFang.every(function (example) { return example.surname === "张"; }));

  const sima = ENGINE.resolveSurname("司马");
  const xiangRu = ENGINE.getSurnameExamples(sima, [4, 2], 2, 3);
  assert.strictEqual(xiangRu.length, 1);
  assert.strictEqual(xiangRu[0].fullName, "司马相如");
  assert.strictEqual(xiangRu[0].fullPinyinDisplay, "sī mǎ xiàng rú");

  assert.deepStrictEqual(ENGINE.getSurnameExamples(null, [3, 1], 2, 3), []);
});

test("full-name tone examples cover every surname tone pattern", function () {
  for (let surnameTone = 1; surnameTone <= 4; surnameTone++) {
    const surname = { text: "", tones: [surnameTone] };
    for (let first = 1; first <= 4; first++) {
      assert(ENGINE.getToneMatchedExamples(surname, [first], 1, 3).length >= 3,
        surnameTone + "|" + first);
      for (let second = 1; second <= 4; second++) {
        const list = ENGINE.getToneMatchedExamples(surname, [first, second], 2, 3);
        assert(list.length >= 3, surnameTone + "|" + first + "-" + second);
        list.forEach(function (example) {
          assert.strictEqual(example.surnameTones.join("-"), String(surnameTone));
          assert.deepStrictEqual(example.tones, [first, second]);
          assert(example.fullName);
        });
      }
    }
  }

  const zhang = ENGINE.resolveSurname("张");
  const zhang42 = ENGINE.getToneMatchedExamples(zhang, [4, 2], 2, 3);
  assert.strictEqual(zhang42.length, 3);
  zhang42.forEach(function (example) {
    assert.strictEqual(example.surname, "张");
  });
});

test("张 has three same-surname examples for every full-name tone pattern", function () {
  const zhang = ENGINE.resolveSurname("张");
  for (let first = 1; first <= 4; first++) {
    const single = ENGINE.getSurnameExamples(zhang, [first], 1, 10);
    assert(single.length >= 3, "1|" + first);
    single.forEach(function (example) {
      assert.strictEqual(example.surname, "张");
    });
    for (let second = 1; second <= 4; second++) {
      const list = ENGINE.getSurnameExamples(zhang, [first, second], 2, 10);
      assert(list.length >= 3, "1|" + first + "-" + second);
      list.forEach(function (example) {
        assert.strictEqual(example.surname, "张");
      });
    }
  }
});

test("夏 has a same-surname example for every full-name tone pattern", function () {
  const xia = ENGINE.resolveSurname("夏");
  for (let first = 1; first <= 4; first++) {
    const single = ENGINE.getSurnameExamples(xia, [first], 1, 10);
    assert(single.length >= 1, "1|" + first);
    single.forEach(function (example) {
      assert.strictEqual(example.surname, "夏");
    });
    for (let second = 1; second <= 4; second++) {
      const list = ENGINE.getSurnameExamples(xia, [first, second], 2, 10);
      assert(list.length >= 1, "1|" + first + "-" + second);
      list.forEach(function (example) {
        assert.strictEqual(example.surname, "夏");
      });
    }
  }
});

test("every surname has at least one same-surname example", function () {
  const texts = Object.keys(DATA.surnames).concat(Object.keys(DATA.compoundSurnames));
  texts.forEach(function (text) {
    const surname = ENGINE.resolveSurname(text);
    let found = false;
    for (let first = 1; first <= 4 && !found; first++) {
      if (ENGINE.getSurnameExamples(surname, [first], 1, 1).length) {
        found = true;
        break;
      }
      for (let second = 1; second <= 4 && !found; second++) {
        if (ENGINE.getSurnameExamples(surname, [first, second], 2, 1).length) {
          found = true;
        }
      }
    }
    assert(found, text);
  });
});

test("common surnames have same-surname examples for every tone pattern", function () {
  const common = [
    "王", "李", "张", "刘", "陈", "杨", "黄", "赵", "吴", "周",
    "徐", "孙", "马", "朱", "胡", "郭", "何", "高", "林", "罗"
  ];
  common.forEach(function (text) {
    const surname = ENGINE.resolveSurname(text);
    for (let first = 1; first <= 4; first++) {
      assert(ENGINE.getSurnameExamples(surname, [first], 1, 1).length === 1,
        text + " 1|" + first);
      for (let second = 1; second <= 4; second++) {
        const list = ENGINE.getSurnameExamples(surname, [first, second], 2, 1);
        assert(list.length === 1, text + " 1|" + first + "-" + second);
        assert.strictEqual(list[0].surname, text);
      }
    }
  });
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
      const pool = DATA.namingBySyllableTone[given.syllable + given.tone];
      assert(pool.some(function (entry) { return entry.char === detail.char; }),
        detail.char + " is not nameable in " + given.syllable + given.tone);
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

test("low-priority characters stay possible but rare", function () {
  const zhang = ENGINE.resolveSurname("张");
  const toneOption = ENGINE.buildToneOptions(zhang.syllables, 2)
    .find(function (option) { return option.givenTones.join("") === "12"; });

  const diao = ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "diaoling", 20)[0];
  assert(diao);
  const diaoNames = ENGINE.recommendNames({
    surname: zhang,
    givenSyllables: diao.givenSyllables,
    toneOption: toneOption,
    syllableOption: diao,
    imageryIds: [],
    count: 4,
    exclude: {},
    random: seededRandom(5)
  });
  assert(diaoNames.names.length > 0);
  diaoNames.names.forEach(function (name) {
    assert(["刁", "叼", "雕"].indexOf(name.chars[0].char) !== -1,
      name.name + " should use the available low-priority first char");
  });

  const fei = ENGINE.searchSyllableOptions(zhang.syllables, [1, 2], "feiling", 20)[0];
  assert(fei);
  const pools = fei.givenSyllables.map(function (given) {
    return DATA.namingBySyllableTone[given.syllable + given.tone];
  });
  const rng = seededRandom(20261025);
  let lowCount = 0;
  let totalCount = 0;
  for (let i = 0; i < 60; i += 1) {
    const result = ENGINE.recommendNames({
      surname: zhang,
      givenSyllables: fei.givenSyllables,
      toneOption: toneOption,
      syllableOption: fei,
      imageryIds: [],
      count: 6,
      exclude: {},
      random: rng
    });
    result.names.forEach(function (name) {
      name.chars.forEach(function (detail, index) {
        const entry = pools[index].find(function (row) { return row.char === detail.char; });
        totalCount += 1;
        if (entry && entry.lowPriority) lowCount += 1;
      });
    });
  }
  assert(totalCount > 0);
  assert(lowCount > 0, "low-priority chars should appear occasionally");
  assert(lowCount / totalCount < 0.05,
    "low-priority chars should stay rare, got " + (lowCount / totalCount).toFixed(3));
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
    option.givenSyllables.forEach(function (given, index) {
      const pool = DATA.namingBySyllableTone[given.syllable + given.tone];
      assert(pool && pool.length, "no nameable pool for " + given.syllable + given.tone);
      result.names.forEach(function (name) {
        if (index >= name.chars.length) return;
        const char = name.chars[index].char;
        assert(pool.some(function (entry) { return entry.char === char; }),
          char + " is not nameable");
      });
    });
    result.names.forEach(function (name) {
      assert.strictEqual(Array.from(name.name).length,
        surname.syllables.length + length, name.name);
      assert(name.score >= 50 && name.score <= 98);
    });
  }
});

console.log("\n" + passed + " passed, " + failed + " failed");
if (failed) process.exitCode = 1;
