import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";

import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Kontakt — Jules Parfum",
  description:
    "Erreiche mich per WhatsApp, Instagram oder E-Mail. Kostenlose Beratung, Antwort innerhalb 48 Stunden.",
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
        <ContactFAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
