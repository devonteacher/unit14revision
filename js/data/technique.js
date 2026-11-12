/* Exam technique data: command words, band guidance, mistakes, time plan, checklists and answer helpers. */
(function () {
  var T = U14.technique;

  T.commandWords = [
    { word: "Identify / State", depth: "Short", means: "Name it. One short phrase or sentence.", example: "State one factor: scalability.", trap: "Writing a paragraph. You get no more marks." },
    { word: "Define", depth: "Short to medium", means: "Give the exact meaning, in words someone outside IT could follow.", example: "Marketing and sales: the service that promotes the shops and takes online orders.", trap: "Using jargon, or giving only the name of the service." },
    { word: "Outline", depth: "Short to medium", means: "Give the main points without detail.", example: "Outline the strategy: needs, priorities, reasons.", trap: "Missing the reasons that make it an outline of a strategy." },
    { word: "Describe", depth: "Medium", means: "Say what it is or what it is like, with detail.", example: "Describe a network diagram: devices, links, labels.", trap: "Giving only a title and no detail." },
    { word: "Explain", depth: "Medium to long", means: "Give the point and the reason or effect. Use because, so, which means.", example: "Explain why backups matter: copies kept apart, so data can be restored after a failure.", trap: "Stating a fact without a reason." },
    { word: "Compare", depth: "Medium to long", means: "Look at similarities and differences side by side.", example: "Waterfall is in order, whereas Agile works in short cycles.", trap: "Describing each separately and never linking them." },
    { word: "Discuss / Assess", depth: "Long", means: "Look at more than one factor or side and say how much each matters.", example: "Security matters most here because customer records are held.", trap: "Listing factors without saying which matter most." },
    { word: "Analyse", depth: "Long", means: "Break it into parts and show how they connect, with reasons.", example: "Training time affects opening hours, which affects cost.", trap: "Describing each part without links or consequences." },
    { word: "Evaluate", depth: "Long", means: "Weigh strengths and weaknesses and reach a judgement with a reason.", example: "Cloud is more scalable but needs internet, so a backup line is essential.", trap: "Only listing good points, or ending without a decision." },
    { word: "Justify", depth: "Medium to long", means: "Give reasons that support your choice.", example: "I chose SaaS because Dan works only two days a week.", trap: "Repeating the choice instead of giving a reason." },
    { word: "Plan", depth: "Medium", means: "Set out what you will do and in what order, with reasons.", example: "Research hardware first, then software, then data, then law.", trap: "A list of topics with no method, order or reason." },
    { word: "Design", depth: "Long", means: "Produce a plan or model with detail, choices and reasons.", example: "A network diagram plus a table of devices and why each was chosen.", trap: "Listing products with no reasons or links to the need." }
  ];

  T.activityGuides = [
    {
      activity: 1, title: "Outline IT service strategy", marks: 8, time: "1 hour",
      aim: "Identify requirements, prioritise them for the business and its customers, and justify the priorities.",
      structure: ["Short purpose line for the organisation.", "Table of requirements: need, priority (high, medium, low), reason from the brief.", "Include customers as well as the business.", "Cover hardware, software, network and legal needs, now and in future."],
      higher: ["Priorities are different (not all high) and each has a clear reason using a fact from the brief.", "Requirements are needs, not products.", "Current and future needs both appear."],
      lower: ["A list with no priorities or reasons.", "Generic needs that could be for any organisation.", "Missing customers or law."]
    },
    {
      activity: 2, title: "IT service catalogue", marks: 8, time: "1 hour",
      aim: "Define individual IT services for each function in the template, now and in future.",
      structure: ["Use the template headings exactly.", "For each function: service name, description, who uses it, roughly what technology.", "Write it so a non IT person can follow it.", "Add future services such as new sites or new products."],
      higher: ["Every function has specific services with clear names and descriptions.", "Descriptions say what the service achieves and who uses it.", "Future services are included."],
      lower: ["Functions are missing or services are generic.", "Names without descriptions.", "Jargon that a non specialist would not follow."]
    },
    {
      activity: 3, title: "IT service delivery solution", marks: 20, time: "3 hours",
      aim: "Design a solution that meets current and future needs, covering information, data, hardware and software options, and managing infrastructure and users.",
      structure: ["Four clear headings matching the four strands.", "A network diagram, labelled, and a data flow diagram or ERD.", "A table of hardware and software with the reason for each choice.", "Who has which access, how data is protected and backed up.", "Link every choice to a fact in the brief."],
      higher: ["Accurate, detailed diagrams that match the written design.", "Information and data needs are specific, with links between data and the right direction of flow.", "Choices are efficient and justified, and cover all required hardware and software."],
      lower: ["Hardware only, with data and information missing.", "Generic choices with no reasons.", "A diagram that does not match the text."]
    },
    {
      activity: 4, title: "Management report evaluating the solution", marks: 12, time: "1 hour 30 minutes",
      aim: "Assess how appropriate your solution is, compare it with alternatives, and give reasons for your choice.",
      structure: ["Short summary of the solution and its aims.", "Assess against current and future needs and the constraints (cost, skills, law).", "Compare with at least two alternatives, with fair strengths and weaknesses.", "Reasoned conclusion that says what your choice gives up."],
      higher: ["Evaluates the whole solution, not only future ideas.", "Alternatives are real and compared fairly.", "Conclusion is clear and justified with scenario facts."],
      lower: ["Describes the solution again.", "Only lists future developments.", "No alternatives, or alternatives dismissed with no reason."]
    },
    {
      activity: 5, title: "IT service management implications report", marks: 16, time: "1 hour 30 minutes",
      aim: "Analyse the implications of your solution for implementing and delivering services, supporting staff, supporting customers, and managing IT assets, considering constraints and change.",
      structure: ["Use the template and its four headings.", "For each heading: what will change, what must be done, who does it, what could go wrong.", "Include a constraint (law, security, resources) and a change (growth, new services).", "Link to named facts from the brief."],
      higher: ["Each point is a consequence with an action, not a benefit.", "All four areas are covered in depth, with constraints and change.", "Reasons are tied to the scenario."],
      lower: ["Describes what was built.", "Lists benefits only.", "Generic points that fit any organisation."]
    }
  ];

  T.mistakes = [
    { bad: "Generic answer that could be about any organisation.", fix: "Add a name, number or problem from the brief to every point." },
    { bad: "Activity 3 covers hardware only.", fix: "Use the four headings. Give information and data their own section." },
    { bad: "Activity 4 describes the solution.", fix: "Weigh strengths and weaknesses, compare with alternatives, then decide." },
    { bad: "Activity 4 only talks about future developments.", fix: "Evaluate the current solution first, then the future." },
    { bad: "Activity 5 lists benefits.", fix: "Write consequences: what changes, what must be done, who does it." },
    { bad: "All priorities are high.", fix: "Use high, medium and low and explain why some are lower." },
    { bad: "Diagram does not match the text.", fix: "Refer to the diagram in your writing and label every part." },
    { bad: "Technical words used wrongly or not at all.", fix: "Use the correct term and show you know what it means." },
    { bad: "Product names with no need.", fix: "State the need first, then the option that meets it." },
    { bad: "Running out of time on Activities 4 and 5.", fix: "Stick to the advised times. Plan a few minutes to check and save." }
  ];

  T.timePlan = [
    { id: 1, name: "Activity 1: Strategy", marks: 8, minutes: 60 },
    { id: 2, name: "Activity 2: Catalogue", marks: 8, minutes: 60 },
    { id: 3, name: "Activity 3: Solution", marks: 20, minutes: 180 },
    { id: 4, name: "Activity 4: Evaluation", marks: 12, minutes: 90 },
    { id: 5, name: "Activity 5: Implications", marks: 16, minutes: 90 }
  ];
  T.technicalLanguageMarks = 4;

  /* Checklist adapted from the faculty Unit 14 checklist. */
  T.checklist = [
    { group: "Part A: the research phase", items: [
      "Have you researched a business?",
      "Have you researched general software requirements?",
      "Have you researched custom software requirements?",
      "Have you researched hardware requirements?",
      "Have you researched network requirements?",
      "Have you identified which laws you need to look at?",
      "Have you researched those laws?",
      "Is it on two sides of A4, in your own words, easy to scan?"
    ] },
    { group: "Part B Activity 1: IT service strategy (needs of the business and the client)", items: [
      "Business hardware, software, network and legislation requirements identified?",
      "Client hardware, software, network and legislation requirements identified?",
      "Each requirement has a priority and a reason?"
    ] },
    { group: "Part B Activity 2: IT service catalogue (each function in the template)", items: [
      "Manufacturing of products or delivering services",
      "Marketing and sales",
      "Customer relations",
      "Staff management and support",
      "Each has hardware, software, network and legislation requirements, written clearly?"
    ] },
    { group: "Part B Activity 3: IT service solution", items: [
      "Network diagram produced?",
      "Hardware components described?",
      "Software components described?",
      "Data and information requirements identified?",
      "ERD or data flow diagram for the business?",
      "How users and infrastructure will be managed?"
    ] },
    { group: "Part B Activity 4: Evaluation", items: [
      "Hardware solution evaluated?",
      "Software solution evaluated?",
      "Network solution evaluated?",
      "Legislation evaluated?",
      "Alternatives compared and a reasoned choice made?"
    ] },
    { group: "Part B Activity 5: Implications", items: [
      "Implementing the solution and delivering services?",
      "Managing and supporting users?",
      "Managing and supporting the organisation's employees?",
      "Managing the organisation's IT assets?",
      "Ability to respond to changes in aims, products and services?"
    ] }
  ];

  /* Words that show reasoning. Used by the practice checker. */
  T.connectors = ["because", "so that", "therefore", "as a result", "which means", "this means", "since", "due to", "leading to", "however", "whereas", "but", "although", "in contrast", "consequently", "so ", "meaning that", "this allows", "which allows", "otherwise", "if "];

  /* Helpful sentence starters. */
  T.starters = [
    { type: "Reason", starters: ["This is important because...", "This matters for Quay Cycles because...", "As a result...", "This means that..."] },
    { type: "Implication", starters: ["Because of this, the organisation must...", "This will require...", "A consequence is that...", "To manage this, staff will need..."] },
    { type: "Evaluation", starters: ["The strength is..., however...", "Overall the best option is... because...", "This gives up... but gains...", "Compared with..., this option..."] },
    { type: "Link to scenario", starters: ["Because [name] only works...", "With a budget of...", "Since the shop is open...", "As the business plans to..."] }
  ];

  /* Technical terms to highlight in the practice checker. Built in app.js from knowledge terms as well. */
  T.technicalTerms = ["scalab", "firewall", "router", "switch", "backup", "encrypt", "saas", "paas", "iaas", "cloud", "network", "server", "access level", "authentication", "multi factor", "bandwidth", "redundan", "gdpr", "data protection", "asset register", "ethernet", "wi-fi", "wireless", "virtual", "latency", "availability", "integrity", "confidential", "malware", "patch", "update", "licence", "sla", "incident", "problem management", "change management", "data flow", "erd", "epos", "cms", "api", "vpn"];
})();
