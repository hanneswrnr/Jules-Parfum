"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";

export function ContactHero(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(taglineRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          headingRef.current,
          { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          subtitleRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          ctaGroupRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .from(
          highlightsRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        );

      tl.from(
        imageRef.current,
        { scale: 1.1, opacity: 0, duration: 1.2, ease: "power2.out" },
        0.3,
      );

      tl.from(
        badgeRef.current,
        { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(2)" },
        0.9,
      );

      gsap.to(imageRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
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
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-rose-100/20" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 lg:flex-row lg:items-center lg:gap-12 lg:pt-28">
        {/* Left: Text Content */}
        <div className="relative z-10 flex-1 py-12 lg:py-0">
          <p
            ref={taglineRef}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Kontakt
          </p>

          <h1
            ref={headingRef}
            className="mt-5 font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Lass uns
            <br />
            <span className="italic">sprechen.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-md font-sans text-base leading-relaxed text-foreground/50 md:text-lg"
          >
            Schreib mir eine kurze Nachricht und ich finde den perfekten
            Duft f&uuml;r dich. Kostenlose Beratung, ehrliche Empfehlungen.
          </p>

          {/* CTA Group */}
          <div ref={ctaGroupRef} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt-form"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 font-sans text-sm font-medium tracking-wide text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              Zum Formular
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <Link
              href="/produkte"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/12 px-7 py-4 font-sans text-sm font-medium tracking-wide text-foreground/70 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/30 hover:text-foreground"
            >
              Produkte entdecken
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>

          {/* Highlights */}
          <div
            ref={highlightsRef}
            className="mt-14 flex items-center gap-8 border-t border-foreground/[0.06] pt-8 sm:gap-12"
          >
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                48h
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                Antwortzeit
              </p>
            </div>
            <div className="h-8 w-[1px] bg-foreground/[0.08]" />
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                Kostenlos
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                Beratung
              </p>
            </div>
            <div className="h-8 w-[1px] bg-foreground/[0.08]" />
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                100%
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                Unverbindlich
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex flex-1 items-center justify-center py-12 lg:py-0">
          <div
            ref={imageRef}
            className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] sm:max-w-lg lg:max-w-none"
          >
            <Image
              src="/images/alle/IMG_3790.jpeg"
              alt="Jules Parfum — Persönliche Beratung"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Badge */}
          <div
            ref={badgeRef}
            className="absolute -left-2 top-12 z-20 rounded-2xl border border-white/60 bg-white/80 px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:left-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium text-foreground/50">
                  Antwort innerhalb
                </p>
                <p className="font-sans text-xs font-semibold text-foreground">
                  48 Stunden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30">
            Scroll
          </p>
          <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-foreground/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
