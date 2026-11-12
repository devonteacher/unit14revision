/* Practice tasks, scenarios and the sorter game.
   Each task has:
     points: what a strong answer covers. "terms" are lowercase words or phrases; finding any one counts as a hit.
     checklist: questions the learner marks themselves against.
     model: a model answer written for revision (own wording, not taken from any exam board paper). */
(function () {
  U14.scenarios = U14.scenarios || {};

  U14.scenarios.quay = {
    name: "Quay Cycles",
    note: "From the Quay Cycles practice set task. Quay Cycles is not a real organisation.",
    summary: [
      "A family business in Devon with four shops (Exeter, Plymouth, Totnes, Barnstaple). A fifth shop in Truro opens next May.",
      "Sells and repairs bikes and electric bikes. Hires bikes to tourists in summer, mostly from Exeter and Barnstaple.",
      "38 staff: owner, 4 shop managers, 16 sales staff, 13 mechanics, 1 hire coordinator, 2 office and accounts, 1 IT technician.",
      "Each shop has its own stock spreadsheet, so shops show different stock. Staff sell bikes that are not there.",
      "The website was built by Sam, a freelancer paid by the day, on cheap hosting. It was down for 3 hours in last June's sale. The June sale brings about 10 times the usual visitors.",
      "Repair bookings are by phone and a paper diary. Hire is by phone or email with a whiteboard in each shop. Double bookings happen. Deposits are written on paper.",
      "Customer details are on one server in the Exeter back office. It is 9 years old, has failed twice, and the backup is a USB stick kept in the same room.",
      "Staff share free personal email accounts, with no control over who sees what.",
      "All till and office PCs are old. Mechanics have no computer. Managers and sales staff share the till PC.",
      "Dan is the only IT technician and works two days a week. He cannot look after lots of new equipment.",
      "Priya has a set up budget of £30,000, then no more than £2,000 a month. She wants bills that stay the same each month.",
      "Future aims: one stock list every shop can see, online repair booking and online hire booking, a Truro shop, and customer details kept safe and within the law."
    ],
    facts: ["Quay Cycles", "Exeter", "Plymouth", "Totnes", "Barnstaple", "Truro", "Dan", "Sam", "Priya", "38 staff", "four shops", "fifth shop", "9 years old", "nine year old", "USB stick", "£30,000", "£2,000", "June sale", "3 hours", "two days a week", "mechanics", "spreadsheet", "paper diary", "whiteboard", "tourists", "electric bike", "ten times", "10 times", "till PC", "freelancer", "hire", "repair", "stock"]
  };

  U14.scenarios.jaten = {
    name: "Jaten Training & Recruitment Agency",
    note: "From the published additional sample Part A and Part B material. Jaten is not a real agency.",
    summary: [
      "Based in Manchester. Works with football clubs in the north of England that have teams in local junior and senior leagues.",
      "Supplies qualified administrators, coaches and physiotherapists to the clubs. Also provides courses in administration and football coaching for club staff.",
      "13 staff at Head Office, on the 5th floor of a shared building in Manchester. More training staff are based at the local football training centre in Wythenshawe, where the courses run.",
      "Future developments to investigate: e-learning facilities and online booking systems."
    ],
    facts: ["Jaten", "Manchester", "Wythenshawe", "football", "clubs", "13 staff", "Head Office", "5th floor", "coaches", "administrators", "physiotherapists", "courses", "e-learning", "online booking", "training centre", "recruitment"]
  };

  var P = U14.practice;

  /* ---------------- THEORY TASKS ---------------- */
  P.push(
    {
      id: "t-lifecycle", mode: "theory", topic: "lifecycle", title: "The IT service lifecycle", marks: 6, command: "Explain",
      prompt: "Explain the three stages of the IT service lifecycle and how they link together.",
      points: [
        { label: "Names service identification (finding the needs)", terms: ["identification", "identify", "needs"] },
        { label: "Names service delivery design (planning the technical solution)", terms: ["delivery design", "design"] },
        { label: "Names service management (reviewing, weighing up, improving)", terms: ["management", "review", "manage"] },
        { label: "Says what each stage produces or does (strategy, catalogue, requirements, evaluation)", terms: ["strategy", "catalogue", "requirement", "evaluate", "evaluation", "alternative"] },
        { label: "Shows it is a loop, with review leading to new needs", terms: ["loop", "cycle", "again", "back to", "new needs", "continual", "improve"] },
        { label: "Gives a reason or example", terms: ["because", "for example", "for instance", "such as", "so that"] }
      ],
      checklist: [
        "I named all three stages in the right order.",
        "I said what happens in each one, not just its name.",
        "I showed how the stages link and that it repeats.",
        "I used at least one example or reason."
      ],
      model: [
        "The lifecycle has three stages. In service identification the organisation works out what it needs from IT, puts those needs in priority order and lists the services that would meet them. This gives an outline IT service strategy and an outline IT service catalogue.",
        "In service delivery design the technical requirements are decided and the solution is planned. This covers the information and data needed, the hardware and software options, and how the infrastructure and users will be managed.",
        "In service management the solution is reviewed. The benefits and drawbacks are weighed, alternatives are compared, the impact of putting it in is considered and its success is judged.",
        "The stages link because the review in the last stage shows new needs or problems, which sends the organisation back to the start. For example, a new shop would trigger a new round of identification."
      ],
      tip: "A six mark question needs a point, a reason and a link for each stage, not three one line definitions."
    },
    {
      id: "t-incident-problem", mode: "theory", topic: "lifecycle", title: "Incident or problem?", marks: 4, command: "Explain",
      prompt: "Explain the difference between incident management and problem management. Use an example.",
      points: [
        { label: "Incident: unplanned interruption, restore service quickly", terms: ["incident", "restore", "quickly", "interruption"] },
        { label: "Problem: underlying or root cause", terms: ["root cause", "underlying", "cause"] },
        { label: "Says problems are the cause of repeated or several incidents", terms: ["repeat", "keeps", "again", "several", "recurring", "happen again"] },
        { label: "Gives a worked example", terms: ["for example", "for instance", "such as", "e.g"] }
      ],
      checklist: [
        "I explained the aim of incident management (speed).",
        "I explained the aim of problem management (stop it returning).",
        "My example shows both, not just one."
      ],
      model: [
        "Incident management is about getting a service working again as quickly as possible after something unplanned stops or slows it. Problem management looks for the root cause of one or more incidents so that the fault does not come back.",
        "For example, if a till will not start, the technician restarts it or swaps it so the shop can keep trading. That is the incident. If the same till fails every week, problem management investigates and finds that a power supply is faulty, then replaces it for good."
      ],
      tip: "Always use a pair: quick fix, then root cause."
    },
    {
      id: "t-methods", mode: "theory", topic: "methods", title: "Waterfall and Agile", marks: 6, command: "Compare",
      prompt: "Compare the Waterfall and Agile methodologies and say when each one would be suitable.",
      points: [
        { label: "Describes Waterfall as stage by stage, in order", terms: ["waterfall", "in order", "one stage", "each stage", "sequence", "linear"] },
        { label: "Describes Agile as short cycles or sprints with feedback", terms: ["agile", "sprint", "iteration", "iterative", "feedback", "short cycle"] },
        { label: "Gives a benefit and a drawback of Waterfall", terms: ["late", "hard to go back", "changes", "clear milestones", "simple to plan", "documentation"] },
        { label: "Gives a benefit and a drawback of Agile", terms: ["early", "change", "flexible", "cost", "date", "unpredictable", "users involved"] },
        { label: "Says when each suits (clear needs or changing needs)", terms: ["clear", "unclear", "likely to change", "fixed", "suitable", "suits", "best for"] },
        { label: "Compares directly (uses words such as whereas, but, however, in contrast)", terms: ["whereas", "but", "however", "in contrast", "while", "compared"] }
      ],
      checklist: [
        "I compared them directly rather than describing them separately.",
        "I gave a benefit and a drawback of each.",
        "I said when each one suits, with a reason.",
        "I used the words Waterfall and Agile correctly."
      ],
      model: [
        "Waterfall completes each stage before the next one starts: requirements, design, build, test and release. Agile builds the product in short cycles and asks users for feedback after each one.",
        "Waterfall is easy to plan and manage and has clear milestones and good records. However, problems are often found late and it is hard to go back. Agile lets users see progress early and welcomes changes, but it is harder to predict the final cost and date and needs users who give feedback often.",
        "Waterfall suits a project with clear needs that are unlikely to change, such as installing a fixed network in a new building. Agile suits a project where the needs are not clear or will change, such as designing an online booking site that the owner will keep adjusting."
      ],
      tip: "Compare means both sides in the same sentences. Use whereas and however."
    },
    {
      id: "t-factors-req", mode: "theory", topic: "context", title: "Factors before identifying requirements", marks: 6, command: "Explain",
      prompt: "Explain factors that an organisation needs to consider before identifying its IT service requirements.",
      points: [
        { label: "Names at least two contextual factors (user needs, demand, scalability, ethics, law, security, new technology, standard ways of working)", terms: ["scalab", "demand", "legislation", "law", "ethic", "security", "new technology", "emerging", "standard", "user needs", "customer needs", "moral"] },
        { label: "Explains what each factor means in practice", terms: ["means", "this is", "which is", "so that", "meaning", "because", "matters", "is when", "needs to", "must"] },
        { label: "Explains the effect on the requirements or the solution", terms: ["affect", "impact", "result", "mean that", "lead to", "therefore", "so the", "requirements", "become", "rebuilt", "so security"] },
        { label: "Uses a worked example from a real or imagined organisation", terms: ["for example", "for instance", "such as", "e.g", "a shop", "a school", "a college", "a charity"] },
        { label: "Covers at least three different factors", terms: ["scalab", "demand", "legislation", "law", "ethic", "security", "new technology", "emerging", "standard", "user needs", "customer needs", "moral"], min: 3 },
        { label: "Shows what could go wrong if the factor is ignored", terms: ["if not", "otherwise", "could lead", "risk", "fine", "breach", "unable", "fail", "ignore"] }
      ],
      checklist: [
        "I named at least three different factors.",
        "I explained each, not just listed it.",
        "I said how each changes what the organisation needs.",
        "I included an example and a consequence of ignoring a factor."
      ],
      model: [
        "Before requirements are identified the organisation should look at the factors around it. Scalability matters because a system that cannot grow will have to be rebuilt when the organisation expands. A shop planning a second site, for example, needs systems that can add users without a new design.",
        "Legislation matters because the organisation must follow laws such as the Data Protection Act 2018 and UK GDPR. If customer data is not protected, the organisation could face a fine and lose customer trust, so security and access controls become requirements.",
        "Changes in demand matter because needs go up and down. A bike shop with a summer sale needs a website that copes with ten times the usual visitors, so requirements must include extra capacity at peak times.",
        "Ethical issues, such as monitoring staff and respecting privacy, shape policies and the tools chosen. Finally, new technology and standard ways of working can change what is possible and what customers expect."
      ],
      tip: "Name the factor, explain it, show its effect on requirements, give an example. Repeat three times."
    },
    {
      id: "t-law", mode: "theory", topic: "context", title: "Laws that affect IT", marks: 6, command: "Explain",
      prompt: "Explain how two laws affect the way an organisation manages its IT systems.",
      points: [
        { label: "Names a relevant law correctly", terms: ["data protection", "gdpr", "computer misuse", "copyright", "health and safety", "dse", "weee", "communications act", "ripa", "regulation of investigatory"] },
        { label: "Gives what the first law requires or forbids", terms: ["must", "require", "forbid", "illegal", "offence", "crime", "ensure"] },
        { label: "Names a second, different law", terms: ["data protection", "gdpr", "computer misuse", "copyright", "health and safety", "dse", "weee", "communications act", "ripa"], min: 2 },
        { label: "Says what the organisation must do in practice (policy, access levels, licences, training)", terms: ["policy", "access", "licence", "license", "train", "password", "backup", "encrypt", "record", "register"] },
        { label: "Says what could happen if the law is broken", terms: ["fine", "prosecut", "penalt", "court", "reputation", "lose trust", "legal action"] },
        { label: "Links to an organisation or example", terms: ["for example", "for instance", "such as", "a shop", "a school", "a company", "the organisation", "an organisation", "customer", "staff"] }
      ],
      checklist: [
        "I used the correct names of both laws.",
        "I said what each one means for IT, not just what it is.",
        "I gave a practical action and a consequence.",
        "I gave an example."
      ],
      model: [
        "The Data Protection Act 2018 and UK GDPR say personal data must be used lawfully and fairly, kept accurate and kept secure. An organisation must therefore limit who can see customer records, use strong passwords and encryption, and report a serious breach to the ICO within 72 hours. Fines can be up to £17.5 million or 4% of worldwide turnover, so a poor backup kept on a USB stick in the same room as the server would be a serious risk.",
        "The Computer Misuse Act 1990 makes it a crime to access a system without permission or to damage or disrupt it. An organisation protects itself and its staff by giving people only the access they need, removing leavers' accounts and training staff not to share logins. Someone who breaks the law can be prosecuted."
      ],
      tip: "Law name, what it says, what you must do, what happens if you do not."
    },
    {
      id: "t-cloud", mode: "theory", topic: "software", title: "SaaS, PaaS or IaaS", marks: 6, command: "Compare",
      prompt: "A small organisation with one part time technician wants to move to the cloud. Compare SaaS, PaaS and IaaS and recommend one.",
      points: [
        { label: "Defines SaaS correctly (ready to use software run by a provider)", terms: ["software as a service", "saas"] },
        { label: "Defines PaaS correctly (platform to build and run your own app)", terms: ["platform as a service", "paas", "platform"] },
        { label: "Defines IaaS correctly (virtual servers, storage and network that you manage)", terms: ["infrastructure as a service", "iaas", "virtual server", "infrastructure"] },
        { label: "Says who manages what (provider versus customer)", terms: ["provider", "customer", "manage", "responsib", "look after", "maintain"] },
        { label: "Recommends one and links to the one part time technician", terms: ["technician", "part time", "small", "limited", "skills", "recommend", "suitable"] },
        { label: "Gives a drawback of the choice", terms: ["drawback", "however", "but", "less control", "internet", "price", "cost", "dependent", "rely"] }
      ],
      checklist: [
        "I explained all three correctly.",
        "I said who looks after what in each one.",
        "I made a clear recommendation and tied it to the scenario.",
        "I gave a drawback of my choice."
      ],
      model: [
        "SaaS is ready to use software run by a provider. The customer logs in and uses it, and the provider looks after the servers, updates and security of the software. PaaS gives a platform such as an operating system and database so the customer can build and run its own application. IaaS rents virtual servers, storage and networking, and the customer installs and looks after the operating system, software and security.",
        "For an organisation with one part time technician I would recommend SaaS, because the provider handles most of the maintenance. IaaS needs the most skill and PaaS needs someone who can build and look after an application.",
        "The drawbacks of SaaS are less control, a need for good internet and the risk that prices rise or the provider changes the service, so a backup connection and a clear contract are needed."
      ],
      tip: "Always finish with a recommendation and a reason from the scenario."
    },
    {
      id: "t-security", mode: "theory", topic: "manage", title: "Protecting data and systems", marks: 6, command: "Explain",
      prompt: "Explain physical and technical measures an organisation can use to protect its data and systems.",
      points: [
        { label: "Names at least one physical measure", terms: ["lock", "cctv", "alarm", "cabinet", "visitor", "door", "badge", "cable lock", "secure room"] },
        { label: "Names at least one technical measure", terms: ["password", "firewall", "encrypt", "anti malware", "antivirus", "multi factor", "authentication", "access level", "permission", "update", "patch"] },
        { label: "Explains how a measure protects something", terms: ["prevent", "stop", "protect", "so that", "which means", "this means", "ensures", "blocks"] },
        { label: "Covers confidentiality, integrity or availability", terms: ["confidential", "integrity", "availab", "private", "accurate"] },
        { label: "Mentions people or policy (training, acceptable use policy)", terms: ["train", "policy", "aup", "acceptable use", "awareness", "phishing"] },
        { label: "Gives an example for an organisation", terms: ["for example", "for instance", "such as", "a shop", "the organisation", "an organisation", "staff", "server"] }
      ],
      checklist: [
        "I covered both physical and technical measures.",
        "I explained how each protects data, not just named it.",
        "I mentioned people and policies as part of security.",
        "I used an example."
      ],
      model: [
        "Physical measures protect equipment and places. A locked comms cabinet and a locked server room stop unauthorised people reaching the server, and CCTV and a visitor book record who goes in. Cable locks and positioning screens away from windows reduce theft and prying eyes.",
        "Technical measures protect data and systems. Individual passwords with multi factor authentication stop a stolen password being enough. Access levels give each person only what their job needs, which protects confidentiality. Firewalls block unwanted traffic, anti malware software stops harmful programs, encryption makes stolen data unreadable, and updates fix security holes.",
        "People matter too. Training helps staff spot phishing, and an acceptable use policy sets out what staff may do. Backups protect availability and integrity if data is lost or damaged."
      ],
      tip: "A good answer has three sections: physical, technical, people."
    },
    {
      id: "t-data-info", mode: "theory", topic: "data", title: "Data, information and levels", marks: 6, command: "Explain",
      prompt: "Explain the difference between data and information, and describe how information is used at strategic, management and operational levels.",
      points: [
        { label: "Data is raw facts and figures", terms: ["raw", "facts", "figures", "unprocessed", "no meaning"] },
        { label: "Information is processed data with meaning or context", terms: ["processed", "meaning", "context", "useful", "turned into"] },
        { label: "Gives an example showing the difference", terms: ["for example", "for instance", "such as", "e.g", "37", "sales"] },
        { label: "Strategic: long term, senior leaders", terms: ["strategic", "long term", "senior", "directors", "owner"] },
        { label: "Management: shorter term, running functions", terms: ["management", "managers", "weekly", "monthly", "rota", "stock levels"] },
        { label: "Operational: day to day work", terms: ["operational", "day to day", "daily", "today", "front line", "staff doing"] }
      ],
      checklist: [
        "I defined both terms and gave an example.",
        "I covered all three levels, one by one.",
        "I gave a different example for each level."
      ],
      model: [
        "Data is raw facts and figures with no meaning on their own, such as a list of till scans. Information is data that has been processed and put in context so it means something, such as a monthly report showing which bikes sold best at each shop.",
        "Strategic information supports long term decisions across the whole organisation, for example yearly sales by shop to decide whether to open a new shop. Management information supports shorter term decisions about running a function, such as weekly stock levels and staff rotas. Operational information supports day to day work, such as today's repair job list or till sales."
      ],
      tip: "Give each level its own example."
    },
    {
      id: "t-network", mode: "theory", topic: "hardware", title: "Switch, router and firewall", marks: 6, command: "Explain",
      prompt: "Explain the purpose of a switch, a router and a firewall in a business network.",
      points: [
        { label: "Switch: connects devices inside one network", terms: ["switch", "connects devices", "local network", "lan", "inside"] },
        { label: "Router: joins networks, e.g. to the internet", terms: ["router", "internet", "joins", "between networks", "gateway"] },
        { label: "Firewall: filters traffic using rules", terms: ["firewall", "rules", "block", "filter", "traffic"] },
        { label: "Explains why a business needs each", terms: ["because", "so that", "this means", "so staff", "which means", "allows", "protects", "protect", "links the", "only to the device"] },
        { label: "Shows how they work together", terms: ["together", "connected to", "plugged", "then", "behind", "between"] },
        { label: "Mentions a backup route or security impact", terms: ["backup", "4g", "redundan", "security", "protect"] }
      ],
      checklist: [
        "I explained each one separately and correctly.",
        "I did not confuse a switch with a router.",
        "I showed how they fit together."
      ],
      model: [
        "A switch connects the devices inside one network, such as the tills, office PCs and printers in a shop, and sends data only to the device it is meant for. A router joins different networks together, so it links the shop network to the internet. A firewall checks traffic against rules and blocks anything that is not allowed, which protects the network from outside threats.",
        "They work together: devices plug into the switch, the switch connects to the router, and the firewall, often built into the router, sits between the shop and the internet. A second router using 4G can give a backup route if the main broadband fails."
      ],
      tip: "Switch inside, router out, firewall filters."
    },
    {
      id: "t-backup", mode: "theory", topic: "manage", title: "Backup and recovery", marks: 6, command: "Discuss",
      prompt: "Discuss how an organisation should plan backups and disaster recovery.",
      points: [
        { label: "Says what a backup is and what disaster recovery is", terms: ["copy", "restore", "disaster recovery", "recover"] },
        { label: "Mentions copies in more than one place, including off site", terms: ["off site", "offsite", "another location", "3-2-1", "321", "cloud", "separate"] },
        { label: "Mentions how often and what to back up", terms: ["nightly", "daily", "weekly", "how often", "schedule", "frequency", "automatic"] },
        { label: "Mentions testing restores", terms: ["test", "check it works", "restore test"] },
        { label: "Mentions who is responsible and how long recovery can take", terms: ["who", "responsible", "plan", "time", "how long", "role"] },
        { label: "Discusses cost or risk, and reaches a judgement", terms: ["cost", "risk", "however", "but", "balance", "worth", "judge", "therefore"] }
      ],
      checklist: [
        "I covered where, how often, testing and responsibility.",
        "I considered more than one side (cost and risk).",
        "I finished with a judgement."
      ],
      model: [
        "A backup is a copy of data kept separately so it can be restored. Disaster recovery is the plan for getting systems and data working again after a serious failure such as fire, theft or ransomware.",
        "A good plan follows the 3-2-1 idea: three copies, on two types of storage, with one off site, such as a cloud backup. Backups should run automatically, for example nightly, and the plan should say who checks them and who does what in a disaster. Restores must be tested, because a backup that has never been restored might not work.",
        "Better backups cost more, but the cost of losing customer records or stopping trading is usually higher. A backup kept on a USB stick in the same room as the server fails on every count. Overall the organisation should accept some extra monthly cost for off site and tested backups."
      ],
      tip: "Discuss means look at both sides, then judge."
    },
    {
      id: "t-design-factors", mode: "theory", topic: "design", title: "Design factors and their impact on data", marks: 8, command: "Discuss",
      prompt: "Discuss the factors that an organisation should consider when designing an IT solution, and the impact they have on the data and information it stores.",
      points: [
        { label: "Names at least four factors", terms: ["compatib", "corporate message", "processing cost", "productiv", "privacy", "reliab", "security", "size", "quantity", "quality", "user experience", "accessib", "user needs", "customer needs", "working practice"], min: 4 },
        { label: "Explains what each factor means", terms: ["means", "refers to", "is about", "this is", "ensures", "matters because", "because", "must be able"] },
        { label: "Says what happens to data or information if the factor is handled well", terms: ["accurate", "available", "protected", "secure", "up to date", "stored", "consistent", "backed up", "shared"] },
        { label: "Says what happens to data or information if the factor is ignored", terms: ["lost", "breach", "wrong", "out of date", "duplicate", "cannot", "unable", "corrupt", "slow", "fail"] },
        { label: "Uses at least one example in context", terms: ["for example", "for instance", "such as", "e.g", "a shop", "customer records", "stock"] },
        { label: "Reaches a judgement about which factors matter most", terms: ["most important", "matter most", "priority", "overall", "most significant", "key factor", "in conclusion", "therefore"] }
      ],
      checklist: [
        "I covered at least four factors, not only security.",
        "For each factor I said the impact on data or information, not just the factor.",
        "I included good and bad outcomes.",
        "I judged which factors matter most for the organisation."
      ],
      model: [
        "Compatibility matters because new software must be able to read the existing data. If file formats do not match, data may have to be retyped or lost. Security and privacy matter because stored data includes personal details. Weak controls could lead to a breach, a fine and loss of trust.",
        "Quality matters because wrong or out of date data leads to poor decisions. If two shops keep separate stock lists, they will show different stock and customers will be let down. Size and quantity matter because storage and network capacity must be enough, and the amount of data will grow as the organisation does.",
        "Reliability and availability matter because data that cannot be reached when needed is of no use. A backup connection and regular backups keep it available. Accessibility and user experience affect whether people can actually get the information they need.",
        "Overall, security, quality and availability matter most for an organisation that handles customer records and trades every day, because failures in these directly harm customers and the law is involved."
      ],
      tip: "Four factors, each with a good outcome and a bad outcome for the data, then a judgement."
    }
  );

  /* ---------------- QUAY CYCLES MINI TASKS ---------------- */
  P.push(
    {
      id: "q-a1", mode: "scenario", scenario: "quay", topic: "strategy", title: "Activity 1 mini: prioritise requirements", marks: 6, command: "Identify and justify",
      activity: 1,
      prompt: "Choose three IT service requirements for Quay Cycles. Give each a priority (high, medium or low) and justify each priority using facts from the brief. At least one must be about customers.",
      points: [
        { label: "Names three requirements as needs, not products", terms: ["need", "requirement", "must", "one stock list", "booking", "backup", "email", "customer"], },
        { label: "Gives a priority to each", terms: ["high", "medium", "low"], min: 2 },
        { label: "Uses scenario facts in the justification", terms: ["server", "usb", "sale", "stock", "double book", "dan", "sam", "truro", "£", "spreadsheet", "paper", "mechanics"], min: 3 },
        { label: "Mentions the customer perspective", terms: ["customer", "tourist", "book online", "night", "see stock"] },
        { label: "Uses reasoning words (because, so, therefore)", terms: ["because", "so that", "therefore", "which means", "as a result", "since"] },
        { label: "Shows judgement: not everything is high", terms: ["low", "medium", "later", "future", "next may", "after"], min: 1 }
      ],
      checklist: [
        "My requirements are needs ('one stock list') and not products ('buy software').",
        "I gave a reason for each priority and used a fact from the brief.",
        "At least one requirement is about customers.",
        "Not all three are high."
      ],
      model: [
        "1. One stock list that every shop and the website can see. Priority: high. Each shop keeps its own spreadsheet, so shops show different stock and staff sell bikes that are not there. This costs sales and upsets customers, and the Truro shop will make it worse next May.",
        "2. Safe, off site backup of customer details. Priority: high. The only backup is a USB stick kept in the same room as a nine year old server that has already failed twice. Losing the data would break data protection law and stop the business trading.",
        "3. Online repair and hire booking for customers. Priority: medium. Customers cannot book at night and the paper diary and whiteboards cause double bookings, so it improves the customer experience. It is a lower priority than stock and backup because the business can keep taking bookings by phone while the foundations are fixed, and the budget is £30,000 with only £2,000 a month afterwards."
      ],
      tip: "Reason from the brief: a fact, then 'so', then the priority."
    },
    {
      id: "q-a2", mode: "scenario", scenario: "quay", topic: "strategy", title: "Activity 2 mini: catalogue entries", marks: 6, command: "Define",
      activity: 2,
      prompt: "Write catalogue entries for two Quay Cycles functions (for example Marketing and sales, and Supply chain). For each, give the service name and describe what it must achieve, who uses it and roughly what technology is needed, now and in the future.",
      points: [
        { label: "Names two functions", terms: ["marketing", "sales", "supply chain", "stock", "customer relations", "manufactur", "delivering", "resource", "recruit", "staff", "finance", "support"], min: 2 },
        { label: "Each entry has a service name", terms: ["service:", "service name", "system", "booking", "stock", "till", "website", "email"] },
        { label: "Says who uses it", terms: ["used by", "staff", "managers", "customers", "mechanics", "sales staff", "owner", "hire coordinator", "priya"] },
        { label: "Says what it must achieve", terms: ["must", "so that", "to allow", "to show", "to let", "achieve", "enable"] },
        { label: "Mentions technology at a plain level", terms: ["cloud", "hosted", "tablet", "app", "database", "website", "server", "pc", "software"] },
        { label: "Covers now and the future", terms: ["now", "currently", "future", "truro", "next may", "grow", "fifth shop"] }
      ],
      checklist: [
        "Each entry has a name, what it must do, who uses it and what technology.",
        "I wrote it so a non IT person would understand.",
        "I covered current and future needs, such as Truro."
      ],
      model: [
        "Function: Supply chain management. Service: Shared stock control. Must achieve: one live stock list that all shops and the website can see, so sales staff stop selling bikes that are not there. Used by: shop managers, sales staff, Priya. Technology: a cloud hosted stock system with scanners at the tills. Future: add Truro as a fifth location without rebuilding.",
        "Function: Marketing and sales. Service: Online shop and booking pages. Must achieve: let customers see real stock, buy, book repairs and book hire, and cope with ten times the normal visitors during the June sale. Used by: customers, sales staff, the hire coordinator, mechanics. Technology: a hosted website that can scale, linked to the stock system. Future: add Truro products and opening times."
      ],
      tip: "Name, purpose, users, technology, now and future."
    },
    {
      id: "q-a3-data", mode: "scenario", scenario: "quay", topic: "design", title: "Activity 3 mini: data and information", marks: 8, command: "Design",
      activity: 3,
      prompt: "For Activity 3, write the information requirements and data requirements for Quay Cycles. Cover who needs what, what data is held and where, how it is protected and backed up, and how long it is kept.",
      points: [
        { label: "Information needs by role (owner, shop managers, sales, mechanics, hire, office)", terms: ["owner", "priya", "managers", "sales staff", "mechanics", "hire coordinator", "office", "accounts"], min: 3 },
        { label: "Separates information (what people need to know) from data (what is stored)", terms: ["information", "data"], min: 2 },
        { label: "Data types and where they are stored", terms: ["customer", "stock", "booking", "payment", "deposit", "cloud", "server", "database", "stored"] },
        { label: "Protection: access levels or encryption, UK GDPR", terms: ["access level", "permission", "encrypt", "gdpr", "data protection", "password", "multi factor", "least privilege", "confidential"] },
        { label: "Backup and recovery for the data", terms: ["backup", "off site", "restore", "recovery", "nightly", "cloud"] },
        { label: "Retention, quantity or growth", terms: ["how long", "retention", "keep for", "delete", "volume", "grow", "truro", "quantity"] }
      ],
      checklist: [
        "I covered information AND data, with different content for each.",
        "I linked information needs to named roles.",
        "I said how the data is protected, backed up and for how long it is kept.",
        "I linked choices to the brief (UK law, one stock list, Truro)."
      ],
      model: [
        "Information requirements: Priya needs a monthly report of sales, stock and costs for all shops. Shop managers need live stock levels, rotas and daily takings. Sales staff need stock and price at the till and customer order status. Mechanics need today's repair jobs and parts on a shared tablet because they have no computer. The hire coordinator needs bike availability and deposit records. Office staff need invoices, payroll and customer details.",
        "Data requirements: customer names, addresses and orders, stock records, repair and hire bookings, deposits and payments, and staff records. These move from the old server and spreadsheets to a UK hosted cloud system with one stock list. Access levels give each role only what it needs, personal data is encrypted, and UK GDPR rules are followed, including breach reporting within 72 hours.",
        "Data is backed up automatically each night to a second cloud location, with a restore test each quarter. Customer records are kept only as long as needed and then deleted. Data volume will grow with Truro and the online booking system, so storage must be able to scale."
      ],
      tip: "Information is what each role needs to see. Data is what is stored, where, how safe, how long."
    },
    {
      id: "q-a4", mode: "scenario", scenario: "quay", topic: "design", title: "Activity 4 mini: evaluate an option", marks: 8, command: "Evaluate",
      activity: 4,
      prompt: "Two options for customer data and stock are a replacement on premises server in Exeter, or a cloud hosted service. Evaluate both for Quay Cycles now and in the future, and recommend one.",
      points: [
        { label: "Strength of each option", terms: ["benefit", "advantage", "strength", "good", "control", "scalable", "available", "managed", "gives", "suits", "looks after", "can grow"], min: 2 },
        { label: "Weakness of each option", terms: ["drawback", "disadvantage", "weakness", "risk", "however", "but", "single point of failure", "monthly", "internet"], min: 2 },
        { label: "Uses scenario facts (Dan, two days, budget, Truro, June sale)", terms: ["dan", "two days", "£30,000", "£2,000", "truro", "june", "sam", "nine year", "server", "usb"], min: 3 },
        { label: "Covers future needs", terms: ["future", "truro", "grow", "scale", "next may", "fifth"] },
        { label: "Gives a clear recommendation with reasons", terms: ["recommend", "choose", "i would", "best option", "therefore", "overall", "most appropriate"] },
        { label: "Admits what the choice gives up", terms: ["gives up", "trade off", "less control", "cost more", "downside", "accept", "internet"] }
      ],
      checklist: [
        "I weighed strengths AND weaknesses of both options.",
        "I used scenario facts in every paragraph.",
        "I covered future needs, not just today.",
        "I ended with a justified recommendation and said what it gives up."
      ],
      model: [
        "A new on premises server keeps data in the Exeter back office and gives full control, and the up front cost may fit inside the £30,000 set up budget. However, Dan works only two days a week and cannot look after lots of equipment, the server would still be a single point of failure, and it does not help the shops share live stock unless more is built. A repeat of the nine year old server's two failures last year would stop every shop.",
        "A cloud hosted service gives one stock list for every shop and the website, the provider looks after the servers and updates, capacity can grow for the June sale and a Truro shop can be added easily, and a fixed monthly fee suits Priya's wish for bills that stay the same. The drawbacks are the monthly cost, which must stay under £2,000, a reliance on the internet and on the provider, and less control.",
        "I recommend the cloud hosted service with a 4G backup connection in each shop. It matches the staff skills, the future aims and the budget. It gives up some control and adds a monthly fee, which is worth it for the reduced risk and the ability to grow."
      ],
      tip: "Evaluate the whole system: weigh, compare, decide, and say what you give up."
    },
    {
      id: "q-a5-staff", mode: "scenario", scenario: "quay", topic: "design", title: "Activity 5 mini: implications for staff", marks: 8, command: "Analyse",
      activity: 5,
      prompt: "A new cloud stock and booking system will replace the shop spreadsheets, the paper diaries and the whiteboards. Analyse the implications of putting it in and supporting Quay Cycles staff.",
      points: [
        { label: "Identifies specific consequences, not just benefits", terms: ["because", "this means", "so", "therefore", "will need", "must", "as a result"] },
        { label: "Covers training and who needs it", terms: ["train", "mechanics", "sales staff", "managers", "hire coordinator", "session", "guide"] },
        { label: "Covers support after launch (Dan only two days, Sam by the day)", terms: ["dan", "two days", "sam", "service desk", "support", "helpdesk", "provider", "contact"] },
        { label: "Covers access and accounts (individual logins, access levels)", terms: ["login", "account", "access level", "individual", "shared", "password", "permission"] },
        { label: "Covers timing and disruption (quiet time, phased, before June)", terms: ["phased", "pilot", "quiet", "winter", "before june", "parallel", "downtime", "trial", "one shop"] },
        { label: "Covers a constraint or change (law, budget, Truro)", terms: ["gdpr", "data protection", "budget", "£", "truro", "law", "security"] }
      ],
      checklist: [
        "Every point is a consequence (what happens, what must be done), not a benefit.",
        "I covered training, support, accounts and timing.",
        "I linked to named facts: Dan, Sam, Truro, budget, mechanics with no computer.",
        "I thought about a constraint (law or money) and a change (Truro)."
      ],
      model: [
        "Because mechanics have no computer today, they will need a shared tablet in each workshop and a short hands on training session before they can use online repair booking. Sales staff and managers need training on the shared stock list, and the hire coordinator on deposits and bike availability. This takes people away from work, so sessions must fit around opening hours.",
        "Everyone will need an individual login with the right access level, replacing shared email accounts. Dan must set up and remove accounts and cannot do it all in two days a week, so the provider's help desk and training material should handle first line questions, with Sam used only for website changes.",
        "The change should be phased: pilot in one shop on a quiet winter weekday, keep the old spreadsheets read only for a month, and finish before the June sale. Customer data must be moved and protected under UK GDPR. The Truro shop can then be set up using the same standard process next May."
      ],
      tip: "Each sentence should answer: what changes, what must be done, who does it?"
    },
    {
      id: "j-parta", mode: "scenario", scenario: "jaten", topic: "exam", title: "Part A planning: research plan", marks: 6, command: "Plan",
      activity: 0,
      prompt: "Sample Part A. You have up to 3 hours to research the IT service delivery requirements of a training and recruitment agency like Jaten. Plan your research and describe how you will turn it into two sides of A4 notes you can use in Part B.",
      points: [
        { label: "Plans research on hardware requirements", terms: ["hardware", "pc", "laptop", "server", "network", "device"] },
        { label: "Plans research on software requirements", terms: ["software", "booking", "e-learning", "learning platform", "cloud", "crm", "application"] },
        { label: "Plans research on data and information requirements", terms: ["data", "information", "records", "candidate", "client", "storage"] },
        { label: "Plans research on relevant legislation", terms: ["gdpr", "data protection", "copyright", "computer misuse", "safeguarding", "legislation", "law"] },
        { label: "Looks at similar organisations of this size and sector", terms: ["similar", "other agencies", "recruitment agenc", "training provider", "sector", "compare", "organisations of", "of about", "of this size"] },
        { label: "Plans the notes: short, scannable, own work, two sides of A4", terms: ["table", "headings", "short", "bullet", "two sides", "a4", "own", "scan"] },
        { label: "Includes future developments (e-learning, online booking)", terms: ["e-learning", "online booking", "future", "develop"] }
      ],
      checklist: [
        "My plan covers hardware, software, data and information, and legislation.",
        "I included the future developments named in the brief.",
        "My notes plan is short, structured and my own work.",
        "I know the research is independent: no teacher feedback."
      ],
      model: [
        "Hour 1: Research what training and recruitment organisations of about 13 staff use. Look at hardware such as laptops, desktop PCs at head office, a network and shared storage, and at how staff at a separate training centre connect back to head office.",
        "Hour 2: Research software: candidate and client records, booking and scheduling, communication and video tools, and options for e-learning platforms and online course booking. Note whether options are SaaS, open source or proprietary and what they cost. Look at data and information needs: the kinds of personal data held about candidates, clients and learners, who needs which information, backup and retention.",
        "Hour 3: Research legislation, especially data protection, and anything that applies to working with sports clubs and young people, the Computer Misuse Act and copyright for course material. Then build the notes.",
        "Notes: two sides of A4 in a table with headings for hardware, software, data and information, laws, future developments and key terms, each with short points I can find quickly in Part B."
      ],
      tip: "Part A is your own work. Use this tool for planning technique only when your tutor says it is allowed."
    }
  );

  /* ---------------- SORTER GAME ----------------
     type: "describe" | "benefit" | "implication" */
  var S = U14.sorter;
  function Sx(text, type, why) { S.push({ id: "s" + (S.length + 1), text: text, type: type, why: why }); }

  Sx("The new system stores customer data in the cloud.", "describe", "It says what the system does. It does not say why it matters or what must happen.");
  Sx("Staff can see stock from any shop.", "benefit", "It states a good outcome for the organisation.");
  Sx("Because stock moves to the cloud, every shop needs a reliable connection, so each shop must have a backup 4G router before launch.", "implication", "It says what changes and what must be done because of the design.");
  Sx("The website runs on a hosted platform.", "describe", "It describes what the website uses.");
  Sx("Customers can book repairs at night.", "benefit", "A good outcome for customers.");
  Sx("Mechanics have no computer, so they will each need a shared tablet and a short training session before online repair booking starts.", "implication", "A consequence that needs action and a cost.");
  Sx("The firewall blocks outside access to the stock system.", "describe", "It describes how it works.");
  Sx("Dan only works two days a week, so the provider's help desk must answer first line questions and Dan needs the time to set up accounts.", "implication", "It links a scenario fact to a support consequence.");
  Sx("The system is faster than the old one.", "benefit", "It says it is better but not what follows from it.");
  Sx("Data will be moved from the old server over a weekend, so shops must trade on paper that Saturday and the old data must be wiped before disposal.", "implication", "It has consequences for staff and for data protection.");
  Sx("There will be one stock list.", "describe", "It describes the new set up.");
  Sx("Fewer double bookings will occur.", "benefit", "A good outcome.");
  Sx("Staff will need individual logins, which means shared email accounts must be closed and access levels agreed with each manager first.", "implication", "It names the change and the work needed.");
  Sx("Cloud hosting means Priya pays the same monthly fee.", "benefit", "A good outcome that matches her aim.");
  Sx("Because the monthly limit is £2,000, the extra cost of a managed service reduces the budget available for new tills.", "implication", "A consequence of a constraint.");
  Sx("The server is in the back office in Exeter.", "describe", "A fact about where it is.");
  Sx("The system will make it easier to open the Truro shop.", "benefit", "A good outcome. An implication would say what must be done for Truro.");
  Sx("Customer records must be kept under UK GDPR, so Quay Cycles needs a policy on how long it keeps them and a process for subject access requests within one month.", "implication", "The law creates actions and deadlines.");
  Sx("The old PCs must be wiped and recycled, so they need to be added to the asset register with a disposal record before they leave the shop.", "implication", "A consequence for managing assets, linked to WEEE and data protection.");
  Sx("The new tills use touch screens.", "describe", "It describes a feature.");
  Sx("Staff will save time on stock counts.", "benefit", "A good outcome.");
  Sx("If the broadband fails on a Saturday, the tills could stop, so the shops need either an offline mode or a backup connection.", "implication", "It follows a risk to its consequence and an action.");
  Sx("The online shop will scale up for the June sale.", "benefit", "A good outcome.");
})();
