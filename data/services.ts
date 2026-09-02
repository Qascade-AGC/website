import type { Locale } from "../lib/i18n/ui";
import { SERVICES as SERVICES_EN } from "./services.en";
import { SERVICES as SERVICES_PL } from "./services.pl";

export type { Service, ServiceTier } from "./services.pl";

export function getServices(locale: Locale) {
  return locale === "en" ? SERVICES_EN : SERVICES_PL;
}

/** Domyślnie polski — preferuj getServices(locale) w komponentach. */
export { SERVICES_PL as SERVICES };
