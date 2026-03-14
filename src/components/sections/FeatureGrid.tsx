"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: "Fragworld Partnerschaft",
    description:
      "Original-Duftessenzen vom f\u00fchrenden franz\u00f6sischen Hersteller. Keine Kopien \u2014 authentische Komposition.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "100% Vegan & Tierversuchsfrei",
    description:
      "Ohne Parabene, hypoallergen und biozertifiziert (Biocertitalia). Gut f\u00fcr dich und die Umwelt.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
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
              <div className="group relative overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,169,110,0.08)] md:p-10">
                {/* Icon Badge */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.2)]">
                  {feature.icon}
                </div>

                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-foreground/50">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/[0.03] text-foreground/20 transition-all duration-500 group-hover:bg-accent/10 group-hover:text-accent">
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
