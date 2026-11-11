/**
 * Portfolio content — Chinmay Patil (resume + public profiles).
 * Hero/profile photo: `public/photos/profile.jpeg`. Project screenshots: `public/screenshots/*`.
 */

/** Bump when you replace `public/icon.png` so metadata/OG `<link>` URLs bust caches (not used by `next/image`). */
export const siteIconVersion = "4";
export const siteIconUrl = `/icon.png?v=${siteIconVersion}`;

export const siteMeta = {
  name: "Chinmay Patil",
  /** Site / nav wordmark */
  brand: "Chinmay.life",
  /** `next/image` must use a plain path (no query). Same file as `public/icon.png`. */
  navIconSrc: "/icon.png",
  title:
    "Product-minded software engineer · full-stack, applied AI & blockchain — M.Sc. CS (TH Bingen)",
  email: "thechinmay07@gmail.com",
  location: "Mainz, Germany",
  copyrightYear: 2026,
} as const;

export const socialLinks = {
  website: "https://chinmay.life",
  linkedin: "https://www.linkedin.com/in/thechinmay07",
  github: "https://github.com/0xali3n",
  twitter: "https://x.com/Chinmay_io",
  devfolio: "https://devfolio.co/@Chinmay_io",
} as const;

export const footerSocialLinks = [
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "GitHub", href: socialLinks.github },
  { label: "X (Twitter)", href: socialLinks.twitter },
  { label: "Devfolio", href: socialLinks.devfolio },
] as const;

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headshotSrc: "/photos/profile.jpeg",
  greeting: "Hi, I'm",
  /** One line under your name */
  roleLine:
    "Product-minded software engineer · full-stack, applied AI & blockchain",
  /** Short hero summary — keep scannable (2–4 sentences). */
  summary:
    "Product-minded software engineer with experience across full-stack development, applied AI, and blockchain. Currently studying M.Sc. Computer Science at TH Bingen while based in Mainz — open to connecting with ambitious builders, startup teams, and interesting engineering opportunities.",
  primaryCta: { label: "Selected projects", href: "#projects" },
  secondaryCta: { label: "CV (PDF)", href: "/cv.pdf", external: true },
  imageAlt: "Chinmay Patil",
} as const;

export const educationItems = [
  {
    id: "th-bingen",
    school: "Technische Hochschule Bingen",
    degree: "Master of Science, Computer Science",
    period: "Oct 2026 — Present",
    location: "Bingen, Germany",
    bullets: [
      "Software engineering, applied AI, and intelligent systems.",
    ] as const,
  },
  {
    id: "kle-tech",
    school: "KLE Technological University",
    degree: "Bachelor of Engineering, Computer Science",
    period: "Nov 2021 — Dec 2025",
    location: "Hubballi, India",
    bullets: [
      "CGPA: 7.41 / 10.0",
      "Focus: ML · NN & DL · Big Data · EDA · Applied Statistics (R) · DBMS · DSA · LA · Calculus",
    ] as const,
  },
] as const;

export const experienceItems = [
  {
    id: "anthe-labs",
    company: "Anthe Labs Pvt. Ltd.",
    role: "Co-Founder",
    period: "2025 — Present",
    location: "Bengaluru, India",
    logoLetter: "A",
    logoSrc: "/photos/anthe111.png",
    /** Same treatment as Pravinya: white circular frame + cover. */
    logoObjectFit: "cover" as const,
    logoCoverLight: true as const,
    summaryParagraphs: [
      "Incubated by Xyra Labs, Anthe was a next-generation DeFi social trading infrastructure built on Aptos. The company is currently in its closing process.",
    ] as const,
    bullets: [
      "Incubation & Leadership: Co-founded and scaled the platform from a hackathon prototype into a registered company, securing official incubation by Xyra Labs. Directed a cross-functional team of 5 across engineering, UI/UX, and marketing.",
      "Core Architecture: Architected and shipped the core on-chain infrastructure on Aptos, enabling real-time copy trading, transparent wallet execution, and live risk analytics.",
      "Product & Business Strategy: Managed the end-to-end product lifecycle—from writing smart contracts to driving user outreach—and roadmap execution for advanced features like Smart Grid & DCA bots and creator monetization.",
    ] as const,
    externalIconLinks: [
      {
        kind: "website" as const,
        href: "https://anthe.io/",
        label: "Website — anthe.io",
      },
      {
        kind: "x" as const,
        href: "https://x.com/AntheLabs",
        label: "X (Twitter) — @AntheLabs",
      },
      {
        kind: "linktree" as const,
        href: "https://linktr.ee/AntheLabs",
        label: "Linktree — Anthe Labs",
      },
    ] as const,
  },
  {
    id: "pravinya",
    company: "Pravinya Infotech",
    role: "Full Stack ML Developer",
    period: "Jan 2025 — May 2025",
    location: "Hubballi, Karnataka, India",
    /** Renders instead of “role · location” for this row. */
    subtitleLine:
      "Intern - Full Stack ML Developer · Hubballi, Karnataka, India" as const,
    logoLetter: "P",
    logoSrc: "/photos/pravinya.jpg",
    logoObjectFit: "cover" as const,
    /** White circular mask behind cover-cropped logo (company mark on light art). */
    logoCoverLight: true as const,
    summaryParagraphs: [] as const,
    bullets: [
      'AI Pipeline Engineering: Developed "AdGenAI," an automated marketing asset generator utilizing a React.js frontend, Flask backend, and MongoDB database architecture.',
      "Generative AI Integration: Integrated Google Gemini and Imagen 3 APIs to process raw product imagery and user prompts, successfully generating theme-aligned, production-ready advertisements and posters.",
      "System Optimization: Designed a scalable system incorporating AWS S3 for asset storage and robust API error handling, operating effectively within an agile development team.",
    ] as const,
    internshipDocuments: [
      {
        label: "Internship certificate — Pravinya (PDF)",
        href: "/internship/pravinya-internship-certificate.pdf",
        mediaKind: "pdf" as const,
        downloadFilename: "pravinya-internship-certificate.pdf" as const,
      },
      {
        label: "Industry report (PDF)",
        href: "/internship/pravinya-internship-industry-report.pdf",
        mediaKind: "pdf" as const,
        downloadFilename: "pravinya-internship-industry-report.pdf" as const,
      },
    ] as const,
  },
] as const;


/**
 * Competition ledger — `track` labels the focus column; `built` / `stack` power the detail modal.
 * Sum in stats excludes undisclosed pool values (e.g. some sponsor awards); bump `prize-money` if you add figures.
 */
export const achievementsContent = {
  eyebrow: "Competitions" as const,
  title: "Achievements" as const,
  stats: [
    {
      id: "prize-money",
      value: "$12,700+",
      label: "Prize money secured",
    },
    {
      id: "podiums",
      value: "8+",
      label: "Wins & podiums",
      pairValue: "20+" as const,
      pairLabel: "Hackathons entered" as const,
    },
    {
      id: "ecosystems",
      value: "Aptos, Sui, EVM",
      label: "Core ecosystems",
    },
    {
      id: "tenure",
      value: "3+ yrs",
      label: "Active Web3 building",
    },
  ] as const,
  items: [
    {
      id: "very-hackathon-2026",
      ecosystem: "VeryChain · DoraHacks",
      track: "VeryChain · Gasless social · Zory",
      event: "VERY Hackathon",
      when: "Jan 2026",
      built:
        "I built Zory for the VERY hackathon on VeryChain. It's a social app with a feed, quests, a lottery, and swaps — people use it without topping up gas first because fees are sponsored. The full write-up and demo are on DoraHacks.",
      stack:
        "React, a few Solidity contracts on VeryChain, Wepin for login, Supabase in the back. $1k track win.",
      prize: "Winner · $1,000" as string | null,
      productLink: {
        href: "https://dorahacks.io/buidl/38096",
        label: "Product · Zory",
      } as const,
      eventLink: {
        href: "https://dorahacks.io/hackathon/veryhackathon",
        label: "Hackathon · VERY",
      } as const,
    },
    {
      id: "build-on-aptos-meetup-2025",
      ecosystem: "Aptos · DeFi Trading",
      track: "Aptos Move · Copy trading (Copiabel)",
      event: "Build on Aptos Hackathon",
      when: "Dec 2025",
      built:
        "For Rise In's Build on Aptos I worked on Copiabel — copy trading on Move where the real execution goes through Decibel Trade's infra. We came second runner-up and won $1,500.",
      stack: "Move, TypeScript, Decibel stack. Rise In hackathon.",
      prize: "2nd runner-up · $1,500" as string | null,
      eventLink: {
        href: "https://www.risein.com/programs/build-on-aptos-hackathon",
        label: "Hackathon · Rise In",
      } as const,
      resultLink: {
        href: "https://x.com/riseinweb3/status/1995513985337041199",
        label: "Results · X",
      } as const,
    },
    {
      id: "aptos-ctrlmove-2025",
      ecosystem: "Aptos · Kana Perps",
      track: "Kana Perps · Bounty · Social Trade",
      event: "CTRL+MOVE Hackathon",
      when: "Oct 2025",
      built:
        "At CTRL+MOVE I shipped Social Trade on Aptos — you follow someone's perp trades instead of placing everything by hand. Got the $2,500 Kana Labs bounty.",
      stack: "Aptos, Kana perps, small web app — live links on the Dora buidl.",
      prize: "Bounty · $2,500" as string | null,
      productLink: {
        href: "https://dorahacks.io/buidl/34158",
        label: "Product · Social Trade",
      } as const,
      eventLink: {
        href: "https://dorahacks.io/hackathon/aptos-ctrlmove-hackathon/detail",
        label: "Hackathon · CTRL+MOVE",
      } as const,
    },
    {
      id: "ethglobal-agentic",
      ecosystem: "ETHGlobal · AgentKit",
      track: "Coinbase AgentKit · Multi-chain agents",
      event: "ETHGlobal — Agentic Ethereum",
      when: "Feb 2025",
      built:
        "For ETHGlobal Agentic Ethereum I made W3Chat.io. You just chat with it and it handles sends, swaps, bridging, mints, and a few timed jobs on chain. It picked up Coinbase's AgentKit pool prize — the showcase page has the proper write-up.",
      stack:
        "Next.js, Coinbase AgentKit, OnchainKit, Hyperlane where bridging matters.",
      prize: "Round 2 · Coinbase pool" as string | null,
      eventLink: {
        href: "https://ethglobal.com/events/agents",
        label: "Hackathon · Agentic Ethereum",
      } as const,
      resultLink: {
        href: "https://ethglobal.com/showcase/w3chat-io-d1sqn",
        label: "Results · Showcase",
      } as const,
    },
    {
      id: "supra-movers",
      ecosystem: "Supra · SupraScan",
      track: "Supra L1 · Explorer · indexer API",
      event: "Supra Movers Hackathon",
      when: "Jan 2025",
      built:
        "At Supra Movers I built SupraScan — a simple explorer for Supra plus an API keys flow so people can query balances, txs, and pools. Placed third and $2,000; Supra shared it on X afterward.",
      stack: "React, Next, Supra RPC, stuff we indexed ourselves. Third place.",
      prize: "3rd · $2,000" as string | null,
      productLink: {
        href: "https://devfolio.co/projects/suprascanfun-d236",
        label: "Product · SupraScan (Devfolio)",
      } as const,
      eventLink: {
        href: "https://supra-movers-hackathon.devfolio.co/",
        label: "Hackathon · Supra Movers",
      } as const,
      resultLink: {
        href: "https://x.com/SUPRA_Labs/status/1890055992479543707",
        label: "Results · Launch (X)",
      } as const,
    },
    {
      id: "hh-goa-2024",
      ecosystem: "Diamante · HHG",
      track: "Diamante · CryptoLuck · iGaming",
      event: "Hacker House Goa 2024",
      when: "Aug 2024",
      built:
        "At Hacker House Goa our team shipped CryptoLuck — a small on-chain casino style demo on Diamante with a few games and Garden handling deposits and withdrawals. We won first on the Diamante track with $3,000.",
      stack: "React, Node, Diamante wallet, Garden SDK. Built with CryptoD5.",
      prize: "1st — Diamante ($3k)" as string | null,
      productLink: {
        href: "https://devfolio.co/projects/cryptoluck-casino-bet-win-and-play-anonymously-5353",
        label: "Product · CryptoLuck (Devfolio)",
      } as const,
      eventLink: {
        href: "https://hacker-house-goa.devfolio.co/",
        label: "Hackathon · HH Goa",
      } as const,
      resultLink: {
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7241153322584342529/",
        label: "Results · LinkedIn",
      } as const,
    },
    {
      id: "sih-2023",
      ecosystem: "SIH · NTRO",
      track: "NTRO · Crypto forensics · De-anonymisation",
      event: "Smart India Hackathon 2023 — Grand Finale",
      when: "Dec 2023",
      built:
        "We built a de-anonymisation product for monitoring and tracking illegal activity that uses cryptocurrency transactions — Python tooling to map flows and present evidence clearly for reviewers.",
      stack: "Python, transaction tracing, graph analysis, on-chain data. Grand finalist.",
      prize: "Grand finalist" as string | null,
      productLink: {
        href: "/achivements/sih-2023-ntro-pitch-deck.pdf",
        label: "Pitch deck (PDF)",
      } as const,
      eventLink: {
        href: "https://www.sih.gov.in/sih2023s",
        label: "Hackathon · SIH 2023",
      } as const,
      resultLink: {
        href: "https://www.linkedin.com/in/thechinmay07/overlay/1709597400549/single-media-viewer?profileId=ACoAADzbs6oBF5iFPHvSyzh3l6yB3WVVuR0dVc4",
        label: "Results · LinkedIn",
      } as const,
    },
    {
      id: "devhack-2023",
      ecosystem: "DeFiChain / Web3",
      track: "DeFiChain.in · Learn · Earn · Governance",
      event: "DevHack 2023",
      when: "Nov–Dec 2023",
      built:
        "At DevHack 2023 we launched DeFiChain.in — you do quests on chain, earn XP, turn it into DFI, stake, and vote. Runner-up overall plus another win on a side track.",
      stack: "React, ethers, DeFiChain MetaChain. Built with CryptoD5.",
      prize: "Runner-up ($1,500) · Side track ($1,200)" as string | null,
      productLink: {
        href: "https://devfolio.co/projects/defichainin-learn-empower-and-earn-dollardfi-2ca8",
        label: "Product · DeFiChain.in (Devfolio)",
      } as const,
      eventLink: {
        href: "https://devhack2023.devfolio.co/",
        label: "Hackathon · DevHack 2023",
      } as const,
      resultLink: {
        href: "https://www.linkedin.com/in/thechinmay07/overlay/1709597311921/single-media-viewer/?profileId=ACoAADzbs6oBF5iFPHvSyzh3l6yB3WVVuR0dVc4",
        label: "Results · LinkedIn",
      } as const,
    },
  ] as const,
} as const;

export const skillsContent = {
  Languages: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  "Web & frameworks": [
    "Next.js",
    "React",
    "Node.js",
    "Flask",
    "Tailwind CSS",
    "Postman",
  ],
  "AI / ML / Data": [
    "Machine learning",
    "Deep learning",
    "Big Data",
    "EDA",
    "Stats / R",
    "SQL / DBMS",
  ],
  Blockchain: [
    "Solidity",
    "Aptos",
    "Sui",
    "NFTs",
    "DeFi",
    "DAO",
    "On-chain analysis",
  ],
  Cybersecurity: [
    "Kali Linux",
    "Nmap",
    "Burp Suite",
    "Metasploit",
    "Hydra",
    "eJPT (INE)",
  ],
  Foundations: ["Computer networks", "OOP", "DSA", "MongoDB"],
} as const;

export const localizedCopy = {
  de: {
    projects: {
      cardLabels: {
        github: "GitHub ↗",
        liveDemo: "Live-Demo ↗",
        devfolio: "Devfolio ↗",
        deck: "Präsentation ↗",
        report: "Bericht ↗",
        linkedin: "LinkedIn ↗",
        video: "Video ↗",
      },
      projectTextById: {
        adgenai: {
          title: "KI-gestützter Anzeigen- und Poster-Generator",
          description: "AdGenAI automatisiert die Erstellung von Kampagnenmotiven aus Prompt + Produktinput.",
          highlights: [
            "Pipeline für Prompt-zu-Poster aufgebaut, um Varianten in Minuten zu erstellen.",
            "Gemini AI + Imagen 3 in einen gemeinsamen Generations-Loop integriert.",
            "S3-basierte Asset-Ablage für Wiederverwendung und Review umgesetzt.",
          ],
        },
        w3chat: {
          title: "W3Chat.io — KI-Agent für Web3-Aktionen",
          description:
            "Konversationelle Oberfläche für Transfers, Swaps, Bridges und Automationen über Chains hinweg.",
          highlights: [
            "Chat-UI gebaut, die On-Chain-Aktionen und zeitgesteuerte Jobs auslöst.",
            "AgentKit/OnchainKit-Ansatz für praktische Wallet-Aktionen mit vereinfachter UX integriert.",
            "Bei ETHGlobal Agentic Ethereum mit Coinbase-Pool-Preis ausgezeichnet.",
          ],
        },
        "cryptoluck-casino": {
          title: "CryptoLuck Casino",
          description: "Privacy-first Casino-Prototyp auf Blockchain-Basis.",
          highlights: [
            "Provably-fair Spiellogik mit Wallet-basierten Auszahlungen umgesetzt.",
            "Mines, Lucky Wheel und Prediction-Runden als Kern-Loops geliefert.",
            "Schnelles, anonymes Onboarding für globale Nutzer priorisiert.",
          ],
        },
        zory: {
          title: "Zory - Web3 Social Platform auf VeryChain",
          description: "Zory kombiniert Social Interactions mit On-Chain-Quest-Rewards auf VeryChain.",
          highlights: [
            "Feed, Quests und Token-Aktionen als zusammenhängenden Produkt-Flow gebaut.",
            "Gasless-ähnliche Interaktionen für bessere First-time-User-Completion designt.",
            "Reward-Accounting und Token-Pfade an verifizierte Contracts gebunden.",
          ],
        },
        zerotrace: {
          title: "ZeroTrace: End-to-End verschlüsseltes Messaging-DApp",
          description: "Verschlüsseltes Messaging-MVP mit verifizierbarem State-Design.",
          highlights: [
            "Rust/Actix-Backend für privacy-first Messaging-State-Handling entworfen.",
            "Psy-kompatible Proof/State-Transitions modelliert.",
            "Simulierte ZK/Poseidon2-Module mit swap-fähigen Interfaces umgesetzt.",
          ],
        },
        algocash: {
          title: "AlgoCash — Digital Cash Management auf Algorand",
          description:
            "Verschlüsselte Note-Issuance und Claim-Workflows mit Contract-Scripts auf Algorand.",
          highlights: [
            "Verschlüsselte Note-Issuance und Claim-Pfad mit Contract-Level-Scripts gebaut.",
            "Endnutzer-Claim-Interface erstellt, um den Einlöseprozess zu vereinfachen.",
            "Operational Scripts und UI so verbunden, dass Redemption ohne Extra-Tooling klappt.",
          ],
        },
        "gyro-maze-board": {
          title: "Handgesteuertes Labyrinth — Gyroskop & Arduino",
          description:
            "Embedded-Projekt: Gyroskop und Arduino steuern eine Zwei-Achsen-Servo-Mechanik — Neigung wird in präzise Echtzeit-Bewegung in X/Y übersetzt.",
          highlights: [
            "Gyroskop-Eingaben per Arduino-Firmware für reaktionsschnelle Handführung.",
            "Orthogonale Servo-Anordnung für unabhängige X- und Y-Positionierung der Plattform.",
            "Präsentation bei Prayog Varsh 2022 (KLE Tech) im Rahmen der Engineering-Exploration.",
          ],
        },
      },
    },
    experience: {
      eyebrow: "Erfahrung",
      title: "Werdegang",
      closePreview: "Vorschau schließen",
      entryTextById: {
        "anthe-labs": {
          summary: [
            "Inkubiert von Xyra Labs: Anthe war eine DeFi-Social-Trading-Infrastruktur auf Aptos. Das Unternehmen befindet sich derzeit im Schließungsprozess.",
          ],
          bullets: [
            "Mitgründer und Aufbau vom Hackathon-Prototyp zur registrierten Firma; Leitung eines 5-köpfigen Teams (Engineering, UI/UX, Marketing).",
            "Kernarchitektur auf Aptos entworfen und ausgeliefert: Echtzeit-Copy-Trading, transparente Wallet-Ausführung, Live-Risikoanalysen.",
            "Produktstrategie und Umsetzung Ende-zu-Ende geführt; Roadmap für Smart Grid/DCA-Bots und Creator-Monetarisierung gesteuert.",
          ],
        },
        pravinya: {
          subtitle: "Praktikum - Full Stack ML Developer · Hubballi, Karnataka, Indien",
          bullets: [
            "AdGenAI entwickelt: automatisierter Marketing-Asset-Generator mit React-Frontend, Flask-Backend und MongoDB.",
            "Gemini- und Imagen-3-APIs integriert, um aus Produktbildern und Prompts markenkonforme Ads/Posters zu erzeugen.",
            "Skalierbare Umsetzung mit AWS S3 und robuster API-Fehlerbehandlung im agilen Team geliefert.",
          ],
        },
      },
    },
    achievements: {
      eyebrow: "Wettbewerbe",
      title: "Erfolge",
      tableTrack: "Track · Fokus",
      tablePlacement: "Platzierung & Preis",
      tableWhen: "Zeit · Link",
      labelPodiums: "Siege & Podiumsplätze",
      labelEntered: "Hackathons teilgenommen",
      labelPrizeMoney: "Gewinnsumme",
      labelEcosystems: "Kern-Ökosysteme",
      labelTenure: "Aktive Web3-Erfahrung",
      closeDetails: "Erfolgsdetails schließen",
      close: "Schließen",
      architecture: "Architektur: ",
      stack: "Technologie-Stack: ",
      opensInNewTab: "(öffnet in neuem Tab)",
      detailsPrefix: "Details",
      detailTextById: {
        "very-hackathon-2026": {
          built: "Zory automatisiert SocialFi-Flows auf VeryChain mit Quests, Rewards und gaslosen Nutzeraktionen.",
          stack: "React, Solidity, Wepin, Supabase, VeryChain.",
        },
        "build-on-aptos-meetup-2025": {
          built: "Copiabel als Copy-Trading-Flow auf Aptos mit Decibel-Infrastruktur für reale Ausführung aufgebaut.",
          stack: "Aptos Move, TypeScript, Decibel-Stack.",
        },
        "aptos-ctrlmove-2025": {
          built: "Social Trade für Kana-Perps-Bounty mit Follow-Logik und Risiko-Grenzen ausgeliefert.",
          stack: "Aptos, Kana-Perps-Integration, Web-App.",
        },
        "ethglobal-agentic": {
          built: "W3Chat als Agent-UI für Senden, Swaps, Bridges und Automationen umgesetzt.",
          stack: "Next.js, AgentKit, OnchainKit, Hyperlane.",
        },
        "supra-movers": {
          built: "SupraScan als Explorer + API-Flow für Assets, Transaktionen und Pools geliefert.",
          stack: "React, Next.js, Supra RPC/Indexer.",
        },
        "hh-goa-2024": {
          built: "CryptoLuck als privacy-first Casino-Prototyp mit provably-fair Spielpfaden gebaut.",
          stack: "React, Node.js, Diamante, Garden SDK.",
        },
        "sih-2023": {
          built:
            "De-Anonymisierung zur Überwachung und Nachverfolgung illegaler Aktivitäten über Krypto-Transaktionen umgesetzt — Python-Tooling für Fluss-Mapping und klare Beweisdarstellung.",
          stack: "Python, Transaktions-Tracing, Graph-Analysen, On-chain-Daten. Grand-Finalist.",
        },
        "devhack-2023": {
          built: "DeFiChain.in mit Lernquests, XP-zu-Token-Flow und Governance-Pfaden umgesetzt.",
          stack: "React, ethers.js, TypeScript, DeFiChain.",
        },
      },
    },
  },
} as const;

export const spokenLanguages = [
  {
    language: "English",
    level: "Full professional proficiency (IELTS 6.0)",
  },
  {
    language: "German",
    level: "A1 (Actively learning, targeting A2 by Summer 2027)",
  },
  {
    language: "Kannada",
    level: "Professional working proficiency",
  },
  {
    language: "Hindi",
    level: "Professional working proficiency",
  },
] as const;
