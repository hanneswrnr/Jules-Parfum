import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";

import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Jules Parfum per WhatsApp (+49 173 5231044) oder Instagram @juliemchlk. Kostenlose Duftberatung, persönliche Empfehlungen, Antwort innerhalb 48 Stunden.",
  alternates: {
    canonical: "/kontakt",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://julesparfum.de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: "https://julesparfum.de/kontakt",
    },
  ],
};

export default function KontaktPage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main id="main-content">
        <ContactHero />
        <ContactMethods />
        <ContactFAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
