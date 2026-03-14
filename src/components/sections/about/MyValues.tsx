"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

const values = [
  {
    number: "01",
    title: "Pers\u00f6nlich",
    description:
      "Keine Massenware, kein anonymer Online-Shop. Ich berate dich pers\u00f6nlich und finde genau den Duft, der zu dir passt.",
    highlight: "1:1 Beratung",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Nachhaltig",
    description:
      "100% vegan, tierversuchsfrei, ohne Parabene und hypoallergen. Zertifiziert durch Biocertitalia.",
    highlight: "100% Vegan",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fair",
    description:
      "Luxus-Qualit\u00e4t ohne Luxus-Aufpreis. Kein teures Marketing, keine Designer-Flakons \u2014 du bezahlst den Inhalt, nicht die Marke.",
    highlight: "Bis 80% g\u00fcnstiger",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
  },
];

export function MyValues(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-32 md:py-48">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Wof&uuml;r ich stehe
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Meine Werte.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Drei Prinzipien, die meine Arbeit leiten.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.15} distance={40} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] sm:p-10">
                {/* Large Background Number */}
                <span className="pointer-events-none absolute -top-4 -right-2 font-serif text-[8rem] font-light leading-none text-foreground/[0.04] select-none transition-colors duration-700 group-hover:text-accent/[0.08] sm:text-[10rem]">
                  {value.number}
                </span>

                {/* Icon Badge */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]">
                  {value.icon}
                </div>

                {/* Highlight Pill */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-accent/8 px-3.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-accent transition-all duration-500 group-hover:bg-accent/15">
                    {value.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-auto">
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-foreground/50">
                    {value.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
