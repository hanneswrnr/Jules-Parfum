import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { Header } from "@/components/layout/Header";
import { Revolution } from "@/components/sections/Revolution";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { AboutJules } from "@/components/sections/AboutJules";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <Header />

      <main>
        {/* 1. Hero: Canvas Scroll Animation */}
        <HeroCanvas />

        {/* 2. Die Revolution: Warum unsere Preise fair sind */}
        <Revolution />

        {/* 3. Feature Grid: Qualitäts-Facts */}
        <div id="qualitaet">
          <FeatureGrid />
        </div>

        {/* 4. Über Jules Parfum */}
        <div id="ueber">
          <AboutJules />
        </div>

        {/* 5. So einfach gehts: 3-Step Prozess */}
        <HowItWorks />

        {/* 6. Kontakt / Lead-Formular */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
