"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Der Duft h\u00e4lt wirklich den ganzen Tag. Ich bekomme st\u00e4ndig Komplimente und niemand glaubt mir den Preis!",
    name: "Sarah M.",
    location: "Z\u00fcrich",
    rating: 5,
  },
  {
    quote:
      "Endlich ein Parfum ohne schlechtes Gewissen \u2014 vegan, langanhaltend und unschlagbar im Preis. Mein absoluter Favorit.",
    name: "Lisa K.",
    location: "Wien",
    rating: 5,
  },
  {
    quote:
      "Die pers\u00f6nliche Beratung von Julia war super. Sie hat sofort den richtigen Duft f\u00fcr mich gefunden.",
    name: "Marco T.",
    location: "M\u00fcnchen",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }): React.ReactElement {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}): React.ReactElement {
  return (
    <ScrollReveal delay={index * 0.15} distance={30}>
      <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] md:p-10">
        {/* Decorative large quote */}
        <span className="pointer-events-none absolute -top-4 -left-2 font-serif text-[8rem] leading-none text-accent/[0.06] select-none">
          &ldquo;
        </span>

        <div className="relative">
          <StarRating count={testimonial.rating} />

          <blockquote className="mt-6 font-serif text-lg leading-relaxed text-foreground/70 italic md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8 font-sans text-sm font-bold text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="font-sans text-[12px] text-foreground/40">
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Testimonials(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-32 md:py-48">
      {/* Subtle decorative dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Kundenstimmen
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Was unsere Kunden sagen.
          </AnimatedText>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
