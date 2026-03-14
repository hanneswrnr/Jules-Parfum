"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import type { CookieConsentState } from "@/lib/cookie-consent";
import { DEFAULT_CONSENT, getStoredConsent, storeConsent } from "@/lib/cookie-consent";

interface CookieConsentContextValue {
  consent: CookieConsentState;
  hasInteracted: boolean;
  updateConsent: (preferences: CookieConsentState) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openSettings: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps): React.ReactElement {
  const [consent, setConsent] = useState<CookieConsentState>(DEFAULT_CONSENT);
  const [hasInteracted, setHasInteracted] = useState(true); // true by default to avoid flash
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored.preferences);
      setHasInteracted(true);
    } else {
      setHasInteracted(false);
    }
  }, []);

  const updateConsent = useCallback((preferences: CookieConsentState) => {
    setConsent(preferences);
    storeConsent(preferences);
    setHasInteracted(true);
    setIsSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    updateConsent({ essential: true, externalMedia: true });
  }, [updateConsent]);

  const rejectAll = useCallback(() => {
    updateConsent({ essential: true, externalMedia: false });
  }, [updateConsent]);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasInteracted,
      updateConsent,
      acceptAll,
      rejectAll,
      openSettings,
      isSettingsOpen,
      setIsSettingsOpen,
    }),
    [consent, hasInteracted, updateConsent, acceptAll, rejectAll, openSettings, isSettingsOpen],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
