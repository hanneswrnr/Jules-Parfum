import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound(): React.ReactElement {
  return (
    <>
      <Header />

      <main id="main-content" className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-24 pb-24">
        <div className="text-center">
          {/* Decorative accent line */}
          <div className="mx-auto mb-8 h-[1px] w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
            Fehler 404
          </p>

          <h1 className="mt-4 font-serif text-5xl font-light leading-tight text-foreground md:text-7xl">
            Seite nicht gefunden
          </h1>

          <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-foreground/50">
            Der gesuchte Duft scheint sich verfl&uuml;chtigt zu haben.
            Die Seite existiert leider nicht oder wurde verschoben.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-full bg-foreground px-8 py-3.5 font-sans text-sm font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
            >
              Zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-foreground/15 px-8 py-3.5 font-sans text-sm font-medium text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Decorative accent line */}
          <div className="mx-auto mt-12 h-[1px] w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
      </main>

      <Footer />
    </>
  );
}
