"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const stats = [
  { value: 30, suffix: "%", label: "Duftessenz", sublabel: "statt 15-20% bei Großmarken" },
  { value: 0, suffix: "%", label: "Wasserzusatz", sublabel: "für maximale Intensität" },
  { value: 10, suffix: "h", label: "Haltbarkeit", sublabel: "bis zu 10 Stunden Duft" },
];

function StatCounter({
  value,
  suffix,
  label,
  sublabel,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay: number;
}): React.ReactElement {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 2,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix, delay]);

  return (
    <div ref={containerRef} className="text-center">
      <span
        ref={numberRef}
        className="block font-serif text-6xl font-light text-accent md:text-7xl"
      >
        0{suffix}
      </span>
      <p className="mt-3 font-sans text-lg font-medium text-foreground">
        {label}
      </p>
      <p className="mt-1 font-sans text-sm text-foreground/50">
        {sublabel}
      </p>
    </div>
  );
}

export function Revolution(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        {/* Grosse Headline */}
        <AnimatedText
          as="h2"
          className="text-center font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Bezahle den Inhalt, nicht die Marke.
        </AnimatedText>

        {/* Subtitle */}
        <ScrollReveal delay={0.3} className="mx-auto mt-8 max-w-2xl">
          <p className="text-center font-sans text-lg leading-relaxed text-foreground/60">
            Kein Geld für TV-Werbung. Keine teuren Designer-Flakons.
            Kein Einzelhandel. Nur das, was zählt: erstklassiger Duft
            zum fairen Preis — direkt zu dir.
          </p>
        </ScrollReveal>

        {/* Produkt-Bild */}
        <ScrollReveal delay={0.4} className="mx-auto mt-16 mb-16 max-w-md">
          <div className="relative mx-auto aspect-[4/5] w-64 overflow-hidden rounded-2xl">
            <Image
              src="/images/alle/IMG_3786.jpeg"
              alt="Olfazeta Luxury Extrait de Parfum"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
