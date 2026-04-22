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
    client: "ILLUMINA",
    industry: "Life sciences",
    service: "B2B catalog · UX & web",
    timeline: "1 week",
    challenge:
      "A research reagent supplier needed a calm, credible storefront for complex SKUs — kits, panels, and instruments — without overwhelming lab buyers who compare specs, compliance tags, and quote flows in one session.",
    solution:
      "We structured a modular catalog with category tabs, dense-but-scannable product cards, PDPs with RUO-style metadata, and a cart tuned for multi-line quantities and quote/checkout handoff. Selection-tool flows sit beside standard merchandising so specialists can self-serve.",
    features: [
      "Hero and story pages with restrained typography",
      "Tabbed catalog with kit/reagent groupings",
      "PDP layout: badge, price, description, quantity stepper",
      "Selection & planning tool entry points",
      "Cart with line subtotals and quote / checkout CTA",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS · design system",
    results: [
      "Single design language across marketing and catalog",
      "Faster scan time on 3-up product grids in user tests",
      "Quote-ready cart prototype validated with procurement",
      "Accessible contrast and spacing for long research sessions",
    ],
    screenshots: [
      {
        alt: "Hero — mission narrative and background storytelling",
        src: "/portfolio/case-1/01-hero-mission.png",
      },
      {
        alt: "Hero — precision lab photography and supporting headline",
        src: "/portfolio/case-1/02-hero-precision.png",
      },
      {
        alt: "Products — tabbed catalog with kit cards and quantity steppers",
        src: "/portfolio/case-1/03-products.png",
      },
      {
        alt: "Product detail — DNA prep kit, price, description, quantity",
        src: "/portfolio/case-1/04-product-detail.png",
      },
      {
        alt: "Selection tools — library prep & array kit selector card",
        src: "/portfolio/case-1/05-kit-selector.png",
      },
      {
        alt: "Cart — multi-SKU lines, subtotal, quote and clear actions",
        src: "/portfolio/case-1/06-cart.png",
      },
    ],
  },
  {
    n: 2,
    client: "Bilimshop",
    industry: "E‑commerce · Publishing",
    service: "D2C storefront · UX & web",
    timeline: "1 week",
    challenge:
      "A bilingual Poland / RU shop selling POD posters and Russian-language books needed one dark, editorial brand world — catalog, bundles, editorial hub, community gallery, and a print-on-demand configurator — without feeling like five separate sites.",
    solution:
      "We unified navigation, typography, and pink accent language across hero, bestseller grids, book listings with edition picks, the Dark Gallery roadmap, Weekly Fantasms editorial, and a step-by-step custom poster builder (upload, filters, size, material).",
    features: [
      "Hero with catalog CTAs and logistics / payment trust row",
      "Popular designs grid with badges, wishlist, and add to cart",
      "Books category with edition selector and zł pricing",
      "Dark Gallery — community features and in-development state",
      "Weekly Fantasms — featured story and article grid",
      "Custom poster flow — upload, presets, A1 / materials",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS · Stripe / Przelewy24 · POD (Prodigi)",
    results: [
      "Single visual system from landing to checkout",
      "RU · PL · EN language switch in the shell",
      "Editorial + commerce routes ready for CMS and catalog data",
      "Configurator prototype aligned with print pipeline",
    ],
    screenshots: [
      {
        alt: "Hero — Bilimshop positioning, CTAs, POD and payments",
        src: "/portfolio/case-2/01-hero.png",
      },
      {
        alt: "Popular designs — bestseller grid, cart and wishlist",
        src: "/portfolio/case-2/02-popular-designs.png",
      },
      {
        alt: "Books — Russian catalog cards, editions, zł pricing",
        src: "/portfolio/case-2/03-books.png",
      },
      {
        alt: "Dark Gallery — community features and roadmap",
        src: "/portfolio/case-2/04-dark-gallery.png",
      },
      {
        alt: "Weekly Fantasms — editorial hub and article cards",
        src: "/portfolio/case-2/05-weekly-fantasms.png",
      },
      {
        alt: "Custom poster — upload, filters, size and material",
        src: "/portfolio/case-2/06-custom-poster.png",
      },
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
