export const projectsData = [
  {
    id: 1,
    title: "Observable Microservices E-Commerce Backend",
    description: "Production-style e-commerce system built around seven independently deployable microservices, communicating through a central API gateway to handle scalable and resilient backend operations.",
    points: [
      "Orchestrates a robust checkout saga combining synchronous payment processing with asynchronous Kafka-driven notifications",
      "Implements a database-per-service architecture using PostgreSQL to ensure isolated bounded contexts and independent scalability",
      "Secures cross-service communication using centralized JWT validation at the Spring Cloud Gateway with trusted downstream headers"
    ],
    tech: ["Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/AjayKumbham/observable-microservices-ecommerce"
  },
  {
    id: 2,
    title: "Multi-Domain Support Triage Agent",
    description: "Terminal-based AI support triage system that classifies, routes, and safely responds to enterprise support tickets using hybrid retrieval and LLM-driven reasoning across multiple service domains.",
    points: [
      "Implements a multi-stage AI pipeline with safety routing, hybrid retrieval, structured generation, and confidence-based postprocessing",
      "Combines BM25 keyword search, dense semantic retrieval, and Reciprocal Rank Fusion to generate grounded responses from domain-specific support corpora",
      "Detects prompt injections, malicious requests, outage signals, and unsupported cases with automated escalation workflows"
    ],
    tech: ["Python", "Groq API", "Sentence Transformers", "BM25", "Llama 3"],
    github: "https://github.com/AjayKumbham/multi-domain-support-triage-agent"
  },
  {
    id: 3,
    title: "Distributed Data Fan-Out Engine",
    description: "High-throughput data distribution engine that streams records from flat files and delivers them to multiple downstream systems simultaneously with built-in resilience and observability.",
    points: [
      "Ingests large datasets in CSV, JSONL, or fixed-width formats using constant-memory streaming",
      "Delivers data in parallel to APIs, databases, queues, and services with rate limiting and backpressure",
      "Includes production-grade reliability features such as retries, circuit breakers, and dead-letter handling"
    ],
    tech: ["Java", "Concurrency", "Distributed Systems", "Protocol Buffers", "Apache Avro"],
    github: "https://github.com/AjayKumbham/distributed-data-fanout-engine"
  },
  {
    id: 4,
    title: "Durable Execution Engine",
    description: "Fault-tolerant workflow engine for Java that can resume long-running processes exactly where they stopped after crashes or restarts, without repeating completed steps.",
    points: [
      "Persists workflow state at each step and replays results instead of re-executing operations",
      "Supports parallel execution, retries, and deterministic step sequencing for complex flows",
      "Built for production scenarios like microservice sagas, onboarding pipelines, and ETL workflows"
    ],
    tech: ["Java", "SQLite", "HikariCP", "Concurrency", "Workflow Orchestration"],
    github: "https://github.com/AjayKumbham/native-durable-execution-engine"
  },
  {
    id: 5,
    title: "Healthcare Operational Intelligence Platform",
    description: "Operational intelligence platform for healthcare environments with real-time analytics and automated orchestration to optimize patient flow, resource allocation, and workforce management.",
    points: [
      "Implements dynamic patient queueing with severity-based prioritization and automated background jobs recalculating wait times every minute",
      "Tracks live bed occupancy, monitors inventory levels, and coordinates staff allocation across high-priority departments during surge events",
      "Simulates operational scenarios such as equipment failures and supply shortages while delivering proactive alerts and forecasting dashboards"
    ],
    tech: ["React", "TypeScript", "Supabase", "TanStack Query", "Tailwind CSS", "Zod"],
    github: "https://github.com/AjayKumbham/astrum-healthcare"
  },
  {
    id: 6,
    title: "Healthcare Services & Pharmacy Platform",
    description: "Full-stack healthcare platform designed to manage pharmacy operations, prescriptions, and patient services in one unified system with role-based access and modern user experience.",
    points: [
      "Supports patients, pharmacies, and administrators with tailored dashboards and workflows",
      "Handles prescriptions, inventory, orders, and memberships end-to-end",
      "Built with a modular, API-driven architecture designed for scalability and real-world use"
    ],
    tech: ["Java", "Spring Boot", "React", "REST APIs", "MySQL"],
    github: "https://github.com/AjayKumbham/healthcare-services-and-pharmacy-platform",
    live: "https://ajaykumbham.github.io/healthcare-services-and-pharmacy-docs/"
  },
  {
    id: 7,
    title: "Evernorth Backend API (Healthcare)",
    description: "Industry-style backend API built from a real-time case study, simulating a secure and scalable enterprise system with authentication, profile management, payments, and health records.",
    points: [
      "Implements a two-step OTP-based authentication flow with JWT for secure user verification",
      "Provides comprehensive modules including profiles, payments, addresses, dependents, and health records",
      "Designed with production-focused security features like rate limiting, CSRF protection, token blacklisting, and input validation"
    ],
    tech: ["Spring Boot", "MySQL", "JWT", "Redis", "REST APIs"],
    github: "https://github.com/AjayKumbham/evernorth-backend-api",
    live: "https://ajaykumbham.github.io/backend-api-docs/"
  },
  {
    id: 8,
    title: "Zoomify (Video Conferencing App)",
    description: "Full-featured video conferencing application enabling real-time meetings with video, audio, chat, and collaboration tools directly in the browser.",
    points: [
      "Supports HD video calls, screen sharing, chat, and virtual collaboration features like whiteboard",
      "Built on WebRTC for peer-to-peer communication with Socket.io for signaling and real-time updates",
      "Includes meeting controls such as passwords, waiting rooms, recording, and participant management"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io"],
    github: "https://github.com/AjayKumbham/zoomify"
  },
  {
    id: 9,
    title: "Local AI Assistant",
    description: "Production-grade chat interface for running large language models locally, enabling private AI conversations with real-time streaming responses.",
    points: [
      "Supports multi-turn conversations with session management and model switching",
      "Streams responses token-by-token for a real-time chat experience",
      "Connects a modern React interface to local LLMs via FastAPI backend"
    ],
    tech: ["React", "TypeScript", "FastAPI", "Ollama", "MongoDB"],
    github: "https://github.com/AjayKumbham/private-local-ai-companion"
  },
  {
    id: 10,
    title: "Developer Blogging Platform",
    description: "Full-stack blogging platform built for developers to publish technical content with rich editing, search, and newsletter features, backed by a real-time cloud database.",
    points: [
      "Advanced blog browsing with search, tag filtering, syntax highlighting, and reading time estimation",
      "Secure admin panel for managing posts, uploads, site settings, and subscribers",
      "Integrated authentication, cloud storage, and email notifications for a complete publishing workflow"
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/AjayKumbham/personal-blog-platform",
    live: "https://ajaykumbham-blog.vercel.app/"
  },
  {
    id: 11,
    title: "JWT Authentication API",
    description: "Secure authentication backend using JWT with HTTP-only cookies and role-based access control. Designed as a production-style auth system with email notifications and strong security practices.",
    points: [
      "Uses HTTP-only cookies for token storage to protect against XSS and avoid client-side token handling",
      "Supports user registration, login, logout, and role-based access for USER and ADMIN",
      "Sends a welcome email on signup and stores passwords securely using BCrypt"
    ],
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Java Mail"],
    github: "https://github.com/AjayKumbham/jwt-auth-api"
  },
  {
    id: 12,
    title: "Clerk Auth System (React)",
    description: "Modern authentication foundation built with React and Clerk, providing secure user onboarding, session management, and account controls out of the box.",
    points: [
      "Supports complete auth flows including sign up, sign in, password recovery, and email verification",
      "Includes user dashboard, profile management, and security settings interfaces",
      "Built with a production-ready frontend stack and responsive UI components"
    ],
    tech: ["React", "TypeScript", "Vite", "Clerk"],
    github: "https://github.com/AjayKumbham/clerk-auth-system",
    live: "https://secure-auth-service.vercel.app/"
  },
  {
    id: 13,
    title: "Reading Time & Word Count Plugin (WordPress)",
    description: "Lightweight WordPress plugin that automatically calculates and displays reading time and word count with modern styles and flexible placement options.",
    points: [
      "Supports multiple display styles, customization options, and responsive layouts including dark mode",
      "Works seamlessly via automatic insertion, shortcode, widget, or template tag",
      "Built with WordPress best practices including sanitization, nonce verification, and coding standards"
    ],
    tech: ["WordPress", "PHP", "JavaScript", "Docker"],
    github: "https://github.com/AjayKumbham/wp-reading-time-word-count"
  }
];