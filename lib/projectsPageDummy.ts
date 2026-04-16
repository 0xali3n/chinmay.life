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
    title: "AI Powered Advertisement and Poster Generator",
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
    id: "imagine-nft",
    title: "Imagine NFT",
    description:
      "Imagine NFT is an AI-first NFT creation and listing pipeline on Sui.",
    highlights: [
      "Turned text prompts into NFT image + metadata in a single guided path.",
      "Merged generation, minting, and listing to avoid multi-tool handoffs.",
      "Reduced creator onboarding friction with a beginner-friendly Sui flow.",
    ],
    stack: ["React.js", "Tailwind CSS", "Sui Blockchain", "Axios", "OpenAI"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Imagine+NFT",
    githubUrl: "https://github.com/0xali3n/imgnft.fun",
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
    id: "gyro-maze-board",
    title: "Hand-controlled maze — gyroscope & Arduino",
    description:
      "Embedded systems project: a gyroscope and Arduino drive a dual-axis servo rig so tilt maps to precise real-time X/Y motion through a maze.",
    highlights: [
      "Gyroscope input fused with Arduino firmware for responsive hand-guided control.",
      "Orthogonal servo mounts for independent X and Y positioning of the maze platform.",
      "Presented at Prayog Varsh 2022 (KLE Technological University) as part of the first-year engineering exploration programme.",
    ],
    stack: ["Arduino", "Gyroscope", "Servo motors", "Embedded C/C++"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Gyro+maze",
    linkedinUrl:
      "https://www.linkedin.com/pulse/prayog-varsh-2022-kle-tech-chinmay-patil/",
    videoUrl: "https://vimeo.com/744090776",
  },
] as const satisfies readonly ShowcaseProject[];
