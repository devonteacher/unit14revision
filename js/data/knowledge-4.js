/* Knowledge base part 4: hardware and networks, managing services, and the task and exam technique. */
(function () {
  var kb = U14.kb;

  /* ---------- Hardware and networks ---------- */
  kb.push(
    {
      id: "hardware-categories", topic: "hardware", term: "Types of hardware in an IT service",
      aka: ["hardware", "hardware types", "devices", "hardware list", "peripherals", "end user devices"],
      short: "Hardware covers end user devices, servers, network equipment, storage, peripherals and the cabling that joins them.",
      more: [
        "End user devices: PCs, laptops, tablets, phones, tills, scanners and printers.",
        "Servers and storage: machines that hold shared data and run shared services.",
        "Network equipment: switches, routers, wireless access points, firewalls and cabling.",
        "Choose by what the job needs, using the hardware and software selection factors."
      ],
      example: "Quay Cycles: till PCs and barcode scanners in each shop, a server in Exeter, a router and switch in each shop.",
      spec: "D2", related: ["server-vs-pc", "switch", "router", "hw-sw-factors"]
    },
    {
      id: "server-vs-pc", topic: "hardware", term: "Server versus desktop PC",
      aka: ["server", "servers", "desktop", "pc vs server", "file server", "what is a server"],
      short: "A server is built to share a service with many users and run all the time. A desktop PC is built for one person to work at.",
      more: [
        "Servers have more reliable parts, more memory and storage, spare power supplies and are often kept in a cool, secure room.",
        "Typical roles: file server, print server, web server, database server, mail server.",
        "A server is a single point of failure if there is only one and it has no backup."
      ],
      example: "The single nine year old Exeter server is a risk because if it fails, every shop stops.",
      spec: "D2", related: ["raid-redundancy", "backup-dr", "on-premises"]
    },
    {
      id: "switch", topic: "hardware", term: "Switch",
      aka: ["network switch", "switches", "switch or router", "switch vs router"],
      short: "A switch connects devices inside one network and sends data only to the device it is meant for.",
      more: [
        "Works inside the local network (LAN). It does not connect you to the internet on its own.",
        "More ports means more wired devices can connect. Some switches provide power to devices (PoE).",
        "Compare with a router, which joins different networks together."
      ],
      example: "A shop switch links the tills, the office PC and the printer.",
      spec: "D2", related: ["router", "utp-cable", "network-diagram"]
    },
    {
      id: "router", topic: "hardware", term: "Router",
      aka: ["routers", "home router", "internet connection device", "gateway"],
      short: "A router joins networks together. It connects your local network to the internet and sends data between them.",
      more: [
        "It decides where data should go. It usually includes a firewall and often Wi-Fi.",
        "A second router with a different connection, such as 4G, gives a backup if the main line fails."
      ],
      example: "Each shop router connects the shop network to broadband and out to the cloud services.",
      spec: "D2", related: ["switch", "wap", "firewall", "connectivity"]
    },
    {
      id: "wap", topic: "hardware", term: "Wireless access point (WAP)",
      aka: ["access point", "wireless access point", "wireless"],
      short: "A device that lets wireless devices join a wired network. It extends Wi-Fi coverage.",
      more: ["Position matters: walls and distance weaken signal.", "Use strong encryption and a separate guest network for customers."],
      example: "A shop gets one access point for the workshop and one for the shop floor.",
      spec: "D2", related: ["router", "security-measures"]
    },
    {
      id: "firewall", topic: "hardware", term: "Firewall",
      aka: ["firewalls", "network firewall", "hardware firewall", "software firewall"],
      short: "Hardware or software that checks network traffic against rules and blocks what is not allowed.",
      more: ["Protects the network from outside threats and can limit what inside devices can reach.", "Most routers include a basic one. Larger sites use a dedicated firewall."],
      example: "The firewall blocks outside access to the stock server except through the secure VPN.",
      spec: "D2, D3", related: ["security-measures", "router"]
    },
    {
      id: "nas", topic: "hardware", term: "NAS (network attached storage)",
      aka: ["nas", "network attached storage", "shared storage", "storage options", "san"],
      short: "A storage device connected to the network so several users can save and share files. Often used for shared files and backups.",
      more: ["Cheaper and simpler than a full server for small organisations.", "Needs its own backup. A single NAS in one room is still a single point of failure."],
      example: "A small office using a NAS for shared documents and nightly backups.",
      spec: "D2", related: ["backup-dr", "raid-redundancy"]
    },
    {
      id: "patch-panel", topic: "hardware", term: "Patch panel and cabinets",
      aka: ["patch panel", "comms cabinet", "rack", "server rack", "structured cabling"],
      short: "A patch panel is a board of network sockets in a cabinet. Cables from walls end at it and short patch leads link it to switches, which keeps cabling tidy and easy to change.",
      more: ["Cabinets also protect equipment and can be locked."],
      example: "A cabinet in the Exeter back office holds the switch, patch panel and router.",
      spec: "D2", related: ["switch", "utp-cable"]
    },
    {
      id: "utp-cable", topic: "hardware", term: "UTP cable and fibre optic",
      aka: ["utp", "cat5e", "cat6", "twisted pair", "ethernet cable", "fibre", "fibre optic", "cable types", "copper cable"],
      short: "UTP (unshielded twisted pair) is the common copper network cable. Fibre optic cable uses light, goes much further and is not affected by electrical interference.",
      more: [
        "UTP (Cat5e, Cat6): cheap, easy to fit, normally up to 100 metres per run.",
        "Fibre: expensive and more specialist, but very fast over long distances and between buildings.",
        "Wired is generally faster, more stable and more secure than wireless."
      ],
      example: "UTP inside a shop. Fibre between two buildings on a campus.",
      spec: "D2", related: ["switch", "bandwidth-speed", "connectivity"]
    },
    {
      id: "bandwidth-speed", topic: "hardware", term: "Bandwidth, speed and latency",
      aka: ["bandwidth", "speed", "latency", "mbps", "throughput", "download speed"],
      short: "Bandwidth is how much data a connection can carry in a given time. Speed is how fast data actually moves. Latency is the delay before data starts to arrive.",
      more: ["More users and bigger files need more bandwidth.", "Fast bandwidth with high latency can still feel slow for live use such as video calls."],
      example: "Ten staff on video calls need more bandwidth than ten staff on email.",
      spec: "D2", related: ["connectivity", "utp-cable"]
    },
    {
      id: "raid-redundancy", topic: "hardware", term: "Redundancy and RAID",
      aka: ["raid", "redundancy", "redundant", "mirroring", "failover", "single point of failure", "spare parts", "ups"],
      short: "Redundancy means having a spare or duplicate so one failure does not stop the service. RAID keeps copies of data across several disks so a disk can fail without losing data.",
      more: [
        "Examples: second power supply, UPS (battery backup), spare router, mirrored disks, a standby server.",
        "RAID is not a backup. It protects against a disk failing, not against deletion, fire or ransomware.",
        "Redundancy costs more, so match it to how badly an outage would hurt."
      ],
      example: "A 4G backup router for each shop. Mirrored disks in the server.",
      spec: "D2, D3", related: ["availability", "backup-dr", "server-vs-pc"]
    },
    {
      id: "connectivity", topic: "hardware", term: "Connectivity",
      aka: ["connection", "broadband", "fibre broadband", "4g", "5g", "leased line", "vpn", "internet connection"],
      short: "How sites, devices and users link to each other and to the internet. Options include broadband, fibre, leased lines, mobile data, wired and wireless links, and VPNs.",
      more: [
        "Think about speed, reliability, cost, security and a backup route.",
        "A VPN gives secure remote access across the internet."
      ],
      example: "Broadband in each shop, 4G as backup, VPN for the owner working from home.",
      spec: "D2", related: ["router", "bandwidth-speed", "network-diagram"]
    },
    {
      id: "d2-factors", topic: "hardware", term: "Factors in choosing hardware",
      aka: ["d2", "hardware selection", "hardware factors", "selecting hardware"],
      short: "Compare options using availability, cost, connectivity, capacity, ease of use, features, privacy, scalability and usability, then say which suits this organisation and why.",
      more: ["Always tie each factor to the scenario. \"It is cheaper\" is weak. \"It is cheaper, which matters because the monthly limit is £2,000\" is stronger."],
      example: "Refurbished PCs cut cost but may lack warranty and support.",
      spec: "D2, B4", related: ["hw-sw-factors", "evaluate-solution"]
    }
  );

  /* ---------- Managing services, security and change ---------- */
  kb.push(
    {
      id: "user-management", topic: "manage", term: "User management and access levels",
      aka: ["user accounts", "access levels", "permissions", "user permissions", "role based access", "joiners and leavers", "passwords", "managing users", "least privilege"],
      short: "Creating, changing and removing user accounts, and giving each person only the access their job needs.",
      more: [
        "Least privilege: give the minimum access required.",
        "Group people by role (for example shop staff, managers, admin) and set permissions by group.",
        "Set up new starters, change access when roles change, and remove leavers promptly.",
        "Strong password rules and multi factor authentication protect accounts."
      ],
      example: "Mechanics see repair jobs only. Managers see stock and sales. Only Dan has admin rights.",
      spec: "D3", related: ["security-measures", "cia-triad", "privacy-factor"]
    },
    {
      id: "asset-management", topic: "manage", term: "IT asset management",
      aka: ["asset register", "asset management", "asset lifecycle", "managing assets", "disposal", "asset tracking", "licence management"],
      short: "Keeping track of all hardware and software from purchase to safe disposal, so you know what you own, where it is, who has it, its condition and when to replace it.",
      more: [
        "Record: type, serial number, location, owner, purchase date, warranty and licence details.",
        "Plan replacement before things fail. Wipe data and recycle correctly at the end (see WEEE).",
        "Good records support security, budgeting and audits."
      ],
      example: "A register shows the Exeter server is nine years old and needs replacing.",
      spec: "D3", related: ["weee", "software-audit", "updates-upgrades"]
    },
    {
      id: "updates-upgrades", topic: "manage", term: "Updates, upgrades and patching",
      aka: ["updates", "upgrades", "patching", "patch", "patches", "security updates", "end of life", "maintenance"],
      short: "Updates and patches fix bugs and security holes. Upgrades move to a newer version with new features or capacity. Both need planning and testing.",
      more: [
        "Out of date systems are a major security risk.",
        "Test first, schedule outside busy times, keep a way to go back, tell users.",
        "Old software or hardware that is no longer supported (end of life) should be replaced."
      ],
      example: "Security updates on the tills are applied overnight after being tested on one machine.",
      spec: "D3", related: ["change-management", "asset-management", "security-measures"]
    },
    {
      id: "deployment", topic: "manage", term: "Deployment and rollout",
      aka: ["roll out", "rollout", "deploy", "installing new system", "go live", "phased", "big bang", "pilot"],
      short: "Getting a new system or device into use. Options include a pilot at one site, a phased rollout, or everything at once.",
      more: ["Plan testing, data transfer, training, support and a way back.", "Phased approaches reduce risk but take longer."],
      example: "Pilot new tills in one shop for two weeks, then roll out to the others.",
      spec: "D3", related: ["implementation-impact", "staff-training"]
    },
    {
      id: "security-measures", topic: "manage", term: "Security measures (physical and technical)",
      aka: ["security", "physical security", "technical security", "anti malware", "locks", "cctv", "protecting data", "access control"],
      short: "Physical measures protect equipment and places. Technical measures protect data and systems. A good design uses both, plus trained staff.",
      more: [
        "Physical: locked rooms and cabinets, cable locks, alarms, CCTV, visitor control, screen positioning.",
        "Technical: passwords and multi factor authentication, firewalls, anti malware, encryption, access levels, updates, backups, monitoring.",
        "People: training, clear policies such as an acceptable use policy."
      ],
      example: "Locked comms cabinet (physical). Encrypted laptops and multi factor sign in (technical).",
      spec: "D3, C2", related: ["cia-triad", "user-management", "aup", "firewall"]
    },
    {
      id: "backup-dr", topic: "manage", term: "Backup and disaster recovery",
      aka: ["backup", "backups", "disaster recovery", "restore", "3-2-1", "321 rule", "business continuity", "recovery", "off site backup", "rpo", "rto"],
      short: "A backup is a copy of data kept separately so it can be restored. Disaster recovery is the plan for getting systems and data working again after a serious failure.",
      more: [
        "A common rule is 3 copies, on 2 types of storage, with 1 off site.",
        "Test restores. A backup that has never been restored might not work.",
        "Include who does what, how long recovery can take, and how much data loss is acceptable."
      ],
      example: "Nightly backup to the cloud plus a weekly copy kept off site, with a restore test each quarter.",
      spec: "D3", related: ["availability", "raid-redundancy", "cia-triad"]
    },
    {
      id: "availability", topic: "manage", term: "Availability and downtime",
      aka: ["downtime", "uptime", "99.9", "availability percentage", "outage", "availability calculation"],
      short: "Availability is how much of the time a service is working when needed. Downtime is when it is not.",
      more: [
        "Availability % = (time available ÷ total time) × 100.",
        "99% over a year is about 3.65 days of downtime. 99.9% is about 8.8 hours. 99.99% is under an hour.",
        "Higher availability costs more, so match it to the business need. A shop on sale day needs it far more than at 2am."
      ],
      example: "The website was down 3 hours during the June sale, the busiest time, so the impact was far greater than 3 quiet hours.",
      spec: "D3", related: ["sla", "raid-redundancy", "backup-dr"]
    },
    {
      id: "in-house-vs-external", topic: "manage", term: "In house versus external support or hosting",
      aka: ["in house", "outsourcing", "outsource", "external provider", "managed service", "third party", "managed service provider", "msp", "contractor"],
      short: "In house means your own staff and equipment run the service. External means a provider does, such as a managed service or cloud host.",
      more: [
        "In house: control and quick local response, but staff cost, skills gaps and cover for absence.",
        "External: expertise and cover, predictable pricing, but less control, dependence on the provider and contracts to manage.",
        "A mixed approach is common."
      ],
      example: "With one technician working two days a week, an external provider covers the rest.",
      spec: "D3", related: ["cloud-computing", "jurisdiction", "sla"]
    },
    {
      id: "jurisdiction", topic: "manage", term: "Jurisdiction and where data is stored",
      aka: ["data location", "data sovereignty", "where is data stored", "overseas servers", "international data", "legal jurisdiction"],
      short: "The law that applies depends on where data is stored and processed. If a provider holds your data abroad, other countries’ laws may apply and UK rules on international transfers still matter.",
      more: ["Check where a provider stores data, what they do with it and what safeguards are in place."],
      example: "Choosing a cloud provider that stores UK customer data in UK or approved locations.",
      spec: "D3, A3", related: ["data-protection", "cloud-computing"]
    },
    {
      id: "staff-training", topic: "manage", term: "Staff training and support",
      aka: ["training", "training staff", "user training", "supporting staff", "managing staff", "induction"],
      short: "Staff need to know how to use new systems, follow security rules and ask for help. Training reduces mistakes, support calls and risk.",
      more: [
        "Plan it for the roles that need it, at times that suit shift patterns.",
        "Use quick guides, hands on sessions and refresher training. Keep records.",
        "Include security awareness, such as spotting phishing."
      ],
      example: "Two short sessions on the new tills, plus a one page guide kept at each till.",
      spec: "D3", related: ["customer-support", "working-practices", "implications"]
    },
    {
      id: "customer-support", topic: "manage", term: "Supporting customers",
      aka: ["customer support", "supporting customers", "help desk customers", "customer service it", "managing customers"],
      short: "Customers need clear information and a way to get help, such as FAQs, a contact form, phone or chat, with realistic response times.",
      more: ["Support hours should match when customers need it.", "Keep customer data safe and respect their privacy."],
      example: "A website FAQ and a repair booking contact form answered within one working day.",
      spec: "D3", related: ["service-desk-staff", "sla", "staff-training"]
    },
    {
      id: "responding-to-change", topic: "manage", term: "Responding to change",
      aka: ["change", "future changes", "growth", "new shop", "expansion", "future proofing", "future proof"],
      short: "A good solution can cope with change, such as growth, new sites, new laws or new technology, without being rebuilt.",
      more: ["Choose scalable options, keep records up to date and use change management to control what happens."],
      example: "Quay Cycles planning a Truro shop. Cloud services and standard kit make adding a site easier.",
      spec: "D3, B2", related: ["scalability", "change-management", "cloud-computing"]
    },
    {
      id: "performance-metrics", topic: "manage", term: "Monitoring performance",
      aka: ["performance", "metrics", "monitoring", "service reports", "service levels reporting", "logs"],
      short: "Measuring how well a service is doing, for example uptime, response times, number of incidents and user satisfaction, and using it to improve.",
      more: ["Compare results to targets in the SLA.", "Monitoring staff and systems must follow privacy law and be clearly explained."],
      example: "A monthly report: 99.8% uptime, 14 incidents, average fix time 5 hours.",
      spec: "D3", related: ["sla", "continual-improvement", "monitoring-privacy"]
    }
  );

  /* ---------- The task and exam technique ---------- */
  kb.push(
    {
      id: "task-structure", topic: "exam", term: "How the assessment is set up",
      aka: ["structure", "how is it marked", "68 marks", "marks split", "how many marks", "part a part b", "assessment structure", "time split", "8 hours", "exam format", "how long is the task"],
      short: "Two parts. Part A is research over up to 3 hours across 2 weeks, producing up to two A4 sides of notes. Part B is the 8 hour supervised set task worth 68 marks.",
      more: [
        "Activity 1, IT service strategy: 8 marks, about 1 hour.",
        "Activity 2, IT service catalogue: 8 marks, about 1 hour.",
        "Activity 3, IT service delivery solution: 20 marks, about 3 hours.",
        "Activity 4, management report evaluating the solution: 12 marks, about 1.5 hours.",
        "Activity 5, service management implications report: 16 marks, about 1.5 hours.",
        "Technical language across the task: 4 marks. 8 + 8 + 20 + 12 + 16 + 4 = 68.",
        "In Part B you have no internet. You may take in your own two sides of A4 notes."
      ],
      example: "Activity 3 carries the most marks and the most time, so it is where a plan and a diagram pay off.",
      spec: "Assessment", related: ["part-a", "part-b", "time-plan", "notes-rules"]
    },
    {
      id: "part-a", topic: "exam", term: "Part A: the research phase",
      aka: ["part a", "research", "research phase", "part a notes", "a4 notes"],
      short: "Up to 3 hours over 2 weeks to research the organisation and topics in the brief. You prepare your own notes (two sides of A4, hard copy) to take into Part B.",
      more: [
        "Research the organisation, general and custom software, hardware, networks, and which laws apply.",
        "Notes are marked by what you do with them in Part B, not by themselves. Make them usable: headings, key terms, laws with one line each, tables.",
        "Do not write essays in your notes. Use short points you can find fast.",
        "Part A is real assessment: you must work independently. This tool should not be used for Part A while the live task is open."
      ],
      example: "A grid of requirement types down the side and the organisation’s needs across the top.",
      spec: "Assessment", related: ["notes-rules", "part-b", "task-structure"]
    },
    {
      id: "part-b", topic: "exam", term: "Part B: the set task",
      aka: ["part b", "set task", "supervised", "supervised task", "the task", "8 hour task"],
      short: "The 8 hour supervised task in which you answer a scenario in five activities. You work alone on a computer, with no internet and no outside help.",
      more: [
        "Read the whole scenario first. Underline names, numbers, problems, constraints, dates, budget.",
        "Use the templates and name files exactly as asked.",
        "Save often and keep a copy of each finished activity as a PDF if the instructions say so.",
        "Use scenario facts in every answer."
      ],
      example: "Quay Cycles: four shops, 38 staff, a £30,000 set up budget, a nine year old server and a June sale.",
      spec: "Assessment", related: ["task-structure", "time-plan", "templates-naming"]
    },
    {
      id: "notes-rules", topic: "exam", term: "Notes you can take in",
      aka: ["notes", "a4 notes", "two sides", "what can i take in", "permitted notes"],
      short: "A maximum of two sides of A4, hard copy, prepared by you. Nothing else from outside, and no internet.",
      more: ["Check your centre’s instructions and the current assessment information for the exact rules.", "Make your notes easy to scan: headings, short lines, a table."],
      example: "Left column: requirement type. Right column: scenario fact and the law that applies.",
      spec: "Assessment", related: ["part-a", "part-b"]
    },
    {
      id: "time-plan", topic: "exam", term: "Planning your 8 hours",
      aka: ["time plan", "timing", "time management", "how long on each", "running out of time"],
      short: "Follow the advised times: 1 hour, 1 hour, 3 hours, 1.5 hours, 1.5 hours. That is 8 hours. Leave a few minutes at the end of each activity to check and save.",
      more: [
        "Examiners note that some learners run short on Activities 4 and 5, which carry 28 marks together.",
        "If you finish early, add scenario detail and check technical language rather than starting new content."
      ],
      example: "Finish Activity 3 on time even if the diagram is not perfect.",
      spec: "Assessment", related: ["task-structure", "activity-3"]
    },
    {
      id: "activity-1", topic: "exam", term: "Activity 1: Outline the IT service strategy (8 marks)",
      aka: ["activity 1", "a1", "strategy activity", "outline it service strategy", "service strategy task"],
      short: "Outline the organisation’s IT service strategy: what it is trying to achieve, what its IT must do to support that, and the needs of the organisation and of its customers.",
      more: [
        "Cover the current position, the aims, the main requirements and the limits such as budget and staff skills.",
        "Link to customers: who they are and what they expect.",
        "Keep it focused. Use the template.",
        "Reasons count. Say why a need matters in this scenario."
      ],
      example: "\"Four shops and a website must share one stock list, because customers expect to see what is in stock before travelling.\"",
      spec: "A1, A3, B1", related: ["it-service-strategy", "organisational-vs-customer-needs", "service-requirement"]
    },
    {
      id: "activity-2", topic: "exam", term: "Activity 2: IT service catalogue (8 marks)",
      aka: ["activity 2", "a2", "catalogue activity", "service catalogue task"],
      short: "Produce a catalogue of the IT services the organisation needs, grouped sensibly, each with enough detail to be useful, and prioritised.",
      more: [
        "Each service needs a clear name, what it does, who uses it and why it matters.",
        "Show priority and reasoning, using the template.",
        "Make sure services come from the scenario, not a generic list."
      ],
      example: "Stock and sales system: used by shop staff, high priority, needed for tills to work.",
      spec: "A1, B1", related: ["it-service-catalogue", "prioritising"]
    },
    {
      id: "activity-3", topic: "exam", term: "Activity 3: IT service delivery solution (20 marks)",
      aka: ["activity 3", "a3", "solution activity", "design activity", "solution task"],
      short: "Design a solution that meets the needs. It must cover information requirements, data requirements, hardware and software options, and managing infrastructure and users. You justify choices and include a diagram.",
      more: [
        "Use headings that match the four strands so nothing is missed.",
        "Show a diagram such as a network or data flow diagram and refer to it in your text.",
        "Justify each choice by linking it to a scenario fact.",
        "Examiner reports say learners often cover hardware well and miss data and information."
      ],
      example: "\"Cloud hosted stock system (software). Reason: Dan works two days a week, so the provider handles updates.\"",
      spec: "B3, B4, C1, C2, D1, D2, D3", related: ["solution-coverage", "information-considerations", "network-diagram"]
    },
    {
      id: "activity-4", topic: "exam", term: "Activity 4: Management report evaluating the solution (12 marks)",
      aka: ["activity 4", "a4", "evaluation activity", "evaluation report", "management report"],
      short: "A report to management evaluating how appropriate your Activity 3 solution is for current and future needs. Weigh strengths against weaknesses, compare with alternatives and end with a justified conclusion.",
      more: [
        "Evaluate the solution as a whole, not feature by feature.",
        "Cover current needs and future needs (for example a new shop).",
        "Use the scenario constraints: cost, skills, law, time.",
        "Do not just repeat Activity 3. Do not drift into a list of future developments."
      ],
      example: "\"The cloud service suits a part time technician, but if broadband is slow the shops cannot trade, so each shop needs a backup connection.\"",
      spec: "A1, B4", related: ["evaluate-solution", "evaluate-vs-describe"]
    },
    {
      id: "activity-5", topic: "exam", term: "Activity 5: Service management implications report (16 marks)",
      aka: ["activity 5", "a5", "implications activity", "implications report"],
      short: "A report on the implications of your solution: for implementing it, supporting staff, supporting customers and managing IT assets, taking account of constraints and changes.",
      more: [
        "It is the weakest activity every series. Most learners describe or list benefits instead of explaining consequences.",
        "Cover all four areas. Name actions, risks and consequences, and link to the scenario.",
        "Use the template and keep the structure clear."
      ],
      example: "\"Moving the data takes a weekend, so shops must trade on paper that Saturday. Staff need a short training session beforehand.\"",
      spec: "A1, D3", related: ["implications", "implication-vs-benefit", "implementation-impact"]
    },
    {
      id: "implication-vs-benefit", topic: "exam", term: "Implication or benefit or description?",
      aka: ["implication vs benefit", "implications vs benefits", "what is an implication", "difference between implication and benefit", "benefits or implications"],
      short: "A description says what something is. A benefit says what good it does. An implication says what will happen or must happen because of it, which may be good, bad or neutral.",
      more: [
        "Describe: \"The new system stores data in the cloud.\"",
        "Benefit: \"This means staff can see stock from any shop.\"",
        "Implication: \"Because data moves to the cloud, we need a backup connection and staff need a login for each person, so Dan must set up accounts before launch.\"",
        "Test: if you can add \"so what, and what do we need to do about it?\" you are on the right track."
      ],
      example: "Use the sorter game in Practice to test yourself.",
      spec: "Assessment", related: ["implications", "activity-5"]
    },
    {
      id: "evaluate-vs-describe", topic: "exam", term: "Evaluate versus describe",
      aka: ["evaluate or describe", "command words", "describe vs evaluate", "evaluate command word", "explain vs describe"],
      short: "Describe says what it is. Explain says how or why. Discuss looks at more than one side. Evaluate weighs strengths and weaknesses and reaches a justified judgement.",
      more: [
        "Describe: facts and detail.",
        "Explain: reasons and links, using because, so and therefore.",
        "Discuss: several views or factors.",
        "Evaluate: judge how well it works, compare, and give a conclusion with a reason."
      ],
      example: "\"It is cheaper\" is description. \"It is cheaper, but with one technician we risk long outages, so I would pay more for managed support\" is evaluation.",
      spec: "Assessment", related: ["evaluate-solution", "activity-4", "command-words"]
    },
    {
      id: "command-words", topic: "exam", term: "Command words",
      aka: ["identify", "state", "describe", "explain", "discuss", "evaluate", "assess", "compare", "justify", "analyse", "outline", "command word"],
      short: "The key verb tells you how deep to go. Identify and state are short. Describe gives detail. Explain gives reasons. Discuss, assess and compare look at several points. Evaluate and justify end with a judgement.",
      more: [
        "Identify or state: name it, briefly.",
        "Outline: main points, not full detail.",
        "Describe: what it is like.",
        "Explain: why or how, with a reason.",
        "Compare: similarities and differences.",
        "Assess or discuss: weigh factors and say how important they are.",
        "Evaluate or justify: judge and defend your choice."
      ],
      example: "\"Explain two factors\" needs two named factors each with a reason and a consequence.",
      spec: "Assessment", related: ["evaluate-vs-describe", "technical-language"]
    },
    {
      id: "technical-language", topic: "exam", term: "Using technical language (4 marks)",
      aka: ["technical language", "technical terms", "key words", "vocabulary", "use of technical language"],
      short: "Marks are given for using correct IT terms accurately and in context across the task. Use the proper word and show you know what it means.",
      more: [
        "Say \"switch\", \"router\", \"firewall\", \"SaaS\", \"scalability\", \"backup\", \"access level\", not \"the box\" or \"the internet thing\".",
        "Use terms in a sentence that proves understanding, not as a list of words.",
        "Spread them across all activities."
      ],
      example: "\"A firewall on each shop router limits what can reach the till network.\"",
      spec: "Assessment", related: ["command-words", "templates-naming"]
    },
    {
      id: "templates-naming", topic: "exam", term: "Templates, file names and submission",
      aka: ["file names", "naming", "templates", "pdf", "submission", "how do i name my files", "save as pdf"],
      short: "Use the supplied templates for the activities that provide them, name each file exactly as the task says, save often and submit each activity as a PDF if instructed.",
      more: [
        "Example from the Quay Cycles practice task: activity1strategy_[Surname]_[first letter of first name].",
        "Always check the exact instructions in your task booklet because they can change between series."
      ],
      example: "activity3solution_Smith_J.",
      spec: "Assessment", related: ["part-b", "time-plan"]
    },
    {
      id: "common-mistakes", topic: "exam", term: "Common mistakes that lose marks",
      aka: ["mistakes", "why do people lose marks", "lose marks", "examiner reports", "how to improve", "what do examiners say", "common errors", "weak answers"],
      short: "Examiner reports repeat the same messages: generic answers not tied to the scenario, benefits instead of implications, hardware only with no data and information, and evaluations that describe or only list future ideas.",
      more: [
        "Not using scenario facts: names, numbers, budget, staff and locations.",
        "Activity 5: listing benefits or repeating the design instead of explaining consequences.",
        "Activity 3: covering hardware but missing information and data requirements, or giving no justification.",
        "Activity 4: describing rather than evaluating, and not covering future needs.",
        "Running out of time on the later activities.",
        "Copying definitions from notes without applying them."
      ],
      example: "After every point ask: which fact from the scenario does this link to?",
      spec: "Assessment", related: ["past-paper-patterns", "implication-vs-benefit", "evaluate-vs-describe"]
    },
    {
      id: "past-paper-patterns", topic: "exam", term: "Patterns across past papers",
      aka: ["past papers", "past paper", "patterns", "previous papers", "past series", "what comes up", "repeat questions"],
      short: "Each series gives a new organisation but the same five activity shapes. The scenario changes, the skills do not.",
      more: [
        "Every scenario has a current set up with problems, a plan for change, a budget or limit, and customers with needs.",
        "Constraints such as small staff, ageing equipment, security worries and growth come up again and again.",
        "Practise with different sectors so you can apply the same method to a school, a clinic, a charity, a shop or a food firm.",
        "Use the Past Papers section to see how each scenario was approached."
      ],
      example: "Spot the \"trap\" in each scenario, for example a single server, an under skilled technician, or a deadline.",
      spec: "Assessment", related: ["common-mistakes", "task-structure"]
    },
    {
      id: "grading", topic: "exam", term: "Marks, bands and grades",
      aka: ["grade boundaries", "grade", "pass merit distinction", "bands", "band descriptors", "how are marks given", "mark scheme", "marking grid", "how is it marked"],
      short: "Each activity is marked against bands. Higher bands need clear reasoning, consistent links to the scenario and a balanced judgement, not just more content.",
      more: [
        "Marks come from how well you meet each band, not from counting points.",
        "Grade boundaries differ between series and are published by the awarding body after marking. Check the current information from your tutor.",
        "A longer answer does not score higher on its own. Relevant, reasoned and linked answers do."
      ],
      example: "\"Because\" and \"so\" sentences are what lift an answer into the upper bands.",
      spec: "Assessment", related: ["evaluate-vs-describe", "common-mistakes"]
    }
  );

  /* ---------- Law overview (links to the detailed law entries) ---------- */
  kb.push({
    id: "laws-overview", topic: "context", term: "Laws to know for Unit 14",
    aka: ["legislation", "laws", "acts", "which laws", "relevant legislation", "law list", "laws and regulations", "what laws should i know", "legal requirements"],
    short: "Eight sets of rules come up most: data protection, computer misuse, copyright, communications, interception and monitoring, health and safety, display screen equipment and electrical waste.",
    more: [
      "Data protection: UK GDPR with the Data Protection Act 2018. How personal data is used and kept safe.",
      "Computer Misuse Act 1990: unauthorised access to or damage of computers and data.",
      "Copyright, Designs and Patents Act 1988: licences for software and other creative work.",
      "Communications Act 2003: misuse of public communications networks and Ofcom.",
      "RIPA 2000 and the Lawful Business Practice Regulations 2000: when communications may be monitored.",
      "Health and Safety at Work Act 1974: safe workplaces, including cables and equipment.",
      "Health and Safety (Display Screen Equipment) Regulations 1992, amended 2002: safe screen use.",
      "WEEE Regulations 2013: recycling old electronic equipment.",
      "Pick the ones that really matter for the scenario and say what the organisation must do about each one."
    ],
    example: "A shop holding customer records: data protection first, then copyright for software licences and WEEE for the old PCs.",
    spec: "A3, B2", related: ["data-protection", "computer-misuse-act", "copyright-act", "communications-act", "ripa-lbp", "hswa", "dse-regs", "weee"]
  });
})();
