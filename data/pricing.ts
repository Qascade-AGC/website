import type { Locale } from "../lib/i18n/ui";

export type PriceRange = readonly [number, number];

export type PricingTier = {
  id: string;
  setup: PriceRange;
  monthly?: PriceRange;
  setupUsd: PriceRange;
  monthlyUsd?: PriceRange;
  featured?: boolean;
};

/** Gotowe pakiety SMB — szybki start dla małych firm. */
export const SMB_PACKAGES: PricingTier[] = [
  {
    id: "lead-machine",
    setup: [1800, 2500],
    monthly: [150, 250],
    setupUsd: [450, 650],
    monthlyUsd: [40, 65],
  },
  {
    id: "ai-admin",
    setup: [1900, 2800],
    monthly: [300, 450],
    setupUsd: [500, 700],
    monthlyUsd: [75, 115],
  },
  {
    id: "routine-killer",
    setup: [1500, 2200],
    monthly: [200, 350],
    setupUsd: [400, 550],
    monthlyUsd: [50, 90],
  },
  {
    id: "all-inclusive",
    setup: [4500, 5500],
    monthly: [500, 700],
    setupUsd: [1100, 1400],
    monthlyUsd: [125, 175],
    featured: true,
  },
];

/** Szacunkowe widełki dla usług agencyjnych (netto). */
export const SERVICE_PRICING: Record<string, PricingTier> = {
  "web-apps": {
    id: "web-apps",
    setup: [18_000, 85_000],
    monthly: [800, 3_500],
    setupUsd: [4_500, 21_000],
    monthlyUsd: [200, 900],
  },
  mvp: {
    id: "mvp",
    setup: [28_000, 65_000],
    monthly: [500, 1_800],
    setupUsd: [7_000, 16_000],
    monthlyUsd: [125, 450],
  },
  ecommerce: {
    id: "ecommerce",
    setup: [15_000, 55_000],
    monthly: [600, 2_200],
    setupUsd: [4_000, 14_000],
    monthlyUsd: [150, 550],
  },
  saas: {
    id: "saas",
    setup: [45_000, 150_000],
    monthly: [1_200, 5_000],
    setupUsd: [11_000, 38_000],
    monthlyUsd: [300, 1_250],
  },
  ai: {
    id: "ai",
    setup: [12_000, 48_000],
    monthly: [400, 1_500],
    setupUsd: [3_000, 12_000],
    monthlyUsd: [100, 375],
  },
  devsecops: {
    id: "devsecops",
    setup: [8_000, 35_000],
    monthly: [900, 3_000],
    setupUsd: [2_000, 9_000],
    monthlyUsd: [225, 750],
  },
};

export function formatPriceRange(
  tier: Pick<PricingTier, "setup" | "monthly" | "setupUsd" | "monthlyUsd">,
  kind: "setup" | "monthly",
  locale: Locale,
): string | null {
  const pln = kind === "setup" ? tier.setup : tier.monthly;
  const usd = kind === "setup" ? tier.setupUsd : tier.monthlyUsd;
  if (!pln || !usd) return null;

  if (locale === "en") {
    const fmt = (n: number) => n.toLocaleString("en-US");
    const suffix = kind === "monthly" ? "/mo" : "";
    return `$${fmt(usd[0])} – $${fmt(usd[1])}${suffix}`;
  }

  const fmt = (n: number) =>
    n.toLocaleString("pl-PL").replace(/\u00a0/g, " ");
  const suffix = kind === "monthly" ? " zł/mies." : " zł";
  return `${fmt(pln[0])} – ${fmt(pln[1])}${suffix}`;
}
