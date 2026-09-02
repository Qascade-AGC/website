"use client";

import Link from "next/link";
import {
  formatPriceRange,
  SERVICE_PRICING,
  SMB_PACKAGES,
} from "../../../data/pricing";
import { getServices } from "../../../data/services";
import { useI18n } from "../../../lib/i18n/LanguageProvider";
import { getPricingMessages } from "../../../lib/i18n/pricing";
import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";

function PriceCell({
  primary,
  note,
}: {
  primary: string;
  note?: string;
}) {
  return (
    <div>
      <p className="font-semibold tracking-tight text-brand">{primary}</p>
      {note ? (
        <p className="mt-1 text-[11px] leading-snug text-zinc-500">{note}</p>
      ) : null}
    </div>
  );
}

export function PricingSection() {
  const { locale } = useI18n();
  const p = getPricingMessages(locale);
  const services = getServices(locale);

  return (
    <section
      id="pricing"
      className="relative z-10 scroll-mt-28 px-4 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl text-center">
        <ScrollRevealHeading
          as="h2"
          id="pricing-heading"
          className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {p.title}
        </ScrollRevealHeading>
        <TypewriterReveal
          text={p.subtitle}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base"
        />
        <p className="mx-auto mt-3 max-w-xl text-[11px] text-zinc-600">{p.nettoNote}</p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.1] bg-black/[0.28] p-5 site-blur sm:p-6">
            <h3 className="text-sm font-semibold text-white">{p.principleTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.principleBody}</p>
          </div>
          <div className="rounded-2xl border border-white/[0.1] bg-black/[0.28] p-5 site-blur sm:p-6">
            <h3 className="text-sm font-semibold text-white">{p.modelTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.modelIntro}</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-4 text-sm text-zinc-300">
              {p.modelItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{p.modelOutro}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-center text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            {p.packagesHeading}
          </h3>
          <div className="overflow-hidden rounded-2xl border border-white/[0.14] bg-[rgba(42,42,42,0.26)] site-blur sm:rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-[rgba(37,37,37,0.45)]">
                    {[p.columns.product, p.columns.setup, p.columns.subscription, p.columns.audience].map(
                      (col) => (
                        <th
                          key={col}
                          className="px-4 py-3.5 text-[10px] font-semibold tracking-wider text-zinc-400 uppercase sm:px-5"
                        >
                          {col}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {SMB_PACKAGES.map((tier, i) => {
                    const copy = p.packages[tier.id]!;
                    const featured = tier.featured;
                    return (
                      <tr
                        key={tier.id}
                        className={`border-b border-white/[0.06] last:border-b-0 ${
                          featured
                            ? "bg-brand/[0.06]"
                            : i % 2 === 0
                              ? "bg-white/[0.02]"
                              : "bg-transparent"
                        }`}
                      >
                        <td className="px-4 py-4 align-top sm:px-5">
                          <p className="font-semibold text-white">{copy.name}</p>
                          <p className="mt-1 text-[12px] text-zinc-500">{copy.subtitle}</p>
                        </td>
                        <td className="px-4 py-4 align-top sm:px-5">
                          <PriceCell
                            primary={formatPriceRange(tier, "setup", locale)!}
                            note={copy.setupNote}
                          />
                        </td>
                        <td className="px-4 py-4 align-top sm:px-5">
                          {tier.monthly ? (
                            <PriceCell
                              primary={formatPriceRange(tier, "monthly", locale)!}
                              note={copy.monthlyNote}
                            />
                          ) : (
                            <span className="text-zinc-600">—</span>
                          )}
                        </td>
                        <td className="px-4 py-4 align-top text-[13px] leading-relaxed text-zinc-400 sm:px-5">
                          {copy.audience}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            {p.servicesHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-500">
            {p.servicesSubtitle}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.tier === "product" && SERVICE_PRICING[s.slug])
              .map((s) => {
              const tier = SERVICE_PRICING[s.slug];
              return (
                <div
                  key={s.slug}
                  className="rounded-xl border border-white/[0.1] bg-black/[0.24] p-4 site-blur sm:p-5"
                >
                  <p className="text-[10px] font-medium tracking-wide text-brand/90 uppercase">
                    {s.headline}
                  </p>
                  <p className="mt-1 font-semibold text-white">{s.title}</p>
                  <div className="mt-4 space-y-2 border-t border-white/[0.08] pt-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[11px] text-zinc-500">{p.setupLabel}</span>
                      <span className="text-right text-[13px] font-semibold text-brand">
                        {formatPriceRange(tier, "setup", locale)}
                      </span>
                    </div>
                    {tier.monthly ? (
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[11px] text-zinc-500">{p.monthlyLabel}</span>
                        <span className="text-right text-[13px] font-semibold text-brand">
                          {formatPriceRange(tier, "monthly", locale)}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-relaxed text-zinc-500">
            {p.entryNote}
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-brand px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(196,205,216,0.45)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_32px_-4px_rgba(196,205,216,0.55)]"
          >
            {p.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
