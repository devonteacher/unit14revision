# Unit 14 Revision Bot

A free, standalone revision tool for BTEC Level 3 IT, Unit 14 IT Service Delivery. It runs entirely in the browser. There is no AI, no sign in, no credits, no tracking and no server. Students can use it on a phone, a college PC or offline.

It was built for the Cyber and Digital Technologies faculty at Exeter College to replace a shared chatbot that could no longer be shared.

## What students get

| Mode | What it does |
| --- | --- |
| Ask | Type a question in your own words. A built in search matches it to the revision bank. Handles typos, "X or Y?", "difference between X and Y", "quiz me on ..." and "flashcards for ...". |
| Learn | 155 short entries across 13 topics, each with a plain explanation, bullet points, an example and a link to the spec section. Four small visuals (lifecycle, value chain, three Vs, cloud responsibility table). |
| Flashcards | Flip cards by topic. Cards marked "still learning" come up more often. |
| Quiz | 110 multiple choice questions with an explanation after every answer, topic filters, retry missed questions. |
| Practice | 17 written tasks (theory, Quay Cycles mini activities, a Jaten Part A planning task). Instant feedback shows which expected points are missing, highlights scenario facts, technical terms and reasoning words, then a self mark checklist and a model answer. Also a game that sorts statements into describe, benefit or implication. |
| Past papers | Eight scenario walkthroughs with what to watch for and the lessons from examiner reports, plus the themes that repeat. |
| Exam coach | Task structure and time plan, a guide to each activity, command words, common mistakes, a checklist adapted from the faculty checklist, and sentence starters. |
| Progress | Scores by topic, what to revise next, export and import of progress. Saved only in the student's own browser. |

Other features: three themes (light, cream, dark), text size buttons, keyboard control (keys 1 to 4 in the quiz, space to flip cards), skip link, A4 print stylesheet, works in an iframe.

## Quick start

Open `dist/unit14-revision-bot.html` in any browser. That one file is everything.

To rebuild it after changing content:

```
python3 tools/build.py
```

The build needs only Python 3. It writes `dist/unit14-revision-bot.html` and a copy called `dist/index.html`.

Before publishing, run the content check:

```
node tools/check.js
```

It looks for duplicate ids, broken links between entries, quiz questions without three wrong answers, and dashes in the student text.

## Putting it on Tools for Teaching

Pick whichever suits the site.

1. **Link to it.** Upload `unit14-revision-bot.html` to your web space (for example `https://toolsforteaching.co.uk/u14/index.html`) and link to that address. This is the simplest and keeps the tool in its own tab.
2. **Embed it.** Add an iframe to a page on the site:

```html
<iframe src="/u14/index.html" title="Unit 14 Revision Bot"
        style="width:100%; height:85vh; border:0;" loading="lazy"></iframe>
```

3. **Use GitHub Pages.** After you publish to GitHub (below) the tool lives at `https://YOUR-USERNAME.github.io/unit14-revision-bot/`. Link or embed that address from Tools for Teaching.

The tool stores progress in the browser's local storage for the site it is served from. If you move it to a new address, students start with empty progress (they can use Download my progress and Load saved progress to carry it across).

## Publishing to GitHub

1. Create an empty repository on GitHub, for example `unit14-revision-bot`.
2. In this folder run:

```
git init
git add .
git commit -m "First version of the Unit 14 Revision Bot"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/unit14-revision-bot.git
git push -u origin main
```

3. In the repository go to Settings, then Pages, and set the source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` runs the content check, builds the single file and publishes it every time you push to `main`.
4. Edit `LICENSE` and put your own name or organisation on the first line, or replace it with the licence you prefer.

## Changing the content

Everything students see lives in plain text files you can edit in any editor. After editing, run `node tools/check.js` then `python3 tools/build.py`.

| File | What is in it |
| --- | --- |
| `js/config.js` | Title, college name, version, the assessment lock, the 13 topics and the suggested questions on the Ask page. |
| `js/data/knowledge-1.js` to `knowledge-4.js` | The revision bank. Each entry is one `kb.push({...})` block. |
| `js/data/quiz.js` | Quiz questions. One line each: topic, question, right answer, three wrong answers, explanation, entry to revise. |
| `js/data/practice.js` | Practice tasks, the Quay Cycles and Jaten scenarios, and the sorter statements. |
| `js/data/papers.js` | Past paper walkthroughs and the repeating examiner themes. |
| `js/data/technique.js` | Command words, activity guides, mistakes, time plan, checklist, sentence starters. |

A knowledge entry looks like this:

```js
{
  id: "scalability",            // unique, lowercase, used in links
  topic: "context",             // one of the topic ids in config.js
  term: "Scalability",          // the title
  aka: ["scale up", "grow"],    // other words students might type
  short: "One or two sentences that answer the question.",
  more: ["Bullet one.", "Bullet two."],
  example: "A worked example.",
  spec: "A3, B2",               // spec reference shown on the card
  related: ["cloud-computing"], // ids of related entries
  visual: "cloudstack"          // optional: lifecycle, valuechain, threevs or cloudstack
}
```

Adding words to `aka` is the best way to improve what the Ask page finds. Test a new question by typing it into the Ask page.

To add a new Quay style scenario, copy the `U14.scenarios.quay` block in `practice.js`, then add tasks that use it. The `facts` list is what gets highlighted in the student's answer.

## Assessment lock

Part A research and the Part B set task must be the student's own work. In `js/config.js` set the dates of your live window:

```js
lockWindows: [{ from: "2027-01-11", to: "2027-02-05", label: "Part A and Part B" }]
```

While a window is open the whole tool is replaced by a notice. Teachers can still preview it by adding `?teacher=1` to the address. This is a courtesy for honest use, not security. To lock it properly, take the page down for that period. Check live dates with your exams officer, because the assessment calendar changes each series.

## Content and copyright

All explanations, questions, model answers and walkthroughs were written for this tool. Past paper content is summarised in new words. No exam board text, mark scheme text or published model answers are reproduced. BTEC and Pearson are trademarks of Pearson Education Limited. This tool is independent and is not published or endorsed by Pearson. Do not add exam board papers, mark schemes or examiner reports to the repository.

The Quay Cycles scenario comes from your own practice task. The Jaten scenario summarises the published additional sample material.

See `docs/CONTENT-NOTES.md` for points to check against your own teaching materials.

## Technical notes

* Plain HTML, CSS and JavaScript. No libraries, no build tools beyond the small Python script, no network requests.
* Works from `file://`, so students can run the single file from a USB stick or a college network drive.
* Progress and drafts use `localStorage` inside try and catch. If the browser blocks it (some private windows), the tool still works and shows a warning on the Progress page.
* Tested in Chromium at desktop and phone widths. Layout does not scroll sideways.
