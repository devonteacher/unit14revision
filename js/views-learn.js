/* Views: Home, Ask, Learn, Flashcards */
(function () {
  var A = U14.app, h = A.h, R = A.routes;

  A.pageHead = function (title, intro) {
    return h("div", { class: "page-head" }, h("h1", { text: title }), intro ? h("p", { class: "intro", text: intro }) : null);
  };
  A.backLink = function (label, path) {
    return h("a", { class: "back", href: "#/" + path, text: "← " + label });
  };

  function topicStats() {
    var out = {};
    U14.topics.forEach(function (t) { out[t.id] = { right: 0, total: 0, seen: 0, qs: 0 }; });
    U14.quiz.forEach(function (q) {
      var s = out[q.topic]; if (!s) return;
      s.qs += 1;
      var rec = A.data.quiz.q[q.id];
      if (rec) { s.seen += 1; s.right += rec.right; s.total += rec.right + rec.wrong; }
    });
    return out;
  }
  A.topicStats = topicStats;

  /* ---------------- HOME ---------------- */
  R.home = function (main) {
    var cfg = U14.config;
    main.appendChild(h("section", { class: "hero" },
      h("h1", { text: cfg.title }),
      h("p", { class: "intro", text: cfg.subtitle + ". Ask questions, learn the key ideas, test yourself and practise the exam technique. No sign in. Nothing leaves your device." }),
      h("div", { class: "hero-actions" },
        h("a", { class: "btn primary", href: "#/ask", text: "Ask a question" }),
        h("a", { class: "btn", href: "#/quiz", text: "Take a quiz" }),
        h("a", { class: "btn", href: "#/practice", text: "Practise an answer" }))));

    var tiles = [
      ["ask", "Ask", "Type a question in your own words and get a short, clear answer from the revision bank."],
      ["learn", "Learn", "Browse all " + U14.kb.length + " topics by theme, with examples and links to the spec."],
      ["cards", "Flashcards", "Flip through key terms and mark what you know and what you are still learning."],
      ["quiz", "Quiz", U14.quiz.length + " multiple choice questions with explanations. Choose a topic or mix them."],
      ["practice", "Practice", "Write an answer, get instant feedback on what is missing, then self mark against a checklist."],
      ["papers", "Past papers", "See how each scenario worked and the lessons from examiner reports."],
      ["coach", "Exam coach", "Command words, time plan, activity guides, common mistakes and a checklist."],
      ["progress", "My progress", "See your scores by topic and what to revise next."]
    ];
    main.appendChild(h("section", { class: "tiles", "aria-label": "Choose a mode" }, tiles.map(function (t) {
      return h("a", { class: "tile", href: "#/" + t[0] }, h("strong", { text: t[1] }), h("span", { text: t[2] }));
    })));

    /* Suggestion */
    var stats = topicStats(), weakest = null, wr = 2, unseen = null;
    U14.topics.forEach(function (t) {
      var s = stats[t.id];
      if (s.total >= 3) { var r = s.right / s.total; if (r < wr) { wr = r; weakest = t; } }
      else if (!unseen && s.qs) unseen = t;
    });
    var pick = (weakest && wr < 0.8) ? weakest : unseen;
    if (pick) {
      main.appendChild(h("section", { class: "card suggest" },
        h("h2", { text: "Suggested next" }),
        h("p", {}, weakest && wr < 0.8 ? "Your lowest quiz score is in " : "You have not tried the quiz on ", h("strong", { text: pick.name }), weakest && wr < 0.8 ? " (" + Math.round(wr * 100) + "%). Have another go." : " yet."),
        h("a", { class: "btn", href: "#/quiz?topic=" + pick.id, text: "Quiz me on this" }), " ",
        h("a", { class: "btn", href: "#/learn/" + pick.id, text: "Read the topic" })));
    }

    main.appendChild(h("section", { class: "card note" },
      h("h2", { text: "Using this with the real assessment" }),
      h("p", { text: "Part A research and the Part B set task must be your own work, done without help from teachers or tools while the live assessment is open. Use this tool to learn the content and practise on past, sample and practice papers. Your tutor will tell you when you must not use it." }),
      h("p", { class: "small", text: "This is independent revision support. BTEC and Pearson are trademarks of Pearson Education Limited. This tool is not published or endorsed by Pearson. Past paper content is summarised in our own words, so always check the exact wording in the real papers and specification." })));
  };

  /* ---------------- ASK ---------------- */
  function topicFromWords(arg) {
    var toks = A.stems(arg || "");
    if (!toks.length) return null;
    var best = null, bs = 0;
    U14.topics.forEach(function (t) {
      var tw = A.stems(t.name + " " + t.id, true), sc = 0;
      toks.forEach(function (q) { if (tw.indexOf(q) >= 0) sc += 1; });
      if (sc > bs) { bs = sc; best = t; }
    });
    return bs ? best : null;
  }

  function helpAnswer(ask) {
    return h("div", { class: "bot-card" },
      h("p", { text: "I search the Unit 14 revision bank. Try a question in your own words, for example:" }),
      h("div", { class: "chips" }, U14.askChips.map(function (c) { return h("button", { class: "chip", type: "button", text: c, onclick: function () { ask(c); } }); })),
      h("p", { class: "small", text: "You can also type: 'difference between X and Y', 'quiz me on cloud', or 'flashcards for law'. I do not use AI. I match your words to the topics, so short and specific questions work best." }));
  }

  function noMatch(ask) {
    var sample = A.shuffle(U14.kb).slice(0, 6);
    return h("div", { class: "bot-card" },
      h("p", { text: "I could not find a good match for that. Try fewer words, or the exact term, such as 'scalability' or 'data flow diagram'." }),
      h("p", { class: "small", text: "A few ideas:" }),
      h("div", { class: "chips" }, sample.map(function (e) { return h("button", { class: "chip", type: "button", text: e.term, onclick: function () { ask(e.term); } }); })),
      h("p", {}, h("a", { href: "#/learn", text: "Or browse all topics" })));
  }

  function compactCard(e, ask) {
    return h("article", { class: "kb-card compact", style: "--accent:" + A.topicColour(e.topic) },
      h("header", {}, h("span", { class: "tag", text: U14.topicName(e.topic) }), h("h3", { text: e.term })),
      h("p", { class: "lead", text: e.short }),
      e.more && e.more.length ? h("ul", {}, e.more.slice(0, 4).map(function (m) { return h("li", { text: m }); })) : null,
      e.example ? h("p", { class: "eg" }, h("strong", { text: "Example: " }), e.example) : null,
      h("p", {}, h("button", { class: "chip", type: "button", text: "Full answer", onclick: function () { ask(e.term); } })));
  }

  function answerFor(q, ask) {
    var s = q.trim(), m;
    if (/^(help|hi|hello|hey|what can you do|how does this work)\b/i.test(s)) return helpAnswer(ask);

    m = s.match(/^(?:please\s+)?(?:quiz|test)\s+me(?:\s+(?:on|about))?\s*(.*)$/i);
    if (m) {
      var arg = m[1], t = topicFromWords(arg), name = t ? t.name : null, tid = t ? t.id : "";
      if (!t && arg) {
        var r = A.search(arg);
        if (r.results.length) { tid = r.results[0].e.topic; name = U14.topicName(tid); }
      }
      return h("div", { class: "bot-card" },
        h("p", {}, name ? "Good idea. I will start a quiz on " : "I will start a mixed quiz on all topics. ", name ? h("strong", { text: name }) : null, name ? "." : ""),
        h("a", { class: "btn primary", href: "#/quiz?topic=" + (tid || "all") + "&go=1", text: "Start quiz" }));
    }
    m = s.match(/flash\s*cards?(?:\s+(?:for|on|about))?\s*(.*)$/i);
    if (m) {
      var ft = topicFromWords(m[1]);
      if (!ft && m[1]) { var fr = A.search(m[1]); if (fr.results.length) ft = U14.topics.filter(function (x) { return x.id === fr.results[0].e.topic; })[0]; }
      return h("div", { class: "bot-card" },
        h("p", {}, ft ? "Opening flashcards for " : "Opening flashcards for all topics. ", ft ? h("strong", { text: ft.name }) : null),
        h("a", { class: "btn primary", href: "#/cards/" + (ft ? ft.id : "all"), text: "Start flashcards" }));
    }

    var cmp = A.parseCompare(s);
    if (cmp) {
      var a = A.search(cmp[0]).results[0], b = A.search(cmp[1]).results[0];
      if (a && b && a.score >= 4 && b.score >= 4) {
        if (a.e.id === b.e.id) return h("div", {}, h("p", { class: "small", text: "Both ideas are covered in one topic." }), A.entryCard(a.e, { onRelated: ask }));
        return h("div", {},
          h("p", { class: "small", text: "Comparing " + a.e.term + " and " + b.e.term + "." }),
          h("div", { class: "compare" }, compactCard(a.e, ask), compactCard(b.e, ask)));
      }
    }

    var res = A.search(s);
    var list = res.results;
    if (!list.length || list[0].score < 3.5) return noMatch(ask);
    var top = list[0].score, shown = [list[0]], i;
    for (i = 1; i < list.length && shown.length < 3; i++) { if (list[i].score >= top * 0.78 && list[i].score >= 6) shown.push(list[i]); }
    var more = list.slice(shown.length).filter(function (x) { return x.score >= top * 0.35; }).slice(0, 5);
    var wrap = h("div", {});
    if (res.corrected.length) wrap.appendChild(h("p", { class: "small", text: "Showing results for: " + res.corrected.map(function (c) { return c[1]; }).join(", ") }));
    shown.forEach(function (x, idx) { wrap.appendChild(A.entryCard(x.e, { onRelated: ask, headingLevel: "h3" })); });
    if (more.length) {
      wrap.appendChild(h("p", { class: "also" }, h("strong", { text: "Also see: " }),
        more.map(function (x) { return h("button", { class: "chip", type: "button", text: x.e.term, onclick: function () { ask(x.e.term); } }); })));
    }
    return wrap;
  }

  R.ask = function (main, parts, q) {
    main.appendChild(A.pageHead("Ask the revision bot", "Type a question in your own words. It searches the Unit 14 revision bank on this page, so it works without internet or an account."));
    var log = h("div", { class: "chat", "aria-live": "polite" });
    var input = h("input", { type: "text", id: "ask-input", class: "ask-input", placeholder: "For example: what is the difference between a switch and a router?", "aria-label": "Your question", autocomplete: "off", maxlength: "200" });
    function render() {
      A.clear(log);
      A.state.chat.slice().reverse().forEach(function (ex, idx) {
        log.appendChild(h("div", { class: "exchange" },
          h("p", { class: "you" }, h("span", { class: "who", text: "You" }), ex),
          h("div", { class: "bot" }, h("span", { class: "who", text: "Bot" }), answerFor(ex, ask))));
      });
      if (!A.state.chat.length) log.appendChild(helpAnswer(ask));
    }
    function ask(text) {
      text = (text || "").trim();
      if (!text) return;
      A.state.chat.push(text);
      if (A.state.chat.length > 30) A.state.chat.shift();
      input.value = "";
      render();
      A.announce("Answer ready");
      var first = log.querySelector(".exchange");
      if (first && first.scrollIntoView) first.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    var form = h("form", { class: "ask-form", onsubmit: function (e) { e.preventDefault(); ask(input.value); } },
      h("label", { for: "ask-input", class: "sr", text: "Your question" }), input, h("button", { class: "btn primary", type: "submit", text: "Ask" }));
    main.appendChild(form);
    main.appendChild(h("div", { class: "chips chips-top" }, U14.askChips.map(function (c) { return h("button", { class: "chip", type: "button", text: c, onclick: function () { ask(c); } }); })));
    main.appendChild(h("div", { class: "ask-tools" }, h("button", { class: "linkish", type: "button", text: "Clear conversation", onclick: function () { A.state.chat = []; render(); } })));
    main.appendChild(log);
    render();
    if (q && q.q) ask(q.q);
    setTimeout(function () { input.focus({ preventScroll: true }); }, 30);
  };

  /* ---------------- LEARN ---------------- */
  R.learn = function (main, parts) {
    if (parts[0] === "entry" && parts[1] && A.kbById[parts[1]]) {
      var e = A.kbById[parts[1]];
      main.appendChild(A.backLink("Back to " + U14.topicName(e.topic), "learn/" + e.topic));
      main.appendChild(h("h1", { class: "sr", text: e.term }));
      main.appendChild(A.entryCard(e, { headingLevel: "h2" }));
      main.appendChild(h("div", { class: "row-actions" },
        h("a", { class: "btn", href: "#/ask?q=" + encodeURIComponent(e.term), text: "Ask about this" }), " ",
        h("a", { class: "btn", href: "#/quiz?topic=" + e.topic, text: "Quiz this topic" }), " ",
        h("a", { class: "btn", href: "#/cards/" + e.topic, text: "Flashcards" })));
      return;
    }
    var topic = U14.topics.filter(function (t) { return t.id === parts[0]; })[0];
    if (topic) {
      var list = U14.kb.filter(function (x) { return x.topic === topic.id; });
      main.appendChild(A.backLink("All topics", "learn"));
      main.appendChild(A.pageHead(topic.name, "Spec: " + topic.spec + ". " + list.length + " entries. Open any one to read it."));
      main.appendChild(h("div", { class: "row-actions" },
        h("a", { class: "btn", href: "#/quiz?topic=" + topic.id, text: "Quiz this topic" }), " ",
        h("a", { class: "btn", href: "#/cards/" + topic.id, text: "Flashcards" }), " ",
        h("button", { class: "btn", type: "button", text: "Open all", onclick: function () { var d = main.querySelectorAll("details"); for (var i = 0; i < d.length; i++) d[i].open = true; } })));
      list.forEach(function (x) {
        main.appendChild(h("details", { class: "acc", style: "--accent:" + topic.colour },
          h("summary", {}, h("strong", { text: x.term }), h("span", { class: "sub", text: x.short.length > 120 ? x.short.slice(0, 117).replace(/\s+\S*$/, "") + "..." : x.short })),
          A.entryCard(x, { headingLevel: "h3", noHeader: true })));
      });
      return;
    }
    main.appendChild(A.pageHead("Learn", "Choose a topic, or search for a term."));
    var results = h("div", { class: "find-results" });
    var find = h("input", { type: "search", class: "ask-input", id: "find", placeholder: "Search terms, for example firewall or GDPR", "aria-label": "Search terms", oninput: function () {
      var v = find.value.trim(); A.clear(results);
      if (v.length < 2) return;
      var r = A.search(v).results.filter(function (x) { return x.score >= 3.5; }).slice(0, 8);
      if (!r.length) { results.appendChild(h("p", { class: "small", text: "No matches. Try another word." })); return; }
      results.appendChild(h("ul", { class: "find-list" }, r.map(function (x) {
        return h("li", {}, h("a", { href: "#/learn/entry/" + x.e.id }, h("strong", { text: x.e.term }), " ", h("span", { class: "sub", text: "(" + U14.topicName(x.e.topic) + ")" })));
      })));
    } });
    main.appendChild(h("div", { class: "ask-form" }, h("label", { class: "sr", for: "find", text: "Search terms" }), find));
    main.appendChild(results);
    var stats = topicStats();
    main.appendChild(h("div", { class: "topic-grid" }, U14.topics.map(function (t) {
      var n = U14.kb.filter(function (x) { return x.topic === t.id; }).length, s = stats[t.id];
      return h("a", { class: "topic-card", href: "#/learn/" + t.id, style: "--accent:" + t.colour },
        h("strong", { text: t.name }),
        h("span", { class: "sub", text: n + " entries, spec " + t.spec }),
        s.total ? h("span", { class: "sub", text: "Quiz score " + A.pct(s.right, s.total) + "%" }) : null);
    })));
  };

  /* ---------------- FLASHCARDS ---------------- */
  R.cards = function (main, parts, q) {
    var topicId = parts[0];
    if (!topicId) {
      main.appendChild(A.pageHead("Flashcards", "Pick a topic. Flip each card, then mark whether you knew it. Cards you know less well come up more often."));
      var onlyNew = h("input", { type: "checkbox", id: "onlynew" });
      var grid = h("div", { class: "topic-grid" },
        [{ id: "all", name: "All topics", colour: "#0f2d5c" }].concat(U14.topics).map(function (t) {
          var cards = t.id === "all" ? U14.kb : U14.kb.filter(function (x) { return x.topic === t.id; });
          var known = cards.filter(function (x) { return A.data.cards[x.id] === 2; }).length;
          return h("button", { class: "topic-card", type: "button", style: "--accent:" + t.colour, onclick: function () { A.go("cards/" + t.id + (onlyNew.checked ? "?new=1" : "")); } },
            h("strong", { text: t.name }), h("span", { class: "sub", text: cards.length + " cards, " + known + " known" }));
        }));
      main.appendChild(h("p", {}, onlyNew, " ", h("label", { for: "onlynew", text: "Only cards I have not marked as known" })));
      main.appendChild(grid);
      return;
    }
    if (topicId !== "all" && !U14.topics.some(function (t) { return t.id === topicId; })) { A.go("cards"); return; }
    var pool = topicId === "all" ? U14.kb.slice() : U14.kb.filter(function (x) { return x.topic === topicId; });
    if (q && q.new) pool = pool.filter(function (x) { return A.data.cards[x.id] !== 2; });
    var deck = A.shuffle(pool).sort(function (a, b) { return (A.data.cards[a.id] || 0) - (A.data.cards[b.id] || 0) + (Math.random() - 0.5); });
    var i = 0, flipped = false, gotIt = 0, learning = 0;
    var area = h("div", { class: "cardrun" });
    var title = topicId === "all" ? "All topics" : U14.topicName(topicId);
    main.appendChild(A.backLink("Flashcard topics", "cards"));
    main.appendChild(A.pageHead("Flashcards: " + title));
    main.appendChild(area);
    if (!deck.length) { area.appendChild(h("div", { class: "card" }, h("p", { text: "There are no cards to show here. You may already know them all." }), h("a", { class: "btn", href: "#/cards", text: "Pick another topic" }))); return; }

    function mark(v) {
      var e = deck[i]; A.data.cards[e.id] = v; A.save();
      if (v === 2) gotIt++; else learning++;
      i++; flipped = false; draw();
    }
    function draw() {
      A.clear(area);
      if (i >= deck.length) {
        area.appendChild(h("div", { class: "card summary" }, h("h2", { text: "Deck finished" }),
          h("p", { text: "You marked " + gotIt + " as known and " + learning + " as still learning." }),
          h("div", { class: "row-actions" }, h("a", { class: "btn primary", href: "#/cards/" + topicId + "?new=1", text: "Practise the ones I do not know" }), " ",
            h("a", { class: "btn", href: "#/cards", text: "Pick another topic" }))));
        return;
      }
      var e = deck[i];
      area.appendChild(h("div", { class: "progressbar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(deck.length), "aria-valuenow": String(i) }, h("span", { style: "width:" + A.pct(i, deck.length) + "%" })));
      area.appendChild(h("p", { class: "small", text: "Card " + (i + 1) + " of " + deck.length }));
      var face;
      if (!flipped) {
        face = h("div", { class: "flash front", style: "--accent:" + A.topicColour(e.topic) },
          h("span", { class: "tag", text: U14.topicName(e.topic) }), h("h2", { text: e.term }), h("p", { class: "small", text: "Say it in your own words, then flip." }));
      } else {
        face = h("div", { class: "flash back", style: "--accent:" + A.topicColour(e.topic) },
          h("h2", { text: e.term }), h("p", { class: "lead", text: e.short }),
          e.more && e.more.length ? h("ul", {}, e.more.slice(0, 3).map(function (m) { return h("li", { text: m }); })) : null,
          e.example ? h("p", { class: "eg" }, h("strong", { text: "Example: " }), e.example) : null);
      }
      area.appendChild(face);
      var btns = h("div", { class: "row-actions" });
      if (!flipped) btns.appendChild(h("button", { class: "btn primary", type: "button", id: "flip", text: "Flip (space)", onclick: function () { flipped = true; draw(); } }));
      else {
        btns.appendChild(h("button", { class: "btn", type: "button", id: "learning", text: "Still learning (1)", onclick: function () { mark(1); } }));
        btns.appendChild(h("button", { class: "btn primary", type: "button", id: "known", text: "Got it (2)", onclick: function () { mark(2); } }));
      }
      area.appendChild(btns);
      var focusBtn = area.querySelector("#flip") || area.querySelector("#known");
      if (focusBtn) focusBtn.focus({ preventScroll: true });
    }
    draw();
    A.keyHandler = function (ev) {
      if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
      if (i >= deck.length) return;
      if (ev.key === " " && !flipped) { ev.preventDefault(); flipped = true; draw(); }
      else if (ev.key === "1" && flipped) mark(1);
      else if (ev.key === "2" && flipped) mark(2);
    };
  };
})();
