/* Start up: lock check, header controls, navigation and routing. */
(function () {
  var A = U14.app, h = A.h, cfg = U14.config;
  var root = document.documentElement;

  function applyPrefs() {
    var p = A.data.prefs || {};
    root.setAttribute("data-theme", p.theme || "light");
    root.style.fontSize = "";
    root.setAttribute("data-focus", A.focusOn() ? "on" : "off");
    root.setAttribute("data-guidance", A.guidanceOn() ? "on" : "off");
    root.setAttribute("data-dyslexia", A.dyslexiaOn() ? "on" : "off");
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
    var gbtn = h("button", { class: "iconbtn togglebtn", type: "button", "aria-pressed": String(A.guidanceOn()), onclick: function () {
      A.data.prefs.guidance = !A.guidanceOn(); A.save(); applyPrefs();
      gbtn.setAttribute("aria-pressed", String(A.guidanceOn())); gbtn.textContent = "Examiner guidance: " + (A.guidanceOn() ? "On" : "Off");
      A.announce("Examiner guidance " + (A.guidanceOn() ? "on" : "off"));
    } }, "Examiner guidance: " + (A.guidanceOn() ? "On" : "Off"));
    ctl.appendChild(gbtn);
    var dbtn = h("button", { class: "iconbtn togglebtn", type: "button", "aria-pressed": String(A.dyslexiaOn()), onclick: function () {
      A.data.prefs.dyslexia = !A.dyslexiaOn(); A.save(); applyPrefs();
      dbtn.setAttribute("aria-pressed", String(A.dyslexiaOn())); dbtn.textContent = "Dyslexia friendly: " + (A.dyslexiaOn() ? "On" : "Off");
      A.announce("Dyslexia friendly mode " + (A.dyslexiaOn() ? "on" : "off"));
    } }, "Dyslexia friendly: " + (A.dyslexiaOn() ? "On" : "Off"));
    ctl.appendChild(dbtn);
    var sbtn = h("button", { class: "iconbtn togglebtn", type: "button", title: "Unlimited hints. Normally you get " + (cfg.hintsPerSession || 3) + " per quiz, task or game.", "aria-pressed": String(A.superEasyOn()), onclick: function () {
      A.data.prefs.superEasy = !A.superEasyOn(); A.save();
      sbtn.setAttribute("aria-pressed", String(A.superEasyOn())); sbtn.textContent = "Super Easy Mode: " + (A.superEasyOn() ? "On" : "Off");
      A.announce("Super Easy Mode " + (A.superEasyOn() ? "on. Hints are unlimited." : "off. Hints are limited to " + (cfg.hintsPerSession || 3) + "."));
    } }, "Super Easy Mode: " + (A.superEasyOn() ? "On" : "Off"));
    ctl.appendChild(sbtn);
    function setFocus(on) {
      A.data.prefs.focus = on; A.save(); applyPrefs();
      fbtn.setAttribute("aria-pressed", String(on)); fbtn.textContent = "Focus mode: " + (on ? "On" : "Off");
      A.announce("Focus mode " + (on ? "on. Press Escape to leave it." : "off"));
    }
    var fbtn = h("button", { class: "iconbtn togglebtn", type: "button", title: "Dims everything except the page content", "aria-pressed": String(A.focusOn()), onclick: function () { setFocus(!A.focusOn()); fbtn.blur(); } }, "Focus mode: " + (A.focusOn() ? "On" : "Off"));
    ctl.appendChild(fbtn);
    var exitPill = h("button", { class: "focus-exit", type: "button", onclick: function () { setFocus(false); } }, "Leave focus mode [Esc]");
    document.body.appendChild(exitPill);
    A.setFocus = setFocus;
    ctl.appendChild(h("label", { class: "sr", for: "theme", text: "Colour theme" }));
    ctl.appendChild(sel);
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
      if (ev.key === "Escape" && A.focusOn() && A.setFocus) { A.setFocus(false); return; }
      if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
      if (typeof A.keyHandler === "function") A.keyHandler(ev);
    });
    window.addEventListener("hashchange", A.render);
    if (!location.hash || location.hash === "#") { try { history.replaceState(null, "", "#/welcome"); } catch (e) { location.hash = "#/welcome"; } }
    A.render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
