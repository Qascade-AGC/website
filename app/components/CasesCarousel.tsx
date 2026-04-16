"use client";

import Link from "next/link";
import { CASE_STUDIES } from "../../data/portfolio";

/** Как окна Services/Process: серое стекло + blur (карточка компактнее — чуть выше альфа для читаемости). */
const CASE_PANEL =
  "w-[min(40rem,min(720px,92vw))] shrink-0 rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.32)] shadow-[0_20px_56px_-18px_rgba(0,0,0,0.65)] backdrop-blur-md sm:w-[min(44rem,min(800px,94vw))] lg:w-[min(48rem,min(920px,96vw))]";

function shortTeaser(service: string) {
  const part = service.split(/[+,]/)[0]?.trim() ?? service;
  if (part.length <= 36) return part;
  return `${part.slice(0, 34)}…`;
}

function CaseSlide({
  client,
  industry,
  service,
  caseN,
}: {
  client: string;
  industry: string;
  service: string;
  caseN: number;
}) {
  const teaser = shortTeaser(service);

  return (
    <div
      className={`${CASE_PANEL} flex flex-col overflow-hidden p-3 sm:p-4`}
      aria-label={`${client} case study preview`}
    >
      <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand/12 to-[rgba(42,42,42,0.45)] ring-1 ring-white/10">
        <span className="absolute top-2.5 right-3 font-mono text-[9px] tracking-wider text-zinc-600 uppercase">
          #{caseN}
        </span>
      </div>

      <div className="mt-3 flex min-h-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium tracking-wide text-brand/90 uppercase">
            {industry}
          </p>
          <p className="mt-0.5 font-sans text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
            {client}
          </p>
          <p className="mt-1 line-clamp-1 text-[12px] leading-snug text-zinc-500">
            {teaser}
          </p>
        </div>
        <Link
          href={`/portfolio#case-${caseN}`}
          onPointerDown={(e) => e.stopPropagation()}
          className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-brand transition-colors hover:border-brand/30 hover:bg-brand/10 hover:text-brand-soft"
        >
          Case →
        </Link>
      </div>
    </div>
  );
}

export function CasesCarousel() {
  return (
    <div
      className="relative mx-auto w-full max-w-[100vw]"
      data-case-carousel
      role="region"
      aria-label="Portfolio case studies carousel"
    >
      <div className="overflow-hidden py-1">
        <div
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain py-1 [scrollbar-width:none] touch-pan-x sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden scroll-px-[max(0.5rem,calc(50%-20rem))] sm:scroll-px-[max(0.5rem,calc(50%-22rem))] lg:scroll-px-[max(0.5rem,calc(50%-24rem))]"
          tabIndex={0}
        >
          {CASE_STUDIES.map((cs) => (
            <CaseSlide
              key={cs.n}
              client={cs.client}
              industry={cs.industry}
              service={cs.service}
              caseN={cs.n}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
