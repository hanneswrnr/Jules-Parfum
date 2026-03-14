"use client";

import { useState } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Sind das echte Parfums oder Kopien?",
    answer:
      "Unsere D\u00fcfte sind keine Kopien. Wir verwenden Original-Duftessenzen vom f\u00fchrenden franz\u00f6sischen Hersteller Fragworld. Es handelt sich um eigenst\u00e4ndige Kompositionen h\u00f6chster Qualit\u00e4t \u2014 keine Imitate.",
  },
  {
    question: "Warum sind die D\u00fcfte so g\u00fcnstig?",
    answer:
      "Bei uns bezahlst du den Inhalt, nicht die Marke. Kein teures TV-Marketing, keine \u00fcberteuerten Designer-Flakons, kein Zwischenh\u00e4ndler. Durch den Direktvertrieb sparen wir Kosten, die wir an dich weitergeben.",
  },
  {
    question: "Wie lange h\u00e4lt der Duft?",
    answer:
      "Unsere Parf\u00fcms sind Extrait de Parfum mit 30% Duftessenz und 0% Wasserzusatz. Dadurch halten sie 6\u201310 Stunden \u2014 deutlich l\u00e4nger als herk\u00f6mmliche Marken, die oft nur 4\u20135 Stunden halten.",
  },
  {
    question: "Muss ich das Parfum vor Gebrauch sch\u00fctteln?",
    answer:
      "Nein! Bitte das Parfum nicht sch\u00fctteln. Das kann die Duftkomposition ver\u00e4ndern. Einfach aufspr\u00fchen und genie\u00dfen.",
  },
  {
    question: "Wie kann ich bestellen?",
    answer:
      "Ganz einfach: Sende mir eine Anfrage \u00fcber das Kontaktformular mit deinen Wunschd\u00fcften. Du erh\u00e4ltst eine pers\u00f6nliche Duftliste und Beratung. Danach kannst du bequem bestellen.",
  },
  {
    question: "Sind die Produkte vegan und tierversuchsfrei?",
    answer:
      "Ja, 100%! Alle unsere Produkte sind vegan, tierversuchsfrei, ohne Parabene und hypoallergen. Zertifiziert durch Biocertitalia.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}): React.ReactElement {
  return (
    <ScrollReveal delay={index * 0.08} distance={15}>
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
          isOpen
            ? "border-accent/15 bg-white shadow-[0_4px_24px_rgba(201,169,110,0.06)]"
            : "border-foreground/[0.06] bg-white/50 hover:border-foreground/10 hover:bg-white"
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between px-7 py-6 text-left"
        >
          <span className={`pr-4 font-serif text-lg font-medium transition-colors duration-300 md:text-xl ${
            isOpen ? "text-foreground" : "text-foreground/70"
          }`}>
            {item.question}
          </span>
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
              isOpen
                ? "bg-accent text-white shadow-[0_0_20px_rgba(201,169,110,0.25)]"
                : "bg-foreground/[0.04] text-foreground/30"
            }`}
          >
            <svg
              className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-2xl px-7 font-sans text-base leading-relaxed text-foreground/50">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background px-6 py-32 md:py-48">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Gut zu wissen
            </p>
          </ScrollReveal>

          <AnimatedText
            as="h2"
            className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            H&auml;ufige Fragen.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Alles was du &uuml;ber unsere D&uuml;fte wissen musst.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion Cards */}
        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
