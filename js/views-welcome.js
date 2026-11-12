/* Welcome page: explains what the tool is for. Animated, and calm when reduced motion is on. */
(function () {
  var A = U14.app, h = A.h, R = A.routes;

  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }

  function countUp(el, target) {
    if (reduced()) { el.textContent = String(target); return; }
    var t0 = null, dur = 1300;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  R.welcome = function (main) {
    var cfg = U14.config;
    var wrap = h("div", { class: "wel" });
    main.appendChild(wrap);

    /* ---- Hero ---- */
    var words = ["Welcome", "to", "your", "Unit", "14", "revision", "space"];
    var title = h("h1", { class: "wel-title", id: "wel-title" }, words.map(function (w, k) {
      return h("span", { class: "wel-word", style: "--d:" + (0.15 + k * 0.09) + "s", text: w + (k < words.length - 1 ? " " : "") });
    }));
    var nodes = [["Learn", "#/learn"], ["Quiz", "#/quiz"], ["Practise", "#/practice"], ["Exam coach", "#/coach"]];
    var ring = h("div", { class: "wel-ring" }, nodes.map(function (n, k) {
      return h("a", { class: "wel-node", href: n[1], style: "--a:" + (k * 90) + "deg" }, h("span", { text: n[0] }));
    }));
    var orbit = h("div", { class: "wel-orbit" },
      h("div", { class: "wel-halo h1", "aria-hidden": "true" }), h("div", { class: "wel-halo h2", "aria-hidden": "true" }),
      ring, h("div", { class: "wel-core", "aria-hidden": "true" }, h("strong", { text: "U14" }), h("span", { text: "IT Service Delivery" })));
    wrap.appendChild(h("section", { class: "wel-hero", "aria-labelledby": "wel-title" },
      h("div", { class: "wel-orb o1", "aria-hidden": "true" }), h("div", { class: "wel-orb o2", "aria-hidden": "true" }), h("div", { class: "wel-orb o3", "aria-hidden": "true" }),
      h("div", { class: "wel-grid" },
        h("div", { class: "wel-copy" },
          h("p", { class: "wel-kicker", text: "BTEC Level 3 IT, " + cfg.college }),
          title,
          h("p", { class: "wel-lead", text: "Everything you need to revise IT Service Delivery in one place. Short explanations, flashcards, quizzes, written practice and exam coaching. No sign in. No AI. Works offline." }),
          h("div", { class: "wel-cta" },
            h("a", { class: "wel-btn main", href: "#/guide", text: "Take the two minute tour" }),
            h("a", { class: "wel-btn ghost", href: "#/home", text: "Start revising" }))),
        orbit)));

    /* ---- Numbers ---- */
    var stats = [[U14.kb.length, "revision entries"], [U14.quiz.length, "quiz questions"], [5, "ready made quizzes"], [U14.practice.length, "practice tasks"], [U14.papers.length, "past paper walkthroughs"]];
    var statRow = h("div", { class: "wel-stats reveal", role: "list" });
    var counters = [];
    stats.forEach(function (s) {
      var num = h("strong", { class: "wel-num", text: "0" });
      counters.push([num, s[0]]);
      statRow.appendChild(h("div", { class: "wel-stat", role: "listitem" }, num, h("span", { text: s[1] })));
    });
    wrap.appendChild(statRow);

    /* ---- Purpose ---- */
    wrap.appendChild(h("section", { class: "wel-section reveal", "aria-labelledby": "wel-why" },
      h("h2", { id: "wel-why", text: "What this is for" }),
      h("p", { class: "wel-big", text: "This site helps you get ready for the Unit 14 assessment, one small step at a time." }),
      h("p", { text: "It replaces a chatbot that could not be shared with everyone. Nothing here uses AI. Every answer comes from a fixed revision bank written for this unit, so you get the same clear answer every time. There is no account and no tracking. Your scores stay on your own device." })));

    var cards = [
      ["1", "Understand it", "Plain explanations of every idea in the specification, each with a real example from the case study style scenarios."],
      ["2", "Remember it", "Flashcards, quizzes and hints train your memory to recall an idea, not just recognise it."],
      ["3", "Use it", "Write exam style answers, get feedback on what is missing and see what examiners reward."]
    ];
    wrap.appendChild(h("div", { class: "wel-cards" }, cards.map(function (c, k) {
      return h("article", { class: "wel-card reveal", style: "--d:" + (k * 0.12) + "s" }, h("span", { class: "wel-cardnum", "aria-hidden": "true", text: c[0] }), h("h3", { text: c[1] }), h("p", { text: c[2] }));
    })));

    /* ---- Journey ---- */
    var steps = [["Learn", "Read one topic."], ["Flip", "Test your memory."], ["Quiz", "Ten questions."], ["Write", "Answer a task."]];
    wrap.appendChild(h("section", { class: "wel-section reveal", "aria-labelledby": "wel-how" },
      h("h2", { id: "wel-how", text: "A good revision session" }),
      h("p", { text: "About 20 minutes. Do it little and often, with a new topic each time." }),
      h("ol", { class: "wel-journey" }, steps.map(function (s, k) {
        return h("li", { style: "--d:" + (k * 0.25) + "s" }, h("span", { class: "wel-dot", "aria-hidden": "true", text: String(k + 1) }), h("strong", { text: s[0] }), h("span", { text: s[1] }));
      }))));

    /* ---- Closing ---- */
    wrap.appendChild(h("section", { class: "wel-end reveal" },
      h("h2", { text: "Ready when you are" }),
      h("p", { text: "Part A research and the Part B set task must be your own work. Use this site to learn the content and practise on past, sample and practice papers. Your tutor will say when not to use it." }),
      h("div", { class: "wel-cta" },
        h("a", { class: "wel-btn main", href: "#/home", text: "Start revising" }),
        h("a", { class: "wel-btn ghost2", href: "#/ask", text: "Ask a question" })),
      h("p", { class: "small", text: "Independent revision support, not published or endorsed by Pearson." })));

    /* ---- Reveal on scroll and counters ---- */
    var items = wrap.querySelectorAll(".reveal"), started = false;
    function startCounters() { if (started) return; started = true; counters.forEach(function (c) { countUp(c[0], c[1]); }); }
    if (reduced() || !("IntersectionObserver" in window)) {
      counters.forEach(function (c) { c[0].textContent = String(c[1]); });
      return;
    }
    wrap.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        if (en.target === statRow) startCounters();
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    for (var k = 0; k < items.length; k++) io.observe(items[k]);
  };
})();
