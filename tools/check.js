#!/usr/bin/env node
/* Checks the content files before you publish. Needs Node only, no packages.
   Run:  node tools/check.js
   It reports duplicate ids, links to entries that do not exist, quiz entries that do not have
   three wrong answers, and any dashes (the style guide for this tool is no dashes in student text). */
const fs = require("fs");
const path = require("path");
global.window = global;
const root = path.resolve(__dirname, "..");
const files = ["config", "data/knowledge-1", "data/knowledge-2", "data/knowledge-3", "data/knowledge-4", "data/quiz", "data/practice", "data/papers", "data/technique"];
files.forEach(f => { (0, eval)(fs.readFileSync(path.join(root, "js", f + ".js"), "utf8")); });

let problems = 0;
const bad = (m) => { problems += 1; console.log("PROBLEM: " + m); };

const ids = {};
U14.kb.forEach(e => { if (ids[e.id]) bad("duplicate knowledge id " + e.id); ids[e.id] = e; });
const topics = new Set(U14.topics.map(t => t.id));
U14.kb.forEach(e => {
  ["id", "topic", "term", "short"].forEach(k => { if (!e[k]) bad("entry " + e.id + " is missing " + k); });
  if (!topics.has(e.topic)) bad("entry " + e.id + " has an unknown topic " + e.topic);
  (e.related || []).forEach(r => { if (!ids[r]) bad("entry " + e.id + " relates to a missing entry " + r); });
  if (e.visual && !["lifecycle", "valuechain", "threevs", "cloudstack"].includes(e.visual)) bad("entry " + e.id + " has an unknown visual " + e.visual);
});
U14.quiz.forEach(q => {
  if (!topics.has(q.topic)) bad("quiz " + q.id + " has an unknown topic " + q.topic);
  if (!q.wrong || q.wrong.length !== 3) bad("quiz " + q.id + " needs exactly three wrong answers");
  if (q.kb && !ids[q.kb]) bad("quiz " + q.id + " points to a missing entry " + q.kb);
  if (!q.why) bad("quiz " + q.id + " has no explanation");
});
U14.practice.forEach(t => {
  if (!t.points || !t.checklist || !t.model) bad("practice task " + t.id + " is incomplete");
  if (t.scenario && !U14.scenarios[t.scenario]) bad("practice task " + t.id + " uses a missing scenario " + t.scenario);
});

/* Dash check across every student facing file */
const scan = [];
(function walk(d) {
  fs.readdirSync(d).forEach(n => {
    const p = path.join(d, n);
    if (fs.statSync(p).isDirectory()) { if (!["node_modules", ".git", "dist"].includes(n)) walk(p); }
    else if (/\.(js|html|css)$/.test(n) && p.indexOf(path.join(root, "js", "data")) === 0) scan.push(p);
  });
})(root);
scan.forEach(p => {
  fs.readFileSync(p, "utf8").split("\n").forEach((l, i) => {
    if (/[–—]/.test(l)) bad("dash found in " + path.relative(root, p) + " line " + (i + 1));
    if (/\w - \w/.test(l)) bad("spaced hyphen in " + path.relative(root, p) + " line " + (i + 1));
  });
});

console.log(`Checked ${U14.kb.length} knowledge entries, ${U14.quiz.length} quiz questions, ${U14.practice.length} practice tasks, ${U14.sorter.length} sorter statements, ${U14.papers.length} past paper walkthroughs.`);
console.log(problems ? problems + " problem(s) found." : "All checks passed.");
process.exit(problems ? 1 : 0);
