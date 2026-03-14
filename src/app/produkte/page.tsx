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

export default function ProduktePage(): React.ReactElement {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-32 pb-20">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
