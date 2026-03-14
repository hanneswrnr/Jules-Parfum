"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";
import { perfumes } from "@/data/catalog";

export function Hero(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Text entrance
      tl.from(taglineRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          headingRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ctaGroupRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          statsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );

      // Image entrance
      tl.from(
        imageRef.current,
        {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        0.3,
      );

      // Badge pop-in
      tl.from(
        badgeRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2)",
        },
        0.9,
      );

      // Subtle parallax on scroll
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
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-rose-100/20" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 lg:flex-row lg:items-center lg:gap-12 lg:pt-28">
        {/* Left: Text Content */}
        <div className="relative z-10 flex-1 py-12 text-center lg:py-0 lg:text-left">
          <p
            ref={taglineRef}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Extrait de Parfum
          </p>

          <h1
            ref={headingRef}
            className="mt-5 font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Finde deinen
            <br />
            <span className="italic">Signatur-Duft.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-foreground/50 md:text-lg lg:mx-0"
          >
            Luxuri&ouml;se D&uuml;fte mit 30% Essenz &mdash; ohne den Preis der
            gro&szlig;en Marken. Kein Wasser, kein Marketing, nur Duft.
          </p>

          {/* CTA Group */}
          <div ref={ctaGroupRef} className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 font-sans text-sm font-medium tracking-wide text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              Jetzt anfragen
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>

          {/* Trust Stats */}
          <div
            ref={statsRef}
            className="mt-14 flex items-center justify-center gap-6 border-t border-foreground/[0.06] pt-8 sm:gap-12 lg:justify-start"
          >
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                {perfumes.length}+
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                D&uuml;fte
              </p>
            </div>
            <div className="h-8 w-[1px] bg-foreground/[0.08]" />
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                30%
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                Essenz
              </p>
            </div>
            <div className="h-8 w-[1px] bg-foreground/[0.08]" />
            <div>
              <p className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                10h
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-foreground/40">
                Haltbarkeit
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
              src="/images/alle/IMG_3786.jpeg"
              alt="Olfazeta Luxury Extrait de Parfum Flacon"
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
            className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/80 px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:left-4 sm:top-12 sm:translate-x-0 lg:left-0"
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
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium text-foreground/50">
                  100% Vegan
                </p>
                <p className="font-sans text-xs font-semibold text-foreground">
                  Tierversuchsfrei
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
