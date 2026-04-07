export type ShowcaseProject = {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  imageSrc: string;
  githubUrl: string;
  liveUrl?: string;
  reportUrl?: string;
  videoUrl?: string;
};

export const showcaseProjectsDummy = [
  {
    id: "adgenai",
    title: "AI Powered Advertisement and Poster Generator",
    description:
      "Built AdGenAI to generate ad posters from prompts and product images, then iterate quickly with an edit loop. Integrated Gemini + Imagen 3 for generation and S3 for storing reusable campaign assets.",
    stack: ["Next.js", "Gemini AI", "Imagen 3", "Amazon S3"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=AdGenAI+dashboard",
    githubUrl: "https://github.com",
    reportUrl: "/projects/AdGenAi Report.pdf",
    videoUrl: "/projects/AdGenAi_deck.pptx",
  },
  {
    id: "imagine-nft",
    title: "Imagine NFT",
    description:
      "Imagine NFT is a simple AI-to-mint pipeline. A user describes an idea, the app generates image + metadata, and the same flow lets them mint and list on Sui without jumping across tools.",
    stack: ["React.js", "Tailwind CSS", "Sui Blockchain", "Axios", "OpenAI"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Imagine+NFT",
    githubUrl: "https://github.com/0xali3n/imgnft.fun",
  },
  {
    id: "network-log-visualizer",
    title: "Network Log Visualizer",
    description:
      "Built a Flask + Python app to visualize large network logs and detect anomalies such as potential DDoS activity. Added clear charts and filtering so analysts can move from raw logs to faster security triage.",
    stack: ["Flask", "Python", "Matplotlib"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Network+Log+Visualizer",
    githubUrl: "https://github.com/0xali3n/network-log-visualization",
  },
  {
    id: "cryptoluck-casino",
    title: "CryptoLuck Casino",
    description:
      "CryptoLuck is a privacy-first casino prototype with provably fair game logic and wallet-based payouts. It includes Mines, Lucky Wheel, and prediction-style rounds, designed for global access with low onboarding friction.",
    stack: ["React", "Node.js", "TypeScript", "Diamante", "Garden SDK"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=CryptoLuck",
    githubUrl: "https://github.com",
    liveUrl:
      "https://devfolio.co/projects/cryptoluck-casino-bet-win-and-play-anonymously-5353",
  },
  {
    id: "zory",
    title: "Zory - Web3 Social Platform on VeryChain",
    description:
      "Zory is a Web3 social platform on VeryChain with quests, rewards, and token actions. Focused on smooth gasless-style UX while keeping token and reward logic on-chain.",
    stack: ["React", "TypeScript", "VeryChain", "Wepin SDK", "Supabase", "Solidity"],
    imageSrc: "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=Zory",
    githubUrl: "https://github.com/0xali3n/zory",
  },
  {
    id: "zerotrace",
    title: "ZeroTrace: End-to-End Encrypted Messaging DApp",
    description:
      "ZeroTrace is a privacy-first messaging MVP with encrypted communication and verifiable state transitions. Uses Psy-style architecture, with simulated ZK/Poseidon2 components designed for production replacement later.",
    stack: ["Rust", "Actix-web", "JavaScript", "ZK concepts", "XChaCha20-Poly1305"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=ZeroTrace",
    githubUrl: "https://github.com/0xali3n/psy",
  },
  {
    id: "algocash",
    title: "AlgoCash - Digital Cash Management System on Algorand",
    description:
      "AlgoCash mints digital cash notes backed by unique encrypted codes and supports claim/withdraw flows on Algorand. Includes contract logic, management scripts, and a separate public claim interface.",
    stack: ["Algorand", "TypeScript", "React", "TEAL", "Node.js", "Vite"],
    imageSrc:
      "https://placehold.co/1200x675/f3f4f6/e5e7eb/png?text=AlgoCash",
    githubUrl: "https://github.com/0xali3n/Algocash",
  },
] as const satisfies readonly ShowcaseProject[];
