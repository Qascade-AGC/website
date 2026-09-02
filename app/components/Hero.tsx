import dynamic from "next/dynamic";
import { HeroScatterTitle } from "./HeroScatterTitle";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { SplashContent } from "./SplashContent";
import { HeroMain } from "./sections/HeroMain";
import { HomeContactSection } from "./HomeContactSection";
import {
  BelowFoldFallbackI18n,
  HeroScrollHint,
  HeroSplashTagline,
  HeroStudioDecor,
} from "./HeroI18nParts";

const ServicesSection = dynamic(
  () =>
    import("./sections/ServicesSection").then((m) => ({
      default: m.ServicesSection,
    })),
  { loading: () => <BelowFoldFallbackI18n minH="min-h-[36rem]" /> },
);

const ReferencesCarouselSection = dynamic(
  () =>
    import("./sections/ReferencesCarouselSection").then((m) => ({
      default: m.ReferencesCarouselSection,
    })),
  { loading: () => <BelowFoldFallbackI18n minH="min-h-[22rem]" /> },
);

const ProcessSection = dynamic(
  () =>
    import("./sections/ProcessSection").then((m) => ({
      default: m.ProcessSection,
    })),
  { loading: () => <BelowFoldFallbackI18n minH="min-h-[40rem]" /> },
);

const AboutSection = dynamic(
  () =>
    import("./sections/AboutSection").then((m) => ({
      default: m.AboutSection,
    })),
  { loading: () => <BelowFoldFallbackI18n minH="min-h-[48rem]" /> },
);

const PricingSection = dynamic(
  () =>
    import("./sections/PricingSection").then((m) => ({
      default: m.PricingSection,
    })),
  { loading: () => <BelowFoldFallbackI18n minH="min-h-[32rem]" /> },
);

export function Hero() {
  return (
    <>
      <SiteNav />

      <section
        id="splash"
        className="relative isolate flex min-h-dvh flex-col overflow-x-clip bg-transparent"
      >
        {/* Размытие фона (видео/Spline): md+ — backdrop; на узких тач-экранах только затемнение (см. globals). */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] site-blur bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42),rgba(0,0,0,0.58))] md:bg-[radial-gradient(ellipse_100%_58%_at_50%_-8%,rgba(0,0,0,0.14),transparent_56%),linear-gradient(to_bottom,rgba(0,0,0,0.26),rgba(0,0,0,0.4))]"
          aria-hidden
        />
        <SplashContent>
          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+5rem))] pb-28 sm:px-6 sm:pb-32 md:pt-20">
            <HeroSplashTagline />
            <HeroScatterTitle />
          </div>
          <HeroScrollHint />
        </SplashContent>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[min(36vh,280px)] bg-gradient-to-b from-transparent via-[#000000]/78 to-[#000000] [mask-image:linear-gradient(to_top,rgb(0,0,0)_48%,transparent_100%)] sm:h-[min(32vh,260px)]"
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
        <HeroStudioDecor />

        <div className="relative z-10 flex min-h-dvh flex-col pb-10 sm:pb-12 lg:pb-8">
          <HeroMain />
          <ReferencesCarouselSection />
          <ServicesSection />
          <PricingSection />
          <ProcessSection />
          <AboutSection />
          <HomeContactSection />
          <SiteFooter />
        </div>
      </section>
    </>
  );
}
