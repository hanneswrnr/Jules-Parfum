"use client";

import { CookieConsentProvider } from "./CookieConsentProvider";
import { CookieBanner } from "./CookieBanner";

interface CookieConsentWrapperProps {
  children: React.ReactNode;
}

export function CookieConsentWrapper({ children }: CookieConsentWrapperProps): React.ReactElement {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
