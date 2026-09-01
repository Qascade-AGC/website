"use client";

import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { TypewriterReveal } from "./TypewriterReveal";
import { useI18n } from "../../lib/i18n/LanguageProvider";

const CORNER_CLASSES = [
  "top-28 left-5 hidden lg:left-10 lg:block",
  "bottom-28 left-5 hidden lg:left-10 lg:block",
  "top-36 right-5 hidden max-w-[220px] lg:right-10 lg:block xl:top-40",
  "bottom-28 right-5 hidden lg:right-10 lg:block",
] as const;

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

export function HeroSplashTagline() {
  const { t } = useI18n();
  return (
    <p className="mb-4 max-w-md text-balance text-center text-sm leading-relaxed text-white/70 sm:mb-5 md:text-base">
      {t.hero.splashTagline}
    </p>
  );
}

export function HeroScrollHint() {
  const { t } = useI18n();
  return (
    <p className="scroll-hint-breathe absolute bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] left-1/2 z-10 -translate-x-1/2 text-center text-[10px] tracking-[0.25em] text-zinc-500 uppercase sm:bottom-8 sm:text-[11px]">
      {t.hero.scrollHint}
    </p>
  );
}

export function HeroStudioDecor() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <>
      <div
        className="pointer-events-none absolute top-24 right-5 z-[3] hidden max-w-[200px] rounded-xl border border-white/[0.08] bg-black/[0.22] px-3 py-2.5 text-[10px] leading-relaxed text-zinc-500 site-blur sm:right-8 lg:block"
        aria-hidden
      >
        <p className="font-medium text-zinc-400">{h.statsLine1}</p>
        <p className="mt-1">{h.statsLine2}</p>
      </div>
      {h.cornerPanels.map((panel, i) => (
        <CornerPanel
          key={panel.title}
          title={panel.title}
          className={CORNER_CLASSES[i]!}
        >
          {panel.body}
        </CornerPanel>
      ))}
    </>
  );
}

export function BelowFoldFallbackI18n({ minH }: { minH: string }) {
  const { t } = useI18n();
  return (
    <div
      className={`w-full ${minH}`}
      aria-busy="true"
      aria-label={t.common.loading}
    />
  );
}
