"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import type { CaseStudy } from "../../data/portfolio";

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

function ScreenshotSlide({
  shot,
  index,
}: {
  shot: NonNullable<CaseStudy["screenshots"]>[number];
  index: number;
}) {
  const hue = (index * 47) % 360;
  if (shot.src) {
    const clip = "inset(0 round 1rem)";
    return (
      <div
        className="relative h-[min(52vh,420px)] w-full overflow-hidden rounded-2xl bg-zinc-950 sm:h-[min(56vh,480px)]"
        style={{
          clipPath: clip,
          WebkitClipPath: clip,
        }}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="rounded-2xl object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(896px, 92vw)"
          priority={index === 0}
        />
      </div>
    );
  }
  return (
    <div
      className="relative h-[min(52vh,420px)] w-full overflow-hidden rounded-2xl sm:h-[min(56vh,480px)]"
      style={{
        background: `linear-gradient(135deg, hsla(${hue}, 35%, 18%, 0.9), rgba(24, 24, 27, 0.95))`,
      }}
    >
      <span className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(196,78,255,0.14),transparent_55%)]" />
      <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
        Preview
      </span>
    </div>
  );
}

/** Вертикальная лента: листаешь окно сверху вниз, без горизонтальных стрелок. */
function ScreenshotGallery({
  shots,
  studyN,
}: {
  shots: NonNullable<CaseStudy["screenshots"]>;
  studyN: number;
}) {
  return (
    <div className="space-y-4">
      {shots.map((shot, i) => (
        <figure
          key={`${studyN}-${shot.alt}-${i}`}
          className="m-0 overflow-hidden rounded-2xl bg-zinc-950/40"
        >
          <ScreenshotSlide shot={shot} index={i} />
          <figcaption className="px-4 pb-3 pt-4 text-[12px] leading-snug text-zinc-400 sm:px-6">
            <span className="mr-2 font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
              {i + 1} / {shots.length}
            </span>
            {shot.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CaseStudyModal({ study, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = study != null;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
  }, [open, study?.n]);

  if (!study) return null;

  const shots = study.screenshots?.length
    ? study.screenshots
    : [{ alt: `${study.client} — product preview` }, { alt: "Interface overview" }];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 site-blur transition-opacity"
        aria-label="Close case study"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[min(92dvh,920px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/[0.05] bg-[#0a0a0a] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:rounded-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-widest text-brand uppercase">
              {study.industry}
            </p>
            <h2
              id={titleId}
              className="mt-1 font-sans text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              {study.client}
            </h2>
            <p className="mt-0.5 text-[13px] text-zinc-500">
              {study.service} · {study.timeline}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="shrink-0 rounded-lg border border-white/[0.08] px-3 py-1.5 text-[12px] font-medium text-zinc-300 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div
          className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5 [-webkit-overflow-scrolling:touch]"
          onWheel={(e) => e.stopPropagation()}
        >
          <section>
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              Screenshots
            </h3>
            <div className="mt-3 -mx-4 sm:-mx-6">
              <ScreenshotGallery shots={shots} studyN={study.n} />
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              The challenge
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              {study.challenge}
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              Our solution
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              {study.solution}
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              Key features
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              {study.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-zinc-600">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-6 text-xs text-zinc-500">
            <span className="font-semibold text-zinc-400">Tech stack:</span>{" "}
            {study.tech}
          </p>

          <section className="mt-6">
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              Results
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              {study.results.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-brand">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </section>

          {study.quote ? (
            <blockquote className="mt-6 border-l border-brand/35 pl-4 text-sm italic leading-relaxed text-zinc-400">
              &ldquo;{study.quote.text}&rdquo;
              <footer className="mt-2 text-[13px] not-italic text-zinc-500">
                — {study.quote.author}
              </footer>
            </blockquote>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3 pt-2">
            <Link
              href={`/portfolio#case-${study.n}`}
              className="text-sm font-semibold text-brand hover:text-brand-soft"
              onClick={onClose}
            >
              Open full page on Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
