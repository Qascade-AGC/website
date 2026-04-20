/** Скриншоты в модалке: `src` опционален — без него показывается стилизованный плейсхолдер. */
export type CaseScreenshot = {
  alt: string;
  src?: string;
};

export type CaseStudy = {
  n: number;
  client: string;
  industry: string;
  service: string;
  timeline: string;
  challenge: string;
  solution: string;
  features: string[];
  tech: string;
  results: string[];
  quote?: { text: string; author: string };
  screenshots?: CaseScreenshot[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: 1,
    client: "Northline Payments",
    industry: "Fintech",
    service: "SaaS Platform + DevSecOps",
    timeline: "12 weeks",
    challenge:
      "A Series A fintech startup needed to rebuild their legacy payment dashboard into a modern SaaS platform — while maintaining 99.9% uptime for 15,000 active users during the transition.",
    solution:
      "We designed a multi-tenant architecture with role-based access, real-time transaction monitoring, and automated compliance reporting. The CI/CD pipeline included automated security scanning on every deploy, ensuring SOC 2 readiness from day one.",
    features: [
      "Multi-tenant RBAC & audit trails",
      "Real-time transaction streams",
      "Automated compliance exports",
      "Usage-based billing hooks",
      "Incident playbooks & on-call runbooks",
    ],
    tech: "React · Node.js · PostgreSQL · AWS · Terraform · Stripe API",
    results: [
      "40% reduction in customer support tickets",
      "99.95% uptime over 12 months",
      "3x faster report generation",
      "SOC 2 Type I certification achieved in 8 weeks",
    ],
    quote: {
      text: "Working with Qascade felt like adding senior engineers to our team. They shipped on time, communicated clearly, and the product quality exceeded our expectations.",
      author: "Alex Rivera, CTO at Northline Payments",
    },
    screenshots: [
      { alt: "Payments dashboard — live transaction feed" },
      { alt: "Compliance exports & audit trail" },
      { alt: "Multi-tenant admin & roles" },
    ],
  },
  {
    n: 2,
    client: "Vitalpath",
    industry: "Healthtech",
    service: "MVP Development",
    timeline: "8 weeks",
    challenge:
      "A clinical workflow startup needed a HIPAA-aware MVP to onboard pilot clinics without hiring a full product org — fast enough to match a narrow fundraising window.",
    solution:
      "We scoped to a ruthless MVP, shipped a clickable prototype in week two, then built core scheduling, secure messaging, and provider dashboards with audit logging and encryption by default.",
    features: [
      "Clinic onboarding & roles",
      "Encrypted messaging",
      "Appointment scheduling",
      "Basic analytics for admins",
      "HIPAA-oriented hosting baseline",
    ],
    tech: "Next.js · Node.js · PostgreSQL · AWS · Auth0",
    results: [
      "Pilot live with 6 clinics in 8 weeks",
      "Zero critical security findings pre-launch",
      "NPS 62 from first cohort",
    ],
    screenshots: [
      { alt: "Clinic scheduling — week view" },
      { alt: "Secure provider messaging" },
    ],
  },
  {
    n: 3,
    client: "Lumen Thread",
    industry: "D2C Fashion",
    service: "E-Commerce",
    timeline: "10 weeks",
    challenge:
      "A growing fashion brand outgrew their theme store — slow mobile performance and a checkout that bled conversions during peak drops.",
    solution:
      "We delivered a headless storefront with optimized PDPs, server-side rendering for SEO, and a checkout tuned for one-tap payments and local delivery options.",
    features: [
      "Headless commerce architecture",
      "Drop-time traffic scaling",
      "Stripe + local payment methods",
      "Inventory sync & returns portal",
      "CRO experiments framework",
    ],
    tech: "Next.js · Shopify Hydrogen · Node.js · PostgreSQL",
    results: [
      "32% lift in mobile conversion post-launch",
      "Sub-2s LCP on core templates",
      "40% faster checkout completion",
    ],
    screenshots: [
      { alt: "PDP — mobile-first layout" },
      { alt: "Checkout — one-tap flow" },
      { alt: "Drop-time traffic scaling" },
    ],
  },
  {
    n: 4,
    client: "CargoMesh",
    industry: "Logistics",
    service: "Custom Web Application",
    timeline: "14 weeks",
    challenge:
      "A logistics operator needed a control tower for shipments across carriers — Excel and email were breaking as volume doubled.",
    solution:
      "We built a unified operations console with live shipment states, exception workflows, and integrations into three carrier APIs plus internal ERP hooks.",
    features: [
      "Unified shipment timeline",
      "Exception routing & SLAs",
      "Carrier API mesh",
      "Role-based ops views",
      "Exports & scheduled reports",
    ],
    tech: "React · Node.js · PostgreSQL · Redis · AWS",
    results: [
      "Manual coordination time −55%",
      "On-time delivery visibility for 100% loads",
      "Integration errors down 70%",
    ],
    screenshots: [
      { alt: "Operations console — shipment timeline" },
      { alt: "Exception routing & SLAs" },
    ],
  },
  {
    n: 5,
    client: "Clausewise",
    industry: "Legal Tech",
    service: "AI Integration",
    timeline: "9 weeks",
    challenge:
      "A document automation vendor needed AI-assisted clause extraction without hallucinations — legal teams demanded citations and traceability.",
    solution:
      "We implemented RAG over customer corpora with citation grounding, human-in-the-loop review queues, and evaluation harnesses for precision/recall tracking.",
    features: [
      "RAG pipeline with source spans",
      "Human review workflow",
      "Model evaluation dashboards",
      "Tenant-isolated vector stores",
      "Audit logs for every inference",
    ],
    tech: "Next.js · Python · PostgreSQL · OpenAI · Pinecone",
    results: [
      "Citation accuracy >94% on eval set",
      "Review throughput +2.4x",
      "Enterprise pilot signed in 6 weeks",
    ],
    screenshots: [
      { alt: "Clause extraction with citations" },
      { alt: "Human-in-the-loop review queue" },
    ],
  },
  {
    n: 6,
    client: "PeopleOrbit",
    industry: "HR / Recruitment",
    service: "SaaS Platform",
    timeline: "16 weeks",
    challenge:
      "An HR tech team needed multi-tenant hiring workflows with granular permissions and usage-based billing without re-architecting mid-flight.",
    solution:
      "We shipped tenant isolation at the data layer, subscription tiers with Stripe, and self-serve onboarding that provisioned sandboxes automatically.",
    features: [
      "Multi-tenant hiring pipelines",
      "Stripe billing & entitlements",
      "Self-serve onboarding",
      "Admin analytics",
      "Webhook integrations",
    ],
    tech: "React · Node.js · PostgreSQL · Stripe · AWS",
    results: [
      "Time-to-first-value under 20 minutes",
      "Churn down 18% after billing clarity",
      "ARR crossed $1M within 10 months of launch",
    ],
    screenshots: [
      { alt: "Hiring pipelines — multi-tenant" },
      { alt: "Billing & entitlements" },
    ],
  },
  {
    n: 7,
    client: "Scaleframe",
    industry: "Infrastructure",
    service: "DevSecOps",
    timeline: "6 weeks",
    challenge:
      "A scaling startup processed sensitive data but lacked hardened CI/CD, secrets hygiene, and production observability — releases were risky and slow.",
    solution:
      "We codified infrastructure with Terraform, added GitHub Actions pipelines with SAST/SCA gates, centralized secrets, and stood up monitoring with actionable SLOs.",
    features: [
      "IaC for staging & prod",
      "Security gates in CI",
      "K8s hardening checklist",
      "Secrets rotation",
      "Datadog dashboards & alerts",
    ],
    tech: "AWS · Terraform · Kubernetes · GitHub Actions · Vault · Datadog",
    results: [
      "Deploy frequency +3x with fewer incidents",
      "Critical vulns caught pre-merge",
      "MTTR down 45%",
    ],
    screenshots: [
      { alt: "CI/CD security gates" },
      { alt: "Infrastructure & observability dashboards" },
    ],
  },
];
