export const projectsData = [
  {
    id: 1,
    title: "Social Media Agent",
    description: "AI-powered automation platform for generating, scheduling, and publishing content across multiple social platforms with real-time analytics and Intelligent decision making.",
    features: [
      "Automates content generation using multiple LLMs (OpenAI, Gemini, Groq)",
      "Smart scheduling and publishing across LinkedIn, X, Instagram, YouTube, Reddit, Hashnode",
      "Real-time analytics and engagement tracking",
      "Full media generation pipeline: LLM scripts & visuals, Pexels videos, TTS, synced captioning",
      "Secure Supabase backend with user-specific configuration and fallback handling"
    ],
    tech: ["React", "Tailwind CSS", "Supabase (PostgreSQL, Edge Functions, Auth)", "LLMs", "Python"]
  },
  {
    id: 2,
    title: "Grant Chain",
    description: "Decentralized fund management platform enabling milestone-based disbursement and DAO-driven governance using Ethereum and IPFS.",
    features: [
      "Decentralized platform for milestone-based fund disbursement via Ethereum smart contracts",
      "DAO-based on-chain voting for transparent grant governance",
      "IPFS/Web3.Storage for storing proposal and milestone metadata",
      "Supabase backend with RLS for secure role-based access",
      "WalletConnect + Wagmi for multi-wallet auth and seamless dApp UX"
    ],
    tech: ["React", "Tailwind CSS", "Solidity", "Hardhat", "Supabase", "IPFS", "Web3.Storage", "Ethereum"]
  },
  {
    id: 3,
    title: "Member Profile Setup (Enterprise Case Study)",
    description: "Robust enterprise backend system for secure user profile management, built with Spring Boot, JWT, and MySQL.",
    features: [
      "Enterprise-grade backend with 29 Spring Boot REST APIs",
      "Secure authentication using JWT and Spring Security",
      "Modular profile system with full CRUD for personal, medical, and payment data",
      "Input validation with Jakarta and fault-tolerant async processing",
      "MySQL integration with efficient query handling and role-based endpoints"
    ],
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"]
  }
];
