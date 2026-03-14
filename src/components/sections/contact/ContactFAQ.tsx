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
    question: "Wie l\u00e4uft eine Beratung ab?",
    answer:
      "Ganz unkompliziert: Du schreibst mir deine Vorlieben und ich stelle dir eine pers\u00f6nliche Duftauswahl zusammen. Alles per E-Mail, WhatsApp oder Telefon \u2014 wie es dir am liebsten ist.",
  },
  {
    question: "Kostet die Beratung etwas?",
    answer:
      "Nein, die Beratung ist komplett kostenlos und unverbindlich. Du gehst keinerlei Verpflichtung ein.",
  },
  {
    question: "Wie schnell bekomme ich eine Antwort?",
    answer:
      "In der Regel antworte ich innerhalb von 48 Stunden. Bei WhatsApp-Anfragen oft sogar schneller.",
  },
  {
    question: "Kann ich Proben bestellen?",
    answer:
      "Ja, ich biete Duftproben an, damit du deinen Favoriten in Ruhe testen kannst. Frag einfach danach in deiner Nachricht.",
  },
  {
    question: "Wie funktioniert die Bestellung?",
    answer:
      "Nach der Beratung erh\u00e4ltst du eine pers\u00f6nliche Duftliste mit Preisen. Du sagst mir, welche D\u00fcfte du m\u00f6chtest, und ich k\u00fcmmere mich um alles Weitere.",
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
          <span className={`pr-8 font-serif text-lg font-medium transition-colors duration-300 md:text-xl ${
            isOpen ? "text-foreground" : "text-foreground/70"
          }`}>
            {item.question}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
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

export function ContactFAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream px-6 py-32 md:py-48">
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
            Fragen zur Beratung.
          </AnimatedText>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-foreground/40 md:text-lg">
              Alles rund um Beratung, Bestellung und Ablauf.
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
