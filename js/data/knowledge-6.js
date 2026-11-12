/* Knowledge base part 6: security, data, service management, strategy and context terms.
   Extra definitions so the Ask page finds the exact term a student types, such as phishing, KPI or SWOT. */
(function () {
  var kb = U14.kb;
  function E(id, topic, term, aka, short, more, example, spec, related) {
    kb.push({ id: id, topic: topic, term: term, aka: aka, short: short, more: more, example: example, spec: spec, related: related });
  }

  /* ---------- Security ---------- */
  E("encryption", "manage", "Encryption",
    ["encryption", "encrypt", "encrypted", "encrypting", "decrypt", "cipher", "scrambling data", "wpa2", "wpa3", "bitlocker", "end to end encryption"],
    "Encryption scrambles data so only someone with the right key can read it, even if they get hold of the file or intercept the connection.",
    ["Data at rest: stored files and laptop drives are encrypted so a stolen device is not a data breach.",
     "Data in transit: HTTPS, VPNs and WPA3 Wi-Fi encrypt data as it travels.",
     "Encryption supports confidentiality in the CIA triad and is a sensible measure under data protection law."],
    "If a Quay Cycles laptop with customer details is stolen, drive encryption stops the thief reading the data.",
    "D3, C1", ["cia-triad", "vpn", "security-measures", "data-protection"]);

  E("phishing", "manage", "Phishing and social engineering",
    ["phishing", "spear phishing", "smishing", "vishing", "social engineering", "scam email", "fake email", "pretexting", "tailgating", "baiting"],
    "Phishing is a trick, often an email, that fools someone into clicking a bad link or giving away a password. Social engineering is the wider name for tricking people instead of attacking the technology.",
    ["Signs: urgent wording, an odd sender address, a link that does not match the real site, unexpected attachments.",
     "Tailgating is following someone through a secure door. Vishing is a phone call scam, and smishing is a text scam.",
     "Defence is training, multi factor authentication, email filtering and a simple way to report suspicious messages."],
    "A fake invoice email to the Quay Cycles office asks for bank details. Staff training and a reporting button reduce the risk.",
    "D3", ["security-measures", "staff-training", "mfa-authentication", "malware"]);

  E("malware", "manage", "Malware, viruses and ransomware",
    ["malware", "virus", "viruses", "ransomware", "trojan", "worm", "spyware", "antivirus", "anti virus", "anti-malware", "keylogger", "malicious software"],
    "Malware is software made to cause harm. Ransomware locks files until money is paid. Spyware watches what you do. Viruses and worms spread to other devices.",
    ["Spread through email attachments, bad downloads, USB sticks and unpatched software.",
     "Defences: anti malware software, regular updates, least privilege access, staff training and tested backups.",
     "A good offline or cloud backup is the best answer to ransomware because you can restore instead of paying."],
    "Ransomware encrypts the Quay Cycles stock database. A recent backup in a separate place lets the business restore.",
    "D3", ["backup-dr", "updates-upgrades", "security-measures", "phishing"]);

  E("mfa-authentication", "manage", "Authentication: passwords, multi factor and biometrics",
    ["mfa", "2fa", "multi factor authentication", "two factor authentication", "two step verification", "authentication", "authenticate", "biometrics", "biometric", "fingerprint", "password", "passwords", "password policy", "sso", "single sign on", "login", "log in"],
    "Authentication proves who you are. Multi factor authentication asks for two or more proofs, such as a password plus a code on your phone.",
    ["Three kinds of proof: something you know (password), something you have (phone or token) and something you are (fingerprint or face).",
     "Strong password rules, MFA and single sign on all improve security, but too many rules lead people to write passwords down.",
     "Authentication is not the same as authorisation, which decides what you are allowed to do once you are in."],
    "Quay Cycles managers need MFA before they can open payroll or customer records.",
    "D3", ["authorisation-access", "user-management", "security-measures", "cia-triad"]);

  E("authorisation-access", "manage", "Authorisation, access control and least privilege",
    ["authorisation", "authorization", "access control", "access rights", "permissions", "least privilege", "role based access", "rbac", "user rights", "admin rights", "privileges", "access levels"],
    "Authorisation decides what a signed in user may see and do. Least privilege means giving people only the access they need for their job.",
    ["Role based access gives rights to a job role, such as technician or manager, instead of to each person.",
     "Limits the damage from mistakes, stolen accounts and misuse.",
     "Review access when someone changes role and remove it immediately when they leave."],
    "A till operator can sell and refund up to a limit but cannot see payroll data.",
    "D3", ["user-management", "mfa-authentication", "aup", "security-measures"]);

  E("ddos-attacks", "manage", "Cyber attacks: DDoS, brute force and SQL injection",
    ["ddos", "dos", "denial of service", "distributed denial of service", "brute force", "sql injection", "man in the middle", "cyber attack", "cyber attacks", "hacking", "hacker", "hackers", "threat", "threats", "cyber threat", "zero day"],
    "A DDoS attack floods a service with traffic so real customers cannot use it. Brute force guesses passwords. SQL injection sends bad input to a database through a form.",
    ["DDoS: a website slows or goes down. Protect with filtering, cloud capacity and a provider that can absorb traffic.",
     "Brute force: stopped by strong passwords, lockout after failed tries and MFA.",
     "SQL injection: stopped by checking and cleaning all input on forms."],
    "A rival floods the Quay Cycles booking site on a bank holiday weekend. Cloud hosting with traffic filtering helps it stay up.",
    "D3", ["availability", "firewall", "security-measures", "web-hosting"]);

  E("pen-testing-audit", "manage", "Penetration testing, vulnerability scanning and security audits",
    ["penetration testing", "pen test", "pentest", "vulnerability scan", "vulnerability", "vulnerabilities", "patching", "patch", "security audit", "ethical hacking", "ethical hacker"],
    "A penetration test is a permitted, planned attack by experts to find weaknesses before criminals do. A vulnerability scan checks systems for known flaws.",
    ["Findings are ranked by risk and fixed, then tested again.",
     "Patching fixes known flaws. Many attacks use a hole for which a patch already existed.",
     "A security audit checks that policies, access and settings match what the organisation says it does."],
    "Before launching online booking, Quay Cycles asks a specialist to test the website for weaknesses.",
    "D3", ["updates-upgrades", "security-measures", "software-audit", "computer-misuse-act"]);

  E("zero-trust-defence", "manage", "Defence in depth and zero trust",
    ["defence in depth", "defense in depth", "layered security", "zero trust", "security layers", "layers of security", "physical security", "cctv", "lock", "locks"],
    "Defence in depth uses many layers of protection, so one failure does not let an attacker in. Zero trust means never trusting a device or user by default, inside or outside the network.",
    ["Layers: physical locks and CCTV, firewall, secure Wi-Fi, authentication, encryption, updates, backups and trained staff.",
     "Zero trust checks every request, every time, instead of trusting anyone who is on the office network.",
     "Mention physical security as well as software. A locked server room matters."],
    "A server room with a keypad lock, a firewall, MFA, encrypted drives and offsite backup is defence in depth.",
    "D3", ["security-measures", "firewall", "server-room", "mfa-authentication"]);

  E("hashing-integrity", "data", "Hashing, data integrity and data validation",
    ["hashing", "hash", "checksum", "integrity", "data integrity", "validation", "data validation", "verification", "accuracy", "data accuracy", "garbage in garbage out", "gigo"],
    "Data integrity means data is accurate and has not been changed by mistake or by someone who should not. Validation checks that data entered is sensible.",
    ["Validation examples: a postcode in the right format, a date that exists, a required field not left blank.",
     "A hash is a fixed code worked out from data. If the data changes, the hash changes, so it shows tampering.",
     "Bad data in gives bad information out."],
    "The repair form refuses an email address with no @ symbol and a phone number with letters in it.",
    "C1, D3", ["cia-triad", "data-vs-information", "information-considerations", "database-dbms"]);

  /* ---------- Data and law ---------- */
  E("gdpr-terms", "context", "GDPR terms: data subject, controller, processor and the ICO",
    ["gdpr", "uk gdpr", "data subject", "data controller", "data processor", "ico", "information commissioner", "subject access request", "sar", "personal data", "sensitive data", "special category", "data breach", "right to be forgotten", "consent", "lawful basis"],
    "The data subject is the person the data is about. The controller decides why and how personal data is used. A processor handles it on the controller's behalf. The ICO is the UK regulator.",
    ["Principles include lawful and fair use, limited purpose, minimum data, accuracy, limited storage, security and accountability.",
     "People can ask to see their data (a subject access request) and, in some cases, ask for it to be corrected or erased.",
     "Serious breaches must be reported to the ICO, usually within 72 hours."],
    "Quay Cycles is the controller of its customer list. A cloud email tool it uses to send offers is a processor.",
    "B2, D3", ["data-protection", "monitoring-privacy", "security-factor", "privacy-factor"]);

  E("data-types-formats", "data", "Data types and file formats",
    ["data type", "data types", "text", "integer", "boolean", "string", "file format", "file formats", "csv", "pdf", "jpeg", "png", "mp4", "structured data", "unstructured data", "numeric", "date format"],
    "Data is stored as types, such as text, number, date and yes or no. Files use formats, such as CSV for tables, PDF for documents and PNG or JPEG for images.",
    ["Structured data fits neatly in tables. Unstructured data, such as emails, photos and videos, does not.",
     "Pick a format by the job: PDF for sharing something that must not change, CSV for moving data between systems.",
     "Compatibility matters. The recipient must be able to open the format."],
    "Stock lists exported as CSV can be opened in the spreadsheet and the booking system.",
    "C1", ["information-considerations", "compatibility", "database-dbms"]);

  E("data-warehouse-analytics", "data", "Data warehouse, analytics and business intelligence",
    ["data warehouse", "data analytics", "analytics", "business intelligence", "bi", "dashboard", "dashboards", "reporting", "reports", "data mining", "trend analysis", "kpi dashboard", "data analysis"],
    "A data warehouse collects data from many systems in one place so it can be analysed. Business intelligence turns that data into reports and dashboards for decisions.",
    ["Analytics can show trends such as which shop sells the most, or which repairs take longest.",
     "Dashboards show key measures at a glance and update as data changes.",
     "Results are only as good as the data that goes in, so accuracy and consistency matter."],
    "Sales data from all four Quay Cycles shops feeds one dashboard showing the best selling products by week.",
    "C1, D1", ["big-data", "performance-metrics", "hashing-integrity", "info-levels"]);

  E("open-data-formats", "data", "Information quality: accurate, relevant, timely, complete and secure",
    ["information quality", "quality of information", "good information", "accurate", "relevant", "timely", "complete", "up to date", "characteristics of good information", "accessibility of information", "qualities of information"],
    "Good information is accurate, relevant, up to date, complete, suitable for its audience and delivered securely and in a usable format.",
    ["Out of date or incomplete information leads to poor decisions, for example ordering stock that is already in the stockroom.",
     "Match the level of detail to the user: an overview for managers, details for technicians.",
     "Links to information considerations in Part B and the information factors in the design."],
    "A technician needs the full repair history. A director needs a one page summary of repair times.",
    "C1, B2", ["information-considerations", "info-levels", "why-info-used", "quality-factor"]);

  /* ---------- Service management ---------- */
  E("kpi-metrics", "manage", "KPIs, metrics and service targets",
    ["kpi", "kpis", "key performance indicator", "metric", "metrics", "target", "targets", "measure", "measures", "slo", "service level objective", "first time fix", "response time", "resolution time", "csat", "customer satisfaction"],
    "A KPI is a measure that shows how well something is going against a target, such as the percentage of incidents fixed within 4 hours.",
    ["Choose measures that match the service goal: response time, resolution time, first time fix, availability, customer satisfaction.",
     "Compare results with the target in an SLA so you can see if the service is good enough.",
     "Review and act on the figures. Counting alone does not improve anything."],
    "Quay Cycles can set a target to answer 90 percent of till faults in 30 minutes and track it each week.",
    "D3", ["sla", "performance-metrics", "continual-improvement", "data-warehouse-analytics"]);

  E("ola-uc", "lifecycle", "OLA, underpinning contract and SLA compared",
    ["ola", "operational level agreement", "underpinning contract", "uc", "sla vs ola", "third party contract", "supplier contract", "contract", "service agreement", "service level agreement difference"],
    "An SLA is an agreement with the customer. An OLA is an agreement between teams inside the same organisation. An underpinning contract is an agreement with an outside supplier.",
    ["The three support each other: the SLA promise is only possible if the OLAs and contracts behind it are met.",
     "Example: a 4 hour SLA fix may need an OLA for the network team and a contract with the broadband supplier.",
     "Review all three when the service changes."],
    "Quay Cycles promises tills fixed in 4 hours. That depends on its supplier fixing the line within the same time.",
    "D3, B1", ["sla", "in-house-vs-external", "kpi-metrics"]);

  E("service-desk-lines", "roles", "Service desk, first, second and third line support and escalation",
    ["service desk", "help desk", "helpdesk", "first line", "second line", "third line", "level 1", "level 2", "level 3", "1st line", "2nd line", "3rd line", "escalation", "escalate", "ticket", "tickets", "ticketing", "single point of contact", "spoc"],
    "The service desk is the single point of contact for users. First line handles simple issues, second line solves harder ones, third line handles the most technical or involves suppliers. Escalation moves a ticket up.",
    ["Every issue is logged as a ticket with a priority, so nothing is lost and progress can be seen.",
     "Escalate when the issue is beyond the person's skills or time limit, or when it affects many users.",
     "Good first line support fixes most issues quickly and keeps the user informed."],
    "A password reset is first line. A faulty network switch moves to second or third line.",
    "D3", ["incident-management", "service-desk-staff", "customer-support", "technician"]);

  E("knowledge-base-faq", "manage", "Knowledge base, FAQs and self service",
    ["knowledge base", "knowledgebase", "faq", "faqs", "self service", "self-service", "how to guides", "user guides", "documentation", "troubleshooting guide", "user manual"],
    "A knowledge base is a store of answers and guides that users and support staff can search, so the same fault is not solved from scratch each time.",
    ["Self service lets users fix common issues themselves, such as resetting a password, which cuts calls to the desk.",
     "Articles need to be kept up to date and easy to find.",
     "Record the fix after each incident and add it."],
    "A short guide on connecting the shop printer saves the technician a visit.",
    "D3", ["customer-support", "problem-management", "staff-training", "continual-improvement"]);

  E("root-cause-workaround", "lifecycle", "Root cause, workaround and known error",
    ["root cause", "root cause analysis", "rca", "workaround", "work around", "known error", "known error database", "kedb", "fix", "permanent fix", "temporary fix"],
    "The root cause is the real reason something failed. A workaround is a temporary way to keep going. A known error is a problem with a known cause and a workaround.",
    ["Incident management restores service fast, often with a workaround.",
     "Problem management finds the root cause and arranges a permanent fix so the incident stops coming back.",
     "Record known errors so the service desk can give users the workaround quickly."],
    "Tills freeze each Monday. The workaround is a restart. The root cause turns out to be a weekend update that fails.",
    "D3", ["incident-management", "problem-management", "knowledge-base-faq"]);

  E("release-testing-deploy", "manage", "Testing, release and rollback",
    ["testing", "test plan", "uat", "user acceptance testing", "pilot", "phased rollout", "big bang", "parallel running", "rollback", "roll back", "release management", "release", "go live", "staging", "test environment", "implementation methods"],
    "Before a change goes live it is tested. A release is the move into live use. A rollback puts things back if it fails.",
    ["Pilot: try it with a small group first. Phased: roll out in stages. Parallel: run old and new together. Big bang: switch everyone at once.",
     "User acceptance testing lets real users check the system does the job.",
     "Always have a plan to go back, and choose a quiet time to change."],
    "Quay Cycles tries the new tills in one shop for two weeks before rolling out to the other three.",
    "D3, B2", ["deployment", "change-management", "implementation-impact", "staff-training"]);

  E("devops-scrum", "methods", "Scrum, sprints, Kanban, DevOps and MVP",
    ["scrum", "sprint", "sprints", "kanban", "devops", "mvp", "minimum viable product", "backlog", "product backlog", "user story", "user stories", "stand up", "daily stand up", "iteration", "increment", "scrum master", "product owner"],
    "Scrum is an agile way of working in short sprints with a backlog of tasks. Kanban shows work on a board. DevOps joins development and operations. An MVP is the simplest version that is useful.",
    ["Sprint: a fixed period, often 2 weeks, that ends with something usable. Daily stand ups keep the team in step.",
     "Kanban: To do, Doing, Done columns, limiting how much is in progress.",
     "MVP lets customers try the basics early so feedback shapes what is built next."],
    "Quay Cycles launches online booking for repairs only as an MVP, then adds hire in a second sprint.",
    "B1, D1", ["agile", "methodologies", "waterfall", "choosing-methodology"]);

  E("cmdb-config", "manage", "CMDB and configuration management",
    ["cmdb", "configuration management", "configuration item", "ci", "configuration management database", "inventory", "asset register", "asset tracking", "asset tag", "lifecycle of assets"],
    "A CMDB is a database of the IT items an organisation has and how they connect. Configuration management keeps it accurate.",
    ["It shows which devices and services depend on each other, so you can see what a fault or change will affect.",
     "An asset register is simpler. It lists items, owners, locations, warranty and age.",
     "Needs updating whenever something is added, moved or retired."],
    "If the shop router fails, the CMDB shows which tills and printers lose their connection.",
    "D3", ["asset-management", "change-management", "incident-management"]);

  E("remote-hybrid-working", "manage", "Remote and hybrid working, and remote support",
    ["remote working", "hybrid working", "work from home", "wfh", "home working", "remote support", "remote desktop", "remote access", "teleworking", "flexible working", "remote staff", "telecommuting", "working remotely"],
    "Remote working means staff work away from the main site, often at home. Hybrid splits time between home and the workplace. Remote support lets technicians fix devices over the network.",
    ["Needs a reliable connection, a VPN or secure cloud access, MFA and company laptops or a BYOD policy.",
     "Benefits: less travel, wider hiring pool and fewer office costs. Risks: weaker security, isolation and harder support.",
     "Remote desktop tools let the service desk fix a user's PC without a visit."],
    "A Quay Cycles accountant works from home two days a week using a VPN and a managed laptop.",
    "D2, D3", ["vpn", "mfa-authentication", "mobile-byod", "working-practices"]);

  /* ---------- Strategy and risk ---------- */
  E("swot-pestle", "strategy", "SWOT and PESTLE analysis",
    ["swot", "pestle", "pest", "strengths weaknesses opportunities threats", "political economic social technological legal environmental", "business analysis", "analysis tools", "external factors", "internal factors"],
    "SWOT lists an organisation's strengths, weaknesses, opportunities and threats. PESTLE looks at outside factors: political, economic, social, technological, legal and environmental.",
    ["Strengths and weaknesses are inside the organisation. Opportunities and threats come from outside.",
     "PESTLE helps explain why a change is needed, such as new laws or customer habits.",
     "Use the headings only if they help you reach a decision for the scenario."],
    "For Quay Cycles, a threat is an online competitor. Opportunity: tourists wanting e-bike hire.",
    "B1, A1", ["organisational-vs-customer-needs", "contextual-factors", "it-service-strategy"]);

  E("cost-benefit-roi", "strategy", "Cost benefit analysis, ROI and total cost of ownership",
    ["cost benefit", "cost benefit analysis", "cba", "roi", "return on investment", "tco", "total cost of ownership", "capex", "opex", "capital expenditure", "operating expenditure", "budget", "value for money", "running costs", "upfront cost", "hidden costs", "licensing costs"],
    "Cost benefit analysis compares what a solution costs with what it brings. ROI measures the return on the money spent. Total cost of ownership counts every cost over the whole life, not just the purchase price.",
    ["Upfront costs (capex): hardware, installation. Ongoing costs (opex): subscriptions, support, power, training, updates.",
     "Cheapest to buy is not always cheapest to own. Include hidden costs such as downtime and staff time.",
     "Always link figures to the budget in the scenario."],
    "A cheaper switch with no warranty may cost more over five years than one with on site support.",
    "B2, D1", ["processing-cost", "hw-sw-factors", "evaluate-solution", "software-licensing"]);

  E("risk-assessment", "strategy", "Risk assessment and risk management",
    ["risk", "risks", "risk assessment", "risk management", "risk register", "likelihood", "impact", "mitigation", "mitigate", "contingency", "contingency plan", "risk matrix", "accept transfer avoid reduce"],
    "A risk assessment identifies what could go wrong, how likely it is and how bad it would be, then decides what to do about it.",
    ["Rate each risk by likelihood and impact and deal with the highest first.",
     "Options: avoid it, reduce it, transfer it (for example insurance or a supplier) or accept it.",
     "Show your reasoning for why one measure is a better fit than another in the scenario."],
    "A fire in the server room is low likelihood but high impact, so offsite backup is worth the cost.",
    "D3, B2", ["security-measures", "backup-dr", "business-continuity-rto", "implications"]);

  E("business-continuity-rto", "manage", "Business continuity, disaster recovery, RTO and RPO",
    ["business continuity", "bcp", "disaster recovery", "dr", "rto", "rpo", "recovery time objective", "recovery point objective", "failover", "hot site", "cold site", "backup types", "full backup", "incremental backup", "differential backup", "3 2 1 backup", "3-2-1 backup", "restore", "downtime"],
    "Business continuity is keeping the organisation running through a problem. Disaster recovery is getting IT back afterwards. RTO is how long you can be down. RPO is how much data you can afford to lose.",
    ["Backup types: full copies everything, incremental copies changes since the last backup, differential copies changes since the last full.",
     "A good rule is 3 copies, on 2 kinds of storage, with 1 offsite or in the cloud. Test restores regularly.",
     "Match the plan to the business: tills down for an hour is costly, so an RTO of 1 hour may be needed."],
    "Quay Cycles can lose no more than a day of sales data (RPO) and needs tills back within 2 hours (RTO).",
    "D3, B2", ["backup-dr", "availability", "raid-redundancy", "risk-assessment"]);

  /* ---------- Context ---------- */
  E("digital-divide-inclusion", "context", "Digital divide and digital inclusion",
    ["digital divide", "digital inclusion", "digital exclusion", "digitally excluded", "access to technology", "digital skills", "rural broadband", "older people technology", "equal access", "inclusion"],
    "The digital divide is the gap between people who have good access to technology and skills and those who do not. Digital inclusion is making sure everyone can use a service.",
    ["Causes: cost, location, age, skills, disability and poor broadband.",
     "A service that works only online can leave some customers out, so offer another route such as phone or in person.",
     "Links to accessibility and user needs in your design."],
    "Quay Cycles takes bookings by phone as well as online so older customers are not excluded.",
    "B2, A1", ["accessibility-factor", "user-needs", "ethics-overview", "equality-act"]);

  E("equality-act", "context", "Equality Act 2010 and accessible design",
    ["equality act", "equality act 2010", "discrimination", "reasonable adjustments", "protected characteristics", "wcag", "screen reader", "alt text", "accessible", "accessibility law", "assistive technology"],
    "The Equality Act 2010 says organisations must not discriminate and must make reasonable adjustments so disabled people can use their services and workplaces.",
    ["For IT this means accessible websites and software: text alternatives for images, good contrast, keyboard use and screen reader support. WCAG is the standard guide.",
     "Assistive technology includes screen readers, voice control and alternative keyboards.",
     "Accessibility helps everyone, for example captions on videos in a noisy shop."],
    "The Quay Cycles booking page must work with a screen reader and without a mouse.",
    "B2", ["accessibility-factor", "user-needs", "laws-overview", "digital-divide-inclusion"]);

  E("green-it", "context", "Green IT and sustainability",
    ["green it", "sustainability", "sustainable", "carbon footprint", "energy efficient", "energy efficiency", "power consumption", "e waste", "e-waste", "recycling", "recycle", "reuse", "environment", "carbon", "eco friendly", "refurbish"],
    "Green IT means choosing, using and disposing of technology in ways that cut energy use, waste and carbon.",
    ["Choose energy efficient devices, power down when idle, use cloud capacity that matches demand, and extend the life of equipment.",
     "Dispose of old equipment through approved recycling in line with the WEEE regulations, and wipe data first.",
     "Compare the cost of a greener choice with its long term savings."],
    "Quay Cycles reuses old till PCs for the workshop, then sends them for approved recycling.",
    "B2", ["environmental-issues", "weee", "hw-sw-factors", "cloud-computing"]);

  E("service-vs-product", "orgs", "IT service, IT system and IT solution",
    ["it solution", "it system", "service versus system", "solution", "system", "what is a solution", "it solution definition", "combination of hardware and software", "it provision"],
    "An IT system is the hardware, software, people and processes put together. An IT service is the ongoing help and capability delivered to users. An IT solution is the chosen combination that meets the need.",
    ["Hardware, software, data and connectivity together form the solution.",
     "A good solution fits the requirements, the budget and the context.",
     "In the tasks, describe the solution as a whole, then justify each part."],
    "The Quay Cycles solution combines EPOS tills, a shared stock database, a website and a cloud backup.",
    "A1, B2", ["it-service", "solution-coverage", "hw-sw-factors", "combining-tools"]);
})();
