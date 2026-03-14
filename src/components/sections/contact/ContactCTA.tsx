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
                      href="#kontakt-form"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
                    >
                      Zum Formular
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
