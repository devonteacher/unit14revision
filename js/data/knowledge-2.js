/* Knowledge base part 2: key staff and benefits, organisations, diagrams, context, ethics and law. */
(function () {
  var kb = U14.kb;

  /* ---------- Key staff and benefits ---------- */
  kb.push(
    {
      id: "key-staff", topic: "roles", term: "Key staff in IT service delivery",
      aka: ["roles", "job roles", "staff roles", "key staff", "who does what"],
      short: "Five roles the specification names: architect, developer, project manager, technician and service desk person. Each does a different job at a different point in the lifecycle.",
      more: [
        "Architect designs it. Developer builds it. Project manager plans and controls it.",
        "Technician installs and looks after it. Service desk helps the people using it.",
        "In a small organisation one person may do several of these jobs."
      ],
      example: "Quay Cycles has Dan (technician and first line support) and Sam (developer, paid by the day).",
      spec: "A1", related: ["architect", "developer", "project-manager", "technician", "service-desk-staff"]
    },
    {
      id: "architect", topic: "roles", term: "IT architect",
      aka: ["architect", "solutions architect", "systems architect"],
      short: "Designs the overall structure of an IT system, showing how all the parts fit together to meet the organisation’s needs.",
      more: [
        "Chooses technologies and decides how systems connect and share data.",
        "Produces diagrams and design documents for developers and technicians to follow.",
        "Works mainly in the design stage of the lifecycle."
      ],
      example: "Deciding that five shops will use one cloud stock system connected to the website.",
      spec: "A1", related: ["developer", "project-manager", "key-staff"]
    },
    {
      id: "developer", topic: "roles", term: "Developer",
      aka: ["software developer", "programmer", "web developer"],
      short: "Builds the solution: writes code, sets up and customises software, links systems together and tests that they work.",
      more: [
        "Turns the architect’s design into something that runs.",
        "May build websites, apps, databases or connections between systems.",
        "Fixes bugs found in testing."
      ],
      example: "Sam builds and updates the Quay Cycles website.",
      spec: "A1", related: ["architect", "key-staff"]
    },
    {
      id: "project-manager", topic: "roles", term: "Project manager",
      aka: ["project management", "pm"],
      short: "Plans and controls the project: the budget, the timetable, the team, the risks and the communication with everyone involved.",
      more: [
        "Makes sure the project finishes on time and inside budget.",
        "Spots risks early and decides what to do about them.",
        "Reports progress to stakeholders and keeps the team working together."
      ],
      example: "Keeping the Truro shop IT on track so it is ready before the shop opens in May.",
      spec: "A1", related: ["methodologies", "key-staff"]
    },
    {
      id: "technician", topic: "roles", term: "Technician",
      aka: ["it technician", "support technician", "engineer"],
      short: "Installs, maintains and repairs hardware, software and networks, and looks after user accounts, updates and backups.",
      more: [
        "Often the person who sets up new equipment and fixes faults on site.",
        "Works closely with the service desk, who pass on faults they cannot fix.",
        "Looks after the day to day running of the solution."
      ],
      example: "Dan resets passwords, checks the backup report and fixes till PCs.",
      spec: "A1", related: ["service-desk-staff", "key-staff"]
    },
    {
      id: "service-desk-staff", topic: "roles", term: "Service desk personnel",
      aka: ["service desk", "help desk", "helpdesk", "first line support", "support desk"],
      short: "The first point of contact when someone has an IT problem. They log it, fix simple faults, and pass harder ones to a technician.",
      more: [
        "Log every call or request so nothing is lost.",
        "Solve what they can first time and pass the rest on (escalate).",
        "Keep the user informed until the issue is closed."
      ],
      example: "A sales assistant phones the service desk because the till printer is jammed. The desk talks them through clearing it.",
      spec: "A1", related: ["incident-management", "technician"]
    },
    {
      id: "lifecycle-benefits", topic: "roles", term: "Benefits of an effective IT service lifecycle",
      aka: ["benefits", "benefits of lifecycle", "adherence to standards", "automation", "continuity", "disaster recovery", "customer retention", "interoperability", "optimised security", "reduction of costs", "simplification"],
      short: "Ten benefits the specification lists for organisations that manage IT services well.",
      more: [
        "Adherence to standards: follows recognised rules (for example ISO standards).",
        "Automation of processes: computers do repeat tasks, saving time.",
        "Continuity and availability: services keep running and are there when needed.",
        "Customer attraction and retention: customers are happy and come back.",
        "Disaster prevention and recovery: fewer disasters and a quick recovery when one happens.",
        "Improved data or system integrity, productivity, and services and products.",
        "Interoperability: different systems can work together.",
        "Optimised security: data and systems are better protected.",
        "Reduction of operational costs: less waste and fewer emergency fixes.",
        "Simplification of processes: fewer, clearer steps."
      ],
      example: "One shared stock list is a benefit of data integrity: the numbers cannot disagree.",
      spec: "A1", related: ["service-lifecycle", "itil"]
    }
  );

  /* ---------- Organisations and functions ---------- */
  kb.push(
    {
      id: "product-vs-service-org", topic: "orgs", term: "Product or service organisation",
      aka: ["product organisation", "service organisation", "product vs service", "difference between product and service"],
      short: "A product organisation makes or sells things you can hold. A service organisation provides help, time or skills. Many do both.",
      more: [
        "Product: a bike shop selling bikes, a factory making furniture.",
        "Service: a hairdresser, a bank, a training agency.",
        "The IT needs differ. A factory needs stock and production systems. A training agency needs booking and records systems."
      ],
      example: "Quay Cycles sells bikes (product) and offers repairs and hire (services).",
      spec: "A2", related: ["org-sectors", "org-functions"]
    },
    {
      id: "org-sectors", topic: "orgs", term: "Public, private and voluntary sectors",
      aka: ["public sector", "private sector", "voluntary sector", "charity", "sectors"],
      short: "Public sector organisations are run or funded by government. Private sector organisations are run to make a profit. Voluntary sector organisations are non profit, such as charities.",
      more: [
        "Public: schools, the NHS, emergency services, councils.",
        "Private: shops, factories, accountants, limited companies.",
        "Voluntary: charities and groups run by trustees.",
        "Priorities differ: public sector looks at public service and budgets, private at profit and customers, voluntary at its cause and donations."
      ],
      example: "A charity may need donation handling and volunteer records. A shop needs tills and stock.",
      spec: "A2", related: ["product-vs-service-org", "primary-secondary-tertiary"]
    },
    {
      id: "primary-secondary-tertiary", topic: "orgs", term: "Primary, secondary and tertiary industry",
      aka: ["primary sector", "secondary sector", "tertiary sector", "industry types"],
      short: "Primary industries collect raw materials. Secondary industries turn them into products. Tertiary industries provide services.",
      more: [
        "Primary: farming, mining, oil.",
        "Secondary: manufacturing, food production, building.",
        "Tertiary: banks, supermarkets, hairdressers, schools."
      ],
      example: "A farm is primary, a bicycle factory is secondary, a bike repair shop is tertiary.",
      spec: "A2", related: ["org-sectors", "product-vs-service-org"]
    },
    {
      id: "org-functions", topic: "orgs", term: "Functions of an organisation",
      aka: ["functions", "business functions", "departments", "manufacturing", "supply chain", "marketing and sales", "customer relations", "resource management", "staff recruitment", "staff management", "support and financial"],
      short: "A function is a team doing similar work. The specification names nine: manufacturing of products, delivering services, supply chain management, marketing and sales, customer relations, resource management, staff recruitment, staff management, and support and financial.",
      more: [
        "Manufacturing or delivering services: production control, booking, job systems.",
        "Supply chain management: stock control, ordering from suppliers, delivery tracking.",
        "Marketing and sales: website, online shop, tills, social media, email campaigns.",
        "Customer relations: customer database, helpdesk, feedback, complaints tracking.",
        "Resource management: planning staff, equipment and materials, asset records.",
        "Staff recruitment: applicant tracking, online forms, checks on qualifications.",
        "Staff management: rotas, payroll, training records, appraisals.",
        "Support and financial: accounts, invoices, payroll, IT support."
      ],
      example: "In Activity 2 you write services for each function in the template, for example \"Hire booking calendar\" for the hire coordinator.",
      spec: "A2", related: ["it-service-catalogue", "product-vs-service-org"]
    },
    {
      id: "customers-definition", topic: "orgs", term: "Customers (as the exam uses the word)",
      aka: ["customers", "clients", "consumers", "who are customers"],
      short: "Any outside person or group that uses an organisation’s product or service. Clients and consumers both count as customers.",
      more: [
        "Staff are not customers. They are users.",
        "Always say who the customers are in the scenario and what they need."
      ],
      example: "Quay Cycles customers include tourists who hire bikes and locals who book repairs.",
      spec: "A2", related: ["organisational-vs-customer-needs"]
    },
    {
      id: "sector-it-needs", topic: "orgs", term: "How the sector changes the IT needs",
      aka: ["sector needs", "different it needs", "industry needs", "care home", "restaurant", "construction", "retail"],
      short: "The type of organisation decides what the IT must do. Always think about the real jobs people do there.",
      more: [
        "Construction: people work on remote sites, so mobile devices and secure file transfer matter.",
        "Care home: resident records are sensitive, so security, access levels and shared computers matter.",
        "Restaurant: ordering, bookings, bills and stock, often in the evening with a small team.",
        "Retail: tills, stock control, online sales, payment security and busy periods.",
        "Training agency: bookings, course records, qualification checks and e-learning."
      ],
      example: "Past tasks have used construction, a care home, farm machinery, retail, a restaurant and a pottery.",
      spec: "A2", related: ["past-paper-patterns", "org-functions"]
    }
  );

  /* ---------- Diagrams and defining needs ---------- */
  kb.push(
    {
      id: "requirements-sources", topic: "diagrams", term: "What to look at when defining requirements",
      aka: ["defining requirements", "define requirements", "purpose and type", "aims and goals", "location", "staff needs", "customer experience"],
      short: "Look at five things: the purpose and type of the organisation, its aims and goals, the customer experience, the staff, and the locations.",
      more: [
        "Purpose and type: product or service, size, sector.",
        "Aims and goals: grow, save money, open new sites, improve service.",
        "Customers: what they buy, what they expect, how it is delivered.",
        "Staff: their needs, working styles and patterns (shifts, remote, shared PCs).",
        "Location: staff, customers, premises and where the service is delivered."
      ],
      example: "Quay Cycles: four shops plus Truro (location), a June sale (demand), one technician for two days (staff).",
      spec: "A3", related: ["service-requirement", "contextual-factors"]
    },
    {
      id: "functional-chart", topic: "diagrams", term: "Functional chart",
      aka: ["functional diagram", "organisation chart", "org chart", "organisational chart"],
      short: "A diagram of the structure of an organisation, showing teams, managers and who reports to whom.",
      more: [
        "Shows departments and job roles, often as boxes joined by lines.",
        "Used to work out who needs which IT services and what access they should have.",
        "In the exam, read the scenario and draw out which people exist and where they work."
      ],
      example: "A chart showing Priya at the top, four shop managers below, and sales staff and mechanics below them.",
      spec: "A3", related: ["data-flow-diagram", "floor-plan", "network-diagram"]
    },
    {
      id: "data-flow-diagram", topic: "diagrams", term: "Data flow diagram (DFD)",
      aka: ["dfd", "data flow", "data flow diagram", "flow of data", "data flows"],
      short: "A diagram showing how data moves through a process: where it comes from, what happens to it, where it is stored and where it goes.",
      more: [
        "External entities (people or systems outside the process) are usually rectangles.",
        "Processes (things done to data) are usually circles or rounded boxes.",
        "Data stores (where data rests) are usually open ended rectangles.",
        "Arrows show the movement and should be labelled with what data moves.",
        "Examiners praised data flow and infrastructure diagrams as good evidence in Activity 3."
      ],
      example: "Customer books a repair (entity) then booking system checks diary (process), saves the job (data store) and sends a text (output).",
      spec: "A3", related: ["network-diagram", "floor-plan", "functional-chart", "activity-3"]
    },
    {
      id: "floor-plan", topic: "diagrams", term: "Building or floor plan",
      aka: ["floor plan", "floorplan", "building plan", "layout"],
      short: "A scaled drawing of the layout of a building or room, showing walls, doors, windows and, for IT, power sockets, data outlets and cable routes.",
      more: [
        "Helps decide where devices, wireless access points and cables should go.",
        "Shows distance, which matters because copper network cable has a maximum length of 100 metres.",
        "Useful to spot problems such as a server room far from the main office."
      ],
      example: "Care home plan: three floors, each needing a wireless access point or cabling to the nurses’ station.",
      spec: "A3", related: ["network-diagram", "utp-cable"]
    },
    {
      id: "network-diagram", topic: "diagrams", term: "Network diagram",
      aka: ["network diagram", "network plan", "topology", "infrastructure diagram", "draw a network"],
      short: "A diagram showing the devices in a network and how they connect, such as PCs, switches, routers, servers, printers and the internet link.",
      more: [
        "Uses standard symbols for each device.",
        "Label connections: cable type, Wi-Fi, and speeds if you know them.",
        "Can show IP addresses, gateway and subnet details.",
        "Show how different sites link together, not just one building."
      ],
      example: "Head office and two construction sites linked through the internet with a secure connection.",
      spec: "A3, D2", related: ["floor-plan", "switch", "router", "activity-3"]
    }
  );

  /* ---------- Context, ethics and the law ---------- */
  kb.push(
    {
      id: "contextual-factors", topic: "context", term: "Contextual factors",
      aka: ["contextual", "context", "factors affecting needs", "factors that affect needs"],
      short: "Things around an organisation that change what IT it needs. The spec lists user and customer needs, changes in demand, scalability, moral and ethical issues, legislation, security, new technology and standard ways of working.",
      more: [
        "Ignoring them leads to a solution that is illegal, unsafe, too small or out of date.",
        "In the exam, pick the ones that matter for the scenario and say why."
      ],
      example: "June sale demand (ten times the visitors) is a contextual factor that decides the website hosting.",
      spec: "A3, B2", related: ["scalability", "ethics-overview", "emerging-tech"]
    },
    {
      id: "scalability", topic: "context", term: "Scalability",
      aka: ["scalable", "scale up", "scale down", "elasticity", "elastic", "growth", "expand"],
      short: "The ability of a system to cope with more (or less) demand without needing to be rebuilt.",
      more: [
        "Scale up for busy times or growth, scale down to save money.",
        "Cloud services are often scalable: capacity can be added when needed.",
        "Question to ask: what happens if demand is ten times higher, or if a new shop opens?"
      ],
      example: "A hosted online shop that adds capacity for the June sale and a Truro shop added with a tablet and some user accounts.",
      spec: "A3, B2, D1", related: ["cloud-computing", "changes-in-demand"]
    },
    {
      id: "changes-in-demand", topic: "context", term: "Changes in demand",
      aka: ["demand", "seasonal", "peak demand", "busy period"],
      short: "Demand goes up and down. Seasons, sales, new products and growth all change how much IT the organisation needs.",
      more: [
        "Plan for the busiest time, not the average day.",
        "Choose systems that can flex, or have a plan for peak times."
      ],
      example: "Summer hire for tourists, the June electric bike sale.",
      spec: "A3", related: ["scalability", "contextual-factors"]
    },
    {
      id: "ethics-overview", topic: "context", term: "Moral and ethical considerations",
      aka: ["ethics", "ethical", "moral", "morals", "moral and ethical", "legal vs ethical"],
      short: "Legal means the law says you must. Ethical or moral means it is the right thing to do, even if the law does not say so.",
      more: [
        "The spec lists: monitoring of staff and user activity, privacy, environmental issues, freedom of speech and censorship, and acceptable use policies.",
        "Something can be legal but still unfair, for example reading all staff messages.",
        "In an answer, explain who is affected and the balance of benefits and harm."
      ],
      example: "Quay Cycles can legally monitor work email if staff are told, but should ask whether it is fair and necessary.",
      spec: "A3, B2", related: ["monitoring-privacy", "censorship", "environmental-issues", "aup"]
    },
    {
      id: "monitoring-privacy", topic: "context", term: "Monitoring and privacy",
      aka: ["monitoring", "privacy", "surveillance", "staff monitoring", "tracking staff", "cctv"],
      short: "Organisations may monitor IT use to protect security and check rules are followed. Staff and customers also have a right to privacy. Both must be balanced.",
      more: [
        "Be open: tell people what is monitored and why.",
        "Only collect what is needed for a clear purpose.",
        "Too much monitoring can harm trust and morale.",
        "Law matters here: data protection, interception of communications and lawful business practice rules."
      ],
      example: "A company logs which websites staff visit and says so in its acceptable use policy.",
      spec: "A3", related: ["aup", "ripa-lbp", "data-protection"]
    },
    {
      id: "censorship", topic: "context", term: "Freedom of speech and censorship",
      aka: ["censorship", "web filtering", "content filtering", "freedom of speech", "filtering"],
      short: "Filtering blocks harmful or unsuitable content, but it can also limit what people can read or say. Organisations must balance protection with freedom.",
      more: [
        "Schools and colleges filter content for safeguarding.",
        "Businesses block sites that waste time or carry security risks.",
        "Over blocking can stop people doing legitimate research."
      ],
      example: "A college blocks gambling sites but allows news sites.",
      spec: "A3", related: ["ethics-overview", "aup"]
    },
    {
      id: "environmental-issues", topic: "context", term: "Environmental issues and sustainability",
      aka: ["environment", "environmental", "sustainability", "green it", "energy use", "e-waste", "ewaste"],
      short: "IT uses energy and creates waste. Organisations should think about power use, how long equipment lasts, and how old equipment is recycled.",
      more: [
        "Choose energy efficient equipment and set power saving.",
        "Extend equipment life where possible and recycle properly at the end.",
        "Cloud services can reduce the number of local servers but data centres use energy too."
      ],
      example: "Quay Cycles wipes and recycles old till PCs and the old server.",
      spec: "A3, B2", related: ["weee", "ethics-overview"]
    },
    {
      id: "aup", topic: "context", term: "Acceptable use policy (AUP)",
      aka: ["acceptable use policy", "aup", "acceptable use", "it policy", "code of conduct"],
      short: "A set of rules that tells staff or students what they may and may not do with the organisation’s IT, and what happens if they break them.",
      more: [
        "Purpose: protect the organisation, its data and its people, and make expectations clear.",
        "Content: use of email and internet, personal use, passwords, software installation, monitoring, social media.",
        "Enforcement: people agree to it, are trained on it, monitoring checks it, breaking it can lead to disciplinary action."
      ],
      example: "Exeter College’s own IT Acceptable Use Policy is one you have agreed to.",
      spec: "A3, D3", related: ["monitoring-privacy", "ethics-overview", "user-management"]
    },
    {
      id: "computer-misuse-act", topic: "context", term: "Computer Misuse Act 1990",
      aka: ["computer misuse act", "cma", "hacking law", "hacking", "unauthorised access", "malware law"],
      short: "Makes it a crime to access computers or data without permission, to do so in order to commit another crime, or to damage or disrupt systems, for example with malware or denial of service.",
      more: [
        "Main offences: unauthorised access, unauthorised access with intent to commit further offences, and unauthorised acts that impair a computer or its data.",
        "It has since been extended to cover serious damage and making or supplying tools for these offences.",
        "Organisations protect themselves with strong passwords, access levels, anti malware and staff training.",
        "Weakness often discussed: it is old and criminals work across borders."
      ],
      example: "An employee who logs in as a colleague to read their files breaks the Act.",
      spec: "A3", related: ["data-protection", "aup", "security-measures"]
    },
    {
      id: "copyright-act", topic: "context", term: "Copyright, Designs and Patents Act 1988",
      aka: ["copyright", "cdpa", "copyright designs and patents", "piracy", "software licence", "software license", "licensing"],
      short: "Protects the work of creators, including software, images, music and text. It is illegal to copy, share or use it without permission or a licence.",
      more: [
        "Organisations must buy the right number of software licences.",
        "Keep licence records, for example on the asset register.",
        "Penalties can include fines and legal action."
      ],
      example: "Installing one licensed copy of design software on twenty PCs breaks the Act.",
      spec: "A3", related: ["asset-management", "open-source-proprietary"]
    },
    {
      id: "data-protection", topic: "context", term: "Data protection law (UK GDPR and Data Protection Act 2018)",
      aka: ["gdpr", "uk gdpr", "data protection act", "dpa", "data protection", "personal data", "ico", "subject access", "data breach", "privacy law", "dpa 2018", "dpa 1998"],
      short: "The law on how organisations may collect, use, store and share personal data. In the UK it is the UK GDPR together with the Data Protection Act 2018.",
      more: [
        "Data must be used lawfully, fairly and openly, for a clear purpose, kept accurate, kept no longer than needed, and kept secure.",
        "People can ask to see their data (a subject access request) and an organisation normally has one month to reply.",
        "A serious breach must be reported to the Information Commissioner’s Office (ICO) within 72 hours.",
        "Fines can be up to £17.5 million or 4% of worldwide turnover, whichever is higher.",
        "Parts of the law were updated by the Data (Use and Access) Act 2025. The older Data Protection Act 1998 no longer applies."
      ],
      example: "Quay Cycles must tell customers what it keeps and why, keep the data safe, and wipe the old server before disposal.",
      spec: "A3", related: ["monitoring-privacy", "backup-dr", "security-measures", "cia-triad"]
    },
    {
      id: "communications-act", topic: "context", term: "Communications Act 2003 (telecommunications law)",
      aka: ["communications act", "telecommunications", "telecoms", "ofcom", "telecommunications legislation"],
      short: "The main law on electronic communications in the UK. It set up Ofcom as the regulator and covers misuse of public communications networks, such as sending grossly offensive or menacing messages.",
      more: [
        "Relevant to organisations that run phone systems, broadband, messaging or communications services.",
        "Staff must not use work communications to send abusive or threatening messages."
      ],
      example: "An employee sending threatening messages over the company phone system could be committing an offence.",
      spec: "A3", related: ["ripa-lbp", "aup"]
    },
    {
      id: "ripa-lbp", topic: "context", term: "Interception, RIPA 2000 and Lawful Business Practice Regulations",
      aka: ["ripa", "regulation of investigatory powers", "lawful business practice", "lbp", "interception of communications", "intercept", "monitor email", "investigatory powers"],
      short: "It is generally illegal to intercept communications without lawful authority. RIPA 2000 and the Lawful Business Practice Regulations 2000 allow organisations to monitor and record business communications for set reasons.",
      more: [
        "Allowed reasons include checking rules are followed, detecting crime or unauthorised use, and keeping systems secure.",
        "Organisations must make reasonable efforts to tell staff that monitoring may happen.",
        "The older Interception of Communications Act 1985 was replaced by RIPA 2000. The Investigatory Powers Act 2016 has since taken over much of the interception law."
      ],
      example: "A company records customer service calls and tells callers at the start of the call.",
      spec: "A3", related: ["monitoring-privacy", "aup", "communications-act"]
    },
    {
      id: "hswa", topic: "context", term: "Health and Safety at Work Act 1974",
      aka: ["health and safety", "hswa", "health and safety at work", "h&s", "hsw"],
      short: "Employers must make workplaces as safe as reasonably possible for staff and visitors. For IT that covers cables, equipment, server rooms, fire risks and training.",
      more: [
        "Carry out risk assessments and act on them.",
        "Keep cables tidy to avoid trips, and provide safe electrical equipment.",
        "Staff also have a duty to take care and follow rules."
      ],
      example: "Cables across a walkway at Totnes need to be fixed down or rerouted.",
      spec: "A3", related: ["dse-regs"]
    },
    {
      id: "dse-regs", topic: "context", term: "Display Screen Equipment Regulations 1992 (amended 2002)",
      aka: ["dse", "display screen equipment", "dse regulations", "vdu", "screen regulations", "workstation assessment"],
      short: "Rules for staff who use screens a lot. Employers must assess workstations, provide breaks or changes of activity, and offer eye tests on request.",
      more: [
        "Applies to regular users, usually those who work at a screen for an hour or more at a time.",
        "Covers chair, desk, screen position, lighting and keyboard.",
        "Staff should be trained in setting up their workstation."
      ],
      example: "Accounts staff at Exeter get a workstation assessment and a chair that can be adjusted.",
      spec: "A3", related: ["hswa"]
    },
    {
      id: "weee", topic: "context", term: "WEEE Regulations (waste electrical and electronic equipment)",
      aka: ["weee", "ewaste", "e-waste", "recycling", "disposal", "waste electrical", "weee regulations 2013"],
      short: "Rules that say old electrical and electronic equipment must be collected and recycled properly and not thrown in normal waste.",
      more: [
        "Organisations must use authorised recyclers and keep records.",
        "Remove or destroy data before disposal, because data protection law still applies.",
        "Dispose through the asset register so nothing is lost."
      ],
      example: "Quay Cycles sends its wiped old till PCs and server for recycling and keeps the paperwork.",
      spec: "A3", related: ["environmental-issues", "asset-management", "data-protection"]
    },
    {
      id: "emerging-tech", topic: "context", term: "Developments in technology",
      aka: ["emerging technology", "new technology", "technology change", "ai", "iot", "internet of things", "biometrics", "blockchain", "ar vr", "drones", "forced obsolescence", "windows 11"],
      short: "New technology keeps changing what organisations can and must do. Plan for change, and check new technology against the needs, cost and law.",
      more: [
        "Examples: artificial intelligence, big data, biometrics, augmented and virtual reality, drones, internet of things, blockchain, encryption, distributed computing.",
        "Upgrades can force other changes, such as a new operating system needing newer hardware.",
        "New technology is not automatically better. It must meet a real need."
      ],
      example: "Windows 11 needs a security chip (TPM) that some older PCs do not have.",
      spec: "A3", related: ["contextual-factors", "scalability"]
    },
    {
      id: "standard-ways-of-working", topic: "context", term: "Accepted and standard ways of working",
      aka: ["standards", "iso", "good practice", "standard ways of working", "best practice working"],
      short: "Recognised good practice that organisations follow so their work is consistent and trusted, such as ISO standards and ITIL.",
      more: [
        "Helps with quality, security and trust from customers and partners.",
        "Many contracts and customers expect certain standards."
      ],
      example: "A supplier showing an information security standard certificate when bidding for work.",
      spec: "A3", related: ["itil", "lifecycle-benefits"]
    }
  );
})();
