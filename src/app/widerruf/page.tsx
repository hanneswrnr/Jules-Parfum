import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description:
    "Widerrufsbelehrung von Jules Parfum gemäß §355 BGB. Ihr 14-tägiges Widerrufsrecht bei Fernabsatzverträgen.",
  alternates: {
    canonical: "/widerruf",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <section>
      <h2 className="font-serif text-2xl font-light text-foreground">{title}</h2>
      <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent" />
      <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-foreground/70">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <h3 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/40">
      {children}
    </h3>
  );
}

export default function WiderrufPage(): React.ReactElement {
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
              Widerrufs&shy;belehrung
            </h1>
            <p className="mt-4 font-sans text-sm text-foreground/40">
              Gemäß §355 BGB — Ihre Rechte als Verbraucher&shy;in beim Fernabsatz
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Widerrufsrecht */}
            <Section title="1. Widerrufsrecht">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="font-sans text-base leading-relaxed text-foreground/80">
                  Sie haben das Recht, binnen{" "}
                  <strong className="font-medium text-foreground">vierzehn Tagen</strong>{" "}
                  ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                </p>
              </div>
              <p>
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder
                ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren
                in Besitz genommen haben bzw. hat.
              </p>
              <p>
                Um Ihr Widerrufsrecht auszuüben, müssen Sie mich mittels einer
                eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine
                E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren:
              </p>
              <div className="rounded-2xl border border-accent/15 bg-accent/5 p-5">
                <address className="not-italic font-sans text-base leading-loose text-foreground/70">
                  <strong className="font-medium text-foreground">Julie Michalek</strong>
                  <br />
                  Feldstr. 18
                  <br />
                  04442 Zwenkau
                  <br />
                  Deutschland
                  <br />
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:julie.michalek22@gmail.com"
                    className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    julie.michalek22@gmail.com
                  </a>
                </address>
              </div>
              <p>
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
                die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </Section>

            {/* 2. Folgen des Widerrufs */}
            <Section title="2. Folgen des Widerrufs">
              <p>
                Wenn Sie diesen Vertrag widerrufen, habe ich Ihnen alle Zahlungen, die ich
                von Ihnen erhalten habe, einschließlich der Lieferkosten (mit Ausnahme der
                zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der
                Lieferung als die von mir angebotene, günstigste Standardlieferung gewählt
                haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags
                bei mir eingegangen ist.
              </p>
              <p>
                Für diese Rückzahlung verwende ich dasselbe Zahlungsmittel, das Sie bei
                der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
                wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
                wegen dieser Rückzahlung Entgelte berechnet.
              </p>
              <p>
                Ich kann die Rückzahlung verweigern, bis ich die Waren wieder zurückerhalten
                habe oder bis Sie den Nachweis erbracht haben, dass Sie die Waren
                zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
              </p>
              <p>
                Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
                vierzehn Tagen ab dem Tag, an dem Sie mich über den Widerruf dieses
                Vertrags unterrichten, an mich zurückzusenden oder zu übergeben.
                Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
                vierzehn Tagen absenden.
              </p>
              <p>
                Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
              </p>
              <p>
                Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn
                dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften
                und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen
                zurückzuführen ist.
              </p>
            </Section>

            {/* 3. Ausnahme: Hygieneschutz */}
            <Section title="3. Ausschluss des Widerrufsrechts">
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
                <SubHeading>Wichtiger Hinweis zu Parfum-Produkten</SubHeading>
                <p>
                  Das Widerrufsrecht besteht gemäß{" "}
                  <strong className="font-medium text-foreground">
                    §312g Abs. 2 Nr. 3 BGB
                  </strong>{" "}
                  <strong className="font-medium text-foreground">nicht</strong> bei Waren,
                  die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur
                  Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt
                  wurde.
                </p>
                <p className="mt-4">
                  Das bedeutet: Ungeöffnete und versiegelte Parfum-Flacons können innerhalb
                  der Widerrufsfrist zurückgegeben werden. Sobald das Siegel entfernt oder
                  der Flakon geöffnet wurde, erlischt das Widerrufsrecht aus
                  hygienerechtlichen Gründen.
                </p>
              </div>
            </Section>

            {/* 4. Muster-Widerrufsformular */}
            <Section title="4. Muster-Widerrufsformular">
              <p>
                Wenn Sie den Vertrag widerrufen wollen, können Sie das folgende Formular
                ausfüllen und zurücksenden. Die Verwendung des Formulars ist nicht
                vorgeschrieben — eine formlose Erklärung per E-Mail oder Brief genügt.
              </p>

              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 font-sans text-sm leading-relaxed text-foreground/60">
                <p className="mb-4 font-medium text-foreground/80">
                  Muster-Widerrufsformular
                </p>
                <p>
                  An:<br />
                  Julie Michalek, Feldstr. 18, 04442 Zwenkau<br />
                  E-Mail: julie.michalek22@gmail.com
                </p>
                <p className="mt-4">
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
                  Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der
                  folgenden Dienstleistung (*)
                </p>
                <p className="mt-4">Bestellt am (*) / erhalten am (*)</p>
                <p className="mt-4">Name der/des Verbraucher(s)</p>
                <p className="mt-4">Anschrift der/des Verbraucher(s)</p>
                <p className="mt-4">
                  Unterschrift der/des Verbraucher(s)<br />
                  (nur bei Mitteilung auf Papier)
                </p>
                <p className="mt-4">Datum</p>
                <p className="mt-6 text-foreground/40 text-xs">
                  (*) Unzutreffendes streichen.
                </p>
              </div>
            </Section>

            {/* 5. Streitbeilegung */}
            <Section title="5. Hinweis zur Online-Streitbeilegung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Ich bin nicht bereit und nicht verpflichtet, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
