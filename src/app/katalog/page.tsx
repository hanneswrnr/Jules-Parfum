import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CatalogClient } from "@/components/catalog/CatalogClient";

export const metadata: Metadata = {
  title: "Duft-Katalog — Jules Parfum",
  description:
    "Entdecke über 140 luxuriöse Düfte: Damen, Herren, Unisex, Luxus-Linie, Event-Düfte und mehr. Extrait de Parfum zum fairen Preis.",
};

export default function KatalogPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
