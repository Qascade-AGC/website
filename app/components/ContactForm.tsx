"use client";

import { useCallback, useState } from "react";
import { shouldAvoidLenis } from "./LenisRoot";
import { useI18n } from "../../lib/i18n/LanguageProvider";
import type { ContactFormMessages } from "../../lib/i18n/ui";

const inputClassDark =
  "w-full rounded-xl border bg-black/30 px-4 py-3 text-sm text-zinc-200 outline-none ring-brand/15 placeholder:text-zinc-600 focus:ring-2";

const inputClassLight =
  "w-full rounded-xl border bg-white/[0.09] px-4 py-3 text-sm text-zinc-100 outline-none ring-brand/30 placeholder:text-zinc-500 focus:ring-2";

const inputBorderOkDark = "border-white/[0.12] focus:border-brand/40";
const inputBorderOkLight =
  "border-white/[0.2] focus:border-brand/55 focus:ring-brand/25";

const inputBorderErr =
  "border-red-400/55 focus:border-red-400/70 focus:ring-red-400/20";

const selectFieldDark =
  "w-full min-h-12 cursor-pointer appearance-none rounded-xl border bg-black/30 py-3 pl-4 pr-11 text-sm leading-normal text-zinc-200 outline-none ring-brand/15 [color-scheme:dark] focus:ring-2";

const selectFieldLight =
  "w-full min-h-12 cursor-pointer appearance-none rounded-xl border border-white/[0.18] bg-black py-3 pl-4 pr-11 text-sm leading-normal text-white outline-none ring-brand/25 [color-scheme:dark] focus:ring-2";

const selectBorderOkDark =
  "border-white/[0.12] hover:border-white/[0.16] focus:border-brand/40";
const selectBorderOkLight =
  "border-white/[0.2] hover:border-white/[0.24] focus:border-brand/55";

const selectBorderErr =
  "border-red-400/55 hover:border-red-400/50 focus:border-red-400/70 focus:ring-red-400/20";

const labelDark = "mb-1.5 block text-[11px] font-medium text-zinc-500";
const labelLight = "mb-1.5 block text-[11px] font-medium text-zinc-400";

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

type Errors = Partial<Record<string, string>>;

function validateForm(data: FormData, f: ContactFormMessages["errors"]): Errors {
  const errors: Errors = {};

  const fullName = String(data.get("fullName") ?? "").trim();
  if (!fullName) errors.fullName = f.fullNameRequired;
  else if (fullName.length < 2) errors.fullName = f.fullNameMin;
  else if (fullName.length > 120) errors.fullName = f.fullNameMax;

  const email = String(data.get("email") ?? "").trim();
  if (!email) errors.email = f.emailRequired;
  else if (!EMAIL_RE.test(email)) errors.email = f.emailInvalid;

  const company = String(data.get("company") ?? "").trim();
  if (company.length > 200) errors.company = f.companyMax;

  const projectType = String(data.get("projectType") ?? "").trim();
  if (!projectType) errors.projectType = f.projectTypeRequired;

  const message = String(data.get("message") ?? "").trim();
  if (!message) errors.message = f.messageRequired;
  else if (message.length < 20) errors.message = f.messageMin;
  else if (message.length > 8000) errors.message = f.messageMax;

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-red-400/95" role="alert">
      {message}
    </p>
  );
}

function ContactSelect({
  id,
  name,
  required,
  error,
  onFieldChange,
  selectFieldBase,
  selectBorderOk,
  children,
}: {
  id: string;
  name: string;
  required?: boolean;
  error?: string;
  onFieldChange: (name: string) => void;
  selectFieldBase: string;
  selectBorderOk: string;
  children: React.ReactNode;
}) {
  const border = error ? selectBorderErr : selectBorderOk;
  const errId = `${id}-error`;

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        onChange={() => onFieldChange(name)}
        className={`peer ${selectFieldBase} ${border}`}
      >
        {children}
      </select>
      <span
        className={`pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center peer-focus:text-brand/90 ${error ? "text-red-400/80" : "text-zinc-500"}`}
        aria-hidden
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}

export function ContactForm({ light = false }: { light?: boolean }) {
  const { t } = useI18n();
  const f = t.contact.form;
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const inputClass = light ? inputClassLight : inputClassDark;
  const inputBorderOk = light ? inputBorderOkLight : inputBorderOkDark;
  const selectFieldBase = light ? selectFieldLight : selectFieldDark;
  const selectBorderOk = light ? selectBorderOkLight : selectBorderOkDark;
  const labelClass = light ? labelLight : labelDark;

  const clearField = useCallback((name: string) => {
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validateForm(data, f.errors);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      const el = form.querySelector<HTMLElement>(`#${CSS.escape(firstKey)}`);
      const reduce =
        typeof window !== "undefined" &&
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          shouldAvoidLenis());
      el?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      });
      el?.focus();
      return;
    }

    setStatus("success");
    form.reset();
    setErrors({});
  };

  const e = errors;

  return (
    <form
      className={`space-y-5 ${light ? "contact-form-light" : ""}`}
      action="#"
      method="post"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label className={labelClass} htmlFor="fullName">
          {f.labels.fullName} <span className="text-brand">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder={f.placeholders.fullName}
          aria-invalid={e.fullName ? true : undefined}
          aria-describedby={e.fullName ? "fullName-error" : undefined}
          onChange={() => clearField("fullName")}
          className={`${inputClass} ${e.fullName ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="fullName-error" message={e.fullName} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          {f.labels.email} <span className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={f.placeholders.email}
          aria-invalid={e.email ? true : undefined}
          aria-describedby={e.email ? "email-error" : undefined}
          onChange={() => clearField("email")}
          className={`${inputClass} ${e.email ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="email-error" message={e.email} />
      </div>
      <div>
        <label className={labelClass} htmlFor="company">
          {f.labels.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={f.placeholders.company}
          aria-invalid={e.company ? true : undefined}
          aria-describedby={e.company ? "company-error" : undefined}
          onChange={() => clearField("company")}
          className={`${inputClass} ${e.company ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="company-error" message={e.company} />
      </div>
      <div>
        <label className={labelClass} htmlFor="projectType">
          {f.labels.projectType} <span className="text-brand">*</span>
        </label>
        <ContactSelect
          id="projectType"
          name="projectType"
          required
          error={e.projectType}
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">{f.selectPlaceholder}</option>
          {f.projectTypeOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </ContactSelect>
        <FieldError id="projectType-error" message={e.projectType} />
      </div>
      <div>
        <label className={labelClass} htmlFor="budget">
          {f.labels.budget}
        </label>
        <ContactSelect
          id="budget"
          name="budget"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">{f.selectPlaceholder}</option>
          {f.budgetOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </ContactSelect>
      </div>
      <div>
        <label className={labelClass} htmlFor="timeline">
          {f.labels.timeline}
        </label>
        <ContactSelect
          id="timeline"
          name="timeline"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">{f.selectPlaceholder}</option>
          {f.timelineOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </ContactSelect>
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          {f.labels.message} <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder={f.placeholders.message}
          aria-invalid={e.message ? true : undefined}
          aria-describedby={e.message ? "message-error" : undefined}
          onChange={() => clearField("message")}
          className={`${inputClass} resize-none ${e.message ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="message-error" message={e.message} />
      </div>
      <div>
        <label className={labelClass} htmlFor="referral">
          {f.labels.referral}
        </label>
        <ContactSelect
          id="referral"
          name="referral"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">{f.selectPlaceholder}</option>
          {f.referralOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </ContactSelect>
      </div>

      {status === "success" ? (
        <p
          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200/95"
          role="status"
        >
          {f.success}
        </p>
      ) : null}

      <button
        type="submit"
        className="h-12 w-full rounded-lg bg-brand text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-6px_rgba(196,205,216,0.55)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_36px_-4px_rgba(196,205,216,0.65)] sm:w-auto sm:px-10"
      >
        {f.submit}
      </button>
      <p
        className={`text-[11px] leading-relaxed ${light ? "text-zinc-500" : "text-zinc-600"}`}
      >
        {f.disclaimer}
      </p>
    </form>
  );
}
