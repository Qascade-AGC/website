import { HeroScatterTitle } from "./HeroScatterTitle";
import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { TypewriterReveal } from "./TypewriterReveal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SplashContent } from "./SplashContent";
import { AboutSection } from "./sections/AboutSection";
import { HeroMain } from "./sections/HeroMain";
import { ProcessSection } from "./sections/ProcessSection";
import { ReferencesCarouselSection } from "./sections/ReferencesCarouselSection";
import { ServicesSection } from "./sections/ServicesSection";

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
      className={`absolute z-0 max-w-[min(100%,240px)] space-y-2 ${className}`}
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
        <SplashContent>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 pb-32">
            <p className="mb-5 max-w-md text-center text-sm leading-relaxed text-white/65 md:text-base">
              From sketch to scale — products that ship.
            </p>
            <HeroScatterTitle />
          </div>

          <p className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-[11px] tracking-[0.25em] text-zinc-600 uppercase">
            Scroll to explore
          </p>
        </SplashContent>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[min(32vh,240px)] bg-gradient-to-b from-transparent via-[#000000]/72 to-[#000000] [mask-image:linear-gradient(to_top,rgb(0,0,0)_55%,transparent_100%)]"
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
        <div
          className="pointer-events-none absolute top-24 right-5 z-0 hidden max-w-[200px] rounded-xl border border-white/[0.08] bg-black/[0.22] px-3 py-2.5 text-[10px] leading-relaxed text-zinc-500 backdrop-blur-sm sm:right-8 lg:block"
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

        <div className="relative z-10 flex min-h-dvh flex-col pb-8">
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
