import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";
import { Revolution } from "@/components/sections/Revolution";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CatalogPreview } from "@/components/sections/CatalogPreview";
import { AboutJules } from "@/components/sections/AboutJules";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { faqs } from "@/lib/faq-data";

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

        {/* 6. Testimonials: Kundenstimmen */}
        <Testimonials />

        {/* 7. So einfach gehts: 3-Step Prozess */}
        <HowItWorks />

        {/* 8. Kontakt / Lead-Formular */}
        <ContactForm />

        {/* 9. FAQ: Häufige Fragen */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
