import { CONTACT_EMAIL } from "../../data/contact";

export type ContactFormPayload = {
  fullName: string;
  company?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  referral?: string;
  short: boolean;
  locale: string;
};

function formatPlainText(data: ContactFormPayload): string {
  const lines = [
    `Name: ${data.fullName}`,
    data.company ? `Company: ${data.company}` : null,
    data.email ? `Contact: ${data.email}` : null,
    data.projectType ? `Project type: ${data.projectType}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.timeline ? `Timeline: ${data.timeline}` : null,
    data.referral ? `Referral: ${data.referral}` : null,
    `Locale: ${data.locale}`,
    `Short form: ${data.short ? "yes" : "no"}`,
    "",
    data.message,
  ];
  return lines.filter(Boolean).join("\n");
}

async function sendViaResend(data: ContactFormPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const from =
    process.env.RESEND_FROM?.trim() || "Qascade Contact <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO?.trim() || CONTACT_EMAIL;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email?.includes("@") ? data.email : undefined,
      subject: `Qascade — ${data.company || data.fullName}`,
      text: formatPlainText(data),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend error (${res.status}): ${detail}`);
  }
}

function getFormspreeFormId(): string | undefined {
  const raw = process.env.FORMSPREE_FORM_ID?.trim();
  if (!raw) return undefined;
  const fromUrl = raw.match(/formspree\.io\/f\/([a-z0-9]+)/i)?.[1];
  return fromUrl ?? raw;
}

async function sendViaFormspree(data: ContactFormPayload): Promise<void> {
  const formId = getFormspreeFormId();
  if (!formId) return;

  const replyTo = data.email?.includes("@") ? data.email : undefined;

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.fullName,
      company: data.company,
      email: data.email || undefined,
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      referral: data.referral,
      message: data.message,
      locale: data.locale,
      short: data.short,
      _subject: `Qascade — ${data.company || data.fullName}`,
      _replyto: replyTo,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Formspree error (${res.status}): ${detail}`);
  }
}

export async function sendContactForm(data: ContactFormPayload): Promise<void> {
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const hasFormspree = Boolean(process.env.FORMSPREE_FORM_ID?.trim());

  if (!hasResend && !hasFormspree) {
    throw new Error(
      "Contact delivery is not configured. Set RESEND_API_KEY or FORMSPREE_FORM_ID.",
    );
  }

  if (hasResend) await sendViaResend(data);
  else await sendViaFormspree(data);
}
