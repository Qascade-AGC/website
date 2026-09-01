"use client";

import Link from "next/link";
import { useI18n } from "../../../lib/i18n/LanguageProvider";
import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";

export function HeroMain() {
  const { t } = useI18n();
  const m = t.heroMain;

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto max-w-4xl scroll-mt-28 px-3 pt-6 pb-14 text-center sm:scroll-mt-24 sm:px-6 sm:pt-12 sm:pb-20"
    >
      <ScrollRevealHeading
        as="h1"
        level="display"
        className="text-balance font-sans text-[clamp(1.75rem,5.2vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-white sm:leading-[1.1]"
      >
        {m.title}
      </ScrollRevealHeading>
      <TypewriterReveal
        text={m.subtitle}
        className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
      />
      <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
        <Link
          href="/contact"
          className="brand-cta-glow inline-flex h-12 min-h-12 w-full min-w-0 items-center justify-center rounded-lg bg-brand px-6 text-sm font-semibold text-zinc-950 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:bg-brand-hover active:scale-[0.98] sm:w-auto sm:min-w-[180px]"
        >
          {m.cta1}
        </Link>
        <Link
          href="/#work-preview"
          className="inline-flex h-12 min-h-12 w-full min-w-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] px-6 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-300 ease-out hover:border-white/25 hover:bg-white/12 hover:shadow-[0_0_28px_-12px_rgba(255,255,255,0.12)] active:scale-[0.98] sm:w-auto sm:min-w-[180px]"
        >
          {m.cta2}
        </Link>
      </div>
      <p className="mt-8 text-[13px] leading-relaxed text-zinc-500">
        {m.trustLine}
      </p>
    </section>
  );
}
