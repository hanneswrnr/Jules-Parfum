import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Kontakt — Jules Parfum",
  description:
    "Schreib mir und ich stelle dir eine persönliche Duftauswahl zusammen. Kostenlose Beratung, Antwort innerhalb 48 Stunden.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktPage(): React.ReactElement {
  return (
    <>
      <Header />

      <main id="main-content">
        <ContactHero />
        <ContactMethods />
        <ContactFormSection />
        <ContactFAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
