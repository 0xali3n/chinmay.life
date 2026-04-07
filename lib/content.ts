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
    "Bachelor of Technology (B.Tech), Computer Science (KLE Tech) · Web3, HCI-flavoured products, cybersecurity — MSc-oriented portfolio",
  email: "thechinmay07@gmail.com",
  location: "Bengaluru, India",
  copyrightYear: 2026,
} as const;

export const socialLinks = {
  website: "https://chinmay.io",
  linkedin: "https://www.linkedin.com/in/thechinmay07",
  github: "https://github.com/0xali3n",
  twitter: "https://x.com/Chinmay_io",
  devfolio: "https://devfolio.co/@Chinmay_io",
} as const;

export const footerSocialLinks = [
  { label: "Website", href: socialLinks.website },
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "GitHub", href: socialLinks.github },
  { label: "X (Twitter)", href: socialLinks.twitter },
  { label: "Devfolio", href: socialLinks.devfolio },
] as const;

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headshotSrc: "/photos/profile.jpeg",
  greeting: "Hi, I'm",
  /** One line under your name */
  roleLine:
    "Computer Science engineer focused on secure systems, intelligent interfaces, and applied AI",
  /** Short hero summary — keep scannable (2–4 sentences). */
  summary:
    "I design and build full-stack systems where usability, data reliability, and trust boundaries are equally important. This portfolio supports my applications to German Master's programs and highlights project depth relevant to research, internships, and engineering roles.",
  primaryCta: { label: "Selected projects", href: "#projects" },
  secondaryCta: { label: "CV (PDF)", href: "/cv.pdf", external: true },
  imageAlt: "Chinmay Patil",
} as const;

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
      "Incubated by Xyra Labs, Anthe is a next-generation DeFi social trading infrastructure built on Aptos.",
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
        label: "Certificate",
        href: "/internship/01fe21bcs054.webp",
        mediaKind: "image" as const,
        downloadFilename: "Pravinya_completion_certificate.webp" as const,
      },
      {
        label: "Industry report (PDF)",
        href: "/internship/Chinmay_Internship_Project%20(1).pdf",
        mediaKind: "pdf" as const,
        downloadFilename: "Chinmay_Internship_Project.pdf" as const,
      },
    ] as const,
  },
] as const;

/**
 * Projects split by how you want reviewers to read them:
 * - Shipped & independent: not timed to a single hackathon (even if ideas started elsewhere).
 * - Hackathons & competitions: hack weekend / track submissions; use `award` when you placed, `hackathonName` when it was participation/build-only.
 *
 * Demo rows are marked “(demo placeholder)” — swap URLs and copy when you extend.
 */
export const shippedProjectsContent = [
  {
    id: "imagine-nft",
    title: "Imagine NFT — AI × Sui marketplace",
    description:
      "Decentralized NFT creation and marketplace on Sui: users describe ideas, AI generates copy and imagery, then mint, list, and sell in one flow.",
    tags: ["React", "Sui", "OpenAI", "Tailwind CSS"],
    githubUrl: "https://github.com/0xali3n/imgnft.fun",
    liveUrl: "https://imgnft.fun",
    screenshotSrc: "/screenshots/imagine-nft.svg",
    award: null as string | null,
  },
  {
    id: "adgenai",
    title: "AdGenAI — creative ads from prompts",
    description:
      "AI-powered platform for high-quality advertisements and posters from user prompts and product imagery using Gemini, Imagen 3, and prompt engineering — real-time editing and brand alignment.",
    tags: ["Next.js", "Gemini", "Imagen 3", "AWS S3"],
    githubUrl: "https://github.com/0xali3n/AdGenAi",
    liveUrl: "https://github.com/0xali3n/AdGenAi",
    screenshotSrc: "/screenshots/adgenai.svg",
    award: null as string | null,
  },
  {
    id: "demo-internal-dashboard",
    title: "Internal KPI dashboard (demo placeholder)",
    description:
      "Replace this card: e.g. role-based metrics, CSV export, and Slack alerts — a longer-lived product or internship build that was not a hackathon submission.",
    tags: ["Next.js", "Demo", "Storybook"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    screenshotSrc: "/screenshots/suprascan.svg",
    award: null as string | null,
  },
] as const;

export const hackathonProjectsContent = [
  {
    id: "w3chat",
    title: "W3Chat.io — AI Web3 assistant",
    description:
      "Natural-language and voice-driven assistant for blockchain actions: swaps, bridging, batch transfers, and automation across chains.",
    tags: ["TypeScript", "Base", "Arbitrum", "Smart contracts"],
    githubUrl: "https://github.com/0xali3n/w3chat.io",
    liveUrl: "https://w3chat.io",
    screenshotSrc: "/screenshots/w3chat.svg",
    award: "ETHGlobal Agentic Ethereum — Round 2; Coinbase AgentKit pool",
    hackathonName: "ETHGlobal Agentic Ethereum (2025)" as const,
  },
  {
    id: "suprascan",
    title: "SupraScan.fun — Supra network explorer",
    description:
      "Blockchain explorer for the Supra network: assets, liquidity pools, and transactions with developer-friendly APIs for real-time data.",
    tags: ["Next.js", "Web3", "APIs"],
    githubUrl: "https://github.com/0xali3n/SupraScan.fun",
    liveUrl: "https://suprascan.fun",
    screenshotSrc: "/screenshots/suprascan.svg",
    award: "Supra Movers Hackathon — 3rd place ($2,000)",
    hackathonName: "Supra Movers Hackathon" as const,
  },
  {
    id: "demo-hack-participation",
    title: "Account-abstraction relay (demo placeholder)",
    description:
      "Replace: a 48h build with no placement — use rows like this so participation still appears without inventing prizes.",
    tags: ["Solidity", "Demo", "ERC-4337"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    screenshotSrc: "/screenshots/w3chat.svg",
    award: null as string | null,
    hackathonName: "DemoChain Hack — Spring 2025 (placeholder)" as const,
  },
  {
    id: "demo-hack-honorable",
    title: "Governance notify bot (demo placeholder)",
    description:
      "Replace: sponsor track or honorable mention — shows how to record a minor prize without crowding the hero cards.",
    tags: ["Node.js", "Demo", "Governance"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    screenshotSrc: "/screenshots/imagine-nft.svg",
    award: "Sponsor pick — best UX (demo)" as const,
    hackathonName: "Uni Web3 Build (placeholder)" as const,
  },
] as const;

/** Flat list if you need a single export (e.g. scripts). */
export const projectsContent = [
  ...shippedProjectsContent,
  ...hackathonProjectsContent,
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
      stack:
        "Move, TypeScript, Decibel stack. Rise In hackathon.",
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
      stack:
        "Aptos, Kana perps, small web app — live links on the Dora buidl.",
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
      stack:
        "React, Next, Supra RPC, stuff we indexed ourselves. Third place.",
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
      stack:
        "React, Node, Diamante wallet, Garden SDK. Built with CryptoD5.",
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
      track: "NTRO · On-chain forensics",
      event: "Smart India Hackathon 2023 — Grand Finale",
      when: "Dec 2023",
      built:
        "For SIH 2023 grand finals I was on the NTRO problem — tracking abuse that touches crypto and the dark web. We built Python tooling to map flows and pack evidence so judges could follow the story.",
      stack:
        "Python, graphs, chain data. Grand finalist.",
      prize: "Grand finalist" as string | null,
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
      stack:
        "React, ethers, DeFiChain MetaChain. Built with CryptoD5.",
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

export const perspectivesItems = [
  {
    title: "Beginner Hack Book — red teaming field notes",
    excerpt:
      "A GitBook compiling certifications, pentesting techniques, commands, and practical guides for Windows, Linux, exploitation, and web hacking — meant as a gentle entrance to red team work.",
    href: "https://chinmay07.gitbook.io/ejpt",
  },
  {
    title: "Hackathons: from DeFiChain quests to Supra explorers",
    excerpt:
      "Runner-up and side-track winner at DevHack 2023 (DeFiChain), Grand Finalist at SIH 2023 (crypto / dark-web traceability), first prize on the Diamante track at Hacker House Goa 2024 — the Achievements leaderboard summarizes results; projects below go deeper on builds.",
    href: socialLinks.devfolio,
  },
] as const;

export const skillsContent = {
  Languages: ["C", "C++", "Python", "JavaScript"],
  "Web & frameworks": [
    "Next.js",
    "React",
    "Node.js",
    "Flask",
    "Tailwind CSS",
    "Postman",
  ],
  Blockchain: ["Solidity", "Sui", "NFTs", "DeFi", "DAO", "On-chain analysis"],
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

export const spokenLanguages = [
  {
    language: "English",
    level: "Full Professional Proficiency (IELTS B2)",
  },
  {
    language: "German",
    level: "A1 (Actively learning, targeting A2 by Winter 2026)",
  },
  {
    language: "Kannada",
    level: "Native / Professional working proficiency",
  },
  {
    language: "Hindi",
    level: "Professional working proficiency",
  },
] as const;
