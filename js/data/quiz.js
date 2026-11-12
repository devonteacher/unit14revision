/* Multiple choice questions.
   Q(topic, question, correct answer, [three wrong answers], explanation, kb id to revise)
   M(topic, question, [correct answers], [wrong answers], explanation, kb id)  for "choose two or more" questions.
   The correct answer is listed first here. The app shuffles the options every time.
   Ids never change, because students' saved scores are kept against them. Add new questions at the end of a group. */
(function () {
  var n = 0, m = 0;
  function Q(topic, q, right, wrong, why, kb) {
    n += 1;
    U14.quiz.push({ id: "q" + n, topic: topic, q: q, right: right, wrong: wrong, why: why, kb: kb || "" });
  }
  function M(topic, q, right, wrong, why, kb) {
    m += 1;
    U14.quiz.push({ id: "m" + m, topic: topic, q: q, multi: true, right: right, wrong: wrong, why: why, kb: kb || "" });
  }


  /* ---- lifecycle ---- */
  Q("lifecycle", "What are the three stages of the IT service lifecycle used in this unit?",
    "Service identification, service delivery design, service management",
    ["Service planning, service building and service retirement across the whole year", "Requirements gathering, software coding and system testing for each project", "Purchase of equipment, installation on site and disposal at end of life"],
    "The lifecycle starts by finding needs, then designs the solution, then keeps managing and reviewing it. It loops back to the start.", "service-lifecycle");
  Q("lifecycle", "Which of these is NOT one of the six ITIL value chain activities?",
    "Retire",
    ["Plan", "Engage", "Deliver and support"],
    "The six activities are Plan, Improve, Engage, Design and transition, Obtain or build, and Deliver and support.", "value-chain");
  Q("lifecycle", "Which list shows the four dimensions of ITIL 4?",
    "Organisations and people, information and technology, partners and suppliers, value streams and processes",
    ["Hardware, software, networks, data and the people who support them, all covered in every design the team produces", "Plan, do, check and act, repeated for each service that is provided", "Cost, time, quality and risk, balanced for each stage of a project"],
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
    ["So that no changes are ever made to a system once it is live", "So staff can install whatever software they choose to use on their own machines", "To make the project finish sooner than the plan said it would, with fewer checks along the way"],
    "It controls change. It does not stop change.", "change-management");
  Q("lifecycle", "What does an SLA set out?",
    "The level of service a provider promises, such as uptime and fix times",
    ["The price of the hardware and the length of its warranty", "A list of the passwords that staff must use on the system", "The hours that staff may be in the building and the rooms in which they may use the system"],
    "A service level agreement is a written promise about service levels, often with consequences if missed.", "sla");
  Q("lifecycle", "Which statement best describes ITIL?",
    "A set of good practice guidance for running IT services",
    ["A law that all organisations in the UK must follow", "A piece of software used to log faults on a service desk", "A programming language used to write IT service tools"],
    "ITIL is advice. Organisations choose what suits them.", "itil");
  Q("lifecycle", "What does the first stage of the lifecycle, service identification, produce?",
    "An outline IT service strategy and an outline IT service catalogue",
    ["A finished network diagram with every device configured, labelled and ready to be installed", "A full set of user accounts and passwords for all staff", "A backup plan and a disaster recovery test report"],
    "It works out the needs, puts them in priority order and lists the services needed.", "service-identification");

  /* ---- methods ---- */
  Q("methods", "Which methodology completes each stage before the next one starts?",
    "Waterfall",
    ["Agile", "RAD", "Lean"],
    "Waterfall runs in order: requirements, design, build, test, release.", "waterfall");
  Q("methods", "A client is unsure what they want and expects needs to change. Which method fits best?",
    "Agile",
    ["Waterfall", "PRINCE2", "Big bang"],
    "Agile works in short cycles with regular feedback, so changing needs can be handled.", "agile");
  Q("methods", "Which methodology uses a business case that is checked throughout the project?",
    "PRINCE2",
    ["RAD", "Lean", "Scrum"],
    "PRINCE2 is formal, with set stages, clear roles and regular checks that the project is still worth doing.", "prince2");
  Q("methods", "Which method builds quick prototypes that users try and then improve?",
    "RAD (Rapid Application Development)",
    ["Waterfall (every stage finished before the next one starts)", "PRINCE2 (formal stages checked against a business case)", "Lean (cutting waste and delivering only what adds value)"],
    "RAD gets a working version in front of users early and improves it.", "rad");
  Q("methods", "Which method focuses on cutting waste and delivering only what gives value to the customer?",
    "Lean",
    ["Waterfall", "RAD", "PRINCE2"],
    "Lean comes from manufacturing and aims for less waste and constant improvement.", "lean");
  Q("methods", "What is a main drawback of Waterfall?",
    "Problems are often found late and it is hard to go back",
    ["It has no plan, so nobody knows what to build", "It cannot be used for software, only for buildings", "Users see the product every week and keep changing what they want"],
    "Testing is near the end, so mistakes in early stages can be expensive to fix.", "waterfall");
  Q("methods", "What is a typical drawback of PRINCE2 on a small project?",
    "It can involve a lot of paperwork and feel heavy",
    ["It has no roles, so nobody is in charge of the work", "It ignores the budget and the business case", "It only works on projects that last less than a week"],
    "PRINCE2 suits large projects. On a small one the control can be more than is needed.", "prince2");

  /* ---- strategy ---- */
  Q("strategy", "What is an IT service strategy?",
    "A document listing the IT services needed in priority order, with reasons",
    ["A list of every device owned, with its age, its value and the place where it is kept", "A guide telling staff how to use each system in their day to day work", "A set of passwords and access levels for every member of staff"],
    "In Activity 1 you list requirements, set priorities and explain each with a fact from the brief.", "it-service-strategy");
  Q("strategy", "What does an IT service catalogue contain?",
    "Each IT service with a description of what it must achieve",
    ["The staff timetable and the room each person works in", "The prices charged to customers for each of the services on offer", "Only the serial numbers of the hardware that is owned"],
    "The catalogue lists services and describes the requirements for each.", "it-service-catalogue");
  Q("strategy", "Which of these is the better way to write a service requirement?",
    "One stock list that every shop and the website can see",
    ["Buy new stock control software for every shop in the group", "Get a faster server for the Exeter back office", "Use cloud storage so shops can share files"],
    "A requirement states the need. Jumping straight to a product comes later.", "service-requirement");
  Q("strategy", "Why should priorities be justified using facts from the brief?",
    "It shows judgement and links the answer to this organisation",
    ["Because every requirement should be given a high priority", "Because facts make the answer look longer and neater", "It is not needed, because the examiner already has the brief"],
    "Marking everything high shows no judgement. Reasons from the scenario show you understand the organisation.", "prioritising");
  Q("strategy", "Which is an example of a customer need rather than an organisational need?",
    "Seeing real stock levels online before travelling to a shop",
    ["Reducing the number of stock losses across all the shops", "Cutting the monthly IT budget so that more can be spent elsewhere", "Reducing staff overtime when stock is counted each week"],
    "Customer needs are about what the buyer wants. Organisational needs are about how the business runs.", "organisational-vs-customer-needs");

  /* ---- roles ---- */
  Q("roles", "Who designs the overall structure of an IT system?",
    "Architect",
    ["Technician", "Service desk", "Developer"],
    "The architect decides how the parts fit together. The developer then builds it.", "architect");
  Q("roles", "Who is the first point of contact when someone has an IT problem?",
    "Service desk staff",
    ["Project manager", "Architect", "Developer"],
    "They log the issue, fix simple things and pass on harder ones.", "service-desk-staff");
  Q("roles", "Who controls the budget, timetable and risks of an IT project?",
    "Project manager",
    ["Technician", "Service desk", "Architect"],
    "Project managers plan, control and report on a project.", "project-manager");
  Q("roles", "Who installs and maintains hardware and networks on site?",
    "Technician",
    ["Project manager", "Architect", "Developer"],
    "Technicians look after the day to day running of the solution.", "technician");
  Q("roles", "Which is a benefit of managing IT services in a structured way?",
    "Services stay available and continue when needed",
    ["Staff no longer need any training on the systems", "Customers are not needed to use the services", "Hardware never fails once it has been set up properly"],
    "Continuity and availability is one of the listed benefits, alongside standards and automation.", "lifecycle-benefits");

  /* ---- orgs ---- */
  Q("orgs", "A bakery that bakes and sells bread is mainly which type of organisation?",
    "Product based",
    ["Service based", "Voluntary sector", "Primary industry"],
    "It makes and sells something people can hold.", "product-vs-service-org");
  Q("orgs", "A charity run by trustees is part of which sector?",
    "Voluntary",
    ["Public", "Private", "Primary"],
    "Voluntary sector organisations are non profit.", "org-sectors");
  Q("orgs", "Which is a secondary industry?",
    "Manufacturing",
    ["Farming", "Banking", "Mining"],
    "Primary collects raw materials, secondary makes products, tertiary provides services.", "primary-secondary-tertiary");
  Q("orgs", "Which organisational function would use stock control and supplier ordering?",
    "Supply chain management",
    ["Staff recruitment", "Marketing and sales", "Customer relations"],
    "Supply chain systems track stock, orders and deliveries.", "org-functions");
  Q("orgs", "In the context of this unit, who are customers?",
    "People or groups outside the organisation who use its product or service",
    ["Only the people who pay for a product in cash, rather than by card or online", "People who work for the organisation and use its IT every day", "The members of the IT team who support its computer systems"],
    "Clients and consumers count as customers. Staff are users.", "customers-definition");
  Q("orgs", "A construction firm works on remote sites. Which IT need is most likely?",
    "Mobile devices and secure file transfer",
    ["Large desktop servers installed on every site", "A fixed network with a socket at every desk", "Printed forms that are posted back to head office each week"],
    "People work away from an office, so mobile access and safe transfer matter.", "sector-it-needs");

  /* ---- diagrams ---- */
  Q("diagrams", "What does a data flow diagram show?",
    "How data moves through a process, where it is stored and where it goes",
    ["The physical layout of a room, with the distance from the door to each socket and cable", "Who reports to whom in each department of the organisation", "The cost of each device and when it will need replacing"],
    "Entities, processes, data stores and labelled arrows show how data moves.", "data-flow-diagram");
  Q("diagrams", "Which diagram shows who reports to whom?",
    "Functional chart",
    ["Network diagram", "Floor plan", "Data flow diagram"],
    "A functional chart shows structure: teams, managers and roles.", "functional-chart");
  Q("diagrams", "Why does a floor plan matter when planning a network?",
    "It shows distances and where to place sockets, cables and access points",
    ["It shows which software licences each room will need to buy for its computers", "It lists every customer who will use the network, with their contact details", "It sets the budget for each device that will be placed in each room"],
    "Copper network cable has a maximum run of about 100 metres, so distance matters.", "floor-plan");
  Q("diagrams", "Which five things help you find an organisation's requirements?",
    "Purpose and type, aims and goals, customer experience, staff, locations",
    ["Colour, size, speed, price and weight of the equipment that is being bought", "Hardware, software, cables, power and printers in each room of the building", "Sales, tax, rent, wages and stock levels for the year"],
    "These are the sources of requirements listed in the specification.", "requirements-sources");
  Q("diagrams", "A network diagram should show which of these?",
    "Devices and how they connect, with the connection types labelled",
    ["Staff wages and the cost of each device in the building", "A list of all the laws that apply to the organisation, its staff and its customers", "Employee timetables and the rooms they work in"],
    "Use standard symbols and label links, such as cable type or Wi-Fi.", "network-diagram");

  /* ---- context ---- */
  Q("context", "Scalability means:",
    "Coping with more or less demand without being rebuilt",
    ["Being cheap enough to buy for a small organisation", "Being easy to use without any training", "Being secure against attacks from outside the network"],
    "Scalable systems can grow or shrink with demand.", "scalability");
  Q("context", "Which law makes it a crime to access a computer system without permission?",
    "Computer Misuse Act 1990",
    ["Data Protection Act 2018", "Health and Safety at Work Act 1974", "Regulation of Investigatory Powers Act 2000"],
    "It covers unauthorised access, access with intent and acts that impair a computer.", "computer-misuse-act");
  Q("context", "Which law covers copying software without a licence?",
    "Copyright, Designs and Patents Act 1988",
    ["Computer Misuse Act 1990", "Communications Act 2003", "Data Protection Act 2018"],
    "Software is protected by copyright, so you need the right licences.", "copyright-act");
  Q("context", "How long does an organisation normally have to respond to a subject access request?",
    "One month",
    ["24 hours", "72 hours", "One year"],
    "People can ask to see their personal data. The normal deadline is one month.", "data-protection");
  Q("context", "How soon must a serious personal data breach be reported to the ICO?",
    "Within 72 hours",
    ["Within 24 hours", "Within one month", "Within one year"],
    "Serious breaches must be reported within 72 hours of becoming aware.", "data-protection");
  Q("context", "What is the maximum fine under UK GDPR for the most serious breaches?",
    "£17.5 million or 4% of worldwide turnover, whichever is higher",
    ["£8.7 million or 2% of worldwide turnover, whichever is higher, for any breach", "£17.5 million or 4% of UK turnover, whichever is lower", "£500,000 plus £5,000 for each person affected"],
    "The higher tier is £17.5 million or 4% of annual worldwide turnover.", "data-protection");
  Q("context", "Which regulations relate to workstation set up for people who use screens a lot?",
    "Health and Safety (Display Screen Equipment) Regulations",
    ["Waste Electrical and Electronic Equipment Regulations", "Privacy and Electronic Communications Regulations 2003 (PECR)", "Control of Substances Hazardous to Health Regulations"],
    "They require workstation assessments, breaks and eye tests on request.", "dse-regs");
  Q("context", "Which regulations deal with recycling old electronic equipment?",
    "WEEE",
    ["DSE", "RIPA", "UK GDPR"],
    "Waste Electrical and Electronic Equipment rules say it must be collected and recycled properly.", "weee");
  Q("context", "What does an acceptable use policy (AUP) do?",
    "Sets out what people may and may not do with the organisation's IT",
    ["Lists every device the organisation owns, where each is kept and who is using it", "Sets the price charged to customers for each IT service", "Describes when backups run and who may restore them"],
    "It protects the organisation and makes expectations clear.", "aup");
  Q("context", "Reading all staff emails without telling them is most likely to cause which problem?",
    "Legal and ethical problems around monitoring and privacy",
    ["Slower networks, because the mailbox files grow too large", "Higher licence costs, because each mailbox needs a new licence", "Worse backups, because email is stored in more than one place"],
    "Monitoring must be open, for a clear purpose, and within the law.", "monitoring-privacy");
  Q("context", "Which statement about ethics and the law is correct?",
    "Something can be legal but still unethical",
    ["If it is legal, it is always the right thing to do", "Ethics and the law are the same thing written differently", "Ethics only matter to large organisations with many staff"],
    "Ethical issues are about what is right, which the law does not always cover.", "ethics-overview");
  Q("context", "Which law replaced the Interception of Communications Act 1985 for interception rules?",
    "RIPA 2000",
    ["DSE Regulations", "Copyright Act", "WEEE"],
    "RIPA 2000 and the Lawful Business Practice Regulations govern monitoring of business communications.", "ripa-lbp");

  /* ---- design ---- */
  Q("design", "Which four strands must an IT service delivery solution cover?",
    "Information requirements, data requirements, hardware and software options, managing infrastructure and users",
    ["Cost, time, quality and scope, with each one having its own risk log, a named owner and a review each month", "Plan, build, test and release, with a review after each stage", "Strategy, catalogue, report and template, each written separately"],
    "Examiners often see hardware covered well and data and information missed.", "solution-coverage");
  Q("design", "Which is an INFORMATION requirement rather than a data requirement?",
    "Managers need a weekly stock report for all shops",
    ["Customer records are backed up to a second site every night", "The database holds about 50,000 records across all the shops", "Customer details must be stored on servers inside the UK"],
    "Information is what people need to know. Data requirements describe the raw data behind it.", "information-vs-data-design");
  Q("design", "Which of these is one of the B4 factors when selecting information and data?",
    "Compatibility",
    ["Weather", "Tax", "Rent"],
    "Others include corporate message, processing cost, productivity, privacy, reliability, security, size, quality, user experience, accessibility, user needs and working practices.", "information-considerations");
  Q("design", "A new system cannot read the file format the old one uses. Which factor was ignored?",
    "Compatibility",
    ["Corporate message", "Privacy", "Accessibility"],
    "Compatibility is about working with what already exists.", "compatibility");
  Q("design", "A website that works with screen readers and keyboard control supports which factor?",
    "Accessibility",
    ["Processing cost", "Scalability", "Corporate message"],
    "Accessibility means people with different needs can use the service.", "accessibility-factor");
  Q("design", "Which is a good evaluation sentence?",
    "It costs less, but one part time technician could mean days of downtime, so managed support is worth paying for.",
    ["It is cheaper and has many features, so it is clearly the best choice for the organisation, whatever its needs.", "The system has online booking, stock reports and a mobile app, which makes it a very good system.", "It is the best option because most organisations in the same sector have chosen to use it."],
    "Evaluation weighs strengths and weaknesses and reaches a reasoned judgement.", "evaluate-solution");
  Q("design", "In Activity 5, which sentence is an implication?",
    "Because data moves to the cloud, shops need a backup connection and accounts must be set up before launch.",
    ["The system stores customer and stock data in the cloud, which all four shops and the website can reach at any time.", "The cloud is a good choice because it is flexible, popular and easy to use for everyone.", "Cloud storage is used by many organisations and is provided by some very large companies."],
    "An implication says what will happen or must be done because of the design.", "implication-vs-benefit");
  Q("design", "Which putting-in approach rolls a system out one site at a time?",
    "Phased rollout",
    ["Big bang", "Parallel running only", "Retirement"],
    "Phased rollouts lower risk. A big bang changes everything at once.", "implementation-impact");
  Q("design", "Running the old and new systems together for a while is called:",
    "Parallel running",
    ["Big bang", "Pilot only", "Decommissioning"],
    "It gives a safety net if the new system has problems.", "implementation-impact");
  Q("design", "The B2 list of factors that can help or limit a solution includes:",
    "Costs, legal, location, risks, scalability, security and sustainability",
    ["Weather, transport links, fashion trends, music and local events in the area", "Staff birthdays, office layout, brand colours and logo design", "Programming language, screen size, keyboard layout and mouse type"],
    "Eleven factors: technology, costs, environmental, ethical, legal, location, moral, risks, scalability, security, sustainability.", "b2-factors");

  /* ---- data ---- */
  Q("data", "Which is INFORMATION rather than data?",
    "37 bikes in stock at Exeter, 12 fewer than last week",
    ["A list of every till scan from the Exeter shop this week", "The barcode number printed on each bike frame in the shop", "The number 37 stored in a field of the stock database"],
    "Information is data processed and put in context.", "data-vs-information");
  Q("data", "Decisions about opening a new shop next year are what level of information?",
    "Strategic",
    ["Operational", "Management", "Technical"],
    "Strategic decisions are long term and affect the whole organisation.", "info-levels");
  Q("data", "Today's repair job list for mechanics is mostly which level of information?",
    "Operational",
    ["Strategic", "Management", "Political"],
    "Operational information supports day to day work.", "info-levels");
  Q("data", "What do the three Vs stand for?",
    "Volume, velocity, variety",
    ["Value, version, vendor", "Virtual, visual, voice", "Verify, validate, view"],
    "How much data, how fast it arrives, and how many types.", "three-vs");
  Q("data", "Orders arriving very quickly on sale day is an example of which V?",
    "Velocity",
    ["Volume", "Variety", "Verification"],
    "Velocity is the speed data arrives or must be processed.", "three-vs");
  Q("data", "Which pair of data types shows high variety?",
    "Text, photos, video and payment records",
    ["Sales figures, stock counts and prices stored in one table", "Staff names, addresses and phone numbers in one spreadsheet", "Daily takings recorded as numbers in the same format each day"],
    "Variety is about the different forms data takes.", "three-vs");
  Q("data", "In the CIA triad, integrity means:",
    "Data is accurate and not changed wrongly",
    ["Only the right people can see it", "It can be reached whenever it is needed", "It is scrambled so that others cannot read it"],
    "Confidentiality is who can see it. Availability is when it can be used.", "cia-triad");
  Q("data", "A login that limits who can see customer data mainly supports:",
    "Confidentiality",
    ["Availability", "Scalability", "Integrity only"],
    "Controls on who can see data protect confidentiality.", "cia-triad");

  /* ---- software ---- */
  Q("software", "Which is an operating system?",
    "Windows",
    ["Excel", "Antivirus", "A web browser"],
    "The operating system runs the device and lets other programs use the hardware.", "operating-system");
  Q("software", "Antivirus and backup tools are examples of:",
    "Utility software",
    ["Application software", "Operating systems", "Expert systems"],
    "Utility software maintains and protects a computer.", "utility-software");
  Q("software", "Software whose code anyone can see, change and share is:",
    "Open source",
    ["Proprietary", "Licensed only", "Freeware only"],
    "Open source is often free but support may be community based.", "open-source-proprietary");
  Q("software", "Which is a drawback of proprietary software?",
    "Licence costs and less freedom to change it",
    ["Nobody can fix it when something goes wrong", "The code is public, so anyone can copy it", "It can never be updated after it has been bought"],
    "Proprietary software usually has good support but costs money.", "open-source-proprietary");
  Q("software", "SaaS stands for:",
    "Software as a Service",
    ["Storage as a System", "Server and a Service", "Security as a Standard"],
    "Ready to use software provided over the internet.", "saas");
  Q("software", "Which service gives you virtual servers to install and manage your own software on?",
    "IaaS",
    ["SaaS", "PaaS", "CMS"],
    "Infrastructure as a Service rents you the building blocks. You manage everything above them.", "iaas");
  Q("software", "Which model suits an organisation with only one part time technician?",
    "SaaS, because the provider looks after servers and updates",
    ["IaaS, because the organisation manages the servers itself", "On premises servers, because they need the least looking after", "PaaS, because it lets staff build their own custom apps"],
    "SaaS puts most of the maintenance with the provider.", "saas");
  Q("software", "WordPress is an example of a:",
    "Content management system",
    ["Operating system", "Expert system", "Utility"],
    "A CMS lets people edit website content without writing code.", "cms");
  Q("software", "What does virtualisation allow?",
    "Several virtual computers to run on one physical machine",
    ["One computer to be split into many separate monitors", "Free internet access across every site in the organisation", "Printers to work faster by sharing one print queue"],
    "Each virtual machine has its own operating system.", "virtualisation-containerisation");
  Q("software", "A benefit of cloud computing is:",
    "Capacity can be added or removed as demand changes",
    ["It never needs an internet connection to work", "The customer controls the provider's staff and buildings", "Data is always stored inside the customer's own building"],
    "Scalability and on demand use are key benefits. Internet is needed and you rely on the provider.", "cloud-computing");

  /* ---- hardware ---- */
  Q("hardware", "A switch:",
    "Connects devices inside one network",
    ["Joins your network to the internet", "Stores data permanently for later use", "Blocks all websites by default"],
    "A router joins networks. A switch connects devices within one.", "switch");
  Q("hardware", "A router:",
    "Joins networks together, such as a local network to the internet",
    ["Connects the computers inside one room to each other, but does not connect to anything outside it", "Stores backup copies of files for the whole network", "Checks every file for viruses before it is opened"],
    "Many routers include a firewall and Wi-Fi.", "router");
  Q("hardware", "What is the typical maximum length of a UTP cable run?",
    "100 metres",
    ["10 metres", "1 kilometre", "10 kilometres"],
    "Beyond about 100 metres a signal weakens, so use a switch or fibre.", "utp-cable");
  Q("hardware", "Which cable is best for a fast link between two buildings?",
    "Fibre optic",
    ["UTP Cat5e", "A power lead", "HDMI"],
    "Fibre uses light, goes far and is not affected by electrical interference.", "utp-cable");
  Q("hardware", "A firewall:",
    "Checks network traffic against rules and blocks what is not allowed",
    ["Stops the server overheating by controlling the temperature in the server room", "Copies files to a second location every night after closing", "Makes wireless signals stronger so they reach every room"],
    "It protects against unwanted access.", "firewall");
  Q("hardware", "Redundancy means:",
    "Having a spare or duplicate so one failure does not stop the service",
    ["Removing old files and accounts that are no longer needed, to free up space", "Having more staff than the organisation needs for the work", "Buying the cheapest equipment so that less money is wasted"],
    "Examples: backup router, second power supply, mirrored disks.", "raid-redundancy");
  Q("hardware", "Is RAID a backup?",
    "No, it protects against a disk failing but not deletion, fire or ransomware",
    ["Yes, because the data is copied to a second disk straight away", "Yes, because it keeps a copy of the data at another site", "No, because it only works on laptops and cannot protect a server that holds shared files"],
    "You still need separate backups.", "raid-redundancy");
  Q("hardware", "What is bandwidth?",
    "How much data a connection can carry in a given time",
    ["The physical length of the cable between two devices", "The monthly price paid to the broadband provider", "The amount of storage space that a single file takes up"],
    "More users and larger files need more bandwidth.", "bandwidth-speed");
  Q("hardware", "A NAS is:",
    "A storage device connected to the network for sharing files and backups",
    ["A type of router that joins two separate networks together and sends the traffic between them", "A wireless card that lets a computer connect to Wi-Fi", "A printer that can be shared across the whole network"],
    "Network attached storage suits small organisations but still needs its own backup.", "nas");
  Q("hardware", "A second 4G router that takes over when broadband fails is an example of:",
    "Redundancy",
    ["Virtualisation", "Open source", "Monitoring"],
    "A backup route keeps the service available.", "raid-redundancy");

  /* ---- manage ---- */
  Q("manage", "Giving staff only the access their job needs is called:",
    "Least privilege",
    ["Open access", "Full access", "Shared passwords"],
    "It reduces the damage if an account is misused or compromised.", "user-management");
  Q("manage", "What should happen to a leaver's account?",
    "It should be removed or disabled promptly",
    ["It should stay active for a year in case they return", "It should be shared with the team so that work can carry on", "Nothing needs to happen, because it will expire by itself"],
    "Old accounts are a security risk.", "user-management");
  Q("manage", "Which is NOT normally in an asset register?",
    "Customers' payment card numbers",
    ["The serial number of each device", "Where each device is kept", "Warranty end date and supplier"],
    "An asset register records hardware and software, not sensitive customer data.", "asset-management");
  Q("manage", "Why do updates and patches matter?",
    "They fix bugs and security holes",
    ["They make systems slower so that staff do less work", "They remove the need to keep any backups", "They are only needed if something has stopped working"],
    "Out of date systems are a major risk.", "updates-upgrades");
  Q("manage", "When should a major update be applied?",
    "After testing, at a quiet time, with a way to go back",
    ["Straight away on every machine during opening hours", "Only once something has already stopped working", "Never, because updates always cause new faults"],
    "Planning and testing reduce the risk of new problems.", "updates-upgrades");
  Q("manage", "Which is a physical security measure?",
    "A locked comms cabinet",
    ["Multi factor authentication", "Encryption", "Anti malware"],
    "The others are technical measures.", "security-measures");
  Q("manage", "Which is a technical security measure?",
    "Multi factor authentication",
    ["A visitor book", "CCTV", "A locked door"],
    "Technical measures protect data and systems.", "security-measures");
  Q("manage", "The 3-2-1 backup rule means:",
    "3 copies, on 2 types of storage, with 1 off site",
    ["3 backups every day, kept for 2 weeks and 1 month", "2 copies, on 1 server, protected by 3 passwords", "1 copy, stored in 3 different rooms in the building"],
    "Spreading copies reduces the chance of losing all of them.", "backup-dr");
  Q("manage", "Why should you test restoring from a backup?",
    "A backup that has never been restored might not work",
    ["It makes the backup file smaller so it uses less space", "It deletes old files so that the next backup is quicker", "It is not needed, because backups work whenever they finish"],
    "Testing proves the backup is usable.", "backup-dr");
  Q("manage", "If a service is available 99% of the time in a year, roughly how much downtime is that?",
    "About 3.65 days",
    ["About 36 days", "About 8.8 hours", "About 1 hour"],
    "1% of 365 days is 3.65 days. 99.9% is about 8.8 hours.", "availability");
  Q("manage", "Which is a benefit of using an external managed provider?",
    "Expert cover when in house staff are limited",
    ["Complete control of every part of the service", "No contract or service agreement has to be managed", "A promise that there will never be an outage"],
    "The drawbacks are less control and dependence on the provider.", "in-house-vs-external");
  Q("manage", "Why does data location matter when choosing a cloud provider?",
    "The law that applies depends on where data is stored and processed",
    ["Cloud data has no physical location, because it is stored online and moves freely", "Only the price matters, because the law is the same everywhere", "Location only affects how fast the data can be reached"],
    "UK rules on international transfers still apply.", "jurisdiction");
  Q("manage", "Which is a good reason to train staff on a new system?",
    "It reduces mistakes, support calls and security risks",
    ["It makes the system cheaper to buy, licence and keep running", "It means the organisation no longer needs passwords", "It replaces the need for regular backups of the data"],
    "Training should suit the roles and shift patterns.", "staff-training");

  /* ---- exam ---- */
  Q("exam", "How many marks is the Part B set task worth?",
    "68",
    ["60", "100", "40"],
    "8 + 8 + 20 + 12 + 16 for the activities, plus 4 for technical language.", "task-structure");
  Q("exam", "How long is the supervised Part B task?",
    "8 hours",
    ["3 hours", "1 hour", "2 days"],
    "Spread across sessions as your centre decides.", "task-structure");
  Q("exam", "Which activity carries the most marks?",
    "Activity 3, the solution (20 marks)",
    ["Activity 1, the strategy (8 marks)", "Activity 4, the evaluation (12 marks)", "Activity 5, the implications (16 marks)"],
    "It also has the longest advised time, 3 hours.", "activity-3");
  Q("exam", "What may you take into Part B?",
    "Up to two sides of your own hard copy A4 notes",
    ["Your own laptop with the notes saved on it", "Any resources you like, as long as they are your own", "Past papers and mark schemes printed for revision"],
    "Check your centre's instructions for the exact rules.", "notes-rules");
  Q("exam", "Which activity do examiners report as the weakest each series?",
    "Activity 5, implications",
    ["Activity 1, strategy", "Activity 2, catalogue", "Activity 3, solution"],
    "Learners list benefits or repeat the design instead of explaining consequences.", "activity-5");
  Q("exam", "Which command word needs a judgement at the end?",
    "Evaluate",
    ["Identify", "State", "Outline"],
    "Evaluate weighs strengths and weaknesses and reaches a conclusion.", "command-words");
  Q("exam", "Which is the commonest way to lose marks across all activities?",
    "Giving generic answers that are not linked to the scenario",
    ["Using too many technical words taken from the specification", "Writing a plan before you start each activity", "Saving the file with the name the task asks for"],
    "Use scenario names, numbers, budgets and constraints in every point.", "common-mistakes");
  Q("exam", "What is the best use of the notes you prepare in Part A?",
    "Short, scannable points, tables and laws you can find fast",
    ["A full essay copied out neatly in your best handwriting", "A copy of the whole specification printed in small writing", "Blank pages, so you can write fresh notes on the day"],
    "Notes are used in Part B, so make them quick to use.", "part-a");
  Q("exam", "What is the advised time for Activity 4?",
    "1 hour 30 minutes",
    ["1 hour", "3 hours", "30 minutes"],
    "Activities 4 and 5 both have 1.5 hours.", "time-plan");
  Q("exam", "A good answer in Activity 3 should:",
    "Cover all four strands, include a diagram and justify choices with scenario facts",
    ["Cover hardware in great detail and leave out the information and data strands completely", "Avoid diagrams, because they take too long to draw", "Repeat the Activity 1 strategy under new headings"],
    "Use headings that match the four strands.", "activity-3");

  /* ---- Choose two or more ---- */
  M("lifecycle", "Which TWO of these are among the six ITIL value chain activities?",
    ["Engage", "Deliver and support"],
    ["Retire", "Test", "Procure"],
    "The six activities are Plan, Improve, Engage, Design and transition, Obtain or build, and Deliver and support.", "value-chain");
  M("lifecycle", "Which TWO of these could be set out in a service level agreement?",
    ["The percentage of time the service will be available", "How quickly the provider will fix a fault"],
    ["The colour scheme and layout of the provider's website", "A list of the passwords that staff must use to log in", "The price of the provider's own hardware and software"],
    "An SLA is a written promise about service levels, such as uptime and fix times, often with consequences if they are missed.", "sla");
  M("strategy", "Which TWO are written as requirements (needs) rather than as products?",
    ["One stock list that every shop and the website can see", "Customers can book a repair online at any time"],
    ["Buy a new file server for the back office in Exeter", "Use Microsoft 365 for email and files in every shop", "Install a new router in each of the four shops"],
    "A requirement says what must be achieved. A product is one way of meeting it, and it comes after the need.", "service-requirement");
  M("context", "Which TWO are the main laws that protect personal data in the UK?",
    ["UK GDPR", "Data Protection Act 2018"],
    ["Computer Misuse Act 1990", "WEEE Regulations", "Copyright, Designs and Patents Act 1988"],
    "UK GDPR and the Data Protection Act 2018 work together. The other laws cover unauthorised access, recycling and copying.", "data-protection");
  M("context", "Which THREE things must an organisation do under UK GDPR?",
    ["Keep personal data secure", "Report a serious breach to the ICO within 72 hours", "Answer a subject access request within one month"],
    ["Delete all customer data at the end of every week", "Publish staff records on its public website", "Keep every record for at least ten years"],
    "Security, breach reporting and subject access are all duties. Data should be kept only as long as needed, and personal records should not be made public.", "data-protection");
  M("context", "Which TWO are examples of using IT unethically, even if no law is broken?",
    ["Reading staff private messages without a good reason", "Using customer data to target people in ways they did not expect"],
    ["Choosing a strong password policy for all staff accounts", "Telling staff clearly how the monitoring system works", "Backing up the customer database every night to a second site"],
    "Something can be legal but still unethical. Monitoring and data use need a clear reason and open communication.", "ethics-overview");
  M("design", "Which TWO are INFORMATION requirements rather than data requirements?",
    ["Managers need a weekly stock report for every shop", "Mechanics need to see today's repair jobs on a tablet"],
    ["Customer records are backed up every night to a second site", "All data is held on servers that are inside the UK", "The database must be able to hold 50,000 customer records"],
    "Information requirements say what people need to know and see. Data requirements say what is stored, where, and how it is protected.", "information-vs-data-design");
  M("data", "Which TWO of these are among the three Vs of data?",
    ["Volume", "Variety"],
    ["Version", "Vendor", "Visual"],
    "The three Vs are volume, velocity and variety.", "three-vs");
  M("data", "Which TWO are parts of the CIA triad?",
    ["Integrity", "Availability"],
    ["Authority", "Scalability", "Accessibility"],
    "The CIA triad is confidentiality, integrity and availability.", "cia-triad");
  M("software", "Which TWO are examples of utility software?",
    ["Antivirus program", "Backup software"],
    ["Spreadsheet program", "Web browser", "Operating system"],
    "Utility software helps look after the computer or its data. A spreadsheet and a browser are application software.", "utility-software");
  M("software", "Which TWO are benefits of cloud computing for a small organisation?",
    ["Capacity can be added or removed as demand changes", "The provider looks after the servers and updates"],
    ["No internet connection is ever needed", "The organisation controls the provider's data centre", "Data never has to be backed up once it is in the cloud"],
    "Scalability and less maintenance are the main benefits. Cloud services need an internet connection and still need backing up.", "cloud-computing");
  M("hardware", "Which TWO are examples of redundancy?",
    ["A second internet connection that takes over if the first one fails", "A spare power supply fitted inside a server"],
    ["A password that must be changed every 90 days", "A policy that bans personal email at work", "A training course on using the till software"],
    "Redundancy is a spare or duplicate part, so one failure does not stop the service.", "raid-redundancy");
  M("hardware", "Which TWO things does RAID NOT protect against?",
    ["A file being deleted by mistake", "Ransomware encrypting the data"],
    ["One disk in the array failing", "A disk wearing out after years of use", "A faulty disk being replaced while the system runs"],
    "RAID keeps the system running if a disk fails, but it is not a backup. Deleted or encrypted files are copied to every disk.", "raid-redundancy");
  M("manage", "Which THREE are technical security measures?",
    ["Multi factor authentication", "Encryption of stored data", "Anti malware software"],
    ["A locked comms cabinet", "A visitor book at reception", "CCTV in the server room"],
    "Technical measures are done by software or settings. Locks, visitor books and CCTV are physical measures.", "security-measures");
  M("manage", "Which TWO belong to the 3-2-1 backup rule?",
    ["Keeping one copy off site", "Using two different types of storage"],
    ["Backing up three times a day", "Keeping every copy for two weeks", "Testing a restore once a year"],
    "3-2-1 means 3 copies, on 2 types of storage, with 1 copy off site.", "backup-dr");
  M("exam", "Which TWO are true about the notes you take into Part B?",
    ["They must be your own work", "They can be up to two sides of A4"],
    ["They can be typed notes saved on a USB stick", "They may include a copy of the specification", "They can be shared with a friend in the room"],
    "You may take up to two sides of your own hard copy A4 notes. Check your own task booklet for the exact rules.", "notes-rules");
  M("exam", "Which THREE are common reasons for lost marks in examiner reports?",
    ["Generic answers that are not linked to the scenario", "Describing the solution instead of evaluating it", "Covering hardware but missing data and information"],
    ["Using more diagrams than the task asks for", "Writing short, scannable sentences in tables", "Saving the work regularly while the task is open"],
    "Examiner reports repeat these three messages. The other options are not reasons for losing marks.", "common-mistakes");
})();
