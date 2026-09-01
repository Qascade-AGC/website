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
      "Qascade tworzy produkty cyfrowe, które generują przychód — aplikacje webowe, SaaS, e-commerce, MVP, AI i DevSecOps.",
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
    contact: "Kontakt →",
    portfolio: "Portfolio",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    mainNav: "Główna nawigacja",
    mobileNav: "Nawigacja mobilna",
    siteNav: "Nawigacja strony",
  },
  hero: {
    splashTagline: "Od szkicu do skali — produkty, które trafiają na rynek.",
    scrollHint: "Przewiń, aby odkryć",
    loadingSection: "Ładowanie sekcji",
    statsLine1: "Ponad 40 wdrożonych produktów",
    statsLine2: "Od 2021 · Bezpośredni kontakt z zespołem",
    cornerPanels: [
      {
        title: "Web i SaaS",
        body: "Full-stack od discovery do launchu — bez luk między zespołami.",
      },
      {
        title: "Bezpieczeństwo od początku",
        body: "DevSecOps w CI/CD od pierwszego dnia, a nie na końcu projektu.",
      },
      {
        title: "AI, które trafia na produkcję",
        body: "Praktyczne integracje LLM i RAG z governance i observability.",
      },
      {
        title: "E-commerce, który konwertuje",
        body: "Headless, custom lub hybryda — zoptymalizowane pod przychód na odwiedzającego.",
      },
    ],
  },
  heroMain: {
    title: "Tworzymy produkty cyfrowe, które generują przychód",
    subtitle:
      "Od pierwszego szkicu do działającego produktu — projektujemy i rozwijamy aplikacje webowe, platformy SaaS oraz rozwiązania e-commerce, które pomagają startupom i rosnącym firmom szybciej skalować biznes.",
    cta1: "Rozpocznij projekt",
    cta2: "Zobacz realizacje",
    trustLine:
      "Zaufali nam ponad 40 firm na świecie · Średni ROI projektu: 3,2×",
  },
  services: {
    title: "Co tworzymy",
    subtitle:
      "Skupiamy się na sześciu obszarach, w których dostarczamy największą wartość. Bez pustych obietnic. Bez wypełniaczy. Tylko rozwiązania, które działają.",
    service: "Usługa",
    whyMatters: "Dlaczego to ważne",
    deliverables: "Kluczowe deliverables",
    techStack: "Stack technologiczny",
    footerLine:
      "Bezpośredni kontakt z seniorem · Cotygodniowe demo · Bez pustych słów",
    mobileHint:
      "Przewiń listę lub dotknij usługi, aby przeczytać szczegóły.",
    windowChrome: "what-we-build",
    tablistAria: "Usługi",
  },
  work: {
    title: "Wybrane realizacje",
    subtitle:
      "Najedź na pasek i przewijaj kółkiem myszy · Kliknij case, aby zobaczyć szczegóły.",
    details: "Szczegóły →",
    carouselAria: "Karuzela case studies portfolio",
    openCaseStudy: "Otwórz case study: {client}",
  },
  process: {
    title: "Jak pracujemy",
    subtitle:
      "Cztery fazy, jeden framework. Wybierz etap, aby zobaczyć, co się w nim dzieje.",
    windowChrome: "how-we-work",
    phasesAria: "Fazy procesu",
    phaseLabel: "Faza",
    timelinePrefix: "Harmonogram ·",
    whatHappens: "Co się dzieje",
    deliverablePrefix: "Rezultat ·",
    cta: "Zacznij od odkrywania →",
    phases: [
      {
        num: "01",
        title: "Odkrywanie",
        duration: "1–2 tygodnie",
        body: "Zaczynamy od zrozumienia Twojego biznesu, użytkowników i celów. Nie przez generyczną ankietę — przez prawdziwe rozmowy, analizę rynku i trudne pytania, które oszczędzają miesiące przeróbek później.",
        happens: [
          "Wywiady ze stakeholderami i dopasowanie celów",
          "Badania użytkowników i analiza konkurencji",
          "Określenie zakresu i priorytetyzacja funkcji (metoda MoSCoW)",
          "Planowanie architektury technicznej",
          "Ocena wymagań bezpieczeństwa i zgodności",
          "Mapa drogowa projektu z ustalonymi kamieniami milowymi",
        ],
        deliverable:
          "Project Brief — jeden dokument definiujący zakres, harmonogram, stack technologiczny, budżet i metryki sukcesu. Zatwierdzasz go, zanim napiszemy choć jedną linijkę kodu.",
      },
      {
        num: "02",
        title: "Projektowanie",
        duration: "2–3 tygodnie",
        body: "Projektujemy, jak Twój produkt wygląda, działa i się zachowuje. Każdy ekran. Każda interakcja. Każdy edge case. Widzisz klikalne prototypy w Figmie, zanim zacznie się development — zero wizualnych niespodzianek przy launchu.",
        happens: [
          "Wireframe'y dla wszystkich kluczowych ścieżek użytkownika",
          "System wizualny (kolory, typografia, komponenty)",
          "Makiety UI w wysokiej wierności — desktop i mobile",
          "Klikalny prototyp do testów z użytkownikami",
          "Sesje review designu z Twoim zespołem",
        ],
        deliverable:
          "Zatwierdzony prototyp Figma + kompletny system designu gotowy do developmentu pixel-perfect.",
      },
      {
        num: "03",
        title: "Rozwój",
        duration: "4–10 tygodni (zależy od zakresu)",
        body: "Tu produkt staje się realny. Pracujemy w sprintach tygodniowych z demo w każdy piątek. Widzisz postępy co tydzień — nie co miesiąc. Gdy priorytety się zmieniają, szybko się dostosowujemy. Skanowanie bezpieczeństwa działa automatycznie przy każdym commicie.",
        happens: [
          "Równoległy rozwój frontendu i backendu",
          "Pipeline CI/CD z automatycznymi kontrolami bezpieczeństwa",
          "Cotygodniowe demo sprintów — działające oprogramowanie",
          "Continuous integration i testy automatyczne",
          "Integracje zewnętrzne (płatności, API, analityka)",
          "Code review i QA przy każdej funkcji",
        ],
        deliverable:
          "W pełni funkcjonalny, przetestowany produkt na środowisku staging. Możesz kliknąć wszystko przed launchiem.",
      },
      {
        num: "04",
        title: "Wdrożenie",
        duration: "1 tydzień",
        body: "Nie wrzucamy kodu i nie znikamy. Zajmujemy się deploymentem, konfiguracją monitoringu, hardeningiem bezpieczeństwa, optymalizacją wydajności i zapewniamy 30 dni wsparcia po launchu, aby wyłapać wszystko, co pojawi się w realnym świecie.",
        happens: [
          "Deployment produkcyjny i konfiguracja serwerów",
          "Hardening bezpieczeństwa infrastruktury",
          "Audyt wydajności i bezpieczeństwa",
          "Konfiguracja analityki i monitoringu",
          "Przekazanie zespołowi i dokumentacja",
          "30 dni wsparcia po launchu (w cenie)",
        ],
        deliverable:
          "Działający produkt + dokumentacja techniczna + dashboardy monitoringu + spokój ducha.",
      },
    ],
  },
  about: {
    title: "Zespół za kodem",
    subtitle:
      "Jesteśmy zwartym zespołem czterech osób. Bez account managerów. Bez pośredników. Gdy pracujesz z nami, rozmawiasz bezpośrednio z ludźmi, którzy projektują, budują i wdrażają Twój produkt.",
    paragraphs: [
      "Założyliśmy tę agencję, bo wszędzie widzieliśmy ten sam schemat: rozdmuchane zespoły, nieskończone spotkania i produkty, które startują z miesięcznym opóźnieniem i wielotysięcznym przekroczeniem budżetu.",
      "Robimy to inaczej. Czterech seniorów. Bezpośrednia komunikacja. Cotygodniowe deliverables. Pełna transparentność harmonogramu, budżetu i postępów — co tydzień.",
      "Od 2021 roku wdrożyliśmy ponad 40 produktów w 12 branżach. Nasi klienci to startupy na etapie pre-seed oraz firmy mid-market generujące ponad 50 mln USD rocznego przychodu. Każdy projekt traktujemy jak własny.",
    ],
    team: [
      {
        name: "Imię Nazwisko",
        role: "Założyciel i strateg produktu",
        bio: "12 lat w rozwoju produktów cyfrowych. Były Head of Product w [Firma]. Skupia się na kontroli zakresu, wynikach dla użytkowników i terminowości. Prowadzi każdy projekt od discovery do launchu.",
      },
      {
        name: "Imię Nazwisko",
        role: "Lead Designer · UI/UX",
        bio: "8 lat projektowania interfejsów dla SaaS, fintechu i e-commerce. Wierzy, że świetny design jest niewidoczny — użytkownik powinien osiągnąć cel bez myślenia o interfejsie. Figma to jego drugi dom.",
      },
      {
        name: "Imię Nazwisko",
        role: "Senior Full-Stack Developer",
        bio: "10 lat budowania aplikacji webowych na dużą skalę. React, Node.js, PostgreSQL, AWS — to jego naturalne środowisko. Pisze czysty, udokumentowany, łatwy w utrzymaniu kod. Za każdym razem.",
      },
      {
        name: "Imię Nazwisko",
        role: "Backend & AI Engineer",
        bio: "7 lat w architekturze backendu i 3 lata integracji AI w systemach produkcyjnych. Odpowiada za bazy danych, API, DevOps i wszystko, co działa za kulisami.",
      },
    ],
    trustTitle: "Dlaczego zespoły nam ufają",
    trustItems: [
      "Ponad 40 projektów dostarczonych od 2021 roku",
      "93% projektów uruchomionych na czas i w budżecie",
      "Średnia ocena satysfakcji klientów: 4,9/5",
      "70% klientów wraca z drugim projektem",
      "Bezpośredni dostęp do osób, które faktycznie pracują nad produktem",
    ],
  },
  footer: {
    tagline: "Tworzymy produkty cyfrowe, które generują przychód.",
    servicesHeading: "Usługi",
    serviceLinks: [
      "Aplikacje webowe",
      "Rozwój MVP",
      "E-commerce",
      "Platformy SaaS",
      "Integracja AI",
      "DevSecOps",
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
    pageTitle: "Porozmawiajmy o Twoim projekcie",
    subtitle:
      "Opowiedz nam, co budujesz. Odpowiemy w ciągu 24 godzin z pierwszymi przemyśleniami — bez agresywnej sprzedaży i presji. Po prostu szczera rozmowa o Twoich celach.",
    asideTitle: "Wolisz inny kanał?",
    asideEmail: "E-mail:",
    asidePhone: "Telefon:",
    asideBookCall: "Umów rozmowę:",
    asideBookCallLink: "Zaplanuj 30-minutową rozmowę wstępną",
    asideTelegram: "Telegram:",
    asideLocation: "Siedziba: Poznań, Polska",
    asideHours: "Godziny pracy: pon.–pt., 9:00–18:00 CET",
    form: {
      labels: {
        fullName: "Imię i nazwisko",
        email: "Adres e-mail",
        company: "Firma / organizacja",
        projectType: "Typ projektu",
        budget: "Szacowany budżet",
        timeline: "Harmonogram projektu",
        message: "Opowiedz o swoim projekcie",
        referral: "Skąd o nas wiesz?",
      },
      placeholders: {
        fullName: "Jan Kowalski",
        email: "jan@firma.pl",
        company: "Firma Sp. z o.o.",
        message:
          "Opisz swój pomysł, cele i konkretne wymagania. Im więcej szczegółów, tym lepsza będzie nasza pierwsza odpowiedź.",
      },
      errors: {
        fullNameRequired: "Podaj imię i nazwisko.",
        fullNameMin: "Imię i nazwisko muszą mieć co najmniej 2 znaki.",
        fullNameMax: "Imię i nazwisko są zbyt długie.",
        emailRequired: "Podaj adres e-mail.",
        emailInvalid: "Podaj prawidłowy adres e-mail.",
        companyMax: "Nazwa firmy jest zbyt długa.",
        projectTypeRequired: "Wybierz typ projektu.",
        messageRequired: "Opowiedz nam o swoim projekcie.",
        messageMin:
          "Dodaj trochę więcej szczegółów (co najmniej 20 znaków).",
        messageMax: "Wiadomość jest zbyt długa.",
      },
      selectPlaceholder: "Wybierz…",
      projectTypeOptions: [
        "Aplikacja webowa",
        "Rozwój MVP",
        "E-commerce",
        "Platforma SaaS",
        "Integracja AI",
        "DevSecOps",
        "Inne / nie wiem",
      ],
      budgetOptions: [
        "Poniżej 40 000 zł",
        "40 000 – 100 000 zł",
        "100 000 – 200 000 zł",
        "200 000 – 400 000 zł",
        "Powyżej 400 000 zł",
        "Jeszcze nie wiem",
      ],
      timelineOptions: [
        "Jak najszybciej",
        "1–2 miesiące",
        "3–6 miesięcy",
        "Elastycznie / nie wiem",
      ],
      referralOptions: [
        "Wyszukiwarka Google",
        "Polecenie",
        "Media społecznościowe",
        "Clutch / Dribbble / Behance",
        "Inne",
      ],
      success:
        "Dziękujemy — wiadomość jest gotowa do wysłania. Podłącz backend (np. Formspree, Resend lub własne API), aby ją dostarczyć. Formularz został wyczyszczony.",
      submit: "Wyślij wiadomość",
      disclaimer:
        "Wysyłając formularz, akceptujesz naszą Politykę prywatności. Odpowiemy w ciągu 24 godzin. Bez spamu i automatycznych sekwencji — tylko prawdziwa odpowiedź od prawdziwej osoby.",
    },
  },
  portfolio: {
    pageTitle: "Nasze realizacje",
    subtitle:
      "Prawdziwe produkty. Prawdziwe wyniki. Oto dziewięć projektów, które pokazują, jak myślimy, budujemy i dostarczamy.",
    caseStudyLabel: "Case study",
    previewSuffix: "— podgląd",
    client: "Klient:",
    industry: "Branża:",
    service: "Usługa:",
    timeline: "Harmonogram:",
    challenge: "Wyzwanie",
    solution: "Nasze rozwiązanie",
    keyFeatures: "Kluczowe funkcje",
    techStack: "Stack technologiczny:",
    results: "Wyniki",
    ctaTitle: "Twój projekt może być następny",
    ctaBody:
      "Każde case study powyżej zaczęło się od jednej rozmowy. Porozmawiajmy o Twoim.",
    ctaButton: "Rozpocznij projekt →",
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
      "Qascade builds digital products that drive revenue — web apps, SaaS, e-commerce, MVP, AI, and DevSecOps.",
    contactTitle: "Contact",
    contactDescription: "Let's talk about your project.",
    portfolioTitle: "Our Work",
    portfolioDescription: "Real products. Real results.",
  },
  nav: {
    work: "Work",
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    about: "About",
    contact: "Contact us →",
    portfolio: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    siteNav: "Site navigation",
  },
  hero: {
    splashTagline: "From sketch to scale — products that ship.",
    scrollHint: "Scroll to explore",
    loadingSection: "Loading section",
    statsLine1: "40+ products shipped",
    statsLine2: "Since 2021 · Direct team access",
    cornerPanels: [
      {
        title: "Web & SaaS",
        body: "Full-stack delivery from discovery to launch — no handoff gaps.",
      },
      {
        title: "Security in the loop",
        body: "DevSecOps baked into CI/CD from day one, not bolted on at the end.",
      },
      {
        title: "AI that ships",
        body: "Practical LLM and RAG integrations with governance and observability.",
      },
      {
        title: "E-commerce that converts",
        body: "Headless, custom, or hybrid — tuned for revenue per visitor.",
      },
    ],
  },
  heroMain: {
    title: "We Build Digital Products That Drive Revenue",
    subtitle:
      "From first sketch to live product — we design and develop web apps, SaaS platforms, and e-commerce solutions that help startups and growing businesses scale faster.",
    cta1: "Start Your Project",
    cta2: "View Our Work",
    trustLine: "Trusted by 40+ companies worldwide · Average project ROI: 3.2x",
  },
  services: {
    title: "What We Build",
    subtitle:
      "We focus on six core areas where we deliver the most value. No fluff. No filler. Just solutions that work.",
    service: "Service",
    whyMatters: "Why it matters",
    deliverables: "Key deliverables",
    techStack: "Tech stack",
    footerLine: "Direct senior team · Weekly demos · No fluff",
    mobileHint: "Scroll the list or tap a service to read details.",
    windowChrome: "what-we-build",
    tablistAria: "Services",
  },
  work: {
    title: "Selected work",
    subtitle:
      "Hover the strip and scroll with the mouse wheel · Click a case for details.",
    details: "Details →",
    carouselAria: "Portfolio case studies carousel",
    openCaseStudy: "Open case study: {client}",
  },
  process: {
    title: "How we work",
    subtitle:
      "Four phases, one framework. Pick a step to see what happens inside.",
    windowChrome: "how-we-work",
    phasesAria: "Process phases",
    phaseLabel: "Phase",
    timelinePrefix: "Timeline ·",
    whatHappens: "What happens",
    deliverablePrefix: "Deliverable ·",
    cta: "Start with discovery →",
    phases: [
      {
        num: "01",
        title: "DISCOVERY",
        duration: "1–2 weeks",
        body: "We start by understanding your business, your users, and your goals. Not with a generic questionnaire — with real conversations, market analysis, and tough questions that save you months of rework later.",
        happens: [
          "Stakeholder interviews & goal alignment",
          "User research & competitor analysis",
          "Feature scoping & prioritization (MoSCoW method)",
          "Technical architecture planning",
          "Security & compliance requirements assessment",
          "Project roadmap with fixed milestones",
        ],
        deliverable:
          "Project Brief — a single document that defines scope, timeline, tech stack, budget, and success metrics. You approve it before we write a single line of code.",
      },
      {
        num: "02",
        title: "DESIGN",
        duration: "2–3 weeks",
        body: "We design how your product looks, feels, and works. Every screen. Every interaction. Every edge case. You see clickable prototypes in Figma before development starts — so there are zero visual surprises at launch.",
        happens: [
          "Wireframes for all core user flows",
          "Visual design system (colors, typography, components)",
          "High-fidelity UI mockups — desktop & mobile",
          "Clickable prototype for user testing",
          "Design review sessions with your team",
        ],
        deliverable:
          "Approved Figma prototype + complete design system ready for pixel-perfect development.",
      },
      {
        num: "03",
        title: "DEVELOPMENT",
        duration: "4–10 weeks (depends on scope)",
        body: "This is where your product becomes real. We work in 1-week sprints with demos every Friday. You see progress weekly — not monthly. If priorities shift, we adapt fast. Security scanning runs automatically on every commit.",
        happens: [
          "Frontend & backend development in parallel",
          "CI/CD pipeline with automated security checks",
          "Weekly sprint demos — live, working software",
          "Continuous integration & automated testing",
          "Third-party integrations (payments, APIs, analytics)",
          "Code reviews & QA on every feature",
        ],
        deliverable:
          "Fully functional, tested product on a staging environment. You can click through everything before launch.",
      },
      {
        num: "04",
        title: "LAUNCH",
        duration: "1 week",
        body: "We don't just push code and disappear. We handle deployment, monitoring setup, security hardening, performance optimization, and provide 30 days of post-launch support to catch and fix anything that comes up in the real world.",
        happens: [
          "Production deployment & server configuration",
          "Infrastructure security hardening",
          "Performance & security audit",
          "Analytics & monitoring setup",
          "Team handoff & documentation",
          "30-day post-launch support (included)",
        ],
        deliverable:
          "Live product + technical documentation + monitoring dashboards + peace of mind.",
      },
    ],
  },
  about: {
    title: "The Team Behind the Code",
    subtitle:
      "We're a focused team of four. No account managers. No middlemen. When you work with us, you work directly with the people who design, build, and ship your product.",
    paragraphs: [
      "We started this agency because we saw the same pattern everywhere: bloated teams, endless meetings, and products that launch months late and thousands over budget.",
      "We do things differently. Four senior specialists. Direct communication. Weekly deliverables. Full transparency on timeline, budget, and progress — every single week.",
      "Since 2021, we've shipped 40+ products across 12 industries. Our clients range from pre-seed startups to mid-market companies doing $50M+ in annual revenue. We treat every project like it's our own.",
    ],
    team: [
      {
        name: "Name Surname",
        role: "Founder & Product Strategist",
        bio: "12 years in digital product development. Former Head of Product at [Company]. Obsessed with scope control, user outcomes, and shipping on time. Leads every project from discovery to launch.",
      },
      {
        name: "Name Surname",
        role: "Lead Designer · UI/UX",
        bio: "8 years designing interfaces for SaaS, fintech, and e-commerce. Believes great design is invisible — users should reach their goal without thinking about the interface. Figma addict.",
      },
      {
        name: "Name Surname",
        role: "Senior Full-Stack Developer",
        bio: "10 years building web applications at scale. React, Node.js, PostgreSQL, AWS — this is his natural habitat. Writes clean, documented, maintainable code. Every single time.",
      },
      {
        name: "Name Surname",
        role: "Backend & AI Engineer",
        bio: "7 years in backend architecture and 3 years integrating AI into production systems. Handles databases, APIs, DevOps, and everything that runs behind the scenes.",
      },
    ],
    trustTitle: "Why Teams Trust Us",
    trustItems: [
      "40+ projects delivered since 2021",
      "93% of projects launched on time and within budget",
      "4.9/5 average client satisfaction score",
      "70% of clients return with a second project",
      "Direct access to the people doing the actual work",
    ],
  },
  footer: {
    tagline: "We build digital products that drive revenue.",
    servicesHeading: "Services",
    serviceLinks: [
      "Web Applications",
      "MVP Development",
      "E-Commerce",
      "SaaS Platforms",
      "AI Integration",
      "DevSecOps",
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
    pageTitle: "Let's Talk About Your Project",
    subtitle:
      "Tell us what you're building. We'll get back to you within 24 hours with initial thoughts — no sales pitch, no pressure. Just a real conversation about your goals.",
    asideTitle: "Prefer a different channel?",
    asideEmail: "Email:",
    asidePhone: "Phone:",
    asideBookCall: "Book a call:",
    asideBookCallLink: "Schedule 30-min intro call",
    asideTelegram: "Telegram:",
    asideLocation: "Based in Poznań, Poland",
    asideHours: "Working hours: Mon–Fri, 9:00–18:00 CET",
    form: {
      labels: {
        fullName: "Full Name",
        email: "Email Address",
        company: "Company / Organization",
        projectType: "Project Type",
        budget: "Estimated Budget",
        timeline: "Project Timeline",
        message: "Tell Us About Your Project",
        referral: "How Did You Find Us?",
      },
      placeholders: {
        fullName: "John Smith",
        email: "john@company.com",
        company: "Acme Inc.",
        message:
          "Describe your idea, goals, and any specific requirements. The more detail, the better our initial response will be.",
      },
      errors: {
        fullNameRequired: "Enter your name.",
        fullNameMin: "Name must be at least 2 characters.",
        fullNameMax: "Name is too long.",
        emailRequired: "Enter your email.",
        emailInvalid: "Enter a valid email address.",
        companyMax: "Company name is too long.",
        projectTypeRequired: "Choose a project type.",
        messageRequired: "Tell us about your project.",
        messageMin: "Please add a bit more detail (at least 20 characters).",
        messageMax: "Message is too long.",
      },
      selectPlaceholder: "Select…",
      projectTypeOptions: [
        "Web Application",
        "MVP Development",
        "E-Commerce",
        "SaaS Platform",
        "AI Integration",
        "DevSecOps",
        "Other / Not Sure",
      ],
      budgetOptions: [
        "Less than $10,000",
        "$10,000 – $25,000",
        "$25,000 – $50,000",
        "$50,000 – $100,000",
        "$100,000+",
        "Not sure yet",
      ],
      timelineOptions: [
        "ASAP",
        "1–2 months",
        "3–6 months",
        "Flexible / Not sure",
      ],
      referralOptions: [
        "Google Search",
        "Referral",
        "Social Media",
        "Clutch / Dribbble / Behance",
        "Other",
      ],
      success:
        "Thanks — your message is ready to send. Connect a backend (e.g. Formspree, Resend, or your API) to deliver it. The form has been cleared.",
      submit: "Send Message",
      disclaimer:
        "By submitting this form, you agree to our Privacy Policy. We'll respond within 24 hours. No spam. No automated sequences. Just a real reply from a real person.",
    },
  },
  portfolio: {
    pageTitle: "Our Work",
    subtitle:
      "Real products. Real results. Here are eight projects that show how we think, build, and deliver.",
    caseStudyLabel: "Case study",
    previewSuffix: "— preview",
    client: "Client:",
    industry: "Industry:",
    service: "Service:",
    timeline: "Timeline:",
    challenge: "The challenge",
    solution: "Our solution",
    keyFeatures: "Key features",
    techStack: "Tech stack:",
    results: "The results",
    ctaTitle: "Your Project Could Be Next",
    ctaBody:
      "Every case study above started with a single conversation. Let's have yours.",
    ctaButton: "Start Your Project →",
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
