import { z } from "zod/v4";

export const contactBaseSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.email("Bitte gib eine gültige E-Mail-Adresse ein."),
  phone: z.string().optional(),
  message: z.string().min(10, "Deine Nachricht sollte mindestens 10 Zeichen lang sein."),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
  privacyConsent: z.literal(true, { error: "Bitte bestätige die Datenschutzerklärung." }),
  website: z.string().optional(), // Honeypot
});

export const contactFullSchema = contactBaseSchema.extend({
  preferences: z.array(z.string()).optional(),
});

export type ContactBaseFormData = z.infer<typeof contactBaseSchema>;
export type ContactFullFormData = z.infer<typeof contactFullSchema>;
