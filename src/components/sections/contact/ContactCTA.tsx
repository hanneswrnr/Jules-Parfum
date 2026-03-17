"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import Link from "next/link";

export function ContactCTA(): React.ReactElement {
  return (
    <section className="bg-background px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image */}
            <Image
              src="/images/alle/67caa56e-2aec-4bb2-a0f9-c54e6a085e2e.jpeg"
              alt="Jules Parfum Kollektion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Strong dark overlay for readability */}
            <div className="absolute inset-0 bg-foreground/85" />

            {/* Content — centered layout */}
            <div className="relative px-8 py-20 sm:px-14 sm:py-24 md:px-20 md:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  Bereit f&uuml;r deinen Duft?
                </p>

                <AnimatedText
                  as="h3"
                  className="mt-5 font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl"
                >
                  Dein Signatur-Duft wartet.
                </AnimatedText>

                <ScrollReveal delay={0.2}>
                  <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-white/75">
                    Starte jetzt mit einer kostenlosen Beratung und finde
                    den Duft, der zu dir passt.
                  </p>
                </ScrollReveal>

                {/* CTAs */}
                <ScrollReveal delay={0.3}>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="https://wa.me/491735231044"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
                    >
                      WhatsApp schreiben
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>

                    <Link
                      href="/produkte"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-sans text-sm font-medium text-white/80 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                    >
                      Produkte ansehen
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Trust badges */}
                <ScrollReveal delay={0.4}>
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    {["Kostenlose Beratung", "Antwort in 48h", "100% unverbindlich"].map((badge) => (
                      <div key={badge} className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="font-sans text-xs text-white/65">{badge}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
