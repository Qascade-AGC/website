import { NextResponse } from "next/server";
import {
  sendContactForm,
  type ContactFormPayload,
} from "../../../lib/contact/sendContactForm";

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function trim(value: unknown, max: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function validate(body: Partial<ContactFormPayload>): string | null {
  const fullName = trim(body.fullName, 120);
  if (fullName.length < 2) return "fullName";

  const company = trim(body.company, 200);
  const short = Boolean(body.short);

  if (short && !company) return "company";

  if (!short) {
    const email = trim(body.email, 320);
    if (!email) return "email";
    if (!EMAIL_RE.test(email)) return "email";
    if (!trim(body.projectType, 120)) return "projectType";
  }

  const message = trim(body.message, 8000);
  if (message.length < (short ? 10 : 20)) return "message";

  return null;
}

export async function POST(request: Request) {
  let body: Partial<ContactFormPayload>;

  try {
    body = (await request.json()) as Partial<ContactFormPayload>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const fieldError = validate(body);
  if (fieldError) {
    return NextResponse.json({ error: "validation", field: fieldError }, { status: 400 });
  }

  const payload: ContactFormPayload = {
    fullName: trim(body.fullName, 120),
    company: trim(body.company, 200) || undefined,
    email: trim(body.email, 320) || undefined,
    projectType: trim(body.projectType, 120) || undefined,
    budget: trim(body.budget, 120) || undefined,
    timeline: trim(body.timeline, 120) || undefined,
    message: trim(body.message, 8000),
    referral: trim(body.referral, 120) || undefined,
    short: Boolean(body.short),
    locale: trim(body.locale, 8) || "pl",
  };

  try {
    await sendContactForm(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 503 });
  }
}
