"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function AboutJules(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax-Effekt auf dem Bild
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background px-6 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Bild-Seite — Jules mit Parfumflasche */}
        <ScrollReveal direction="left" distance={80} className="order-2 md:order-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <div ref={imageRef} className="absolute inset-x-0 top-0 h-[130%]">
              <Image
                src="/images/alle/Facetune_12-10-2024-14-42-56.jpeg"
                alt="Jules — Gründerin von Jules Parfum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text-Seite */}
        <div className="order-1 md:order-2">
          <ScrollReveal>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-accent">
              Die Frau hinter dem Duft
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            delay={0.2}
            className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Über Jules Parfum
          </AnimatedText>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground/60">
              Als unabhängige Chogan Vertriebspartnerin habe ich es mir zur
              Aufgabe gemacht, Menschen den Zugang zu hochwertigen Düften
              zu ermöglichen — ohne den Luxus-Aufpreis der großen Marken.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 font-sans text-base leading-relaxed text-foreground/60">
              Jeder Duft erzählt eine Geschichte. Lass mich dir helfen,
              deine zu finden.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-8">
              <Button href="#kontakt" variant="outline">
                Kontakt aufnehmen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
