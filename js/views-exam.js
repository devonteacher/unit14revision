/* Views: Past papers, Exam coach, Progress */
(function () {
  var A = U14.app, h = A.h, R = A.routes, T = U14.technique;

  /* ================= PAST PAPERS ================= */
  R.papers = function (main, parts) {
    var p = U14.papers.filter(function (x) { return x.id === parts[0]; })[0];
    if (p) {
      main.appendChild(A.backLink("All papers", "papers"));
      main.appendChild(h("div", { class: "page-head" }, h("h1", { text: p.org }), h("p", { class: "intro", text: p.series + ". " + p.sector + "." })));
      main.appendChild(h("section", { class: "card" }, h("h2", { text: "The scenario in brief" }), h("p", { text: p.summary })));
      main.appendChild(h("section", { class: "card" }, h("h2", { text: "What to watch for" }), h("ul", {}, p.watch.map(function (w) { return h("li", { text: w }); }))));
      main.appendChild(h("section", { class: "card" }, h("h2", { text: "Lessons from the examiner reports" }), h("ul", {}, p.lessons.map(function (w) { return h("li", { text: w }); }))));
      main.appendChild(h("section", { class: "card suggest" }, h("h2", { text: "Try this" }), h("p", { text: p.practise }),
        h("a", { class: "btn", href: "#/practice", text: "Go to practice" })));
      main.appendChild(h("p", { class: "small", text: "Summaries are in our own words. Ask your tutor for the full paper and mark scheme." }));
      return;
    }
    main.appendChild(A.pageHead("Past papers", "A walkthrough of each scenario we have: what made it tricky, and what examiners said. Use them to practise applying the same method to a new organisation."));
    main.appendChild(h("div", { class: "topic-grid" }, U14.papers.map(function (x) {
      return h("a", { class: "topic-card", href: "#/papers/" + x.id },
        h("strong", { text: x.org }), h("span", { class: "sub", text: x.series }), h("span", { class: "sub", text: x.sector }));
    })));
    main.appendChild(h("h2", { class: "group", text: "What examiners keep saying" }));
    main.appendChild(h("p", {}, h("a", { class: "btn", href: "#/coach/reports", text: "See it activity by activity, with how to answer" })));
    main.appendChild(h("div", { class: "card" }, h("dl", { class: "themes" }, T.reportThemes.map(function (t) {
      return [h("dt", { text: t.theme }), h("dd", { text: t.detail })];
    }))));
  };

  /* ================= EXAM COACH ================= */
  var TABS = [["plan", "Structure and timing"], ["activities", "Activity guides"], ["reports", "Examiner reports"], ["words", "Command words"], ["mistakes", "Common mistakes"], ["checklist", "Checklist"], ["starters", "Sentence starters"]];

  R.coach = function (main, parts) {
    var tab = parts[0] || "plan";
    main.appendChild(A.pageHead("Exam coach", "How the task works, how to use your time, and how to turn knowledge into marks."));
    main.appendChild(h("nav", { class: "subtabs", "aria-label": "Exam coach sections" }, TABS.map(function (t) {
      return h("a", { href: "#/coach/" + t[0], "aria-current": t[0] === tab ? "page" : false, text: t[1] });
    })));
    var body = h("div", { class: "coach-body" }); main.appendChild(body);
    ({ plan: plan, activities: activities, reports: reports, words: words, mistakes: mistakes, checklist: checklist, starters: starters }[tab] || plan)(body);
  };

  function plan(b) {
    var tp = T.timePlan, totalMin = 0, totalMarks = 0;
    tp.forEach(function (t) { totalMin += t.minutes; totalMarks += t.marks; });
    b.appendChild(h("div", { class: "stats" },
      stat("68", "marks in Part B"), stat("8 hours", "supervised time"), stat("3 hours", "Part A research, over 2 weeks"), stat("2 sides", "of A4 notes allowed in")));
    var c = h("section", { class: "card" }, h("h2", { text: "Time and marks by activity" }),
      h("p", { class: "small", text: "Advised times from the practice task and recent papers. Minutes per mark show how fast you need to work on each activity." }));
    var maxMin = 180;
    tp.forEach(function (t) {
      var mpm = (t.minutes / t.marks).toFixed(1);
      c.appendChild(h("div", { class: "barrow" },
        h("div", { class: "barlabel" }, h("span", { text: t.name }), h("span", { class: "sub", text: t.marks + " marks, " + (t.minutes >= 60 ? (t.minutes / 60) + " h" : t.minutes + " min") + ", " + mpm + " min per mark" })),
        h("div", { class: "bar", role: "img", "aria-label": t.name + ": " + t.minutes + " minutes for " + t.marks + " marks" }, h("span", { style: "width:" + A.pct(t.minutes, maxMin) + "%;background:var(--accent)" }))));
    });
    c.appendChild(h("p", {}, h("strong", { text: "Plus " + T.technicalLanguageMarks + " marks " }), "for using technical language accurately across the whole task. Total: " + totalMarks + " + " + T.technicalLanguageMarks + " = " + (totalMarks + T.technicalLanguageMarks) + " marks in " + (totalMin / 60) + " hours."));
    c.appendChild(h("p", {}, "Activities 4 and 5 together are worth ", h("strong", { text: "28 marks" }), ", which is over 40% of the task, for only 3 of the 8 hours. Do not run out of time for them."));
    b.appendChild(c);
    b.appendChild(h("section", { class: "card" }, h("h2", { text: "Rules that matter" }),
      h("ul", {}, [
        "Part A must be completed before Part B. You research independently. Your tutor cannot give feedback.",
        "In Part B you work alone, with no internet, using only your own two sides of A4 notes.",
        "Use any supplied templates and name your files exactly as the task says.",
        "Read the whole brief before you start. Reading time is part of the 8 hours.",
        "Check your own task booklet for the exact rules, because details can change between series."
      ].map(function (t) { return h("li", { text: t }); }))));
  }
  function stat(n, l) { return h("div", { class: "stat" }, h("strong", { text: n }), h("span", { text: l })); }

  function activities(b) {
    T.activityGuides.forEach(function (g) {
      var task = U14.practice.filter(function (p) { return p.activity === g.activity && p.scenario === "quay"; })[0];
      b.appendChild(h("details", { class: "acc", open: g.activity === 3 },
        h("summary", {}, h("strong", { text: "Activity " + g.activity + ": " + g.title }), h("span", { class: "sub", text: g.marks + " marks, about " + g.time })),
        h("div", { class: "acc-body" },
          h("p", {}, h("strong", { text: "Aim: " }), g.aim),
          h("h3", { text: "Structure" }), h("ul", {}, g.structure.map(function (x) { return h("li", { text: x }); })),
          h("div", { class: "two" },
            h("div", { class: "good" }, h("h3", { text: "Higher marks" }), h("ul", {}, g.higher.map(function (x) { return h("li", { text: x }); }))),
            h("div", { class: "weak" }, h("h3", { text: "Lower marks" }), h("ul", {}, g.lower.map(function (x) { return h("li", { text: x }); })))),
          task ? h("p", {}, h("a", { class: "btn", href: "#/practice/" + task.id, text: "Practise this activity" })) : null)));
    });
  }

  function words(b) {
    b.appendChild(h("div", { class: "card" }, h("p", { text: "The command word tells you how deep to go. Check it before every answer." }),
      h("div", { class: "vz-scroll" }, h("table", { class: "grid" },
        h("thead", {}, h("tr", {}, ["Word", "Depth", "What it means", "Example", "Common trap"].map(function (x) { return h("th", { scope: "col", text: x }); }))),
        h("tbody", {}, T.commandWords.map(function (w) {
          return h("tr", {}, h("th", { scope: "row", text: w.word }), h("td", { text: w.depth }), h("td", { text: w.means }), h("td", { text: w.example }), h("td", { text: w.trap }));
        }))))));
  }

  function reports(b) {
    b.appendChild(h("section", { class: "card note" }, h("h2", { text: "What examiners keep telling students" }),
      h("p", { text: "The reports from different series say the same things. Here they are for each activity, with how to answer and what earns the marks. Switch on Examiner guidance at the top to see the same advice on every practice task." }),
      h("p", { class: "small", text: "Summarised in our own words. Always read the full report for your own series with your tutor." })));
    T.activityGuides.forEach(function (g) {
      var themes = T.reportThemes.filter(function (t) { return t.acts && t.acts.indexOf(g.activity) >= 0; });
      var task = U14.practice.filter(function (p) { return p.activity === g.activity && p.scenario === "quay"; })[0];
      var c = h("section", { class: "card report" },
        h("h2", { text: "Activity " + g.activity + ": " + g.title }),
        h("p", { class: "sub", text: g.marks + " marks, about " + g.time }));
      c.appendChild(h("h3", { text: "What examiners report" }));
      c.appendChild(h("ul", {}, themes.map(function (t) { return h("li", {}, h("strong", { text: t.theme + ". " }), t.detail); })));
      c.appendChild(h("h3", { text: "How to answer it" }));
      c.appendChild(h("ol", {}, g.structure.map(function (x) { return h("li", { text: x }); })));
      c.appendChild(h("div", { class: "two" },
        h("div", { class: "good" }, h("h3", { text: "Earns marks" }), h("ul", {}, g.higher.map(function (x) { return h("li", { text: x }); }))),
        h("div", { class: "weak" }, h("h3", { text: "Loses marks" }), h("ul", {}, g.lower.map(function (x) { return h("li", { text: x }); })))));
      if (task) c.appendChild(h("p", {}, h("a", { class: "btn", href: "#/practice/" + task.id, text: "Practise Activity " + g.activity }), " ", h("a", { class: "btn", href: "#/coach/activities", text: "Full activity guide" })));
      b.appendChild(c);
    });
    b.appendChild(h("section", { class: "card" }, h("h2", { text: "Lessons from each paper" }),
      h("p", { text: "Open a past paper to see what made that scenario tricky and what its examiner report said." }),
      h("div", { class: "topic-grid" }, U14.papers.map(function (x) {
        return h("a", { class: "topic-card", href: "#/papers/" + x.id }, h("strong", { text: x.org }), h("span", { class: "sub", text: x.series }));
      }))));
  }

  function mistakes(b) {
    b.appendChild(h("div", { class: "card" }, h("p", { text: "These come up again and again in examiner reports." }),
      T.mistakes.map(function (m) {
        return h("div", { class: "mistake" }, h("p", { class: "bad" }, h("strong", { text: "Avoid: " }), m.bad), h("p", { class: "fix" }, h("strong", { text: "Instead: " }), m.fix));
      })));
  }

  function checklist(b) {
    var total = 0, done = 0;
    T.checklist.forEach(function (g, gi) { g.items.forEach(function (_, ii) { total++; if (A.data.checklist[gi + "-" + ii]) done++; }); });
    var prog = h("p", { class: "bigscore" });
    function upd() { done = 0; Object.keys(A.data.checklist).forEach(function (k) { if (A.data.checklist[k]) done++; }); prog.textContent = done + " of " + total + " ticked"; }
    b.appendChild(h("p", { class: "intro", text: "Adapted from the faculty Unit 14 checklist. Tick items as you complete them. Saved on this device." }));
    b.appendChild(prog);
    T.checklist.forEach(function (g, gi) {
      var c = h("section", { class: "card" }, h("h2", { text: g.group }));
      g.items.forEach(function (it, ii) {
        var key = gi + "-" + ii, id = "cl" + key;
        var cb = h("input", { type: "checkbox", id: id, checked: !!A.data.checklist[key], onchange: function () { A.data.checklist[key] = cb.checked; A.save(); upd(); } });
        c.appendChild(h("div", { class: "check-row" }, cb, " ", h("label", { for: id, text: it })));
      });
      b.appendChild(c);
    });
    upd();
    b.appendChild(h("div", { class: "row-actions" }, h("button", { class: "btn", type: "button", text: "Untick everything", onclick: function () { if (window.confirm("Untick everything?")) { A.data.checklist = {}; A.save(); A.render(); } } })));
  }

  function starters(b) {
    b.appendChild(h("div", { class: "card" }, h("p", { text: "Sentence starters that push an answer from description towards reasoning. Do not copy them word for word. Use them to get moving." }),
      T.starters.map(function (g) { return h("div", {}, h("h3", { text: g.type }), h("ul", {}, g.starters.map(function (s) { return h("li", { text: s }); }))); })));
  }

  /* ================= PROGRESS ================= */
  R.progress = function (main) {
    main.appendChild(A.pageHead("My progress", "Saved only on this device, in this browser. Nobody else can see it."));
    if (!A.storageOk) main.appendChild(h("div", { class: "card bad" }, h("p", { text: "This browser is blocking saving, so your progress will be lost when you close the page." })));
    var runs = A.data.quiz.runs, seen = Object.keys(A.data.quiz.q), right = 0, total = 0;
    seen.forEach(function (k) { right += A.data.quiz.q[k].right; total += A.data.quiz.q[k].right + A.data.quiz.q[k].wrong; });
    var known = 0, learning = 0; Object.keys(A.data.cards).forEach(function (k) { if (A.data.cards[k] === 2) known++; else learning++; });
    var attempted = Object.keys(A.data.practice).filter(function (k) { return A.data.practice[k].attempts; }).length;
    main.appendChild(h("div", { class: "stats" },
      stat(String(runs.length), "quizzes completed"), stat(total ? A.pct(right, total) + "%" : "None yet", "answers right overall"),
      stat(seen.length + " of " + U14.quiz.length, "questions seen"), stat(known + " of " + U14.kb.length, "flashcards known"),
      stat(attempted + " of " + U14.practice.length, "practice tasks tried"), stat(String(A.data.sorter.best), "best sorter score")));
    var st = A.topicStats(), weakList = [];
    var c = h("section", { class: "card" }, h("h2", { text: "Quiz accuracy by topic" }));
    U14.topics.forEach(function (t) {
      var s = st[t.id];
      if (s.total) { c.appendChild(A.barRow(t.name, A.pct(s.right, s.total), t.colour, s.right + " of " + s.total)); if (s.right / s.total < 0.7) weakList.push(t); }
      else c.appendChild(h("p", { class: "small" }, t.name + ": not tried yet. ", h("a", { href: "#/quiz?topic=" + t.id, text: "Try it" })));
    });
    main.appendChild(c);
    if (weakList.length) main.appendChild(h("section", { class: "card suggest" }, h("h2", { text: "Revise these next" }),
      h("ul", {}, weakList.map(function (t) { return h("li", {}, h("a", { href: "#/learn/" + t.id, text: t.name }), " ", h("a", { href: "#/quiz?topic=" + t.id + "&go=1", text: "(quiz)" })); }))));
    if (runs.length) {
      main.appendChild(h("section", { class: "card" }, h("h2", { text: "Recent quizzes" }),
        h("ul", {}, runs.slice(-8).reverse().map(function (r) { return h("li", { text: r.d + ": " + (r.b ? "Ready made quiz " + r.b : r.t === "all" ? "All topics" : U14.topicName(r.t)) + ", " + r.s + " out of " + r.n }); }))));
    }
    var imp = h("input", { type: "file", accept: "application/json,.json", class: "sr", id: "imp", onchange: function () {
      var f = imp.files && imp.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { try { var d = JSON.parse(rd.result); if (d && d.v === 1) { var pr = A.data.prefs; A.data = d; if (!A.data.prefs) A.data.prefs = pr; A.save(); A.render(); } else window.alert("That file does not look like saved progress."); } catch (e) { window.alert("That file could not be read."); } };
      rd.readAsText(f);
    } });
    main.appendChild(h("section", { class: "card" }, h("h2", { text: "Save or move your progress" }),
      h("p", { class: "small", text: "Download a file to keep a copy or to move to another device, then load it there." }),
      h("div", { class: "row-actions" },
        h("button", { class: "btn", type: "button", text: "Download my progress", onclick: function () {
          try {
            var blob = new Blob([JSON.stringify(A.data)], { type: "application/json" }), a = document.createElement("a");
            a.href = URL.createObjectURL(blob); a.download = "unit14-progress.json"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
          } catch (e) { window.alert("Downloading is not available in this browser."); }
        } }), " ",
        h("label", { class: "btn", for: "imp", text: "Load saved progress" }), imp, " ",
        h("button", { class: "btn danger", type: "button", text: "Reset everything", onclick: function () { if (window.confirm("This deletes all your saved progress on this device. Continue?")) { A.resetProgress(); A.render(); } } }))));
  };
})();
