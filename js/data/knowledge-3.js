/* Knowledge base part 3: designing and evaluating solutions, information and data, software and cloud services. */
(function () {
  var kb = U14.kb;

  /* ---------- Designing and evaluating solutions ---------- */
  kb.push(
    {
      id: "solution-coverage", topic: "design", term: "What an IT service delivery solution must cover",
      aka: ["solution", "design a solution", "activity 3 coverage", "information requirements", "data requirements", "hardware and software options", "managing infrastructure and users"],
      short: "Four strands: information requirements, data requirements, hardware and software service options, and managing infrastructure and users.",
      more: [
        "Information: what each role needs to see, in what form, and who may see what.",
        "Data: what types, how much, where it is kept, backup, how long it is kept, the law.",
        "Hardware and software options: what you choose, what else you looked at, and why.",
        "Infrastructure and users: accounts, access levels, support, updates, monitoring.",
        "Examiners say data and information is the most often missed strand, and many learners cover only hardware."
      ],
      example: "Use the four headings from the task as your headings and add a diagram.",
      spec: "B3", related: ["activity-3", "data-flow-diagram", "information-vs-data-design"]
    },
    {
      id: "information-vs-data-design", topic: "design", term: "Information requirements versus data requirements",
      aka: ["information requirements", "data requirements", "information vs data requirements"],
      short: "Information requirements are about what people need to know to do their jobs. Data requirements are about the raw data behind it: what is stored, how much, where, and how it is protected.",
      more: [
        "Information: \"Managers see stock levels for all shops.\"",
        "Data: \"Thousands of stock items, held in the stock system, backed up nightly.\"",
        "Link each information need to the data that feeds it."
      ],
      example: "Owner needs monthly sales report (information). It needs till totals from every shop (data).",
      spec: "B3, C1, C2", related: ["data-vs-information", "solution-coverage"]
    },
    {
      id: "b2-factors", topic: "design", term: "Factors when defining requirements (B2)",
      aka: ["b2", "benefits and constraints", "technology costs environmental ethical legal location moral risks scalability security sustainability", "constraints"],
      short: "Eleven factors can help or limit a solution: technology, costs, environmental, ethical, legal, location, moral, risks, scalability, security and sustainability.",
      more: [
        "Each can be a benefit (it helps) or a constraint (it limits what you can do).",
        "Pick the ones that matter for the scenario. Do not list all eleven for the sake of it."
      ],
      example: "Budget (cost) limits choices. The June sale (scalability) pushes towards flexible hosting.",
      spec: "B2", related: ["contextual-factors", "evaluate-solution"]
    },
    {
      id: "hw-sw-factors", topic: "design", term: "Factors when choosing hardware and software",
      aka: ["hardware software factors", "availability cost connectivity capacity ease of use features privacy scalability usability", "choosing hardware", "choosing software"],
      short: "Nine factors affect which hardware and software to pick: availability, cost, connectivity, capacity, ease of use, features, privacy, scalability and usability.",
      more: [
        "Availability: is it in stock, and will the service be up when needed?",
        "Cost: buying, running, supporting and replacing.",
        "Connectivity: how it connects to other devices and networks.",
        "Capacity: how much it can store, process or support.",
        "Ease of use and usability: can staff learn it quickly and use it without mistakes?",
        "Features: does it do what is needed?",
        "Privacy and scalability: does it protect data, and can it grow?"
      ],
      example: "Choosing tablet tills over PCs: easier to use, cheaper to replace, but need reliable Wi-Fi and a backup connection.",
      spec: "B4", related: ["open-source-proprietary", "information-considerations"]
    },
    {
      id: "information-considerations", topic: "design", term: "Considerations when selecting data and information (B4)",
      aka: ["considerations", "b4", "13 factors", "factors for data and information", "design considerations"],
      short: "Thirteen factors affect how information and data are chosen and shared: compatibility, corporate message, processing cost, productivity, privacy, reliability, security, size, quality, user experience, accessibility, user needs and working practices.",
      more: [
        "Each one has a plain meaning, an example, and an impact if you get it wrong. Look them up one by one in Ask or Flashcards.",
        "A strong answer picks the ones that matter for the scenario and explains the impact on data and information."
      ],
      example: "The deck question: \"Discuss the factors to consider when designing a solution and the impact on data and information stored.\"",
      spec: "B4", related: ["compatibility", "corporate-message", "processing-cost", "productivity-factor", "privacy-factor", "reliability-factor", "security-factor", "size-quantity", "quality-factor", "user-experience", "accessibility-factor", "user-needs", "working-practices"]
    },
    {
      id: "compatibility", topic: "design", term: "Compatibility",
      aka: ["compatible", "compatibility factor"],
      short: "Whether new hardware, software or data will work with what the organisation already has.",
      more: ["File formats, operating systems, connections and existing software all matter.", "Impact if ignored: data cannot be moved, devices will not connect, extra cost to replace things."],
      example: "A new stock system must work with the barcode scanners already in the shops.",
      spec: "B4", related: ["information-considerations"]
    },
    {
      id: "corporate-message", topic: "design", term: "Corporate message",
      aka: ["brand", "branding", "company image"],
      short: "The image and values an organisation wants to show. Its information and systems should look and sound consistent with that.",
      more: ["Websites, emails, receipts and reports should share the same brand, tone and details.", "Impact if ignored: mixed messages, loss of trust."],
      example: "Every customer email uses the Quay Cycles logo, colours and friendly tone.",
      spec: "B4", related: ["information-considerations"]
    },
    {
      id: "processing-cost", topic: "design", term: "Processing cost",
      aka: ["cost of processing", "cost"],
      short: "The time, power and money needed to process, store and move data.",
      more: ["More data and more complex processing cost more.", "Impact if ignored: budget overspend or slow systems."],
      example: "Storing every product photo in very high quality costs more storage and slows the website.",
      spec: "B4", related: ["size-quantity", "information-considerations"]
    },
    {
      id: "productivity-factor", topic: "design", term: "Productivity",
      aka: ["productive", "efficiency"],
      short: "How much people can get done with the same time and effort. Good IT should raise it.",
      more: ["Faster ways to find and enter data save time.", "Impact if ignored: staff do double entry, queues grow, mistakes happen."],
      example: "A shared stock list removes the evening job of updating each shop’s spreadsheet.",
      spec: "B4", related: ["information-considerations"]
    },
    {
      id: "privacy-factor", topic: "design", term: "Privacy (design factor)",
      aka: ["privacy design", "keeping data private"],
      short: "Keeping personal and sensitive information away from people who should not see it.",
      more: ["Use access levels, encryption and clear rules about who can see what.", "Impact if ignored: breaches, fines, loss of trust."],
      example: "Mechanics see a customer’s name and phone number but not their payment details.",
      spec: "B4", related: ["data-protection", "information-considerations"]
    },
    {
      id: "reliability-factor", topic: "design", term: "Reliability",
      aka: ["reliable", "dependable"],
      short: "How well a system works correctly and consistently when it is needed.",
      more: ["Backups, spare parts and a backup connection improve reliability.", "Impact if ignored: downtime, lost sales, lost data."],
      example: "Each shop gets a 4G backup router so tills still work if broadband fails.",
      spec: "B4", related: ["availability", "backup-dr", "information-considerations"]
    },
    {
      id: "security-factor", topic: "design", term: "Security (design factor)",
      aka: ["security design", "data security"],
      short: "Protecting data and systems from loss, theft, damage and unauthorised access.",
      more: ["Passwords, multi factor authentication, firewalls, backups, encryption and physical protection.", "Impact if ignored: data stolen or lost, law broken, services down."],
      example: "Admin accounts use a code from a phone as well as a password.",
      spec: "B4", related: ["security-measures", "cia-triad", "information-considerations"]
    },
    {
      id: "size-quantity", topic: "design", term: "Size and quantity",
      aka: ["size", "quantity", "amount of data", "how much data"],
      short: "How much data there is and how many users or devices will use the system. Storage and network capacity must be enough.",
      more: ["Think about growth as well as today.", "Impact if ignored: full storage, slow systems, an expensive rebuild."],
      example: "Thousands of customer records and photos, growing every year with a new shop.",
      spec: "B4", related: ["three-vs", "information-considerations"]
    },
    {
      id: "quality-factor", topic: "design", term: "Quality (of data and information)",
      aka: ["data quality", "quality"],
      short: "Whether the data is accurate, complete, up to date and good enough for the job.",
      more: ["Bad data leads to bad decisions.", "Impact if ignored: wrong stock counts, double bookings, wrong invoices."],
      example: "Two shop spreadsheets disagree, so staff sell bikes that are not in stock.",
      spec: "B4", related: ["data-vs-information", "information-considerations"]
    },
    {
      id: "user-experience", topic: "design", term: "User and customer experience",
      aka: ["user experience", "ux", "customer experience", "ease of use", "performance", "availability experience"],
      short: "How easy, quick and pleasant a system is to use. The specification groups four parts: ease of use, performance, availability and accessibility.",
      more: ["Ease of use: simple screens and clear steps.", "Performance: it responds quickly, even when busy.", "Availability: it is there when people need it.", "Accessibility: people with different needs can use it.", "Impact if ignored: frustrated users, lost customers."],
      example: "An online booking page that loads slowly on bank holidays loses bookings.",
      spec: "B4", related: ["accessibility-factor", "information-considerations"]
    },
    {
      id: "accessibility-factor", topic: "design", term: "Accessibility",
      aka: ["accessible", "disability", "screen reader", "assistive technology"],
      short: "Making sure people with different needs can use the system, for example with screen readers, text size changes, good colour contrast and keyboard control.",
      more: ["It is good practice and often a legal duty for public facing services.", "Impact if ignored: some customers or staff cannot use the service at all."],
      example: "A booking form that works with a keyboard and has clear labels.",
      spec: "B4", related: ["user-experience", "information-considerations"]
    },
    {
      id: "user-needs", topic: "design", term: "User and customer needs",
      aka: ["user needs", "customer needs design"],
      short: "What the people using the system actually need from it, which may differ from what designers assume.",
      more: ["Ask users, watch them work, and check the brief.", "Impact if ignored: a system that is built but not used."],
      example: "Mechanics have no computer, so a system that needs a PC at every bench will not suit them. A shared tablet might.",
      spec: "B4", related: ["service-requirement", "information-considerations"]
    },
    {
      id: "working-practices", topic: "design", term: "Working practices",
      aka: ["working patterns", "ways of working"],
      short: "How people really do their work: shifts, shared devices, remote working, busy times, and the steps they follow.",
      more: ["A system must fit how staff work, not force a new way without training.", "Impact if ignored: staff go back to old habits such as paper."],
      example: "Shop managers share the till PC and count the till at closing. The new system must suit that routine.",
      spec: "B4", related: ["information-considerations", "staff-training"]
    },
    {
      id: "evaluate-solution", topic: "design", term: "Evaluating your solution (Activity 4)",
      aka: ["evaluate", "evaluation", "activity 4 evaluate", "alternatives", "rationale", "justify", "management report"],
      short: "Weighing up how well your design meets the needs, comparing it fairly with alternatives, and giving a clear reason for your choice.",
      more: [
        "Assess your solution against the needs and limits (budget, staff, deadline).",
        "Compare with at least two real alternatives. Say what each does well, not just what is wrong with it.",
        "Say what your choice gives up as well as what it gains.",
        "End with a clear choice and the reasons.",
        "Examiners repeatedly say answers drift into future developments or just repeat the scenario instead of evaluating the whole system."
      ],
      example: "\"Option C looks cheaper each month, but it keeps one machine in one room, which failed twice, and Dan cannot look after it.\"",
      spec: "A1, B4", related: ["activity-4", "evaluate-vs-describe", "choosing-methodology"]
    },
    {
      id: "implications", topic: "design", term: "Implications of a solution (Activity 5)",
      aka: ["implications", "implication", "activity 5 implications", "so what", "implementation impact", "service management implications"],
      short: "What will happen to the organisation because of your design. Think \"so what?\": what changes, what must be done, and what could go wrong.",
      more: [
        "Cover implementing the solution, managing and supporting staff, managing and supporting customers, and managing IT assets.",
        "In each area think about constraints (law, security, limited resources) and changes (new shops, new services, growth).",
        "Typical implications: downtime, data migration, testing, training, cost, support hours, asset records, safe disposal.",
        "This is the weakest activity in every examiner report. Learners describe what they built or list benefits instead."
      ],
      example: "\"Dan works two days a week, so the provider does the data move and Sam helps with the website.\"",
      spec: "A1, B4, D3", related: ["activity-5", "implication-vs-benefit", "implementation-impact"]
    },
    {
      id: "implementation-impact", topic: "design", term: "Impact of putting a solution in",
      aka: ["implementation", "downtime", "migration", "changeover", "switchover", "training time", "parallel running", "phased rollout"],
      short: "Putting a new system in has costs and risks: downtime, moving data, testing, training and getting staff and customers used to the change.",
      more: [
        "Phased (one site at a time) lowers risk. Big bang (everything at once) is faster but riskier.",
        "Parallel running keeps the old system going for a while as a safety net.",
        "Choose quiet times for switching over.",
        "Test before going live and have a plan to go back if it fails."
      ],
      example: "Quay Cycles: switch Exeter first on a quiet winter weekday, keep the old spreadsheets as read only for a month.",
      spec: "B4, D3", related: ["implications", "change-management", "staff-training"]
    }
  );

  /* ---------- Information and data ---------- */
  kb.push(
    {
      id: "data-vs-information", topic: "data", term: "Data versus information",
      aka: ["data", "information", "difference between data and information", "data and information", "data or information"],
      short: "Data is raw facts and figures with no meaning on their own. Information is data that has been processed and put in context so it means something.",
      more: [
        "Data: 37.",
        "Information: \"37 bikes in stock at Exeter, 12 fewer than last week.\"",
        "Organisations turn data into information to make decisions."
      ],
      example: "Till scans are data. A report of best selling bikes by month is information.",
      spec: "C2", related: ["info-levels", "three-vs"]
    },
    {
      id: "info-levels", topic: "data", term: "Strategic, management and operational information",
      aka: ["strategic", "management level", "operational", "levels of information", "information levels", "strategic level", "tactical"],
      short: "Information is used at three levels. Strategic: long term decisions across the whole organisation. Management: shorter term decisions about running functions. Operational: day to day actions.",
      more: [
        "Strategic: senior leaders, for example yearly sales by shop to decide on a Truro shop.",
        "Management: managers, for example weekly stock levels and staff rotas.",
        "Operational: staff doing the work, for example today’s till sales or the repair job list.",
        "Not everyone should see everything. Access should match the level and the job."
      ],
      example: "Priya (strategic), shop managers (management), sales staff and mechanics (operational).",
      spec: "C1", related: ["data-vs-information", "why-info-used"]
    },
    {
      id: "why-info-used", topic: "data", term: "Why organisations use information",
      aka: ["use of information", "why information is used", "uses of information"],
      short: "To define what customers need, manage day to day tasks, keep services running, and plan improvements, including setting policy and communicating with people.",
      more: [
        "Scope of customer needs: what do customers want?",
        "Day to day tasks and services: what must be done today?",
        "Continuation of service or product: keep the business running.",
        "Improvements: policy, and communication with staff, colleagues and customers."
      ],
      example: "Repair booking information keeps today’s jobs on track and helps decide whether to hire another mechanic.",
      spec: "C1", related: ["info-levels", "info-sources"]
    },
    {
      id: "info-sources", topic: "data", term: "Sources of information",
      aka: ["sources", "where information comes from", "data sources", "information sources"],
      short: "Information comes from customers or clients, the IT support team, the management team and other staff, and from the systems they use.",
      more: ["Different groups use different sources. Customers look at the website. Technicians read system logs. Managers read reports."],
      example: "Dan reads the weekly backup report. Priya reads the monthly sales report.",
      spec: "C1", related: ["why-info-used", "info-levels"]
    },
    {
      id: "three-vs", topic: "data", term: "The three Vs: volume, velocity and variety",
      aka: ["3 vs", "three vs", "volume", "velocity", "variety", "3v", "big data three vs"],
      short: "Three ways of describing data. Volume is how much. Velocity is how fast it arrives or must be processed. Variety is how many different types there are.",
      more: [
        "Volume: millions of till scans and customer records.",
        "Velocity: orders per minute on sale day, or a live sensor feed.",
        "Variety: text, photos, video, payments, location data.",
        "Each affects storage, processing power, network speed and software choices."
      ],
      example: "The June sale website: high volume of visitors, high velocity of orders, variety of product photos, text and payments.",
      spec: "C2", related: ["big-data", "size-quantity"], visual: "threevs"
    },
    {
      id: "big-data", topic: "data", term: "Big data",
      aka: ["big data", "data analytics", "analytics"],
      short: "Very large, fast or varied sets of data that ordinary tools cannot handle easily, used to find patterns and make better decisions.",
      more: [
        "Benefits: better decisions, spotting trends, more personal services.",
        "Drawbacks: needs lots of storage and processing, privacy and security risks, poor data gives poor results."
      ],
      example: "A gym chain studying visit times across all its sites to plan staffing.",
      spec: "C2", related: ["three-vs", "data-protection"]
    },
    {
      id: "data-scope", topic: "data", term: "What decides an organisation’s data needs",
      aka: ["scope of data", "data needs", "define data needs", "data requirements scope"],
      short: "Sector and type, size, products and services, aims and goals, customers, staff, location, and the tasks people and systems do.",
      more: ["A bigger organisation with more sites produces more data and needs better sharing and security."],
      example: "Adding a Truro shop adds stock, customers, staff and till data in a new location.",
      spec: "C2", related: ["data-vs-information", "three-vs"]
    },
    {
      id: "cia-triad", topic: "data", term: "Confidentiality, integrity and availability (CIA)",
      aka: ["cia", "cia triad", "confidentiality", "integrity", "availability triad", "data integrity"],
      short: "Three goals of data security. Confidentiality: only the right people see it. Integrity: it is accurate and not changed wrongly. Availability: it is there when needed.",
      more: ["Use it as a quick check on a design: for each, say what protects it."],
      example: "Quay Cycles: logins protect confidentiality, one stock list protects integrity, cloud services and backups protect availability.",
      spec: "C2, D3", related: ["security-measures", "backup-dr", "data-protection"]
    },
    {
      id: "data-life", topic: "data", term: "From capture to access: how data moves",
      aka: ["data capture", "data processing", "data storage", "data transfer", "data movement", "captured processed stored transferred accessed"],
      short: "When designing a system, ask how data is captured, processed, stored, transferred and accessed, and by whom.",
      more: ["Captured: scanned, typed, collected by sensors or forms.", "Processed: calculated, sorted, turned into information.", "Stored: where and for how long.", "Transferred: how it moves between systems and sites, and how it is kept safe.", "Accessed: who can see or change it."],
      example: "Electronic patient records: captured by nurses, stored on secure servers, transferred between hospital systems, accessed only by authorised staff.",
      spec: "C2, B4", related: ["data-flow-diagram", "cia-triad"]
    }
  );

  /* ---------- Software and cloud services ---------- */
  kb.push(
    {
      id: "software-categories", topic: "software", term: "Types of software service",
      aka: ["software types", "software services", "types of software", "software uses", "collaboration", "communication software", "productivity software"],
      short: "The specification groups software by what it is used for: communication, collaboration, virtualisation and containerisation, production of products or services, financial transactions, file storage and transfer, hosting, productivity, remote access, creativity, customer access, and data and performance analysis.",
      more: [
        "Communication: email, messaging, video calls.",
        "Collaboration: shared documents, team spaces.",
        "Financial: tills, payments, accounts, payroll.",
        "Hosting: servers that run websites and apps.",
        "Remote access: connecting to systems from elsewhere.",
        "Data collection and analysis, performance analysis: reports and metrics."
      ],
      example: "Quay Cycles: email (communication), till system (financial), stock system (production and service), online shop (customer access).",
      spec: "D1", related: ["operating-system", "application-software", "software-audit"]
    },
    {
      id: "operating-system", topic: "software", term: "Operating system",
      aka: ["os", "windows", "linux", "macos", "android"],
      short: "The main software that runs a device and lets other programs use the hardware, for example Windows, macOS, Linux or Android.",
      more: ["Choose to suit the hardware, the software that must run, support available and cost.", "Updates keep it secure."],
      example: "Till PCs running an old Windows version that no longer gets security updates.",
      spec: "D1", related: ["utility-software", "application-software"]
    },
    {
      id: "utility-software", topic: "software", term: "Utility software",
      aka: ["utility", "utilities", "antivirus", "backup software", "disk cleanup", "system tools"],
      short: "Software that looks after and maintains a computer, such as antivirus, backup tools, disk clean up and file compression.",
      more: ["Utility software keeps systems secure and running well rather than creating content."],
      example: "Antivirus on every till and nightly backup software on the server.",
      spec: "D1", related: ["operating-system", "application-software"]
    },
    {
      id: "application-software", topic: "software", term: "Application software",
      aka: ["application", "apps", "app software", "applications"],
      short: "Software used to do a task for the user, such as word processing, accounts, stock control or a booking system.",
      more: ["Includes content management systems and expert systems.", "Often combined with other tools so data flows between them."],
      example: "A booking system for repairs and hire.",
      spec: "D1", related: ["cms", "expert-system", "combining-tools"]
    },
    {
      id: "cms", topic: "software", term: "Content management system (CMS)",
      aka: ["content management system", "wordpress", "cms website"],
      short: "Software that lets people create and edit website content without writing code, for example WordPress.",
      more: ["Benefits: staff can update pages themselves.", "Drawbacks: needs updates and security care, plug ins can cause problems."],
      example: "Priya updates opening times on the website herself.",
      spec: "D1", related: ["application-software"]
    },
    {
      id: "expert-system", topic: "software", term: "Expert system",
      aka: ["expert systems", "decision support", "rule based system", "knowledge base system"],
      short: "Software that copies the decisions of a human expert by using stored knowledge and rules.",
      more: ["Used for diagnosis and advice, such as troubleshooting guides or medical checkers.", "Only as good as the rules and knowledge put in."],
      example: "A helpdesk tool that asks questions and suggests the likely fault.",
      spec: "D1", related: ["application-software"]
    },
    {
      id: "combining-tools", topic: "software", term: "Combining tools and applications",
      aka: ["integration", "integrate", "integrated systems", "api", "interoperability software"],
      short: "Linking separate programs so data passes between them automatically. This saves re typing and reduces mistakes.",
      more: ["Check compatibility and interoperability first.", "An integrated system can be easier to manage but harder to replace."],
      example: "Stock system updating the website when a bike sells in a shop.",
      spec: "D1", related: ["compatibility", "application-software"]
    },
    {
      id: "open-source-proprietary", topic: "software", term: "Open source versus proprietary software",
      aka: ["open source", "proprietary", "open-source", "licence types", "free software", "open source vs proprietary"],
      short: "Open source software has code anyone may view, change and share, and is often free. Proprietary software is owned by a company and you pay for a licence to use it.",
      more: [
        "Factors to compare: customisation, expertise needed, functionality, how it is installed, interoperability, performance, scalability, stability and support.",
        "Open source: flexible and low licence cost, but support may be community based and it may need more skill.",
        "Proprietary: usually good support and polish, but licence costs and less freedom to change it."
      ],
      example: "GIMP (open source) versus Adobe Photoshop (proprietary) for photo editing.",
      spec: "D1", related: ["copyright-act", "hw-sw-factors"]
    },
    {
      id: "virtualisation-containerisation", topic: "software", term: "Virtualisation and containerisation",
      aka: ["virtualisation", "virtual machine", "vm", "containers", "containerisation", "docker", "hypervisor"],
      short: "Virtualisation runs several virtual computers on one physical machine, each with its own operating system. Containerisation packages an app and what it needs so it runs the same anywhere, sharing the host’s operating system.",
      more: ["Virtual machines are heavier but more separate. Containers are lighter and start faster.", "Both make better use of hardware and make moving or copying services easier."],
      example: "Running a test copy of the stock system in a container before it goes live.",
      spec: "D1", related: ["iaas", "cloud-computing"]
    },
    {
      id: "cloud-computing", topic: "software", term: "Cloud computing",
      aka: ["cloud", "cloud services", "benefits of cloud", "cloud computing", "elasticity", "on demand"],
      short: "Using computing services (storage, software, servers) over the internet, run by a provider, instead of owning and running everything yourself.",
      more: [
        "Benefits: use what you need when you need it, grows and shrinks (scalability), reachable from anywhere, resilient with backups, often lower start up cost.",
        "Drawbacks: needs a good internet connection, you depend on the provider, ongoing fees, and questions about where data is stored and which laws apply."
      ],
      example: "A hosted online shop that adds capacity for the June sale.",
      spec: "D1, D3", related: ["saas", "paas", "iaas", "scalability", "in-house-vs-external"]
    },
    {
      id: "saas", topic: "software", term: "SaaS (Software as a Service)",
      aka: ["software as a service", "saas", "hosted software", "subscription software"],
      short: "Ready to use software run by a provider over the internet. You log in and use it. The provider looks after the servers, updates and security of the software.",
      more: ["You still manage your own users and your own data.", "Good when there is little in house IT skill, such as one part time technician.", "Drawbacks: less control, needs the internet, price can rise."],
      example: "Business email and a hosted online shop.",
      spec: "D1", related: ["paas", "iaas", "on-premises"], visual: "cloudstack"
    },
    {
      id: "paas", topic: "software", term: "PaaS (Platform as a Service)",
      aka: ["platform as a service", "paas", "platform hosting"],
      short: "A provider supplies the platform (operating system, runtime, database) and you build and run your own app on it. You look after the app and its data.",
      more: ["Good for developers who want to build without running servers.", "You still need someone who can look after the app.", "Pay as you go pricing can rise in busy months."],
      example: "A custom website built by Sam and hosted on a platform service.",
      spec: "D1", related: ["saas", "iaas"], visual: "cloudstack"
    },
    {
      id: "iaas", topic: "software", term: "IaaS (Infrastructure as a Service)",
      aka: ["infrastructure as a service", "iaas", "virtual server", "cloud server"],
      short: "A provider rents you the basic building blocks: virtual servers, storage and networking. You install and look after the operating system, software and security.",
      more: ["Most control and flexibility of the three, and most responsibility.", "Needs skilled people to manage updates and security."],
      example: "A virtual server rented by the hour from a cloud provider.",
      spec: "D1", related: ["saas", "paas", "virtualisation-containerisation"], visual: "cloudstack"
    },
    {
      id: "on-premises", topic: "software", term: "On premises (in house servers)",
      aka: ["on premises", "on-premise", "on prem", "in house", "local server", "own server"],
      short: "Owning and running the servers and software yourself, in your own building.",
      more: ["Full control and data stays on site.", "You pay for hardware, power, space, backups and skilled staff, and you are the single point of failure."],
      example: "The nine year old Exeter server holding customer details.",
      spec: "D1, D3", related: ["in-house-vs-external", "saas", "iaas"], visual: "cloudstack"
    },
    {
      id: "software-audit", topic: "software", term: "Software audit",
      aka: ["audit", "software inventory", "licence audit", "software list"],
      short: "A check of what software an organisation has, what it is for, whether it is open source or proprietary, its version and its licence.",
      more: ["Audits help control costs, security and licence compliance.", "Record: name, category, purpose, open source or proprietary, version, licence details."],
      example: "A spreadsheet listing every program on the college PCs.",
      spec: "D1", related: ["asset-management", "copyright-act"]
    }
  );
})();
