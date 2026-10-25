# Third-party notices

`js/data.js` includes generated character glosses and readings derived from the
following projects. The generated blocks are produced by
`scripts/build-characters.cjs` and `scripts/build-example-fills.cjs`; the original
data files are downloaded at build time and are not committed.

## General Standard Chinese Characters

- Project: `ben-hua/general_standard_chinese`
- Commit: `ec5f981f64027e89fcb536da12a9c7b6f8eb2d7e`
- Files: `gsc_level_1.txt`, `gsc_pinyin_with_tone.csv`
- License: Apache License 2.0
- Use: the 3500-character level-1 list and Mandarin readings.

## Chinese Xinhua Dictionary data

- Project: `pwxcoo/chinese-xinhua`
- Commit: `fe6d6c2e8baa82187f4c96bbe042e43f96c05666`
- File: `data/word.json`
- License: MIT License
- Use: short character glosses, filtered and truncated for display.

## Chinese Names Corpus

- Project: `wainshine/Chinese-Names-Corpus`
- Commit: `47d4af8d816f6212787ddfc49173cac3b994b58d`
- File: `Chinese_Names_Corpus/Chinese_Names_Corpus（120W）.txt`
- License: Apache License 2.0
- Use: build-time frequency counting to decide which level-1 characters are
  suitable for given names, and real same-surname name examples for tone
  combinations that have no curated example.

## Manual overrides

`scripts/character-overrides.json` contains hand-written glosses, tags, and
nameability decisions that take precedence over the generated values.