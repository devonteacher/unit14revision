/* Examiner guidance for each practice task: a plan for building the answer.
   Shown above the answer box when the "Examiner guidance" switch is on.
   "themes" names entries in U14.technique.reportThemes, so the examiner report messages stay in one place.
   Written in our own words from the patterns in the published examiner reports. */
U14.guidance = {
  "t-lifecycle": { plan: [
    "Name the three stages in order, one short sentence each.",
    "Say what each stage produces or decides.",
    "Link the stages with because or so, and show that the cycle repeats.",
    "Finish with one example from a real or made up organisation."
  ] },
  "t-incident-problem": { plan: [
    "Say what an incident is: an unplanned interruption, where the aim is to restore service fast.",
    "Say what a problem is: the underlying cause, where the aim is to stop it happening again.",
    "Show the link: several incidents can come from one problem.",
    "Add a short worked example: what broke, the quick fix, the root cause."
  ] },
  "t-methods": { plan: [
    "Describe Waterfall in one line, then Agile in one line.",
    "Give a benefit and a drawback of each.",
    "Compare them directly with whereas or however, not in two separate blocks.",
    "Finish with when each one suits, and why."
  ] },
  "t-factors-req": { plan: [
    "Choose three or more factors and name each one.",
    "Say what each one means in practice for the organisation.",
    "Say how each one changes the requirements.",
    "Show what goes wrong if a factor is ignored, using one example."
  ] },
  "t-law": { themes: ["Legislation and specialist needs"], plan: [
    "Name the first law correctly.",
    "Say what it requires or forbids, then what the organisation must do in practice.",
    "Repeat for a second, different law.",
    "Say what happens if the law is broken, and link it to an organisation."
  ] },
  "t-cloud": { plan: [
    "Define SaaS, PaaS and IaaS in one line each.",
    "Show who manages what: the provider or the customer.",
    "Recommend one and link it to the one part time technician.",
    "Give a drawback of your choice and say how you would reduce it."
  ] },
  "t-security": { plan: [
    "Give at least one physical measure and one technical measure.",
    "For each, say what it protects and how.",
    "Link measures to confidentiality, integrity or availability.",
    "Add people and policy, then finish with an example."
  ] },
  "t-data-info": { themes: ["Activity 3 data and information"], plan: [
    "Define data, then information, in plain words.",
    "Give one example that shows data turning into information.",
    "Describe strategic, management and operational information, one each.",
    "Say who uses each level and how far ahead they look."
  ] },
  "t-network": { plan: [
    "Say what a switch does, then a router, then a firewall.",
    "Say why a business needs each one, not only what it does.",
    "Show how they work together, in order.",
    "Add a backup route or a security impact."
  ] },
  "t-backup": { plan: [
    "Say what backup means and what disaster recovery means.",
    "Cover copies, off site storage, how often, what to back up and testing restores.",
    "Say who is responsible and how long recovery can take.",
    "Weigh cost against risk and reach a judgement."
  ] },
  "t-design-factors": { themes: ["Activity 3 data and information", "Responding to change"], plan: [
    "Name at least four factors.",
    "Say what each one means.",
    "For each, say what happens to the data if it is handled well and if it is ignored.",
    "Add an example, then say which factors matter most and why."
  ] },
  "q-a1": { themes: ["Using the scenario", "Legislation and specialist needs"], plan: [
    "Write three needs, not products.",
    "Give each a priority: high, medium or low.",
    "Justify each one with a fact from the brief, using because or so.",
    "Make sure one need is for customers, and that not everything is high."
  ] },
  "q-a2": { themes: ["Catalogue clarity", "Using the scenario"], plan: [
    "Pick two functions and use the headings: service name, description, users, technology.",
    "Write each description so that someone outside IT could follow it.",
    "Say what each service must achieve.",
    "Add what changes in the future."
  ] },
  "q-a3-data": { themes: ["Activity 3 data and information", "Legislation and specialist needs"], plan: [
    "Give information and data their own headings.",
    "Go through each role and say what information it needs.",
    "List the data held, where it is stored and how it links together.",
    "Cover protection, UK GDPR, backup and how long data is kept."
  ] },
  "q-a4": { themes: ["Activity 4 evaluation", "Responding to change", "Using the scenario"], plan: [
    "Summarise each option in one line.",
    "Weigh the strengths and weaknesses of both, using facts from the brief.",
    "Cover now and the future, not only the future.",
    "Recommend one, give reasons and say what it gives up."
  ] },
  "q-a5-staff": { themes: ["Activity 5 implications", "Responding to change", "Using the scenario"], plan: [
    "For each change, write what happens, what must be done and who does it.",
    "Cover training, support after launch, and accounts and access.",
    "Cover timing and disruption.",
    "Add a constraint and a change. Do not just list benefits."
  ] },
  "j-parta": { themes: ["Legislation and specialist needs", "Using the scenario"], plan: [
    "Make a heading for each area to research.",
    "Under each, say where you will look and what you will record.",
    "Name similar organisations of the same size and sector.",
    "Say how you will turn it into two sides of A4 notes, in your own words."
  ] }
};
