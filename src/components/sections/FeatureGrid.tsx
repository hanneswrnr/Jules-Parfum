"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.21 2.55 3.48 5.66 3.48 9s-1.27 6.45-3.48 9c-2.21-2.55-3.48-5.66-3.48-9s1.27-6.45 3.48-9Z" />
      </svg>
    ),
    title: "Fragworld Partnerschaft",
    description:
      "Original-Duftessenzen vom f\u00fchrenden franz\u00f6sischen Hersteller. Keine Kopien \u2014 authentische Komposition.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "100% Vegan & Tierversuchsfrei",
    description:
      "Ohne Parabene, hypoallergen und biozertifiziert (Biocertitalia). Gut f\u00fcr dich und die Umwelt.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 2h7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16h10" />
      </svg>
    ),
    title: "Extrait de Parfum",
    description:
      "30% Duftessenz und 70% Bio-Alkohol. Kein Wasser. Die h\u00f6chste Konzentrationsstufe f\u00fcr intensiven, langanhaltenden Duft.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Bis zu 10 Stunden",
    description:
      "W\u00e4hrend herk\u00f6mmliche Parfums nach 4\u20135 Stunden nachlassen, begleitet dich unser Duft den ganzen Tag.",
  },
];

export function FeatureGrid(): React.ReactElement {
  return (
    <section className="relative bg-cream px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Warum wir anders sind
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Qualit&auml;t, die man sp&uuml;rt.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-foreground/50 md:text-lg">
              Was unsere D&uuml;fte von der Masse unterscheidet &mdash; auf den Punkt gebracht.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero Image */}
        <ScrollReveal delay={0.3} className="mx-auto mt-14 mb-16">
          <div className="relative mx-auto aspect-[16/9] max-w-3xl overflow-hidden rounded-3xl">
            <Image
              src="/images/alle/IMG_3782.jpeg"
              alt="Olfazeta Extrait de Parfum Kollektion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={i * 0.1}
              distance={30}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,169,110,0.08)] sm:text-left md:p-10">
                {/* Icon Badge */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.2)] sm:mx-0">
                  {feature.icon}
                </div>

                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-foreground/50">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/[0.03] text-foreground/20 transition-all duration-500 group-hover:bg-accent/10 group-hover:text-accent sm:mx-0">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
