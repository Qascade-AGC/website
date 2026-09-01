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
    industry: "Nauki przyrodnicze",
    service: "Katalog B2B · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo: "/portfolio/illumina-carousel-preview.mov?v=1",
    challenge:
      "Dostawca odczynników badawczych potrzebował spokojnego, wiarygodnego sklepu dla złożonych SKU — zestawów, paneli i instrumentów — bez przytłaczania kupujących z laboratoriów, którzy w jednej sesji porównują specyfikacje, tagi compliance i ścieżki wyceny.",
    solution:
      "Zaprojektowaliśmy modułowy katalog z zakładkami kategorii, gęstymi, ale czytelnymi kartami produktów, PDP z metadanymi w stylu RUO oraz koszykiem dostosowanym do wieloliniowych ilości i przekazania do wyceny/checkoutu. Flow narzędzi selekcji stoją obok standardowego merchandisingu, żeby specjaliści mogli samodzielnie działać.",
    features: [
      "Strony hero i storytelling z powściągliwą typografią",
      "Katalog z zakładkami i grupowaniem zestawów/odczynników",
      "Layout PDP: badge, cena, opis, stepper ilości",
      "Punkty wejścia do narzędzi selekcji i planowania",
      "Koszyk z sumami pozycji i CTA wyceny / checkoutu",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS · design system",
    results: [
      "Jeden język wizualny w marketingu i katalogu",
      "Krótszy czas skanowania siatek 3-up w testach użytkowników",
      "Prototyp koszyka gotowego do wyceny zwalidowany z procurement",
      "Kontrast i odstępy dostępne na długie sesje badawcze",
    ],
    screenshots: [
      {
        alt: "Hero — narracja misji i storytelling w tle",
        src: "/portfolio/case-1/01-hero-mission.png",
      },
      {
        alt: "Hero — precyzyjna fotografia laboratoryjna i wspierający nagłówek",
        src: "/portfolio/case-1/02-hero-precision.png",
      },
      {
        alt: "Produkty — katalog z zakładkami, karty zestawów i steppery ilości",
        src: "/portfolio/case-1/03-products.png",
      },
      {
        alt: "Szczegóły produktu — zestaw do prep. DNA, cena, opis, ilość",
        src: "/portfolio/case-1/04-product-detail.png",
      },
      {
        alt: "Narzędzia selekcji — karta wyboru zestawów library prep i array",
        src: "/portfolio/case-1/05-kit-selector.png",
      },
      {
        alt: "Koszyk — wieloliniowe SKU, suma częściowa, wycena i akcje czyszczenia",
        src: "/portfolio/case-1/06-cart.png",
      },
    ],
  },
  {
    n: 2,
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
    client: "White Feather Coffee Co.",
    industry: "HoReCa / Retail",
    service: "Strona marki · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo:
      "/portfolio/white-feather-carousel-preview.mov?v=5",
    challenge:
      "Niezależna brytyjska marka kawy potrzebowała premium strony w dark mode, która sprzedaje doświadczenie w filiżance, wyjaśnia wartości lokalnego sourcingu i kieruje ruch do lokalizacji przy stacjach i biurach — bez generycznego szablonu.",
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
    n: 5,
    client: "Axelyth",
    industry: "Infrastruktura AI · Web3",
    service: "Landing · UX produktu",
    timeline: "1 tydzień",
    carouselPreviewVideo: "/portfolio/axelyth-carousel-preview.mov?v=1",
    challenge:
      "Zespół deep-tech potrzebował wiarygodnej narracji enterprise dla provenance AI — wyjaśnienia hybrydowego kotwiczenia Polygon + Ethereum, postur compliance i ROI — bez zalewania kupujących gęstością whitepaperów.",
    solution:
      "Zbudowaliśmy ciemną, neonową stronę marketingową: hero z kalkulatorem ROI, filarami rozwiązania, trzystopniowym flow „od modelu do dowodu”, siatką integracji, use case'ami branżowymi, claimami wydajności i publiczną roadmapą z wyróżnionymi kamieniami milowymi.",
    features: [
      "Hero + widget kalkulatora ROI enterprise",
      "Rozwiązanie — schema, hybrydowa architektura chain, compliance",
      "Jak to działa — IPFS, PostgreSQL/Redis, batch anchoring",
      "Zbudowane dla ekosystemów enterprise — siatka partnerów tech",
      "Krytyczne branże — forensics, healthcare, enterprise, research",
      "Historia wydajności — koszt, throughput, framing TCO",
      "Roadmapa — kamienie milowe kwartalne i CTA",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Jeden język wizualny od hero do roadmapy",
      "Bloki kalkulatora i metryk gotowe na podpięcie live data",
      "Messaging compliance i chain zgodny dla recenzentów enterprise",
      "Modułowe sekcje mapują 1:1 na historię produktu",
    ],
    screenshots: [
      {
        alt: "Hero — nagłówek AI provenance i kalkulator ROI",
        src: "/portfolio/case-5/01-hero-roi.png",
      },
      {
        alt: "Rozwiązanie — schema, hybrydowy blockchain, karty compliance",
        src: "/portfolio/case-5/02-solution.png",
      },
      {
        alt: "Jak to działa — trzy kroki od modelu do dowodu on-chain",
        src: "/portfolio/case-5/03-how-it-works.png",
      },
      {
        alt: "Ekosystemy enterprise — siatka integracji i contact sales",
        src: "/portfolio/case-5/04-enterprise-ecosystems.png",
      },
      {
        alt: "Use case'y — krytyczne branże (forensics, healthcare, …)",
        src: "/portfolio/case-5/05-use-cases.png",
      },
      {
        alt: "Wydajność — metryki kosztu, szybkości i gotowości enterprise",
        src: "/portfolio/case-5/06-performance.png",
      },
      {
        alt: "Roadmapa — co dalej do 2026",
        src: "/portfolio/case-5/07-roadmap.png",
      },
    ],
  },
  {
    n: 6,
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
      "Czas do pierwszej wartości poniżej 20 minut",
      "Churn spadł o 18% po wyjaśnieniu rozliczeń",
      "ARR przekroczył $1M w ciągu 10 miesięcy od launchu",
    ],
    screenshots: [
      { alt: "Pipeline'y rekrutacyjne — multi-tenant" },
      { alt: "Rozliczenia i entitlements" },
    ],
  },
  {
    n: 7,
    client: "Scaleframe",
    industry: "Infrastruktura",
    service: "DevSecOps",
    timeline: "6 tygodni",
    challenge:
      "Skalujący się startup przetwarzał wrażliwe dane, ale brakowało mu utwardzonego CI/CD, higieny sekretów i observability produkcyjnej — release'y były ryzykowne i wolne.",
    solution:
      "Skodyfikowaliśmy infrastrukturę w Terraform, dodaliśmy pipeline'y GitHub Actions z bramkami SAST/SCA, scentralizowaliśmy sekrety i uruchomiliśmy monitoring z actionable SLO.",
    features: [
      "IaC dla staging i prod",
      "Bramki bezpieczeństwa w CI",
      "Checklista hardeningu K8s",
      "Rotacja sekretów",
      "Dashboardy i alerty Datadog",
    ],
    tech: "AWS · Terraform · Kubernetes · GitHub Actions · Vault · Datadog",
    results: [
      "Częstotliwość deployów +3x przy mniejszej liczbie incydentów",
      "Krytyczne podatności wychwycone przed merge",
      "MTTR spadł o 45%",
    ],
    screenshots: [
      { alt: "Bramki bezpieczeństwa CI/CD" },
      { alt: "Dashboardy infrastruktury i observability" },
    ],
  },
  {
    n: 8,
    client: "x3vault",
    industry: "Crypto · Fintech",
    service: "Strona marketingowa · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo: "/portfolio/x3vault-carousel-preview.mov?v=1",
    challenge:
      "Zespół produktu z obszaru custody potrzebował premium ciemnego landingu, który komunikuje „instytucjonalne zaufanie”, a jednocześnie jest szybki i nowoczesny — metryki w hero, historia bezpieczeństwa, wiarygodność multi-chain i jasna ścieżka get-started bez gęstego copy whitepaperowego.",
    solution:
      "Zbudowaliśmy warstwową narrację marketingową: pill AI-context i typograficzne hero, metryki dowodowe po bokach, karty funkcji z historią scam detection i triage, poziomy marquee sieci z rozpoznawalnymi znakami chainów oraz blok konwersji z chipami zaufania (szyfrowanie, latency, liczba sieci).",
    features: [
      "Hero — mixed display type, akcenty emoji, statystyki boczne (TVL, rynek, nagrody, txs)",
      "Środek strony — linia wiarygodności zespołu i trzy moduły funkcji (monitoring, AI detection, triage)",
      "Rail sieci — przewijane loga chainów z affordance karuzeli",
      "Get started — kursywny akcent, główne CTA, rząd „bez seed phrase”",
      "Header — pill nav, data, login; spójny pomarańczowy glow na ciemnym tle",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Jeden system wizualny od hero do konwersji",
      "Modułowe sekcje mapują na punkty dowodowe produktu",
      "Layouty gotowe na podpięcie live listy chainów i metryk",
      "Silna hierarchia do szybkiego skanowania przez kupujących instytucjonalnych",
    ],
    screenshots: [
      {
        alt: "Hero — nagłówek crypto i fintech, metryki, wskazówki karuzeli",
        src: "/portfolio/case-8/01-hero.png",
      },
      {
        alt: "Historia + karty funkcji — monitoring, AI detection, triage",
        src: "/portfolio/case-8/02-features.png",
      },
      {
        alt: "Rail sieci i get started — chainy, CTA, chipy zaufania",
        src: "/portfolio/case-8/03-networks-cta.png",
      },
    ],
  },
  {
    n: 9,
    client: "The Guardian",
    industry: "Wydawnictwo · Media informacyjne",
    service: "Platforma redakcyjna · UX i web",
    timeline: "1 tydzień",
    carouselPreviewVideo: "/portfolio/the-guardian-carousel-preview.mov?v=1",
    challenge:
      "Zespół wydawniczy potrzebował premium strony głównej newsowej, która równoważy szybkie skanowanie artykułów, hierarchię wizualną między sekcjami i silną tożsamość redakcyjną na ciemnych i jasnych powierzchniach.",
    solution:
      "Zaprojektowaliśmy layout w stylu newsroomu z kinowym traktowaniem top story, powiększoną typografią sekcji, modułowymi kartami feedu i panelem opinion zoptymalizowanym pod szybkie czytanie i punkty konwersji subskrypcji.",
    features: [
      "Hero z breaking headline i top story na wideo",
      "Duże kotwice sekcji Politics i Culture",
      "Feed artykułów w stylu szachownicy do szybkiego skanowania",
      "Panel opinion z awatarami autorów i metadanymi",
      "Powierzchnie CTA subskrypcji zintegrowane w blokach feedu",
    ],
    tech: "Next.js · TypeScript · Tailwind CSS",
    results: [
      "Jasna hierarchia redakcyjna od hero do feedów sekcji",
      "Wielokrotnego użytku system kart pod codzienne aktualizacje newsroomu",
      "Lepsza czytelność przy sesjach z dużą liczbą nagłówków",
      "Prompty subskrypcji osadzone bez bałaganu",
    ],
    screenshots: [
      {
        alt: "Hero — wizual globalnego newsroomu z wyróżnionymi regionami",
        src: "/portfolio/case-9/01-hero.png",
      },
      {
        alt: "Sekcja Politics — breaking headline i modułowe karty feedu",
        src: "/portfolio/case-9/02-politics-feed.png",
      },
      {
        alt: "Opinion i Culture — panel komentarzy z przejściem między sekcjami",
        src: "/portfolio/case-9/03-opinion-culture.png",
      },
    ],
  },
];
