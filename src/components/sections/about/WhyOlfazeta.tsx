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
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
  {
    label: "Wasserzusatz",
    ours: "0%",
    theirs: "20\u201340%",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m2 2 20 20" />
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
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 13L2 9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3 8 9l4 13 4-13-3-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20" />
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
          <div className="text-center md:text-left">
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
              <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-foreground/50 md:mx-0 md:text-lg">
                Extrait de Parfum mit Original-Essenzen von Fragworld (Frankreich).
                Keine Kopien &mdash; eigenst&auml;ndige Kompositionen h&ouml;chster Qualit&auml;t.
              </p>
            </ScrollReveal>
          </div>

          {/* Flacons */}
          <ScrollReveal direction="right" distance={40}>
            <div className="relative flex items-end justify-center gap-4">
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
              <div className="group overflow-hidden rounded-2xl border border-foreground/[0.06] bg-white p-6 text-center transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.1)] sm:text-left md:p-7">
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(201,169,110,0.2)] sm:mx-0">
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
                <div className="flex items-center justify-center gap-2 sm:justify-start">
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
