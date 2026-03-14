"use server";

import { z } from "zod/v4";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
  privacyConsent: z.literal(true),
  preferences: z.array(z.string()).optional(),
  website: z.string().optional(), // Honeypot
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export interface ContactFormResult {
  success: boolean;
  error?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  data: ContactFormInput
): Promise<ContactFormResult> {
  // Honeypot — bots fill hidden fields, real users don't
  if (data.website) {
    return { success: true };
  }

  const result = contactSchema.safeParse(data);
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
