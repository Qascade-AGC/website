"use client";

import { useCallback, useState } from "react";
import { shouldAvoidLenis } from "./LenisRoot";

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
  "w-full min-h-12 cursor-pointer appearance-none rounded-xl border bg-white/[0.09] py-3 pl-4 pr-11 text-sm leading-normal text-zinc-100 outline-none ring-brand/30 [color-scheme:dark] focus:ring-2";

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

function validateForm(data: FormData): Errors {
  const errors: Errors = {};

  const fullName = String(data.get("fullName") ?? "").trim();
  if (!fullName) errors.fullName = "Enter your name.";
  else if (fullName.length < 2)
    errors.fullName = "Name must be at least 2 characters.";
  else if (fullName.length > 120) errors.fullName = "Name is too long.";

  const email = String(data.get("email") ?? "").trim();
  if (!email) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Enter a valid email address.";

  const company = String(data.get("company") ?? "").trim();
  if (company.length > 200) errors.company = "Company name is too long.";

  const projectType = String(data.get("projectType") ?? "").trim();
  if (!projectType) errors.projectType = "Choose a project type.";

  const message = String(data.get("message") ?? "").trim();
  if (!message) errors.message = "Tell us about your project.";
  else if (message.length < 20)
    errors.message = "Please add a bit more detail (at least 20 characters).";
  else if (message.length > 8000) errors.message = "Message is too long.";

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
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 shrink-0"
        >
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
    const next = validateForm(data);
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
      className="space-y-5"
      action="#"
      method="post"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label className={labelClass} htmlFor="fullName">
          Full Name <span className="text-brand">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="John Smith"
          aria-invalid={e.fullName ? true : undefined}
          aria-describedby={e.fullName ? "fullName-error" : undefined}
          onChange={() => clearField("fullName")}
          className={`${inputClass} ${e.fullName ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="fullName-error" message={e.fullName} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email Address <span className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="john@company.com"
          aria-invalid={e.email ? true : undefined}
          aria-describedby={e.email ? "email-error" : undefined}
          onChange={() => clearField("email")}
          className={`${inputClass} ${e.email ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="email-error" message={e.email} />
      </div>
      <div>
        <label className={labelClass} htmlFor="company">
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Inc."
          aria-invalid={e.company ? true : undefined}
          aria-describedby={e.company ? "company-error" : undefined}
          onChange={() => clearField("company")}
          className={`${inputClass} ${e.company ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="company-error" message={e.company} />
      </div>
      <div>
        <label className={labelClass} htmlFor="projectType">
          Project Type <span className="text-brand">*</span>
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
          <option value="">Select…</option>
          <option>Web Application</option>
          <option>MVP Development</option>
          <option>E-Commerce</option>
          <option>SaaS Platform</option>
          <option>AI Integration</option>
          <option>DevSecOps</option>
          <option>Other / Not Sure</option>
        </ContactSelect>
        <FieldError id="projectType-error" message={e.projectType} />
      </div>
      <div>
        <label className={labelClass} htmlFor="budget">
          Estimated Budget
        </label>
        <ContactSelect
          id="budget"
          name="budget"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">Select…</option>
          <option>Less than $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000 – $50,000</option>
          <option>$50,000 – $100,000</option>
          <option>$100,000+</option>
          <option>Not sure yet</option>
        </ContactSelect>
      </div>
      <div>
        <label className={labelClass} htmlFor="timeline">
          Project Timeline
        </label>
        <ContactSelect
          id="timeline"
          name="timeline"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">Select…</option>
          <option>ASAP</option>
          <option>1–2 months</option>
          <option>3–6 months</option>
          <option>Flexible / Not sure</option>
        </ContactSelect>
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          Tell Us About Your Project <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Describe your idea, goals, and any specific requirements. The more detail, the better our initial response will be."
          aria-invalid={e.message ? true : undefined}
          aria-describedby={e.message ? "message-error" : undefined}
          onChange={() => clearField("message")}
          className={`${inputClass} resize-none ${e.message ? inputBorderErr : inputBorderOk}`}
        />
        <FieldError id="message-error" message={e.message} />
      </div>
      <div>
        <label className={labelClass} htmlFor="referral">
          How Did You Find Us?
        </label>
        <ContactSelect
          id="referral"
          name="referral"
          onFieldChange={clearField}
          selectFieldBase={selectFieldBase}
          selectBorderOk={selectBorderOk}
        >
          <option value="">Select…</option>
          <option>Google Search</option>
          <option>Referral</option>
          <option>Social Media</option>
          <option>Clutch / Dribbble / Behance</option>
          <option>Other</option>
        </ContactSelect>
      </div>

      {status === "success" ? (
        <p
          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200/95"
          role="status"
        >
          Thanks — your message is ready to send. Connect a backend (e.g.
          Formspree, Resend, or your API) to deliver it. The form has been
          cleared.
        </p>
      ) : null}

      <button
        type="submit"
        className="h-12 w-full rounded-lg bg-brand text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-6px_rgba(196,78,255,0.55)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_36px_-4px_rgba(196,78,255,0.65)] sm:w-auto sm:px-10"
      >
        Send Message
      </button>
      <p
        className={`text-[11px] leading-relaxed ${light ? "text-zinc-500" : "text-zinc-600"}`}
      >
        By submitting this form, you agree to our Privacy Policy. We&apos;ll
        respond within 24 hours. No spam. No automated sequences. Just a real
        reply from a real person.
      </p>
    </form>
  );
}
