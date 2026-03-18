import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";
import { Revolution } from "@/components/sections/Revolution";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CatalogPreview } from "@/components/sections/CatalogPreview";
import { AboutJules } from "@/components/sections/AboutJules";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Jules Parfum — Luxuriöse Extrait de Parfum zum fairen Preis",
  description:
    "Entdecke Extrait de Parfum mit 30% Duftessenz, 0% Wasser, 100% vegan. Über 140 Düfte für Damen, Herren & Unisex. Persönliche Beratung in Zwenkau & online. Unabhängige Chogan Vertriebspartnerin.",
  keywords: [
    "Extrait de Parfum",
    "Parfum kaufen",
    "Chogan Parfum",
    "Olfazeta",
    "luxuriöse Düfte",
    "veganes Parfum",
    "Jules Parfum",
    "Parfum Zwenkau",
    "Parfum Leipzig",
    "Duftberatung",
    "30% Duftessenz",
  ],
  alternates: {
    canonical: "https://julesparfum.de",
  },
  openGraph: {
    title: "Jules Parfum — Luxuriöse Düfte zum fairen Preis",
    description:
      "30% Duftessenz, 0% Wasser, 100% vegan. Über 140 Extrait de Parfum Düfte.",
    url: "https://julesparfum.de",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home(): React.ReactElement {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Die Revolution: Warum unsere Preise fair sind */}
        <Revolution />

        {/* 3. Feature Grid: Qualitäts-Facts */}
        <div id="qualitaet">
          <FeatureGrid />
        </div>

        {/* 4. Katalog-Preview: Featured Düfte */}
        <CatalogPreview />

        {/* 5. Über Jules Parfum */}
        <div id="ueber">
          <AboutJules />
        </div>

        {/* 7. So einfach gehts: 3-Step Prozess */}
        <HowItWorks />

        {/* 8. Kontakt */}
        <ContactSection />

        {/* 9. FAQ: Häufige Fragen */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
