import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Jules Parfum — Angaben gemäß §5 DDG. Unabhängige Chogan Vertriebspartnerin.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage(): React.ReactElement {
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-background pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Page Headline */}
          <div className="mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
              Rechtliches
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Impressum
            </h1>
            <p className="mt-4 font-sans text-sm text-foreground/40">
              Angaben gemäß §5 DDG (Digitale-Dienste-Gesetz)
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Diensteanbieter */}
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground">
                Diensteanbieter
              </h2>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
              <address className="mt-5 font-sans text-base not-italic leading-loose text-foreground/70">
                <strong className="font-medium text-foreground">[VOLLSTÄNDIGER NAME]</strong>
                <br />
                [STRASSE HAUSNUMMER]
                <br />
                04442 Zwenkau
                <br />
                Deutschland
              </address>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground">
                Kontakt
              </h2>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
              <dl className="mt-5 space-y-2 font-sans text-base text-foreground/70">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-foreground/40">E-Mail</dt>
                  <dd>
                    <a
                      href="mailto:[E-MAIL-ADRESSE]"
                      className="transition-colors duration-200 hover:text-accent"
                    >
                      [E-MAIL-ADRESSE]
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-foreground/40">Telefon</dt>
                  <dd>[TELEFONNUMMER]</dd>
                </div>
              </dl>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground">
                Umsatzsteuerliche Angaben
              </h2>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
              <p className="mt-5 font-sans text-base leading-relaxed text-foreground/70">
                [UST-IDNR ODER HINWEIS AUF KLEINUNTERNEHMERREGELUNG — Beispiel:
                &ldquo;Gemäß §19 UStG wird keine Umsatzsteuer berechnet
                (Kleinunternehmerregelung).&rdquo;]
              </p>
            </section>

            {/* Chogan-Disclaimer */}
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground">
                Hinweis zur Marke Chogan
              </h2>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
              <div className="mt-5 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="font-sans text-base leading-relaxed text-foreground/70">
                  Jules Parfum ist eine unabhängige Chogan Vertriebspartnerin.
                  Die Marken &ldquo;Chogan&rdquo; und &ldquo;Olfazeta&rdquo; sind
                  eingetragene Marken der Chogan Group S.p.A. Diese Website wird
                  eigenverantwortlich betrieben und steht in keiner direkten
                  organisatorischen Verbindung zur Chogan Group S.p.A.
                </p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground">
                Haftungsausschluss
              </h2>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
              <div className="mt-5 space-y-5 font-sans text-base leading-relaxed text-foreground/70">
                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Haftung für Inhalte
                  </h3>
                  <p>
                    Als Diensteanbieter bin ich gemäß §7 Abs. 1 DDG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§8 bis 10 DDG bin ich als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Haftung für Links
                  </h3>
                  <p>
                    Mein Angebot enthält Links zu externen Websites Dritter, auf
                    deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                    diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                    Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Urheberrecht
                  </h3>
                  <p>
                    Die durch die Seitenbetreiberin erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung der jeweiligen
                    Autorin.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
