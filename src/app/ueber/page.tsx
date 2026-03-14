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
  title: "Über mich — Jules Parfum",
  description:
    "Lerne Jules kennen — die Frau hinter Jules Parfum. Persönliche Beratung, ehrliche Empfehlungen und luxuriöse Düfte zum fairen Preis.",
  alternates: {
    canonical: "/ueber",
  },
};

export default function UeberPage(): React.ReactElement {
  return (
    <>
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
