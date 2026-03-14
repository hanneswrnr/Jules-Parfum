"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "jules-maps-consent";

interface GoogleMapsEmbedProps {
  className?: string;
}

export function GoogleMapsEmbed({ className }: GoogleMapsEmbedProps): React.ReactElement {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setHasConsent(true);
    }
  }, []);

  const handleConsent = (): void => {
    localStorage.setItem(STORAGE_KEY, "true");
    setHasConsent(true);
  };

  if (hasConsent) {
    return (
      <iframe
        title="Standort Jules Parfum — Zwenkau"
        src="https://maps.google.com/maps?q=04442+Zwenkau&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className={className ?? "h-full w-full rounded-2xl"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-2xl bg-foreground/[0.03] p-6 text-center ${className ?? "h-full w-full"}`}
    >
      {/* Pin Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>

      <p className="font-sans text-sm font-semibold text-foreground">
        04442 Zwenkau
      </p>

      {/* Consent Button */}
      <button
        type="button"
        onClick={handleConsent}
        className="rounded-full bg-accent px-5 py-2.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_6px_20px_rgba(201,169,110,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50"
      >
        Google Maps laden
      </button>

      {/* Privacy Notice */}
      <p className="font-sans text-[11px] leading-relaxed text-foreground/40">
        Mit dem Laden der Karte akzeptierst du die Datenschutzerklärung von
        Google. Deine IP-Adresse wird an Google übermittelt.{" "}
        <a
          href="/datenschutz"
          className="text-accent underline underline-offset-2 hover:text-accent/70"
        >
          Mehr in unserer Datenschutzerklärung
        </a>
        .
      </p>
    </div>
  );
}
