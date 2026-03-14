"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactFullSchema, type ContactFullFormData } from "@/lib/validation";

// Re-export for backward compatibility
export type ContactFormInput = ContactFullFormData;

export interface ContactFormResult {
  success: boolean;
  error?: string;
}

// --- In-Memory Rate Limiting ---
// Resets on serverless cold start — sufficient for a small business site.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 3;

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Cleanup expired entries
  for (const [key, entry] of rateLimitMap) {
    if (now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  if (entry.count < RATE_LIMIT_MAX) {
    entry.count++;
    return true;
  }

  return false;
}

// --- HTML Escaping ---
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Server Action ---
export async function submitContactForm(
  data: ContactFormInput
): Promise<ContactFormResult> {
  // Rate limiting
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return {
      success: false,
      error: "Zu viele Anfragen. Bitte versuche es in 15 Minuten erneut.",
    };
  }

  // Honeypot — bots fill hidden fields, real users don't
  if (data.website) {
    return { success: true };
  }

  const result = contactFullSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      error: "Ungültige Eingaben. Bitte überprüfe deine Angaben.",
    };
  }

  const { name, email, phone, message, preferredContact, preferences } =
    result.data;

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY is not configured. Contact form submission could not be sent."
    );
    return {
      success: false,
      error:
        "Der E-Mail-Versand ist momentan nicht verfügbar. Bitte versuche es später erneut.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const contactMethodLabel: Record<string, string> = {
    email: "E-Mail",
    phone: "Telefon",
    whatsapp: "WhatsApp",
  };

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : null;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const safePreferences = preferences?.map(escapeHtml);

  try {
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Jules Parfum <noreply@julesparfum.de>",
      to: process.env.CONTACT_EMAIL ?? "julie.michalek22@gmail.com",
      replyTo: email,
      subject: `Neue Anfrage von ${safeName}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>E-Mail:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Telefon:</strong> ${safePhone}</p>` : ""}
        <p><strong>Bevorzugter Kontaktweg:</strong> ${contactMethodLabel[preferredContact]}</p>
        ${safePreferences?.length ? `<p><strong>Duftvorlieben:</strong> ${safePreferences.join(", ")}</p>` : ""}
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error:
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
    };
  }
}
