export type Service = {
  slug: string;
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

export const SERVICES: Service[] = [
  {
    slug: "web-apps",
    headline: "Aplikacje webowe",
    title: "Dedykowane aplikacje webowe",
    body: "Złożone procesy zasługują na eleganckie rozwiązania. Budujemy **wydajne**, **skalowalne** aplikacje webowe dopasowane do logiki Twojego biznesu — od wewnętrznych paneli i CRM-ów po platformy klienckie obsługujące **tysiące użytkowników** dziennie.",
    deliverables: [
      "Dedykowana logika biznesowa i automatyzacja procesów",
      "Dostęp oparty na rolach i zarządzanie użytkownikami",
      "Integracje z zewnętrznymi API",
      "Przetwarzanie danych w czasie rzeczywistym i raportowanie",
    ],
    tech: "React, Next.js, Node.js, PostgreSQL, AWS",
    cta: "Porozmawiajmy o Twojej aplikacji →",
  },
  {
    slug: "mvp",
    headline: "Rozwój MVP",
    title: "Rozwój MVP",
    body: "Masz pomysł na produkt? Pomagamy founderom szybko go zweryfikować. Nasz zwinny proces MVP prowadzi od koncepcji do działającego produktu w **6–10 tygodni** — żebyś mógł przetestować rynek, zdobyć pierwszych użytkowników i pozyskać finansowanie na dowodach, nie obietnicach.",
    deliverables: [
      "Zakres produktu i priorytetyzacja funkcji",
      "Klikalny prototyp w 2. tygodniu",
      "Budowa kluczowych funkcji w czystej architekturze",
      "Wdrożenie gotowe do startu i konfiguracja analityki",
    ],
    footnote: "Średni czas realizacji: 6–10 tygodni od kickoffu do launchu.",
    cta: "Zbuduj swoje MVP →",
  },
  {
    slug: "ecommerce",
    headline: "E-commerce",
    title: "Rozwiązania e-commerce",
    body: "Budujemy sklepy internetowe, które naprawdę konwertują. Niezależnie od tego, czy potrzebujesz dedykowanej realizacji na **Shopify**, konfiguracji **headless commerce**, czy w pełni autorskiego sklepu — projektujemy każdą stronę, każdy flow i każdy krok checkoutu pod maksymalny przychód na odwiedzającego.",
    deliverables: [
      "Dedykowany design i development sklepu",
      "Integracja bramek płatności (Stripe, PayPal, lokalne metody)",
      "Zarządzanie magazynem i obsługa zamówień",
      "Optymalizacja współczynnika konwersji i testy A/B",
    ],
    footnote: "Klienci notują średnio 25–40% wzrost konwersji po launchu.",
    cta: "Zwiększ sprzedaż →",
  },
  {
    slug: "saas",
    headline: "Platformy SaaS",
    title: "Platformy SaaS",
    body: "Współpracujemy z founderami SaaS i zespołami produktowymi, by budować platformy, za które ludzie chcą płacić. Architektura **multi-tenant**, **rozliczenia subskrypcyjne**, onboarding, panele administracyjne — budowaliśmy to wszystko i wiemy, gdzie czają się pułapki.",
    deliverables: [
      "Architektura multi-tenant i izolacja danych",
      "Rozliczenia subskrypcyjne (Stripe, Paddle, custom)",
      "Onboarding użytkowników i self-serve workflows",
      "Panele administracyjne i analityka użycia",
    ],
    footnote: "4 produkty SaaS, które zbudowaliśmy, osiągnęły $1M+ ARR.",
    cta: "Uruchom swój SaaS →",
  },
  {
    slug: "ai",
    headline: "Integracja AI",
    title: "Integracja AI",
    body: "AI to nie magia — to narzędzie. Pomagamy firmom integrować **duże modele językowe**, computer vision i analitykę predykcyjną z istniejącymi produktami i procesami. Efekt: mądrzejsza automatyzacja, lepsze doświadczenia użytkowników i pipeline'y gotowe na **RAG**, gdy potrzebujesz odpowiedzi opartych na danych.",
    deliverables: [
      "Integracja LLM (OpenAI, Anthropic, modele open-source)",
      "Wyszukiwanie, chat i generowanie treści wspierane przez AI",
      "Analityka predykcyjna i silniki rekomendacji",
      "Fine-tuning modeli i pipeline'y RAG",
    ],
    footnote: "Sprawiamy, że AI jest praktyczne, nie eksperymentalne.",
    cta: "Dodaj AI do swojego produktu →",
  },
  {
    slug: "devsecops",
    headline: "DevSecOps",
    title: "DevSecOps",
    body: "Wbudowujemy bezpieczeństwo i niezawodność w **CI/CD**, chmurę i codzienne procesy — **Terraform**, **Kubernetes**, automatyczne skany przy każdym merge — żebyś mógł szybko wdrażać bez gaszenia pożarów.",
    whyMatters: [
      "Kontrole w pipeline'ie wychwytują większość problemów przed produkcją.",
      "Solidne IaC i monitoring oznaczają mniej awarii i szybszą rekonwalescencję.",
    ],
    deliverables: [
      "Automatyzacja CI/CD i pipeline'y release'ów",
      "Infrastructure as Code (Terraform, cloud-native)",
      "Kontenery i orkiestracja (Docker, Kubernetes)",
      "Skanowanie bezpieczeństwa w buildach i hardening chmury",
      "Monitoring, alerty i podstawy incident response",
    ],
    tech: "AWS / GCP / Azure · Terraform · Kubernetes · Docker · GitHub Actions · Datadog / Grafana",
    footnote: "Doświadczenie z workloadami fintech i w stylu HIPAA.",
    cta: "Zabezpiecz swoją infrastrukturę →",
  },
];
