/* Unit 14 Revision Bot: shared setup and teacher settings.
   Edit this file to change the title, add assessment lock dates, or rename the site. */
window.U14 = window.U14 || { kb: [], quiz: [], practice: [], sorter: [], papers: [], technique: {} };

U14.config = {
  title: "Unit 14 Revision Bot",
  subtitle: "BTEC Level 3 IT: IT Service Delivery",
  college: "Exeter College",
  faculty: "Cyber & Digital Technologies",
  version: "1.0",
  updated: "November 2026",
  storageKey: "u14rb_v1",

  /* HINTS
     How many hints a student can use in one quiz, one practice task or one sorter game. */
  hintsPerSession: 3,

  /* EXAMINER GUIDANCE
     The Examiner guidance switch in the header shows how to answer each practice task.
     This sets whether it starts On or Off for a student who has not chosen yet. */
  guidanceDefault: true,

  /* ASSESSMENT LOCK
     The real Part A and Part B must be done without guidance from teachers.
     Add the dates of your live window below and the whole tool is replaced by a
     notice while that window is open. Dates use the form YYYY-MM-DD.
     Example: lockWindows: [{ from: "2027-01-11", to: "2027-02-05", label: "Part A and Part B" }]
     Teachers can preview the tool during a lock by adding ?teacher=1 to the address.
     This is a courtesy for honest use, not security. To lock it properly, take the page down. */
  lockWindows: [],
  lockMessage: "This revision tool is switched off while the live Unit 14 assessment is open. It will come back when the assessment window closes. If you have a question, ask your tutor."
};

U14.topics = [
  { id: "lifecycle", name: "IT service lifecycle and ITIL", spec: "A1", colour: "#1f4e9c" },
  { id: "methods",   name: "Project methodologies", spec: "A1", colour: "#2f6f9f" },
  { id: "strategy",  name: "Strategy, catalogue and requirements", spec: "A1, A3, B1", colour: "#3a7d7a" },
  { id: "roles",     name: "Key staff and benefits", spec: "A1", colour: "#5a7f3d" },
  { id: "orgs",      name: "Organisations and functions", spec: "A2", colour: "#8a7a2b" },
  { id: "diagrams",  name: "Diagrams and defining needs", spec: "A3", colour: "#a2672a" },
  { id: "context",   name: "Context, ethics and the law", spec: "A3, B2", colour: "#a24a3a" },
  { id: "design",    name: "Designing and evaluating solutions", spec: "B3, B4", colour: "#8c3f6b" },
  { id: "data",      name: "Information and data", spec: "C1, C2", colour: "#6a4a9c" },
  { id: "software",  name: "Software and cloud services", spec: "D1", colour: "#3f5fae" },
  { id: "hardware",  name: "Hardware and networks", spec: "D2", colour: "#2a7f8f" },
  { id: "manage",    name: "Managing services, security and change", spec: "D3", colour: "#4f7a4a" },
  { id: "exam",      name: "The task and exam technique", spec: "Assessment", colour: "#7a5a2f" }
];

U14.topicName = function (id) {
  var t = U14.topics.filter(function (x) { return x.id === id; })[0];
  return t ? t.name : id;
};

U14.askChips = [
  "What is the IT service lifecycle?",
  "Difference between incident and problem",
  "SaaS PaaS IaaS",
  "What does UK GDPR say?",
  "How are the 68 marks split?",
  "What is a data flow diagram?",
  "Why do people lose marks in Activity 5?",
  "Switch or router?"
];
