"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    description:
      "Schreib mir eine kurze Nachricht mit deinen Duft-Vorlieben — welche Noten magst du? Frisch, holzig, blumig?",
  },
  {
    number: "02",
    title: "Duftliste erhalten",
    description:
      "Du erhältst eine persönliche Auswahl passender Düfte mit Beschreibungen und Preis — ganz unverbindlich.",
  },
  {
    number: "03",
    title: "Geniessen",
    description:
      "Bestelle deine Favoriten und erlebe Extrait de Parfum in seiner reinsten Form. Direkt zu dir nach Hause.",
  },
];

export function HowItWorks(): React.ReactElement {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Verbindungslinie animieren
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <AnimatedText
          as="h2"
          className="text-center font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          So einfach geht's.
        </AnimatedText>

        <ScrollReveal delay={0.2} className="mx-auto mt-6 max-w-lg">
          <p className="text-center font-sans text-base leading-relaxed text-foreground/60">
            In drei Schritten zu deinem Signatur-Duft.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Vertikale Linie (Desktop) */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-accent/20 md:block"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.number}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
                distance={50}
              >
                <div
                  className={`flex flex-col items-center gap-6 md:flex-row ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm font-sans text-base leading-relaxed text-foreground/60 md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Nummer-Circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background">
                    <span className="font-serif text-xl text-accent">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer für die andere Seite */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Probenkoffer-Bild */}
        <ScrollReveal delay={0.2} className="mt-20">
          <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/alle/IMG_3797.jpeg"
              alt="Chogan Duftproben-Koffer mit über 100 Düften"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
          <p className="mt-4 text-center font-sans text-sm text-foreground/40">
            Über 100 Düfte zum Entdecken
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
