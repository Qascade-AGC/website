import dynamic from "next/dynamic";
import { HeroScatterTitle } from "./HeroScatterTitle";
import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { TypewriterReveal } from "./TypewriterReveal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SplashContent } from "./SplashContent";
import { HeroMain } from "./sections/HeroMain";

function BelowFoldFallback({ minH }: { minH: string }) {
  return (
    <div
      className={`w-full ${minH}`}
      aria-busy="true"
      aria-label="Loading section"
    />
  );
}

const ServicesSection = dynamic(
  () =>
    import("./sections/ServicesSection").then((m) => ({
      default: m.ServicesSection,
    })),
  { loading: () => <BelowFoldFallback minH="min-h-[36rem]" /> },
);

const ReferencesCarouselSection = dynamic(
  () =>
    import("./sections/ReferencesCarouselSection").then((m) => ({
      default: m.ReferencesCarouselSection,
    })),
  { loading: () => <BelowFoldFallback minH="min-h-[22rem]" /> },
);

const ProcessSection = dynamic(
  () =>
    import("./sections/ProcessSection").then((m) => ({
      default: m.ProcessSection,
    })),
  { loading: () => <BelowFoldFallback minH="min-h-[40rem]" /> },
);

const AboutSection = dynamic(
  () =>
    import("./sections/AboutSection").then((m) => ({
      default: m.AboutSection,
    })),
  { loading: () => <BelowFoldFallback minH="min-h-[48rem]" /> },
);

function CornerPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-[3] max-w-[min(100%,240px)] space-y-2 ${className}`}
    >
      <ScrollRevealHeading
        as="h3"
        level="subsection"
        className="text-[13px] font-semibold leading-snug tracking-tight text-white"
      >
        {title}
      </ScrollRevealHeading>
      <TypewriterReveal
        text={children}
        className="text-[11px] leading-relaxed text-zinc-500"
      />
    </div>
  );
}

export function Hero() {
  return (
    <>
      <SiteNav />

      <section
        id="splash"
        className="relative flex min-h-dvh flex-col bg-transparent"
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/50"
          aria-hidden
        />
        <SplashContent>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+5rem))] pb-28 sm:pb-32 md:pt-20">
            <p className="mb-4 max-w-md text-center text-sm leading-relaxed text-white/65 sm:mb-5 md:text-base">
              From sketch to scale — products that ship.
            </p>
            <HeroScatterTitle />
          </div>

          <p className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] left-1/2 z-10 -translate-x-1/2 text-center text-[10px] tracking-[0.25em] text-zinc-600 uppercase sm:bottom-8 sm:text-[11px]">
            Scroll to explore
          </p>
        </SplashContent>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[min(32vh,240px)] bg-gradient-to-b from-transparent via-[#000000]/84 to-[#000000] [mask-image:linear-gradient(to_top,rgb(0,0,0)_55%,transparent_100%)]"
          aria-hidden
        />
      </section>

      <section
        id="studio"
        className="relative isolate min-h-dvh overflow-hidden bg-transparent"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-36 bg-gradient-to-b from-[#000000] via-[#000000]/88 to-transparent [mask-image:linear-gradient(to_bottom,rgb(0,0,0)_65%,transparent_100%)]"
          aria-hidden
        />
        {/* Затемнение фона (видео/Spline) от зоны HeroMain вниз. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,transparent_0%,transparent_max(11rem,14vh),rgb(0_0_0_/0.58)_min(42%,28rem),rgb(0_0_0_/0.9)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-24 right-5 z-[3] hidden max-w-[200px] rounded-xl border border-white/[0.08] bg-black/[0.22] px-3 py-2.5 text-[10px] leading-relaxed text-zinc-500 backdrop-blur-sm sm:right-8 lg:block"
          aria-hidden
        >
          <p className="font-medium text-zinc-400">40+ products shipped</p>
          <p className="mt-1">Since 2021 · Direct team access</p>
        </div>

        <CornerPanel
          title="Web & SaaS"
          className="top-28 left-5 hidden lg:left-10 lg:block"
        >
          Full-stack delivery from discovery to launch — no handoff gaps.
        </CornerPanel>
        <CornerPanel
          title="Security in the loop"
          className="bottom-28 left-5 hidden lg:left-10 lg:block"
        >
          DevSecOps baked into CI/CD from day one, not bolted on at the end.
        </CornerPanel>
        <CornerPanel
          title="AI that ships"
          className="top-36 right-5 hidden max-w-[220px] lg:right-10 lg:block xl:top-40"
        >
          Practical LLM and RAG integrations with governance and observability.
        </CornerPanel>
        <CornerPanel
          title="E-commerce that converts"
          className="bottom-28 right-5 hidden lg:right-10 lg:block"
        >
          Headless, custom, or hybrid — tuned for revenue per visitor.
        </CornerPanel>

        <div className="relative z-10 flex min-h-dvh flex-col pb-10 sm:pb-12 lg:pb-8">
          <HeroMain />
          <ServicesSection />
          <ReferencesCarouselSection />
          <ProcessSection />
          <AboutSection />
          <SiteFooter />
        </div>
      </section>
    </>
  );
}
