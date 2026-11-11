export type ShowcaseProject = {
  id: string;
  title: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  imageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
  deckUrl?: string;
  linkedinUrl?: string;
  videoUrl?: string;
};

export const showcaseProjectsDummy = [
  {
    id: "adgenai",
    title: "AI-Powered Advertisement and Poster Generator",
    description:
      "AdGenAI automates campaign creative generation from prompt + product input.",
    highlights: [
      "Built a prompt-to-poster pipeline so teams can generate ad variants in minutes.",
      "Integrated Gemini AI + Imagen 3 into one generation loop for copy + visuals.",
      "Added S3-based asset storage to make campaign reuse and review straightforward.",
    ],
    stack: ["Next.js", "Gemini AI", "Imagen 3", "Amazon S3"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=AdGenAI+dashboard",
    githubUrl: undefined,
    reportUrl: "/projects/adgenai-industry-report.pdf",
    deckUrl: "/internship/adgenai-pitch-deck.pdf",
  },
  {
    id: "w3chat",
    title: "W3Chat.io — AI Agent for Web3 Actions",
    description:
      "Conversational interface to execute transfers, swaps, bridges, and automation triggers across chains.",
    highlights: [
      "Built a chat UI that drives on-chain sends, swaps, bridges, mints, and timed jobs.",
      "Integrated AgentKit / OnchainKit for practical wallet actions with simplified UX.",
      "Recognized in ETHGlobal Agentic Ethereum (Coinbase AgentKit pool).",
    ],
    stack: ["Next.js", "Coinbase AgentKit", "OnchainKit", "Hyperlane"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=W3Chat.io",
    githubUrl: "https://github.com/0xali3n/w3chat.io",
    liveUrl: "https://ethglobal.com/showcase/w3chat-io-d1sqn",
  },
  {
    id: "zory",
    title: "Zory - Web3 Social Platform on VeryChain",
    description:
      "Zory blends social interactions with on-chain quest rewards on VeryChain.",
    highlights: [
      "Built feed, quests, and token actions as one connected social-product flow.",
      "Designed gasless-style interactions to improve first-time user completion.",
      "Kept reward accounting and token paths anchored to verified on-chain contracts.",
    ],
    stack: ["React", "TypeScript", "VeryChain", "Wepin SDK", "Supabase", "Solidity"],
    imageSrc: "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Zory",
    githubUrl: "https://github.com/0xali3n/zory",
  },
  {
    id: "zerotrace",
    title: "ZeroTrace: End-to-End Encrypted Messaging DApp",
    description:
      "ZeroTrace is an encrypted messaging MVP with verifiable state design.",
    highlights: [
      "Architected a Rust/Actix backend for privacy-first messaging state handling.",
      "Modeled Psy-style proof/state transitions for protocol-aligned integration.",
      "Implemented simulated ZK/Poseidon2 modules behind swap-ready interfaces.",
    ],
    stack: ["Rust", "Actix-web", "JavaScript", "ZK concepts", "XChaCha20-Poly1305"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=ZeroTrace",
    githubUrl: "https://github.com/0xali3n/psy",
  },
  {
    id: "algocash",
    title: "AlgoCash — Digital Cash Management on Algorand",
    description:
      "Encrypted note issuance and claim workflow with contract-level operational scripts on Algorand.",
    highlights: [
      "Built encrypted note issuance and claim paths with contract-level operational scripts.",
      "Created an end-user claim interface to simplify the redemption path.",
      "Tied scripts and UI so redemption works without multi-tool handoffs.",
    ],
    stack: ["Algorand", "TypeScript", "Smart contracts", "Web UI"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=AlgoCash",
    githubUrl: "https://github.com/0xali3n/Algocash",
  },
  {
    id: "cryptoluck-casino",
    title: "CryptoLuck Casino",
    description:
      "CryptoLuck is a privacy-first casino prototype on blockchain rails.",
    highlights: [
      "Implemented provably fair game logic with wallet-based payout execution.",
      "Shipped Mines, Lucky Wheel, and prediction-style rounds as core loops.",
      "Prioritized anonymous access and quick onboarding for global users.",
    ],
    stack: ["React", "Node.js", "TypeScript", "Diamante", "Garden SDK"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=CryptoLuck",
    githubUrl: undefined,
    liveUrl:
      "https://devfolio.co/projects/cryptoluck-casino-bet-win-and-play-anonymously-5353",
  },
] as const satisfies readonly ShowcaseProject[];
