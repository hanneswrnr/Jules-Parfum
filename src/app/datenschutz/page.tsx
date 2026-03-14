import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Jules Parfum gemäß DSGVO. Informationen zur Verarbeitung personenbezogener Daten.",
  alternates: {
    canonical: "/datenschutz",
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

export default function DatenschutzPage(): React.ReactElement {
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
              Datenschutz&shy;erklärung
            </h1>
            <p className="mt-4 font-sans text-sm text-foreground/40">
              Gemäß Art. 13 DSGVO — Stand: März 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* 1. Verantwortliche */}
            <Section title="1. Verantwortliche/r (Art. 13 Abs. 1 DSGVO)">
              <p>
                Verantwortliche Person im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und sonstiger nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <address className="not-italic rounded-2xl border border-accent/15 bg-accent/5 p-5">
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
                  className="transition-colors duration-200 hover:text-accent"
                >
                  julie.michalek22@gmail.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+491735231044"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  0173 5231044
                </a>
              </address>
            </Section>

            {/* 2. Allgemeines */}
            <Section title="2. Allgemeines zur Datenverarbeitung">
              <p>
                Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst und
                behandle Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <p>
                Die Nutzung meiner Website ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf meinen Seiten
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis.
              </p>
              <p>
                Ich weise darauf hin, dass die Datenübertragung im Internet
                (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>
            </Section>

            {/* 3. Rechtsgrundlagen */}
            <Section title="3. Rechtsgrundlagen (Art. 6 DSGVO)">
              <p>
                Soweit ich für Verarbeitungsvorgänge personenbezogener Daten
                eine Einwilligung einholt, dient Art. 6 Abs. 1 lit. a DSGVO als
                Rechtsgrundlage.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten, die zur
                Erfüllung eines Vertrages oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
                als Rechtsgrundlage.
              </p>
              <p>
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich ist, dient Art. 6
                Abs. 1 lit. c DSGVO als Rechtsgrundlage.
              </p>
              <p>
                Wenn die Verarbeitung zur Wahrung eines berechtigten Interesses
                meinerseits oder eines Dritten erforderlich ist und die
                Interessen, Grundrechte und Grundfreiheiten der betroffenen
                Person das erstgenannte Interesse nicht überwiegen, dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage.
              </p>
            </Section>

            {/* 4. Kontaktformular */}
            <Section title="4. Kontaktformular">
              <p>
                Wenn Sie mir über das Kontaktformular auf dieser Website eine
                Anfrage zukommen lassen, werden folgende Daten erhoben:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Vorname und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Nachricht / Anfrage</li>
                <li>Duftpräferenzen (optional)</li>
              </ul>
              <p>
                Diese Angaben werden zum Zweck der Bearbeitung Ihrer Anfrage und
                für den Fall von Anschlussfragen bei mir gespeichert. Eine
                Weitergabe dieser Daten ohne Ihre Einwilligung findet nicht
                statt.
              </p>
              <SubHeading>Rechtsgrundlage</SubHeading>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen / Vertragserfüllung). Sofern es sich
                bei Ihrer Kontaktaufnahme nicht um vorvertragliche Maßnahmen
                handelt, ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Bearbeitung von Kundenanfragen).
              </p>
              <SubHeading>Speicherdauer</SubHeading>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die
                personenbezogenen Daten aus dem Kontaktformular ist dies dann
                der Fall, wenn die jeweilige Konversation mit Ihnen beendet ist
                und keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </Section>

            {/* 5. Cookies & Einwilligung */}
            <Section title="5. Cookies &amp; Einwilligungsverwaltung">
              <p>
                Diese Website verwendet ein Cookie-Consent-Banner, &uuml;ber das Sie
                beim ersten Besuch informiert werden und Ihre Pr&auml;ferenzen festlegen
                k&ouml;nnen. Ihre Auswahl wird im Local Storage Ihres Browsers
                gespeichert, damit sie bei weiteren Besuchen erhalten bleibt.
              </p>
              <SubHeading>Kategorien</SubHeading>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  <strong className="font-medium text-foreground">Essentielle Cookies:</strong>{" "}
                  Diese sind f&uuml;r die grundlegende Funktion der Website erforderlich
                  und k&ouml;nnen nicht deaktiviert werden. Es werden keine
                  personenbezogenen Daten an Dritte &uuml;bermittelt.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Externe Medien:</strong>{" "}
                  Inhalte von Drittanbietern (z.&thinsp;B. Google Maps) werden erst nach
                  Ihrer ausdr&uuml;cklichen Einwilligung geladen. Ohne Ihre Zustimmung
                  findet keine Verbindung zu externen Servern statt.
                </li>
              </ul>
              <SubHeading>Ihre Wahlm&ouml;glichkeiten</SubHeading>
              <p>
                Sie k&ouml;nnen Ihre Cookie-Einstellungen jederzeit &uuml;ber den Link
                &ldquo;Cookie-Einstellungen&rdquo; im Footer der Website oder beim
                erneuten Besuch &auml;ndern. Bereits erteilte Einwilligungen k&ouml;nnen
                Sie jederzeit widerrufen.
              </p>
              <SubHeading>Rechtsgrundlage</SubHeading>
              <p>
                Die Speicherung Ihrer Einwilligungsentscheidung erfolgt auf Grundlage
                von Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung zur
                Nachweisbarkeit der Einwilligung). Das Laden externer Medien erfolgt
                auf Grundlage Ihrer Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a
                DSGVO.
              </p>
            </Section>

            {/* 6. Google Maps */}
            <Section title="6. Google Maps">
              <p>
                Diese Website kann Google Maps zur Darstellung von Karten
                einbinden. Anbieter ist die Google LLC, 1600 Amphitheatre
                Parkway, Mountain View, CA 94043, USA.
              </p>
              <p>
                Ich setze Google Maps in einer datenschutzfreundlichen
                2-Klick-Lösung ein: Google Maps wird erst nach Ihrer aktiven
                Zustimmung (zweiter Klick) geladen. Erst dann wird eine
                Verbindung zu den Servern von Google hergestellt.
              </p>
              <SubHeading>Datenübermittlung in die USA</SubHeading>
              <p>
                Bei Nutzung von Google Maps können Daten an Server der Google
                LLC in den USA übermittelt werden. Google LLC ist nach dem
                EU-US Data Privacy Framework (Angemessenheitsbeschluss der
                EU-Kommission vom 10. Juli 2023) zertifiziert, sodass ein
                angemessenes Datenschutzniveau gewährleistet ist.
              </p>
              <p>
                Rechtsgrundlage für die Einbindung ist Ihre Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen zum Umgang
                mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  policies.google.com/privacy
                </a>
              </p>
            </Section>

            {/* 7. Webfonts */}
            <Section title="7. Webfonts">
              <p>
                Diese Website verwendet keine extern geladenen Schriftarten.
                Alle Schriften werden lokal über{" "}
                <code className="rounded bg-foreground/5 px-1.5 py-0.5 font-mono text-sm">
                  next/font
                </code>{" "}
                des Next.js-Frameworks eingebunden. Es werden keine Verbindungen
                zu externen Servern wie Google Fonts hergestellt, und es werden
                keine personenbezogenen Daten an Dritte übermittelt.
              </p>
            </Section>

            {/* 8. Server-Log-Dateien */}
            <Section title="8. Server-Log-Dateien">
              <p>
                Der Provider dieser Website erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch übermittelt. Dies sind:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Rechtsgrundlage für die Datenverarbeitung ist
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am
                sicheren Betrieb der Website).
              </p>
            </Section>

            {/* 9. Betroffenenrechte */}
            <Section title="9. Ihre Rechte als betroffene Person">
              <p>
                Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>

              <SubHeading>Auskunftsrecht (Art. 15 DSGVO)</SubHeading>
              <p>
                Sie haben das Recht, jederzeit unentgeltlich Auskunft über die
                über Sie gespeicherten personenbezogenen Daten zu erhalten.
              </p>

              <SubHeading>Recht auf Berichtigung (Art. 16 DSGVO)</SubHeading>
              <p>
                Sie haben das Recht, unrichtige oder unvollständige
                personenbezogene Daten, die über Sie gespeichert sind, zu
                berichtigen.
              </p>

              <SubHeading>Recht auf Löschung (Art. 17 DSGVO)</SubHeading>
              <p>
                Sie haben das Recht, die Löschung der über Sie gespeicherten
                personenbezogenen Daten zu verlangen, sofern die Verarbeitung
                nicht zur Ausübung des Rechts auf freie Meinungsäußerung und
                Information, zur Erfüllung einer rechtlichen Verpflichtung, aus
                Gründen des öffentlichen Interesses oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen erforderlich
                ist.
              </p>

              <SubHeading>Recht auf Einschränkung (Art. 18 DSGVO)</SubHeading>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
                Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig
                ist, Sie aber deren Löschung ablehnen, oder ich die Daten nicht
                mehr benötige, Sie jedoch diese zur Geltendmachung, Ausübung
                oder Verteidigung von Rechtsansprüchen benötigen.
              </p>

              <SubHeading>Recht auf Datenportabilität (Art. 20 DSGVO)</SubHeading>
              <p>
                Sie haben das Recht, Ihre personenbezogenen Daten, die Sie mir
                bereitgestellt haben, in einem strukturierten, gängigen und
                maschinenlesebaren Format zu erhalten oder die Übermittlung an
                einen anderen Verantwortlichen zu verlangen.
              </p>

              <SubHeading>Widerspruchsrecht (Art. 21 DSGVO)</SubHeading>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage von
                berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO
                verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
                einzulegen.
              </p>
            </Section>

            {/* 10. Beschwerderecht */}
            <Section title="10. Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
                bei einer Datenschutz-Aufsichtsbehörde zu, insbesondere in dem
                Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder
                des Orts des mutmaßlichen Verstoßes.
              </p>
              <p>
                Da der Sitz von Jules Parfum in Zwenkau (Sachsen) liegt, ist die
                zuständige Aufsichtsbehörde:
              </p>
              <div className="rounded-2xl border border-accent/15 bg-accent/5 p-5">
                <p className="font-medium text-foreground">
                  Sächsischer Datenschutzbeauftragter
                </p>
                <p className="mt-1">
                  Dr. Juliane Hundert
                  <br />
                  Devrientstraße 5<br />
                  01067 Dresden
                  <br />
                  <a
                    href="https://www.datenschutz.sachsen.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    www.datenschutz.sachsen.de
                  </a>
                </p>
              </div>
            </Section>

            {/* 11. Speicherdauer */}
            <Section title="11. Speicherdauer">
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten habe (z.B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>
            </Section>

            {/* 12. SSL/TLS */}
            <Section title="12. SSL/TLS-Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von{" "}
                <code className="rounded bg-foreground/5 px-1.5 py-0.5 font-mono text-sm">
                  http://
                </code>{" "}
                auf{" "}
                <code className="rounded bg-foreground/5 px-1.5 py-0.5 font-mono text-sm">
                  https://
                </code>{" "}
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an mich übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
