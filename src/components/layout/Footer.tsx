export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground px-6 py-16 text-background/70 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-light text-background">
              Jules Parfum
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-background/50">
              Luxuriöse Düfte zum fairen Preis.
              <br />
              Extrait de Parfum — direkt zu dir.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-background/40">
              Rechtliches
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="/impressum"
                className="w-fit font-sans text-sm text-background/60 transition-all duration-500 hover:-translate-y-0.5 hover:text-background hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="w-fit font-sans text-sm text-background/60 transition-all duration-500 hover:-translate-y-0.5 hover:text-background hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
              >
                Datenschutzerklärung
              </a>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-background/40">
              Kontakt
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#kontakt"
                className="w-fit font-sans text-sm text-background/60 transition-all duration-500 hover:-translate-y-0.5 hover:text-background hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
              >
                Anfrage senden
              </a>
              {/* Social Media Links können hier ergänzt werden */}
            </nav>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="mt-12 h-[1px] w-full bg-background/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="font-sans text-xs text-background/40">
            &copy; {currentYear} Jules Parfum. Alle Rechte vorbehalten.
          </p>
          <p className="max-w-md text-center font-sans text-xs text-background/30 md:text-right">
            Jules Parfum ist eine unabhängige Chogan Vertriebspartnerin.
            Die Marke &ldquo;Chogan&rdquo; und &ldquo;Olfazeta&rdquo; sind
            eingetragene Marken der Chogan Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
