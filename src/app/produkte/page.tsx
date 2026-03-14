import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CatalogClient } from "@/components/catalog/CatalogClient";

export const metadata: Metadata = {
  title: "Produkte — Jules Parfum",
  description:
    "Entdecke über 140 luxuriöse Düfte: Damen, Herren, Unisex, Luxus-Linie, Event-Düfte und mehr. Extrait de Parfum zum fairen Preis.",
  alternates: {
    canonical: "/produkte",
  },
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Jules Parfum — Duftkollektion",
  description:
    "Über 140 luxuriöse Extrait de Parfum Düfte für Damen, Herren und Unisex. 30% Duftessenz, 0% Wasser, 100% vegan.",
  url: "https://julesparfum.de/produkte",
  numberOfItems: 140,
  provider: {
    "@type": "LocalBusiness",
    name: "Jules Parfum",
    url: "https://julesparfum.de",
  },
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Damen-Düfte",
      description: "Extrait de Parfum für Damen",
    },
    {
      "@type": "OfferCatalog",
      name: "Herren-Düfte",
      description: "Extrait de Parfum für Herren",
    },
    {
      "@type": "OfferCatalog",
      name: "Unisex-Düfte",
      description: "Extrait de Parfum Unisex",
    },
    {
      "@type": "OfferCatalog",
      name: "Luxury-Linie",
      description: "Premium Extrait de Parfum",
    },
  ],
};

export default function ProduktePage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-32 pb-20">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
