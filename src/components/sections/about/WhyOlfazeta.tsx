"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const comparisons = [
  {
    label: "Duftessenz",
    ours: "30%",
    theirs: "10\u201315%",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
  },
  {
    label: "Wasserzusatz",
    ours: "0%",
    theirs: "20\u201340%",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18a.94.94 0 0 0-.662.274.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
      </svg>
    ),
  },
  {
    label: "Haltbarkeit",
    ours: "6\u201310h",
    theirs: "4\u20135h",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: "Qualit\u00e4t",
    ours: "Extrait",
    theirs: "Eau de Parfum",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
  },
];

export function WhyOlfazeta(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 md:py-48">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <ScrollReveal>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                Die Produkte
              </p>
            </ScrollReveal>

            <AnimatedText
              as="h2"
              delay={0.2}
              className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Warum Olfazeta.
            </AnimatedText>

            <ScrollReveal delay={0.3}>
              <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-foreground/50 md:text-lg">
                Extrait de Parfum mit Original-Essenzen von Fragworld (Frankreich).
                Keine Kopien &mdash; eigenst&auml;ndige Kompositionen h&ouml;chster Qualit&auml;t.
              </p>
            </ScrollReveal>
          </div>

          {/* Flacons */}
          <ScrollReveal direction="right" distance={40}>
            <div className="relative flex items-end justify-center gap-4 md:justify-end">
              <div className="relative h-52 w-28 md:h-72 md:w-36">
                <Image
                  src="/images/catalog/flacon-luxury-gold.png"
                  alt="Olfazeta Luxury Flacon Gold"
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                  sizes="144px"
                />
              </div>
              <div className="relative h-44 w-24 md:h-60 md:w-30">
                <Image
                  src="/images/catalog/flacon-dark-70ml.png"
                  alt="Olfazeta Dark Flacon"
                  fill
                  className="object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.1)]"
                  sizes="120px"
                />
              </div>
              <div className="relative hidden h-36 w-20 md:block md:h-48 md:w-24">
                <Image
                  src="/images/catalog/flacon-light-30ml.png"
                  alt="Olfazeta Light Flacon"
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                  sizes="96px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {comparisons.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1} distance={25}>
              <div className="group overflow-hidden rounded-2xl border border-foreground/[0.06] bg-white p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.1)] md:p-7">
                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]">
                  {item.icon}
                </div>

                <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-foreground/30">
                  {item.label}
                </p>

                {/* Ours */}
                <p className="mt-2 font-serif text-2xl font-medium text-accent md:text-3xl">
                  {item.ours}
                </p>

                {/* Divider */}
                <div className="my-3 h-[1px] w-full bg-foreground/[0.06]" />

                {/* Theirs */}
                <div className="flex items-center gap-2">
                  <p className="font-sans text-sm text-foreground/30 line-through">
                    {item.theirs}
                  </p>
                  <span className="font-sans text-[10px] text-foreground/25">
                    Gro&szlig;e Marken
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
