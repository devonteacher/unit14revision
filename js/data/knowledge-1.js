/* Knowledge base part 1: lifecycle and ITIL, methodologies, strategy and catalogue.
   Each entry: id, topic, term, aka (words students might type), short, more (bullets), example, spec, related, visual. */
(function () {
  var kb = U14.kb;

  /* ---------- IT service lifecycle and ITIL ---------- */
  kb.push(
    {
      id: "it-service", topic: "lifecycle", term: "IT service",
      aka: ["service", "it services", "what is a service"],
      short: "Anything an organisation does with IT to get its work done, such as email, a till system, online booking or printing.",
      more: [
        "The important part is the job the IT helps with, not the product name.",
        "Describe a service by what it does for people: \"Shows every shop’s stock\" is better than \"stock software\".",
        "A service always supports an aim of the organisation, such as selling more or keeping data safe."
      ],
      example: "Quay Cycles: \"Repair job diary\" is a service for mechanics. The software it runs on is a product.",
      spec: "A1", related: ["it-service-catalogue", "service-requirement", "service-lifecycle"]
    },
    {
      id: "service-lifecycle", topic: "lifecycle", term: "IT service lifecycle",
      aka: ["lifecycle", "life cycle", "it service life cycle", "service life cycle", "stages of lifecycle"],
      short: "A method for finding out what an organisation needs from IT, designing a solution, then keeping it under review and improving it.",
      more: [
        "Stage 1, service identification: work out the needs, write an outline IT service strategy and an outline IT service catalogue.",
        "Stage 2, service delivery design: say what technical requirements are needed and plan the solution.",
        "Stage 3, service management: keep reviewing. Weigh benefits and drawbacks, compare alternatives, look at the impact of putting the solution in, and judge how well it is working.",
        "It is a loop, not a straight line. Review leads back to new needs."
      ],
      example: "Part B follows the lifecycle: Activities 1 and 2 are identification, Activity 3 is design, Activities 4 and 5 are management.",
      spec: "A1", related: ["service-identification", "service-delivery-design", "service-management", "itil", "task-structure"], visual: "lifecycle"
    },
    {
      id: "service-identification", topic: "lifecycle", term: "Service identification",
      aka: ["identify services", "identification stage", "stage 1"],
      short: "The first stage of the lifecycle. You find out what the organisation needs, put the needs in order of importance and list the services that would meet them.",
      more: [
        "Produces an outline IT service strategy (needs and priorities).",
        "Produces an outline IT service catalogue (the list of services).",
        "Starts from the organisation and its customers, not from the technology."
      ],
      example: "Quay Cycles: \"One stock list every shop can see\" is identified as a high priority need because shops sell bikes that are not there.",
      spec: "A1, A3", related: ["it-service-strategy", "it-service-catalogue", "service-lifecycle"]
    },
    {
      id: "service-delivery-design", topic: "lifecycle", term: "Service delivery design",
      aka: ["design stage", "stage 2", "technical requirements"],
      short: "The second stage of the lifecycle. You decide the technical requirements and plan the solution that will meet the needs you found.",
      more: [
        "Covers information, data, hardware and software options, and how infrastructure and users will be managed.",
        "In the task this is Activity 3, the biggest activity at 20 marks.",
        "Every choice should link back to a need or a fact in the brief."
      ],
      example: "Choosing a cloud stock and till system because the only technician works two days a week.",
      spec: "A1, B3", related: ["solution-coverage", "service-lifecycle"]
    },
    {
      id: "service-management", topic: "lifecycle", term: "Service management (the review stage)",
      aka: ["management stage", "stage 3", "review and refine", "continual review"],
      short: "The third stage of the lifecycle. You keep reviewing the solution: weigh benefits and drawbacks, compare alternatives, check the impact and judge if it is working.",
      more: [
        "Analyse the benefits and drawbacks of the solution for the organisation.",
        "Analyse alternative solutions and justify what you suggest.",
        "Analyse the impact of putting the solution in and running it day to day.",
        "Judge how likely the solution is to succeed and justify improvements."
      ],
      example: "Activity 4 (evaluate against alternatives) and Activity 5 (implications) both sit in this stage.",
      spec: "A1", related: ["evaluate-solution", "implications", "service-lifecycle"]
    },
    {
      id: "itil", topic: "lifecycle", term: "ITIL",
      aka: ["itil 4", "information technology infrastructure library", "best practice", "framework"],
      short: "A set of good practice guidance for running IT services. It started as the Information Technology Infrastructure Library. The current version is ITIL 4.",
      more: [
        "ITIL is advice, not a law. Organisations pick the parts that suit them.",
        "ITIL 4 centres on the service value system, with the service value chain at its heart.",
        "It helps organisations keep services reliable, controlled and always improving."
      ],
      example: "A college service desk that logs every fault and checks it was fixed is using ITIL ideas.",
      spec: "A1", related: ["value-chain", "four-dimensions", "itsm"]
    },
    {
      id: "value-chain", topic: "lifecycle", term: "ITIL service value chain",
      aka: ["service value chain", "six activities", "plan improve engage", "design and transition", "obtain build", "deliver and support", "svc"],
      short: "Six linked activities that turn demand into value: Plan, Improve, Engage, Design and transition, Obtain or build, Deliver and support.",
      more: [
        "Plan: agree the direction and the plans for products and services.",
        "Improve: keep making products, services and practices better.",
        "Engage: understand what stakeholders need and keep good relationships.",
        "Design and transition: make sure products and services meet expectations on quality, cost and time to market.",
        "Obtain or build: make sure the parts of a service are available when and where needed.",
        "Deliver and support: run the service and help the people using it."
      ],
      example: "A new customer request arrives (demand). Engage records it, Design and transition plans it, Obtain or build gets the parts, Deliver and support runs it, Improve learns from it.",
      spec: "A1", related: ["itil", "four-dimensions", "continual-improvement"], visual: "valuechain"
    },
    {
      id: "four-dimensions", topic: "lifecycle", term: "Four dimensions of service management",
      aka: ["4 dimensions", "dimensions", "organisations and people", "partners and suppliers", "value streams", "information and technology"],
      short: "ITIL 4 says every service should be looked at from four sides: organisations and people, information and technology, partners and suppliers, value streams and processes.",
      more: [
        "Organisations and people: policies, roles, culture and skills.",
        "Information and technology: what information is handled, how, and with what technology.",
        "Partners and suppliers: other organisations involved in supplying, delivering or using the service.",
        "Value streams and processes: the steps that turn a need into something useful."
      ],
      example: "A new till system affects staff skills (people), data (information), the software supplier (partners) and the sale process (value stream).",
      spec: "A1", related: ["itil", "value-chain", "itsm"]
    },
    {
      id: "itsm", topic: "lifecycle", term: "IT service management (ITSM)",
      aka: ["itsm", "service management", "it service management"],
      short: "All the activities and processes that keep an IT service running well through its whole life, from planning to fixing faults to retiring it.",
      more: [
        "Includes change, incident, problem, asset and knowledge management.",
        "Aims to give the organisation value, not just working computers.",
        "Done by people with clear roles, not by technology alone."
      ],
      example: "Logging a broken till, fixing it, then finding out why tills keep breaking is ITSM at work.",
      spec: "A1, D3", related: ["itsm-processes", "incident-management", "problem-management", "change-management"]
    },
    {
      id: "itsm-processes", topic: "lifecycle", term: "ITSM processes at a glance",
      aka: ["processes", "itsm processes", "list of processes", "practices", "release management", "deployment management", "knowledge management", "continuity"],
      short: "A process is a set of steps done the same way each time. ITIL 4 calls many of them practices. These are the ones to know.",
      more: [
        "Incident management: restore normal service quickly after something breaks.",
        "Problem management: find and fix the root cause of repeat incidents.",
        "Change management: control changes so they do not cause new faults.",
        "Asset management: keep track of hardware and software.",
        "Knowledge management: keep help and how to guides in one place.",
        "Service desk: first point of contact for people who need help.",
        "Release and deployment management: roll out new software or hardware safely.",
        "Continuity and disaster recovery: keep working, or recover fast, after a major failure.",
        "Risk management: spot and reduce threats before they happen."
      ],
      example: "Quay Cycles needs asset management for its tablet tills and incident management for the days Dan is not in.",
      spec: "A1, D3", related: ["incident-management", "problem-management", "change-management", "asset-management"]
    },
    {
      id: "incident-management", topic: "lifecycle", term: "Incident management",
      aka: ["incident", "what is an incident", "restore service"],
      short: "Getting a service working again as quickly as possible after something goes wrong.",
      more: [
        "An incident is an unplanned interruption or drop in quality, such as a till that will not start.",
        "Steps: log it, work out how serious it is, fix it or work around it, close it when the user agrees it is fixed.",
        "The aim is speed. Finding the cause comes later, in problem management."
      ],
      example: "The Exeter till freezes. A sales assistant phones Dan, who restarts it. That is an incident fixed.",
      spec: "A1, D3", related: ["problem-management", "service-desk-staff", "sla"]
    },
    {
      id: "problem-management", topic: "lifecycle", term: "Problem management",
      aka: ["problem", "root cause", "difference between incident and problem", "incident vs problem", "incident or problem"],
      short: "Finding and fixing the root cause behind incidents that keep coming back, so they stop happening.",
      more: [
        "A problem is the underlying cause of one or more incidents.",
        "Incident versus problem: an incident is fixed quickly so people can work. A problem is investigated so the fault does not return.",
        "A workaround keeps people working until the problem is properly fixed."
      ],
      example: "The Exeter till freezes every Monday. Restarting it is the incident fix. Finding that a nightly update runs too late is the problem fix.",
      spec: "A1, D3", related: ["incident-management", "change-management"]
    },
    {
      id: "change-management", topic: "lifecycle", term: "Change management",
      aka: ["change", "controlling change", "change control"],
      short: "Making sure changes to IT are planned, approved, tested and checked afterwards, so a change does not cause new faults.",
      more: [
        "Changes can be new software, updates, new hardware or new settings.",
        "Good change management asks: what could go wrong, who agrees, how do we undo it, did it work?",
        "Planned changes are made at quiet times to limit downtime."
      ],
      example: "Moving Quay Cycles shops to the new till system one shop at a time, on a quiet winter weekday.",
      spec: "A1, D3", related: ["implications", "updates-upgrades"]
    },
    {
      id: "sla", topic: "lifecycle", term: "Service level agreement (SLA)",
      aka: ["sla", "service level agreement", "uptime promise", "service agreement"],
      short: "A written agreement between a provider and a customer about the level of service, such as how much of the time it will be working and how fast faults are fixed.",
      more: [
        "Typical measures: availability (for example 99.9% uptime), response time, fix time.",
        "Matters when you use an outside provider, because you depend on their promises.",
        "Often says what happens if the provider misses the target, such as money back."
      ],
      example: "A cloud stock system with an SLA of 99.9% uptime can be down for about 8.8 hours a year.",
      spec: "D3", related: ["in-house-vs-external", "availability"]
    },
    {
      id: "continual-improvement", topic: "lifecycle", term: "Continual improvement",
      aka: ["continuous improvement", "improve", "keep improving"],
      short: "Never treating a solution as finished. You measure how it is doing and keep making it better.",
      more: [
        "Links the end of one lifecycle back to the start of the next.",
        "Uses feedback from users, performance numbers and incident records.",
        "In ITIL 4 it sits across the whole service value system."
      ],
      example: "Dan reads the weekly backup report and notices failures. The backup settings are changed.",
      spec: "A1", related: ["service-management", "value-chain"]
    },
    {
      id: "stakeholders", topic: "lifecycle", term: "Stakeholders",
      aka: ["stakeholder", "who is affected"],
      short: "Anyone with an interest in the organisation or its IT: customers, staff, business partners, owners or board members, and the local community.",
      more: [
        "Different stakeholders want different things. A good strategy balances them.",
        "Engaging stakeholders early finds needs that would be missed otherwise."
      ],
      example: "At Quay Cycles: Priya (owner), shop staff, customers, Sam the freelancer and the people of Truro.",
      spec: "A1", related: ["value-chain", "service-requirement"]
    },
    {
      id: "guiding-principles", topic: "lifecycle", term: "ITIL 4 guiding principles (extra)",
      aka: ["guiding principles", "focus on value", "start where you are", "keep it simple"],
      short: "Seven pieces of advice that ITIL 4 gives for any decision: focus on value, start where you are, progress iteratively with feedback, collaborate and promote visibility, think and work holistically, keep it simple and practical, optimise and automate.",
      more: [
        "Extra reading. The specification does not list these by name.",
        "Useful for justifying choices, for example \"keep it simple\" supports choosing one system instead of three."
      ],
      example: "Choosing one booking system for repairs and hire follows \"keep it simple and practical\".",
      spec: "Extra", related: ["itil", "value-chain"]
    }
  );

  /* ---------- Project methodologies ---------- */
  kb.push(
    {
      id: "methodologies", topic: "methods", term: "Project methodology",
      aka: ["methodology", "project management methods", "methodologies", "project method"],
      short: "A tried and tested set of rules and steps for running a project so it finishes on time, on budget and does what was wanted.",
      more: [
        "The spec names five: PRINCE2, Agile, RAD, Lean and Waterfall.",
        "The IT service lifecycle can be used inside any of them.",
        "There is no best one. The right choice depends on size, how clear the needs are and how much change is expected."
      ],
      example: "A fixed, regulated project with clear needs may suit Waterfall. A website where the owner keeps changing their mind may suit Agile.",
      spec: "A1", related: ["waterfall", "agile", "prince2", "rad", "lean", "choosing-methodology"]
    },
    {
      id: "waterfall", topic: "methods", term: "Waterfall",
      aka: ["waterfall method", "linear"],
      short: "A step by step method where each stage is finished before the next starts: requirements, design, build, test, release, maintain.",
      more: [
        "Good for: projects where the needs are clear and unlikely to change.",
        "Benefits: simple to plan and manage, clear milestones, good records.",
        "Drawbacks: hard to go back, problems found late (testing is near the end), users see nothing until the end."
      ],
      example: "Installing cabling and switches in a new building, where the floor plan is fixed.",
      spec: "A1", related: ["agile", "methodologies", "choosing-methodology"]
    },
    {
      id: "agile", topic: "methods", term: "Agile",
      aka: ["scrum", "sprint", "kanban", "iterative", "agile method"],
      short: "A method that builds a product in short cycles, often called sprints, and gets feedback from users after each one.",
      more: [
        "Good for: projects where the needs are unclear or will change.",
        "Benefits: users see progress early, changes are welcome, problems are found sooner.",
        "Drawbacks: harder to predict final cost and date, needs users who give feedback often, can drift if the goal is not controlled.",
        "Scrum is a common way of doing Agile with fixed length sprints."
      ],
      example: "Building the online repair booking page in two week sprints, with mechanics testing each version.",
      spec: "A1", related: ["waterfall", "rad", "lean", "choosing-methodology"]
    },
    {
      id: "prince2", topic: "methods", term: "PRINCE2",
      aka: ["prince 2", "projects in controlled environments", "prince"],
      short: "A formal, process based method (PRojects IN Controlled Environments) with set stages, clear roles and a business case that is checked throughout.",
      more: [
        "Good for: large projects with many people and a lot of money, often in government or big companies.",
        "Benefits: strong control, clear roles, regular checks that the project is still worth doing.",
        "Drawbacks: lots of paperwork, can feel heavy for a small project, less quick to change direction."
      ],
      example: "A county council replacing the IT in 30 offices.",
      spec: "A1", related: ["waterfall", "agile", "methodologies"]
    },
    {
      id: "rad", topic: "methods", term: "Rapid Application Development (RAD)",
      aka: ["rad", "rapid application development", "prototype", "prototyping"],
      short: "A method that builds working prototypes quickly, shows them to users, and improves them, with less time spent on detailed up front planning.",
      more: [
        "Good for: small to medium systems that need to be ready fast and where users can give quick feedback.",
        "Benefits: fast delivery, users shape the result, less risk of building the wrong thing.",
        "Drawbacks: needs skilled developers and committed users, not suited to very large or safety critical systems, can be weak on documentation."
      ],
      example: "A prototype appointment screen for a salon, tried by staff on day one and changed the next day.",
      spec: "A1", related: ["agile", "methodologies"]
    },
    {
      id: "lean", topic: "methods", term: "Lean",
      aka: ["lean method", "lean management", "waste", "kaizen", "toyota"],
      short: "A method that cuts waste and focuses only on what gives value to the customer, using small steps and constant improvement.",
      more: [
        "Comes from car manufacturing (Toyota) and was adapted for software and services.",
        "Benefits: less waste, lower cost, quicker delivery, constant learning.",
        "Drawbacks: needs a team culture of improvement, can cut spare capacity too far, harder when the goal is vague."
      ],
      example: "Removing a repeated double entry step in a booking process because it adds no value.",
      spec: "A1", related: ["agile", "methodologies"]
    },
    {
      id: "choosing-methodology", topic: "methods", term: "Choosing a methodology",
      aka: ["which methodology", "pick a methodology", "which method should i use", "appropriate methodology"],
      short: "Match the method to the project. Ask: how big is it, how clear are the needs, how likely is change, and how much control does the organisation need?",
      more: [
        "Clear needs and little change: Waterfall.",
        "Large, formal, many stakeholders: PRINCE2.",
        "Needs will change or are not clear: Agile or RAD.",
        "Focus on cutting waste and cost: Lean.",
        "Always give a reason from the scenario, not just a method name."
      ],
      example: "Quay Cycles shop by shop rollout: planned stages suit Waterfall, but the online booking pages suit Agile because Priya will want to change them.",
      spec: "A1", related: ["waterfall", "agile", "prince2", "rad", "lean"]
    }
  );

  /* ---------- Strategy, catalogue and requirements ---------- */
  kb.push(
    {
      id: "it-service-strategy", topic: "strategy", term: "IT service strategy",
      aka: ["strategy", "service strategy", "outline strategy", "it strategy", "activity 1"],
      short: "A formal document that lists the IT services an organisation needs and puts them in order of importance, with reasons.",
      more: [
        "Can include: purpose of IT in the business, budget, current and future projects, infrastructure and staff, strengths and limits.",
        "Priority is based on things like sales income or how critical the process is.",
        "In Activity 1 you list requirements, give each a high, medium or low priority, and explain every priority with a fact from the brief."
      ],
      example: "\"Website that stays up in the June sale: HIGH, because it went down for 3 hours last June and June brings ten times the visitors.\"",
      spec: "A1, A3", related: ["service-requirement", "prioritising", "it-service-catalogue", "activity-1"]
    },
    {
      id: "it-service-catalogue", topic: "strategy", term: "IT service catalogue",
      aka: ["catalogue", "catalog", "service catalogue", "activity 2", "service name", "service description"],
      short: "A document where every IT service of an organisation is listed and its requirements are described.",
      more: [
        "Each row has a service name and a service description.",
        "The description says what needs to be achieved, who needs the information or data, and roughly what technology is needed.",
        "Write it so a non IT person could understand it.",
        "In Activity 2 you cover every function in the template, now and in the future."
      ],
      example: "Mechanics: \"Repair job diary. Current. A shared digital diary for every workshop showing customer, bike, problem and status. It replaces the paper diary and stops double bookings.\"",
      spec: "A1, B1", related: ["it-service-strategy", "service-requirement", "activity-2"]
    },
    {
      id: "service-requirement", topic: "strategy", term: "Service requirement",
      aka: ["requirement", "requirements", "need", "what is a requirement", "needs of the organisation"],
      short: "What the organisation needs the IT to do. It is a need, not a product.",
      more: [
        "Good: \"One stock list that all five shops can see\".",
        "Weak: \"Buy stock software\". That jumps to a product before the need is clear.",
        "Find needs by looking at the organisation, its aims, its customers, its staff and its locations."
      ],
      example: "Customer need: \"See true stock before travelling to a shop\". Organisation need: \"Stop selling bikes that are not there\".",
      spec: "A3", related: ["it-service-strategy", "requirements-sources", "prioritising"]
    },
    {
      id: "prioritising", topic: "strategy", term: "Prioritising requirements",
      aka: ["priority", "priorities", "prioritise", "prioritize", "high medium low", "order of importance"],
      short: "Putting requirements in order of importance and giving a reason for each. Not everything can be high.",
      more: [
        "Ask: what loses money or customers if it fails? What is the law? What has a deadline? What can the staff actually look after?",
        "Use facts from the brief as your reasons: dates, numbers, named people.",
        "A low priority with a good reason shows judgement. Marking everything high shows none.",
        "Check priorities for both the organisation and its customers."
      ],
      example: "\"Staff rota on the same system: LOW. Nothing in the brief says the rota is a problem and managers already do it.\"",
      spec: "A1", related: ["it-service-strategy", "service-requirement", "activity-1"]
    },
    {
      id: "organisational-vs-customer-needs", topic: "strategy", term: "Organisational needs versus customer needs",
      aka: ["customer needs", "organisation needs", "business needs", "client needs", "customer experience"],
      short: "Organisational needs are what the business needs to run well. Customer needs are what the people buying from it want. They overlap but are not the same.",
      more: [
        "Organisation: stop selling stock that is not there. Customer: see true stock before travelling.",
        "Do not just repeat the same point twice with different words.",
        "Customers means any outside user of the product or service, clients and consumers included."
      ],
      example: "Organisation: backup kept away from the Exeter office. Customer: personal details kept safe.",
      spec: "A3", related: ["service-requirement", "prioritising"]
    }
  );
})();
