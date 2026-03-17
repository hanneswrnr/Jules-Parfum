"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GoogleMapsEmbed } from "@/components/ui/GoogleMapsEmbed";

const methods = [
  {
    number: "01",
    title: "WhatsApp",
    description:
      "Schick mir eine kurze Nachricht f\u00fcr eine schnelle und unkomplizierte Beratung \u2014 ideal f\u00fcr kurze Fragen.",
    highlight: "Schnellste Antwort",
    href: "https://wa.me/491735231044",
    linkLabel: "Chat starten",
    external: true,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Instagram",
    description:
      "Folge mir f\u00fcr Neuigkeiten, Duft-Tipps und pers\u00f6nliche Empfehlungen. Du kannst mich auch per DM erreichen.",
    highlight: "Community",
    href: "https://www.instagram.com/juliemchlk",
    linkLabel: "Profil besuchen",
    external: true,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Telefon",
    description:
      "Ruf mich an f\u00fcr eine pers\u00f6nliche Beratung. Ich freue mich, von dir zu h\u00f6ren.",
    highlight: "Pers\u00f6nlich",
    href: "tel:+491735231044",
    linkLabel: "0173 5231044",
    external: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
];

export function ContactMethods(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-32 md:py-48">
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Erreichbar f&uuml;r dich
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            W&auml;hle deinen Weg.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Du erreichst mich &uuml;ber verschiedene Kan&auml;le &mdash; w&auml;hle den, der dir am besten passt.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
          {methods.map((method, i) => (
            <ScrollReveal key={method.number} delay={i * 0.15} distance={40} className="h-full">
              <a
                href={method.href}
                {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white/50 p-8 transition-all duration-700 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] sm:p-10"
              >
                {/* Large Background Number */}
                <span className="pointer-events-none absolute -top-4 -right-2 font-serif text-[8rem] font-light leading-none text-foreground/[0.04] select-none sm:text-[10rem]">
                  {method.number}
                </span>

                {/* Icon Circle */}
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/8 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]">
                  {method.icon}
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  {/* Highlight Pill */}
                  <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {method.highlight}
                  </span>

                  <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {method.title}
                  </h3>

                  <p className="mt-3 max-w-sm font-sans text-base leading-relaxed text-foreground/50">
                    {method.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="relative mt-6 flex items-center gap-2 font-sans text-sm font-medium text-accent transition-all duration-300 group-hover:gap-3">
                  {method.linkLabel}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Map Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-accent/20">
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
