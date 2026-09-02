"use client";

import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "../../data/contact";
import { ContactForm } from "./ContactForm";
import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { useI18n } from "../../lib/i18n/LanguageProvider";

export function HomeContactSection() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-28 px-4 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="home-contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <ScrollRevealHeading
              as="h2"
              id="home-contact-heading"
              className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {c.pageTitle}
            </ScrollRevealHeading>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {c.subtitle}
            </p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-300">
              <li>
                <span className="text-zinc-500">{c.asidePhone} </span>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="font-medium text-brand hover:text-brand-hover"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="text-zinc-500">{c.asideEmail} </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-brand hover:text-brand-hover"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-zinc-500">{c.asideLocation}</span>
              </li>
            </ul>
            <Link
              href={`tel:${CONTACT_PHONE}`}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-6 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10"
            >
              {c.asideBookCallLink}
            </Link>
          </div>
          <div className="rounded-2xl border border-white/[0.1] bg-black/[0.28] p-5 site-blur sm:p-7">
            <ContactForm short />
          </div>
        </div>
      </div>
    </section>
  );
}
