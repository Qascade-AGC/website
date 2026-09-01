"use client";

import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "../../data/contact";
import { useI18n } from "../../lib/i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useI18n();
  const f = t.footer;
  const serviceHrefs = Array(6).fill("/#services") as string[];
  const serviceLabels = f.serviceLinks;

  return (
    <footer className="border-t border-white/[0.08] bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-tight text-white uppercase">
            Qascade
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            {f.tagline}
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            {f.servicesHeading}
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            {serviceLabels.map((label, i) => (
              <li key={label}>
                <Link href={serviceHrefs[i]!} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            {f.companyHeading}
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/#about" className="hover:text-white">
                {f.about}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white">
                {f.portfolio}
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-white">
                {f.pricing}
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-white">
                {f.process}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                {f.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            {f.contactHeading}
          </p>
          <p className="text-sm text-zinc-400">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="text-white hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-500">{f.location}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-zinc-500">
            {f.social.map((name, i) => (
              <span key={name} className="contents">
                {i > 0 ? <span>·</span> : null}
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center text-[11px] text-zinc-600 sm:flex-row sm:text-left">
        <p>{f.copyright}</p>
        <p>
          <a href="#" className="hover:text-zinc-400">
            {f.privacy}
          </a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-zinc-400">
            {f.terms}
          </a>
        </p>
      </div>
    </footer>
  );
}
