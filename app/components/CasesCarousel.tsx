"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CaseStudy } from "../../data/portfolio";
import { CASE_STUDIES } from "../../data/portfolio";
import { CaseStudyModal } from "./CaseStudyModal";

/** Как окна Services/Process: серое стекло + blur (карточка компактнее — чуть выше альфа для читаемости). */
const CASE_PANEL =
  "w-[min(40rem,min(720px,92vw))] shrink-0 rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.32)] text-left shadow-[0_20px_56px_-18px_rgba(0,0,0,0.65)] site-blur sm:w-[min(44rem,min(800px,94vw))] lg:w-[min(48rem,min(920px,96vw))]";

function shortTeaser(service: string) {
  const part = service.split(/[+,]/)[0]?.trim() ?? service;
  if (part.length <= 36) return part;
  return `${part.slice(0, 34)}…`;
}

function CaseSlide({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: (cs: CaseStudy) => void;
}) {
  const teaser = shortTeaser(study.service);
  const thumb = study.screenshots?.find((s) => Boolean(s.src))?.src;

  return (
    <button
      type="button"
      className={`${CASE_PANEL} flex cursor-pointer flex-col overflow-hidden p-3 text-left transition-[transform,box-shadow] duration-200 hover:border-white/20 hover:shadow-[0_24px_64px_-18px_rgba(0,0,0,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.99] sm:p-4`}
      aria-label={`Open case study: ${study.client}`}
      onClick={() => onOpen(study)}
    >
      <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand/12 to-[rgba(42,42,42,0.45)] ring-1 ring-white/10">
        {thumb ? (
          <Image
            src={thumb}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 92vw, 720px"
          />
        ) : null}
      </div>

      <div className="mt-3 flex min-h-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium tracking-wide text-brand/90 uppercase">
            {study.industry}
          </p>
          <p className="mt-0.5 font-sans text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
            {study.client}
          </p>
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-zinc-500 sm:line-clamp-1">
            {teaser}
          </p>
        </div>
        <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-brand">
          Details →
        </span>
      </div>
    </button>
  );
}

export function CasesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalStudy, setModalStudy] = useState<CaseStudy | null>(null);

  const closeModal = useCallback(() => setModalStudy(null), []);

  /** Вертикальное колесо над витриной → горизонтальный scroll; на краях — страница (Lenis). */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth + 1) return;
      const absY = Math.abs(e.deltaY);
      const absX = Math.abs(e.deltaX);
      if (absY < absX) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0.5;
      const atEnd = el.scrollLeft >= maxScroll - 1.5;

      if (e.deltaY < 0 && atStart) return;
      if (e.deltaY > 0 && atEnd) return;

      e.preventDefault();
      e.stopPropagation();
      el.scrollLeft += e.deltaY;
    };

    const opts: AddEventListenerOptions = { passive: false, capture: true };
    el.addEventListener("wheel", onWheel, opts);
    return () => el.removeEventListener("wheel", onWheel, opts);
  }, []);

  return (
    <>
      <div
        className="relative mx-auto w-full max-w-[100vw]"
        data-case-carousel
        role="region"
        aria-label="Portfolio case studies carousel"
      >
        <div className="overflow-hidden py-1">
          <div
            ref={scrollRef}
            data-case-carousel-scroll
            className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain py-1 [scrollbar-width:none] touch-pan-x sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden scroll-px-[max(0.5rem,calc(50%-20rem))] sm:scroll-px-[max(0.5rem,calc(50%-22rem))] lg:scroll-px-[max(0.5rem,calc(50%-24rem))]"
            tabIndex={0}
          >
            {CASE_STUDIES.map((cs) => (
              <CaseSlide key={cs.n} study={cs} onOpen={setModalStudy} />
            ))}
          </div>
        </div>
      </div>
      <CaseStudyModal study={modalStudy} onClose={closeModal} />
    </>
  );
}
