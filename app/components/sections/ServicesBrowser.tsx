"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { shouldAvoidLenis, useLenis } from "../LenisRoot";
import { useTouchLikeDevice } from "../useTouchLikeDevice";
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
    <div className="flex h-full min-h-0 flex-1 flex-col max-lg:h-auto max-lg:flex-none">
      <div className="flex shrink-0 items-start gap-3 border-b border-white/[0.08] bg-[rgba(37,37,37,0.28)] p-5 site-blur sm:p-7">
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

      <div className="flex min-h-0 flex-1 flex-col space-y-5 overflow-y-auto overscroll-contain p-5 sm:p-7 lg:p-8 max-lg:flex-none max-lg:overflow-visible max-lg:min-h-0">
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

      <div className="flex shrink-0 flex-col gap-3 border-t border-white/[0.08] bg-[rgba(37,37,37,0.28)] p-4 site-blur sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
        <p className="text-[10px] leading-relaxed text-zinc-600 lg:text-[11px]">
          Direct senior team · Weekly demos · No fluff
        </p>
        <Link
          href="/contact"
          className="brand-cta-glow inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-center text-[13px] font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(196,78,255,0.5)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_32px_-4px_rgba(196,78,255,0.6)] lg:px-6"
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
  const tabStripRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const touchLike = useTouchLikeDevice();

   useLayoutEffect(() => {
    const strip = tabStripRef.current;
    if (!strip) return;
    const btn = strip.querySelector<HTMLElement>(
      `[data-service-index="${selected}"]`,
    );
    btn?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "instant",
    });
  }, [selected]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    /** Лёгкий выезд: окно не «гаснет» (раньше 0.26 делало блок едва видимым). */
    const applyPanel = (t: number) => {
      const u = t * t * (3 - 2 * t);
      const ty = (1 - u) * 36;
      const opacity = 0.9 + 0.1 * u;
      panel.style.transform = `translate3d(0, ${ty}px, 0)`;
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

    if (shouldAvoidLenis()) {
      return () => {};
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
    <div ref={rootRef} className="mx-auto mt-10 w-full max-w-[1600px] px-2 sm:mt-12 sm:px-1 md:mt-16">
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

        {/* Окно как в ProcessSection: те же тени, скругления, min-height, вертикальный список. */}
        <div className="flex w-full justify-center lg:col-span-8 lg:justify-end xl:col-span-9">
          <div
            ref={panelRef}
            className={`w-full max-w-[1100px] transform-gpu overflow-hidden rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.26)] shadow-[0_32px_120px_-48px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.06)] site-blur sm:rounded-3xl ${
              touchLike === true ? "" : "will-change-[transform,opacity]"
            }`}
            style={
              touchLike === true
                ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
                : {
                    transform: "translate3d(0, 36px, 0)",
                    opacity: 0.9,
                  }
            }
          >
            <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[rgba(37,37,37,0.28)] px-4 py-3 site-blur sm:px-5">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
                what-we-build
              </span>
            </div>

            <p className="border-b border-white/[0.06] px-3 py-1.5 text-[10px] leading-snug text-zinc-500 lg:hidden">
              Scroll the list or tap a service to read details.
            </p>

            <div className="flex min-h-0 flex-col max-lg:max-h-none lg:grid lg:h-[min(78vh,700px)] lg:min-h-[min(85vh,640px)] lg:grid-cols-[minmax(0,300px)_1fr] lg:items-stretch lg:gap-0">
              <div
                ref={tabStripRef}
                className="flex min-h-0 shrink-0 flex-col gap-2 border-white/[0.08] bg-[rgba(42,42,42,0.2)] p-3 site-blur sm:p-4 max-lg:max-h-[min(28dvh,11rem)] max-lg:overflow-y-auto max-lg:overflow-x-hidden max-lg:border-b max-lg:[-webkit-overflow-scrolling:touch] lg:h-full lg:max-h-none lg:overflow-y-auto lg:overflow-x-hidden lg:border-r lg:border-b-0 [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Services"
                onKeyDown={(e) => {
                  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
                  e.preventDefault();
                  const dir = e.key === "ArrowDown" ? 1 : -1;
                  const next =
                    (selected + dir + SERVICES.length) % SERVICES.length;
                  setSelected(next);
                }}
              >
                {SERVICES.map((s, i) => {
                  const isActive = i === selected;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      role="tab"
                      id={`service-tab-${s.slug}`}
                      data-service-index={i}
                      aria-selected={isActive}
                      aria-controls="services-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setSelected(i)}
                      onKeyDown={(e) => {
                        if (e.key !== "Home" && e.key !== "End") return;
                        e.preventDefault();
                        setSelected(e.key === "Home" ? 0 : SERVICES.length - 1);
                      }}
                      className={`relative w-full rounded-xl border px-3 py-3.5 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 sm:px-4 lg:min-h-0 ${
                        isActive
                          ? "z-[1] border-white/20 bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_48px_-12px_rgba(255,255,255,0.12),0_16px_40px_-24px_rgba(0,0,0,0.8)]"
                          : "border-white/[0.07] bg-[rgba(42,42,42,0.14)] hover:border-white/[0.12] hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex gap-2 lg:gap-3">
                        <span
                          className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full max-lg:mt-0.5 lg:mt-1.5 ${
                            isActive
                              ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                              : "bg-brand shadow-[0_0_10px_rgba(196,78,255,0.5)]"
                          }`}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="text-[9px] font-medium tracking-wide text-zinc-500 lg:text-[10px]">
                            {i + 1}/{SERVICES.length}
                          </p>
                          <p
                            className={`mt-0.5 line-clamp-2 font-sans text-[12px] font-semibold leading-snug tracking-tight lg:line-clamp-none lg:text-sm xl:text-[15px] ${
                              isActive ? "text-white" : "text-zinc-300"
                            }`}
                          >
                            {s.headline}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                id="services-panel"
                role="tabpanel"
                aria-labelledby={`service-tab-${active.slug}`}
                className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[rgba(42,42,42,0.16)] site-blur max-lg:flex-none max-lg:overflow-visible lg:h-full"
              >
                <div
                  key={active.slug}
                  className="flex min-h-0 flex-1 flex-col max-lg:flex-none"
                >
                  <ServiceDetail s={active} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
