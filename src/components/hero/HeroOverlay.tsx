"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function HeroOverlay(): React.ReactElement {
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Einblende-Animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          lineRef.current,
          {
            scaleX: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );

      // Ausblende-Animation beim Scrollen
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top top",
          end: "+=40%",
          scrub: true,
        },
      });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
    >
      <h1
        ref={headingRef}
        className="text-center font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
      >
        Jules Parfum
      </h1>

      <div
        ref={lineRef}
        className="mt-6 h-[1px] w-16 bg-accent md:w-24"
      />

      <p
        ref={subtitleRef}
        className="mt-5 text-center font-sans text-base font-light tracking-wide text-foreground/70 md:text-lg"
      >
        Finde deinen Signatur-Duft
      </p>

      <a
        ref={ctaRef}
        href="#kontakt"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] hover:text-white"
      >
        Jetzt entdecken
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
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
}
