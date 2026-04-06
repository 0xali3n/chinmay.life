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
  { label: "Notes", href: "#perspectives" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headshotSrc: "/photos/profile.jpeg",
  greeting: "Hi, I'm",
  /** One line under your name */
  roleLine:
    "Computer Science · Builder across Web3, intelligent interfaces, and security",
  /** Short hero summary — keep scannable (2–4 sentences). */
  summary:
    "I build full-stack and on-chain systems where interaction design, scalable data, and trust boundaries matter. My work bridges hard technical engineering and product execution, driving my transition into advanced academic research in HCI, AI, and Intelligent Systems.",
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
    summaryParagraphs: [
      "Internship at Pravinya Infotech with my project team on AdGenAI: we divided the stack, kept demos and milestones moving, and helped each other through integration and reviews. Official certificate and industry report are attached below.",
    ] as const,
    bullets: [
      'AI Pipeline Engineering: Developed "AdGenAI," an automated marketing asset generator utilizing a React.js frontend, Flask backend, and MongoDB database architecture.',
      "Generative AI Integration: Integrated Google Gemini and Imagen 3 APIs to process raw product imagery and user prompts, successfully generating theme-aligned, production-ready advertisements and posters.",
      "System Optimization: Designed a scalable system incorporating AWS S3 for asset storage and robust API error handling, operating effectively within an agile development team.",
      "Collaboration: Worked closely with my team on ownership, code review, and unblocking—host supervision and sign-off as required for the internship.",
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
 * Competition ledger — photos live in `public/achivements/`. Each item can list 0–2 `images` and an
 * optional `link` (e.g. LinkedIn media viewer). Keep prizing honest vs `public/cv.pdf`; dummy rows
 * below are placeholders until you swap copy and assets.
 */
export const achievementsContent = {
  eyebrow: "Competitions" as const,
  title: "Achievements" as const,
  subtitle:
    "Short write-ups in plain English: where it ran, what we built, what it actually did, and what we came away with. The heading and year above each card carry the formal name and date so the text below does not repeat them.",
  cvHref: "/cv.pdf" as const,
  stats: [
    {
      id: "indexed",
      label: "Results indexed",
      value: "",
      hint: "Auto-count of cards below — add rows in this file as your CV grows.",
    },
    {
      id: "focus",
      label: "Focus",
      value: "Web3 · AI · Security",
      hint: "Typical tracks you compete in.",
    },
    {
      id: "span",
      label: "Timeline",
      value: "2023 — present",
      hint: "First highlighted result through latest.",
    },
    {
      id: "cv",
      label: "Source of truth",
      value: "CV (PDF)",
      hint: "Same file as the header Resume button.",
    },
  ] as const,
  items: [
    {
      id: "ethglobal-agentic",
      ecosystem: "ETHGlobal · AgentKit",
      event: "ETHGlobal — Agentic Ethereum",
      placement:
        "This hackathon ran online in February on ETHGlobal's Agentic Ethereum track. We built W3Chat.io: you talk to it like a chat app and it handles sends, swaps, bridging, NFT mints, timed jobs, and pulls live market or on-chain info so you are not tab-hopping across tools. We cleared round two and won the Coinbase Developer Platform AgentKit pool prize. OnchainKit, AgentKit, and Hyperlane did most of the heavy lifting.",
      prize: "Round 2 · Coinbase pool" as string | null,
      year: "2025",
      images: ["/achivements/W3chat.png"] as const,
      link: {
        href: "https://ethglobal.com/showcase/w3chat-io-d1sqn",
        label: "ETHGlobal showcase",
      } as const,
    },
    {
      id: "supra-movers",
      ecosystem: "Supra · SupraScan",
      event: "Supra Movers Hackathon",
      placement:
        "Supra Movers was online in January. I built SupraScan.fun — a block explorer and API for Supra — so anyone can look up assets, pools, and transactions the same way you would on a bigger-chain explorer, just tuned for Supra. Our team placed third and took $2,000. Supra Labs shared the launch on X; I keep posting updates at @SupraScan.",
      prize: "3rd · $2,000" as string | null,
      year: "2025",
      images: ["/achivements/supra.png"] as const,
      link: {
        href: "https://x.com/SUPRA_Labs/status/1890055992479543707",
        label: "Twitter",
      } as const,
    },
    {
      id: "dummy-ai-sprint",
      ecosystem: "AI / product",
      event: "48h AI product sprint (placeholder)",
      placement:
        "Placeholder — honourable mention. When you replace it, write it like the others: where the sprint ran, what you built, what it did for users, and what you got.",
      prize: null as string | null,
      year: "2025",
    },
    {
      id: "hh-goa-2024",
      ecosystem: "Diamante · HHG",
      event: "Hacker House Goa 2024",
      placement:
        "This one was a six-day in-person hack in Goa (4–9 August), run by HackVerseIND — thousands applied in round one, then a few hundred builders showed up across 100+ teams. We built around online casinos: players get privacy-friendly, decentralised gameplay without getting boxed into one country's rules. We won first on the Diamante track and the prize was $3,000.",
      prize: "1st — Diamante ($3k)" as string | null,
      year: "2024",
      images: ["/achivements/goa.jpg"] as const,
      link: {
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7241153322584342529/",
        label: "LinkedIn",
      } as const,
    },
    {
      id: "dummy-buildthon-2024",
      ecosystem: "Campus / buildathon",
      event: "Inter-college buildathon (placeholder)",
      placement:
        "Placeholder — top five. When you swap it in, say where it was held, what you built, how it worked, and what placement or prize you got, plus a link if you have one.",
      prize: null as string | null,
      year: "2024",
    },
    {
      id: "dummy-security-ctf",
      ecosystem: "Security",
      event: "Regional CTF / cyber league (placeholder)",
      placement:
        "Demo row for second place — swap for the real story: host city or platform, what your team shipped or how you played the CTF, and a proof link or scoreboard when you have it.",
      prize: "2nd (demo)" as string | null,
      year: "2024",
      link: { href: socialLinks.github, label: "GitHub (replace)" } as const,
    },
    {
      id: "sih-2023",
      ecosystem: "SIH · NTRO",
      event: "Smart India Hackathon 2023 — Grand Finale",
      placement:
        "The NTRO track at SIH had its grand finale in person at Amity University in Noida. We built analysis tooling to help trace shady use of crypto — basically connecting dark-web leads to what you can still see on public ledgers. We made grand finalist; the work was always meant for investigators, not a consumer app.",
      prize: "Grand finalist" as string | null,
      year: "2023",
      images: ["/achivements/Sih.png"] as const,
      link: { href: socialLinks.linkedin, label: "LinkedIn" } as const,
    },
    {
      id: "devhack-2023",
      ecosystem: "DeFiChain / Web3",
      event: "DevHack 2023",
      placement:
        "It was DeFiChain-only: Bengaluru kickoff, ten days of building online, then an in-person final night with a mixer. Our team shipped a DeFi build on their stack. We were runner-up overall ($1,500) and also picked up the side-track win ($1,200).",
      prize: "Runner-up + side track" as string | null,
      year: "2023",
      images: ["/achivements/devhack_Winner.JPG"] as const,
      link: {
        href: "https://www.linkedin.com/in/thechinmay07/overlay/1709597311921/single-media-viewer/?profileId=ACoAADzbs6oBF5iFPHvSyzh3l6yB3WVVuR0dVc4",
        label: "LinkedIn",
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
      "Runner-up and side-track winner at DevHack 2023 (DeFiChain), Grand Finalist at SIH 2023 (crypto / dark-web traceability), first prize on the Diamante track at Hacker House Goa 2024 — the Achievements grid has photos and links; projects below go deeper on builds.",
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
