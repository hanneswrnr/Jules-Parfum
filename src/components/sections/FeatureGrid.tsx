"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const features = [
  {
    icon: "🇫🇷",
    title: "Fragworld Partnerschaft",
    description:
      "Original-Duftessenzen vom führenden französischen Hersteller. Keine Kopien — authentische Komposition.",
  },
  {
    icon: "🌿",
    title: "100% Vegan & Tierversuchsfrei",
    description:
      "Ohne Parabene, hypoallergen und biozertifiziert (Biocertitalia). Gut für dich und die Umwelt.",
  },
  {
    icon: "💎",
    title: "Extrait de Parfum",
    description:
      "30% Duftessenz und 70% Bio-Alkohol. Kein Wasser. Die höchste Konzentrationsstufe für intensiven, langanhaltenden Duft.",
  },
  {
    icon: "⏱️",
    title: "Bis zu 10 Stunden",
    description:
      "Während herkömmliche Parfums nach 4-5 Stunden nachlassen, begleitet dich unser Duft den ganzen Tag.",
  },
];

export function FeatureGrid(): React.ReactElement {
  return (
    <section className="relative bg-cream px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimatedText
          as="h2"
          className="text-center font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Qualität, die man spürt.
        </AnimatedText>

        <ScrollReveal delay={0.2} className="mx-auto mt-6 max-w-xl">
          <p className="text-center font-sans text-base leading-relaxed text-foreground/60">
            Was unsere Düfte von der Masse unterscheidet — auf den Punkt gebracht.
          </p>
        </ScrollReveal>

        {/* Hero-Bild der Sektion */}
        <ScrollReveal delay={0.3} className="mx-auto mt-12 mb-16">
          <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-2xl">
            <Image
              src="/images/alle/IMG_3782.jpeg"
              alt="Olfazeta Extrait de Parfum Kollektion — Schwarz und Weiß mit natürlichen Zutaten"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={40}
            >
              <div className="group rounded-2xl bg-background p-8 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 md:p-10">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
