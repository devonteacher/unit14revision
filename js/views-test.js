/* Views: Quiz, Practice (tasks and sorter) */
(function () {
  var A = U14.app, h = A.h, R = A.routes, T = U14.technique;

  /* ================= QUIZ ================= */
  function buildRun(topic, count, prioritise, onlyIds) {
    var pool = U14.quiz.filter(function (q) { return (topic === "all" || q.topic === topic) && (!onlyIds || onlyIds.indexOf(q.id) >= 0); });
    pool = pool.map(function (q) {
      var rec = A.data.quiz.q[q.id], pr = 1;
      if (prioritise) { if (!rec) pr = 2; else if (rec.wrong >= rec.right) pr = 3; else pr = 0; }
      return { q: q, k: pr + Math.random() * 1.2 };
    }).sort(function (a, b) { return b.k - a.k; }).map(function (x) { return x.q; });
    if (count && count < pool.length) pool = pool.slice(0, count);
    return A.shuffle(pool).map(function (q) {
      return { q: q, opts: A.shuffle([{ t: q.right, ok: true }].concat(q.wrong.map(function (w) { return { t: w, ok: false }; }))) };
    });
  }

  R.quiz = function (main, parts, query) {
    var topic = query.topic || "all";
    if (!U14.topics.some(function (t) { return t.id === topic; })) topic = "all";
    if (query.go === "1") { runQuiz(main, buildRun(topic, 10, true), topic); return; }

    main.appendChild(A.pageHead("Quiz", U14.quiz.length + " multiple choice questions. You will see an explanation after every answer, and a link to revise the topic."));
    var sel = h("select", { id: "qtopic", class: "select" }, h("option", { value: "all", text: "All topics" }),
      U14.topics.map(function (t) {
        var n = U14.quiz.filter(function (q) { return q.topic === t.id; }).length;
        return h("option", { value: t.id, text: t.name + " (" + n + ")", selected: t.id === topic });
      }));
    var cnt = h("select", { id: "qcount", class: "select" }, [5, 10, 20, 0].map(function (n) { return h("option", { value: n, text: n ? n + " questions" : "All available", selected: n === 10 }); }));
    var pri = h("input", { type: "checkbox", id: "qpri", checked: true });
    main.appendChild(h("form", { class: "card form", onsubmit: function (e) {
      e.preventDefault();
      var run = buildRun(sel.value, parseInt(cnt.value, 10), pri.checked);
      A.clear(main); runQuiz(main, run, sel.value);
    } },
      h("div", { class: "field" }, h("label", { for: "qtopic", text: "Topic" }), sel),
      h("div", { class: "field" }, h("label", { for: "qcount", text: "How many" }), cnt),
      h("div", { class: "field check" }, pri, " ", h("label", { for: "qpri", text: "Prioritise questions I have missed or not seen yet" })),
      h("button", { class: "btn primary", type: "submit", text: "Start quiz" })));
    var st = A.topicStats(), any = false;
    var bars = h("div", { class: "card" }, h("h2", { text: "Your scores so far" }));
    U14.topics.forEach(function (t) {
      var s = st[t.id]; if (!s.total) return; any = true;
      bars.appendChild(barRow(t.name, A.pct(s.right, s.total), t.colour, s.right + " of " + s.total + " answers right"));
    });
    if (any) main.appendChild(bars);
  };

  function barRow(label, pct, colour, detail) {
    return h("div", { class: "barrow" },
      h("div", { class: "barlabel" }, h("span", { text: label }), h("span", { class: "sub", text: pct + "%" + (detail ? " (" + detail + ")" : "") })),
      h("div", { class: "bar", role: "img", "aria-label": label + " " + pct + " per cent" }, h("span", { style: "width:" + pct + "%;background:" + (colour || "var(--accent)") })));
  }
  A.barRow = barRow;

  function runQuiz(main, run, topic) {
    if (!run.length) { main.appendChild(h("div", { class: "card" }, h("p", { text: "There are no questions for that choice." }), h("a", { class: "btn", href: "#/quiz", text: "Back" }))); return; }
    var i = 0, score = 0, missed = [], byTopic = {}, answered = false;
    var area = h("div", { class: "quizrun" });
    main.appendChild(A.backLink("Quiz setup", "quiz"));
    main.appendChild(area);

    function draw() {
      A.clear(area); answered = false;
      var item = run[i], q = item.q;
      area.appendChild(h("div", { class: "progressbar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(run.length), "aria-valuenow": String(i) }, h("span", { style: "width:" + A.pct(i, run.length) + "%" })));
      area.appendChild(h("p", { class: "small", text: "Question " + (i + 1) + " of " + run.length + ". Score " + score }));
      area.appendChild(h("span", { class: "tag", style: "--accent:" + A.topicColour(q.topic), text: U14.topicName(q.topic) }));
      area.appendChild(h("h1", { class: "qtext", text: q.q }));
      var fb = h("div", { class: "feedback", role: "status", "aria-live": "polite" });
      var list = h("div", { class: "options", role: "group", "aria-label": "Answer options" });
      var btns = item.opts.map(function (o, idx) {
        var b = h("button", { class: "option", type: "button", "data-i": idx, onclick: function () { choose(idx); } },
          h("span", { class: "key", text: String(idx + 1) }), h("span", { class: "otext", text: o.t }));
        list.appendChild(b); return b;
      });
      area.appendChild(list); area.appendChild(fb);

      function choose(idx) {
        if (answered) return; answered = true;
        var o = item.opts[idx];
        var rec = A.data.quiz.q[q.id] || (A.data.quiz.q[q.id] = { right: 0, wrong: 0 });
        byTopic[q.topic] = byTopic[q.topic] || { right: 0, total: 0 };
        byTopic[q.topic].total += 1;
        if (o.ok) { score++; rec.right++; byTopic[q.topic].right++; } else { rec.wrong++; missed.push(item); }
        A.save();
        btns.forEach(function (b, k) {
          b.disabled = true;
          if (item.opts[k].ok) b.classList.add("right");
          else if (k === idx) b.classList.add("wrong");
        });
        fb.className = "feedback " + (o.ok ? "ok" : "bad");
        fb.appendChild(h("p", {}, h("strong", { text: o.ok ? "Correct. " : "Not quite. " }), o.ok ? "" : "The answer is: " + q.right + ". ", q.why));
        if (q.kb && A.kbById[q.kb]) fb.appendChild(h("p", {}, h("a", { href: "#/learn/entry/" + q.kb, text: "Revise: " + A.kbById[q.kb].term })));
        var nextBtn = h("button", { class: "btn primary", type: "button", id: "next", text: i + 1 < run.length ? "Next question (Enter)" : "See results (Enter)", onclick: next });
        fb.appendChild(nextBtn); nextBtn.focus({ preventScroll: true });
        A.announce(o.ok ? "Correct" : "Incorrect. The answer is " + q.right);
      }
      A.keyHandler = function (ev) {
        if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
        if (!answered && /^[1-4]$/.test(ev.key)) { var n = parseInt(ev.key, 10) - 1; if (item.opts[n]) choose(n); }
        else if (answered && ev.key === "Enter") { ev.preventDefault(); next(); }
      };
    }
    function next() { i++; if (i < run.length) draw(); else finish(); }
    function finish() {
      A.keyHandler = null; A.clear(area);
      var p = A.pct(score, run.length);
      A.data.quiz.runs.push({ d: new Date().toISOString().slice(0, 10), t: topic, s: score, n: run.length });
      if (A.data.quiz.runs.length > 40) A.data.quiz.runs.shift();
      A.save();
      var msg = p >= 80 ? "Strong result." : p >= 60 ? "Good. A little more revision will lift it." : "Keep going. Review the explanations below, then try again.";
      area.appendChild(h("div", { class: "card summary" }, h("h1", { text: "Quiz finished" }),
        h("p", { class: "bigscore", text: score + " out of " + run.length + " (" + p + "%)" }), h("p", { text: msg })));
      var tkeys = Object.keys(byTopic);
      if (tkeys.length > 1) {
        var b = h("div", { class: "card" }, h("h2", { text: "By topic" }));
        tkeys.forEach(function (k) { b.appendChild(barRow(U14.topicName(k), A.pct(byTopic[k].right, byTopic[k].total), A.topicColour(k), byTopic[k].right + " of " + byTopic[k].total)); });
        area.appendChild(b);
      }
      if (missed.length) {
        var m = h("div", { class: "card" }, h("h2", { text: "Questions to review" }));
        missed.forEach(function (it) {
          m.appendChild(h("div", { class: "review" }, h("p", {}, h("strong", { text: it.q.q })), h("p", {}, "Answer: ", it.q.right), h("p", { class: "small", text: it.q.why }),
            it.q.kb && A.kbById[it.q.kb] ? h("a", { href: "#/learn/entry/" + it.q.kb, text: "Revise: " + A.kbById[it.q.kb].term }) : null));
        });
        area.appendChild(m);
      }
      var act = h("div", { class: "row-actions" });
      if (missed.length) act.appendChild(h("button", { class: "btn primary", type: "button", text: "Retry the " + missed.length + " I missed", onclick: function () {
        var ids = missed.map(function (x) { return x.q.id; }); A.clear(main); runQuiz(main, buildRun("all", 0, false, ids), topic);
      } }));
      act.appendChild(h("a", { class: "btn", href: "#/quiz", text: "New quiz" }));
      act.appendChild(h("a", { class: "btn", href: "#/progress", text: "My progress" }));
      area.appendChild(act);
      window.scrollTo(0, 0);
    }
    draw();
  }

  /* ================= HIGHLIGHTER ================= */
  var techList = null;
  function technicalList() {
    if (techList) return techList;
    var set = {};
    T.technicalTerms.forEach(function (t) { set[t.toLowerCase()] = 1; });
    U14.kb.forEach(function (e) {
      var t = e.term.replace(/\(.*?\)/g, "").trim().toLowerCase();
      if (t.split(/\s+/).length <= 2 && t.length >= 5 && !/[:']/.test(t)) set[t] = 1;
    });
    techList = Object.keys(set);
    return techList;
  }
  function altPattern(list, flex) {
    return list.slice().sort(function (a, b) { return b.length - a.length; }).map(function (x) { return A.escapeRe(x).replace(/\s+/g, "\\s+"); }).join("|");
  }
  function collect(text, list, cls, pri, suffix, out) {
    if (!list.length) return;
    var re = new RegExp("(^|[^A-Za-z0-9£])((?:" + altPattern(list) + ")" + (suffix ? "[A-Za-z]*" : "") + ")(?![A-Za-z0-9])", "gi"), m;
    while ((m = re.exec(text))) {
      var s = m.index + m[1].length;
      out.push({ s: s, e: s + m[2].length, c: cls, p: pri });
      if (m[0].length === 0) re.lastIndex++;
    }
  }
  A.highlightRanges = function (text, facts, onlyFacts) {
    var out = [];
    collect(text, (facts || []).map(function (f) { return f.toLowerCase(); }), "hl-fact", 3, false, out);
    if (!onlyFacts) {
      collect(text, technicalList(), "hl-term", 2, true, out);
      collect(text, T.connectors.map(function (c) { return c.trim().toLowerCase(); }), "hl-conn", 1, false, out);
    }
    out.sort(function (a, b) { return b.p - a.p || (b.e - b.s) - (a.e - a.s); });
    var acc = [];
    out.forEach(function (r) {
      for (var k = 0; k < acc.length; k++) if (r.s < acc[k].e && r.e > acc[k].s) return;
      acc.push(r);
    });
    acc.sort(function (a, b) { return a.s - b.s; });
    return acc;
  };
  A.highlight = function (text, facts, onlyFacts) {
    var frag = document.createDocumentFragment(), pos = 0;
    A.highlightRanges(text, facts, onlyFacts).forEach(function (r) {
      if (r.s > pos) frag.appendChild(document.createTextNode(text.slice(pos, r.s)));
      frag.appendChild(h("mark", { class: r.c, text: text.slice(r.s, r.e) }));
      pos = r.e;
    });
    if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
    return frag;
  };

  /* ================= PRACTICE ================= */
  function taskState(id) {
    return A.data.practice[id] || (A.data.practice[id] = { text: "", checks: {}, attempts: 0, hits: 0, total: 0 });
  }
  function wordCount(s) { var m = s.trim().match(/\S+/g); return m ? m.length : 0; }

  function groupTitle(t) {
    if (t.mode === "theory") return "Theory questions";
    if (t.scenario === "quay") return "Quay Cycles mini activities";
    return "Sample Part A planning";
  }

  R.practice = function (main, parts) {
    if (parts[0] === "sorter") return sorter(main);
    var task = U14.practice.filter(function (t) { return t.id === parts[0]; })[0];
    if (task) return taskView(main, task);

    main.appendChild(A.pageHead("Practice", "Write an answer, get instant feedback on what is missing, then self mark and compare with a model answer. Your draft is saved on this device."));
    main.appendChild(h("a", { class: "tile wide", href: "#/practice/sorter" }, h("strong", { text: "Game: Describe, benefit or implication?" }), h("span", { text: "Sort statements into the three types. This is the skill that lifts Activity 5." })));
    var groups = {}, order = [];
    U14.practice.forEach(function (t) { var g = groupTitle(t); if (!groups[g]) { groups[g] = []; order.push(g); } groups[g].push(t); });
    order.forEach(function (g) {
      main.appendChild(h("h2", { class: "group", text: g }));
      main.appendChild(h("div", { class: "topic-grid" }, groups[g].map(function (t) {
        var st = A.data.practice[t.id], status = st && st.attempts ? "Attempted " + st.attempts + (st.attempts > 1 ? " times" : " time") + ", " + st.hits + " of " + st.total + " points covered" : "Not attempted";
        return h("a", { class: "topic-card", href: "#/practice/" + t.id, style: "--accent:" + A.topicColour(t.topic) },
          h("strong", { text: t.title }), h("span", { class: "sub", text: t.command + ", " + t.marks + " marks" }), h("span", { class: "sub", text: status }));
      })));
    });
  };

  function taskView(main, task) {
    var st = taskState(task.id), sc = task.scenario ? U14.scenarios[task.scenario] : null;
    main.appendChild(A.backLink("All practice tasks", "practice"));
    main.appendChild(h("div", { class: "page-head" }, h("h1", { text: task.title }),
      h("p", { class: "intro" }, h("span", { class: "tag", text: task.command }), " ", task.marks + " marks. " + U14.topicName(task.topic) + ".")));
    if (sc) {
      var det = h("details", { class: "scenario", open: true }, h("summary", {}, h("strong", { text: "Scenario: " + sc.name })),
        h("p", { class: "small", text: sc.note }),
        h("ul", {}, sc.summary.map(function (s) { return h("li", {}, A.highlight(s, sc.facts, true)); })));
      main.appendChild(det);
    }
    main.appendChild(h("div", { class: "prompt" }, h("strong", { text: "Task: " }), task.prompt));
    if (task.tip) main.appendChild(h("p", { class: "tip" }, h("strong", { text: "Tip: " }), task.tip));

    var ta = h("textarea", { id: "ans", class: "answer", rows: "12", "aria-label": "Your answer", placeholder: "Write your answer here. Aim for about " + task.marks * 25 + " words, with reasons and scenario facts." });
    ta.value = st.text || "";
    var wc = h("span", { class: "small", id: "wc" });
    function upd() { wc.textContent = wordCount(ta.value) + " words (about " + task.marks * 25 + " is a good target)"; }
    var timer = null;
    ta.addEventListener("input", function () { upd(); clearTimeout(timer); timer = setTimeout(function () { st.text = ta.value; A.save(); }, 400); });
    upd();
    var out = h("div", { class: "results", "aria-live": "polite" });
    var modelBox = h("div", {});

    main.appendChild(h("label", { class: "sr", for: "ans", text: "Your answer" }));
    main.appendChild(ta);
    main.appendChild(h("div", { class: "row-between" }, wc));
    main.appendChild(h("div", { class: "row-actions" },
      h("button", { class: "btn primary", type: "button", text: "Check my answer", onclick: function () { check(false); } }), " ",
      h("button", { class: "btn", type: "button", text: "Copy my answer", onclick: function () {
        var t = ta.value; try { navigator.clipboard.writeText(t); A.announce("Copied"); } catch (e) { ta.select(); try { document.execCommand("copy"); } catch (e2) {} }
      } }), " ",
      h("button", { class: "btn", type: "button", text: "Clear", onclick: function () { if (!ta.value || window.confirm("Clear your answer?")) { ta.value = ""; st.text = ""; st.checks = {}; A.save(); upd(); A.clear(out); A.clear(modelBox); } } })));
    main.appendChild(out); main.appendChild(modelBox);
    if (st.attempts && st.text) check(true);

    function pointHit(p, low) {
      var found = {}; p.terms.forEach(function (t) { if (low.indexOf(t.toLowerCase()) >= 0) found[t] = 1; });
      return Object.keys(found).length >= (p.min || 1);
    }
    function check(silent) {
      var text = ta.value.trim(), low = text.toLowerCase();
      A.clear(out);
      if (wordCount(text) < 8) { out.appendChild(h("div", { class: "card bad" }, h("p", { text: "Write a little more first. Even a rough attempt will give you useful feedback." }))); return; }
      var hits = task.points.filter(function (p) { return pointHit(p, low); }).length;
      var conn = {}; T.connectors.forEach(function (c) { var t = c.trim().toLowerCase(); if (new RegExp("(^|[^a-z])" + A.escapeRe(t).replace(/\s+/g, "\\s+") + "([^a-z]|$)").test(low)) conn[t] = 1; });
      var connN = Object.keys(conn).length;
      var factsUsed = [], factsUnused = [];
      if (sc) sc.facts.forEach(function (f) { (low.indexOf(f.toLowerCase()) >= 0 ? factsUsed : factsUnused).push(f); });
      var terms = {}; A.highlightRanges(text, sc ? sc.facts : []).forEach(function (r) { if (r.c === "hl-term") terms[text.slice(r.s, r.e).toLowerCase()] = 1; });
      var termList = Object.keys(terms);
      var words = wordCount(text);
      if (!silent) { st.attempts += 1; }
      st.hits = hits; st.total = task.points.length; st.text = text; A.save();

      var verdict = hits / task.points.length >= 0.8 ? "Strong coverage" : hits / task.points.length >= 0.5 ? "Good start" : "Needs more";
      var box = h("div", { class: "card" }, h("h2", { text: "Feedback" }),
        h("p", { class: "bigscore", text: hits + " of " + task.points.length + " expected points found. " + verdict + "." }),
        h("p", { class: "small", text: "This checks for key ideas by looking for words. It cannot judge quality, so use it alongside the self mark checklist and the model answer." }));
      box.appendChild(h("ul", { class: "points" }, task.points.map(function (p) {
        var ok = pointHit(p, low);
        return h("li", { class: ok ? "yes" : "no" }, h("span", { class: "mark-ic", "aria-hidden": "true", text: ok ? "✓" : "✗" }), h("span", {}, h("span", { class: "sr", text: ok ? "Found: " : "Not found: " }), p.label));
      })));
      var tips = [];
      if (words < task.marks * 18) tips.push("Your answer is quite short for " + task.marks + " marks. Add reasons and an example.");
      if (connN < 2) tips.push("Add reasoning words such as because, so, which means, therefore and however. Examiners reward explanations, not lists.");
      if (sc && factsUsed.length < 3) tips.push("Use more facts from the scenario. Try: " + factsUnused.slice(0, 5).join(", ") + ".");
      if (!termList.length) tips.push("Use the correct technical terms and show you know what they mean.");
      if (tips.length) box.appendChild(h("div", { class: "tipbox" }, h("strong", { text: "To improve" }), h("ul", {}, tips.map(function (t) { return h("li", { text: t }); }))));
      box.appendChild(h("p", { class: "small" }, "Reasoning words used: " + connN + ". ", sc ? "Scenario facts used: " + factsUsed.length + ". " : "", "Technical terms used: " + termList.length + "."));
      out.appendChild(box);

      var hl = h("div", { class: "card" }, h("h2", { text: "Your answer, marked up" }),
        h("p", { class: "legend small" }, sc ? [h("mark", { class: "hl-fact", text: "scenario fact" }), " "] : null, h("mark", { class: "hl-term", text: "technical term" }), " ", h("mark", { class: "hl-conn", text: "reasoning word" })),
        h("div", { class: "marked" }, A.highlight(text, sc ? sc.facts : [])));
      out.appendChild(hl);

      var chk = h("div", { class: "card" }, h("h2", { text: "Self mark" }), h("p", { class: "small", text: "Be honest. Tick only what is clearly in your answer." }));
      var tally = h("p", { class: "bigscore" });
      function tallyUpd() {
        var n = task.checklist.filter(function (_, k) { return st.checks[k]; }).length;
        var r = n / task.checklist.length;
        tally.textContent = n + " of " + task.checklist.length + " ticked. " + (r === 1 ? "Excellent. Now compare with the model answer." : r >= 0.5 ? "Getting there. Improve the unticked points." : "Revise the unticked points and try again.");
      }
      task.checklist.forEach(function (c, k) {
        var id = "chk" + k, cb = h("input", { type: "checkbox", id: id, checked: !!st.checks[k], onchange: function () { st.checks[k] = cb.checked; A.save(); tallyUpd(); } });
        chk.appendChild(h("div", { class: "check-row" }, cb, " ", h("label", { for: id, text: c })));
      });
      chk.appendChild(tally); tallyUpd();
      out.appendChild(chk);

      var mb = h("div", { class: "card" }, h("h2", { text: "Model answer" }));
      function showModel() {
        A.clear(mb); mb.appendChild(h("h2", { text: "Model answer" }));
        mb.appendChild(h("p", { class: "small", text: "One good way to answer. Yours can be different. Notice how each point has a reason and a link to the scenario." }));
        mb.appendChild(h("p", { class: "legend small" }, sc ? [h("mark", { class: "hl-fact", text: "scenario fact" }), " "] : null, h("mark", { class: "hl-term", text: "technical term" }), " ", h("mark", { class: "hl-conn", text: "reasoning word" })));
        task.model.forEach(function (p) { mb.appendChild(h("p", {}, A.highlight(p, sc ? sc.facts : []))); });
      }
      mb.appendChild(h("button", { class: "btn", type: "button", text: "Show the model answer", onclick: showModel }));
      out.appendChild(mb);
      if (!silent) { A.announce("Feedback ready"); box.scrollIntoView && box.scrollIntoView({ behavior: "smooth", block: "start" }); }
    }
  }

  /* ================= SORTER ================= */
  var TYPES = [["describe", "Describe", "Says what something is or does"], ["benefit", "Benefit", "Says what good it does"], ["implication", "Implication", "Says what must happen or what follows"]];
  function sorter(main) {
    main.appendChild(A.backLink("All practice tasks", "practice"));
    main.appendChild(A.pageHead("Describe, benefit or implication?", "Read each statement and decide what it is. Activity 5 rewards implications: what changes, what must be done, who does it."));
    var area = h("div", { class: "quizrun" }); main.appendChild(area);
    var deck = A.shuffle(U14.sorter), i = 0, score = 0, missed = [], answered = false;
    function draw() {
      A.clear(area); answered = false;
      var s = deck[i];
      area.appendChild(h("div", { class: "progressbar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(deck.length), "aria-valuenow": String(i) }, h("span", { style: "width:" + A.pct(i, deck.length) + "%" })));
      area.appendChild(h("p", { class: "small", text: "Statement " + (i + 1) + " of " + deck.length + ". Score " + score }));
      area.appendChild(h("blockquote", { class: "statement", text: s.text }));
      var fb = h("div", { class: "feedback", role: "status", "aria-live": "polite" });
      var list = h("div", { class: "options three", role: "group", "aria-label": "Choose a type" });
      var btns = TYPES.map(function (t, k) {
        var b = h("button", { class: "option", type: "button", onclick: function () { pick(t[0], k); } }, h("span", { class: "key", text: String(k + 1) }), h("span", { class: "otext" }, h("strong", { text: t[1] }), h("span", { class: "sub", text: t[2] })));
        list.appendChild(b); return b;
      });
      area.appendChild(list); area.appendChild(fb);
      function pick(type, k) {
        if (answered) return; answered = true;
        var ok = type === s.type;
        if (ok) score++; else missed.push(s);
        btns.forEach(function (b, n) { b.disabled = true; if (TYPES[n][0] === s.type) b.classList.add("right"); else if (n === k) b.classList.add("wrong"); });
        fb.className = "feedback " + (ok ? "ok" : "bad");
        fb.appendChild(h("p", {}, h("strong", { text: ok ? "Correct. " : "Not quite. It is a " + s.type + ". " }), s.why));
        var nb = h("button", { class: "btn primary", type: "button", text: i + 1 < deck.length ? "Next (Enter)" : "See results (Enter)", onclick: next });
        fb.appendChild(nb); nb.focus({ preventScroll: true });
      }
      A.keyHandler = function (ev) {
        if (!answered && /^[1-3]$/.test(ev.key)) { var n = parseInt(ev.key, 10) - 1; pick(TYPES[n][0], n); }
        else if (answered && ev.key === "Enter") { ev.preventDefault(); next(); }
      };
    }
    function next() { i++; if (i < deck.length) draw(); else finish(); }
    function finish() {
      A.keyHandler = null; A.clear(area);
      A.data.sorter.plays += 1; if (score > A.data.sorter.best) A.data.sorter.best = score; A.save();
      area.appendChild(h("div", { class: "card summary" }, h("h2", { text: "Finished" }), h("p", { class: "bigscore", text: score + " out of " + deck.length }),
        h("p", { text: "Your best is " + A.data.sorter.best + ". Remember: an implication always answers 'so what must happen now?'" })));
      if (missed.length) {
        var m = h("div", { class: "card" }, h("h2", { text: "Review" }));
        missed.forEach(function (s) { m.appendChild(h("div", { class: "review" }, h("p", {}, h("strong", { text: s.text })), h("p", { class: "small", text: "It is a " + s.type + ". " + s.why }))); });
        area.appendChild(m);
      }
      area.appendChild(h("div", { class: "row-actions" }, h("a", { class: "btn primary", href: "#/practice/sorter", onclick: function () { setTimeout(A.render, 0); }, text: "Play again" }), " ", h("a", { class: "btn", href: "#/practice", text: "More practice" })));
    }
    draw();
  }
})();
