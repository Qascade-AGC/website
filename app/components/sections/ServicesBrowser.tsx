"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { useLenis } from "../LenisRoot";
import { TypewriterReveal } from "../TypewriterReveal";
import { ScrollRevealWordsHeading } from "../ScrollRevealWordsHeading";
import type { Service } from "../../../data/services";
import { SERVICES } from "../../../data/services";

function initials(headline: string) {
  return headline
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function InlineEmphasis({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function ServiceDetail({ s }: { s: Service }) {
  const secondary =
    s.bodyExtra ?? (s.slug === "devsecops" ? null : (s.footnote ?? null));

  return (
    <div className="flex h-full min-h-0 min-h-[280px] flex-1 flex-col bg-[rgba(42,42,42,0.16)] backdrop-blur-md sm:min-h-[360px]">
      <div className="flex shrink-0 items-start gap-3 border-b border-white/[0.08] bg-[rgba(37,37,37,0.28)] p-5 backdrop-blur-md sm:p-6 lg:p-7">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand/25 to-black text-[12px] font-bold tracking-tight text-white ring-1 ring-white/10"
          aria-hidden
        >
          {initials(s.headline)}
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
            Service
          </p>
          <p className="mt-1 font-sans text-xl font-semibold leading-snug text-white sm:text-2xl">
            {s.title}
          </p>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-5 sm:p-6 lg:p-7 lg:pr-8">
        <p className="text-[15px] leading-relaxed text-zinc-200 lg:text-[16px]">
          <InlineEmphasis text={s.body} />
        </p>
        {secondary ? (
          <p className="text-sm leading-relaxed text-zinc-500 lg:text-[15px]">
            <InlineEmphasis text={secondary} />
          </p>
        ) : null}

        {s.whyMatters?.length ? (
          <div>
            <p className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
              Why it matters
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400 lg:text-[15px]">
              {s.whyMatters.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="shrink-0 text-emerald-400/90" aria-hidden>
                    {"\u2713"}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <p className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            Key deliverables
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-zinc-300 lg:text-[15px]">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-zinc-600">—</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {s.tech ? (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 lg:px-5 lg:py-4">
            <p className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
              Tech stack
            </p>
            <p className="mt-2 font-mono text-[12px] leading-relaxed text-zinc-400 lg:text-[13px]">
              {s.tech}
            </p>
          </div>
        ) : null}

        {s.slug === "devsecops" && s.footnote ? (
          <p className="text-sm italic text-zinc-500 lg:text-[15px]">
            {s.footnote}
          </p>
        ) : null}
      </div>

      <div className="flex shrink-0 flex-col gap-3 border-t border-white/[0.08] bg-[rgba(37,37,37,0.28)] p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-7">
        <p className="text-[10px] leading-relaxed text-zinc-600 lg:text-[11px]">
          Direct senior team · Weekly demos · No fluff
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-emerald-500/90 px-5 py-2.5 text-center text-[13px] font-semibold text-black transition-colors hover:bg-emerald-400 lg:px-6"
        >
          {s.cta}
        </Link>
      </div>
    </div>
  );
}

export function ServicesBrowser() {
  const [selected, setSelected] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPanel = (t: number) => {
      const u = t * t * (3 - 2 * t);
      const x = (1 - u) * 72;
      const opacity = 0.28 + 0.72 * u;
      panel.style.transform = `translate3d(${x}px, 0, 0)`;
      panel.style.opacity = String(opacity);
    };

    const compute = () => {
      if (mq.matches) {
        panel.style.transform = "";
        panel.style.opacity = "";
        return;
      }
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.9;
      const end = vh * 0.22;
      const raw = (start - rect.top) / (start - end);
      const t = Math.min(1, Math.max(0, raw));
      applyPanel(t);
    };

    if (mq.matches) {
      compute();
      const onMq = () => compute();
      mq.addEventListener("change", onMq);
      return () => mq.removeEventListener("change", onMq);
    }

    let raf = 0;
    const tick = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        compute();
      });
    };

    if (lenis) {
      const unsub = lenis.on("scroll", tick);
      tick();
      window.addEventListener("resize", compute, { passive: true });
      return () => {
        unsub();
        window.removeEventListener("resize", compute);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", compute, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", compute);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [lenis]);

  const active = SERVICES[selected] ?? SERVICES[0];

  return (
    <div ref={rootRef} className="mx-auto mt-12 w-full max-w-[1600px] px-1 sm:mt-16">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* Слева только заголовок и подзаголовок */}
        <div className="text-left lg:sticky lg:top-28 lg:col-span-4 lg:max-w-xl lg:self-start xl:col-span-3">
          <ScrollRevealWordsHeading
            as="h2"
            text="What We Build"
            staggerMs={72}
            className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          />
          <TypewriterReveal
            text="We focus on six core areas where we deliver the most value. No fluff. No filler. Just solutions that work."
            className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base lg:mt-6"
          />
        </div>

        {/* Окно справа: прогресс по скроллу (Lenis / native), без CSS transition — следует скроллу */}
        <div
          ref={panelRef}
          className="transform-gpu will-change-[transform,opacity] lg:col-span-8 xl:col-span-9"
          style={{
            transform: "translate3d(72px, 0, 0)",
            opacity: 0.28,
          }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.26)] shadow-[0_20px_56px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] bg-[rgba(37,37,37,0.28)] px-4 py-3.5 backdrop-blur-md sm:px-6">
              <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-[10px] font-medium tracking-wide text-brand/90 uppercase">
                  Services
                </span>
                <span className="truncate font-mono text-[10px] text-zinc-500 sm:text-[11px]">
                  {active.slug}.md
                </span>
              </div>
              <span
                className="shrink-0 font-mono text-[9px] tracking-wider text-zinc-600 uppercase"
                aria-hidden
              >
                #{selected + 1}
              </span>
            </div>

            <div className="flex h-[min(72vh,720px)] min-h-[420px] flex-col lg:flex-row lg:items-stretch">
              <div
                className="flex min-h-0 gap-2 overflow-x-auto border-b border-white/[0.08] bg-[rgba(42,42,42,0.2)] p-3 backdrop-blur-md sm:p-4 lg:w-[min(100%,300px)] lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-white/[0.08] xl:w-[320px]"
                role="tablist"
                aria-label="Services"
              >
                {SERVICES.map((s, i) => (
                  <button
                    key={s.slug}
                    type="button"
                    role="tab"
                    aria-selected={selected === i}
                    onClick={() => setSelected(i)}
                    className={`min-w-[232px] shrink-0 rounded-xl border px-4 py-3.5 text-left transition-all lg:min-w-0 ${
                      selected === i
                        ? "border-brand/25 bg-brand/[0.07] shadow-[0_8px_28px_-14px_rgba(0,0,0,0.65)] ring-1 ring-brand/10"
                        : "border-white/[0.08] bg-[rgba(42,42,42,0.12)] hover:border-white/12 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="text-[10px] font-medium tracking-[0.15em] text-zinc-500 uppercase">
                      Expertise
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      {s.headline}
                    </span>
                  </button>
                ))}
              </div>

              <div
                key={active.slug}
                className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col"
              >
                <ServiceDetail s={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
