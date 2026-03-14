"use client";

import { useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import {
  perfumes,
  getFlaconImage,
  getFragranceGradient,
  categoryInfo,
  type Perfume,
} from "@/data/catalog";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const FEATURED_IDS = ["lux-106", "dam-006", "her-001", "myth-afrodite"];

const categoryAccents: Record<string, string> = {
  luxury: "from-amber-500/20 to-amber-600/5",
  damen: "from-rose-400/20 to-rose-500/5",
  herren: "from-slate-500/20 to-slate-600/5",
  mythologik: "from-yellow-500/20 to-yellow-600/5",
};

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

function FeaturedCard({
  perfume,
  index,
}: {
  perfume: Perfume;
  index: number;
}): React.ReactElement {
  const gradient = getFragranceGradient(perfume.fragranceNotes);
  const flaconImage = getFlaconImage(
    perfume.category,
    perfume.gender,
    perfume.number,
  );
  const minPrice = Math.min(...perfume.variants.map((v) => v.price));
  const accentGradient =
    categoryAccents[perfume.category] ?? "from-neutral-400/20 to-neutral-500/5";
  const catLabel = categoryInfo[perfume.category]?.label ?? perfume.category;

  return (
    <ScrollReveal delay={index * 0.12} distance={40}>
      <Link href="/produkte" className="group block">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(201,169,110,0.15)]">
          {/* Gradient Accent Top */}
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentGradient}`}
          />

          {/* Flacon Area */}
          <div
            className={`relative flex h-56 items-center justify-center bg-gradient-to-br sm:h-64 ${gradient}`}
          >
            {/* Floating Flacon */}
            <div className="relative h-40 w-28 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 sm:h-48 sm:w-32">
              <Image
                src={flaconImage}
                alt={`Olfazeta ${perfume.name}`}
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                sizes="128px"
              />
            </div>

            {/* Category Pill */}
            <span className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-foreground/60 backdrop-blur-sm">
              {catLabel}
            </span>

            {/* Subtle radial glow on hover */}
            <div className="pointer-events-none absolute inset-0 bg-radial from-white/0 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:from-white/10" />
          </div>

          {/* Info Section */}
          <div className="relative px-5 py-5 sm:px-6 sm:py-6">
            <h3 className="font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl">
              {perfume.name}
            </h3>
            {perfume.inspiredBy && (
              <p className="mt-1 font-sans text-[11px] italic text-accent/70 sm:text-[12px]">
                inspired by {perfume.inspiredBy}
              </p>
            )}

            {/* Price + Arrow */}
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="font-sans text-[13px] text-foreground/40">
                  ab{" "}
                  <span className="text-lg font-semibold text-foreground">
                    {formatPrice(minPrice)}&euro;
                  </span>
                </p>
                <p className="mt-0.5 font-sans text-[10px] text-foreground/30">
                  inkl. MwSt., zzgl. Versandkosten
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-foreground/30 transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function CatalogPreview(): React.ReactElement {
  const featured = useMemo(
    () =>
      FEATURED_IDS.map((id) => perfumes.find((p) => p.id === id)).filter(
        (p): p is Perfume => p !== undefined,
      ),
    [],
  );

  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 md:py-48">
      {/* Large decorative background number */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20rem] font-light leading-none text-foreground/[0.015] select-none md:text-[30rem]">
        <span ref={countRef}>{perfumes.length}</span>+
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Unsere D&uuml;fte
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Entdecke die Kollektion.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              &Uuml;ber {perfumes.length} luxuri&ouml;se D&uuml;fte &mdash; von
              blumig-frisch bis orientalisch-holzig.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((perfume, i) => (
            <FeaturedCard key={perfume.id} perfume={perfume} index={i} />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <Button href="/produkte">
              Alle Produkte entdecken &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
