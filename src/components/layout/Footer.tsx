import Image from "next/image";
import Link from "next/link";

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-foreground">
      {/* Subtle top accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="px-6 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="mx-auto max-w-6xl">
          {/* Top Section: Brand + Navigation */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src="/logos/jules-parfum-logo-original.png"
                    alt="Jules Parfum Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <p className="font-serif text-2xl font-light text-background">
                  Jules Parfum
                </p>
              </div>
              <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-background/40">
                Luxuri&ouml;se D&uuml;fte zum fairen Preis. Extrait de Parfum mit 30% Duftessenz &mdash; direkt zu dir nach Hause.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-background/40 transition-all duration-500 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                  aria-label="Instagram"
                >
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-background/40 transition-all duration-500 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                  aria-label="WhatsApp"
                >
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-7 md:gap-12 md:pl-8">
              {/* Navigation */}
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                  Navigation
                </p>
                <nav className="mt-5 flex flex-col gap-3.5">
                  {[
                    { label: "Produkte", href: "/produkte" },
                    { label: "\u00dcber mich", href: "/ueber" },
                    { label: "Kontakt", href: "/kontakt" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex w-fit items-center gap-2 font-sans text-sm text-background/50 transition-all duration-300 hover:text-background"
                    >
                      <span className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Rechtliches */}
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                  Rechtliches
                </p>
                <nav className="mt-5 flex flex-col gap-3.5">
                  {[
                    { label: "Impressum", href: "/impressum" },
                    { label: "Datenschutz", href: "/datenschutz" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex w-fit items-center gap-2 font-sans text-sm text-background/50 transition-all duration-300 hover:text-background"
                    >
                      <span className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-background/10 to-transparent" />

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <p className="font-sans text-xs text-background/30">
              &copy; {currentYear} Jules Parfum. Alle Rechte vorbehalten.
            </p>
            <p className="max-w-lg text-center font-sans text-[11px] leading-relaxed text-background/20 md:text-right">
              Jules Parfum ist eine unabh&auml;ngige Chogan Vertriebspartnerin.
              Die Marke &ldquo;Chogan&rdquo; und &ldquo;Olfazeta&rdquo; sind
              eingetragene Marken der Chogan Group.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
