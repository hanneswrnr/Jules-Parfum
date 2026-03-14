"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GoogleMapsEmbed } from "@/components/ui/GoogleMapsEmbed";
import { submitContactForm } from "@/app/actions/contact";
import Image from "next/image";

const contactPageSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.email("Bitte gib eine gültige E-Mail-Adresse ein."),
  phone: z.string().optional(),
  preferences: z.array(z.string()).optional(),
  message: z.string().min(10, "Deine Nachricht sollte mindestens 10 Zeichen lang sein."),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
  privacyConsent: z.literal(true, { error: "Bitte bestätige die Datenschutzerklärung." }),
  website: z.string().optional(),
});

type ContactPageFormData = z.infer<typeof contactPageSchema>;

const preferenceOptions = [
  "Frisch & Zitrus",
  "Blumig & Romantisch",
  "Holzig & Warm",
  "Oriental & Würzig",
  "Süß & Gourmand",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-foreground/8 bg-white px-4 py-3.5 font-sans text-base text-foreground outline-none transition-all duration-300 focus:border-accent/30 focus:shadow-[0_0_20px_rgba(201,169,110,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50";

export function ContactFormSection(): React.ReactElement {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactPageFormData>({
    resolver: zodResolver(contactPageSchema),
    defaultValues: {
      preferredContact: "email",
      preferences: [],
    },
  });

  const onSubmit = async (data: ContactPageFormData): Promise<void> => {
    setServerError(null);
    const result = await submitContactForm(data);
    if (result.success) {
      reset();
    } else {
      setServerError(
        result.error ?? "Ein unbekannter Fehler ist aufgetreten."
      );
    }
  };

  return (
    <section id="kontakt-form" className="relative overflow-hidden bg-background px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: Image + Info */}
          <ScrollReveal direction="left" distance={50}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/alle/IMG_3784.jpeg"
                  alt="Olfazeta Extrait de Parfum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-white/60">Antwort innerhalb</p>
                        <p className="font-sans text-sm font-semibold text-white">48 Stunden</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-white/60">Beratung</p>
                        <p className="font-sans text-sm font-semibold text-white">Kostenlos &amp; unverbindlich</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-white/60">100% Datenschutz</p>
                        <p className="font-sans text-sm font-semibold text-white">Deine Daten sind sicher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standort-Karte */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-accent/20">
                <div className="relative h-40">
                  <GoogleMapsEmbed className="h-full w-full border-0" />
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-accent to-accent-light px-5 py-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/25">
                    <svg className="h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] font-medium text-white/70">Standort</p>
                    <p className="font-sans text-sm font-semibold text-white">04442 Zwenkau</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                Deine Anfrage
              </p>
            </ScrollReveal>

            <AnimatedText
              as="h2"
              className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl"
            >
              Schreib mir.
            </AnimatedText>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-foreground/50 md:mx-0 md:max-w-none">
                Erz&auml;hl mir von deinen Duftvorlieben und ich stelle dir eine
                pers&ouml;nliche Auswahl zusammen.
              </p>
            </ScrollReveal>

            {/* Success */}
            {isSubmitSuccessful && (
              <div
                className="mt-10 rounded-3xl border border-accent/20 bg-white p-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p className="font-serif text-2xl text-foreground">Vielen Dank!</p>
                <p className="mt-2 font-sans text-base text-foreground/50">
                  Deine Anfrage ist eingegangen. Ich melde mich in K&uuml;rze bei dir.
                </p>
              </div>
            )}

            {/* Form */}
            {!isSubmitSuccessful && (
              <ScrollReveal delay={0.3} className="mt-8">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Honeypot — hidden from real users, bots fill it */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("website")}
                    />
                  </div>

                  {/* Server Error */}
                  {serverError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3" role="alert">
                      <p className="font-sans text-sm text-red-600">{serverError}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      className={inputClass}
                      placeholder="Dein Name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-sans text-xs text-red-500" role="alert">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email + Phone Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                        E-Mail
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        className={inputClass}
                        placeholder="deine@email.de"
                      />
                      {errors.email && (
                        <p className="mt-1.5 font-sans text-xs text-red-500" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                        Telefon <span className="text-foreground/20">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        {...register("phone")}
                        className={inputClass}
                        placeholder="+49 ..."
                      />
                    </div>
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Bevorzugter Kontaktweg
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        { value: "email", label: "E-Mail" },
                        { value: "phone", label: "Telefon" },
                        { value: "whatsapp", label: "WhatsApp" },
                      ].map((option) => (
                        <label key={option.value} className="cursor-pointer">
                          <input
                            type="radio"
                            value={option.value}
                            {...register("preferredContact")}
                            className="peer sr-only"
                          />
                          <span className="inline-block rounded-full border border-foreground/8 bg-white px-5 py-3 font-sans text-sm text-foreground/50 transition-all duration-300 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Duftvorlieben (optional) */}
                  <div>
                    <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Duftvorlieben <span className="text-foreground/20">(optional)</span>
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {preferenceOptions.map((pref) => (
                        <label key={pref} className="cursor-pointer">
                          <input
                            type="checkbox"
                            value={pref}
                            {...register("preferences")}
                            className="peer sr-only"
                          />
                          <span className="inline-block rounded-full border border-foreground/8 bg-white px-4 py-2.5 font-sans text-sm text-foreground/50 transition-all duration-300 peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent">
                            {pref}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Nachricht
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register("message")}
                      aria-invalid={!!errors.message}
                      className="mt-2 w-full resize-none rounded-xl border border-foreground/8 bg-white px-4 py-3.5 font-sans text-base text-foreground outline-none transition-all duration-300 focus:border-accent/30 focus:shadow-[0_0_20px_rgba(201,169,110,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50"
                      placeholder="Welche Duftrichtung interessiert dich? Hast du einen Lieblingsduft?"
                    />
                    {errors.message && (
                      <p className="mt-1.5 font-sans text-xs text-red-500" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Privacy Consent */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="contact-privacy-consent"
                        {...register("privacyConsent")}
                        aria-invalid={!!errors.privacyConsent}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-foreground/20 accent-accent"
                      />
                      <label htmlFor="contact-privacy-consent" className="font-sans text-[13px] leading-relaxed text-foreground/60">
                        Ich habe die{" "}
                        <a href="/datenschutz" className="text-accent underline underline-offset-2 hover:text-accent/80">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und bin mit der Verarbeitung meiner Daten einverstanden.&nbsp;*
                      </label>
                    </div>
                    {errors.privacyConsent && (
                      <p className="mt-1.5 text-[12px] text-red-500" role="alert">{errors.privacyConsent.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-full bg-foreground px-8 py-4 font-sans text-sm font-medium tracking-wide text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50 disabled:pointer-events-none disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
