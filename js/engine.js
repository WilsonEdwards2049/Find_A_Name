(function () {
  "use strict";

  const DATA = window.NameData;
  const TONE_INFO = {
    1: { name: "阴平", short: "平", contour: "高平", toneName: "一声", mark: "ˉ" },
    2: { name: "阳平", short: "平", contour: "上扬", toneName: "二声", mark: "ˊ" },
    3: { name: "上声", short: "仄", contour: "转折", toneName: "三声", mark: "ˇ" },
    4: { name: "去声", short: "仄", contour: "下落", toneName: "四声", mark: "ˋ" }
  };

  const TONE_MARKS = {
    a: ["ā", "á", "ǎ", "à"],
    e: ["ē", "é", "ě", "è"],
    i: ["ī", "í", "ǐ", "ì"],
    o: ["ō", "ó", "ǒ", "ò"],
    u: ["ū", "ú", "ǔ", "ù"],
    v: ["ǖ", "ǘ", "ǚ", "ǜ"]
  };

  const BLOCKED_NAMES = [
    "杨伟", "杨威", "杜子腾", "范统", "史珍香", "朱逸群",
    "秦寿", "夏建仁", "沈京兵", "魏生津", "赖月京", "付炎杰"
  ];

  const LOW_PRIORITY_FACTOR = 0.02;
  const LOW_PRIORITY_BATCH_CHANCE = 0.15;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function parseTonePinyin(raw) {
    if (!raw || typeof raw !== "string") return null;
    const match = /^([a-zv]+)([1-4])$/.exec(raw.trim().toLowerCase());
    if (!match) return null;
    return { raw: raw.trim().toLowerCase(), syllable: match[1], tone: Number(match[2]) };
  }

  function toneMarked(syllable, tone) {
    if (!syllable) return "";
    let index = syllable.indexOf("a");
    if (index === -1) index = syllable.indexOf("e");
    if (index === -1 && syllable.indexOf("ou") !== -1) index = syllable.indexOf("o");
    if (index === -1) {
      const vowels = "aeiouv";
      for (let i = syllable.length - 1; i >= 0; i -= 1) {
        if (vowels.indexOf(syllable.charAt(i)) !== -1) {
          index = i;
          break;
        }
      }
    }
    const letter = syllable.charAt(index);
    const marked = TONE_MARKS[letter] && TONE_MARKS[letter][tone - 1]
      ? TONE_MARKS[letter][tone - 1]
      : letter;
    const result = syllable.slice(0, index) + marked + syllable.slice(index + 1);
    return result.replace(/v/g, "ü");
  }

  function displaySyllable(item) {
    return toneMarked(item.syllable, item.tone);
  }

  function displaySyllables(items) {
    return items.map(displaySyllable).join(" ");
  }

  function getInitial(syllable) {
    const match = /^(zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])/.exec(syllable);
    return match ? match[1] : "";
  }

  function getFinal(syllable) {
    return syllable.slice(getInitial(syllable).length);
  }

  function toneName(tone) {
    return TONE_INFO[tone].name;
  }

  function pingZe(tone) {
    return TONE_INFO[tone].short;
  }

  function parseManualReading(reading, charCount) {
    if (!reading || !reading.trim()) return null;
    const parts = reading.trim().toLowerCase().split(/\s+/);
    if (parts.length !== charCount) return null;
    const parsed = parts.map(parseTonePinyin);
    if (parsed.some(function (item) { return !item; })) return null;
    return parsed;
  }

  const NAMING_EXAMPLES = (DATA.namingExamples || []).map(function (example) {
    const syllables = example.pinyin.split(/\s+/).map(parseTonePinyin);
    const surnameChars = Array.from(example.surname || "");
    const surnameSyllables = (example.surnamePinyin || "").split(/\s+/)
      .filter(Boolean)
      .map(parseTonePinyin);
    const hasSurname = surnameChars.length > 0 &&
      surnameSyllables.length === surnameChars.length &&
      surnameSyllables.every(Boolean);
    return {
      given: example.given,
      length: Array.from(example.given).length,
      syllables: syllables,
      tones: syllables.map(function (item) { return item ? item.tone : 0; }),
      pinyinDisplay: displaySyllables(syllables.filter(Boolean)),
      origin: example.origin,
      type: example.type,
      note: example.note,
      surname: hasSurname ? example.surname : "",
      surnameSyllables: hasSurname ? surnameSyllables : [],
      surnameTones: hasSurname ? surnameSyllables.map(function (item) { return item.tone; }) : [],
      fullName: hasSurname ? example.surname + example.given : "",
      fullPinyinDisplay: hasSurname
        ? displaySyllables(surnameSyllables.concat(syllables.filter(Boolean)))
        : ""
    };
  }).filter(function (example) {
    return example.syllables.every(Boolean) && example.length === example.syllables.length;
  });

  function getNamingExamples(givenTones, nameLength, limit) {
    const target = givenTones.join("-");
    return NAMING_EXAMPLES.filter(function (example) {
      return example.length === nameLength && example.tones.join("-") === target;
    }).slice(0, limit || 3);
  }

  function getSurnameExamples(surname, givenTones, nameLength, limit) {
    if (!surname || !surname.text) return [];
    const target = givenTones.join("-");
    return NAMING_EXAMPLES.filter(function (example) {
      return example.surname === surname.text &&
        example.surnameTones.join("-") === surname.tones.join("-") &&
        example.length === nameLength &&
        example.tones.join("-") === target;
    }).slice(0, limit || 3);
  }

  function resolveSurname(input, manualReading) {
    const text = String(input || "").trim();
    if (!text) {
      return { ok: false, error: "请先输入姓氏。" };
    }
    if (DATA.compoundSurnames[text]) {
      const syllables = DATA.compoundSurnames[text].map(parseTonePinyin);
      return {
        ok: true,
        text: text,
        syllables: syllables,
        pinyin: displaySyllables(syllables),
        tones: syllables.map(function (s) { return s.tone; }),
        kind: "compound"
      };
    }
    if (DATA.surnames[text]) {
      const syllable = parseTonePinyin(DATA.surnames[text][0]);
      return {
        ok: true,
        text: text,
        syllables: [syllable],
        pinyin: displaySyllable(syllable),
        tones: [syllable.tone],
        kind: "single"
      };
    }
    if (text.length === 1 && manualReading) {
      const parsed = parseManualReading(manualReading, 1);
      if (parsed) {
        return {
          ok: true,
          text: text,
          syllables: parsed,
          pinyin: displaySyllables(parsed),
          tones: parsed.map(function (s) { return s.tone; }),
          kind: "manual"
        };
      }
      return {
        ok: false,
        error: "自定义读音格式应为“拼音 + 声调数字”，例如 zhang1。",
        manualAllowed: true
      };
    }
    return {
      ok: false,
      error: text.length === 1
        ? "字库暂未收录这个姓氏的读音，可在下方手动标注。"
        : "未找到这个姓氏的读音，请检查是否为复姓，或拆成单字。",
      manualAllowed: text.length === 1
    };
  }

  function uniqueCount(values) {
    const seen = {};
    let count = 0;
    values.forEach(function (value) {
      if (!seen[value]) {
        seen[value] = true;
        count += 1;
      }
    });
    return count;
  }

  function scoreTones(fullTones) {
    let score = 74;
    const reasons = [];
    const n = fullTones.length;
    let adjacentSame = 0;
    for (let i = 0; i < n - 1; i += 1) {
      if (fullTones[i] === fullTones[i + 1]) adjacentSame += 1;
    }
    const unique = uniqueCount(fullTones);
    let transitions = 0;
    for (let i = 0; i < n - 1; i += 1) {
      if (pingZe(fullTones[i]) !== pingZe(fullTones[i + 1])) transitions += 1;
    }

    if (adjacentSame) {
      score -= adjacentSame * 12;
      reasons.push({ type: "minus", text: adjacentSame + " 处相邻同调" });
    } else if (n > 1) {
      reasons.push({ type: "plus", text: "无相邻同调" });
    }

    if (unique === 1) {
      score -= 14;
      reasons.push({ type: "minus", text: "全名同调，起伏较少" });
    } else if (unique >= 3) {
      score += 9;
      reasons.push({ type: "plus", text: "声调层次丰富" });
    } else {
      score += 3;
    }

    if (transitions === 0 && n > 1) {
      score -= 8;
      reasons.push({ type: "minus", text: "平仄缺少转换" });
    } else {
      score += transitions * 5;
      reasons.push({ type: "plus", text: "平仄转换 " + transitions + " 次" });
    }

    const ending = fullTones[n - 1];
    if (ending === 2) {
      score += 4;
      reasons.push({ type: "plus", text: "尾音上扬，余韵舒展" });
    } else if (ending === 1) {
      score += 3;
      reasons.push({ type: "plus", text: "尾音平稳，清朗" });
    } else if (ending === 4) {
      score += 3;
      reasons.push({ type: "plus", text: "尾音利落，收束有力" });
    } else {
      reasons.push({ type: "plus", text: "尾音转折，气质柔和" });
    }

    score = Math.round(clamp(score, 45, 98));
    let label = "起伏不足";
    if (score >= 94) label = "抑扬有致";
    else if (score >= 86) label = "舒朗有致";
    else if (score >= 76) label = "平稳顺口";
    else if (score >= 66) label = "节奏偏平";

    return {
      score: score,
      label: label,
      reasons: reasons,
      transitions: transitions,
      adjacentSame: adjacentSame,
      uniqueTones: unique,
      endingTone: ending
    };
  }

  function buildToneOptions(surnameSyllables, nameLength) {
    const surnameTones = surnameSyllables.map(function (s) { return s.tone; });
    const options = [];
    const total = Math.pow(4, nameLength);
    for (let value = 0; value < total; value += 1) {
      const givenTones = [];
      let current = value;
      for (let i = 0; i < nameLength; i += 1) {
        givenTones.push((current % 4) + 1);
        current = Math.floor(current / 4);
      }
      const fullTones = surnameTones.concat(givenTones);
      const result = scoreTones(fullTones);
      options.push({
        givenTones: givenTones,
        fullTones: fullTones,
        pingZe: fullTones.map(pingZe),
        score: result.score,
        label: result.label,
        reasons: result.reasons,
        transitions: result.transitions,
        endingTone: result.endingTone,
        toneNames: givenTones.map(toneName),
        fullToneNames: fullTones.map(toneName)
      });
    }
    return options.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return a.givenTones.join("") < b.givenTones.join("") ? -1 : 1;
    });
  }

  function getSyllablePools(givenSyllables, useFullPools) {
    const source = useFullPools ? DATA.bySyllableTone : DATA.namingBySyllableTone;
    return givenSyllables.map(function (item) {
      return source[item.syllable + item.tone] || [];
    });
  }

  function makeSyllableOption(surnameSyllables, givenSyllables, pools, fullPools) {
    const fullSyllables = surnameSyllables.concat(givenSyllables);
    const n = fullSyllables.length;
    const syllables = fullSyllables.map(function (item) { return item.syllable; });
    const initials = syllables.map(getInitial);
    const finals = syllables.map(getFinal);
    let score = 82;
    const reasons = [];

    let adjacentSameSyllable = 0;
    let adjacentSameInitial = 0;
    let adjacentSameFinal = 0;
    let nonAdjacentInitial = 0;
    let nonAdjacentFinal = 0;

    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        if (syllables[i] === syllables[j]) {
          if (j === i + 1) adjacentSameSyllable += 1;
        }
        if (initials[i] && initials[i] === initials[j]) {
          if (j === i + 1) adjacentSameInitial += 1;
          else nonAdjacentInitial += 1;
        }
        if (finals[i] && finals[i] === finals[j]) {
          if (j === i + 1) adjacentSameFinal += 1;
          else nonAdjacentFinal += 1;
        }
      }
    }

    if (adjacentSameSyllable) {
      score -= adjacentSameSyllable * 16;
      reasons.push({ type: "minus", text: "相邻音节重复" });
    }
    if (adjacentSameInitial) {
      score -= adjacentSameInitial * 7;
      reasons.push({ type: "minus", text: "相邻声母相同" });
    }
    if (adjacentSameFinal) {
      score -= adjacentSameFinal * 9;
      reasons.push({ type: "minus", text: "相邻韵母相同" });
    }
    if (nonAdjacentInitial) {
      score -= nonAdjacentInitial * 2;
    }
    if (nonAdjacentFinal) {
      score -= nonAdjacentFinal * 3;
    }

    const initialVariety = uniqueCount(initials);
    const finalVariety = uniqueCount(finals);
    if (initialVariety === n) {
      score += 4;
      reasons.push({ type: "plus", text: "声母错落" });
    } else if (initialVariety === 1) {
      score -= 8;
      reasons.push({ type: "minus", text: "声母过于接近" });
    }
    if (finalVariety === n) {
      score += 4;
      reasons.push({ type: "plus", text: "韵母不撞" });
    } else if (finalVariety === 1) {
      score -= 8;
      reasons.push({ type: "minus", text: "韵母过于接近" });
    }

    const lengths = syllables.map(function (syllable) { return syllable.length; });
    const lengthRange = Math.max.apply(null, lengths) - Math.min.apply(null, lengths);
    if (lengthRange <= 1) score += 2;
    if (lengthRange >= 3) {
      score -= 2;
      reasons.push({ type: "minus", text: "音节长短略失衡" });
    }

    const support = pools.map(function (pool) { return pool.length; });
    const coreSupport = pools.map(function (pool) {
      return pool.filter(function (entry) { return !entry.lowPriority; }).length;
    });
    const minSupport = Math.min.apply(null, coreSupport);
    if (minSupport <= 1) {
      score -= 6;
      reasons.push({ type: "minus", text: "可用字较少" });
    } else if (minSupport >= 8) {
      score += 4;
      reasons.push({ type: "plus", text: "用字选择充足" });
    } else if (minSupport >= 4) {
      score += 2;
      reasons.push({ type: "plus", text: "用字有余地" });
    }

    score = Math.round(clamp(score, 50, 97));
    let label = "可用";
    if (score >= 93) label = "清朗顺口";
    else if (score >= 86) label = "自然流畅";
    else if (score >= 78) label = "平稳可读";
    else if (score >= 68) label = "略需斟酌";

    const fullPinyin = displaySyllables(fullSyllables);
    const givenPinyin = displaySyllables(givenSyllables);
    const samplePools = pools.map(function (pool, index) {
      if (!pool.length) return (fullPools && fullPools[index]) || [];
      const normal = pool.filter(function (entry) { return !entry.lowPriority; });
      return normal.length ? normal : pool;
    });
    const searchPools = fullPools || pools;
    const fullSupport = searchPools.map(function (pool) { return pool.length; });
    const selectable = pools.every(function (pool) { return pool.length > 0; });
    const samples = samplePools.map(function (pool) {
      return pool.slice(0, 4).map(function (entry) { return entry.char; });
    });
    const allSampleChars = searchPools.map(function (pool) {
      return pool.map(function (entry) { return entry.char; }).join("");
    }).join(" ");
    const searchText = (
      syllables.join(" ") + " " +
      displaySyllables(fullSyllables) + " " +
      allSampleChars
    ).toLowerCase();

    return {
      givenSyllables: givenSyllables,
      fullSyllables: fullSyllables,
      fullPinyin: fullPinyin,
      givenPinyin: givenPinyin,
      score: score,
      label: label,
      reasons: reasons,
      support: support,
      coreSupport: coreSupport,
      fullSupport: fullSupport,
      samples: samples,
      initials: initials,
      finals: finals,
      searchText: searchText,
      selectable: selectable
    };
  }

  function buildSyllableOptions(surnameSyllables, givenTones, options) {
    const settings = options || {};
    const limit = settings.limit || 1500;
    const sourcePools = givenTones.map(function (tone, index) {
      return (DATA.namingSyllablesByTone[tone] || []).map(function (syllable) {
        return { syllable: syllable, tone: tone, position: index };
      });
    });
    const results = [];

    if (givenTones.length === 1) {
      sourcePools[0].forEach(function (first) {
        const namingPool = DATA.namingBySyllableTone[first.syllable + first.tone] || [];
        if (!namingPool.length) return;
        const fullPool = DATA.bySyllableTone[first.syllable + first.tone] || [];
        results.push(makeSyllableOption(surnameSyllables, [first], [namingPool], [fullPool]));
      });
    } else {
      sourcePools[0].forEach(function (first) {
        const firstPool = DATA.namingBySyllableTone[first.syllable + first.tone] || [];
        if (!firstPool.length) return;
        const firstFull = DATA.bySyllableTone[first.syllable + first.tone] || [];
        sourcePools[1].forEach(function (second) {
          const secondPool = DATA.namingBySyllableTone[second.syllable + second.tone] || [];
          if (!secondPool.length) return;
          const secondFull = DATA.bySyllableTone[second.syllable + second.tone] || [];
          results.push(makeSyllableOption(
            surnameSyllables,
            [first, second],
            [firstPool, secondPool],
            [firstFull, secondFull]
          ));
        });
      });
    }

    results.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return b.support.reduce(function (sum, n) { return sum + n; }, 0) -
        a.support.reduce(function (sum, n) { return sum + n; }, 0);
    });
    return results.slice(0, limit);
  }

  const ALL_SYLLABLE_KEYS = Object.keys(DATA.bySyllableTone);
  const KNOWN_SYLLABLES = {};
  ALL_SYLLABLE_KEYS.forEach(function (key) {
    KNOWN_SYLLABLES[DATA.bySyllableTone[key][0].syllable] = true;
  });

  function normalizePinyinToken(token) {
    const match = /^([a-zv]+)([1-4])?$/.exec(token);
    if (!match) return null;
    return { syllable: match[1], tone: match[2] ? Number(match[2]) : 0 };
  }

  function syllablesForChar(char, tone) {
    const found = [];
    ALL_SYLLABLE_KEYS.forEach(function (key) {
      const pool = DATA.bySyllableTone[key];
      const hit = pool.some(function (entry) {
        return entry.char === char && entry.tone === tone;
      });
      if (hit) found.push(pool[0].syllable);
    });
    return found;
  }

  function splitPinyinPair(token) {
    const pairs = [];
    for (let index = 1; index < token.length; index += 1) {
      const first = token.slice(0, index);
      const second = token.slice(index);
      if (KNOWN_SYLLABLES[first] && KNOWN_SYLLABLES[second]) {
        pairs.push([first, second]);
      }
    }
    return pairs;
  }

  function searchSyllableOptions(surnameSyllables, givenTones, query, limit) {
    const raw = String(query || "").trim().toLowerCase();
    if (!raw) return [];
    const tokens = raw.replace(/ü/g, "v").split(/\s+/).filter(Boolean);
    const patterns = [];
    const isChinese = /[\u3400-\u9fff]/.test(tokens.join(""));
    const chars = isChinese ? Array.from(tokens.join("")) : [];

    if (isChinese) {
      if (givenTones.length === 1) {
        if (chars.length !== 1) return [];
        patterns.push([syllablesForChar(chars[0], givenTones[0])]);
      } else if (chars.length === 1) {
        syllablesForChar(chars[0], givenTones[0]).forEach(function (syllable) {
          patterns.push([[syllable], null]);
        });
        syllablesForChar(chars[0], givenTones[1]).forEach(function (syllable) {
          patterns.push([null, [syllable]]);
        });
      } else if (chars.length === 2) {
        const firsts = syllablesForChar(chars[0], givenTones[0]);
        const seconds = syllablesForChar(chars[1], givenTones[1]);
        if (firsts.length && seconds.length) patterns.push([firsts, seconds]);
      } else {
        return [];
      }
    } else if (tokens.length === 1) {
      const token = tokens[0];
      if (!/^[a-zv]+[1-4]?$/.test(token)) return [];
      if (givenTones.length === 1) {
        const parsed = normalizePinyinToken(token);
        if (parsed && parsed.syllable in KNOWN_SYLLABLES &&
          (!parsed.tone || parsed.tone === givenTones[0])) {
          patterns.push([[parsed.syllable]]);
        }
      } else {
        const parsed = normalizePinyinToken(token);
        if (parsed && parsed.syllable in KNOWN_SYLLABLES) {
          if (!parsed.tone || parsed.tone === givenTones[0]) {
            patterns.push([[parsed.syllable], null]);
          }
          if (!parsed.tone || parsed.tone === givenTones[1]) {
            patterns.push([null, [parsed.syllable]]);
          }
        }
        splitPinyinPair(token.replace(/[1-4]$/, "")).forEach(function (pair) {
          patterns.push([[pair[0]], [pair[1]]]);
        });
      }
    } else if (tokens.length === 2) {
      if (givenTones.length !== 2) return [];
      const first = normalizePinyinToken(tokens[0]);
      const second = normalizePinyinToken(tokens[1]);
      if (!first || !second) return [];
      if (!(first.syllable in KNOWN_SYLLABLES) || !(second.syllable in KNOWN_SYLLABLES)) {
        return [];
      }
      if (first.tone && first.tone !== givenTones[0]) return [];
      if (second.tone && second.tone !== givenTones[1]) return [];
      patterns.push([[first.syllable], [second.syllable]]);
    } else {
      return [];
    }

    const fillers = givenTones.map(function (tone) {
      return DATA.namingSyllablesByTone[tone] || [];
    });
    const seen = {};
    const results = [];

    patterns.forEach(function (pattern) {
      const firsts = pattern[0] || fillers[0];
      const seconds = givenTones.length > 1 ? pattern[1] || fillers[1] : [];
      const combos = givenTones.length > 1 ? [firsts, seconds] : [firsts];
      const firstList = combos[0];
      const secondList = combos[1] || [null];
      firstList.forEach(function (firstSyllable) {
        secondList.forEach(function (secondSyllable) {
          const given = [firstSyllable, secondSyllable]
            .slice(0, givenTones.length)
            .map(function (syllable, index) {
              return { syllable: syllable, tone: givenTones[index], position: index };
            });
          const key = given.map(function (item) { return item.syllable + item.tone; }).join("|");
          if (seen[key]) return;
          seen[key] = true;
          const namingPools = given.map(function (item) {
            return DATA.namingBySyllableTone[item.syllable + item.tone] || [];
          });
          const fullPools = given.map(function (item) {
            return DATA.bySyllableTone[item.syllable + item.tone] || [];
          });
          if (fullPools.some(function (pool) { return !pool.length; })) return;
          const option = makeSyllableOption(surnameSyllables, given, namingPools, fullPools);
          if (isChinese) {
            chars.forEach(function (char) {
              given.forEach(function (item, index) {
                const pool = fullPools[index] || [];
                if (!pool.some(function (entry) { return entry.char === char; })) return;
                option.samples[index] = [char].concat(
                  option.samples[index].filter(function (sample) { return sample !== char; })
                ).slice(0, 4);
              });
            });
          }
          results.push(option);
        });
      });
    });

    results.sort(function (a, b) {
      if (a.selectable !== b.selectable) return a.selectable ? -1 : 1;
      if (b.score !== a.score) return b.score - a.score;
      const aSupport = a.support.reduce(function (sum, n) { return sum + n; }, 0);
      const bSupport = b.support.reduce(function (sum, n) { return sum + n; }, 0);
      return bSupport - aSupport;
    });
    return results.slice(0, limit || 300);
  }

  function imageryAvailability(givenSyllables) {
    const pools = getSyllablePools(givenSyllables);
    return DATA.imagery.map(function (image) {
      const perPosition = pools.map(function (pool) {
        return pool.filter(function (entry) {
          return !entry.lowPriority && entry.tags.indexOf(image.id) !== -1;
        }).length;
      });
      const combinations = perPosition.reduce(function (product, count) {
        return product * count;
      }, 1);
      return {
        id: image.id,
        name: image.name,
        glyph: image.glyph,
        desc: image.desc,
        perPosition: perPosition,
        characterCount: perPosition.reduce(function (sum, n) { return sum + n; }, 0),
        combinations: combinations
      };
    });
  }

  function countMatches(tags, selected) {
    if (!selected.length) return 0;
    let count = 0;
    selected.forEach(function (id) {
      if (tags.indexOf(id) !== -1) count += 1;
    });
    return count;
  }

  function tagNames(tags) {
    return tags.map(function (id) {
      const image = DATA.imageryById[id];
      return image ? image.name : id;
    });
  }

  function intersection(a, b) {
    return a.filter(function (item) { return b.indexOf(item) !== -1; });
  }

  function nameScore(toneOption, syllableOption, chars, selectedImagery) {
    const tagSets = chars.map(function (entry) { return entry.tags; });
    const union = chars.reduce(function (acc, entry) {
      entry.tags.forEach(function (tag) {
        if (acc.indexOf(tag) === -1) acc.push(tag);
      });
      return acc;
    }, []);
    const selectedHits = selectedImagery.filter(function (id) {
      return union.indexOf(id) !== -1;
    });
    let bothHits = 0;
    if (chars.length > 1) {
      bothHits = selectedImagery.filter(function (id) {
        return tagSets.every(function (tags) { return tags.indexOf(id) !== -1; });
      }).length;
    }
    const sharedTags = chars.length > 1 ? intersection(tagSets[0], tagSets[1]) : [];
    const semantic = clamp(
      70 + selectedHits.length * 6 + bothHits * 4 + sharedTags.length * 2,
      55,
      98
    );
    const toneScore = toneOption ? toneOption.score : 80;
    const soundScore = syllableOption ? syllableOption.score : 82;
    const overall = Math.round(toneScore * 0.3 + soundScore * 0.35 + semantic * 0.35);
    return {
      overall: clamp(overall, 50, 98),
      tone: toneScore,
      sound: soundScore,
      meaning: semantic,
      selectedHits: selectedHits,
      bothHits: bothHits,
      sharedTags: sharedTags,
      unionTags: union
    };
  }

  function weightedSample(candidates, count, random) {
    const rng = random || Math.random;
    const remaining = candidates.slice();
    const picked = [];

    function pickOne(predicate) {
      const eligible = remaining.filter(predicate);
      if (!eligible.length) return null;
      const total = eligible.reduce(function (sum, item) { return sum + item.weight; }, 0);
      let target = rng() * total;
      let chosen = eligible[eligible.length - 1];
      for (let i = 0; i < eligible.length; i += 1) {
        target -= eligible[i].weight;
        if (target <= 0) {
          chosen = eligible[i];
          break;
        }
      }
      const index = remaining.indexOf(chosen);
      if (index !== -1) remaining.splice(index, 1);
      picked.push(chosen);
      return chosen;
    }

    const firstChars = {};
    const secondChars = {};
    while (picked.length < count) {
      const chosen = pickOne(function (item) {
        if (firstChars[item.chars[0].char]) return false;
        if (item.chars.length > 1 && secondChars[item.chars[1].char]) return false;
        return true;
      }) || pickOne(function () { return true; });
      if (!chosen) break;
      firstChars[chosen.chars[0].char] = true;
      if (chosen.chars.length > 1) secondChars[chosen.chars[1].char] = true;
    }
    return picked;
  }

  function pickNames(candidates, count, rng) {
    const normal = candidates.filter(function (item) { return !item.lowPriority; });
    const low = candidates.filter(function (item) { return item.lowPriority; });
    if (!low.length) return weightedSample(candidates, count, rng);
    if (!normal.length) return weightedSample(low, count, rng);

    const allowLow = normal.length >= count && rng() < LOW_PRIORITY_BATCH_CHANCE;
    const normalCount = allowLow ? Math.max(count - 1, 0) : Math.min(count, normal.length);
    const picked = weightedSample(normal, normalCount, rng);

    if (allowLow && picked.length < count) {
      weightedSample(low, 1, rng).forEach(function (item) {
        picked.push(item);
      });
    }
    if (picked.length < count) {
      weightedSample(low, count - picked.length, rng).forEach(function (item) {
        if (picked.indexOf(item) === -1) picked.push(item);
      });
    }
    if (picked.length < count) {
      weightedSample(normal, count - picked.length, rng).forEach(function (item) {
        if (picked.indexOf(item) === -1) picked.push(item);
      });
    }
    return picked.slice(0, count);
  }

  function recommendNames(params) {
    const surname = params.surname;
    const givenSyllables = params.givenSyllables;
    const selectedImagery = params.imageryIds || [];
    const count = params.count || 6;
    const excluded = params.exclude || {};
    const rng = params.random || Math.random;
    const toneOption = params.toneOption;
    const syllableOption = params.syllableOption;
    const pools = getSyllablePools(givenSyllables);
    if (pools.some(function (pool) { return !pool.length; })) {
      return { names: [], meta: { exhausted: true, strict: false, fallback: false } };
    }

    const filteredPools = pools.map(function (pool) {
      return pool.filter(function (entry) {
        return !entry.lowPriority && countMatches(entry.tags, selectedImagery) > 0;
      });
    });
    const isSingle = givenSyllables.length === 1;
    const filteredProduct = isSingle
      ? filteredPools[0].length
      : filteredPools[0].length * filteredPools[1].length;
    const strict = selectedImagery.length > 0 &&
      filteredPools.every(function (pool) { return pool.length > 0; }) &&
      filteredProduct >= Math.max(count * 3, 8);
    const candidatePools = strict ? filteredPools : pools;

    const rawCandidates = [];
    if (isSingle) {
      candidatePools[0].forEach(function (first) {
        rawCandidates.push([first]);
      });
    } else {
      candidatePools[0].forEach(function (first) {
        candidatePools[1].forEach(function (second) {
          if (first.char === second.char) return;
          rawCandidates.push([first, second]);
        });
      });
    }

    const scored = rawCandidates.map(function (chars) {
      const name = surname.text + chars.map(function (entry) { return entry.char; }).join("");
      if (BLOCKED_NAMES.indexOf(name) !== -1) return null;
      const scores = nameScore(toneOption, syllableOption, chars, selectedImagery);
      const charMatches = chars.map(function (entry) {
        return countMatches(entry.tags, selectedImagery);
      });
      const matchWeight = charMatches.reduce(function (sum, n) { return sum + n; }, 0);
      let weight = Math.pow(scores.overall - 50, 1.45);
      if (selectedImagery.length) {
        weight *= 1 + scores.selectedHits.length * 0.8 + scores.bothHits * 0.6;
        weight *= 1 + matchWeight * 0.22;
      }
      if (strict) weight *= 1.1;
      const lowCount = chars.filter(function (entry) { return entry.lowPriority; }).length;
      if (lowCount) weight *= Math.pow(LOW_PRIORITY_FACTOR, lowCount);
      return {
        name: name,
        chars: chars,
        charMatches: charMatches,
        score: scores,
        pinyin: displaySyllables(surname.syllables.concat(givenSyllables)),
        givenPinyin: displaySyllables(givenSyllables),
        tonePattern: givenSyllables.map(function (item) { return item.tone; }).join(" · "),
        fullTonePattern: surname.syllables.concat(givenSyllables).map(function (item) {
          return item.tone;
        }).join(" · "),
        allTags: scores.unionTags,
        lowPriority: chars.some(function (entry) { return entry.lowPriority; }),
        weight: Math.max(weight, 0.001)
      };
    }).filter(Boolean);

    if (!scored.length) {
      return {
        names: [],
        meta: {
          exhausted: true,
          strict: strict,
          fallback: selectedImagery.length > 0 && !strict
        }
      };
    }

    const available = scored.filter(function (item) { return !excluded[item.name]; });
    if (!available.length) {
      return {
        names: [],
        meta: {
          exhausted: true,
          strict: strict,
          fallback: selectedImagery.length > 0 && !strict,
          totalCandidates: scored.length
        }
      };
    }

    const picked = pickNames(available, count, rng);
    const names = picked.map(function (item) {
      const tags = item.allTags.slice(0, 4);
      const selectedHits = item.score.selectedHits;
      const matchNames = tagNames(selectedHits);
      const allTagNames = tagNames(tags);
      const charDescriptions = item.chars.map(function (entry) {
        return {
          char: entry.char,
          pinyin: displaySyllable(entry),
          meaning: entry.meaning,
          tags: tagNames(entry.tags),
          matched: entry.tags.filter(function (tag) {
            return selectedImagery.indexOf(tag) !== -1;
          }).map(function (tag) { return DATA.imageryById[tag].name; })
        };
      });
      const imageryNote = selectedImagery.length
        ? (matchNames.length
          ? "意象落在" + matchNames.join("、") + "。"
          : "所选意象与可用字交集较少，此名优先保留音韵与字义。")
        : "未限定意象，由字义与音韵综合推荐。";
      const soundNote = (toneOption ? "全名声调 " + toneOption.fullTones.join(" · ") +
        "，" + toneOption.label + "；" : "") +
        (syllableOption ? "音节组合" + syllableOption.label + "。" : "");
      return {
        name: item.name,
        pinyin: item.pinyin,
        givenPinyin: item.givenPinyin,
        tonePattern: item.tonePattern,
        fullTonePattern: item.fullTonePattern,
        score: item.score.overall,
        scoreParts: {
          tone: item.score.tone,
          sound: item.score.sound,
          meaning: item.score.meaning
        },
        chars: charDescriptions,
        tags: allTagNames,
        imageryTags: matchNames,
        imageryNote: imageryNote,
        soundNote: soundNote,
        meaningLine: charDescriptions.map(function (detail) {
          return "「" + detail.char + "」" + detail.meaning;
        }).join(""),
        matchedTags: selectedHits,
        fit: selectedImagery.length
          ? Math.round(selectedHits.length / selectedImagery.length * 100)
          : 100
      };
    });

    return {
      names: names.sort(function (a, b) { return b.score - a.score; }),
      meta: {
        exhausted: false,
        strict: strict,
        fallback: selectedImagery.length > 0 && !strict,
        totalCandidates: scored.length,
        availableCandidates: available.length
      }
    };
  }

  window.NameEngine = {
    parseTonePinyin: parseTonePinyin,
    displaySyllable: displaySyllable,
    displaySyllables: displaySyllables,
    toneName: toneName,
    resolveSurname: resolveSurname,
    buildToneOptions: buildToneOptions,
    buildSyllableOptions: buildSyllableOptions,
    searchSyllableOptions: searchSyllableOptions,
    imageryAvailability: imageryAvailability,
    getNamingExamples: getNamingExamples,
    getSurnameExamples: getSurnameExamples,
    recommendNames: recommendNames,
    BLOCKED_NAMES: BLOCKED_NAMES,
    LOW_PRIORITY_FACTOR: LOW_PRIORITY_FACTOR
  };
})();
