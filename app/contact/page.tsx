import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { ScrollRevealHeading } from "../components/ScrollRevealHeading";
import { TypewriterReveal } from "../components/TypewriterReveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's talk about your project.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-dvh bg-transparent px-3 pb-[max(6rem,env(safe-area-inset-bottom,0px)+4rem)] pt-[max(7rem,env(safe-area-inset-top,0px)+5.5rem)] sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <ScrollRevealHeading
              as="h1"
              level="display"
              className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Let&apos;s Talk About Your Project
            </ScrollRevealHeading>
            <TypewriterReveal
              text="Tell us what you're building. We'll get back to you within 24 hours with initial thoughts — no sales pitch, no pressure. Just a real conversation about your goals."
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
            />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <ContactForm />

            <aside className="space-y-6 rounded-2xl border border-white/[0.08] bg-black/[0.28] p-6 backdrop-blur-md lg:p-8">
              <ScrollRevealHeading
                as="h2"
                level="subsection"
                className="text-sm font-semibold text-white"
              >
                Prefer a different channel?
              </ScrollRevealHeading>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li>
                  <span className="text-zinc-500">Email:</span>{" "}
                  <a
                    href="mailto:hello@qascade.com"
                    className="text-white hover:underline"
                  >
                    hello@qascade.com
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">Book a call:</span>{" "}
                  <a
                    href="#"
                    className="text-brand hover:text-brand-soft hover:underline"
                  >
                    Schedule 30-min intro call
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">Telegram:</span>{" "}
                  <a
                    href="#"
                    className="text-brand hover:text-brand-soft hover:underline"
                  >
                    @qascade
                  </a>
                </li>
              </ul>
              <p className="text-sm text-zinc-500">
                Based in Warsaw, Poland
                <br />
                Working hours: Mon–Fri, 9:00–18:00 CET
              </p>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
