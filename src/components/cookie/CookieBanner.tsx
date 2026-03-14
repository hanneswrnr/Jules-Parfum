"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import type { CookieConsentState } from "@/lib/cookie-consent";

export function CookieBanner(): React.ReactElement | null {
  const {
    consent,
    hasInteracted,
    acceptAll,
    rejectAll,
    updateConsent,
    isSettingsOpen,
    setIsSettingsOpen,
  } = useCookieConsent();

  const [showBanner, setShowBanner] = useState(false);
  const [localPrefs, setLocalPrefs] = useState<CookieConsentState>(consent);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Delay banner appearance slightly for smooth entrance
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
    setShowBanner(false);
  }, [hasInteracted]);

  // Sync local prefs when settings open
  useEffect(() => {
    if (isSettingsOpen) {
      setLocalPrefs(consent);
    }
  }, [isSettingsOpen, consent]);

  // Trap focus & close on Escape in settings modal
  useEffect(() => {
    if (!isSettingsOpen) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSettingsOpen, setIsSettingsOpen]);

  // Lock body scroll when settings modal is open
  useEffect(() => {
    if (isSettingsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSettingsOpen]);

  const handleSaveSettings = (): void => {
    updateConsent(localPrefs);
  };

  const isBannerVisible = showBanner && !hasInteracted;

  return (
    <>
      {/* Cookie Banner */}
      <div
        role="dialog"
        aria-label="Cookie-Einstellungen"
        aria-hidden={!isBannerVisible}
        className={`fixed inset-x-0 bottom-0 z-[190] transition-all duration-700 ease-out ${
          isBannerVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        {/* Backdrop gradient */}
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative border-t border-accent/10 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-5xl px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="font-sans text-sm leading-relaxed text-foreground/70">
                  Ich verwende Cookies und externe Dienste, um dir die beste Erfahrung
                  auf meiner Website zu bieten.{" "}
                  <Link
                    href="/datenschutz"
                    className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Mehr erfahren
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:flex-nowrap sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="rounded-full border border-foreground/10 px-4 py-2.5 font-sans text-xs font-medium text-foreground/60 transition-all duration-300 hover:border-foreground/20 hover:text-foreground sm:px-5"
                >
                  Einstellungen
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full border border-foreground/10 px-4 py-2.5 font-sans text-xs font-medium text-foreground/60 transition-all duration-300 hover:border-foreground/20 hover:text-foreground sm:px-5"
                >
                  Nur Essentielle
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-accent px-5 py-2.5 font-sans text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_6px_20px_rgba(201,169,110,0.3)] sm:px-6"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal Overlay */}
      <div
        className={`fixed inset-0 z-[195] transition-opacity duration-300 ${
          isSettingsOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setIsSettingsOpen(false)}
          aria-hidden="true"
        />

        {/* Modal */}
        <div className="flex min-h-full items-end justify-center sm:items-center sm:p-4">
          <div
            ref={settingsRef}
            role="dialog"
            aria-label="Cookie-Einstellungen verwalten"
            aria-modal="true"
            className={`relative w-full max-w-lg transform rounded-t-3xl bg-background shadow-2xl transition-all duration-500 sm:rounded-3xl ${
              isSettingsOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-foreground/5 px-6 pt-7 pb-5 sm:px-8">
              <div>
                <h2 className="font-serif text-xl font-light text-foreground sm:text-2xl">
                  Cookie-Einstellungen
                </h2>
                <p className="mt-1 font-sans text-xs text-foreground/40">
                  Verwalte deine Datenschutz-Pr&auml;ferenzen
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/30 transition-colors hover:bg-foreground/5 hover:text-foreground/60"
                aria-label="Schließen"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-1 px-6 py-5 sm:px-8">
              {/* Essential Cookies */}
              <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.02] p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                        <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                      <h3 className="font-sans text-sm font-semibold text-foreground">
                        Essentielle Cookies
                      </h3>
                    </div>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-foreground/50">
                      Diese Cookies sind f&uuml;r die grundlegende Funktion der Website
                      notwendig und k&ouml;nnen nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="mt-1 flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-accent/80 px-0.5">
                    <div className="h-5 w-5 translate-x-5 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>

              {/* External Media */}
              <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.02] p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                        <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                      </div>
                      <h3 className="font-sans text-sm font-semibold text-foreground">
                        Externe Medien
                      </h3>
                    </div>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-foreground/50">
                      Erlaubt das Laden externer Inhalte wie Google Maps.
                      Dabei k&ouml;nnen Daten an Drittanbieter &uuml;bermittelt werden.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={localPrefs.externalMedia}
                    onClick={() =>
                      setLocalPrefs((prev) => ({
                        ...prev,
                        externalMedia: !prev.externalMedia,
                      }))
                    }
                    className={`mt-1 flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors duration-300 ${
                      localPrefs.externalMedia
                        ? "bg-accent/80"
                        : "bg-foreground/15"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                        localPrefs.externalMedia ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2.5 border-t border-foreground/5 px-6 py-5 sm:flex-row sm:justify-end sm:gap-3 sm:px-8">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-foreground/10 px-5 py-2.5 font-sans text-xs font-medium text-foreground/60 transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-foreground/10 px-5 py-2.5 font-sans text-xs font-medium text-foreground/60 transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="rounded-full bg-accent px-6 py-2.5 font-sans text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_6px_20px_rgba(201,169,110,0.3)]"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
