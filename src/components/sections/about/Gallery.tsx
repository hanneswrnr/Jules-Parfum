"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const images = [
  { src: "/images/alle/IMG_3759.jpeg", alt: "Jules Parfum Lifestyle", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/alle/IMG_3792.jpeg", alt: "Olfazeta Duftproben", span: "" },
  { src: "/images/alle/IMG_3795.jpeg", alt: "Olfazeta Parfum Kollektion", span: "" },
  { src: "/images/alle/IMG_3784.jpeg", alt: "Extrait de Parfum Details", span: "" },
  { src: "/images/alle/IMG_3796.jpeg", alt: "Jules Parfum Beratung", span: "" },
  { src: "/images/alle/IMG_3765.jpeg", alt: "Parfum Lifestyle Shot", span: "md:col-span-2" },
];

export function Gallery(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-32 md:py-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Einblicke
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Hinter den Kulissen.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Ein kleiner Blick in meinen Alltag mit D&uuml;ften.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.08} distance={15} className={image.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
