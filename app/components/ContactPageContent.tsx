"use client";

import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { TypewriterReveal } from "./TypewriterReveal";
import { ContactForm } from "./ContactForm";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "../../data/contact";
import { useI18n } from "../../lib/i18n/LanguageProvider";

export function ContactPageContent() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <>
      <SiteNav />
      <main className="contact-page min-h-dvh px-3 pb-[max(6rem,env(safe-area-inset-bottom,0px)+4rem)] pt-[max(7rem,env(safe-area-inset-top,0px)+5.5rem)] sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <ScrollRevealHeading
              as="h1"
              level="display"
              className="font-sans text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
            >
              {c.pageTitle}
            </ScrollRevealHeading>
            <TypewriterReveal
              text={c.subtitle}
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base"
            />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <ContactForm light />

            <aside className="space-y-6 rounded-2xl border border-white/[0.16] bg-white/[0.06] p-6 shadow-[0_0_48px_-20px_rgba(196,205,216,0.15)] site-blur lg:p-8">
              <ScrollRevealHeading
                as="h2"
                level="subsection"
                className="text-sm font-semibold text-zinc-100"
              >
                {c.asideTitle}
              </ScrollRevealHeading>
              <ul className="space-y-4 text-sm text-zinc-300">
                <li>
                  <span className="text-zinc-500">{c.asideEmail}</span>{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-white underline-offset-2 transition-colors hover:text-brand-soft hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">{c.asidePhone}</span>{" "}
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="font-medium text-white underline-offset-2 transition-colors hover:text-brand-soft hover:underline"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">{c.asideBookCall}</span>{" "}
                  <a
                    href="#"
                    className="text-brand hover:text-brand-soft hover:underline"
                  >
                    {c.asideBookCallLink}
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">{c.asideTelegram}</span>{" "}
                  <a
                    href="#"
                    className="text-brand hover:text-brand-soft hover:underline"
                  >
                    @qascade
                  </a>
                </li>
              </ul>
              <p className="text-sm text-zinc-400">
                {c.asideLocation}
                <br />
                {c.asideHours}
              </p>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
