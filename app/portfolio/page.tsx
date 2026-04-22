import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "../../data/portfolio";
import { ScrollRevealHeading } from "../components/ScrollRevealHeading";
import { TypewriterReveal } from "../components/TypewriterReveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Real products. Real results.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-dvh bg-transparent px-3 pb-[max(6rem,env(safe-area-inset-bottom,0px)+4rem)] pt-[max(7rem,env(safe-area-inset-top,0px)+5.5rem)] sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollRevealHeading
            as="h1"
            level="display"
            className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Our Work
          </ScrollRevealHeading>
          <TypewriterReveal
            text="Real products. Real results. Here are seven projects that show how we think, build, and deliver."
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-24">
          {CASE_STUDIES.map((cs) => {
            const hero = cs.screenshots?.find((s) => Boolean(s.src));
            const heroSrc = hero?.src;
            const heroAlt = hero?.alt ?? `${cs.client} — preview`;

            return (
            <article
              key={cs.n}
              className="scroll-mt-32 rounded-2xl border border-white/[0.14] bg-black/[0.28] p-5 site-blur sm:scroll-mt-28 sm:p-10"
              id={`case-${cs.n}`}
            >
              <p className="text-[11px] font-semibold tracking-widest text-brand uppercase">
                Case study
              </p>
              <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-black to-black ring-1 ring-white/10">
                {heroSrc ? (
                  <Image
                    src={heroSrc}
                    alt={heroAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-zinc-400">
                <span>
                  <span className="text-zinc-600">Client:</span> {cs.client}
                </span>
                <span>
                  <span className="text-zinc-600">Industry:</span>{" "}
                  {cs.industry}
                </span>
                <span>
                  <span className="text-zinc-600">Service:</span> {cs.service}
                </span>
                <span>
                  <span className="text-zinc-600">Timeline:</span>{" "}
                  {cs.timeline}
                </span>
              </div>

              <h2 className="mt-8 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                The challenge
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                {cs.challenge}
              </p>

              <h2 className="mt-8 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Our solution
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                {cs.solution}
              </p>

              <h2 className="mt-8 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Key features
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {cs.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-zinc-600">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-400">Tech stack:</span>{" "}
                {cs.tech}
              </p>

              <h2 className="mt-8 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                The results
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {cs.results.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-brand">—</span>
                    {r}
                  </li>
                ))}
              </ul>

              {cs.quote ? (
                <blockquote className="mt-8 border-l-2 border-brand/50 pl-4 text-sm italic leading-relaxed text-zinc-400">
                  &ldquo;{cs.quote.text}&rdquo;
                  <footer className="mt-2 text-[13px] not-italic text-zinc-500">
                    — {cs.quote.author}
                  </footer>
                </blockquote>
              ) : null}
            </article>
            );
          })}
        </div>

        <div className="mx-auto mt-24 max-w-2xl rounded-2xl border border-white/[0.14] bg-black/[0.28] p-10 text-center site-blur">
          <h2 className="text-xl font-semibold text-white">
            Your Project Could Be Next
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Every case study above started with a single conversation.
            Let&apos;s have yours.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-brand px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(196,205,216,0.45)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_32px_-4px_rgba(196,205,216,0.55)]"
          >
            Start Your Project →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
