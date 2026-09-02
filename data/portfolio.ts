import type { Locale } from "../lib/i18n/ui";
import { CASE_STUDIES as CASE_STUDIES_EN } from "./portfolio.en";
import { CASE_STUDIES as CASE_STUDIES_PL } from "./portfolio.pl";

export type {
  CaseScreenshot,
  CaseStudy,
} from "./portfolio.pl";

/** Realizacje bliższe polskiemu SMB — pierwsze w karuzeli EN. */
const EN_CASE_PRIORITY = [
  "Bilimshop",
  "White Feather Coffee Co.",
  "Never Tired Centre",
  "PeopleOrbit",
] as const;

function orderCases<T extends { client: string; n: number }>(
  cases: readonly T[],
  priority: readonly string[],
): T[] {
  const picked: T[] = [];
  const used = new Set<T>();

  for (const name of priority) {
    const match = cases.find((c) => c.client === name);
    if (match) {
      picked.push(match);
      used.add(match);
    }
  }

  for (const c of cases) {
    if (!used.has(c)) picked.push(c);
  }

  return picked.map((c, i) => ({ ...c, n: i + 1 }));
}

export function getCaseStudies(locale: Locale) {
  if (locale === "pl") return CASE_STUDIES_PL;
  return orderCases(CASE_STUDIES_EN, EN_CASE_PRIORITY);
}

/** Domyślnie polski — preferuj getCaseStudies(locale) w komponentach. */
export { CASE_STUDIES_PL as CASE_STUDIES };
