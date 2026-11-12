/* Multiple choice questions. Q(topic, question, correct answer, [three wrong answers], explanation, kb id to revise)
   The correct answer is listed first here. The app shuffles the options every time. */
(function () {
  var n = 0;
  function Q(topic, q, right, wrong, why, kb) {
    n += 1;
    U14.quiz.push({ id: "q" + n, topic: topic, q: q, right: right, wrong: wrong, why: why, kb: kb || "" });
  }

  /* ---- Lifecycle and ITIL ---- */
  Q("lifecycle", "What are the three stages of the IT service lifecycle used in this unit?",
    "Service identification, service delivery design, service management",
    ["Plan, build, retire", "Requirements, coding, testing", "Purchase, install, dispose"],
    "The lifecycle starts by finding needs, then designs the solution, then keeps managing and reviewing it. It loops back to the start.", "service-lifecycle");
  Q("lifecycle", "Which of these is NOT one of the six ITIL value chain activities?",
    "Retire",
    ["Plan", "Engage", "Deliver and support"],
    "The six activities are Plan, Improve, Engage, Design and transition, Obtain or build, and Deliver and support.", "value-chain");
  Q("lifecycle", "Which list shows the four dimensions of ITIL 4?",
    "Organisations and people, information and technology, partners and suppliers, value streams and processes",
    ["Hardware, software, networks, people", "Plan, do, check, act", "Cost, time, quality, risk"],
    "ITIL 4 says every service should be looked at from these four sides.", "four-dimensions");
  Q("lifecycle", "A till will not start. Getting it working again as fast as possible is part of which process?",
    "Incident management",
    ["Problem management", "Change management", "Asset management"],
    "Incident management is about restoring normal service quickly.", "incident-management");
  Q("lifecycle", "The same router fault has happened five times this month. Finding the root cause is which process?",
    "Problem management",
    ["Incident management", "Service desk", "Release management"],
    "A problem is the underlying cause of one or more incidents. Problem management investigates so it stops coming back.", "problem-management");
  Q("lifecycle", "Why is change management used?",
    "So changes are planned, approved, tested and checked, and do not cause new faults",
    ["So no changes are ever made", "So staff can install anything they like", "To make the project finish sooner"],
    "It controls change. It does not stop change.", "change-management");
  Q("lifecycle", "What does an SLA set out?",
    "The level of service a provider promises, such as uptime and fix times",
    ["The price of the hardware only", "A list of staff passwords", "The layout of the network"],
    "A service level agreement is a written promise about service levels, often with consequences if missed.", "sla");
  Q("lifecycle", "Which statement best describes ITIL?",
    "A set of good practice guidance for running IT services",
    ["A law that all organisations must follow", "A type of software", "A programming language"],
    "ITIL is advice. Organisations choose what suits them.", "itil");
  Q("lifecycle", "What does the first stage of the lifecycle, service identification, produce?",
    "An outline IT service strategy and an outline IT service catalogue",
    ["A finished network", "A set of user accounts", "A backup plan"],
    "It works out the needs, puts them in priority order and lists the services needed.", "service-identification");

  /* ---- Methodologies ---- */
  Q("methods", "Which methodology completes each stage before the next one starts?",
    "Waterfall", ["Agile", "RAD", "Lean"],
    "Waterfall runs in order: requirements, design, build, test, release.", "waterfall");
  Q("methods", "A client is unsure what they want and expects needs to change. Which method fits best?",
    "Agile", ["Waterfall", "PRINCE2 with no changes allowed", "None, you should not start"],
    "Agile works in short cycles with regular feedback, so changing needs can be handled.", "agile");
  Q("methods", "Which methodology uses a business case that is checked throughout the project?",
    "PRINCE2", ["RAD", "Lean", "Scrum"],
    "PRINCE2 is formal, with set stages, clear roles and regular checks that the project is still worth doing.", "prince2");
  Q("methods", "Which method builds quick prototypes that users try and then improve?",
    "RAD (Rapid Application Development)", ["Waterfall", "PRINCE2", "Lean"],
    "RAD gets a working version in front of users early and improves it.", "rad");
  Q("methods", "Which method focuses on cutting waste and delivering only what gives value to the customer?",
    "Lean", ["Waterfall", "RAD", "PRINCE2"],
    "Lean comes from manufacturing and aims for less waste and constant improvement.", "lean");
  Q("methods", "What is a main drawback of Waterfall?",
    "Problems are often found late and it is hard to go back",
    ["It has no plan", "It cannot be used for software", "Users see the product every week"],
    "Testing is near the end, so mistakes in early stages can be expensive to fix.", "waterfall");
  Q("methods", "What is a typical drawback of PRINCE2 on a small project?",
    "It can involve a lot of paperwork and feel heavy",
    ["It has no roles", "It ignores the budget", "It cannot be planned"],
    "PRINCE2 suits large projects. On a small one the control can be more than is needed.", "prince2");

  /* ---- Strategy, catalogue, requirements ---- */
  Q("strategy", "What is an IT service strategy?",
    "A document listing the IT services needed in priority order, with reasons",
    ["A list of every device owned", "A user manual", "A set of passwords"],
    "In Activity 1 you list requirements, set priorities and explain each with a fact from the brief.", "it-service-strategy");
  Q("strategy", "What does an IT service catalogue contain?",
    "Each IT service with a description of what it must achieve",
    ["The staff timetable", "The prices charged to customers", "Only hardware serial numbers"],
    "The catalogue lists services and describes the requirements for each.", "it-service-catalogue");
  Q("strategy", "Which of these is the better way to write a service requirement?",
    "One stock list that every shop and the website can see",
    ["Buy stock software", "Get a server", "Use the cloud"],
    "A requirement states the need. Jumping straight to a product comes later.", "service-requirement");
  Q("strategy", "Why should priorities be justified using facts from the brief?",
    "It shows judgement and links the answer to this organisation",
    ["Because every requirement should be high priority", "Because facts make the answer longer", "It is not needed"],
    "Marking everything high shows no judgement. Reasons from the scenario show you understand the organisation.", "prioritising");
  Q("strategy", "Which is an example of a customer need rather than an organisational need?",
    "Seeing real stock levels online before travelling to a shop",
    ["Reducing stock losses", "Cutting the IT budget", "Reducing staff overtime"],
    "Customer needs are about what the buyer wants. Organisational needs are about how the business runs.", "organisational-vs-customer-needs");

  /* ---- Roles and benefits ---- */
  Q("roles", "Who designs the overall structure of an IT system?",
    "Architect", ["Technician", "Service desk", "Developer"],
    "The architect decides how the parts fit together. The developer then builds it.", "architect");
  Q("roles", "Who is the first point of contact when someone has an IT problem?",
    "Service desk staff", ["Project manager", "Architect", "Developer"],
    "They log the issue, fix simple things and pass on harder ones.", "service-desk-staff");
  Q("roles", "Who controls the budget, timetable and risks of an IT project?",
    "Project manager", ["Technician", "Service desk", "Architect"],
    "Project managers plan, control and report on a project.", "project-manager");
  Q("roles", "Who installs and maintains hardware and networks on site?",
    "Technician", ["Project manager", "Architect", "Developer"],
    "Technicians look after the day to day running of the solution.", "technician");
  Q("roles", "Which is a benefit of managing IT services in a structured way?",
    "Services stay available and continue when needed",
    ["Staff no longer need training", "Customers are not needed", "Hardware never fails"],
    "Continuity and availability is one of the listed benefits, alongside standards and automation.", "lifecycle-benefits");

  /* ---- Organisations ---- */
  Q("orgs", "A bakery that bakes and sells bread is mainly which type of organisation?",
    "Product based", ["Service based", "Voluntary sector", "Primary industry"],
    "It makes and sells something people can hold.", "product-vs-service-org");
  Q("orgs", "A charity run by trustees is part of which sector?",
    "Voluntary", ["Public", "Private", "Primary"],
    "Voluntary sector organisations are non profit.", "org-sectors");
  Q("orgs", "Which is a secondary industry?",
    "Manufacturing", ["Farming", "Banking", "Mining"],
    "Primary collects raw materials, secondary makes products, tertiary provides services.", "primary-secondary-tertiary");
  Q("orgs", "Which organisational function would use stock control and supplier ordering?",
    "Supply chain management", ["Staff recruitment", "Marketing and sales", "Customer relations"],
    "Supply chain systems track stock, orders and deliveries.", "org-functions");
  Q("orgs", "In the context of this unit, who are customers?",
    "People or groups outside the organisation who use its product or service",
    ["Only people who pay in cash", "The staff", "The IT team"],
    "Clients and consumers count as customers. Staff are users.", "customers-definition");
  Q("orgs", "A construction firm works on remote sites. Which IT need is most likely?",
    "Mobile devices and secure file transfer", ["Large desktop servers on every site", "No network at all", "Printed forms only"],
    "People work away from an office, so mobile access and safe transfer matter.", "sector-it-needs");

  /* ---- Diagrams and defining needs ---- */
  Q("diagrams", "What does a data flow diagram show?",
    "How data moves through a process, where it is stored and where it goes",
    ["The physical layout of a room", "Who reports to whom", "The cost of each device"],
    "Entities, processes, data stores and labelled arrows show how data moves.", "data-flow-diagram");
  Q("diagrams", "Which diagram shows who reports to whom?",
    "Functional chart", ["Network diagram", "Floor plan", "Data flow diagram"],
    "A functional chart shows structure: teams, managers and roles.", "functional-chart");
  Q("diagrams", "Why does a floor plan matter when planning a network?",
    "It shows distances and where to place sockets, cables and access points",
    ["It shows software licences", "It lists customers", "It sets the budget"],
    "Copper network cable has a maximum run of about 100 metres, so distance matters.", "floor-plan");
  Q("diagrams", "Which five things help you find an organisation's requirements?",
    "Purpose and type, aims and goals, customer experience, staff, locations",
    ["Colour, size, speed, price, weight", "Hardware, software, cables, power, printers", "Sales, tax, rent, wages, stock"],
    "These are the sources of requirements listed in the specification.", "requirements-sources");
  Q("diagrams", "A network diagram should show which of these?",
    "Devices and how they connect, with the connection types labelled",
    ["Staff wages", "A list of laws", "Employee timetables"],
    "Use standard symbols and label links, such as cable type or Wi-Fi.", "network-diagram");

  /* ---- Context, ethics and law ---- */
  Q("context", "Scalability means:",
    "Coping with more or less demand without being rebuilt",
    ["Being cheap to buy", "Being easy to use", "Being secure"],
    "Scalable systems can grow or shrink with demand.", "scalability");
  Q("context", "Which law makes it a crime to access a computer system without permission?",
    "Computer Misuse Act 1990", ["Copyright Act", "Health and Safety at Work Act", "WEEE Regulations"],
    "It covers unauthorised access, access with intent and acts that impair a computer.", "computer-misuse-act");
  Q("context", "Which law covers copying software without a licence?",
    "Copyright, Designs and Patents Act 1988", ["Communications Act 2003", "DSE Regulations", "UK GDPR"],
    "Software is protected by copyright, so you need the right licences.", "copyright-act");
  Q("context", "How long does an organisation normally have to respond to a subject access request?",
    "One month", ["24 hours", "72 hours", "One year"],
    "People can ask to see their personal data. The normal deadline is one month.", "data-protection");
  Q("context", "How soon must a serious personal data breach be reported to the ICO?",
    "Within 72 hours", ["Within 24 hours", "Within one month", "Within one year"],
    "Serious breaches must be reported within 72 hours of becoming aware.", "data-protection");
  Q("context", "What is the maximum fine under UK GDPR for the most serious breaches?",
    "£17.5 million or 4% of worldwide turnover, whichever is higher",
    ["£1,000", "£100,000", "£1 million only"],
    "The higher tier is £17.5 million or 4% of annual worldwide turnover.", "data-protection");
  Q("context", "Which regulations relate to workstation set up for people who use screens a lot?",
    "Health and Safety (Display Screen Equipment) Regulations", ["WEEE Regulations", "Communications Act", "Computer Misuse Act"],
    "They require workstation assessments, breaks and eye tests on request.", "dse-regs");
  Q("context", "Which regulations deal with recycling old electronic equipment?",
    "WEEE", ["DSE", "RIPA", "UK GDPR"],
    "Waste Electrical and Electronic Equipment rules say it must be collected and recycled properly.", "weee");
  Q("context", "What does an acceptable use policy (AUP) do?",
    "Sets out what people may and may not do with the organisation's IT",
    ["Lists all hardware", "Sets the price of services", "Describes the backup times"],
    "It protects the organisation and makes expectations clear.", "aup");
  Q("context", "Reading all staff emails without telling them is most likely to cause which problem?",
    "Legal and ethical problems around monitoring and privacy",
    ["Faster networks", "Lower licence costs", "Better backups"],
    "Monitoring must be open, for a clear purpose, and within the law.", "monitoring-privacy");
  Q("context", "Which statement about ethics and the law is correct?",
    "Something can be legal but still unethical",
    ["If it is legal it is always ethical", "Ethics and law are the same", "Ethics only matter to large firms"],
    "Ethical issues are about what is right, which the law does not always cover.", "ethics-overview");
  Q("context", "Which law replaced the Interception of Communications Act 1985 for interception rules?",
    "RIPA 2000", ["DSE Regulations", "Copyright Act", "WEEE"],
    "RIPA 2000 and the Lawful Business Practice Regulations govern monitoring of business communications.", "ripa-lbp");

  /* ---- Designing and evaluating ---- */
  Q("design", "Which four strands must an IT service delivery solution cover?",
    "Information requirements, data requirements, hardware and software options, managing infrastructure and users",
    ["Cost, time, quality, scope", "Plan, build, test, release", "Strategy, catalogue, report, template"],
    "Examiners often see hardware covered well and data and information missed.", "solution-coverage");
  Q("design", "Which is an INFORMATION requirement rather than a data requirement?",
    "Managers need a weekly stock report for all shops",
    ["Customer records are backed up nightly", "Data is stored in the UK", "A database holds 50,000 records"],
    "Information is what people need to know. Data requirements describe the raw data behind it.", "information-vs-data-design");
  Q("design", "Which of these is one of the B4 factors when selecting information and data?",
    "Compatibility", ["Weather", "Tax", "Rent"],
    "Others include corporate message, processing cost, productivity, privacy, reliability, security, size, quality, user experience, accessibility, user needs and working practices.", "information-considerations");
  Q("design", "A new system cannot read the file format the old one uses. Which factor was ignored?",
    "Compatibility", ["Corporate message", "Privacy", "Accessibility"],
    "Compatibility is about working with what already exists.", "compatibility");
  Q("design", "A website that works with screen readers and keyboard control supports which factor?",
    "Accessibility", ["Processing cost", "Scalability", "Corporate message"],
    "Accessibility means people with different needs can use the service.", "accessibility-factor");
  Q("design", "Which is a good evaluation sentence?",
    "It is cheaper, but with one part time technician an outage could last days, so managed support is worth the extra cost.",
    ["It is cheaper.", "The system has many features.", "The system is good because it is good."],
    "Evaluation weighs strengths and weaknesses and reaches a reasoned judgement.", "evaluate-solution");
  Q("design", "In Activity 5, which sentence is an implication?",
    "Because data moves to the cloud, shops need a backup connection and accounts must be set up before launch.",
    ["The system stores data in the cloud.", "The cloud is a good choice.", "Cloud storage is popular."],
    "An implication says what will happen or must be done because of the design.", "implication-vs-benefit");
  Q("design", "Which putting-in approach rolls a system out one site at a time?",
    "Phased rollout", ["Big bang", "Parallel running only", "Retirement"],
    "Phased rollouts lower risk. A big bang changes everything at once.", "implementation-impact");
  Q("design", "Running the old and new systems together for a while is called:",
    "Parallel running", ["Big bang", "Pilot only", "Decommissioning"],
    "It gives a safety net if the new system has problems.", "implementation-impact");
  Q("design", "The B2 list of factors that can help or limit a solution includes:",
    "Costs, legal, location, risks, scalability, security and sustainability",
    ["Weather, music, fashion", "Only costs", "Only technology"],
    "Eleven factors: technology, costs, environmental, ethical, legal, location, moral, risks, scalability, security, sustainability.", "b2-factors");

  /* ---- Information and data ---- */
  Q("data", "Which is INFORMATION rather than data?",
    "37 bikes in stock at Exeter, 12 fewer than last week",
    ["37", "A barcode number", "A list of raw till scans"],
    "Information is data processed and put in context.", "data-vs-information");
  Q("data", "Decisions about opening a new shop next year are what level of information?",
    "Strategic", ["Operational", "Management", "Technical"],
    "Strategic decisions are long term and affect the whole organisation.", "info-levels");
  Q("data", "Today's repair job list for mechanics is mostly which level of information?",
    "Operational", ["Strategic", "Management", "Political"],
    "Operational information supports day to day work.", "info-levels");
  Q("data", "What do the three Vs stand for?",
    "Volume, velocity, variety", ["Value, version, vendor", "Virtual, visual, voice", "Verify, validate, view"],
    "How much data, how fast it arrives, and how many types.", "three-vs");
  Q("data", "Orders arriving very quickly on sale day is an example of which V?",
    "Velocity", ["Volume", "Variety", "Verification"],
    "Velocity is the speed data arrives or must be processed.", "three-vs");
  Q("data", "Which pair of data types shows high variety?",
    "Text, photos, video and payment records", ["Only numbers", "Only text", "Only dates"],
    "Variety is about the different forms data takes.", "three-vs");
  Q("data", "In the CIA triad, integrity means:",
    "Data is accurate and not changed wrongly", ["Only the right people can see it", "It is available at all times", "It is encrypted"],
    "Confidentiality is who can see it. Availability is when it can be used.", "cia-triad");
  Q("data", "A login that limits who can see customer data mainly supports:",
    "Confidentiality", ["Availability", "Scalability", "Integrity only"],
    "Controls on who can see data protect confidentiality.", "cia-triad");

  /* ---- Software ---- */
  Q("software", "Which is an operating system?",
    "Windows", ["Excel", "Antivirus", "A web browser"],
    "The operating system runs the device and lets other programs use the hardware.", "operating-system");
  Q("software", "Antivirus and backup tools are examples of:",
    "Utility software", ["Application software", "Operating systems", "Expert systems"],
    "Utility software maintains and protects a computer.", "utility-software");
  Q("software", "Software whose code anyone can see, change and share is:",
    "Open source", ["Proprietary", "Licensed only", "Freeware only"],
    "Open source is often free but support may be community based.", "open-source-proprietary");
  Q("software", "Which is a drawback of proprietary software?",
    "Licence costs and less freedom to change it", ["Nobody supports it", "It is always free", "Code is public"],
    "Proprietary software usually has good support but costs money.", "open-source-proprietary");
  Q("software", "SaaS stands for:",
    "Software as a Service", ["Storage as a System", "Server and a Service", "Security as a Standard"],
    "Ready to use software provided over the internet.", "saas");
  Q("software", "Which service gives you virtual servers to install and manage your own software on?",
    "IaaS", ["SaaS", "PaaS", "CMS"],
    "Infrastructure as a Service rents you the building blocks. You manage everything above them.", "iaas");
  Q("software", "Which model suits an organisation with only one part time technician?",
    "SaaS, because the provider looks after servers and updates", ["IaaS, because it needs most skill", "On premises servers only", "No IT at all"],
    "SaaS puts most of the maintenance with the provider.", "saas");
  Q("software", "WordPress is an example of a:",
    "Content management system", ["Operating system", "Expert system", "Utility"],
    "A CMS lets people edit website content without writing code.", "cms");
  Q("software", "What does virtualisation allow?",
    "Several virtual computers to run on one physical machine", ["One computer to be turned into many monitors", "Free internet access", "Faster printers"],
    "Each virtual machine has its own operating system.", "virtualisation-containerisation");
  Q("software", "A benefit of cloud computing is:",
    "Capacity can be added or removed as demand changes", ["It never needs internet", "You control the provider's staff", "Data is always stored in your building"],
    "Scalability and on demand use are key benefits. Internet is needed and you rely on the provider.", "cloud-computing");

  /* ---- Hardware ---- */
  Q("hardware", "A switch:",
    "Connects devices inside one network", ["Joins your network to the internet", "Stores data permanently", "Blocks all websites"],
    "A router joins networks. A switch connects devices within one.", "switch");
  Q("hardware", "A router:",
    "Joins networks together, such as a local network to the internet", ["Only connects PCs in one room", "Stores backups", "Prints documents"],
    "Many routers include a firewall and Wi-Fi.", "router");
  Q("hardware", "What is the typical maximum length of a UTP cable run?",
    "100 metres", ["10 metres", "1 kilometre", "10 kilometres"],
    "Beyond about 100 metres a signal weakens, so use a switch or fibre.", "utp-cable");
  Q("hardware", "Which cable is best for a fast link between two buildings?",
    "Fibre optic", ["UTP Cat5e", "A power lead", "HDMI"],
    "Fibre uses light, goes far and is not affected by electrical interference.", "utp-cable");
  Q("hardware", "A firewall:",
    "Checks network traffic against rules and blocks what is not allowed", ["Cools the server", "Copies data", "Speeds up Wi-Fi"],
    "It protects against unwanted access.", "firewall");
  Q("hardware", "Redundancy means:",
    "Having a spare or duplicate so one failure does not stop the service", ["Deleting old files", "Having too many staff", "Buying the cheapest option"],
    "Examples: backup router, second power supply, mirrored disks.", "raid-redundancy");
  Q("hardware", "Is RAID a backup?",
    "No, it protects against a disk failing but not deletion, fire or ransomware", ["Yes, it is a full backup", "Yes, it is stored off site", "Only for small files"],
    "You still need separate backups.", "raid-redundancy");
  Q("hardware", "What is bandwidth?",
    "How much data a connection can carry in a given time", ["How long a cable is", "The cost of broadband", "The size of a file"],
    "More users and larger files need more bandwidth.", "bandwidth-speed");
  Q("hardware", "A NAS is:",
    "A storage device connected to the network for sharing files and backups", ["A type of router", "A wireless card", "A printer"],
    "Network attached storage suits small organisations but still needs its own backup.", "nas");
  Q("hardware", "A second 4G router that takes over when broadband fails is an example of:",
    "Redundancy", ["Virtualisation", "Open source", "Monitoring"],
    "A backup route keeps the service available.", "raid-redundancy");

  /* ---- Managing services ---- */
  Q("manage", "Giving staff only the access their job needs is called:",
    "Least privilege", ["Open access", "Full access", "Shared passwords"],
    "It reduces the damage if an account is misused or compromised.", "user-management");
  Q("manage", "What should happen to a leaver's account?",
    "It should be removed or disabled promptly", ["It should stay active for a year", "It should be shared with the team", "Nothing"],
    "Old accounts are a security risk.", "user-management");
  Q("manage", "Which is NOT normally in an asset register?",
    "Customers' payment card numbers", ["Serial number", "Location", "Warranty details"],
    "An asset register records hardware and software, not sensitive customer data.", "asset-management");
  Q("manage", "Why do updates and patches matter?",
    "They fix bugs and security holes", ["They always make systems slower", "They remove the need for backups", "They are optional for security"],
    "Out of date systems are a major risk.", "updates-upgrades");
  Q("manage", "When should a major update be applied?",
    "After testing, at a quiet time, with a way to go back", ["Straight away on all machines during opening hours", "Never", "Only when something fails"],
    "Planning and testing reduce the risk of new problems.", "updates-upgrades");
  Q("manage", "Which is a physical security measure?",
    "A locked comms cabinet", ["Multi factor authentication", "Encryption", "Anti malware"],
    "The others are technical measures.", "security-measures");
  Q("manage", "Which is a technical security measure?",
    "Multi factor authentication", ["A visitor book", "CCTV", "A locked door"],
    "Technical measures protect data and systems.", "security-measures");
  Q("manage", "The 3-2-1 backup rule means:",
    "3 copies, on 2 types of storage, with 1 off site", ["3 backups per day", "2 backups, 1 server, 3 users", "1 copy in 3 places"],
    "Spreading copies reduces the chance of losing all of them.", "backup-dr");
  Q("manage", "Why should you test restoring from a backup?",
    "A backup that has never been restored might not work", ["To make it bigger", "To delete old files", "It is not needed"],
    "Testing proves the backup is usable.", "backup-dr");
  Q("manage", "If a service is available 99% of the time in a year, roughly how much downtime is that?",
    "About 3.65 days", ["About 36 days", "About 8.8 hours", "About 1 hour"],
    "1% of 365 days is 3.65 days. 99.9% is about 8.8 hours.", "availability");
  Q("manage", "Which is a benefit of using an external managed provider?",
    "Expert cover when in house staff are limited", ["Total control of everything", "No contracts to manage", "Never any outages"],
    "The drawbacks are less control and dependence on the provider.", "in-house-vs-external");
  Q("manage", "Why does data location matter when choosing a cloud provider?",
    "The law that applies depends on where data is stored and processed", ["Cloud data has no location", "Only the price matters", "It does not affect the law"],
    "UK rules on international transfers still apply.", "jurisdiction");
  Q("manage", "Which is a good reason to train staff on a new system?",
    "It reduces mistakes, support calls and security risks", ["It makes the system cheaper", "It avoids the need for passwords", "It replaces backups"],
    "Training should suit the roles and shift patterns.", "staff-training");

  /* ---- Exam technique ---- */
  Q("exam", "How many marks is the Part B set task worth?",
    "68", ["60", "100", "40"],
    "8 + 8 + 20 + 12 + 16 for the activities, plus 4 for technical language.", "task-structure");
  Q("exam", "How long is the supervised Part B task?",
    "8 hours", ["3 hours", "1 hour", "2 days"],
    "Spread across sessions as your centre decides.", "task-structure");
  Q("exam", "Which activity carries the most marks?",
    "Activity 3, the solution (20 marks)", ["Activity 1 (8 marks)", "Activity 4 (12 marks)", "Activity 5 (16 marks)"],
    "It also has the longest advised time, 3 hours.", "activity-3");
  Q("exam", "What may you take into Part B?",
    "Up to two sides of your own hard copy A4 notes", ["Your laptop", "Anything you like", "Past papers"],
    "Check your centre's instructions for the exact rules.", "notes-rules");
  Q("exam", "Which activity do examiners report as the weakest each series?",
    "Activity 5, implications", ["Activity 1", "Activity 2", "Activity 3"],
    "Learners list benefits or repeat the design instead of explaining consequences.", "activity-5");
  Q("exam", "Which command word needs a judgement at the end?",
    "Evaluate", ["Identify", "State", "Outline"],
    "Evaluate weighs strengths and weaknesses and reaches a conclusion.", "command-words");
  Q("exam", "Which is the commonest way to lose marks across all activities?",
    "Giving generic answers that are not linked to the scenario", ["Using technical words", "Writing a plan", "Saving the file"],
    "Use scenario names, numbers, budgets and constraints in every point.", "common-mistakes");
  Q("exam", "What is the best use of the notes you prepare in Part A?",
    "Short, scannable points, tables and laws you can find fast", ["A full essay", "A copy of the specification", "Empty pages"],
    "Notes are used in Part B, so make them quick to use.", "part-a");
  Q("exam", "What is the advised time for Activity 4?",
    "1 hour 30 minutes", ["1 hour", "3 hours", "30 minutes"],
    "Activities 4 and 5 both have 1.5 hours.", "time-plan");
  Q("exam", "A good answer in Activity 3 should:",
    "Cover all four strands, include a diagram and justify choices with scenario facts", ["Only list hardware", "Avoid diagrams", "Repeat the strategy"],
    "Use headings that match the four strands.", "activity-3");
})();
