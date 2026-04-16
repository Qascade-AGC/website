export type Service = {
  slug: string;
  headline: string;
  title: string;
  body: string;
  bodyExtra?: string;
  deliverables: string[];
  whyMatters?: string[];
  tech?: string;
  footnote?: string;
  cta: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-apps",
    headline: "Web Applications",
    title: "Custom Web Applications",
    body: "Complex workflows deserve elegant solutions. We build **performant**, **scalable** web applications tailored to your business logic — from internal dashboards and CRMs to customer-facing platforms handling **thousands of users** daily.",
    deliverables: [
      "Custom business logic & workflow automation",
      "Role-based access & user management",
      "Third-party API integrations",
      "Real-time data processing & reporting",
    ],
    tech: "React, Next.js, Node.js, PostgreSQL, AWS",
    cta: "Discuss Your App →",
  },
  {
    slug: "mvp",
    headline: "MVP Development",
    title: "MVP Development",
    body: "Got a product idea? We help founders validate it fast. Our lean MVP process takes you from concept to a functional product in **6–10 weeks** — so you can test the market, get early users, and raise funding with proof, not promises.",
    deliverables: [
      "Product scoping & feature prioritization",
      "Clickable prototype in week 2",
      "Core-feature build with clean architecture",
      "Launch-ready deployment & analytics setup",
    ],
    footnote: "Average timeline: 6–10 weeks from kickoff to launch.",
    cta: "Build Your MVP →",
  },
  {
    slug: "ecommerce",
    headline: "E-Commerce",
    title: "E-Commerce Solutions",
    body: "We build online stores that actually convert. Whether you need a custom **Shopify** build, a **headless commerce** setup, or a fully bespoke storefront — we engineer every page, every flow, and every checkout step for maximum revenue per visitor.",
    deliverables: [
      "Custom storefront design & development",
      "Payment gateway integration (Stripe, PayPal, local methods)",
      "Inventory management & order processing",
      "Conversion rate optimization & A/B testing",
    ],
    footnote: "Clients see 25–40% conversion lift on average after launch.",
    cta: "Boost Your Sales →",
  },
  {
    slug: "saas",
    headline: "SaaS Platforms",
    title: "SaaS Platforms",
    body: "We partner with SaaS founders and product teams to build platforms people actually want to pay for. **Multi-tenant** architecture, **subscription billing**, onboarding flows, admin panels — we've built it all, and we know where the pitfalls are.",
    deliverables: [
      "Multi-tenant architecture & data isolation",
      "Subscription billing (Stripe, Paddle, custom)",
      "User onboarding & self-serve workflows",
      "Admin dashboards & usage analytics",
    ],
    footnote: "4 SaaS products we built reached $1M+ ARR.",
    cta: "Launch Your SaaS →",
  },
  {
    slug: "ai",
    headline: "AI Integration",
    title: "AI Integration",
    body: "AI is not magic — it's a tool. We help businesses integrate **large language models**, computer vision, and predictive analytics into existing products and workflows. The result: smarter automation, better user experiences, and **RAG**-ready pipelines when you need grounded answers.",
    deliverables: [
      "LLM integration (OpenAI, Anthropic, open-source models)",
      "AI-powered search, chat, and content generation",
      "Predictive analytics & recommendation engines",
      "Custom model fine-tuning & RAG pipelines",
    ],
    footnote: "We make AI practical, not experimental.",
    cta: "Add AI to Your Product →",
  },
  {
    slug: "devsecops",
    headline: "DevSecOps",
    title: "DevSecOps",
    body: "We embed security and reliability into **CI/CD**, cloud, and day-to-day workflows — **Terraform**, **Kubernetes**, automated scans on every merge — so you ship fast without firefighting.",
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
    footnote: "Experience with fintech and HIPAA-style workloads.",
    cta: "Secure Your Infrastructure →",
  },
];
