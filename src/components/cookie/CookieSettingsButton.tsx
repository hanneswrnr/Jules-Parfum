"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export function CookieSettingsButton(): React.ReactElement {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className="group flex w-fit items-center gap-2 font-sans text-sm text-background/50 transition-all duration-300 hover:text-background"
    >
      <span className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-3" />
      Cookie-Einstellungen
    </button>
  );
}
