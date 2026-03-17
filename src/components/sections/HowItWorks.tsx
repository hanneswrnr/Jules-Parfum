"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";


const steps = [
  {
    number: "01",
    title: "Nachricht schreiben",
    description:
      "Schreib mir per WhatsApp oder Instagram mit deinen Duft-Vorlieben \u2014 welche Noten magst du? Frisch, holzig, blumig?",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Duftliste erhalten",
    description:
      "Du erh\u00e4ltst eine pers\u00f6nliche Auswahl passender D\u00fcfte mit Beschreibungen und Preis \u2014 ganz unverbindlich.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Geniessen",
    description:
      "Bestelle deine Favoriten und erlebe Extrait de Parfum in seiner reinsten Form. Direkt zu dir nach Hause.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}): React.ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const numberEl = el.querySelector(".step-number");
    if (!numberEl) return;

    const ctx = gsap.context(() => {
      gsap.from(numberEl, {
        y: 20,
        opacity: 0,
        duration: 1.2,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <ScrollReveal delay={index * 0.15} distance={40} className="h-full">
      <div
        ref={cardRef}
        className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white p-8 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] md:items-start md:text-left sm:p-10"
      >
        {/* Large Background Number */}
        <span className="step-number pointer-events-none absolute -top-4 -right-2 font-serif text-[8rem] font-light leading-none text-foreground/[0.06] select-none sm:text-[10rem]">
          {step.number}
        </span>

        {/* Icon Circle */}
        <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]">
          {step.icon}
        </div>

        {/* Content */}
        <div className="relative">
          <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/60">
              Schritt {step.number}
            </span>
            {index < steps.length - 1 && (
              <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-accent/20 to-transparent md:block" />
            )}
          </div>

          <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {step.title}
          </h3>

          <p className="mx-auto mt-3 max-w-sm font-sans text-base leading-relaxed text-foreground/50 md:mx-0">
            {step.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function HowItWorks(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              In drei Schritten
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            So einfach geht&apos;s.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Dein Signatur-Duft ist nur drei Schritte entfernt.
            </p>
          </ScrollReveal>
        </div>

        {/* Step Cards Grid */}
        <div className="mt-16 grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA with Image */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-20 overflow-hidden rounded-3xl">
            <div className="relative h-64 sm:h-72">
              <Image
                src="/images/alle/IMG_3797.jpeg"
                alt="Chogan Duftproben-Koffer mit \u00fcber 100 D\u00fcften"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center sm:items-start sm:text-left sm:px-14">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  Pers&ouml;nliche Beratung
                </p>
                <h3 className="mt-3 max-w-md font-serif text-3xl font-light text-white sm:text-4xl">
                  Lass uns deinen Duft finden.
                </h3>
                <a
                  href="https://wa.me/491735231044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-sans text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  WhatsApp schreiben
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
