(function () {
  "use strict";

  const DATA = window.NameData;
  const ENGINE = window.NameEngine;
  const PAGE_SIZE = 12;
  const MAX_IMAGERY = DATA.maxImagery;

  const TONE_PATHS = {
    1: "M4 11 L36 11",
    2: "M4 17 C15 17 26 13 36 4",
    3: "M4 5 C13 20 24 21 36 6",
    4: "M4 4 C17 9 28 14 36 18"
  };

  const STEP_NAMES = ["起笔", "择声", "选音", "取象", "遇见", "定名"];

  function initialState() {
    return {
      step: 1,
      surname: null,
      nameLength: 2,
      toneOptions: [],
      toneOption: null,
      syllableCacheKey: "",
      syllableOptions: [],
      syllableOption: null,
      syllableQuery: "",
      syllablePage: 0,
      imageryIds: [],
      recommendations: [],
      recMeta: null,
      seenNames: {},
      favorites: [],
      finalName: null
    };
  }

  let state = initialState();
  let toastTimer = null;
  const els = {};

  function $(id) {
    return document.getElementById(id);
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function charArray(value) {
    return Array.from(String(value || ""));
  }

  function nameChars(value) {
    return charArray(value);
  }

  function normalizeQuery(value) {
    return String(value || "").toLowerCase().replace(/[\s·,，/]+/g, "");
  }

  function formatNumber(value) {
    return Number(value).toLocaleString("zh-CN");
  }

  function cacheElements() {
    [
      "brand-home", "reset-button", "stepper", "mobile-slip", "mobile-surname",
      "mobile-given", "mobile-meta", "step-viewport", "surname-form", "surname-input",
      "surname-reading", "surname-hint", "manual-reading", "manual-reading-input",
      "apply-manual", "common-surnames", "length-toggle", "surname-submit",
      "slip-state", "slip-surname", "slip-given", "slip-pinyin", "slip-length",
      "slip-tones", "slip-syllables", "slip-imagery", "slip-progress-value",
      "slip-progress-bar", "slip-review", "tone-surname", "tone-context-name",
      "tone-context-length", "tone-grid", "tone-continue", "chosen-tone-value",
      "tone-examples-panel", "tone-examples-subtitle", "tone-examples-strip",
      "syllable-search", "syllable-grid", "syllable-empty", "syllable-count",
      "syllable-more", "syllable-continue", "examples-panel", "examples-subtitle",
      "examples-strip", "imagery-syllables",
      "imagery-selection-count", "imagery-grid", "generate-button",
      "recommend-pinyin", "recommend-imagery", "regenerate-button",
      "recommend-note", "name-grid", "fav-count", "review-button", "final-slip",
      "review-count", "review-options", "restart-review", "copy-report", "toast"
    ].forEach(function (id) {
      const key = id.replace(/-([a-z])/g, function (_, letter) { return letter.toUpperCase(); });
      els[key] = $(id);
    });
  }

  function stepLabel() {
    return STEP_NAMES[Math.min(state.step, STEP_NAMES.length) - 1];
  }

  function completedCount() {
    if (state.finalName) return 6;
    if (state.recommendations.length) return 5;
    if (state.imageryIds.length) return 4;
    if (state.syllableOption) return 3;
    if (state.toneOption) return 2;
    if (state.surname) return 1;
    return 0;
  }

  function isFavorite(name) {
    return state.favorites.some(function (item) { return item.name === name; });
  }

  function currentFavorite() {
    if (!state.favorites.length) return null;
    return state.favorites.find(function (item) { return item.name === state.finalName; }) || state.favorites[0];
  }

  function syllableKey(option) {
    if (!option) return "";
    return option.givenSyllables.map(function (item) {
      return item.syllable + item.tone;
    }).join("-");
  }

  function toneKey(option) {
    return option ? option.givenTones.join("-") : "";
  }

  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      els.toast.classList.remove("is-visible");
    }, 2500);
  }

  function clearError() {
    els.surnameHint.textContent = "支持常见单姓与复姓；读音会自动匹配。";
    els.surnameHint.classList.remove("is-error");
    els.surnameInput.removeAttribute("aria-invalid");
    els.surnameInput.parentElement.classList.remove("is-error");
  }

  function showError(message, manualAllowed) {
    els.surnameHint.textContent = message;
    els.surnameHint.classList.add("is-error");
    els.surnameInput.setAttribute("aria-invalid", "true");
    els.surnameInput.parentElement.classList.add("is-error");
    if (manualAllowed) {
      els.manualReading.hidden = false;
      window.requestAnimationFrame(function () {
        els.manualReadingInput.focus();
      });
    }
  }

  function resetAfterToneSelection() {
    state.syllableCacheKey = "";
    state.syllableOptions = [];
    state.syllableOption = null;
    state.syllableQuery = "";
    state.syllablePage = 0;
    state.recommendations = [];
    state.recMeta = null;
    state.seenNames = {};
    state.favorites = [];
    state.finalName = null;
    els.syllableSearch.value = "";
    updateFavoriteUI();
  }

  function resetAfterSyllableSelection() {
    state.recommendations = [];
    state.recMeta = null;
    state.seenNames = {};
    state.favorites = [];
    state.finalName = null;
    updateFavoriteUI();
  }

  function resetAfterImagerySelection() {
    state.recommendations = [];
    state.recMeta = null;
    state.seenNames = {};
    state.favorites = [];
    state.finalName = null;
    updateFavoriteUI();
  }

  function resetEverything() {
    state = initialState();
    els.surnameInput.value = "";
    els.surnameReading.textContent = "等待落笔";
    els.surnameHint.textContent = "支持常见单姓与复姓；读音会自动匹配。";
    els.manualReadingInput.value = "";
    els.manualReading.hidden = true;
    els.syllableSearch.value = "";
    els.surnameHint.classList.remove("is-error");
    els.surnameInput.removeAttribute("aria-invalid");
    els.surnameInput.parentElement.classList.remove("is-error");
    els.toneGrid.innerHTML = "";
    els.syllableGrid.innerHTML = "";
    els.imageryGrid.innerHTML = "";
    els.nameGrid.innerHTML = "";
    els.finalSlip.innerHTML = "";
    els.reviewOptions.innerHTML = "";
    updateLengthButtons();
    updateSummary();
    updateStepper();
    goToStep(1, { scroll: false, focus: true });
  }

  function updateLengthButtons() {
    Array.from(els.lengthToggle.querySelectorAll("[data-length]")).forEach(function (button) {
      const active = Number(button.dataset.length) === state.nameLength;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function updateSurnamePreview() {
    const value = els.surnameInput.value.trim();
    if (!value) {
      els.surnameReading.textContent = "等待落笔";
      return;
    }
    const manual = els.manualReading.hidden ? "" : els.manualReadingInput.value.trim();
    const resolved = ENGINE.resolveSurname(value, manual);
    els.surnameReading.textContent = resolved.ok ? resolved.pinyin : "读音待确认";
  }

  function buildCommonSurnames() {
    els.commonSurnames.innerHTML = DATA.commonSurnames.map(function (surname) {
      return '<button class="surname-chip" type="button" data-surname="' +
        esc(surname) + '">' + esc(surname) + "</button>";
    }).join("");
  }

  function submitSurname(manualValue) {
    const text = els.surnameInput.value.trim();
    if (!text) {
      showError("请先输入姓氏。", false);
      els.surnameInput.focus();
      return;
    }
    const reading = manualValue !== undefined
      ? manualValue
      : (els.manualReading.hidden ? "" : els.manualReadingInput.value.trim());
    const resolved = ENGINE.resolveSurname(text, reading);
    if (!resolved.ok) {
      showError(resolved.error, Boolean(resolved.manualAllowed));
      return;
    }

    const isNewSurname = !state.surname || state.surname.text !== resolved.text;
    if (isNewSurname) {
      state.toneOption = null;
      state.toneOptions = [];
      state.syllableCacheKey = "";
      state.syllableOptions = [];
      state.syllableOption = null;
      state.syllableQuery = "";
      state.syllablePage = 0;
      state.imageryIds = [];
      state.recommendations = [];
      state.recMeta = null;
      state.seenNames = {};
      state.favorites = [];
      state.finalName = null;
      els.syllableSearch.value = "";
    }

    state.surname = resolved;
    clearError();
    els.manualReading.hidden = true;
    els.surnameReading.textContent = resolved.pinyin;
    state.toneOptions = ENGINE.buildToneOptions(resolved.syllables, state.nameLength);
    if (state.toneOption) {
      const key = toneKey(state.toneOption);
      state.toneOption = state.toneOptions.find(function (option) {
        return toneKey(option) === key;
      }) || null;
    }

    renderToneStep();
    updateSummary();
    updateStepper();
    goToStep(2);
  }

  function renderToneStep() {
    if (!state.surname) return;
    const surnameLength = state.surname.syllables.length;
    els.toneSurname.textContent = state.surname.text;
    els.toneContextName.textContent = state.surname.text + " · " + state.surname.pinyin;
    els.toneContextLength.textContent = state.nameLength === 1
      ? "单字名，需要选择一个声调"
      : "双字名，需要选择一个“声调 + 声调”组合";
    els.toneGrid.innerHTML = state.toneOptions.map(function (option, index) {
      const selected = state.toneOption === option ||
        (state.toneOption && toneKey(state.toneOption) === toneKey(option));
      const nodes = option.fullTones.map(function (tone, toneIndex) {
        const isSurname = toneIndex < surnameLength;
        const label = isSurname
          ? charArray(state.surname.text)[toneIndex]
          : ENGINE.toneName(tone);
        return '<span class="tone-node' + (isSurname ? " is-surname" : "") + '">' +
          '<svg class="tone-svg" viewBox="0 0 40 22" aria-hidden="true"><path d="' +
          TONE_PATHS[tone] + '"/></svg>' +
          '<span class="tone-node-label">' + esc(label) + "</span></span>";
      }).join("");
      const reasons = option.reasons.slice(0, 2).map(function (reason) {
        return reason.text;
      }).join(" · ");
      return '<button class="tone-card' + (selected ? " is-selected" : "") +
        '" type="button" data-tone-index="' + index + '" aria-pressed="' + String(selected) +
        '" style="--i:' + index + '">' +
        '<span class="tone-top"><span class="tone-index">NO. ' + pad(index + 1) +
        '</span><span class="tone-score">' + option.score + '<small>分</small></span></span>' +
        '<span class="tone-curves">' + nodes + "</span>" +
        '<span class="tone-numbers">' + option.fullTones.join(" · ") + "</span>" +
        '<span class="tone-bottom"><span class="pingze-pill">' + option.pingZe.join("") +
        '</span><span class="tone-label">' + esc(option.label) + "</span></span>" +
        '<span class="tone-reason">' + esc(reasons) + "</span></button>";
    }).join("");
    els.toneContinue.disabled = !state.toneOption;
    renderToneExamples();
  }

  function ensureSyllableOptions() {
    if (!state.surname || !state.toneOption) return;
    const key = state.surname.syllables.map(function (item) { return item.tone; }).join("") +
      "|" + toneKey(state.toneOption) + "|" + state.nameLength;
    if (state.syllableCacheKey === key && state.syllableOptions.length) return;
    state.syllableCacheKey = key;
    state.syllableOptions = ENGINE.buildSyllableOptions(
      state.surname.syllables,
      state.toneOption.givenTones,
      { limit: 20000 }
    );
    state.syllablePage = 0;
    state.syllableQuery = "";
    state.syllableOption = null;
    els.syllableSearch.value = "";
  }

  function filteredSyllables() {
    const query = normalizeQuery(state.syllableQuery);
    if (!query) return state.syllableOptions;
    return state.syllableOptions.filter(function (option) {
      return normalizeQuery(option.searchText).indexOf(query) !== -1;
    });
  }

  function updateChosenTone() {
    if (!state.toneOption) {
      els.chosenToneValue.textContent = "—";
      return;
    }
    els.chosenToneValue.textContent = state.toneOption.fullTones.join(" · ") +
      " / " + state.toneOption.pingZe.join("");
  }

  function renderExamplesInto(panel, subtitle, strip) {
    if (!state.toneOption || !state.surname) {
      panel.hidden = true;
      return;
    }
    const examples = ENGINE.getNamingExamples(
      state.toneOption.givenTones,
      state.nameLength,
      3
    );
    if (!examples.length) {
      panel.hidden = true;
      return;
    }
    const surnameText = state.surname.text;
    const fullToneNames = state.surname.tones
      .concat(state.toneOption.givenTones)
      .map(ENGINE.toneName)
      .join(" · ");
    const typeLabels = { 史: "历史人物", 文: "文学形象", 诗: "诗文意象" };
    subtitle.textContent = "与「" + surnameText + "」连读 · 全名声调 " +
      fullToneNames;
    strip.innerHTML = examples.map(function (example) {
      return '<article class="example-card">' +
        '<div class="example-top"><span class="example-name">' +
        '<span class="example-surname">' + esc(surnameText) + "</span>" +
        '<span class="example-join"> + </span>' + esc(example.given) +
        '</span><span class="example-type" title="' + esc(typeLabels[example.type] || "名例") +
        '">' + esc(example.type) + "</span></div>" +
        '<div class="example-pinyin">' + esc(state.surname.pinyin + " " + example.pinyinDisplay) +
        "</div>" +
        '<div class="example-origin">名例 · ' + esc(example.origin) + "</div>" +
        '<p class="example-note">' + esc(example.note) + "</p>" +
        "</article>";
    }).join("");
    panel.hidden = false;
  }

  function renderNamingExamples() {
    renderExamplesInto(els.examplesPanel, els.examplesSubtitle, els.examplesStrip);
  }

  function renderToneExamples() {
    renderExamplesInto(
      els.toneExamplesPanel,
      els.toneExamplesSubtitle,
      els.toneExamplesStrip
    );
  }

  function renderSyllableList() {
    renderNamingExamples();
    const options = filteredSyllables();
    const pageCount = Math.max(1, Math.ceil(options.length / PAGE_SIZE));
    if (state.syllablePage >= pageCount) state.syllablePage = pageCount - 1;
    if (state.syllablePage < 0) state.syllablePage = 0;
    const start = state.syllablePage * PAGE_SIZE;
    const visible = options.slice(start, start + PAGE_SIZE);
    const selectedKey = syllableKey(state.syllableOption);

    els.syllableGrid.innerHTML = visible.map(function (option, index) {
      const key = syllableKey(option);
      const selected = key === selectedKey;
      const samples = option.samples.map(function (chars) {
        return chars.join(" · ");
      }).join(' <span>/</span> ');
      const reasons = option.reasons.slice(0, 3).map(function (reason) {
        return '<span class="reason-chip' + (reason.type === "minus" ? " is-minus" : "") +
          '">' + esc(reason.text) + "</span>";
      }).join("");
      return '<button class="syllable-card' + (selected ? " is-selected" : "") +
        '" type="button" data-key="' + esc(key) + '" aria-pressed="' + String(selected) +
        '">' +
        '<span class="syllable-main">' +
        '<span class="syllable-rank">NO. ' + pad(start + index + 1) + "</span>" +
        '<span class="syllable-pinyin">' + esc(option.givenPinyin) + "</span>" +
        '<span class="syllable-samples">' + samples + "</span>" +
        '<span class="syllable-reasons">' + reasons + "</span></span>" +
        '<span class="syllable-score"><strong>' + option.score + '</strong>' +
        '<span>' + esc(option.label) + '</span>' +
        '<span class="syllable-support">可用字<br>' + option.support.join(" + ") + "</span></span>" +
        "</button>";
    }).join("");

    const hasOptions = options.length > 0;
    els.syllableEmpty.hidden = hasOptions;
    els.syllableGrid.hidden = !hasOptions;
    els.syllableCount.textContent = !hasOptions
      ? "共 0 组"
      : "共 " + formatNumber(options.length) + " 组 · 显示 " +
        formatNumber(start + 1) + "–" + formatNumber(Math.min(start + PAGE_SIZE, options.length));
    els.syllableMore.disabled = pageCount <= 1;
    els.syllableContinue.disabled = !state.syllableOption;
    updateChosenTone();
  }

  function renderImagery() {
    if (!state.syllableOption) return;
    const availability = ENGINE.imageryAvailability(state.syllableOption.givenSyllables);
    const single = state.syllableOption.givenSyllables.length === 1;
    els.imagerySyllables.textContent = state.surname.pinyin + " · " +
      state.syllableOption.givenPinyin;
    els.imagerySelectionCount.textContent = "已选 " + state.imageryIds.length + " / " + MAX_IMAGERY;
    els.imageryGrid.innerHTML = availability.map(function (image) {
      const selected = state.imageryIds.indexOf(image.id) !== -1;
      let countLabel;
      if (image.combinations > 0) {
        countLabel = single
          ? "可用 " + image.characterCount + " 字"
          : "可组 " + formatNumber(image.combinations) + " 名";
      } else if (image.characterCount > 0) {
        countLabel = "仅部分位置匹配";
      } else {
        countLabel = "此意象可用字较少";
      }
      return '<button class="imagery-card' + (selected ? " is-selected" : "") +
        '" type="button" data-imagery="' + esc(image.id) + '" aria-pressed="' +
        String(selected) + '">' +
        '<span class="imagery-glyph" aria-hidden="true">' + esc(image.glyph) + "</span>" +
        '<span class="imagery-copy"><strong>' + esc(image.name) + "</strong><small>" +
        esc(image.desc) + "</small></span>" +
        '<span class="imagery-count">' + esc(countLabel) + "</span></button>";
    }).join("");
    els.generateButton.disabled = state.imageryIds.length === 0;
  }

  function generateRecommendations(options) {
    if (!state.surname || !state.syllableOption || !state.imageryIds.length) return false;
    const settings = options || {};
    if (settings.resetSeen) {
      state.seenNames = {};
    }
    let result = ENGINE.recommendNames({
      surname: state.surname,
      givenSyllables: state.syllableOption.givenSyllables,
      imageryIds: state.imageryIds,
      toneOption: state.toneOption,
      syllableOption: state.syllableOption,
      count: 6,
      exclude: state.seenNames
    });
    if (!result.names.length && !settings.resetSeen) {
      state.seenNames = {};
      result = ENGINE.recommendNames({
        surname: state.surname,
        givenSyllables: state.syllableOption.givenSyllables,
        imageryIds: state.imageryIds,
        toneOption: state.toneOption,
        syllableOption: state.syllableOption,
        count: 6,
        exclude: state.seenNames
      });
      if (result.names.length) {
        showToast("已翻完一轮，为你重新开始推荐。");
      }
    }
    if (!result.names.length) {
      showToast("暂时没有更多组合，请调整意象或音节。");
      return false;
    }
    result.names.forEach(function (item) {
      state.seenNames[item.name] = true;
    });
    state.recommendations = result.names;
    state.recMeta = result.meta;
    renderRecommendations();
    updateSummary();
    updateStepper();
    return true;
  }

  function renderRecommendations() {
    if (!state.syllableOption) return;
    els.recommendPinyin.textContent = state.surname.pinyin + " · " +
      state.syllableOption.givenPinyin;
    els.recommendImagery.innerHTML = state.imageryIds.map(function (id) {
      const image = DATA.imageryById[id];
      return '<span class="mini-tag">' + esc(image.name) + "</span>";
    }).join("");

    if (state.recMeta && state.recMeta.fallback) {
      els.recommendNote.hidden = false;
      els.recommendNote.textContent = "所选音节下，意象可用字有限，已放宽匹配范围；推荐仍会优先考虑你选的意象。";
    } else if (state.recMeta && state.recMeta.strict) {
      els.recommendNote.hidden = false;
      els.recommendNote.textContent = "以下名字均匹配了至少一项所选意象，并兼顾声调与音节。";
    } else {
      els.recommendNote.hidden = true;
      els.recommendNote.textContent = "";
    }

    const surnameLength = charArray(state.surname.text).length;
    els.nameGrid.innerHTML = state.recommendations.map(function (name, index) {
      const nameArray = nameChars(name.name);
      const display = nameArray.map(function (character, charIndex) {
        return '<span' + (charIndex < surnameLength ? ' class="surname-char"' : "") +
          ">" + esc(character) + "</span>";
      }).join("");
      const tags = name.tags.map(function (tag) {
        const matched = name.imageryTags.indexOf(tag) !== -1;
        return '<span class="name-tag' + (matched ? " is-match" : "") + '">' + esc(tag) + "</span>";
      }).join("");
      const favorite = isFavorite(name.name);
      const bars = [
        ["声调", name.scoreParts.tone],
        ["音节", name.scoreParts.sound],
        ["字义", name.scoreParts.meaning]
      ].map(function (pair) {
        const value = Math.max(0, Math.min(100, Math.round(pair[1])));
        return '<span class="score-bar"><span>' + pair[0] +
          '</span><span class="score-track"><b style="width:' + value +
          '%"></b></span><em>' + value + "</em></span>";
      }).join("");
      return '<article class="name-card' + (favorite ? " is-favorite" : "") +
        '" data-name="' + esc(name.name) + '" style="--i:' + index + '">' +
        '<div class="name-card-top"><span class="name-order">NO. ' + pad(index + 1) +
        '</span><button class="fav-button" type="button" data-favorite="' + esc(name.name) +
        '" aria-pressed="' + String(favorite) + '" aria-label="' +
        (favorite ? "取消收藏 " : "收藏 ") + esc(name.name) + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>' +
        '<span class="fav-label">' + (favorite ? "已收藏" : "收藏") + "</span></button></div>" +
        '<div class="name-card-head"><div class="name-display' +
        (nameArray.length > 3 ? " is-long" : "") + '">' + display + "</div>" +
        '<div class="name-score"><strong>' + name.score +
        '</strong><span>综合评分</span></div></div>' +
        '<div class="name-pinyin">' + esc(name.pinyin) + "</div>" +
        '<div class="score-bars">' + bars + "</div>" +
        '<p class="name-meaning">' + esc(name.meaningLine) + "</p>" +
        '<div class="name-tags">' + tags + "</div>" +
        '<p class="name-imagery-note">' + esc(name.imageryNote) + "</p>" +
        '<div class="name-meta"><span>声调 ' + esc(name.tonePattern) +
        "</span><span>意象契合 " + name.fit + "%</span></div></article>";
    }).join("");
    updateFavoriteUI();
  }

  function updateFavoriteUI() {
    const favoriteMap = {};
    state.favorites.forEach(function (item) { favoriteMap[item.name] = true; });
    Array.from(els.nameGrid.querySelectorAll(".name-card")).forEach(function (card) {
      const name = card.dataset.name;
      const favorite = Boolean(favoriteMap[name]);
      card.classList.toggle("is-favorite", favorite);
      const button = card.querySelector(".fav-button");
      if (!button) return;
      button.setAttribute("aria-pressed", String(favorite));
      button.setAttribute("aria-label", (favorite ? "取消收藏 " : "收藏 ") + name);
      const label = button.querySelector(".fav-label");
      if (label) label.textContent = favorite ? "已收藏" : "收藏";
    });
    els.favCount.textContent = String(state.favorites.length);
    els.reviewButton.disabled = state.favorites.length === 0;
    els.slipReview.hidden = state.favorites.length === 0;
    els.slipReview.textContent = "查看名帖 · " + state.favorites.length;
    updateSummary();
    updateStepper();
  }

  function toggleFavorite(name) {
    const existing = state.favorites.findIndex(function (item) { return item.name === name; });
    if (existing !== -1) {
      state.favorites.splice(existing, 1);
      if (state.finalName === name) state.finalName = null;
      showToast("已取消收藏「" + name + "」。");
    } else {
      const recommendation = state.recommendations.find(function (item) { return item.name === name; });
      if (!recommendation) return;
      state.favorites.push(recommendation);
      showToast("已收藏「" + name + "」，可以继续挑选。");
    }
    updateFavoriteUI();
  }

  function renderReview() {
    const selected = currentFavorite();
    if (!selected) {
      state.finalName = null;
      els.finalSlip.innerHTML = '<div class="empty-review"><div><strong>名帖还是空的</strong>' +
        '<p>回到推荐页收藏一个名字，再回来做最后的 review。</p>' +
        '<button class="primary-button" type="button" data-goto="5">返回推荐</button></div></div>';
      els.reviewOptions.innerHTML = "";
      els.reviewCount.textContent = "0";
      els.copyReport.disabled = true;
      updateSummary();
      updateStepper();
      return;
    }

    state.finalName = selected.name;
    const nameArray = nameChars(selected.name);
    const surnameLength = charArray(state.surname.text).length;
    const nameDisplay = nameArray.map(function (character, index) {
      return '<span' + (index < surnameLength ? ' class="surname-char"' : "") + ">" +
        esc(character) + "</span>";
    }).join("");
    const tags = selected.tags.map(function (tag) {
      const matched = selected.imageryTags.indexOf(tag) !== -1;
      return '<span' + (matched ? ' class="is-match"' : "") + ">" + esc(tag) + "</span>";
    }).join("");
    const bars = [
      ["声调", selected.scoreParts.tone],
      ["音节", selected.scoreParts.sound],
      ["字义", selected.scoreParts.meaning]
    ].map(function (pair) {
      const value = Math.max(0, Math.min(100, Math.round(pair[1])));
      return '<span class="final-bar"><span>' + pair[0] +
        '</span><span class="score-track"><b style="width:' + value +
        '%"></b></span><em>' + value + "</em></span>";
    }).join("");
    const details = selected.chars.map(function (detail) {
      return '<div class="final-detail"><span class="final-detail-char">' +
        esc(detail.char) + '</span><div class="final-detail-copy"><strong>' +
        esc(detail.pinyin) + " · " + esc(detail.tags.join(" / ")) + "</strong><p>" +
        esc(detail.meaning) + "</p></div></div>";
    }).join("");
    const pingze = state.toneOption ? " · " + state.toneOption.pingZe.join("") : "";
    const finalNote = "声调 " + selected.fullTonePattern + pingze +
      (state.toneOption ? "，" + state.toneOption.label : "") +
      (state.syllableOption ? "；音节组合" + state.syllableOption.label : "") +
      "。" + selected.imageryNote;
    els.finalSlip.innerHTML =
      '<div class="final-kicker"><span>FINAL NAMEPAPER</span><i aria-hidden="true"></i>' +
      "<span>最终名帖</span></div>" +
      '<div class="final-name' + (nameArray.length > 3 ? " is-long" : "") + '">' +
      nameDisplay + "</div>" +
      '<div class="final-pinyin">' + esc(selected.pinyin) + "</div>" +
      '<div class="final-tags">' + tags + "</div>" +
      '<div class="final-score-row"><div class="final-total"><strong>' + selected.score +
      '</strong><span>综合评分</span></div><div class="final-bars">' + bars + "</div></div>" +
      '<div class="final-details">' + details + "</div>" +
      '<p class="final-note">' + esc(finalNote) + "</p>";

    renderReviewOptions(selected);
    els.reviewCount.textContent = String(state.favorites.length);
    els.copyReport.disabled = false;
    updateSummary();
    updateStepper();
  }

  function renderReviewOptions(selected) {
    els.reviewOptions.innerHTML = state.favorites.map(function (item) {
      const active = item.name === selected.name;
      return '<div class="review-option' + (active ? " is-active" : "") + '">' +
        '<div class="review-option-main"><button class="review-choose" type="button" data-review-name="' +
        esc(item.name) + '" aria-pressed="' + String(active) + '">' +
        '<span class="review-option-name">' + esc(item.name) + "</span>" +
        '<span class="review-option-pinyin">' + esc(item.pinyin) + "</span></button>" +
        '<span class="review-option-score">' + item.score + "</span></div>" +
        '<button class="review-remove" type="button" data-remove-name="' + esc(item.name) +
        '">移除</button></div>';
    }).join("");
  }

  function openReview() {
    if (!state.favorites.length) {
      showToast("先收藏至少一个名字，再查看名帖。");
      return;
    }
    if (!state.favorites.some(function (item) { return item.name === state.finalName; })) {
      state.finalName = state.favorites[0].name;
    }
    renderReview();
    goToStep(6);
  }

  function copyReport() {
    const selected = currentFavorite();
    if (!selected) {
      showToast("还没有可复制的名帖。");
      return;
    }
    const report = [
      "名笺 · " + selected.name,
      "拼音：" + selected.pinyin,
      "综合评分：" + selected.score + "（声调 " + selected.scoreParts.tone +
        " / 音节 " + selected.scoreParts.sound + " / 字义 " + selected.scoreParts.meaning + "）",
      "声调：" + selected.fullTonePattern +
        (state.toneOption ? " · " + state.toneOption.pingZe.join("") : ""),
      "音节组合：" + (state.syllableOption ? state.syllableOption.givenPinyin : ""),
      "意象：" + (selected.imageryTags.length ? selected.imageryTags.join("、") : selected.tags.slice(0, 3).join("、")),
      "",
      "字义：",
      selected.chars.map(function (detail) {
        return "「" + detail.char + "」" + detail.meaning;
      }).join("\n"),
      "",
      selected.soundNote,
      selected.imageryNote,
      "",
      "—— 名笺 · 以声调、音节与字义为据"
    ].join("\n");

    function fallbackCopy() {
      const textarea = document.createElement("textarea");
      textarea.value = report;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.style.pointerEvents = "none";
      document.body.appendChild(textarea);
      textarea.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (error) {
        ok = false;
      }
      document.body.removeChild(textarea);
      if (ok) showToast("名帖已复制。");
      else showToast("复制失败，请手动选择名帖文字。");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(report).then(function () {
        showToast("名帖已复制。");
      }).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  function updateSummary() {
    const selected = state.finalName
      ? state.favorites.find(function (item) { return item.name === state.finalName; })
      : null;
    const surnameText = state.surname ? state.surname.text : "姓";
    const count = state.nameLength;
    if (selected) {
      const all = nameChars(selected.name);
      const surnameLength = charArray(surnameText).length;
      els.slipGiven.innerHTML = all.slice(surnameLength).map(function (character) {
        return "<span>" + esc(character) + "</span>";
      }).join("");
    } else {
      els.slipGiven.innerHTML = new Array(count).fill(0).map(function () {
        return '<span class="placeholder">？</span>';
      }).join("");
    }
    els.slipSurname.textContent = surnameText;
    let pinyin = "尚未落字";
    if (selected) pinyin = selected.pinyin;
    else if (state.surname && state.syllableOption) {
      pinyin = state.surname.pinyin + " · " + state.syllableOption.givenPinyin;
    } else if (state.surname && state.toneOption) {
      pinyin = state.surname.pinyin + " · " + state.toneOption.fullTones.join(" · ");
    } else if (state.surname) {
      pinyin = state.surname.pinyin;
    }
    els.slipPinyin.textContent = pinyin;
    els.slipLength.textContent = count === 1 ? "单字名" : "双字名";
    els.slipTones.textContent = state.toneOption
      ? state.toneOption.fullTones.join(" · ") + " / " + state.toneOption.pingZe.join("")
      : "待定";
    els.slipSyllables.textContent = state.syllableOption
      ? state.syllableOption.givenPinyin
      : "待定";
    els.slipImagery.textContent = state.imageryIds.length
      ? state.imageryIds.map(function (id) { return DATA.imageryById[id].name; }).join(" / ")
      : "待定";
    els.slipState.textContent = state.finalName ? "定名" : stepLabel();
    const done = completedCount();
    els.slipProgressValue.textContent = done + " / 6";
    els.slipProgressBar.style.width = (done / 6 * 100) + "%";
    els.slipReview.hidden = state.favorites.length === 0;
    els.slipReview.textContent = "查看名帖 · " + state.favorites.length;

    const given = selected
      ? nameChars(selected.name).slice(charArray(surnameText).length).join("")
      : new Array(count).fill("？").join("");
    els.mobileSurname.textContent = surnameText;
    els.mobileGiven.textContent = given;
    let mobileMeta = "从姓氏开始";
    if (selected) mobileMeta = selected.pinyin + " · " + selected.score + " 分";
    else if (state.surname && state.syllableOption) {
      mobileMeta = state.surname.pinyin + " · " + state.syllableOption.givenPinyin;
    } else if (state.surname && state.toneOption) {
      mobileMeta = state.surname.pinyin + " · 声调 " + state.toneOption.fullTones.join(" · ");
    } else if (state.surname) {
      mobileMeta = state.surname.pinyin;
    }
    els.mobileMeta.textContent = mobileMeta;
  }

  function updateStepper() {
    const availability = {
      1: true,
      2: state.toneOptions.length > 0,
      3: Boolean(state.toneOption),
      4: Boolean(state.syllableOption),
      5: state.recommendations.length > 0,
      6: state.favorites.length > 0
    };
    const done = {
      1: Boolean(state.surname),
      2: Boolean(state.toneOption),
      3: Boolean(state.syllableOption),
      4: state.imageryIds.length > 0,
      5: state.favorites.length > 0,
      6: Boolean(state.finalName)
    };
    Array.from(els.stepper.querySelectorAll(".step-item")).forEach(function (button) {
      const step = Number(button.dataset.step);
      button.disabled = !availability[step];
      button.classList.toggle("is-active", step === state.step);
      button.classList.toggle("is-done", step !== state.step && done[step]);
      if (step === state.step) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
  }

  function goToStep(step, options) {
    const number = Math.max(1, Math.min(6, Number(step)));
    const settings = options || {};
    state.step = number;
    Array.from(els.stepViewport.querySelectorAll(".step-panel")).forEach(function (panel) {
      const active = Number(panel.dataset.step) === number;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
      panel.classList.remove("is-entering");
    });
    const activePanel = els.stepViewport.querySelector('.step-panel[data-step="' + number + '"]');
    if (activePanel) {
      activePanel.classList.add("is-entering");
      window.setTimeout(function () {
        activePanel.classList.remove("is-entering");
      }, 430);
    }
    updateStepper();
    updateSummary();
    if (settings.scroll !== false) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
    if (settings.focus !== false && activePanel) {
      const heading = activePanel.querySelector("h1");
      if (heading) {
        window.setTimeout(function () {
          heading.focus({ preventScroll: true });
        }, settings.scroll === false ? 0 : 180);
      }
    }
  }

  function requestReset() {
    const hasProgress = Boolean(state.surname) || state.step > 1 || state.favorites.length > 0;
    if (hasProgress && !window.confirm("要清空当前名帖并重新开始吗？")) return;
    resetEverything();
    showToast("新的一张名帖，等你落笔。");
  }

  function bindEvents() {
    els.brandHome.addEventListener("click", function (event) {
      event.preventDefault();
      if (state.step !== 1) goToStep(1);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });

    els.resetButton.addEventListener("click", requestReset);
    els.restartReview.addEventListener("click", requestReset);

    els.surnameInput.addEventListener("input", function () {
      clearError();
      els.manualReading.hidden = true;
      updateSurnamePreview();
    });

    els.surnameForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitSurname();
    });

    els.applyManual.addEventListener("click", function () {
      submitSurname(els.manualReadingInput.value.trim());
    });

    els.manualReadingInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitSurname(els.manualReadingInput.value.trim());
      }
    });

    els.commonSurnames.addEventListener("click", function (event) {
      const chip = event.target.closest("[data-surname]");
      if (!chip) return;
      els.surnameInput.value = chip.dataset.surname;
      els.manualReading.hidden = true;
      els.manualReadingInput.value = "";
      clearError();
      updateSurnamePreview();
      els.surnameInput.focus();
    });

    els.lengthToggle.addEventListener("click", function (event) {
      const button = event.target.closest("[data-length]");
      if (!button) return;
      const length = Number(button.dataset.length);
      if (length === state.nameLength) return;
      state.nameLength = length;
      state.toneOptions = [];
      state.toneOption = null;
      state.syllableCacheKey = "";
      state.syllableOptions = [];
      state.syllableOption = null;
      state.syllableQuery = "";
      state.syllablePage = 0;
      state.imageryIds = [];
      state.recommendations = [];
      state.recMeta = null;
      state.seenNames = {};
      state.favorites = [];
      state.finalName = null;
      updateLengthButtons();
      updateFavoriteUI();
      updateSummary();
      updateStepper();
    });

    els.stepper.addEventListener("click", function (event) {
      const button = event.target.closest(".step-item");
      if (!button || button.disabled) return;
      const step = Number(button.dataset.step);
      if (step === 3) ensureSyllableOptions();
      if (step === 3) renderSyllableList();
      if (step === 4) renderImagery();
      if (step === 5) renderRecommendations();
      if (step === 6) {
        openReview();
        return;
      }
      goToStep(step);
    });

    els.toneGrid.addEventListener("click", function (event) {
      const card = event.target.closest("[data-tone-index]");
      if (!card) return;
      const option = state.toneOptions[Number(card.dataset.toneIndex)];
      if (!option) return;
      const changed = !state.toneOption || toneKey(state.toneOption) !== toneKey(option);
      state.toneOption = option;
      if (changed) resetAfterToneSelection();
      renderToneStep();
      updateSummary();
      updateStepper();
    });

    els.toneContinue.addEventListener("click", function () {
      if (!state.toneOption) return;
      ensureSyllableOptions();
      renderSyllableList();
      updateSummary();
      updateStepper();
      goToStep(3);
    });

    els.syllableSearch.addEventListener("input", function () {
      state.syllableQuery = els.syllableSearch.value;
      state.syllablePage = 0;
      renderSyllableList();
    });

    els.syllableGrid.addEventListener("click", function (event) {
      const card = event.target.closest("[data-key]");
      if (!card) return;
      const option = state.syllableOptions.find(function (item) {
        return syllableKey(item) === card.dataset.key;
      });
      if (!option) return;
      const changed = !state.syllableOption || syllableKey(state.syllableOption) !== card.dataset.key;
      state.syllableOption = option;
      if (changed) resetAfterSyllableSelection();
      renderSyllableList();
      updateSummary();
      updateStepper();
    });

    els.syllableMore.addEventListener("click", function () {
      const options = filteredSyllables();
      const pageCount = Math.max(1, Math.ceil(options.length / PAGE_SIZE));
      if (state.syllablePage + 1 >= pageCount) {
        state.syllablePage = 0;
        showToast("已回到第一组。");
      } else {
        state.syllablePage += 1;
      }
      renderSyllableList();
    });

    els.syllableContinue.addEventListener("click", function () {
      if (!state.syllableOption) return;
      state.recommendations = [];
      state.recMeta = null;
      state.seenNames = {};
      renderImagery();
      updateSummary();
      updateStepper();
      goToStep(4);
    });

    els.imageryGrid.addEventListener("click", function (event) {
      const card = event.target.closest("[data-imagery]");
      if (!card) return;
      const id = card.dataset.imagery;
      const index = state.imageryIds.indexOf(id);
      if (index !== -1) {
        state.imageryIds.splice(index, 1);
      } else {
        if (state.imageryIds.length >= MAX_IMAGERY) {
          showToast("最多选择 " + MAX_IMAGERY + " 种意象。");
          return;
        }
        state.imageryIds.push(id);
      }
      resetAfterImagerySelection();
      renderImagery();
      updateSummary();
      updateStepper();
    });

    els.generateButton.addEventListener("click", function () {
      if (!state.imageryIds.length) return;
      state.recommendations = [];
      state.recMeta = null;
      state.seenNames = {};
      if (generateRecommendations({ resetSeen: true })) {
        goToStep(5);
      }
    });

    els.regenerateButton.addEventListener("click", function () {
      generateRecommendations();
    });

    els.nameGrid.addEventListener("click", function (event) {
      const button = event.target.closest("[data-favorite]");
      if (!button) return;
      toggleFavorite(button.dataset.favorite);
    });

    els.reviewButton.addEventListener("click", openReview);
    els.slipReview.addEventListener("click", openReview);

    els.reviewOptions.addEventListener("click", function (event) {
      const remove = event.target.closest("[data-remove-name]");
      if (remove) {
        const name = remove.dataset.removeName;
        const index = state.favorites.findIndex(function (item) { return item.name === name; });
        if (index !== -1) state.favorites.splice(index, 1);
        if (state.finalName === name) {
          state.finalName = state.favorites.length ? state.favorites[0].name : null;
        }
        renderReview();
        return;
      }
      const choose = event.target.closest("[data-review-name]");
      if (choose) {
        state.finalName = choose.dataset.reviewName;
        renderReview();
      }
    });

    els.copyReport.addEventListener("click", copyReport);

    document.addEventListener("click", function (event) {
      const go = event.target.closest("[data-goto]");
      if (!go) return;
      event.preventDefault();
      const step = Number(go.dataset.goto);
      if (step === 5) renderRecommendations();
      goToStep(step);
    });
  }

  function init() {
    cacheElements();
    buildCommonSurnames();
    bindEvents();
    updateLengthButtons();
    updateSummary();
    updateStepper();
    goToStep(1, { scroll: false, focus: false });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
