// Portfolio Data for Guy Stark - Updated from Resume
export const personalInfo = {
  name: "Guy Stark",
  role: "Full Stack & AI Developer",
  tagline: "Building intelligent web products — full stack, cloud-native, and AI-ready.",
  experience: "5+",
  heroBackendStack: [
    "Node.js",
    "TypeScript",
    "REST & GraphQL",
    "SQL & ORMs",
    "Redis",
    "Logging & health checks",
    "OAuth 2.0 / JWT",
  ],
  heroAiStack: [
    "OpenAI & Azure OpenAI",
    "LangChain",
    "RAG",
    "Agents & tools",
    "Vector search",
    "Prompting & evals",
  ],
  summary: [
    "5+ years of experience as a Full Stack & AI Engineer specializing in React, TypeScript, and modern JavaScript, shipping enterprise portals, GenAI features, and secure web platforms.",
    "Strong backend delivery with Node.js and TypeScript services (REST and GraphQL), ORM-driven SQL, Redis, structured logging and health checks, and OAuth 2.0 / JWT on cloud platforms.",
    "Hands-on with modern GenAI: OpenAI and Azure OpenAI APIs, LangChain-style orchestration, RAG with vector stores, agent tool-calling, guardrails, and evaluation workflows alongside React and Node services.",
    "Strong Full-Stack Architecture & UI/UX Expertise with Business-Driven Technical Contributor.",
    "Actively involved in pre-sales, client engagement, and delivering impactful POCs. Strong problem-solving, teamwork and tech adaptability.",
    "Experience setting up CI/CD pipelines using Azure DevOps and deploying cloud-hosted frontend applications on Microsoft Azure.",
    "Strong understanding of software design principles, component abstraction patterns, and scalable frontend architecture.",
  ],
  email: "stark092004@gmail.com",
  telegram: "sea978",
  social: {
    github: "https://github.com/stark092004-bot",
    linkedin: "https://www.linkedin.com/in/guystark",
    twitter: "https://twitter.com/guystark",
    telegram: "https://t.me/sea978"
  }
};

export const skills = {
  frameworks: [
    { name: "React", icon: "FaReact", level: 95 },
    { name: "Jest", icon: "SiJest", level: 85 },
    { name: "Redux", icon: "SiRedux", level: 90 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
    { name: "AG Grid", icon: "SiAg", level: 85 },
    { name: "E-Charts", icon: "SiApacheecharts", level: 82 }
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs", level: 90 },
    { name: "Express", icon: "SiExpress", level: 88 },
    { name: "NestJS", icon: "SiNestjs", level: 86 },
    { name: "REST APIs", icon: "FaServer", level: 90 },
    { name: "GraphQL", icon: "SiGraphql", level: 82 },
    { name: "PostgreSQL", icon: "SiPostgresql", level: 85 },
    { name: "Redis", icon: "SiRedis", level: 80 }
  ],
  ai: [
    { name: "OpenAI API", icon: "SiOpenai", level: 88 },
    { name: "Azure OpenAI", icon: "SiOpenai", level: 86 },
    { name: "LangChain", icon: "SiLangchain", level: 84 },
    { name: "RAG & vector search", icon: "SiMilvus", level: 80 },
    { name: "Anthropic Claude", icon: "SiAnthropic", level: 82 },
    { name: "Hugging Face", icon: "SiHuggingface", level: 78 },
    { name: "Agents & evals", icon: "FaBrain", level: 85 }
  ],
  programming: [
    { name: "TypeScript", icon: "SiTypescript", level: 92 },
    { name: "JavaScript", icon: "SiJavascript", level: 95 }
  ],
  cicd: [
    { name: "Azure DevOps", icon: "SiAzuredevops", level: 90 }
  ],
  uiDesigning: [
    { name: "Figma", icon: "FaFigma", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Enterprise Snacks Platform",
    client: "Leading Snacks Company USA",
    description: "Designed and implemented responsive UI components using React to allow users to submit and track claim data. Integrated REST APIs built with NodeJS to fetch, submit, and update claim information securely and efficiently. Developed responsive UI components using React and React Redux, enabling seamless claim submission and tracking with a modern user interface.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: ["React", "Redux", "TypeScript", "REST APIs", "OAuth 2.0", "MSAL", "Jest"],
    highlights: [
      "Responsive UI with React and Redux for claim submission",
      "OAuth 2.0 authentication with MSAL integration",
      "Dynamic theme management system with Redux",
      "Custom drag-and-drop file upload with size/type validation",
      "Unit and integration tests using React Testing Library",
      "CI/CD pipelines in Azure DevOps for automated deployments"
    ],
    category: "enterprise"
  },
  {
    id: 2,
    title: "Employee Management Portal",
    client: "Enterprise Client",
    description: "Built a responsive React + TypeScript UI for managing employee data, profiles, and utilization metrics using a modular, component-driven architecture. Implemented role-based access control (RBAC) at the UI layer to conditionally render routes, components, and AG Grid actions for Admin, Manager, and Employee roles.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "AG Grid", "Chart.js", "Recharts", "React Query"],
    highlights: [
      "Role-based access control (RBAC) for Admin, Manager, Employee",
      "Dynamic forms using React Hook Form with Yup validation",
      "Advanced search and multi-criteria filtering with AG Grid",
      "Interactive dashboards using Chart.js/Recharts",
      "Real-time state synchronization with React Query",
      "Protected routing with JWT-based authentication"
    ],
    category: "enterprise"
  },
  {
    id: 3,
    title: "IOT Ticker Application",
    client: "Leading Automobile Company",
    description: "Designed and developed high-performance real-time dashboard components using React and TypeScript to visualize IoT streaming data from Databricks pipelines. Implemented global state management using Redux to handle device telemetry state, alert notifications, and user session data efficiently across modules.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Redux", "MUI", "Styled Components", "OpenID Connect"],
    highlights: [
      "Real-time IoT dashboard with Databricks integration",
      "Enterprise-grade data tables with server-side pagination",
      "Secure authentication with OpenID Connect and OAuth 2.0",
      "Role-Based Access Control (RBAC) UI layers",
      "Highly customizable UI with Styled Components",
      "Optimized API handling and caching strategies"
    ],
    category: "enterprise"
  },
  {
    id: 4,
    title: "Digital Banking Chatbot",
    client: "Financial Institution",
    description: "Designed and developed a GPT-style conversational chatbot interface using React and TypeScript, supporting persistent chat history, new conversation threads, message streaming, and session-based state management. Implemented Redux-based global state architecture to manage conversations, active chat sessions, authentication context, and role-based UI permissions.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Redux", "Styled Components", "OpenID Connect", "AG Grid"],
    highlights: [
      "GPT-style conversational chatbot interface",
      "Persistent chat history and message streaming",
      "OpenID Connect and OAuth 2.0 authentication",
      "RBAC for Customer, Support Agent, and Admin roles",
      "Data-heavy banking dashboards using AG Grid",
      "Automated unit and integration tests"
    ],
    category: "fintech"
  },
  {
    id: 5,
    title: "AI Chat Customization Platform",
    client: "Tech Startup",
    description: "Built a scalable React + TypeScript frontend for an AI agent management platform, enabling users to browse, configure, and test multiple agents from a centralized dashboard. Designed agent catalog views with advanced client/server-side filtering and search, allowing users to discover agents by capability, model type, performance metrics, and tags.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Redux", "Charting Libraries", "OAuth 2.0", "OpenID Connect"],
    highlights: [
      "AI agent management and configuration platform",
      "Multi-step configuration forms with schema validation",
      "Customizable output templates for response formatting",
      "Real-time agent testing and comparison workflows",
      "Agent efficiency dashboards with charting libraries",
      "OAuth 2.0 authentication with JWT claims management"
    ],
    category: "ai"
  },
  {
    id: 6,
    title: "Supplier Inventory Management",
    client: "E-commerce Platform",
    description: "Built a Single Page Application (SPA) using React and TypeScript enabling suppliers to upload product inventory and service location data via Excel files. Designed supplier onboarding workflows allowing bulk product uploads, updates, and validations directly from spreadsheet inputs.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "REST APIs", "Excel Parsing", "Azure DevOps"],
    highlights: [
      "Excel file parsing and client-side validation",
      "Product inventory management dashboards",
      "Incremental inventory updates support",
      "Role-based upload and edit capabilities",
      "Caching for optimistic UI updates",
      "CI/CD pipelines in Azure DevOps"
    ],
    category: "ecommerce"
  },
  {
    id: 7,
    title: "Global Energy Technology Portfolio",
    client: "Leading Global Energy Company",
    description: "Built an enterprise-grade SPA using React, TypeScript, and functional JavaScript to manage technology portfolios with responsive, cross-platform UI. Designed modular, reusable components and applied frontend architecture principles to support scalable dashboards, assessments, and detail views.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "REST APIs", "Styled Components", "Azure DevOps"],
    highlights: [
      "Enterprise-grade SPA for technology portfolios",
      "Token-based authentication with RBAC",
      "Advanced search, filtering, and sorting",
      "Unit and integration tests using React Testing Library",
      "CI/CD pipelines in Azure DevOps",
      "Performance optimization with memoization and lazy loading"
    ],
    category: "enterprise"
  },
  {
    id: 8,
    title: "Internal RAG Knowledge Portal",
    client: "Enterprise SaaS",
    description: "Delivered a React and TypeScript portal where teams query internal policies and runbooks using retrieval-augmented generation. Integrated LangChain-style orchestration with OpenAI APIs, PostgreSQL for metadata, and Redis-backed session caches to keep answers fast and consistent under load.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "LangChain", "OpenAI API", "PostgreSQL", "Redis", "RAG & vector search"],
    highlights: [
      "Chunking, embedding, and vector retrieval pipeline with guardrails",
      "Citation-backed answers with source snippets in the UI",
      "Redis caching for repeated queries and conversation context",
      "Role-scoped document collections and audit-friendly logging",
      "Type-safe API contracts between UI and Node.js services",
      "Azure DevOps release gates with smoke tests before production"
    ],
    category: "ai"
  },
  {
    id: 9,
    title: "NestJS GraphQL Service Layer",
    client: "FinTech Platform",
    description: "Built a NestJS and TypeScript backend exposing a federated GraphQL API over account, ledger, and notification domains. Used PostgreSQL with migrations, Redis for idempotency keys and rate limiting, and Jest for contract tests to keep schema changes safe across teams.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&h=500&fit=crop",
    technologies: ["NestJS", "GraphQL", "TypeScript", "PostgreSQL", "Redis", "REST APIs", "Jest"],
    highlights: [
      "Modular domain services with clear DTO validation at the edge",
      "DataLoader patterns to prevent N+1 query storms",
      "Redis-backed idempotency for payment-adjacent mutations",
      "Schema versioning and breaking-change detection in CI",
      "Jest integration tests against a disposable Postgres fixture",
      "Structured logging and health checks for Kubernetes probes"
    ],
    category: "fintech"
  },
  {
    id: 10,
    title: "Operations Metrics Cockpit",
    client: "Global Logistics Partner",
    description: "Implemented a Tailwind-styled React dashboard with AG Grid for fleet and SLA metrics, plus E-Charts for trend analysis. Connected to Node.js REST APIs with TypeScript clients, Redux for filter state, and optimistic updates backed by Redis-cached aggregates.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "AG Grid", "E-Charts", "Redux", "Node.js", "Redis"],
    highlights: [
      "Pinned column layouts and saved views per user role",
      "Large-dataset virtualization with server-driven AG Grid models",
      "E-Charts drill-downs synced with global date-range filters",
      "Redux Toolkit slices for KPI selection and URL-deep-linking",
      "Node.js aggregation workers with Redis hot metrics",
      "Jest and React Testing Library coverage on critical widgets"
    ],
    category: "enterprise"
  },
  {
    id: 11,
    title: "Merchant Onboarding API",
    client: "E-Commerce Marketplace",
    description: "Shipped an Express and TypeScript service suite for seller onboarding, KYC document intake, and catalog bootstrap. PostgreSQL stores normalized merchant profiles, Redis queues webhook retries, and REST APIs power a React admin console with JWT-based access.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop",
    technologies: ["Express", "TypeScript", "PostgreSQL", "Redis", "REST APIs", "React", "JavaScript"],
    highlights: [
      "Idempotent REST handlers with structured error envelopes",
      "Background workers for document virus scan and OCR callbacks",
      "Redis streams for reliable webhook delivery and replay",
      "React admin flows with step validation and progress persistence",
      "Database indexes tuned for search-by-merchant-state reports",
      "Azure DevOps multi-stage pipelines with blue/green deploy hooks"
    ],
    category: "ecommerce"
  },
  {
    id: 12,
    title: "Azure OpenAI Contract Review Copilot",
    client: "Legal Tech Vendor",
    description: "Created a secure React and TypeScript workspace that calls Azure OpenAI with retrieval over clause libraries. Combined LangChain tooling for prompt templates, RAG & vector search for similar precedents, and Agents & evals workflows so reviewers can compare model drafts side by side.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Azure OpenAI", "LangChain", "RAG & vector search", "Agents & evals"],
    highlights: [
      "Tenant-isolated vector indexes with metadata filters",
      "Human-in-the-loop accept/reject tracking for model outputs",
      "Evaluation harness comparing prompts across document batches",
      "Redacted logging paths for sensitive legal text",
      "Streaming completions with cancel tokens in the UI",
      "Azure DevOps secret rotation tied to managed identities"
    ],
    category: "ai"
  },
  {
    id: 13,
    title: "Design-to-Code Component Library",
    client: "Product Studio",
    description: "Partnered with design to translate Figma tokens into a Tailwind CSS theme and a React component library consumed by three squads. TypeScript props, interactive documentation, and Jest visual regression hooks kept releases predictable.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Jest", "Redux"],
    highlights: [
      "Figma variable sync into Tailwind config and CSS custom properties",
      "Accessible primitives with keyboard and screen-reader audits",
      "Redux-compatible form adapters for shared wizard flows",
      "Jest snapshot suites for layout regressions on core components",
      "Semantic versioning and changelog automation in Azure DevOps",
      "Migration guides for teams upgrading from legacy CSS modules"
    ],
    category: "enterprise"
  },
  {
    id: 14,
    title: "Multimodel Support Triage Bot",
    client: "B2B Support SaaS",
    description: "Built a support triage console in React and TypeScript that routes tickets through OpenAI API and Anthropic Claude with Hugging Face fallbacks for classification. Added Redis conversation memory, Agents & evals scorecards, and GraphQL reads for ticket timelines.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "OpenAI API", "Anthropic Claude", "Hugging Face", "Redis", "GraphQL", "Agents & evals"],
    highlights: [
      "Policy-based model routing with latency and cost budgets",
      "Side-by-side eval runs stored for compliance review",
      "Redis TTL caches for repeated classification signatures",
      "GraphQL federation read models for agent audit trails",
      "Feature flags to roll out new prompts without redeploys",
      "Dashboards in E-Charts for deflection and escalation KPIs"
    ],
    category: "ai"
  }
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  // { name: "Awards", to: "awards" },
  { name: "Contact", to: "contact" }
];

export const awards = [
  {
    id: 1,
    title: "Robotics Zonal Winner",
    event: "IIT Delhi Robotics Competition",
    rank: "Rank 2",
    rankNum: 2,
    year: "2019",
    description: "Secured 2nd place at the IIT Delhi Zonal Robotics competition, demonstrating advanced robotics design and programming skills.",
    tags: ["Robotics", "IIT Delhi", "Zonal Level"],
    certificate: null,
  },
  {
    id: 2,
    title: "CODETHON-21 National Hackathon",
    event: "National Hackathon – CODETHON 2021",
    rank: "Rank 4",
    rankNum: 4,
    year: "2021",
    description: "Achieved 4th place nationally in CODETHON-21, competing against hundreds of teams across India with an innovative software solution.",
    tags: ["Hackathon", "National Level", "Competitive Coding"],
    certificate: null,
  },
  {
    id: 3,
    title: "CODE-N-Build 2.0 Global Hackathon",
    event: "CODE-N-Build 2.0 – Global Hackathon",
    rank: "Rank 3",
    rankNum: 3,
    year: "2022",
    description: "Won 3rd place globally at CODE-N-Build 2.0, competing with international teams to deliver a full-stack solution under 48 hours.",
    tags: ["Hackathon", "Global Level", "Full Stack"],
    certificate: null,
  },
  {
    id: 4,
    title: "AICTE Chhatra Vishwakarma Hackathon",
    event: "AICTE Chhatra Vishwakarma Award Hackathon",
    rank: "Quarter-Finalist",
    rankNum: null,
    year: "2021",
    description: "Selected as a Quarter-Finalist in the prestigious AICTE Chhatra Vishwakarma Hackathon, a national-level innovation challenge.",
    tags: ["AICTE", "National Level", "Innovation"],
    certificate: null,
  },
];
