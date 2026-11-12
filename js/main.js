/* Start up: lock check, header controls, navigation and routing. */
(function () {
  var A = U14.app, h = A.h, cfg = U14.config;
  var root = document.documentElement;

  function applyPrefs() {
    var p = A.data.prefs || {};
    root.setAttribute("data-theme", p.theme || "light");
    root.style.fontSize = (p.size || 100) + "%";
  }
  applyPrefs();

  function teacherMode() { return /[?&#]teacher=1/.test(location.href); }

  function lockWindow() {
    var now = new Date(), today = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
    var list = cfg.lockWindows || [];
    for (var i = 0; i < list.length; i++) { if (today >= list[i].from && today <= list[i].to) return list[i]; }
    return null;
  }

  function buildHeader() {
    var t = document.getElementById("site-title"), s = document.getElementById("site-sub");
    if (t) t.textContent = cfg.title;
    if (s) s.textContent = cfg.college + ", " + cfg.faculty;
    document.title = cfg.title + " | " + cfg.college;
    var ctl = document.getElementById("controls");
    if (!ctl) return;
    var sel = h("select", { id: "theme", class: "select small-select", "aria-label": "Colour theme", onchange: function () { A.data.prefs.theme = sel.value; A.save(); applyPrefs(); } },
      [["light", "Light"], ["cream", "Cream"], ["dark", "Dark"]].map(function (o) { return h("option", { value: o[0], text: o[1], selected: (A.data.prefs.theme || "light") === o[0] }); }));
    function size(delta) { var v = Math.max(85, Math.min(150, (A.data.prefs.size || 100) + delta)); A.data.prefs.size = v; A.save(); applyPrefs(); }
    ctl.appendChild(h("label", { class: "sr", for: "theme", text: "Colour theme" }));
    ctl.appendChild(sel);
    ctl.appendChild(h("button", { class: "iconbtn", type: "button", "aria-label": "Make text smaller", text: "A−", onclick: function () { size(-10); } }));
    ctl.appendChild(h("button", { class: "iconbtn", type: "button", "aria-label": "Make text larger", text: "A+", onclick: function () { size(10); } }));
    ctl.appendChild(h("button", { class: "iconbtn", type: "button", "aria-label": "Print this page", text: "Print", onclick: function () { window.print(); } }));
  }

  function buildFooter() {
    var f = document.getElementById("footer-text");
    if (f) f.textContent = cfg.title + " version " + cfg.version + ", updated " + cfg.updated + ". Independent revision support, not published or endorsed by Pearson. Works offline. Progress stays on your device.";
  }

  function start() {
    buildHeader(); buildFooter();
    var lock = lockWindow();
    if (lock && !teacherMode()) {
      document.getElementById("nav").style.display = "none";
      var main = document.getElementById("main");
      main.appendChild(h("div", { class: "card lock" }, h("h1", { text: "Revision tool paused" }),
        h("p", { text: cfg.lockMessage }),
        lock.label ? h("p", { class: "small", text: "Assessment window: " + lock.label }) : null));
      return;
    }
    if (lock && teacherMode()) {
      var bar = h("div", { class: "teacherbar", role: "note", text: "Teacher preview: the assessment lock is on for students (" + (lock.label || lock.from + " to " + lock.to) + ")." });
      document.body.insertBefore(bar, document.body.firstChild);
    }
    document.addEventListener("keydown", function (ev) {
      if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
      if (typeof A.keyHandler === "function") A.keyHandler(ev);
    });
    window.addEventListener("hashchange", A.render);
    if (!location.hash || location.hash === "#") { try { history.replaceState(null, "", "#/home"); } catch (e) { location.hash = "#/home"; } }
    A.render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
