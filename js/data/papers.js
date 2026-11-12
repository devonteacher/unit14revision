/* Past paper walkthroughs. Everything here is summarised in my own words from the published scenarios and examiner reports.
   No exam board text is reproduced. Always practise with the real papers from your tutor for the full wording. */
(function () {
  var pp = U14.papers;

  pp.push(
    {
      id: "buckton", series: "June 2018", org: "Buckton Construction", sector: "Construction (civil engineering)",
      summary: "A civil engineering firm with a Head Office in London (10 staff) and other staff working remotely on construction sites. Usually two sites at once. Estimators, site managers, quantity surveyors and project managers are brought in on contract.",
      watch: [
        "People work on sites and other locations, so mobile working, secure remote access and file sharing matter.",
        "Contractors join for each project. That affects user accounts, access levels and leavers.",
        "Specialist equipment for sites, such as survey kit, can be part of the hardware needs.",
        "Legislation is often forgotten, including data protection, health and safety and copyright."
      ],
      lessons: [
        "Some learners wrote mostly about Head Office staff and forgot the construction sites.",
        "Activity 5 was the weakest: many explained what they had built instead of giving the implications of introducing it.",
        "Very few discussed legislation or the specialist equipment the sites need."
      ],
      practise: "Draw a network and a data flow diagram that include both sites and the Head Office. Say how a site manager gets drawings and records on site, and how that data comes back safely."
    },
    {
      id: "nizuk", series: "January 2019", org: "Nizuk Care Home", sector: "Care (private or voluntary)",
      summary: "A care home in a Welsh village with a head office in Cardiff and 62 staff. Eight old computers, some shared. Central servers at head office managed by IT technicians. 80 residents in nursing, residential and dementia units, with CCTV, signing in books and secure medication storage.",
      watch: [
        "Resident records are sensitive, so security, access levels and confidentiality come first.",
        "Shared computers on units raise questions about logins, privacy and quick access.",
        "The servers are at head office, so connection reliability and remote access matter.",
        "The secure dementia unit and medication storage affect physical security and monitoring."
      ],
      lessons: [
        "Some learners covered the head office as well as the care home when the task was about the care home.",
        "Activities 4 and 5 scored lowest. Activity 4 answers focused on future developments instead of the whole system, and most left out alternatives.",
        "Activity 5 answers described what had been produced instead of explaining the implications."
      ],
      practise: "Write the information requirements for four roles (manager, nurse, senior carer, receptionist) and decide who may see what."
    },
    {
      id: "cinnamon", series: "June 2019", org: "Cinnamon Agricultural Services", sector: "Agricultural sales and servicing",
      summary: "A Harrogate business with 10 staff that sells new and used agricultural machinery, services and repairs it on site and at customer premises, and stocks parts. Six computers in the office and shop running integrated management software set up in 2015, with a card machine, shop CCTV and a workshop printer for job cards.",
      watch: [
        "Mechanics visit customer premises, so mobile access to job cards and parts information matters.",
        "The existing integrated software covers parts, workshop, job costing, sales, accounts and reporting. Say what to keep and what to change.",
        "Card payments, invoices and customer data bring in security and data protection.",
        "The system dates from 2015, so ageing hardware and software support are issues."
      ],
      lessons: [
        "Activity 3 was answered well by many learners. Clear data flow diagrams showed how data moved.",
        "Weaker learners lost marks with an inefficient hardware and software solution, or by leaving out equipment the solution needs.",
        "Activity 5 reports were often generic and not linked to the requirements of the business."
      ],
      practise: "Draw a data flow diagram for a repair job from customer call to invoice, then name the hardware and software at each step."
    },
    {
      id: "neuton", series: "January 2020 (examiner report only)", org: "Neuton & Neuton", sector: "Retail with EPOS (details limited)",
      summary: "I only have the examiner report for this series, not the paper itself, so the scenario details are limited. The report mentions an EPOS system and connections to a bank.",
      watch: [
        "Payment and EPOS systems need bank connections, security and clear data flow.",
        "Use every fact in the scenario. Examiners noted some learners did not use all the information provided."
      ],
      lessons: [
        "Activity 1 was answered well by most, but some learners did not use all the scenario information.",
        "Activity 3 scored less well because many learners focused on hardware, had inefficient hardware and software choices, left out data and information, or forgot the bank link for the EPOS.",
        "Activity 4 answers focused on future developments instead of the whole system, although more learners included alternatives.",
        "Activity 5 was still poorly answered. More learners gave implications, but mostly about future developments only."
      ],
      practise: "Take any retail scenario and add the bank connection, card readers and stock link to your Activity 3 design."
    },
    {
      id: "rodris", series: "January 2021", org: "Rodri's restaurant", sector: "Hospitality (private)",
      summary: "A restaurant in Bath with 16 on site staff plus two external contractors (an accountant and IT support). Open Tuesday to Sunday evenings and closed on Mondays for stocktaking, cleaning and maintenance. Seats 60. Orders are taken on paper by servers, passed to the host, who prepares the bill and tells the kitchen. The owner looks after a website that shows details and menus.",
      watch: [
        "The Monday closure is the natural time for installing and testing changes without disrupting trade.",
        "The ordering process is manual, so draw a data flow diagram of order to kitchen to bill.",
        "Contractors for IT and accounts need controlled access.",
        "Evening trading means support hours and staff training times need care."
      ],
      lessons: [
        "Activity 1 was often generic, with limited links to the restaurant.",
        "Activity 2 answers often missed functions or were not written so that a non IT person could understand.",
        "Activity 3's main weakness was data and information: where data was identified there was often no link between data items, or the data flowed in the wrong direction.",
        "Activity 4: alternatives were weak in many answers.",
        "Activity 5: the capacity of the solution to respond to change was weak."
      ],
      practise: "Draw the data flow for a customer order and check the arrows point the right way. Then say how the restaurant could cope with doubling the number of seats."
    },
    {
      id: "langstone", series: "January 2024", org: "Langstone Pottery", sector: "Small manufacturer and retailer",
      summary: "A small pottery in Stroud that makes mugs, vases and bowls. It has a gallery open five days a week (closed Monday and Tuesday), a workshop, two storerooms, a packing area and an office. Sales also go through stockists across the UK, delivered by a courier. Five PCs and a fileserver, mostly several years old. The gallery till is not linked to an EPOS system. A stock control system tracks the storerooms. Maintenance of all equipment, including IT, is outsourced. The website only gives information.",
      watch: [
        "The till is not linked to EPOS, so sales and stock are probably not joined up.",
        "Maintenance is outsourced, which shapes support arrangements and cost.",
        "Sales to stockists and a courier raise questions about order data, despatch records and sharing information.",
        "The website only shows information. Think about whether online sales are a future need.",
        "Closed Monday and Tuesday are possible times for changes."
      ],
      lessons: [
        "I only have the paper for this series, not an examiner report. Use the patterns from the other series as a guide.",
        "Link every requirement to a named part of the pottery: gallery, workshop, storerooms, packing area or office.",
        "Make sure Activity 3 covers information and data as well as hardware."
      ],
      practise: "Write the information requirements for the gallery, the packing area and the office, and say which data links the three."
    },
    {
      id: "jaten", series: "Additional sample material", org: "Jaten Training & Recruitment Agency", sector: "Training and recruitment (private)",
      summary: "A Manchester agency working with football clubs in the north of England. It supplies qualified administrators, coaches and physiotherapists and runs courses in administration and football coaching. 13 staff at Head Office on the 5th floor of a shared building, with more training staff at a training centre in Wythenshawe. Future developments to look at: e-learning and online booking.",
      watch: [
        "Two sites (Head Office and the training centre) need to be connected.",
        "Candidate and learner records are personal data, so data protection is central.",
        "E-learning and online booking are future needs. Think about scalability and accessibility.",
        "A shared building affects what the agency can control physically."
      ],
      lessons: [
        "The Part A sample tells you to research hardware, software, data and information, and legislation, and the future developments named.",
        "Use Part A to build notes you can actually use in Part B: short, structured, your own.",
        "The sample is useful for practice. Check with your tutor which papers are available to you."
      ],
      practise: "Draw a network diagram joining Head Office and the training centre, then add what an e-learning platform would need."
    },
    {
      id: "quay", series: "Practice task (this faculty)", org: "Quay Cycles", sector: "Retail and hire (private)",
      summary: "A family cycle business in Devon with four shops and a planned fifth in Truro. 38 staff. The brief has a clear set of problems: separate stock spreadsheets, an old server with a USB stick backup, a website that failed in the June sale, paper diaries and whiteboards, shared email accounts, one part time technician, and a £30,000 set up budget with no more than £2,000 a month afterwards.",
      watch: [
        "One stock list, backup and data protection are the strongest priorities.",
        "Dan works only two days a week, so choose support and technology that he can manage.",
        "Priya wants fixed monthly bills, so a stable subscription fits better than pay as you go.",
        "The Truro shop and the June sale show growth and peak demand, so scalability matters.",
        "Mechanics have no computer. Think about shared tablets."
      ],
      lessons: [
        "This is a practice paper written for this faculty. Use it to run a full mock under real conditions.",
        "Use the mini tasks in Practice to rehearse each activity, then do the whole task.",
        "Check the names and facts against your own copy of the brief, because staff counts and budget lines matter."
      ],
      practise: "Run the five activities in the advised times (1, 1, 3, 1.5 and 1.5 hours) without notes beyond two sides of A4."
    }
  );

  /* Messages that repeat across the examiner reports in this folder */
  U14.technique.reportThemes = [
    { theme: "Using the scenario", acts: [1, 2, 3, 4, 5], detail: "Generic answers that could be about any organisation score low. Name the people, places, numbers and problems from the brief in every activity." },
    { theme: "Activity 3 data and information", acts: [3], detail: "Hardware gets covered. Information and data requirements get missed, or the data flows and links between data are unclear or wrong." },
    { theme: "Activity 4 evaluation", acts: [4], detail: "Learners drift into future developments or only describe. Evaluate the whole system, compare with alternatives and give a reasoned choice." },
    { theme: "Activity 5 implications", acts: [5], detail: "The weakest activity in every series here. Learners explain what they built instead of what will happen to the organisation. Cover implementing, staff, customers and assets, with constraints and change." },
    { theme: "Responding to change", acts: [3, 4, 5], detail: "Show how the solution copes with growth, new services or changes in demand." },
    { theme: "Legislation and specialist needs", acts: [1, 3, 5], detail: "Name the laws that matter and link each to an action. Include specialist equipment for the sector." },
    { theme: "Catalogue clarity", acts: [2], detail: "Write service names and descriptions that a non IT specialist could understand, for each function in the template." }
  ];
})();
