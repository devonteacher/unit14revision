/* Core helpers: DOM builder, saved progress, router, search engine and small visuals. No external libraries. */
(function () {
  var A = U14.app = { routes: {}, state: { chat: [] }, storageOk: true };

  /* ---------- DOM helper ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === false || v === null || v === undefined) return;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k.indexOf("on") === 0 && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (v === true) el.setAttribute(k, "");
      else el.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) add(el, arguments[i]);
    return el;
  }
  function add(el, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { add(el, x); }); return; }
    if (typeof c === "string" || typeof c === "number") { el.appendChild(document.createTextNode(String(c))); return; }
    el.appendChild(c);
  }
  A.h = h;
  A.clear = function (el) { while (el.firstChild) el.removeChild(el.firstChild); };

  /* ---------- Saved progress (localStorage, safe if blocked) ---------- */
  var KEY = U14.config.storageKey;
  function defaults() {
    return { v: 1, quiz: { q: {}, runs: [] }, cards: {}, practice: {}, sorter: { best: 0, plays: 0 }, checklist: {}, prefs: { theme: "light", size: 100 } };
  }
  function load() {
    try {
      var s = window.localStorage.getItem(KEY);
      if (s) {
        var d = JSON.parse(s), base = defaults();
        Object.keys(base).forEach(function (k) { if (d[k] === undefined) d[k] = base[k]; });
        return d;
      }
    } catch (e) { A.storageOk = false; }
    return defaults();
  }
  A.data = load();
  A.save = function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(A.data)); }
    catch (e) { A.storageOk = false; }
  };
  A.resetProgress = function () {
    var prefs = A.data.prefs;
    A.data = defaults();
    A.data.prefs = prefs;
    A.save();
  };

  /* ---------- Utilities ---------- */
  A.shuffle = function (arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  A.kbById = {};
  U14.kb.forEach(function (e) { A.kbById[e.id] = e; });
  A.pct = function (n, d) { return d ? Math.round((n / d) * 100) : 0; };
  A.escapeRe = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
  A.topicColour = function (id) {
    var t = U14.topics.filter(function (x) { return x.id === id; })[0];
    return t ? t.colour : "#1f4e9c";
  };
  A.guidanceOn = function () {
    var g = A.data.prefs && A.data.prefs.guidance;
    return g === undefined ? U14.config.guidanceDefault !== false : !!g;
  };

  A.dyslexiaOn = function () { return !!(A.data.prefs && A.data.prefs.dyslexia); };

  /* Hints: each quiz, practice task or sorter game gets its own small budget. */
  A.focusOn = function () { return !!(A.data.prefs && A.data.prefs.focus); };
  A.superEasyOn = function () { return !!(A.data.prefs && A.data.prefs.superEasy); };
  A.hintBudget = function (questions) {
    var per = U14.config.hintsPerTen || 3, base = Math.max(1, Math.ceil((questions || 10) * per / 10)), used = 0;
    function easy() { return A.superEasyOn(); }
    return {
      get max() { return easy() ? Infinity : base; },
      get unlimited() { return easy(); },
      get maxText() { return easy() ? "unlimited" : String(base); },
      base: base,
      used: function () { return used; },
      left: function () { return easy() ? Infinity : base - used; },
      leftText: function () { return easy() ? "unlimited" : String(base - used); },
      spend: function () { if (!easy() && used >= base) return false; used++; return true; }
    };
  };
  A.announce = function (msg) {
    var r = document.getElementById("live");
    if (r) { r.textContent = ""; setTimeout(function () { r.textContent = msg; }, 20); }
  };

  /* ---------- Router ---------- */
  function parseHash() {
    var hash = (location.hash || "").replace(/^#\/?/, ""), q = {}, i = hash.indexOf("?");
    if (i >= 0) {
      hash.slice(i + 1).split("&").forEach(function (p) {
        var kv = p.split("="); if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
      });
      hash = hash.slice(0, i);
    }
    return { parts: hash.split("/").filter(Boolean).map(decodeURIComponent), q: q };
  }
  A.go = function (path) { location.hash = "#/" + path; };
  A.render = function () {
    var r = parseHash(), name = r.parts[0] || "home", main = document.getElementById("main");
    var fn = A.routes[name] || A.routes.home;
    A.clear(main);
    A.keyHandler = null;
    try { fn(main, r.parts.slice(1), r.q); }
    catch (err) { main.appendChild(h("div", { class: "card" }, h("h2", { text: "Something went wrong" }), h("p", { text: "Please reload the page. If it keeps happening, tell your tutor." }))); if (window.console) console.error(err); }
    var links = document.querySelectorAll("#nav a");
    for (var i = 0; i < links.length; i++) {
      var on = links[i].getAttribute("data-route") === name;
      if (on) links[i].setAttribute("aria-current", "page"); else links[i].removeAttribute("aria-current");
    }
    window.scrollTo(0, 0);
    var t = main.querySelector("h1");
    if (t) { t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); }
  };

  /* ---------- Search engine ---------- */
  var STOP = {};
  ("a an the is are was were be been of to in on for and or with what whats what's how do does did i me my you your can could should would it its this that these those about tell explain please give show which when why who at as by from into than then there their them they we us our have has had not no yes if any some more most very just also difference differences between versus vs meaning mean define definition say example examples help need know want learn understand ok okay").split(" ").forEach(function (w) { STOP[w] = 1; });

  var SYN = {
    pc: "computer desktop", pcs: "computer desktop", laptop: "computer",
    gdpr: "data protection", dpa: "data protection", cma: "computer misuse", sla: "service level agreement",
    marks: "mark", exam: "assessment task", test: "assessment", paper: "task", boundaries: "grade", boundary: "grade",
    hackers: "misuse", hacking: "misuse", hacker: "misuse",
    ethernet: "utp cable", cat5: "utp cable", cat6: "utp cable", cat5e: "utp cable",
    pass: "grade", merit: "grade", distinction: "grade", essay: "explain", cloud: "cloud",
    bills: "cost", price: "cost", cheap: "cost", expensive: "cost", ict: "it", tech: "technology",
    staff: "staff", trained: "training", train: "training", rota: "working", gdp: "data protection",
    dfd: "data flow diagram", "d.f.d": "data flow diagram"
  };


  function stem(w) {
    if (w.length <= 3) return w;
    if (/ies$/.test(w) && w.length > 4) return w.slice(0, -3) + "y";
    if (/(sses)$/.test(w)) return w.slice(0, -2);
    if (/ing$/.test(w) && w.length > 5) { w = w.slice(0, -3); if (/(.)\1$/.test(w)) w = w.slice(0, -1); return w; }
    if (/ed$/.test(w) && w.length > 4) { w = w.slice(0, -2); if (/(.)\1$/.test(w)) w = w.slice(0, -1); return w; }
    if (/(ches|shes|xes|zes)$/.test(w)) return w.slice(0, -2);
    if (/s$/.test(w) && !/ss$/.test(w) && !/us$/.test(w) && !/is$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function words(s) {
    return (s || "").toLowerCase().replace(/[’`]/g, "'").replace(/'s\b/g, "").replace(/[^a-z0-9£%+\- ]+/g, " ").replace(/\s-+\s/g, " ").split(/\s+/).filter(Boolean).map(function (w) { return w.replace(/^-+|-+$/g, ""); }).filter(Boolean);
  }
  function stems(s, keepStops) {
    var out = [];
    words(s).forEach(function (w) {
      var parts = w.indexOf("-") > 0 && !SYN[w] ? w.split("-") : [w];
      parts.forEach(function (p) {
        if (!p) return;
        if (!keepStops && STOP[p]) return;
        out.push(stem(p));
        if (SYN[p]) SYN[p].split(" ").forEach(function (x) { out.push(stem(x)); });
      });
    });
    return out;
  }
  A.stems = stems;

  var vocab = {}, index = [];
  function setOf(arr) { var o = {}; arr.forEach(function (x) { o[x] = 1; }); return o; }
  function plain(s) { return words(s).map(function (w) { return stem(w); }); }
  function buildIndex() {
    U14.kb.forEach(function (e) {
      var termToks = plain(e.term).filter(function (w) { return !STOP[w]; });
      var akaList = (e.aka || []).map(function (a) { return plain(a); });
      var rec = {
        e: e,
        term: setOf(termToks),
        termPhrase: plain(e.term).join(" "),
        aka: akaList.map(setOf),
        akaPhrases: akaList.map(function (a) { return a.join(" "); }),
        id: setOf(plain(e.id.replace(/-/g, " "))),
        short: setOf(plain(e.short)),
        more: setOf(plain((e.more || []).join(" ") + " " + (e.example || "")))
      };
      index.push(rec);
      [termToks, plain(e.short), plain((e.more || []).join(" "))].concat(akaList).forEach(function (arr) { arr.forEach(function (w) { vocab[w] = 1; }); });
    });
  }
  buildIndex();
  var vocabList = Object.keys(vocab).filter(function (w) { return w.length >= 5; });

  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i]; var rowMin = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < rowMin) rowMin = cur[j];
      }
      if (rowMin > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }
  function correct(tokens) {
    var changed = [], out = tokens.map(function (t) {
      if (vocab[t] || t.length < 5 || /[0-9]/.test(t)) return t;
      var max = t.length >= 8 ? 2 : 1, best = null, bd = max + 1;
      vocabList.forEach(function (v) { var d = lev(t, v, max); if (d < bd) { bd = d; best = v; } });
      if (best && bd <= max) { changed.push([t, best]); return best; }
      return t;
    });
    return { tokens: out, changed: changed };
  }

  function score(tokens) {
    var qjoin = " " + tokens.join(" ") + " ";
    var uniq = Object.keys(setOf(tokens));
    if (!uniq.length) return [];
    var res = [];
    index.forEach(function (r) {
      var s = 0, matched = 0;
      uniq.forEach(function (q) {
        var best = 0;
        if (r.term[q]) best = Math.max(best, 6);
        var inAka = false;
        r.aka.forEach(function (set) { if (set[q]) inAka = true; });
        if (inAka) best = Math.max(best, 4);
        if (r.id[q]) best = Math.max(best, 3);
        if (r.short[q]) best = Math.max(best, 2);
        if (r.more[q]) best = Math.max(best, 1);
        if (!best && q.length >= 4) {
          var pre = false;
          Object.keys(r.term).forEach(function (t) { if (t.indexOf(q) === 0 || q.indexOf(t) === 0 && t.length >= 4) pre = true; });
          r.aka.forEach(function (set) { Object.keys(set).forEach(function (t) { if (t.indexOf(q) === 0) pre = true; }); });
          if (pre) best = 1.5;
        }
        if (best) { matched += 1; s += best; }
      });
      if (!matched) return;
      if (r.termPhrase && qjoin.indexOf(" " + r.termPhrase + " ") >= 0 && (r.termPhrase.indexOf(" ") > 0 || r.termPhrase.length >= 3)) s += 14;
      var akaBonus = 0;
      r.akaPhrases.forEach(function (p) {
        if (p && (p.indexOf(" ") > 0 || p.length >= 3) && qjoin.indexOf(" " + p + " ") >= 0) akaBonus = Math.max(akaBonus, p.indexOf(" ") > 0 ? 13 : 8);
      });
      s += akaBonus;
      s *= 0.55 + 0.45 * (matched / uniq.length);
      res.push({ e: r.e, score: s, matched: matched });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res;
  }

  /* Public search: returns {results, corrected, tokens} */
  A.search = function (query) {
    var toks = stems(query);
    var fix = correct(toks);
    var res = score(fix.tokens);
    return { results: res, corrected: fix.changed, tokens: fix.tokens };
  };

  /* Split a "compare" style question into two parts, or return null */
  A.parseCompare = function (q) {
    var s = q.replace(/[?.!]+$/, "").trim(), m;
    m = s.match(/(?:difference(?:s)?\s+between|differences?\s+of|compare|comparing|contrast)\s+(.+?)\s+(?:and|vs\.?|versus|with|&)\s+(.+)$/i);
    if (m) return [m[1], m[2]];
    m = s.match(/^(.+?)\s+(?:vs\.?|versus)\s+(.+)$/i);
    if (m) return [m[1], m[2]];
    m = s.match(/^(?:is it\s+|which is better,?\s+)?(.+?)\s+or\s+(.+)$/i);
    if (m && m[1].split(/\s+/).length <= 4 && m[2].split(/\s+/).length <= 4) return [m[1], m[2]];
    return null;
  };

  /* ---------- Visuals built in HTML so text stays readable on phones ---------- */
  var V = A.visuals = {};
  V.lifecycle = function () {
    function box(n, t, d) { return h("div", { class: "vz-step" }, h("span", { class: "vz-num", text: n }), h("strong", { text: t }), h("span", { text: d })); }
    return h("figure", { class: "vz" },
      h("div", { class: "vz-row" },
        box("1", "Service identification", "Find the needs. Write the outline strategy and catalogue."),
        h("span", { class: "vz-arrow", "aria-hidden": "true", text: "→" }),
        box("2", "Service delivery design", "Decide the technical requirements. Plan the solution."),
        h("span", { class: "vz-arrow", "aria-hidden": "true", text: "→" }),
        box("3", "Service management", "Review, compare, check the impact, improve.")),
      h("div", { class: "vz-loop", text: "Review leads back to new needs, so the cycle repeats." }),
      h("figcaption", { text: "The IT service lifecycle used in Unit 14." }));
  };
  V.valuechain = function () {
    function tile(t, d) { return h("div", { class: "vz-tile" }, h("strong", { text: t }), h("span", { text: d })); }
    return h("figure", { class: "vz" },
      h("div", { class: "vz-grid3" },
        tile("Plan", "Agree direction and plans"), tile("Improve", "Keep making things better"), tile("Engage", "Understand stakeholders"),
        tile("Design and transition", "Meet quality, cost and time"), tile("Obtain or build", "Get the parts of the service"), tile("Deliver and support", "Run it and help users")),
      h("figcaption", { text: "The six ITIL 4 value chain activities." }));
  };
  V.threevs = function () {
    function tile(t, d, ex) { return h("div", { class: "vz-tile" }, h("strong", { text: t }), h("span", { text: d }), h("em", { text: ex })); }
    return h("figure", { class: "vz" },
      h("div", { class: "vz-grid3" },
        tile("Volume", "How much data", "Millions of till scans"),
        tile("Velocity", "How fast it arrives", "Orders per minute on sale day"),
        tile("Variety", "How many types", "Text, photos, payments, video")),
      h("figcaption", { text: "The three Vs of data." }));
  };
  V.cloudstack = function () {
    var layers = ["Applications", "Data", "Runtime and middleware", "Operating system", "Virtualisation and servers", "Storage and networking"];
    var model = {
      "On premises": ["you", "you", "you", "you", "you", "you"],
      "IaaS": ["you", "you", "you", "you", "provider", "provider"],
      "PaaS": ["you", "you", "provider", "provider", "provider", "provider"],
      "SaaS": ["provider", "shared", "provider", "provider", "provider", "provider"]
    };
    var cols = Object.keys(model);
    var tbl = h("table", { class: "vz-table" },
      h("caption", { text: "Who looks after each layer" }),
      h("thead", {}, h("tr", {}, h("th", { scope: "col", text: "Layer" }), cols.map(function (c) { return h("th", { scope: "col", text: c }); }))),
      h("tbody", {}, layers.map(function (l, i) {
        return h("tr", {}, h("th", { scope: "row", text: l }), cols.map(function (c) {
          var who = model[c][i];
          return h("td", { class: "who-" + who, text: who === "you" ? "You" : who === "provider" ? "Provider" : "Shared" });
        }));
      })));
    return h("figure", { class: "vz" }, h("div", { class: "vz-scroll" }, tbl),
      h("figcaption", { text: "With SaaS you still own your own content and manage your own users, so data is shown as shared." }));
  };

  /* ---------- Rendering a knowledge entry ---------- */
  A.entryCard = function (e, opts) {
    opts = opts || {};
    var topic = U14.topicName(e.topic);
    var card = h("article", { class: "kb-card", style: "--accent:" + A.topicColour(e.topic) },
      opts.noHeader ? (e.spec ? h("p", { class: "spec", text: "Spec: " + e.spec }) : null) : h("header", {},
        h("span", { class: "tag", text: topic }),
        h(opts.headingLevel || "h3", { text: e.term }),
        e.spec ? h("span", { class: "spec", text: "Spec: " + e.spec }) : null),
      h("p", { class: "lead", text: e.short }),
      e.visual && V[e.visual] ? V[e.visual]() : null,
      e.more && e.more.length ? h("ul", {}, e.more.map(function (m) { return h("li", { text: m }); })) : null,
      e.example ? h("p", { class: "eg" }, h("strong", { text: "Example: " }), e.example) : null,
      (e.related && e.related.length && !opts.noRelated) ? h("p", { class: "related" }, h("strong", { text: "Related: " }),
        e.related.filter(function (id) { return A.kbById[id]; }).slice(0, 8).map(function (id) {
          return h("button", { class: "chip", type: "button", onclick: function () { (opts.onRelated || function (x) { A.go("learn/entry/" + x); })(id); }, text: A.kbById[id].term });
        })) : null);
    return card;
  };
})();
