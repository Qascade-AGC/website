"use client";

import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";
import { useI18n } from "../../../lib/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-4xl scroll-mt-28 px-4 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20 lg:max-w-6xl"
    >
      <div className="text-center">
        <ScrollRevealHeading
          as="h2"
          className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {a.title}
        </ScrollRevealHeading>
        <TypewriterReveal
          text={a.subtitle}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
        />
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
        {a.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {a.team.map((m) => (
          <div
            key={m.role}
            className="rounded-2xl border border-white/[0.08] bg-black/[0.26] p-6 site-blur"
          >
            <p className="text-sm font-semibold text-white">{m.name}</p>
            <p className="mt-1 text-[11px] font-medium tracking-wide text-brand uppercase">
              {m.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/[0.08] bg-black/[0.26] p-8 site-blur">
        <ScrollRevealHeading
          as="h3"
          level="subsection"
          className="text-lg font-semibold text-white"
        >
          {a.trustTitle}
        </ScrollRevealHeading>
        <ul className="mt-6 space-y-3 text-sm text-zinc-300">
          {a.trustItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="shrink-0 text-brand" aria-hidden>
                {"\u2713"}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
