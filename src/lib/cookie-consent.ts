export const CONSENT_STORAGE_KEY = "jules-cookie-consent";

export interface CookieConsentState {
  essential: true;
  externalMedia: boolean;
}

export interface StoredConsent {
  preferences: CookieConsentState;
  timestamp: string;
}

export const DEFAULT_CONSENT: CookieConsentState = {
  essential: true,
  externalMedia: false,
};

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed.preferences || typeof parsed.preferences.essential !== "boolean") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function storeConsent(preferences: CookieConsentState): void {
  const data: StoredConsent = {
    preferences,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
}
