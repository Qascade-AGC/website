export type Locale = "pl" | "en";

export const defaultLocale: Locale = "pl";

export const LOCALE_STORAGE_KEY = "qascade-locale";

export interface ProcessPhase {
  num: string;
  title: string;
  duration: string;
  body: string;
  happens: string[];
  deliverable: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface HeroCornerPanel {
  title: string;
  body: string;
}

export interface ContactFormMessages {
  labels: {
    fullName: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
    referral: string;
  };
  placeholders: {
    fullName: string;
    email: string;
    company: string;
    message: string;
  };
  errors: {
    fullNameRequired: string;
    fullNameMin: string;
    fullNameMax: string;
    emailRequired: string;
    emailInvalid: string;
    companyMax: string;
    companyRequired?: string;
    projectTypeRequired: string;
    messageRequired: string;
    messageMin: string;
    messageMax: string;
  };
  selectPlaceholder: string;
  projectTypeOptions: string[];
  budgetOptions: string[];
  timelineOptions: string[];
  referralOptions: string[];
  success: string;
  submitError: string;
  submitting: string;
  submit: string;
  disclaimer: string;
}

export interface Messages {
  metadata: {
    siteDescription: string;
    contactTitle: string;
    contactDescription: string;
    portfolioTitle: string;
    portfolioDescription: string;
  };
  nav: {
    work: string;
    services: string;
    pricing: string;
    process: string;
    about: string;
    contact: string;
    portfolio: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    siteNav: string;
  };
  hero: {
    splashTagline: string;
    scrollHint: string;
    loadingSection: string;
    statsLine1: string;
    statsLine2: string;
    cornerPanels: HeroCornerPanel[];
  };
  heroMain: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    trustLine: string;
  };
  services: {
    title: string;
    subtitle: string;
    tierEntryHeading: string;
    tierProductHeading: string;
    quoteOnRequest: string;
    service: string;
    whyMatters: string;
    deliverables: string;
    techStack: string;
    footerLine: string;
    mobileHint: string;
    windowChrome: string;
    tablistAria: string;
  };
  work: {
    title: string;
    subtitle: string;
    details: string;
    carouselAria: string;
    openCaseStudy: string;
  };
  process: {
    title: string;
    subtitle: string;
    windowChrome: string;
    phasesAria: string;
    phaseLabel: string;
    timelinePrefix: string;
    whatHappens: string;
    deliverablePrefix: string;
    cta: string;
    phases: ProcessPhase[];
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    team: TeamMember[];
    trustTitle: string;
    trustItems: string[];
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    serviceLinks: string[];
    companyHeading: string;
    about: string;
    portfolio: string;
    process: string;
    pricing: string;
    contact: string;
    contactHeading: string;
    location: string;
    social: string[];
    copyright: string;
    privacy: string;
    terms: string;
  };
  contact: {
    pageTitle: string;
    subtitle: string;
    asideTitle: string;
    asideEmail: string;
    asidePhone: string;
    asideBookCall: string;
    asideBookCallLink: string;
    asideTelegram: string;
    asideLocation: string;
    asideHours: string;
    form: ContactFormMessages;
  };
  portfolio: {
    pageTitle: string;
    subtitle: string;
    caseStudyLabel: string;
    previewSuffix: string;
    client: string;
    industry: string;
    service: string;
    timeline: string;
    challenge: string;
    solution: string;
    keyFeatures: string;
    techStack: string;
    results: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    conceptNoteLabel: string;
  };
  modal: {
    preview: string;
    close: string;
    closeAria: string;
    screenshots: string;
    challenge: string;
    solution: string;
    keyFeatures: string;
    techStack: string;
    results: string;
    openFullPage: string;
    defaultProductPreview: string;
    defaultInterfaceOverview: string;
  };
  common: {
    loading: string;
    preview: string;
    caseStudy: string;
    phase: string;
    timeline: string;
    client: string;
    industry: string;
    service: string;
    details: string;
    techStack: string;
  };
}

const plMessages: Messages = {
  metadata: {
    siteDescription:
      "Qascade — strony i systemy dla polskich firm. Więcej zgłoszeń, mniej chaosu. Poznań.",
    contactTitle: "Kontakt",
    contactDescription: "Porozmawiajmy o Twoim projekcie.",
    portfolioTitle: "Nasze realizacje",
    portfolioDescription: "Prawdziwe produkty. Prawdziwe wyniki.",
  },
  nav: {
    work: "Realizacje",
    services: "Usługi",
    pricing: "Cennik",
    process: "Proces",
    about: "O nas",
    contact: "Napisz / Zadzwoń",
    portfolio: "Portfolio",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    mainNav: "Główna nawigacja",
    mobileNav: "Nawigacja mobilna",
    siteNav: "Nawigacja strony",
  },
  hero: {
    splashTagline: "Więcej klientów. Mniej chaosu. System, który działa.",
    scrollHint: "Przewiń, aby zobaczyć realizacje",
    loadingSection: "Ładowanie sekcji",
    statsLine1: "Poznań · Polska",
    statsLine2: "Dwie osoby · Bezpośredni kontakt",
    cornerPanels: [
      {
        title: "Strona i zapytania",
        body: "Witryna, która tłumaczy ofertę i zbiera kontakt — nie kolejny szablon.",
      },
      {
        title: "Rezerwacje i sklep",
        body: "Zapisy, prosty e-commerce, mniej telefonów i ręcznej pracy.",
      },
      {
        title: "Panel i automatyzacja",
        body: "CRM, katalog, bot na stronie — gdy firma rośnie poza Excel.",
      },
      {
        title: "Produkt cyfrowy",
        body: "MVP, SaaS, większe systemy — plan, harmonogram, wdrożenie.",
      },
    ],
  },
  heroMain: {
    title: "Budujemy strony i systemy, które przynoszą zgłoszenia i porządkują firmę",
    subtitle:
      "Dla działających firm w Polsce — salonów, klinik, sklepów, usług i produkcji. Nie dla „startupów z Doliny”. Projekt, wdrożenie, wsparcie po starcie.",
    cta1: "Napisz lub zadzwoń",
    cta2: "Zobacz realizacje",
    trustLine: "Poznań · Azazel odbiera telefon · Wycena po rozmowie, bez zobowiązań",
  },
  services: {
    title: "Co robimy",
    subtitle:
      "Dwa poziomy: szybkie wejście (strona, zapisy, prosty sklep) i większe systemy (panel, MVP, SaaS). Bez mieszania „strony dla firmy” z infrastrukturą dla programistów.",
    tierEntryHeading: "Wejście — szybki start",
    tierProductHeading: "Produkt — większe systemy",
    quoteOnRequest: "Wycena po rozmowie",
    service: "Usługa",
    whyMatters: "Dlaczego to ważne",
    deliverables: "Co dostajesz",
    techStack: "Stack technologiczny",
    footerLine:
      "Bezpośredni kontakt z seniorem · Cotygodniowe demo · Bez pustych słów",
    mobileHint:
      "Przewiń listę lub dotknij usługi, aby przeczytać szczegóły.",
    windowChrome: "what-we-build",
    tablistAria: "Usługi",
  },
  work: {
    title: "Realizacje",
    subtitle:
      "Projekty w skali polskiej firmy — sklep, studio, kawiarnia, platforma SaaS. Najedź na pasek i kliknij case.",
    details: "Szczegóły →",
    carouselAria: "Karuzela case studies portfolio",
    openCaseStudy: "Otwórz case study: {client}",
  },
  process: {
    title: "Jak to wygląda",
    subtitle:
      "Trzy kroki w tygodniach. Po każdym wiesz, co masz i ile to kosztuje dalej.",
    windowChrome: "how-we-work",
    phasesAria: "Etapy współpracy",
    phaseLabel: "Krok",
    timelinePrefix: "Czas ·",
    whatHappens: "Co robimy",
    deliverablePrefix: "Po tym kroku ·",
    cta: "Umów rozmowę →",
    phases: [
      {
        num: "01",
        title: "Rozmowa",
        duration: "30–60 min · w ciągu tygodnia",
        body: "Krótka rozmowa telefonicna lub wideo. Chcemy zrozumieć, co boli: brak zapytań, chaos w zapisach, stary sklep, ręczna praca. Bez ankiety „digital transformation”.",
        happens: [
          "Twoja branża, obecna strona lub system",
          "Co ma się zmienić za 30 dni",
          "Orientacyjny budżet i termin",
          "Czy to wejście (strona) czy większy system",
        ],
        deliverable:
          "Ustalenie, czy w ogóle idziemy dalej — i w jakim kierunku. Bez faktury na start.",
      },
      {
        num: "02",
        title: "Plan i makieta",
        duration: "1–2 tygodnie",
        body: "Jeśli pasujemy — dostajesz plan: co budujemy, w jakiej kolejności, ile to trwa. Dla większych projektów: makieta kluczowych ekranów do akceptacji przed kodem.",
        happens: [
          "Zakres i lista funkcji (must / nice)",
          "Harmonogram po tygodniach",
          "Wycena wdrożenia i ewentualnego abonamentu",
          "Makieta lub szkic głównych ekranów",
        ],
        deliverable:
          "Plan projektu + wycena do akceptacji. Płatne rozpoznanie tylko jeśli wcześniej tak ustalimy.",
      },
      {
        num: "03",
        title: "Budowa i wdrożenie",
        duration: "2–8 tygodni (zależy od zakresu)",
        body: "Budujemy, pokazujemy postęp co tydzień, wdrażamy na Twoją domenę. Po starcie — krótkie wsparcie, żeby wyłapać pierwsze uwagi z realnego użycia.",
        happens: [
          "Development w tygodniowych iteracjach",
          "Demo działających fragmentów",
          "Testy przed publikacją",
          "Wdrożenie i krótkie szkolenie",
        ],
        deliverable:
          "Działająca strona lub system + instrukcja obsługi. Wiesz, co masz po 14 dniach od startu budowy.",
      },
    ],
  },
  about: {
    title: "Kto stoi za Qascade",
    subtitle:
      "Dwie osoby w Poznaniu. Jeden kontakt w Polsce, jeden produkt i kod. Bez account managerów i bez legendy o „czterech seniorach”.",
    paragraphs: [
      "Pracujemy z właścicielami firm, które już zarabiają — ale mają kiepską stronę, chaos w zapisach albo narzędzia, które nie nadążają za biznesem.",
      "Nie obiecujemy „skali startupowej” ani Fortune 500 w tydzień. Obiecujemy konkret: rozmowa, plan, budowa, termin.",
    ],
    team: [
      {
        name: "Azazel",
        role: "Strategia, sprzedaż i kontakt · Poznań",
        bio: "Pierwsza rozmowa, zrozumienie problemu firmy, wycena i umowa. Po polsku, na telefonie lub na miejscu w Wielkopolsce.",
      },
      {
        name: "Hermes",
        role: "Produkt, architektura i development",
        bio: "Zakres techniczny, harmonogram, budowa i wdrożenie. Bezpośredni kontakt po starcie projektu — bez pośredników.",
      },
    ],
    trustTitle: "Firmy z portfolio",
    trustItems: [
      "Bilimshop — sklep e-commerce (PL / RU)",
      "Never Tired Centre — studio nagrań i rezerwacje",
      "White Feather Coffee — marka HoReCa",
      "PeopleOrbit — platforma SaaS dla HR",
      "Poznań · wycena przed startem · jeden numer telefonu",
    ],
  },
  footer: {
    tagline: "Strony i systemy dla polskich firm — Poznań.",
    servicesHeading: "Usługi",
    serviceLinks: [
      "Strona firmowa",
      "Rezerwacje online",
      "Prosty sklep",
      "Panel i aplikacja",
      "MVP produktu",
      "Automatyzacja i AI",
    ],
    companyHeading: "Firma",
    about: "O nas",
    portfolio: "Portfolio",
    process: "Proces",
    pricing: "Cennik",
    contact: "Kontakt",
    contactHeading: "Kontakt",
    location: "Poznań, Polska",
    social: ["LinkedIn", "X", "Dribbble", "GitHub"],
    copyright: "© 2026 Qascade. Wszelkie prawa zastrzeżone.",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
  },
  contact: {
    pageTitle: "Napisz lub zadzwoń",
    subtitle:
      "Trzy pola — imię, firma, co nie działa. Odpowiemy w ciągu 24 godzin. Bez spamu i bez „digital transformation”.",
    asideTitle: "Kontakt bezpośredni",
    asideEmail: "E-mail:",
    asidePhone: "Telefon / WhatsApp:",
    asideBookCall: "Rozmowa:",
    asideBookCallLink: "Zadzwoń lub napisz — umówimy termin w tym tygodniu",
    asideTelegram: "Telegram:",
    asideLocation: "Poznań, Polska",
    asideHours: "Pn–pt., 9:00–18:00",
    form: {
      labels: {
        fullName: "Imię i nazwisko",
        email: "Telefon lub e-mail",
        company: "Firma",
        projectType: "Typ projektu",
        budget: "Szacowany budżet",
        timeline: "Harmonogram",
        message: "Co nie działa / czego potrzebujesz",
        referral: "Skąd o nas wiesz?",
      },
      placeholders: {
        fullName: "Jan Kowalski",
        email: "+48 … lub jan@firma.pl",
        company: "Nazwa firmy",
        message:
          "Np. stara strona nie przynosi zapytań, chaos w zapisach, potrzebuję sklepu…",
      },
      errors: {
        fullNameRequired: "Podaj imię.",
        fullNameMin: "Imię musi mieć co najmniej 2 znaki.",
        fullNameMax: "Imię jest zbyt długie.",
        emailRequired: "Podaj telefon lub e-mail.",
        emailInvalid: "Podaj prawidłowy e-mail lub numer telefonu.",
        companyMax: "Nazwa firmy jest zbyt długa.",
        companyRequired: "Podaj nazwę firmy.",
        projectTypeRequired: "Wybierz typ projektu.",
        messageRequired: "Opisz, co nie działa.",
        messageMin: "Dodaj kilka słów więcej (min. 10 znaków).",
        messageMax: "Wiadomość jest zbyt długa.",
      },
      selectPlaceholder: "Wybierz…",
      projectTypeOptions: [
        "Strona firmowa / landing",
        "Rezerwacje / zapisy",
        "Prosty sklep",
        "Panel / większy system",
        "MVP / produkt cyfrowy",
        "Automatyzacja / AI",
        "Inne",
      ],
      budgetOptions: [
        "Do 10 000 zł",
        "10 000 – 25 000 zł",
        "25 000 – 50 000 zł",
        "50 000 – 100 000 zł",
        "Powyżej 100 000 zł",
        "Jeszcze nie wiem",
      ],
      timelineOptions: [
        "Jak najszybciej",
        "1–2 miesiące",
        "3–6 miesięcy",
        "Elastycznie",
      ],
      referralOptions: [
        "Google",
        "Polecenie",
        "Social media",
        "Inne",
      ],
      success: "Dzięki — wiadomość wysłana. Odpowiemy w ciągu 24 godzin.",
      submitError:
        "Nie udało się wysłać. Zadzwoń pod +48 606 564 765 lub napisz na hermes-93@outlook.com.",
      submitting: "Wysyłanie…",
      submit: "Wyślij",
      disclaimer:
        "Odpowiadamy osobiście w ciągu 24 h. Dane przetwarzamy wyłącznie w celu kontaktu — zgodnie z RODO (polityka wkrótce).",
    },
  },
  portfolio: {
    pageTitle: "Realizacje",
    subtitle:
      "Cztery projekty w skali polskiego biznesu — sklep, studio, kawiarnia, platforma HR. Bez wymyślonych „klientów Fortune”.",
    caseStudyLabel: "Case study",
    previewSuffix: "— podgląd",
    client: "Klient",
    industry: "Branża",
    service: "Usługa",
    timeline: "Czas",
    challenge: "Wyzwanie",
    solution: "Rozwiązanie",
    keyFeatures: "Kluczowe elementy",
    techStack: "Technologie",
    results: "Efekt",
    ctaTitle: "Podobny projekt u Ciebie?",
    ctaBody: "Każda realizacja zaczęła się od jednej rozmowy.",
    ctaButton: "Napisz lub zadzwoń →",
    conceptNoteLabel: "Projekt koncepcyjny",
  },
  modal: {
    preview: "Podgląd",
    close: "Zamknij",
    closeAria: "Zamknij case study",
    screenshots: "Zrzuty ekranu",
    challenge: "Wyzwanie",
    solution: "Nasze rozwiązanie",
    keyFeatures: "Kluczowe funkcje",
    techStack: "Stack technologiczny:",
    results: "Wyniki",
    openFullPage: "Otwórz pełną stronę w portfolio →",
    defaultProductPreview: "— podgląd produktu",
    defaultInterfaceOverview: "Przegląd interfejsu",
  },
  common: {
    loading: "Ładowanie sekcji",
    preview: "Podgląd",
    caseStudy: "Case study",
    phase: "Faza",
    timeline: "Harmonogram",
    client: "Klient",
    industry: "Branża",
    service: "Usługa",
    details: "Szczegóły →",
    techStack: "Stack technologiczny",
  },
};

const enMessages: Messages = {
  metadata: {
    siteDescription:
      "Qascade — websites and systems for Polish businesses. More leads, less chaos. Poznań, Poland.",
    contactTitle: "Contact",
    contactDescription: "Call or write — we reply within 24 hours.",
    portfolioTitle: "Our work",
    portfolioDescription: "Real projects at the scale of local businesses.",
  },
  nav: {
    work: "Work",
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    about: "About",
    contact: "Call / Write",
    portfolio: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    siteNav: "Site navigation",
  },
  hero: {
    splashTagline: "More clients. Less chaos. A system that works.",
    scrollHint: "Scroll to see our work",
    loadingSection: "Loading section",
    statsLine1: "Poznań · Poland",
    statsLine2: "Two people · Direct contact",
    cornerPanels: [
      {
        title: "Site & leads",
        body: "A website that explains your offer and captures contact — not another template.",
      },
      {
        title: "Booking & shop",
        body: "Appointments, simple e-commerce, fewer phone calls and manual work.",
      },
      {
        title: "Panel & automation",
        body: "CRM, catalog, on-site bot — when the business outgrows spreadsheets.",
      },
      {
        title: "Digital product",
        body: "MVP, SaaS, larger systems — plan, timeline, delivery.",
      },
    ],
  },
  heroMain: {
    title: "We build websites and systems that bring leads and order to your business",
    subtitle:
      "For operating businesses in Poland — salons, clinics, shops, services, production. Not pitch-deck startups. Design, build, support after launch.",
    cta1: "Call or write",
    cta2: "See our work",
    trustLine: "Poznań · Azazel answers the phone · Quote after a call, no obligation",
  },
  services: {
    title: "What we do",
    subtitle:
      "Two tiers: quick entry (site, booking, simple shop) and larger systems (panel, MVP, SaaS).",
    tierEntryHeading: "Entry — quick start",
    tierProductHeading: "Product — larger systems",
    quoteOnRequest: "Quoted after a call",
    service: "Service",
    whyMatters: "Why it matters",
    deliverables: "What you get",
    techStack: "Tech stack",
    footerLine: "Direct contact · Weekly progress · No fluff",
    mobileHint: "Scroll the list or tap a service to read details.",
    windowChrome: "what-we-build",
    tablistAria: "Services",
  },
  work: {
    title: "Selected work",
    subtitle:
      "Projects at the scale of a local business — shop, studio, café, SaaS platform. Hover the strip and click a case.",
    details: "Details →",
    carouselAria: "Portfolio case studies carousel",
    openCaseStudy: "Open case study: {client}",
  },
  process: {
    title: "How it works",
    subtitle: "Three steps in weeks. After each one you know what you have and what it costs next.",
    windowChrome: "how-we-work",
    phasesAria: "Process steps",
    phaseLabel: "Step",
    timelinePrefix: "Time ·",
    whatHappens: "What we do",
    deliverablePrefix: "After this step ·",
    cta: "Book a call →",
    phases: [
      {
        num: "01",
        title: "Call",
        duration: "30–60 min · within a week",
        body: "A short phone or video call. We need to understand what hurts: no leads, booking chaos, an old shop, manual work. No “digital transformation” questionnaire.",
        happens: [
          "Your industry and current site or system",
          "What should change in 30 days",
          "Rough budget and timeline",
          "Entry (website) vs larger system",
        ],
        deliverable:
          "We agree whether to proceed and in which direction. No invoice upfront.",
      },
      {
        num: "02",
        title: "Plan & mockup",
        duration: "1–2 weeks",
        body: "If we fit — you get a plan: what we build, in what order, how long it takes. For larger projects: mockups of key screens for approval before code.",
        happens: [
          "Scope and feature list (must / nice)",
          "Week-by-week timeline",
          "Setup quote and optional retainer",
          "Mockup or sketch of main screens",
        ],
        deliverable:
          "Project plan + quote for approval. Paid discovery only if we agree upfront.",
      },
      {
        num: "03",
        title: "Build & launch",
        duration: "2–8 weeks (depends on scope)",
        body: "We build, show progress every week, deploy to your domain. After launch — short support to catch first real-world issues.",
        happens: [
          "Development in weekly iterations",
          "Demos of working pieces",
          "Testing before go-live",
          "Launch and a short handover",
        ],
        deliverable:
          "Live site or system + how-to notes. You know what you have ~14 days after build starts.",
      },
    ],
  },
  about: {
    title: "Who is behind Qascade",
    subtitle:
      "Two people in Poznań. One contact in Poland, one product and code. No account managers, no legend about “four seniors”.",
    paragraphs: [
      "We work with business owners who already earn — but have a weak site, messy bookings, or tools that no longer match the company.",
      "We don’t promise startup scale or Fortune 500 in a week. We promise specifics: call, plan, build, deadline.",
    ],
    team: [
      {
        name: "Azazel",
        role: "Strategy, sales & contact · Poznań",
        bio: "First call, understanding the business problem, quote and agreement. In Polish, by phone or in person in Greater Poland.",
      },
      {
        name: "Hermes",
        role: "Product, architecture & development",
        bio: "Technical scope, timeline, build and launch. Direct contact after kickoff — no middlemen.",
      },
    ],
    trustTitle: "From our portfolio",
    trustItems: [
      "Bilimshop — e-commerce store (PL / RU)",
      "Never Tired Centre — recording studio & booking",
      "White Feather Coffee — HoReCa brand",
      "PeopleOrbit — HR SaaS platform",
      "Poznań · quote before start · one phone number",
    ],
  },
  footer: {
    tagline: "Websites and systems for Polish businesses — Poznań.",
    servicesHeading: "Services",
    serviceLinks: [
      "Business website",
      "Online booking",
      "Simple shop",
      "Panel & application",
      "Product MVP",
      "Automation & AI",
    ],
    companyHeading: "Company",
    about: "About Us",
    portfolio: "Portfolio",
    process: "Process",
    pricing: "Pricing",
    contact: "Contact",
    contactHeading: "Get in Touch",
    location: "Poznań, Poland",
    social: ["LinkedIn", "X", "Dribbble", "GitHub"],
    copyright: "© 2026 Qascade. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  contact: {
    pageTitle: "Call or write",
    subtitle:
      "Three fields — name, company, what’s not working. We reply within 24 hours. No spam, no buzzwords.",
    asideTitle: "Direct contact",
    asideEmail: "Email:",
    asidePhone: "Phone / WhatsApp:",
    asideBookCall: "Call:",
    asideBookCallLink: "Call or write — we’ll schedule a slot this week",
    asideTelegram: "Telegram:",
    asideLocation: "Poznań, Poland",
    asideHours: "Mon–Fri, 9:00–18:00 CET",
    form: {
      labels: {
        fullName: "Full name",
        email: "Phone or email",
        company: "Company",
        projectType: "Project type",
        budget: "Estimated budget",
        timeline: "Timeline",
        message: "What’s not working / what you need",
        referral: "How did you find us?",
      },
      placeholders: {
        fullName: "John Smith",
        email: "+48 … or john@company.com",
        company: "Company name",
        message:
          "E.g. old site brings no leads, booking chaos, need a shop…",
      },
      errors: {
        fullNameRequired: "Enter your name.",
        fullNameMin: "Name must be at least 2 characters.",
        fullNameMax: "Name is too long.",
        emailRequired: "Enter phone or email.",
        emailInvalid: "Enter a valid email or phone number.",
        companyMax: "Company name is too long.",
        companyRequired: "Enter your company name.",
        projectTypeRequired: "Choose a project type.",
        messageRequired: "Describe what you need.",
        messageMin: "Add a few more words (min. 10 characters).",
        messageMax: "Message is too long.",
      },
      selectPlaceholder: "Select…",
      projectTypeOptions: [
        "Business website / landing",
        "Booking / appointments",
        "Simple shop",
        "Panel / larger system",
        "MVP / digital product",
        "Automation / AI",
        "Other",
      ],
      budgetOptions: [
        "Under $2,500",
        "$2,500 – $6,000",
        "$6,000 – $12,000",
        "$12,000 – $25,000",
        "$25,000+",
        "Not sure yet",
      ],
      timelineOptions: ["ASAP", "1–2 months", "3–6 months", "Flexible"],
      referralOptions: ["Google", "Referral", "Social media", "Other"],
      success: "Thanks — message sent. We’ll reply within 24 hours.",
      submitError:
        "Could not send. Call +48 606 564 765 or email hermes-93@outlook.com.",
      submitting: "Sending…",
      submit: "Send",
      disclaimer:
        "We reply personally within 24 h. Data is used for contact only — GDPR policy coming soon.",
    },
  },
  portfolio: {
    pageTitle: "Our work",
    subtitle:
      "Four projects at local-business scale — shop, studio, café, HR platform. No made-up Fortune clients.",
    caseStudyLabel: "Case study",
    previewSuffix: "— preview",
    client: "Client",
    industry: "Industry",
    service: "Service",
    timeline: "Timeline",
    challenge: "Challenge",
    solution: "Solution",
    keyFeatures: "Key features",
    techStack: "Tech stack",
    results: "Results",
    ctaTitle: "Similar project for you?",
    ctaBody: "Every case started with one conversation.",
    ctaButton: "Call or write →",
    conceptNoteLabel: "Concept project",
  },
  modal: {
    preview: "Preview",
    close: "Close",
    closeAria: "Close case study",
    screenshots: "Screenshots",
    challenge: "The challenge",
    solution: "Our solution",
    keyFeatures: "Key features",
    techStack: "Tech stack:",
    results: "Results",
    openFullPage: "Open full page on Portfolio →",
    defaultProductPreview: "— product preview",
    defaultInterfaceOverview: "Interface overview",
  },
  common: {
    loading: "Loading section",
    preview: "Preview",
    caseStudy: "Case study",
    phase: "Phase",
    timeline: "Timeline",
    client: "Client",
    industry: "Industry",
    service: "Service",
    details: "Details →",
    techStack: "Tech stack",
  },
};

export const messages: Record<Locale, Messages> = {
  pl: plMessages,
  en: enMessages,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
