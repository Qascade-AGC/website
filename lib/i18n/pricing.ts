import type { Locale } from "./ui";

export type PricingPackageCopy = {
  name: string;
  subtitle: string;
  monthlyNote?: string;
  setupNote?: string;
  audience: string;
};

export type PricingMessages = {
  title: string;
  subtitle: string;
  nettoNote: string;
  principleTitle: string;
  principleBody: string;
  modelTitle: string;
  modelIntro: string;
  modelItems: string[];
  modelOutro: string;
  packagesHeading: string;
  servicesHeading: string;
  servicesSubtitle: string;
  columns: {
    product: string;
    setup: string;
    subscription: string;
    audience: string;
  };
  packages: Record<string, PricingPackageCopy>;
  setupLabel: string;
  monthlyLabel: string;
  cta: string;
};

const pl: PricingMessages = {
  title: "Cennik (netto)",
  subtitle:
    "Przejrzyste widełki — bez ukrytych godzin. Płacisz za wdrożenie i opcjonalny abonament utrzymaniowy.",
  nettoNote: "Wszystkie kwoty netto. VAT 23% doliczany osobno.",
  principleTitle: "Główna zasada",
  principleBody:
    "Nie sprzedajemy godzin pracy — sprzedajemy oszczędność na pensji pracownika. Minimalne wynagrodzenie pracodawcy w Polsce z podatkami i ZUS przekracza 4 500 – 5 000 zł miesięcznie. Gdy na rozmowie widać, że system zastępuje połowę rutyny administratora i kosztuje wielokrotnie mniej niż jeden miesiąc pracy człowieka — cena przestaje być przeszkodą.",
  modelTitle: "Model dwupoziomowy",
  modelIntro: "Żeby uniknąć „amerykańskich gór” w przychodach, pracujemy według schematu:",
  modelItems: [
    "Jednorazowa opłata za uruchomienie (Wdrożenie / Setup Fee)",
    "Miesięczna subskrypcja (Abonament / Retainer)",
  ],
  modelOutro:
    "Comiesięczne płatności tworzą betonowy fundament, który utrzymuje firmę nawet w miesiącach ze słabszą sprzedażą.",
  packagesHeading: "Pakiety startowe",
  servicesHeading: "Usługi agencyjne",
  servicesSubtitle:
    "Większe projekty — aplikacje, SaaS, e-commerce — wyceniamy indywidualnie w tych widełkach.",
  columns: {
    product: "Produkt / pakiet",
    setup: "Jednorazowe wdrożenie",
    subscription: "Abonament",
    audience: "Dla kogo",
  },
  packages: {
    "lead-machine": {
      name: "„Maszyna leadów”",
      subtitle: "Konwersyjny szablon strony",
      monthlyNote: "hosting, domena, drobne poprawki",
      audience:
        "Dla firm ze starą stroną bez zapytań albo bez strony w ogóle",
    },
    "ai-admin": {
      name: "„AI-Administrator”",
      subtitle: "Chatbot 24/7 w messengery i na stronę",
      monthlyNote: "tokeny API, serwer, doszkalanie",
      audience: "Warsztaty, kliniki, salony, wynajem, dostawa",
    },
    "routine-killer": {
      name: "„Zabójca rutyny”",
      subtitle: "Automatyzacja back-office / CRM",
      monthlyNote: "monitoring scenariuszy Make / n8n",
      audience:
        "Dla firm z chaosem w zamówieniach, fakturach i ręcznych tabelach",
    },
    "all-inclusive": {
      name: "PAKIET „Wszystko w cenie”",
      subtitle: "Strona + bot + integracja z CRM",
      setupNote: "rabat za combo",
      audience:
        "Firmy gotowe od razu zamknąć cyfryzację pod klucz",
    },
  },
  setupLabel: "Wdrożenie",
  monthlyLabel: "Abonament",
  cta: "Umów wycenę →",
};

const en: PricingMessages = {
  title: "Pricing (USD, net)",
  subtitle:
    "Clear ranges in US dollars — no hidden hours. You pay for setup and an optional maintenance retainer.",
  nettoNote: "All amounts in USD, net. Local taxes may apply.",
  principleTitle: "Core principle",
  principleBody:
    "We don't sell hours — we sell savings on employee payroll. Minimum employer cost in Poland with taxes and ZUS exceeds $1,100–$1,250 per month. When a call shows the system replaces half an admin's routine and costs a fraction of one human month — price stops being the blocker.",
  modelTitle: "Two-tier model",
  modelIntro: "To avoid revenue roller coasters, we work on:",
  modelItems: [
    "One-time launch fee (Wdrożenie / Setup Fee)",
    "Monthly subscription (Abonament / Retainer)",
  ],
  modelOutro:
    "Monthly payments build a concrete foundation that sustains you even in slower sales months.",
  packagesHeading: "Starter packages",
  servicesHeading: "Agency services",
  servicesSubtitle:
    "Larger projects — apps, SaaS, e-commerce — quoted individually within these ranges.",
  columns: {
    product: "Product / package",
    setup: "One-time setup",
    subscription: "Retainer",
    audience: "For whom",
  },
  packages: {
    "lead-machine": {
      name: "“Lead Machine”",
      subtitle: "Conversion-focused site template",
      monthlyNote: "hosting, domain, minor edits",
      audience: "Businesses with an old site that doesn't convert — or no site at all",
    },
    "ai-admin": {
      name: "“AI Administrator”",
      subtitle: "24/7 chatbot for messengers and your site",
      monthlyNote: "API tokens, server, fine-tuning",
      audience: "Garages, clinics, salons, rentals, delivery",
    },
    "routine-killer": {
      name: "“Routine Killer”",
      subtitle: "Back-office / CRM automation",
      monthlyNote: "Make / n8n scenario monitoring",
      audience: "Teams drowning in orders, invoices, and manual spreadsheets",
    },
    "all-inclusive": {
      name: "ALL-INCLUSIVE PACKAGE",
      subtitle: "Site + bot + CRM integration",
      setupNote: "combo discount",
      audience: "Businesses ready to digitize end-to-end in one go",
    },
  },
  setupLabel: "Setup",
  monthlyLabel: "Retainer",
  cta: "Get a quote →",
};

export function getPricingMessages(locale: Locale): PricingMessages {
  return locale === "en" ? en : pl;
}
