"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  {
    value: 30,
    suffix: "%",
    label: "Duftessenz",
    sublabel: "statt 15\u201320% bei Gro\u00dfmarken",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    value: 0,
    suffix: "%",
    label: "Wasserzusatz",
    sublabel: "f\u00fcr maximale Intensit\u00e4t",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: "h",
    label: "Haltbarkeit",
    sublabel: "bis zu 10 Stunden Duft",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

function StatCard({
  value,
  suffix,
  label,
  sublabel,
  icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  index: number;
}): React.ReactElement {
  const numberRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 2,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix, index]);

  return (
    <ScrollReveal delay={index * 0.12} distance={30}>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] sm:p-10"
      >
        {/* Large background number */}
        <span className="pointer-events-none absolute -top-6 -right-4 font-serif text-[10rem] font-light leading-none text-foreground/[0.02] select-none">
          {value}{suffix}
        </span>

        {/* Icon */}
        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]">
          {icon}
        </div>

        {/* Number */}
        <span
          ref={numberRef}
          className="relative block font-serif text-5xl font-light text-foreground md:text-6xl"
        >
          0{suffix}
        </span>

        {/* Labels */}
        <p className="relative mt-3 font-sans text-lg font-medium text-foreground">
          {label}
        </p>
        <p className="relative mt-1 font-sans text-sm text-foreground/45">
          {sublabel}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function Revolution(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 md:py-48">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Das Geheimnis
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Bezahle den Inhalt, nicht die Marke.
          </AnimatedText>

          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-foreground/50 md:text-lg">
              Kein Geld f&uuml;r TV-Werbung. Keine teuren Designer-Flakons.
              Kein Einzelhandel. Nur das, was z&auml;hlt: erstklassiger Duft
              zum fairen Preis &mdash; direkt zu dir.
            </p>
          </ScrollReveal>
        </div>

        {/* Stat Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
