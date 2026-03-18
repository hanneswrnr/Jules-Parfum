import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MyStory } from "@/components/sections/about/MyStory";
import { MyValues } from "@/components/sections/about/MyValues";
import { WhyOlfazeta } from "@/components/sections/about/WhyOlfazeta";
import { Gallery } from "@/components/sections/about/Gallery";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Ich bin Julie Michalek — Gründerin von Jules Parfum und unabhängige Chogan Vertriebspartnerin aus Zwenkau bei Leipzig. Persönliche Duftberatung, ehrliche Empfehlungen, luxuriöse Extrait de Parfum Düfte.",
  alternates: {
    canonical: "/ueber",
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
      name: "Über mich",
      item: "https://julesparfum.de/ueber",
    },
  ],
};

export default function UeberPage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main id="main-content">
        <AboutHero />
        <MyStory />
        <MyValues />
        <WhyOlfazeta />
        <Gallery />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
