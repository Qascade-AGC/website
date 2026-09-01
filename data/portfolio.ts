import type { Locale } from "../lib/i18n/ui";
import { CASE_STUDIES as CASE_STUDIES_EN } from "./portfolio.en";
import { CASE_STUDIES as CASE_STUDIES_PL } from "./portfolio.pl";

export type {
  CaseScreenshot,
  CaseStudy,
} from "./portfolio.pl";

export function getCaseStudies(locale: Locale) {
  return locale === "en" ? CASE_STUDIES_EN : CASE_STUDIES_PL;
}

/** Domyślnie polski — preferuj getCaseStudies(locale) w komponentach. */
export { CASE_STUDIES_PL as CASE_STUDIES };
