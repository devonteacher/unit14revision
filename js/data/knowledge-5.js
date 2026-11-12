/* Knowledge base part 5: networks, hardware, software and cloud terms.
   Extra definitions so the Ask page finds the exact term a student types, such as WAN, LAN, VPN or SSD. */
(function () {
  var kb = U14.kb;
  function E(id, topic, term, aka, short, more, example, spec, related) {
    kb.push({ id: id, topic: topic, term: term, aka: aka, short: short, more: more, example: example, spec: spec, related: related });
  }

  /* ---------- Networks ---------- */
  E("wan", "hardware", "Wide area network (WAN)",
    ["wan", "wans", "wide area network", "wide area", "connect sites", "connecting sites", "leased line"],
    "A WAN joins networks that are far apart, such as shops in different towns or a head office and a branch, using lines or services from a provider.",
    ["It usually runs over lines rented from a telecoms provider or over the internet, often with a VPN to keep it private.",
     "A WAN is slower and costs more per connection than a LAN, and the organisation depends on the provider.",
     "The internet is the biggest WAN in the world. A router is the device that connects a LAN to a WAN."],
    "Quay Cycles joins its four shops and the Exeter back office over a WAN so every shop sees the same stock list.",
    "D2", ["lan", "network-types", "vpn", "router", "connectivity"]);

  E("lan", "hardware", "Local area network (LAN)",
    ["lan", "lans", "local area network", "local network", "internal network", "office network"],
    "A LAN joins devices in one building or site, such as the computers, printers and server in one office.",
    ["Switches, cables and wireless access points make up most of a LAN.",
     "A LAN is fast, cheap to run and managed by the organisation itself.",
     "Several LANs can be joined into a WAN, using routers."],
    "Each Quay Cycles shop has its own LAN: tills, a printer and a router and switch.",
    "D2", ["wan", "wlan-wifi", "switch", "network-types"]);

  E("wlan-wifi", "hardware", "Wireless LAN (WLAN) and Wi-Fi",
    ["wlan", "wifi", "wi-fi", "wi fi", "wireless network", "wireless lan", "wireless networking", "wireless connection"],
    "A WLAN is a local network that uses radio signals instead of cables. Wi-Fi is the name for the common standard.",
    ["Wireless access points spread the signal. More devices and thicker walls mean a weaker or slower connection.",
     "Easy to add devices and good for laptops and tablets, but usually slower and less secure than cable unless it is set up well.",
     "Use a strong password and encryption such as WPA3 or WPA2, and keep guest devices on a separate network."],
    "Quay Cycles mechanics could use shared tablets over Wi-Fi in the workshop.",
    "D2", ["wap", "lan", "encryption", "utp-cable"]);

  E("network-types", "hardware", "Types of network by size: PAN, LAN, MAN and WAN",
    ["network types", "types of network", "pan", "personal area network", "man", "metropolitan area network", "network size", "network scale", "kinds of network"],
    "Networks are described by how far they reach: PAN (one person), LAN (one building), MAN (a town or city) and WAN (many places).",
    ["PAN: personal area network, such as a phone linked to earbuds by Bluetooth.",
     "LAN: local area network in one building or site.",
     "MAN: metropolitan area network across a town or city, for example a council or college with several sites.",
     "WAN: wide area network joining sites in different towns or countries."],
    "A college with buildings across Exeter may use a MAN. A chain of shops across Devon uses a WAN.",
    "D2", ["lan", "wan", "network-diagram"]);

  E("internet-intranet-extranet", "hardware", "Internet, intranet and extranet",
    ["intranet", "extranet", "internet", "internet vs intranet", "internet or intranet", "private network website"],
    "The internet is the public network of networks. An intranet is a private site for staff only. An extranet gives chosen outsiders, such as suppliers, limited access.",
    ["Intranet: staff rotas, policies and internal news, behind a login.",
     "Extranet: a supplier portal where partners check orders, with access controlled.",
     "Both use the same web technology as the internet but with access control."],
    "A shop group uses an intranet for staff policies and an extranet so a bike supplier can see orders.",
    "D2", ["vpn", "user-management", "wan"]);

  E("vpn", "hardware", "Virtual private network (VPN)",
    ["vpn", "vpns", "virtual private network", "secure tunnel", "remote access", "tunnel", "work from home connection"],
    "A VPN creates an encrypted tunnel across the internet, so remote staff or distant sites can reach the private network safely.",
    ["Data is encrypted, so anyone watching the connection cannot read it.",
     "Used for home working, for linking branches over the internet and for safer use of public Wi-Fi.",
     "It adds some delay and needs setting up and looking after."],
    "A manager at home uses a VPN to open the shop stock system as if in the Exeter office.",
    "D2", ["wan", "encryption", "remote-hybrid-working", "firewall"]);

  E("ip-address", "hardware", "IP address",
    ["ip", "ip address", "ip addresses", "ipv4", "ipv6", "static ip", "dynamic ip", "internet protocol address"],
    "An IP address is a number that identifies a device on a network so data can be sent to the right place.",
    ["IPv4 looks like 192.168.1.20. IPv6 is longer and gives far more addresses.",
     "Static: set by hand and does not change, used for servers and printers. Dynamic: handed out automatically by DHCP.",
     "A private address is used inside a LAN. A public address is seen on the internet."],
    "The Exeter server has a fixed IP address so the shop tills can always find it.",
    "D2", ["dhcp", "dns", "mac-address", "router"]);

  E("mac-address", "hardware", "MAC address",
    ["mac", "mac address", "mac addresses", "physical address", "hardware address", "mac filtering"],
    "A MAC address is a unique code built into a network card. It identifies the device on the local network.",
    ["Written like 00:1A:2B:3C:4D:5E. It does not change when you move to another network.",
     "Switches use MAC addresses to send data to the right port on a LAN.",
     "Some networks allow only known MAC addresses, but this alone is weak security."],
    "A network technician records each tablet's MAC address in the asset register.",
    "D2", ["ip-address", "switch", "nic", "asset-management"]);

  E("dhcp", "hardware", "DHCP (Dynamic Host Configuration Protocol)",
    ["dhcp", "dynamic host configuration protocol", "automatic ip", "automatic addresses", "ip leases"],
    "DHCP hands out IP addresses automatically to devices when they join a network, so nobody has to set them by hand.",
    ["Usually built into the router or a server.",
     "Saves time and avoids two devices having the same address.",
     "Servers and printers often keep fixed addresses so other devices can find them."],
    "When a customer joins the shop Wi-Fi, the router uses DHCP to give their phone an address.",
    "D2", ["ip-address", "dns", "router"]);

  E("dns", "hardware", "DNS (Domain Name System)",
    ["dns", "domain name system", "domain name", "domain names", "name server", "web address lookup"],
    "DNS turns a name people can remember, such as exeter-college.ac.uk, into the IP address a computer needs.",
    ["It works like a phone book for the internet.",
     "If DNS fails, websites may stop loading even though the internet connection is working.",
     "Organisations register domain names and point them at their website and email."],
    "Quay Cycles owns a domain name so customers can type the shop address instead of a number.",
    "D2", ["ip-address", "web-hosting", "dhcp"]);

  E("network-topology", "hardware", "Network topology: star, bus, ring and mesh",
    ["topology", "topologies", "star topology", "bus topology", "ring topology", "mesh topology", "mesh", "star network", "network layout"],
    "Topology is the shape a network takes. Most modern LANs use a star: every device connects to a central switch.",
    ["Star: each device has its own cable to a switch. If one cable fails, the others carry on. If the switch fails, all stop.",
     "Bus: one shared cable. Cheap but one break can stop everything. Rarely used now.",
     "Ring: devices pass data around a loop. Mesh: devices link to several others, giving backup routes, used in WAN and wireless."],
    "Each Quay Cycles shop is a star network around a switch, with a second link as a backup.",
    "D2", ["switch", "network-diagram", "raid-redundancy"]);

  E("client-server-p2p", "hardware", "Client server and peer to peer networks",
    ["client server", "client-server", "peer to peer", "peer-to-peer", "p2p", "server based network", "workgroup"],
    "In a client server network, a central server shares files, printing and logins. In peer to peer, computers share with each other and there is no central control.",
    ["Client server: better security, central backup and user management, but costs more and needs looking after.",
     "Peer to peer: cheap and simple for a few users, but hard to secure and back up.",
     "Most organisations with several staff choose client server or a cloud service."],
    "A five person office might share a printer peer to peer. Quay Cycles, with 38 staff, needs client server or cloud.",
    "D2", ["server-vs-pc", "user-management", "cloud-computing"]);

  E("internet-connections", "hardware", "Internet connection types: broadband, leased line, fibre and 4G",
    ["broadband", "isp", "internet service provider", "fibre broadband", "fttp", "fttc", "adsl", "leased line", "4g", "5g", "mobile broadband", "internet connection", "modem", "dedicated line"],
    "Choices include broadband, fibre, a leased line and 4G or 5G. They differ in speed, cost, reliability and how much support the provider promises.",
    ["Broadband: shared and cheaper, speeds vary at busy times.",
     "Fibre to the premises: very fast. A leased line: a private, guaranteed line with the same speed up and down, and a faster fix promise, at a higher cost.",
     "4G or 5G: quick to set up and a good backup if the main line fails. A modem or router connects the building to the provider."],
    "Quay Cycles chooses broadband in each shop with a 4G backup router, so a line fault does not stop the tills.",
    "D2", ["bandwidth-speed", "router", "raid-redundancy", "wan"]);

  E("protocols", "hardware", "Network protocols: TCP/IP, HTTP, HTTPS, FTP and SMTP",
    ["protocol", "protocols", "tcp", "tcp/ip", "tcp ip", "http", "https", "ftp", "smtp", "ssl", "tls", "network protocol", "rules for sending data"],
    "A protocol is an agreed set of rules for sending data, so different devices and makers can work together.",
    ["TCP/IP: the basic rules of the internet. HTTP and HTTPS: web pages (HTTPS is encrypted).",
     "FTP: moving files. SMTP, IMAP and POP: sending and receiving email.",
     "Look for the padlock and HTTPS on any page where customers enter personal or payment details."],
    "The Quay Cycles booking page must use HTTPS because customers enter names and phone numbers.",
    "D2", ["encryption", "dns", "ip-address"]);

  E("hub-bridge-gateway", "hardware", "Hub, bridge, gateway and network interface card",
    ["hub", "network hub", "bridge", "gateway", "default gateway", "repeater", "network devices", "network equipment list"],
    "A hub copies data to every port, a bridge joins two LAN segments, and a gateway is the exit point to another network, usually the router.",
    ["Hub: simple and old. A switch replaced it because a switch sends data only to the right device.",
     "Bridge: links two parts of a network so they act as one.",
     "Gateway: the device, often the router, that lets traffic leave for other networks such as the internet."],
    "A new network uses switches, not hubs, because switches are faster and more private.",
    "D2", ["switch", "router", "nic"]);

  E("nic", "hardware", "Network interface card (NIC)",
    ["nic", "network card", "network adapter", "network interface card", "ethernet card", "wireless adapter"],
    "A NIC is the part of a device that connects it to a network, either by cable or wirelessly.",
    ["Most computers have one built in.",
     "Each NIC has its own MAC address.",
     "Servers may have two or more for speed or a backup link."],
    "A server with two NICs can keep working if one cable fails.",
    "D2", ["mac-address", "switch", "raid-redundancy"]);

  E("vlan", "hardware", "VLAN and network segmentation",
    ["vlan", "vlans", "virtual lan", "segmentation", "network segmentation", "separate networks", "guest network", "guest wifi"],
    "A VLAN splits one physical network into separate virtual networks, so groups of devices are kept apart.",
    ["Keeps staff, guests and payment systems on separate networks, which limits the damage if one is attacked.",
     "Set up in the switches and router, without extra cables.",
     "Guest Wi-Fi should never share a network with the till system."],
    "Quay Cycles keeps customer Wi-Fi on a different network from the tills.",
    "D2", ["firewall", "switch", "wlan-wifi", "security-measures"]);

  E("cloud-storage-types", "hardware", "Storage types: DAS, NAS, SAN and cloud storage",
    ["das", "san", "storage area network", "direct attached storage", "external hard drive", "usb stick", "usb drive", "storage options", "types of storage", "cloud storage", "storage types"],
    "Storage can be attached to one computer (DAS), shared across a network (NAS), a fast dedicated network for servers (SAN), or rented online (cloud).",
    ["DAS: an external drive or USB stick. Cheap but one device only and easy to lose.",
     "NAS: a box on the network for shared files and backups. SAN: used by larger organisations and data centres.",
     "Cloud storage: pay as you use, accessible anywhere, depends on the internet and the provider."],
    "Quay Cycles backed up to a USB stick kept in the same room as the server. A cloud copy would survive a fire.",
    "D2", ["nas", "backup-dr", "cloud-computing", "ssd-hdd"]);

  /* ---------- Hardware ---------- */
  E("computer-components", "hardware", "Inside a computer: CPU, RAM, storage and GPU",
    ["cpu", "processor", "ram", "memory", "gpu", "graphics card", "motherboard", "computer parts", "components", "storage drive", "hard drive", "processing speed", "cores"],
    "The CPU does the processing, RAM holds what is in use right now, storage keeps files for good, and the GPU handles graphics.",
    ["More RAM lets more programs run at once. RAM is wiped when the power goes off.",
     "A faster CPU with more cores makes heavy work quicker.",
     "A GPU matters for video, design and some data tasks. Office work usually does not need a separate one."],
    "A till PC needs little power. A design workstation for a marketing team needs more RAM and a good GPU.",
    "D2", ["ssd-hdd", "hw-sw-factors", "server-vs-pc"]);

  E("ssd-hdd", "hardware", "SSD versus HDD",
    ["ssd", "hdd", "solid state drive", "solid state", "hard disk drive", "hard disk", "hard drive", "flash storage", "ssd vs hdd", "ssd or hdd"],
    "An SSD stores data on memory chips with no moving parts, so it is fast and quiet. An HDD uses spinning disks, so it holds more for the price but is slower.",
    ["SSD: faster start up and file opening, uses less power, costs more per gigabyte.",
     "HDD: cheaper for large amounts of storage, but slower and can fail from knocks.",
     "Many servers use SSDs for speed and HDDs for bulk storage or archive."],
    "Till PCs with SSDs start in seconds. A large archive of old invoices can sit on cheaper HDDs.",
    "D2", ["computer-components", "cloud-storage-types", "raid-redundancy"]);

  E("peripherals", "hardware", "Input, output and peripheral devices",
    ["peripheral", "peripherals", "input device", "output device", "input devices", "output devices", "keyboard", "monitor", "printer", "scanner", "barcode scanner", "touchscreen", "epos hardware", "card reader"],
    "Peripherals are devices connected to a computer. Input devices send data in, such as a scanner. Output devices give results out, such as a printer.",
    ["Input: keyboard, mouse, barcode scanner, touchscreen, microphone, card reader.",
     "Output: monitor, printer, speaker, label printer.",
     "Choose by the job: mechanics may need a rugged tablet, and a shop till needs a scanner and card reader."],
    "Quay Cycles tills need barcode scanners, card readers and receipt printers.",
    "D2", ["hardware-categories", "hw-sw-factors", "epos-crm-erp"]);

  E("mobile-byod", "hardware", "Mobile devices, BYOD and mobile device management",
    ["byod", "bring your own device", "mdm", "mobile device management", "mobile device", "mobile devices", "smartphone", "tablets", "mobile working", "company phone"],
    "BYOD means staff use their own phones or laptops for work. Mobile device management (MDM) lets the organisation control and protect work data on them.",
    ["Benefits of BYOD: lower hardware cost and staff like using their own device.",
     "Risks: lost devices, mixed security, personal and work data on one device.",
     "MDM can enforce a passcode, install apps, separate work data and wipe a lost device."],
    "A manager uses a personal phone for stock checks, so the shop needs a BYOD policy and MDM.",
    "D2, D3", ["security-measures", "aup", "remote-hybrid-working"]);

  E("thin-thick-client", "hardware", "Thin client and thick client",
    ["thin client", "thick client", "fat client", "vdi", "virtual desktop", "virtual desktop infrastructure", "terminal"],
    "A thick client does most of the work on its own computer. A thin client does little itself and uses a server to run programs.",
    ["Thin clients: cheaper, easier to update and secure because the work is on the server. They need a good network.",
     "Thick clients: work even if the network is slow but each one must be updated and looked after.",
     "Virtual desktops (VDI) give users a desktop that runs on a server."],
    "A call centre uses thin clients so every desk has the same desktop and nothing is stored locally.",
    "D2, D1", ["virtualisation-containerisation", "server-vs-pc", "updates-upgrades"]);

  E("iot", "hardware", "Internet of Things (IoT)",
    ["iot", "internet of things", "smart devices", "smart device", "sensors", "connected devices", "smart building"],
    "IoT means everyday objects with sensors that connect to a network, such as smart meters, cameras and door locks.",
    ["Useful for monitoring and automation, for example a temperature sensor in a server room.",
     "Each device is another thing to update and secure. Many have weak default passwords.",
     "Put IoT devices on their own network and change the default login."],
    "A smart lock on the Quay Cycles stockroom logs who enters, but needs updating like any other device.",
    "D2, D3", ["vlan", "security-measures", "emerging-tech"]);

  E("ups-power", "hardware", "Uninterruptible power supply (UPS) and power protection",
    ["ups", "uninterruptible power supply", "battery backup", "power cut", "power failure", "surge protection", "power supply", "surge protector", "generator"],
    "A UPS is a battery that keeps equipment running for a short time when the power fails, so it can shut down safely or ride out a short cut.",
    ["Protects against data loss and damage from sudden power cuts and surges.",
     "Used for servers, network equipment and sometimes tills. It gives minutes of power, not hours. A generator covers longer cuts.",
     "A form of redundancy, because it is a spare source of power."],
    "A UPS under the Exeter server lets it shut down properly during a power cut.",
    "D2", ["raid-redundancy", "availability", "server-room"]);

  E("server-room", "hardware", "Server room, racks and data centres",
    ["server room", "comms room", "rack", "racks", "rack mounted", "cabinet", "comms cabinet", "cooling", "data centre", "data center", "environment controls"],
    "A server room is a secure, cool, locked space for servers and network equipment, usually in racks or cabinets.",
    ["Needs cooling, tidy cabling, good power, fire protection and controlled access.",
     "A data centre is a large building of servers run by a provider, with strong security and backup power.",
     "Moving to the cloud means someone else's data centre does this job."],
    "A small business with a hot cupboard of equipment risks failures. Cloud hosting moves the problem to a data centre.",
    "D2, D3", ["patch-panel", "ups-power", "security-measures", "cloud-computing"]);

  E("wireless-short-range", "hardware", "Bluetooth, NFC and RFID",
    ["bluetooth", "nfc", "rfid", "near field communication", "contactless", "radio frequency identification", "tag", "tags", "short range wireless"],
    "Bluetooth links nearby devices. NFC works over a few centimetres for contactless payments. RFID uses tags that a reader can scan from a distance.",
    ["Bluetooth: headsets, keyboards and printers over a few metres.",
     "NFC: tap to pay and tap to enter.",
     "RFID: tracking stock, pallets and security tags without scanning each one."],
    "RFID tags on e-bikes could help Quay Cycles count stock without scanning every frame.",
    "D2", ["peripherals", "iot", "epos-crm-erp"]);

  /* ---------- Software ---------- */
  E("firmware-drivers", "software", "Firmware and device drivers",
    ["firmware", "driver", "drivers", "device driver", "bios", "uefi", "device software"],
    "Firmware is software stored inside a device, such as a router. A driver is software that lets the operating system use a device such as a printer.",
    ["Firmware updates fix faults and security holes in routers, switches and printers.",
     "Missing or old drivers are a common cause of a device not working.",
     "Both belong in the asset register and update plan."],
    "Dan updates the router firmware in each shop as part of the update plan.",
    "D1, D3", ["updates-upgrades", "operating-system", "asset-management"]);

  E("api-integration", "software", "API and integration",
    ["api", "apis", "application programming interface", "integration", "integrate", "connect systems", "link systems", "web service"],
    "An API is a set of rules that lets one piece of software talk to another, so systems can share data without a person copying it across.",
    ["Example: a booking page sends a new repair job straight into the workshop system.",
     "Integration avoids typing the same data twice and so reduces mistakes.",
     "Check that the systems you choose can connect to each other."],
    "Linking the Quay Cycles website to the stock list means online stock is never different from the shop's.",
    "D1", ["combining-tools", "compatibility", "epos-crm-erp"]);

  E("software-licensing", "software", "Software licences: subscription, perpetual, site and EULA",
    ["licence", "license", "licences", "licensing", "licences types", "eula", "end user licence agreement", "subscription", "perpetual licence", "site licence", "per user licence", "volume licence", "software licence"],
    "A licence is the legal permission to use software. The type decides who can use it, on how many devices and for how long.",
    ["Perpetual: pay once, use for good, but support and upgrades may cost extra. Subscription: pay monthly or yearly while you use it.",
     "Per user, per device, site or volume licences suit different numbers of staff.",
     "Using more copies than you have paid for is breaking the Copyright, Designs and Patents Act 1988. A software audit checks this."],
    "Priya wants bills that stay the same, so a fixed monthly subscription suits Quay Cycles.",
    "D1, B2", ["software-audit", "copyright-act", "open-source-proprietary", "saas"]);

  E("bespoke-off-the-shelf", "software", "Bespoke versus off the shelf software",
    ["bespoke", "off the shelf", "off-the-shelf", "custom software", "cots", "tailor made", "tailored software", "bespoke software"],
    "Off the shelf software is ready made for many customers. Bespoke software is built for one organisation's exact needs.",
    ["Off the shelf: cheaper, quicker, supported and tested by many users, but may not fit exactly.",
     "Bespoke: fits the job but costs much more, takes longer and the organisation depends on its developer.",
     "A middle way is off the shelf software that you configure or add to."],
    "Quay Cycles would buy a ready made stock and booking system rather than build one.",
    "D1", ["open-source-proprietary", "hw-sw-factors", "developer"]);

  E("app-types", "software", "Web apps, desktop apps and mobile apps",
    ["web app", "web apps", "mobile app", "mobile apps", "desktop app", "desktop application", "browser based", "native app", "app types", "web based software", "web based"],
    "A desktop app is installed on a computer. A web app runs in a browser. A mobile app is installed on a phone or tablet.",
    ["Web apps: no install, work on any device, depend on the internet and the provider.",
     "Desktop apps: can be faster and work offline, but each computer needs installing and updating.",
     "Mobile apps: use phone features such as the camera and are good for staff on the move."],
    "A mechanic could use a mobile app to update a repair job without walking to a PC.",
    "D1", ["application-software", "saas", "compatibility"]);

  E("database-dbms", "software", "Databases and database management systems (DBMS)",
    ["database", "databases", "dbms", "database management system", "sql", "relational database", "table", "tables", "record", "records", "field", "fields", "data store"],
    "A database stores data in an organised way so it can be searched, updated and shared. A DBMS is the software that manages it.",
    ["A relational database keeps data in tables made of records (rows) and fields (columns).",
     "Tables are linked by keys, which avoids storing the same detail twice.",
     "SQL is the language used to ask a database questions. The DBMS controls who can see and change what."],
    "Quay Cycles needs one database for stock, customers and repair jobs rather than four spreadsheets.",
    "C1, D1", ["keys-erd", "data-vs-information", "info-sources"]);

  E("keys-erd", "software", "Primary keys, foreign keys and entity relationship diagrams (ERD)",
    ["primary key", "foreign key", "key", "keys", "relationship", "relationships", "erd", "entity relationship diagram", "entity", "one to many", "data model", "data modelling"],
    "A primary key uniquely identifies each record. A foreign key links to a record in another table. An ERD draws the tables and how they relate.",
    ["Example: CustomerID is the primary key of the Customer table and a foreign key in the Repair Job table.",
     "Relationships can be one to one, one to many or many to many. One customer can have many repair jobs.",
     "An ERD is good evidence in Activity 3 for showing how data links."],
    "In Quay Cycles, one customer links to many hire bookings and many repair jobs.",
    "A3, C1", ["database-dbms", "data-flow-diagram", "activity-3"]);

  E("version-control", "software", "Version control",
    ["version control", "versioning", "version history", "git", "github", "track changes", "file versions", "previous versions"],
    "Version control records every change to a file or project, so you can go back to an earlier version and see who changed what.",
    ["Stops people overwriting each other's work.",
     "Used by developers with tools such as Git, and built into Microsoft 365 and Google documents.",
     "Not a replacement for a backup, though it helps with mistakes."],
    "A shared price list in OneDrive keeps previous versions, so a wrong change can be undone.",
    "D1", ["collaboration-tools", "backup-dr", "developer"]);

  E("collaboration-tools", "software", "Collaboration and productivity tools",
    ["collaboration", "microsoft 365", "office 365", "m365", "google workspace", "teams", "sharepoint", "onedrive", "email", "shared calendar", "productivity software", "online documents"],
    "Collaboration tools let staff share files, chat, meet and work on documents together, from different places.",
    ["Examples: Microsoft 365 (Teams, SharePoint, OneDrive, Outlook) and Google Workspace.",
     "Benefits: less emailing of attachments, one current copy, works on phones and laptops.",
     "Manage access: who can see and edit which files, and what happens to a leaver's files."],
    "Quay Cycles staff use free personal email, so shared mailboxes in a business suite would give control.",
    "D1", ["saas", "version-control", "user-management", "combining-tools"]);

  E("epos-crm-erp", "software", "Business systems: EPOS, CRM, ERP and stock control",
    ["epos", "point of sale", "pos", "till system", "crm", "customer relationship management", "erp", "enterprise resource planning", "stock control", "inventory", "booking system", "business systems", "stock system"],
    "EPOS records sales at the till. CRM manages customer details and contact. ERP joins many functions, such as stock, sales and finance, in one system.",
    ["EPOS: updates stock as each item is sold.",
     "CRM: keeps a customer history for marketing and service.",
     "ERP: shares one set of data between functions. Stock control: tracks what is held, ordered and sold."],
    "Quay Cycles needs EPOS that updates one stock list across all shops, and online booking for repairs and hire.",
    "D1", ["application-software", "org-functions", "api-integration"]);

  /* ---------- Cloud ---------- */
  E("cloud-models", "software", "Public, private and hybrid cloud",
    ["public cloud", "private cloud", "hybrid cloud", "multi cloud", "community cloud", "cloud models", "cloud deployment models", "types of cloud", "deployment model"],
    "Public cloud is shared infrastructure run by a provider. Private cloud is used by one organisation only. Hybrid mixes the two.",
    ["Public: cheapest and quickest to start, less control over where things run.",
     "Private: more control and privacy, but costs more and needs skills.",
     "Hybrid: sensitive data stays private while other work uses the public cloud."],
    "A council keeps resident records in a private cloud and uses public cloud for its website.",
    "D1", ["cloud-computing", "on-premises", "jurisdiction"]);

  E("cloud-providers", "software", "Cloud providers: Microsoft Azure, AWS and Google Cloud",
    ["aws", "amazon web services", "azure", "microsoft azure", "google cloud", "gcp", "cloud provider", "cloud providers", "hosting provider"],
    "AWS, Azure and Google Cloud are the three largest cloud providers. They rent out servers, storage and services by the hour or month.",
    ["Provider choice depends on cost, support, location of data centres, security and what the organisation already uses.",
     "Check the service level agreement and where data is stored.",
     "Moving later can be hard and expensive, so think about being locked in."],
    "A college that already uses Microsoft 365 may find Azure easy to join up.",
    "D1", ["cloud-computing", "jurisdiction", "sla", "saas"]);

  E("web-hosting", "software", "Web hosting and domain names",
    ["hosting", "web hosting", "website host", "shared hosting", "website hosting", "host a website", "website down"],
    "Web hosting is renting space on a server so a website is always online. A domain name is the address people type to reach it.",
    ["Shared hosting is cheap but slow under heavy use. Cloud hosting can add capacity for busy days.",
     "Quay Cycles website crashed in the June sale on cheap hosting.",
     "Look for uptime promises, support and the ability to scale."],
    "A website built by a freelancer on cheap hosting was down for 3 hours in the June sale.",
    "D1, B2", ["scalability", "cloud-computing", "dns", "availability"]);
})();
