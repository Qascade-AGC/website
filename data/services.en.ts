import type { Service } from "./services.pl";

export type { Service, ServiceTier } from "./services.pl";

const ENTRY: Service[] = [
  {
    slug: "business-site",
    tier: "entry",
    headline: "Business website",
    title: "A site that captures leads",
    body: "For local service businesses. **Clear offer**, phone and form up front — not a 2019 template that sells nothing.",
    deliverables: [
      "Homepage with offer and trust signals",
      "Contact form and messenger hooks",
      "Mobile-first layout",
      "Core SEO and fast loading",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    cta: "Talk about your site →",
  },
  {
    slug: "booking",
    tier: "entry",
    headline: "Online booking",
    title: "Appointments without phone chaos",
    body: "Calendar, open slots, reminders — for clinics, studios, salons where **every missed call is lost revenue**.",
    deliverables: [
      "Client booking view and owner panel",
      "Booking forms and confirmations",
      "Calendar sync (Google / iCal)",
      "Email or SMS reminders",
    ],
    cta: "Fix your booking flow →",
  },
  {
    slug: "simple-shop",
    tier: "entry",
    headline: "Simple shop",
    title: "E-commerce without bloat",
    body: "Catalog, cart, online payment — for businesses **already selling** but stuck with messy orders or no real storefront.",
    deliverables: [
      "Product catalog and categories",
      "Cart and checkout",
      "Owner order panel",
      "Basic sales analytics",
    ],
    tech: "Next.js · Stripe",
    cta: "Start selling online →",
  },
];

const PRODUCT: Service[] = [
  {
    slug: "web-apps",
    tier: "product",
    headline: "Web applications",
    title: "Custom systems for your business",
    body: "Internal panels, CRM, B2B catalogs — when **spreadsheets and five tools** no longer scale. This is the 18–85k tier.",
    deliverables: [
      "Business logic and user roles",
      "Third-party integrations",
      "Reporting and live data",
      "Architecture built to grow",
    ],
    tech: "React, Next.js, Node.js, PostgreSQL, AWS",
    cta: "Discuss your app →",
  },
  {
    slug: "mvp",
    tier: "product",
    headline: "MVP development",
    title: "From idea to live product",
    body: "Validate a digital product **before hiring a full team**. We ship a focused core on a fixed plan — not blind scope creep.",
    deliverables: [
      "Scope and priorities upfront",
      "Clickable prototype before code",
      "Core features in clean architecture",
      "Launch and first metrics",
    ],
    footnote: "Typical timeline: 6–10 weeks from discovery to launch.",
    cta: "Build your MVP →",
  },
  {
    slug: "ecommerce",
    tier: "product",
    headline: "E-commerce",
    title: "Stores built to grow",
    body: "Larger catalogs, warehouse hooks, multi-language, custom checkout — for businesses **already doing volume**.",
    deliverables: [
      "Store architecture for scale",
      "Payments, shipping, inventory",
      "Admin order panel",
      "Conversion optimization",
    ],
    cta: "Boost your sales →",
  },
  {
    slug: "saas",
    tier: "product",
    headline: "SaaS platforms",
    title: "Subscription software for many clients",
    body: "Accounts, billing, admin — when you **sell access to software**, not a one-off project.",
    deliverables: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Onboarding and client panel",
      "Usage analytics",
    ],
    cta: "Launch your SaaS →",
  },
  {
    slug: "ai",
    tier: "product",
    headline: "Automation & AI",
    title: "AI inside daily workflows",
    body: "Site bots, document processing, CRM assistants — **concrete time saved**, not a slide that says “we do AI”.",
    deliverables: [
      "Integration with existing tools",
      "Chatbot or workflow assistant",
      "Safe handling of company data",
      "Monitoring after launch",
    ],
    cta: "Add automation →",
  },
  {
    slug: "devsecops",
    tier: "product",
    headline: "DevSecOps",
    title: "DevSecOps",
    body: "Security and reliability in **CI/CD**, cloud, and release workflows — for product teams that ship often.",
    whyMatters: [
      "Pipeline checks catch most issues before production.",
      "Solid IaC and monitoring mean fewer outages and faster recovery.",
    ],
    deliverables: [
      "CI/CD automation & release pipelines",
      "Infrastructure as Code (Terraform, cloud-native)",
      "Containers & orchestration (Docker, Kubernetes)",
      "Security scanning in builds & cloud hardening",
      "Monitoring, alerting & incident basics",
    ],
    tech: "AWS / GCP / Azure · Terraform · Kubernetes · Docker · GitHub Actions · Datadog / Grafana",
    cta: "Secure your infrastructure →",
  },
];

export const SERVICES: Service[] = [...ENTRY, ...PRODUCT];
