"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps): React.ReactElement {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center">
        {/* Decorative accent line */}
        <div className="mx-auto mb-8 h-[1px] w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
          Etwas ist schiefgelaufen
        </p>

        <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground md:text-6xl">
          Ein Fehler ist aufgetreten
        </h1>

        <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-foreground/50">
          Es tut uns leid, da ist etwas schiefgelaufen.
          Bitte versuche es erneut oder kehre zur Startseite zur&uuml;ck.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-foreground px-8 py-3.5 font-sans text-sm font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="rounded-full border border-foreground/15 px-8 py-3.5 font-sans text-sm font-medium text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
          >
            Zur Startseite
          </a>
        </div>

        {/* Decorative accent line */}
        <div className="mx-auto mt-12 h-[1px] w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
    </main>
  );
}
