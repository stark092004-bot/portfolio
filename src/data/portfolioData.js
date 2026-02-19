// Portfolio Data for Yash Jain - Updated from Resume
export const personalInfo = {
  name: "Yash Jain",
  role: "Full Stack Developer",
  tagline: "Crafting Beautiful & Performant Web Experiences",
  experience: "5+",
  summary: [
    "5+ years of experience as a Full Stack Engineer specializing in React, TypeScript, and modern JavaScript, building scalable enterprise portals, AI-driven platforms, and secure web applications.",
    "Strong Full-Stack Architecture & UI/UX Expertise with Business-Driven Technical Contributor.",
    "Actively involved in pre-sales, client engagement, and delivering impactful POCs. Strong problem-solving, teamwork and tech adaptability.",
    "Experience setting up CI/CD pipelines using Azure DevOps and deploying cloud-hosted frontend applications on Microsoft Azure.",
    "Strong understanding of software design principles, component abstraction patterns, and scalable frontend architecture.",
    "Worked with global clients across UAE, Saudi Arabia, Australia, USA, Japan & India in diverse domains including Energy, Fintech, E-commerce, and AI."
  ],
  email: "yash.jain.consults@gmail.com",
  location: "India",
  workAuthorization: {
    status: "Valid H-1B Visa",
    details: [
      { label: "Citizenship", value: "Indian Citizen" },
      { label: "Visa Type", value: "H-1B" },
      { label: "Validity", value: "Sept 23, 2024 – Aug 15, 2027" },
      { label: "H-1B Transfer", value: "Open to Transfer" },
      { label: "Work Preference", value: "Open to Relocate & Remote" },
      { label: "Relocation", value: "Open to Global Relocation USA/UK/UAE/EU/AU" },
    ]
  },
  resumeLink: "/assets/resume/Yash_Jain_Resume.pdf",
  social: {
    github: "https://github.com/yashjain",
    linkedin: "https://www.linkedin.com/in/yash-jain-097192175",
    twitter: "https://twitter.com/yashjain"
  }
};

export const skills = {
  frameworks: [
    { name: "React", icon: "FaReact", level: 95 },
    { name: "Jest", icon: "SiJest", level: 85 },
    { name: "Redux", icon: "SiRedux", level: 90 },
    { name: "Material UI", icon: "SiMui", level: 90 },
    { name: "Bootstrap", icon: "FaBootstrap", level: 92 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
    { name: "AG Grid", icon: "SiAg", level: 85 },
    { name: "E-Charts", icon: "SiApacheecharts", level: 82 }
  ],
  programming: [
    { name: "TypeScript", icon: "SiTypescript", level: 92 },
    { name: "JavaScript", icon: "SiJavascript", level: 95 }
  ],
  cicd: [
    { name: "Azure DevOps", icon: "SiAzuredevops", level: 90 },
    { name: "Git", icon: "FaGitAlt", level: 95 }
  ],
  cloud: [
    { name: "Azure", icon: "SiMicrosoftazure", level: 88 },
     { name: "Azure Entra ID", icon: "SiMicrosoftazure", level: 85 }
  ],
  uiDesigning: [
    { name: "Figma", icon: "FaFigma", level: 85 }
  ],
  tools: [
    { name: "Postman", icon: "SiPostman", level: 88 },
    { name: "VS Code", icon: "SiVisualstudiocode", level: 95 }
  ]
};

export const certifications = [
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/azure-fundamentals.png",
    certificate: "/assets/certificates/docs/Microsoft Certified- Azure Fundamentals .pdf",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    skills: ["Cloud Computing Basics", "Azure Services", "Cloud Concepts", "Azure Pricing"],
    date: "2023"
  },
  {
    code: "SC-900",
    name: "Security, Compliance and Identity",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/security-compliance-and-identity-fundamentals.png",
    certificate: "/assets/certificates/docs/Microsoft Certified- Security, Compliance, and Identity Fundamentals.pdf",
    description: "Foundational knowledge on security, compliance, and identity concepts and related cloud-based Microsoft solutions.",
    skills: ["Security Concepts", "Azure AD", "Compliance", "Identity Management"],
    date: "2023"
  },
  {
    code: "AZ-104",
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/azure-administrator-associate.png",
    certificate: "/assets/certificates/docs/Microsoft Certified- Azure Administrator Associate.pdf",
    description: "Skills in implementing, managing, and monitoring an organization's Microsoft Azure environment.",
    skills: ["Azure Administration", "Virtual Networks", "Storage Management", "Azure AD"],
    date: "2024"
  },
  {
    code: "AZ-305",
    name: "Designing Microsoft Azure Infrastructure Solutions",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/azure-solutions-architect-expert.png",
    certificate: "/assets/certificates/docs/Microsoft Certified- Azure Solutions Architect Expert.pdf",
    description: "Design cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security.",
    skills: ["Solution Architecture", "Infrastructure Design", "Azure Services", "High Availability"],
    date: "2024"
  },
  {
    code: "AZ-400",
    name: "Designing and Implementing Microsoft DevOps Solutions",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/DevOps-Engineer.png",
    certificate: "/assets/certificates/docs/Microsoft Certified- DevOps Engineer Expert.pdf",
    description: "Expertise in combining people, process, and technologies to continuously deliver valuable products and services.",
    skills: ["CI/CD", "Azure DevOps", "Infrastructure as Code", "Monitoring"],
    date: "2024"
  },
  {
    code: "MCT",
    name: "Microsoft Certified Trainer",
    issuer: "Microsoft",
    icon: "SiMicrosoftazure",
    badge: "/assets/certificates/badges/microsoft-certified-trainer.png",
    certificate: "",
    description: "Qualified to deliver Microsoft official curriculum training to technical and professional audiences.",
    skills: ["Technical Training", "Knowledge Transfer", "Presentation", "Mentoring"],
    date: "2025"
  }
];

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
  }
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Certifications", to: "certifications" },
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
