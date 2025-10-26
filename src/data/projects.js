export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A sleek, high-performance personal portfolio site built to highlight your skills, projects, and professional journey — fully responsive, theme-aware, and SEO-optimized.",
    features: [
      "<strong>Responsive & Adaptive Design :</strong> Implements a fluid layout and breakpoints so the site looks and functions beautifully across all screen sizes (mobile, tablet, desktop)",
      "<strong>Dark / Light Theme with Persistence :</strong> Users can toggle between dark and light modes; preference is stored (e.g. via local storage or context), ensuring consistent experience across sessions",
      "<strong>Performance-First Approach :</strong> Asset optimization, lazy loading, and minimized bundle sizes lead to blazing-fast load times (GTmetrix & Lighthouse metrics reflect top scores)",
      "<strong>SEO & Accessibility Focus :</strong> Semantic HTML, meta tags, structured data, ARIA labels, and keyboard navigation support to boost discoverability and usability",
      "<strong>Modular & Scalable Component Architecture :</strong> Structured into reusable React components and data-driven sections (e.g. via JSON/data files), making it easy to extend or re-skin"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "ESLint", "PostCSS"],
    image: "/data/images/projects/portfolio.png",
    github: "https://github.com/AjayKumbham/portfolio",
    live: "https://portfolio-ajaykumbham.vercel.app/",
    hasLiveDemo: true
  },
  {
    id: 2,
    title: "Developer Blogging Platform",
    description: "A full-featured blogging platform built for developers to write, publish, and manage technical content — complete with newsletter integration, admin dashboard, and content workflows.",
    features: [
      "<strong>End-to-End CMS Experience :</strong> You built both the content authoring side (admin dashboard) and the public-facing read side, giving you real experience with full-stack content workflows (CRUD, publishing, drafts, etc.)",
      "<strong>Dynamic Content & Filtering :</strong> Posts can be searched, filtered by tags, sorted, and display metadata such as read time enhancing usability and discoverability for readers",
      "<strong>Secure Admin & Role-Based Control :</strong> The admin panel is backed by Supabase authentication and row-level security rules, ensuring only authorized users can create, edit, or publish content",
      "<strong>Newsletter & Subscriber Automation :</strong> Integrated with Brevo (Sendinblue) to automatically notify subscribers when a new post goes live, manage subscriber lists, and allow unsubscribe flows",
      "<strong>Performance, SEO & Media Handling :</strong> Built with best practices: syntax highlighting for code snippets, image uploads to Supabase storage, meta tags, responsive design, and performance optimizations via Vite"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase (PostgreSQL, Auth, Storage, RLS)", "Brevo (Sendinblue)", "React Router", "FormSubmit"],
    image: "/data/images/projects/blog-platform.png",
    github: "https://github.com/AjayKumbham/personal-blog-platform",
    live: "https://personal-blog-platform-demo.vercel.app/",
    hasLiveDemo: true
  },
  {
    id: 3,
    title: "Healthcare Services & Pharmacy Platform (Price A Med)",
    description: "An enterprise-grade, full-stack platform built to streamline healthcare services and pharmacy operations by integrating patient, pharmacy, and administrative workflows into a unified, secure, and scalable system.",
    features: [
      "<strong>Role-Based Multi-Tenant Architecture :</strong> Built with distinct user roles (patients, pharmacies, admins) each having tailored views, permissions, and workflows ensuring clean separation of concerns and secure access control",
      "<strong>End-to-End Prescription & Order Workflow :</strong> Enables patients to upload prescriptions, pharmacies to verify and fulfill orders, and admin/health services to monitor and manage the entire lifecycle bridging the gap between healthcare and retail pharmacy",
      "<strong>Inventory & Membership Management :</strong> Pharmacies can manage inventory, stock levels, and alert on low stock. On the patient side, there are membership plans, patient dashboards, and personalized health tracking",
      "<strong>Scalable API-Driven Backend :</strong> Designed with modular, RESTful APIs to decouple front-end and back-end, facilitating easy future integrations (e.g. third-party lab systems, telehealth modules, external insurance APIs)",
      "<strong>Security, Compliance & Documentation Focus :</strong> Implements security best practices (authentication, data validation, access control), and is backed by extensive documentation (API reference, system architecture, data models, UI flows) for developers and future maintainers"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Java (Spring Boot)", "Node.js", "REST APIs", "JWT / Auth", "PostgreSQL", "CI/CD tools", "AWS / Vercel"],
    image: "/data/images/projects/price-a-med.png",
    github: "https://github.com/AjayKumbham/healthcare-services-and-pharmacy-platform",
    live: "https://price-a-med-demo.vercel.app/",
    hasLiveDemo: true
  },
  {
    id: 4,
    title: "Decentralized Fraud Detection (Proof-of-Concept)",
    description: "A pioneering proof-of-concept platform combining decentralized learning and anomaly detection to flag fraudulent transactions—without centralizing sensitive data—and demonstrate the viability of privacy-preserving fraud systems.",
    features: [
      "<strong>Federated / Decentralized Learning Approach :</strong> Trains detection models across distributed nodes (e.g. multiple data silos or institutions) without sharing raw data, ensuring privacy and compliance with data protection regulations",
      "<strong>Anomaly Detection via Reconstruction & Outlier Scoring :</strong> Implements unsupervised (or semi-supervised) techniques like autoencoders or reconstruction error scoring to detect deviations from normal patterns ideal for fraud in sparse-label environments",
      "<strong>Blockchain-Backed Audit & Tamper Evidence :</strong> Uses a decentralized ledger to record detection decisions, model updates, or alerts immutably providing a verifiable audit trail and resisting tampering or backdoor manipulation",
      "<strong>Adaptive Model Updates & Consensus Aggregation :</strong> Merges local model updates or anomaly signals via decentralized consensus or aggregation (e.g. via weighted averaging or secure aggregation), allowing the system to evolve with new fraud patterns",
      "<strong>Privacy, Explainability & Real-World Viability Emphasis :</strong> Balances detection power with interpretability (e.g. exposing error scores or feature importances) and highlights how the architecture bridges the gap between research and production readiness"
    ],
    tech: ["Python", "Scikit-learn", "Flask", "Cryptographic Primitives"],
    image: "/data/images/projects/fraud-detection.png",
    github: "https://github.com/AjayKumbham/decentralized-fraud-detection-poc",
    hasLiveDemo: false
  },
  {
    id: 5,
    title: "Evernorth Backend API",
    description: "A robust, scalable backend service powering the Evernorth platform's core functionalities — designed to handle data orchestration, business logic, security, and integrations with front-end and third-party systems.",
    features: [
      "<strong>Modular Microservice Architecture :</strong> Designed to be modular and loosely coupled, enabling independent service scaling, clean separation of concerns, and ease of feature evolution without monolithic bottlenecks",
      "<strong>Secure Authentication & Role-Based Access Control :</strong> Implements robust authentication (e.g. JWT, OAuth or similar), and fine-grained access rules so different user roles (admin, user, partner) access only what they should enhancing security and compliance",
      "<strong>API Gateway & Request Routing + Throttling :</strong> Uses an API gateway or proxy layer to route requests, apply rate limiting, and manage versioning control ensuring resilience, forward compatibility, and controlled load",
      "<strong>Integrations with External Services & Data Sources :</strong> Connects seamlessly to external systems (such as payment gateways, third-party health services, or data providers), handling transform, error retry logic, and fallback gracefully",
      "<strong>Logging, Monitoring & Error Handling Strategy :</strong> Implements centralized logging, structured error responses, health-check endpoints, metrics (e.g. via Prometheus or similar), and alerting ensuring maintainability and observability in production"
    ],
    tech: ["Java (Spring Boot)", "REST API", "JWT", "SQL Database", "API Gateway", "CI/CD Pipeline"],
    image: "/data/images/projects/evernorth-backend.png",
    github: "https://github.com/AjayKumbham/evernorth-backend-api",
    hasLiveDemo: false
  },
  {
    id: 6,
    title: "Healthcare Services & Pharmacy Docs",
    description: "A comprehensive documentation hub detailing the architecture, APIs, data models, and user workflows of a full‑stack healthcare & pharmacy platform — designed to support developer onboarding, maintainability, and future growth.",
    features: [
      "<strong>Clear System Architecture Blueprint :</strong> Contains well‑structured diagrams (e.g., component diagrams, sequence flows) that clearly explain how different modules (patients, pharmacies, admin) interact, promoting clarity for new developers or architects",
      "<strong>API Reference & Usage Examples :</strong> Provides detailed API endpoints, request/response schemas, authentication workflows, and sample payloads ensuring external developers or internal teams can integrate confidently and correctly",
      "<strong>Data Models & Schema Definitions :</strong> Documents entity relationships, field definitions, validation rules, and constraints (e.g., for prescriptions, inventory, user roles), establishing a single source of truth for development and maintenance",
      "<strong>User & Role Workflow Documentation :</strong> Covers use cases for each stakeholder (patient, pharmacy, admin), describing step‑by‑step flows such as prescription upload, order fulfillment, membership handling, and error states",
      "<strong>Versioning, Change Log & Contribution Guide :</strong> Maintains version control of docs, change logs for every update, and contribution guidelines making the documentation robust, updatable, and collaborative"
    ],
    tech: ["Markdown", "PlantUML / Mermaid", "Swagger / OpenAPI", "Git / GitHub Pages", "UML Diagram Tools", "JSON / YAML Schema Files"],
    image: "/data/images/projects/healthcare-docs.png",
    github: "https://github.com/AjayKumbham/healthcare-services-and-pharmacy-docs",
    live: "https://healthcare-docs-demo.github.io/",
    hasLiveDemo: true
  },
  {
    id: 7,
    title: "JWT Auth API",
    description: "A secure, standards-based authentication service built to issue, validate, and refresh JSON Web Tokens (JWTs), enabling stateless, scalable token-based authentication for client applications.",
    features: [
      "<strong>Complete Auth Flow Implementation :</strong>  Supports user registration, login, token issuance (access & refresh), token refresh, and logout/revocation covering the full lifecycle of session management",
      "<strong>Strong Security Measures :</strong> Employs password hashing (e.g. bcrypt), secure secret key management, token expiration strategies, and safe storage of refresh tokens to mitigate common security vulnerabilities",
      "<strong>Stateless Access & Controlled Refresh :</strong> Access tokens are short-lived and stateless, while refresh tokens allow controlled renewal. This balances user experience with security",
      "<strong>Clear Error Handling & Response Standardization :</strong> Implements consistent error codes, HTTP status semantics (401, 403, 400), and structured JSON responses making it easy for API clients to integrate and respond to auth states",
      "<strong>Extensible & Integratable Architecture :</strong> Designed to be dropped into any backend stack, with modular token logic, middleware integration, and easy hooks for role-based claims or scope-based access control"
    ],
    tech: ["Node.js", "Express", "jsonwebtoken", "bcrypt", "PostgreSQL", "dotenv", "REST API", "ORM / Query Builder", "Middleware Pattern"],
    image: "/data/images/projects/jwt-auth.png",
    github: "https://github.com/AjayKumbham/jwt-auth-api",
    hasLiveDemo: false
  }
];