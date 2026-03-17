"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GoogleMapsEmbed } from "@/components/ui/GoogleMapsEmbed";
import { BRAND_BLUR } from "@/lib/blur-placeholder";
import Image from "next/image";

const contactMethods = [
  {
    title: "WhatsApp",
    subtitle: "Schnellste Antwort",
    description: "Schreib mir direkt per WhatsApp f\u00fcr eine unkomplizierte Beratung.",
    href: "https://wa.me/491735231044",
    external: true,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    subtitle: "Community & DMs",
    description: "Folge mir f\u00fcr Duft-Tipps oder schreib mir per DM.",
    href: "https://www.instagram.com/juliemchlk",
    external: true,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    title: "Telefon",
    subtitle: "Pers\u00f6nlich sprechen",
    description: "Ruf mich an f\u00fcr eine pers\u00f6nliche Beratung.",
    href: "tel:+491735231044",
    external: false,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
];

export function ContactSection(): React.ReactElement {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-cream px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        {/* Top: Image + Heading & Contact Cards */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: Image */}
          <ScrollReveal direction="left" distance={50}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/alle/IMG_3789.jpeg"
                alt="Olfazeta Extrait de Parfum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BRAND_BLUR}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Info */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-white/60">Antwort innerhalb</p>
                      <p className="font-sans text-sm font-semibold text-white">48 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-white/60">Beratung</p>
                      <p className="font-sans text-sm font-semibold text-white">Kostenlos &amp; unverbindlich</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Heading + Contact Cards */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                Kontakt
              </p>
            </ScrollReveal>

            <AnimatedText
              as="h2"
              className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl"
            >
              Finde deinen Duft.
            </AnimatedText>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-foreground/50 md:mx-0 md:max-w-none">
                Schreib mir und ich stelle dir eine pers&ouml;nliche Duftauswahl zusammen &mdash; kostenlos und unverbindlich.
              </p>
            </ScrollReveal>

            {/* Contact Method Cards */}
            <div className="mt-8 space-y-3.5">
              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.title} delay={0.3 + i * 0.1} distance={20}>
                  <a
                    href={method.href}
                    {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 rounded-2xl border border-foreground/[0.06] bg-white/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:bg-white hover:shadow-[0_12px_40px_rgba(201,169,110,0.1)]"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_25px_rgba(201,169,110,0.25)]">
                      {method.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif text-lg font-medium text-foreground">
                          {method.title}
                        </h3>
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                          {method.subtitle}
                        </span>
                      </div>
                      <p className="mt-0.5 font-sans text-sm text-foreground/45">
                        {method.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="h-5 w-5 shrink-0 text-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Full-width Map */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-accent/20">
            <div className="relative h-56 md:h-72">
              <GoogleMapsEmbed className="h-full w-full border-0" />
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-r from-accent to-accent-light px-6 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/25">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium text-white/70">Standort</p>
                <p className="font-sans text-sm font-semibold text-white">04442 Zwenkau &mdash; S&uuml;dlich von Leipzig</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
