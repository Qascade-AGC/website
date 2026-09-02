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
  /** Etykieta przy projekcie koncepcyjnym — np. bez realnej realizacji dla marki. */
  conceptNote?: string;
  quote?: { text: string; author: string };
  screenshots?: CaseScreenshot[];
  /** Только карусель на главной: видео вместо превью-картинки. Не использuется в модalce и na /portfolio. */
  carouselPreviewVideo?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: 1,
    client: "Bilimshop",
    industry: "E-commerce · Wydawnictwo",
    service: "Sklep D2C · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo: "/portfolio/bilimshop-carousel-preview.mov?v=2",
    challenge:
      "Dwujęzyczny sklep PL / RU sprzedający plakaty POD i książki w języku rosyjskim potrzebował jednego ciemnego, redakcyjnego świata marki — katalog, bundlery, hub redakcyjny, galeria społeczności i konfigurator print-on-demand — bez wrażenia pięciu osobnych stron.",
    solution:
      "Ujednoliciliśmy nawigację, typografię i różowy akcent w hero, siatkach bestsellerów, listach książek z wyborem edycji, roadmapie Dark Gallery, redakcji Weekly Fantasms oraz krok po kroku kreatorze plakatów (upload, filtry, rozmiar, materiał).",
    features: [
      "Hero z CTA do katalogu i rzędem zaufania logistyka / płatności",
      "Siatka popularnych wzorów z badge'ami, wishlistą i dodaniem do koszyka",
      "Kategoria książek z wyborem edycji i cenami w zł",
      "Dark Gallery — funkcje społeczności i stan w rozwoju",
      "Weekly Fantasms — wyróżniona historia i siatka artykułów",
      "Flow własnego plakatu — upload, presety, A1 / materiały",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS · Stripe / Przelewy24 · POD (Prodigi)",
    results: [
      "Jeden system wizualny od landingu do checkoutu",
      "Przełącznik języków RU · PL · EN w shellu",
      "Trasy redakcyjne i commerce gotowe na CMS i dane katalogowe",
      "Prototyp konfiguratora zgodny z pipeline'em druku",
    ],
    screenshots: [
      {
        alt: "Hero — pozycjonowanie Bilimshop, CTA, POD i płatności",
        src: "/portfolio/case-2/01-hero.png",
      },
      {
        alt: "Popularne wzory — siatka bestsellerów, koszyk i wishlist",
        src: "/portfolio/case-2/02-popular-designs.png",
      },
      {
        alt: "Książki — karty katalogu w języku rosyjskim, edycje, ceny w zł",
        src: "/portfolio/case-2/03-books.png",
      },
      {
        alt: "Dark Gallery — funkcje społeczności i roadmapa",
        src: "/portfolio/case-2/04-dark-gallery.png",
      },
      {
        alt: "Weekly Fantasms — hub redakcyjny i karty artykułów",
        src: "/portfolio/case-2/05-weekly-fantasms.png",
      },
      {
        alt: "Własny plakat — upload, filtry, rozmiar i materiał",
        src: "/portfolio/case-2/06-custom-poster.png",
      },
    ],
  },
  {
    n: 2,
    client: "White Feather Coffee Co.",
    industry: "HoReCa / Retail",
    service: "Strona marki · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo:
      "/portfolio/white-feather-carousel-preview.mov?v=5",
    challenge:
      "Niezależna marka kawy potrzebowała premium strony w dark mode, która sprzedaje doświadczenie w filiżance, wyjaśnia wartości lokalnego sourcingu i kieruje ruch do lokalizacji — bez generycznego szablonu.",
    solution:
      "Zaprojektowaliśmy marketingową stronę o wysokim kontraście z redakcyjną typografią, split hero i layoutami wartości, kinowym hero lokalizacji oraz pomarańczowymi CTA pasującymi do ciepła marki. Kontakt i social media pozostają widoczne w headerze dla szybkiego zaufania.",
    features: [
      "Split hero — fotografia produktu i CTA „znajdź nas”",
      "Historia wartości — lokalny łańcuch dostaw i fotografia wnętrza",
      "Lokalizacje — full-bleed hero i funnel wizyty",
      "Karta produktu w stylu 3D i ścieżka „odkryj”",
      "Header z telefonem, e-mailem i linkami social",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Spójny system czarny / kremowy / pomarańczowy na wszystkich stronach",
      "Jasna ścieżka od historii → lokalizacje → wizyta",
      "Layouty gotowe na podmianę prawdziwych zdjęć",
      "Nawigacja i CTA przyjazne mobile",
    ],
    screenshots: [
      {
        alt: "Hero — feature kubka 3D i split brand story",
        src: "/portfolio/case-4/01-hero-mockup.png",
      },
      {
        alt: "Znajdź nas — latte art, nagłówek, pomarańczowe CTA",
        src: "/portfolio/case-4/02-find-us.png",
      },
      {
        alt: "Wartości — dlaczego trzymamy się lokalności, wnętrze kawiarni",
        src: "/portfolio/case-4/03-values-local.png",
      },
      {
        alt: "Lokalizacje — hero wnętrza i sekcja wizyty",
        src: "/portfolio/case-4/04-locations.png",
      },
    ],
  },
  {
    n: 3,
    client: "Never Tired Centre",
    industry: "Muzyka / Studio",
    service: "Strona studia · UX i web",
    timeline: "10 tygodni",
    carouselPreviewVideo:
      "/portfolio/never-tired-carousel-preview.mov?v=5",
    challenge:
      "Studio nagraniowe potrzebowało jednej ciemnej, wiarygodnej strony, która sprzedaje usługi (wynajem, produkcja, miks), przedstawia zespół, pokazuje sprzęt i zbiera leady — bez mozaiki PDF-ów i DM-ów.",
    solution:
      "Zbudowaliśmy modułowy shell marketingowy i rezerwacyjny: bento grid usług, kredyty i linki streamingowe, bio zespołu, inwentarz sprzętu oraz modały krok po kroku dla zakresu produkcji, wynajmu studia i rezerwacji daty/godziny.",
    features: [
      "Hero NEVERTIRED i narracja scrollowa",
      "Siatka usług z deep linkami i affordance „więcej”",
      "Kredyty miksowania i postprodukcji + karty wydań",
      "Strona zespołu z długimi bio inżynierów",
      "Inwentarz studia wg kategorii (mikrofony, interfejsy, racki)",
      "Modały leadów: checklista pełnej produkcji, formularz wynajmu, slot rezerwacji",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Jeden system wizualny w marketingu i ścieżkach konwersji",
      "Jasny funnel usługa → modal → kontakt dla wynajmu studia",
      "Strony sprzętu i zespołu gotowe na treści CMS",
      "Bloki wydań streamingowych podlinkowane na zewnątrz",
    ],
    screenshots: [
      {
        alt: "Hero — znak NEVERTIRED i wizual nieskończoności",
        src: "/portfolio/case-3/01-hero.png",
      },
      {
        alt: "Usługi — siatka wynajmu, produkcji, dystrybucji, miksu",
        src: "/portfolio/case-3/02-services.png",
      },
      {
        alt: "Wydania — kredyty Spotify i Deezer z okładkami",
        src: "/portfolio/case-3/03-releases.png",
      },
      {
        alt: "Modal — zakres pełnej produkcji (beat, tekst, wideo)",
        src: "/portfolio/case-3/04-full-production.png",
      },
      {
        alt: "Modal — formularz kontaktowy wynajmu studia",
        src: "/portfolio/case-3/05-studio-rental.png",
      },
      {
        alt: "Modal — rezerwacja daty i godziny",
        src: "/portfolio/case-3/06-booking.png",
      },
      {
        alt: "Zespół — inżynierowie i producenci",
        src: "/portfolio/case-3/07-team.png",
      },
      {
        alt: "Sprzęt — inwentarz mikrofonów i interfejsów",
        src: "/portfolio/case-3/08-equipment.png",
      },
    ],
  },
  {
    n: 4,
    client: "PeopleOrbit",
    industry: "HR / Rekrutacja",
    service: "Platforma SaaS",
    timeline: "16 tygodni",
    challenge:
      "Zespół HR tech potrzebował wielodostępnych procesów rekrutacyjnych z granularnymi uprawnieniami i rozliczeniem usage-based — bez przebudowy architektury w trakcie projektu.",
    solution:
      "Wdrożyliśmy izolację tenantów na warstwie danych, poziomy subskrypcji ze Stripe oraz self-serve onboarding, który automatycznie provisionował sandboxy.",
    features: [
      "Wielodostępne pipeline'y rekrutacyjne",
      "Rozliczenia Stripe i entitlements",
      "Self-serve onboarding",
      "Analityka administracyjna",
      "Integracje webhook",
    ],
    tech: "React · Node.js · PostgreSQL · Stripe · AWS",
    results: [
      "Platforma multi-tenant gotowa do wielu klientów jednocześnie",
      "Self-serve onboarding skrócił start bez pomocy supportu",
      "Jasne rozliczenia subskrypcyjne w panelu administracyjnym",
    ],
    screenshots: [
      { alt: "Pipeline'y rekrutacyjne — multi-tenant" },
      { alt: "Rozliczenia i entitlements" },
    ],
  },
];
