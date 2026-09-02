export type ServiceTier = "entry" | "product";

export type Service = {
  slug: string;
  tier: ServiceTier;
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

/** Wejście — strony i proste systemy dla lokalnych firm. */
const ENTRY_SERVICES: Service[] = [
  {
    slug: "business-site",
    tier: "entry",
    headline: "Strona firmowa",
    title: "Strona, która zbiera zapytania",
    body: "Dla salonu, kliniki, warsztatu, biura usługowego. **Jasna oferta**, telefon i formularz na wierzchu — nie szablon z 2019 roku, który nic nie sprzedaje.",
    deliverables: [
      "Strona główna z ofertą i dowodami zaufania",
      "Formularz kontaktowy i integracja z messengermi",
      "Wersja mobile — większość klientów wchodzi z telefonu",
      "Podstawowe SEO i szybkie ładowanie",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    cta: "Porozmawiajmy o stronie →",
  },
  {
    slug: "booking",
    tier: "entry",
    headline: "Rezerwacje online",
    title: "Zapisy bez chaosu w telefonie",
    body: "Kalendarz, wolne terminy, przypomnienia. Dla gabinetów, studiów, salonów i usług, gdzie **każdy nieodebrany telefon to strata**.",
    deliverables: [
      "Widok terminów dla klienta i panel dla firmy",
      "Formularz zapisu i potwierdzenia",
      "Integracja z kalendarzem (Google / iCal)",
      "Powiadomienia e-mail lub SMS (wg potrzeb)",
    ],
    cta: "Uporządkujmy zapisy →",
  },
  {
    slug: "simple-shop",
    tier: "entry",
    headline: "Prosty sklep",
    title: "Sklep internetowy bez przerostu",
    body: "Katalog, koszyk, płatność online. Dla firm, które **już sprzedają**, ale mają chaos w zamówieniach albo brak sensownej witryny.",
    deliverables: [
      "Katalog produktów i kategorie",
      "Koszyk i checkout (Przelewy24 / Stripe)",
      "Panel zamówień dla właściciela",
      "Podstawowa analityka sprzedaży",
    ],
    tech: "Next.js · Stripe / Przelewy24",
    cta: "Zacznij sprzedawać online →",
  },
];

/** Produkt — większe systemy, wyższy budżet. */
const PRODUCT_SERVICES: Service[] = [
  {
    slug: "web-apps",
    tier: "product",
    headline: "Panel i aplikacja",
    title: "System dopasowany do firmy",
    body: "Wewnętrzny panel, CRM, katalog B2B, platforma dla klientów — gdy **Excel i pięć narzędzi** już nie wystarczają. Tu zaczyna się widełka 18–85 tys. zł.",
    deliverables: [
      "Logika biznesowa i role użytkowników",
      "Integracje z zewnętrznymi systemami",
      "Raporty i dane w czasie rzeczywistym",
      "Architektura gotowa na rozwój",
    ],
    tech: "React, Next.js, Node.js, PostgreSQL",
    cta: "Porozmawiajmy o systemie →",
  },
  {
    slug: "mvp",
    tier: "product",
    headline: "MVP produktu",
    title: "Od pomysłu do działającego produktu",
    body: "Masz pomysł na usługę cyfrową i chcesz **sprawdzić rynek**, zanim zatrudnisz cały zespół. Budujemy rdzeń produktu w ustalonym czasie — z planem, nie na ślepo.",
    deliverables: [
      "Zakres i priorytety na starcie",
      "Klikalny prototyp przed kodem",
      "Kluczowe funkcje w czystej architekturze",
      "Wdrożenie i pierwsze pomiary",
    ],
    footnote: "Typowy czas: 6–10 tygodni od rozpoznania do wdrożenia.",
    cta: "Omówmy MVP →",
  },
  {
    slug: "ecommerce",
    tier: "product",
    headline: "E-commerce",
    title: "Sklep, który rośnie z firmą",
    body: "Większy katalog, integracje magazynowe, wielojęzyczność, niestandardowy checkout. Dla firm, które **już mają obrót** i potrzebują narzędzia, nie wizytówki.",
    deliverables: [
      "Architektura sklepu pod skalę",
      "Płatności, dostawy, stany magazynowe",
      "Panel administracyjny zamówień",
      "Optymalizacja konwersji",
    ],
    cta: "Porozmawiajmy o sklepie →",
  },
  {
    slug: "saas",
    tier: "product",
    headline: "Platforma SaaS",
    title: "System z abonamentem dla wielu klientów",
    body: "Konto użytkownika, subskrypcja, panel admina — gdy **sprzedajesz dostęp do oprogramowania**, nie jednorazową usługę.",
    deliverables: [
      "Architektura multi-tenant",
      "Rozliczenia subskrypcyjne",
      "Onboarding i panel klienta",
      "Analityka użycia",
    ],
    cta: "Zbudujmy platformę →",
  },
  {
    slug: "ai",
    tier: "product",
    headline: "Automatyzacja i AI",
    title: "AI w codziennym procesie firmy",
    body: "Bot na stronie, automatyczne odpowiedzi, przetwarzanie dokumentów, asystent w CRM — **konkretne oszczędności czasu**, nie slajd „wdrożymy sztuczną inteligencję”.",
    deliverables: [
      "Integracja z istniejącymi narzędziami",
      "Chatbot lub asystent w workflow",
      "Bezpieczne przetwarzanie danych firmy",
      "Monitoring i poprawki po wdrożeniu",
    ],
    cta: "Dodajmy automatyzację →",
  },
];

export const SERVICES: Service[] = [...ENTRY_SERVICES, ...PRODUCT_SERVICES];

export function getServicesByTier(tier: ServiceTier) {
  return SERVICES.filter((s) => s.tier === tier);
}
