"use client";

import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.email("Bitte gib eine gültige E-Mail-Adresse ein."),
  phone: z.string().optional(),
  message: z.string().min(10, "Deine Nachricht sollte mindestens 10 Zeichen lang sein."),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      preferredContact: "email",
    },
  });

  const onSubmit = (data: ContactFormData): void => {
    // TODO: Backend-Anbindung (z.B. Server Action, API Route, oder E-Mail-Service)
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section id="kontakt" className="relative bg-cream px-6 py-32 md:py-48">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <AnimatedText
          as="h2"
          className="text-center font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Finde deinen Duft.
        </AnimatedText>

        <ScrollReveal delay={0.2} className="mt-6">
          <p className="text-center font-sans text-base leading-relaxed text-foreground/60">
            Schreib mir und ich stelle dir eine persönliche Duftauswahl zusammen
            — kostenlos und unverbindlich.
          </p>
        </ScrollReveal>

        {/* Erfolgs-Nachricht */}
        {isSubmitSuccessful && (
          <ScrollReveal className="mt-12">
            <div className="rounded-2xl border border-accent/20 bg-background p-8 text-center">
              <p className="font-serif text-2xl text-accent">Vielen Dank!</p>
              <p className="mt-2 font-sans text-base text-foreground/60">
                Deine Anfrage ist eingegangen. Ich melde mich in Kürze bei dir.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Formular */}
        {!isSubmitSuccessful && (
          <ScrollReveal delay={0.3} className="mt-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl bg-background p-8 shadow-sm md:p-10"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-foreground/70"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Bitte gib deinen Namen ein." })}
                  className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Dein Name"
                />
                {errors.name && (
                  <p className="mt-1 font-sans text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* E-Mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-foreground/70"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Bitte gib deine E-Mail ein." })}
                  className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="deine@email.de"
                />
                {errors.email && (
                  <p className="mt-1 font-sans text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Telefon (optional) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm font-medium text-foreground/70"
                >
                  Telefon{" "}
                  <span className="text-foreground/30">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="+49 ..."
                />
              </div>

              {/* Bevorzugter Kontaktweg */}
              <div>
                <label className="block font-sans text-sm font-medium text-foreground/70">
                  Bevorzugter Kontaktweg
                </label>
                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    { value: "email", label: "E-Mail" },
                    { value: "phone", label: "Telefon" },
                    { value: "whatsapp", label: "WhatsApp" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("preferredContact")}
                        className="peer sr-only"
                      />
                      <span className="inline-block rounded-full border border-foreground/10 px-5 py-2 font-sans text-sm text-foreground/60 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-foreground/70"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "Bitte schreib eine kurze Nachricht.",
                  })}
                  className="mt-2 w-full resize-none border-b border-foreground/10 bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Welche Duftrichtung interessiert dich? (z.B. frisch, holzig, blumig...)"
                />
                {errors.message && (
                  <p className="mt-1 font-sans text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full">
                  Anfrage senden
                </Button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
