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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -12,
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
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* Image Side */}
        <ScrollReveal direction="left" distance={60} className="order-2 md:order-1">
          <div className="relative">
            {/* Main Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
              <div ref={imageRef} className="absolute inset-x-0 top-0 h-[125%]">
                <Image
                  src="/images/alle/Facetune_12-10-2024-14-42-56.jpeg"
                  alt="Jules \u2014 Gr\u00fcnderin von Jules Parfum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Logo Badge */}
              <div className="absolute top-5 left-5 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                <Image
                  src="/logos/jules-parfum-logo-original.png"
                  alt="Jules Parfum Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Decorative accent line */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-accent/15" />

            {/* Small lifestyle overlay image */}
            <div className="absolute -right-6 -bottom-6 z-10 hidden h-36 w-28 overflow-hidden rounded-2xl border-4 border-background shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:block">
              <Image
                src="/images/alle/IMG_3790.jpeg"
                alt="Olfazeta Parfum Lifestyle"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text Side */}
        <div className="order-1 md:order-2">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Die Frau hinter dem Duft
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            delay={0.2}
            className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl"
          >
            &Uuml;ber Jules Parfum
          </AnimatedText>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground/55 md:text-lg">
              Als unabh&auml;ngige Chogan Vertriebspartnerin habe ich es mir zur
              Aufgabe gemacht, Menschen den Zugang zu hochwertigen D&uuml;ften
              zu erm&ouml;glichen &mdash; ohne den Luxus-Aufpreis der gro&szlig;en Marken.
            </p>
          </ScrollReveal>

          {/* Pullquote */}
          <ScrollReveal delay={0.35}>
            <blockquote className="relative my-8 border-l-2 border-accent/30 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
                &bdquo;Jeder Duft erz&auml;hlt eine Geschichte. Lass mich dir helfen, deine zu finden.&ldquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-sans text-base leading-relaxed text-foreground/55 md:text-lg">
              Pers&ouml;nliche Beratung, ehrliche Empfehlungen und D&uuml;fte, die begeistern &mdash;
              das ist mein Versprechen an dich.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-10">
              <Button href="/kontakt" variant="outline">
                Kontakt aufnehmen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
