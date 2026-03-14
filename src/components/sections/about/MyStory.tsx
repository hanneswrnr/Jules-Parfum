"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const milestones = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Die Leidenschaft",
    text: "Alles begann mit meiner eigenen Suche nach dem perfekten Duft \u2014 hochwertig, langanhaltend und bezahlbar.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Die Entdeckung",
    text: "Chogan und die Olfazeta-Linie: Extrait de Parfum mit 30% Essenz vom franz\u00f6sischen Hersteller Fragworld.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "Die Mission",
    text: "Heute helfe ich Menschen, ihren Signatur-Duft zu finden \u2014 mit pers\u00f6nlicher Beratung und ehrlichen Empfehlungen.",
  },
];

export function MyStory(): React.ReactElement {
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* Image Side */}
        <ScrollReveal direction="left" distance={60} className="order-2 md:order-1">
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
              <div ref={imageRef} className="absolute inset-x-0 top-0 h-[125%]">
                <Image
                  src="/images/alle/IMG_3793.jpeg"
                  alt="Jules Parfum \u2014 Pers\u00f6nliche Duftberatung"
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

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Quote overlay on image */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <blockquote className="border-l-2 border-accent-light pl-4">
                  <p className="font-serif text-lg italic leading-relaxed text-white/90 md:text-xl">
                    &bdquo;Jeder Duft erz&auml;hlt eine Geschichte.&ldquo;
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Decorative accent frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-accent/15" />

            {/* Small overlay image */}
            <div className="absolute -right-6 -bottom-6 z-10 hidden h-36 w-28 overflow-hidden rounded-2xl border-4 border-background shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:block">
              <Image
                src="/images/alle/IMG_3756.jpeg"
                alt="Olfazeta Parfum Kollektion"
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
              Meine Geschichte
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            delay={0.2}
            className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Wie alles begann.
          </AnimatedText>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground/55 md:text-lg">
              Ich habe jahrelang nach dem perfekten Parfum gesucht. Als ich
              Chogan entdeckte, wusste ich: Das m&ouml;chte ich mit anderen teilen.
            </p>
          </ScrollReveal>

          {/* Timeline Milestones */}
          <div className="mt-10 space-y-0">
            {milestones.map((milestone, i) => (
              <ScrollReveal key={milestone.title} delay={0.35 + i * 0.1}>
                <div className="group relative flex gap-5 py-5">
                  {/* Timeline line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute top-14 left-[22px] h-[calc(100%-2rem)] w-[1px] bg-gradient-to-b from-accent/20 to-transparent" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(201,169,110,0.25)]">
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-foreground/45">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
