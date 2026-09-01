"use client";

import { useI18n } from "../../lib/i18n/LanguageProvider";
import type { Locale } from "../../lib/i18n/ui";

const LOCALES: { id: Locale; label: string }[] = [
  { id: "pl", label: "PL" },
  { id: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="flex shrink-0 items-center rounded-md border border-white/15 bg-black/20 p-0.5"
      role="group"
      aria-label="Język / Language"
    >
      {LOCALES.map(({ id, label }) => {
        const active = locale === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLocale(id)}
            aria-pressed={active}
            className={`min-h-8 min-w-9 rounded px-2 text-[10px] font-semibold tracking-wide uppercase transition-colors sm:min-h-9 sm:min-w-10 sm:text-[11px] ${
              active
                ? "bg-brand text-zinc-950 shadow-[0_0_12px_-4px_rgba(196,205,216,0.5)]"
                : "text-white/65 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
