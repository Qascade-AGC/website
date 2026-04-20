"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import type { CaseStudy } from "../../data/portfolio";

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

function ScreenshotFrame({
  shot,
  index,
}: {
  shot: NonNullable<CaseStudy["screenshots"]>[number];
  index: number;
}) {
  const hue = (index * 47) % 360;
  if (shot.src) {
    return (
      <figure className="overflow-hidden rounded-xl ring-1 ring-white/10">
        <div className="relative aspect-video w-full bg-zinc-900">
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
        <figcaption className="px-3 py-2 text-[12px] leading-snug text-zinc-500">
          {shot.alt}
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="overflow-hidden rounded-xl ring-1 ring-white/10">
      <div
        className="relative aspect-video w-full"
        style={{
          background: `linear-gradient(135deg, hsla(${hue}, 35%, 18%, 0.9), rgba(24, 24, 27, 0.95))`,
        }}
      >
        <span className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(196,78,255,0.14),transparent_55%)]" />
        <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
          Preview
        </span>
      </div>
      <figcaption className="px-3 py-2 text-[12px] leading-snug text-zinc-400">
        {shot.alt}
      </figcaption>
    </figure>
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
        className="relative z-[1] flex max-h-[min(92dvh,920px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/[0.12] bg-[#0a0a0a] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:rounded-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-widest text-brand uppercase">
              Case #{study.n} · {study.industry}
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
            className="shrink-0 rounded-lg border border-white/15 px-3 py-1.5 text-[12px] font-medium text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
          <section>
            <h3 className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
              Screenshots
            </h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-1">
              {shots.map((shot, i) => (
                <ScreenshotFrame key={`${shot.alt}-${i}`} shot={shot} index={i} />
              ))}
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
            <blockquote className="mt-6 border-l-2 border-brand/50 pl-4 text-sm italic leading-relaxed text-zinc-400">
              &ldquo;{study.quote.text}&rdquo;
              <footer className="mt-2 text-[13px] not-italic text-zinc-500">
                — {study.quote.author}
              </footer>
            </blockquote>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
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
