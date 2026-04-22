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
  /** Только карусель на главной: видео вместо превью-картинки. Не используется в модалке и на /portfolio. */
  carouselPreviewVideo?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: 1,
    client: "ILLUMINA",
    industry: "Life sciences",
    service: "B2B catalog · UX & web",
    timeline: "1 week",
    carouselPreviewVideo: "/portfolio/illumina-carousel-preview.mov?v=1",
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
    client: "Never Tired Centre",
    industry: "Music / Studio",
    service: "Studio site · UX & web",
    timeline: "10 weeks",
    carouselPreviewVideo:
      "/portfolio/never-tired-carousel-preview.mov?v=5",
    challenge:
      "A recording studio needed one dark, high-trust site that sells services (rental, production, mixing), introduces the team, shows gear, and captures leads — without a patchwork of PDFs and DMs.",
    solution:
      "We built a modular marketing and booking shell: services bento grid, credits and streaming links, team bios, equipment inventory, and stepped modals for production scope, studio rental, and date/time booking.",
    features: [
      "NEVERTIRED hero and scroll narrative",
      "Services grid with deep links and “more” affordances",
      "Mixing & post-production credits + release cards",
      "Team page with long-form engineer bios",
      "Studio inventory by category (mics, interfaces, racks)",
      "Lead modals: full production checklist, rental form, booking slot",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "One visual system across marketing and conversion paths",
      "Clear service → modal → contact funnel for studio rental",
      "Equipment and team pages ready for CMS content",
      "Streaming release blocks wired for outbound links",
    ],
    screenshots: [
      {
        alt: "Hero — NEVERTIRED mark and infinity visual",
        src: "/portfolio/case-3/01-hero.png",
      },
      {
        alt: "Services — rental, production, distribution, mixing grid",
        src: "/portfolio/case-3/02-services.png",
      },
      {
        alt: "Releases — Spotify and Deezer credits with artwork",
        src: "/portfolio/case-3/03-releases.png",
      },
      {
        alt: "Modal — full production scope (beat, lyrics, video)",
        src: "/portfolio/case-3/04-full-production.png",
      },
      {
        alt: "Modal — studio rental contact form",
        src: "/portfolio/case-3/05-studio-rental.png",
      },
      {
        alt: "Modal — booking date and time",
        src: "/portfolio/case-3/06-booking.png",
      },
      {
        alt: "Team — engineers and producers",
        src: "/portfolio/case-3/07-team.png",
      },
      {
        alt: "Equipment — microphones and interfaces inventory",
        src: "/portfolio/case-3/08-equipment.png",
      },
    ],
  },
  {
    n: 4,
    client: "White Feather Coffee Co.",
    industry: "Hospitality / Retail",
    service: "Brand site · UX & web",
    timeline: "1 week",
    carouselPreviewVideo:
      "/portfolio/white-feather-carousel-preview.mov?v=5",
    challenge:
      "An independent UK coffee brand needed a premium dark-mode site that sells the in-cup experience, explains local sourcing values, and drives footfall to train-station and office locations — without a generic template feel.",
    solution:
      "We designed a high-contrast marketing site with editorial typography, split hero and values layouts, a cinematic locations hero, and orange CTAs that match the brand’s warmth. Contact and social links stay visible in the header for quick trust.",
    features: [
      "Split hero — product photography and “find us” CTA",
      "Values story — local supply chain and interior photography",
      "Locations — full-bleed hero and visit funnel",
      "3D-style product feature card and “explore” path",
      "Header with phone, email, and social links",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Coherent black / cream / orange system across pages",
      "Clear path from story → locations → visit",
      "Layouts ready for real photography swap-in",
      "Mobile-friendly navigation and CTAs",
    ],
    screenshots: [
      {
        alt: "Hero — 3D mug feature and split brand story",
        src: "/portfolio/case-4/01-hero-mockup.png",
      },
      {
        alt: "Find us — latte art, headline, orange CTA",
        src: "/portfolio/case-4/02-find-us.png",
      },
      {
        alt: "Values — why we keep it local, café interior",
        src: "/portfolio/case-4/03-values-local.png",
      },
      {
        alt: "Locations — hero interior and visit section",
        src: "/portfolio/case-4/04-locations.png",
      },
    ],
  },
  {
    n: 5,
    client: "Axelyth",
    industry: "AI infrastructure · Web3",
    service: "Landing · product UX",
    timeline: "1 week",
    carouselPreviewVideo: "/portfolio/axelyth-carousel-preview.mov?v=1",
    challenge:
      "A deep-tech team needed a credible enterprise narrative for AI provenance — explain hybrid Polygon + Ethereum anchoring, compliance postures, and ROI — without drowning buyers in whitepaper density.",
    solution:
      "We structured a dark, neon-accent marketing site: hero with ROI calculator, solution pillars, three-step “model to proof” flow, integration grid, industry use cases, performance claims, and a public roadmap with highlighted milestones.",
    features: [
      "Hero + enterprise ROI calculator widget",
      "Solution — schema, hybrid chain architecture, compliance",
      "How it works — IPFS, PostgreSQL/Redis, batch anchoring",
      "Built for enterprise ecosystems — tech partner grid",
      "Critical industries — forensics, healthcare, enterprise, research",
      "Performance story — cost, throughput, TCO framing",
      "Roadmap — quarterly milestones and CTA",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Single visual language from hero to roadmap",
      "Calculator and metrics blocks ready for live data wiring",
      "Compliance and chain messaging aligned for enterprise reviewers",
      "Modular sections map 1:1 to product story",
    ],
    screenshots: [
      {
        alt: "Hero — AI provenance headline and ROI calculator",
        src: "/portfolio/case-5/01-hero-roi.png",
      },
      {
        alt: "The solution — schema, hybrid blockchain, compliance cards",
        src: "/portfolio/case-5/02-solution.png",
      },
      {
        alt: "How it works — three steps from model to on-chain proof",
        src: "/portfolio/case-5/03-how-it-works.png",
      },
      {
        alt: "Enterprise ecosystems — integration grid and contact sales",
        src: "/portfolio/case-5/04-enterprise-ecosystems.png",
      },
      {
        alt: "Use cases — critical industries (forensics, healthcare, …)",
        src: "/portfolio/case-5/05-use-cases.png",
      },
      {
        alt: "Performance — cost, speed, enterprise readiness metrics",
        src: "/portfolio/case-5/06-performance.png",
      },
      {
        alt: "Roadmap — what’s next through 2026",
        src: "/portfolio/case-5/07-roadmap.png",
      },
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
