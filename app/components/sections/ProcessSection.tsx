"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { shouldAvoidLenis, useLenis } from "../LenisRoot";
import { useTouchLikeDevice } from "../useTouchLikeDevice";
import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x));
}

function smoothstep(t: number) {
  const c = clamp01(t);
  return c * c * (3 - 2 * c);
}

const PHASES = [
  {
    num: "01",
    title: "DISCOVERY",
    duration: "1–2 weeks",
    body: "We start by understanding your business, your users, and your goals. Not with a generic questionnaire — with real conversations, market analysis, and tough questions that save you months of rework later.",
    happens: [
      "Stakeholder interviews & goal alignment",
      "User research & competitor analysis",
      "Feature scoping & prioritization (MoSCoW method)",
      "Technical architecture planning",
      "Security & compliance requirements assessment",
      "Project roadmap with fixed milestones",
    ],
    deliverable:
      "Project Brief — a single document that defines scope, timeline, tech stack, budget, and success metrics. You approve it before we write a single line of code.",
  },
  {
    num: "02",
    title: "DESIGN",
    duration: "2–3 weeks",
    body: "We design how your product looks, feels, and works. Every screen. Every interaction. Every edge case. You see clickable prototypes in Figma before development starts — so there are zero visual surprises at launch.",
    happens: [
      "Wireframes for all core user flows",
      "Visual design system (colors, typography, components)",
      "High-fidelity UI mockups — desktop & mobile",
      "Clickable prototype for user testing",
      "Design review sessions with your team",
    ],
    deliverable:
      "Approved Figma prototype + complete design system ready for pixel-perfect development.",
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    duration: "4–10 weeks (depends on scope)",
    body: "This is where your product becomes real. We work in 1-week sprints with demos every Friday. You see progress weekly — not monthly. If priorities shift, we adapt fast. Security scanning runs automatically on every commit.",
    happens: [
      "Frontend & backend development in parallel",
      "CI/CD pipeline with automated security checks",
      "Weekly sprint demos — live, working software",
      "Continuous integration & automated testing",
      "Third-party integrations (payments, APIs, analytics)",
      "Code reviews & QA on every feature",
    ],
    deliverable:
      "Fully functional, tested product on a staging environment. You can click through everything before launch.",
  },
  {
    num: "04",
    title: "LAUNCH",
    duration: "1 week",
    body: "We don't just push code and disappear. We handle deployment, monitoring setup, security hardening, performance optimization, and provide 30 days of post-launch support to catch and fix anything that comes up in the real world.",
    happens: [
      "Production deployment & server configuration",
      "Infrastructure security hardening",
      "Performance & security audit",
      "Analytics & monitoring setup",
      "Team handoff & documentation",
      "30-day post-launch support (included)",
    ],
    deliverable:
      "Live product + technical documentation + monitoring dashboards + peace of mind.",
  },
] as const;

function titleCasePhase(t: string) {
  return t.charAt(0) + t.slice(1).toLowerCase();
}

export function ProcessSection() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active]!;
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const touchLike = useTouchLikeDevice();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const compute = () => {
      if (mq.matches) {
        panel.style.transform = "";
        panel.style.opacity = "";
        return;
      }
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const h = Math.max(rect.height, 1);

      const enterRaw =
        (vh * 0.9 - rect.top) / (vh * 0.9 - vh * 0.34);
      const enterP = smoothstep(clamp01(enterRaw));

      /* Выезд / затухание только когда окно реально уходит вверх — порог ниже, диапазон длиннее */
      let exitRaw = 0;
      const exitStart = vh * 0.1;
      if (rect.top < exitStart) {
        exitRaw = (exitStart - rect.top) / (exitStart + h * 0.62);
      }
      const exitP = smoothstep(clamp01(exitRaw));

      const ty = (1 - enterP) * 104 - exitP * 92;
      const op = (0.26 + 0.74 * enterP) * (1 - 0.52 * exitP);

      panel.style.transform = `translate3d(0, ${ty}px, 0)`;
      panel.style.opacity = String(Math.max(0.1, Math.min(1, op)));
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

  return (
    <section
      id="process"
      className="relative z-10 scroll-mt-28 px-4 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <ScrollRevealHeading
          as="h2"
          id="process-heading"
          className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          How we work
        </ScrollRevealHeading>
        <TypewriterReveal
          text="Four phases, one framework. Pick a step to see what happens inside."
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base"
        />
      </div>

      <div ref={rootRef} className="mx-auto mt-12 max-w-[1100px]">
        <div
          ref={panelRef}
          className={`transform-gpu overflow-hidden rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.26)] shadow-[0_32px_120px_-48px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.06)] site-blur sm:rounded-3xl ${
            touchLike === true ? "" : "will-change-[transform,opacity]"
          }`}
          style={
            touchLike === true
              ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
              : {
                  transform: "translate3d(0, 104px, 0)",
                  opacity: 0.26,
                }
          }
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[rgba(37,37,37,0.28)] px-4 py-3 site-blur sm:px-5">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
              how-we-work
            </span>
          </div>

          <div className="flex min-h-[min(56dvh,440px)] flex-col sm:min-h-[min(64dvh,520px)] lg:grid lg:h-[min(78vh,700px)] lg:min-h-[min(85vh,640px)] lg:grid-cols-[minmax(0,300px)_1fr] lg:items-stretch lg:gap-0">
            {/* Sidebar */}
            <div
              className="flex min-h-0 flex-col gap-2 border-b border-white/[0.08] bg-[rgba(42,42,42,0.2)] p-3 site-blur sm:p-4 lg:h-full lg:overflow-y-auto lg:border-r lg:border-b-0"
              role="tablist"
              aria-label="Process phases"
              onKeyDown={(e) => {
                if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
                e.preventDefault();
                const dir = e.key === "ArrowDown" ? 1 : -1;
                const next = (active + dir + PHASES.length) % PHASES.length;
                setActive(next);
              }}
            >
              {PHASES.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.num}
                    type="button"
                    role="tab"
                    id={`process-tab-${p.num}`}
                    aria-selected={isActive}
                    aria-controls="process-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key !== "Home" && e.key !== "End") return;
                      e.preventDefault();
                      setActive(e.key === "Home" ? 0 : PHASES.length - 1);
                    }}
                    className={`relative w-full rounded-xl border px-3 py-3.5 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 sm:px-4 ${
                      isActive
                        ? "z-[1] border-white/20 bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_48px_-12px_rgba(255,255,255,0.12),0_16px_40px_-24px_rgba(0,0,0,0.8)]"
                        : "border-white/[0.07] bg-[rgba(42,42,42,0.14)] hover:border-white/[0.12] hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex gap-3">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isActive
                            ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                            : "bg-brand shadow-[0_0_10px_rgba(196,78,255,0.5)]"
                        }`}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium tracking-wide text-zinc-500">
                          Phase {p.num} · {p.duration}
                        </p>
                        <p
                          className={`mt-0.5 font-sans text-sm font-semibold tracking-tight sm:text-[15px] ${
                            isActive ? "text-white" : "text-zinc-300"
                          }`}
                        >
                          {titleCasePhase(p.title)}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <div
              id="process-panel"
              role="tabpanel"
              aria-labelledby={`process-tab-${phase.num}`}
              className="relative flex min-h-0 flex-1 flex-col bg-[rgba(42,42,42,0.16)] site-blur lg:h-full"
            >
              <div
                key={phase.num}
                className="how-we-work-panel flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain p-5 sm:p-7 lg:p-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand/25 to-black text-xs font-bold tracking-tight text-white ring-1 ring-white/15"
                    aria-hidden
                  >
                    {phase.num}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
                      Phase {phase.num}
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-500">
                      <span className="text-zinc-600">Timeline ·</span>{" "}
                      {phase.duration}
                    </p>
                    <h3 className="mt-3 font-sans text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                      {titleCasePhase(phase.title)}
                    </h3>
                  </div>
                </div>

                <hr className="my-6 border-white/[0.08]" />

                <div className="min-h-0 flex-1 space-y-6">
                  <p className="text-[15px] leading-relaxed text-zinc-400 sm:text-[16px]">
                    {phase.body}
                  </p>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                      What happens
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm leading-snug text-zinc-300 sm:text-[15px]">
                      {phase.happens.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-zinc-600" aria-hidden>
                            —
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 border-t border-white/[0.06] pt-5 text-xs leading-relaxed text-zinc-600">
                  <span className="font-medium text-zinc-500">Deliverable ·</span>{" "}
                  {phase.deliverable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1100px] text-center">
        <Link
          href="/contact"
          className="inline-flex h-12 w-full max-w-sm items-center justify-center rounded-lg bg-brand px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(196,78,255,0.45)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_32px_-4px_rgba(196,78,255,0.55)] sm:w-auto sm:max-w-none"
        >
          Start with discovery →
        </Link>
      </div>
    </section>
  );
}
