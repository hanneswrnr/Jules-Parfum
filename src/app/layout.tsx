import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://julesparfum.de"),
  title: {
    default: "Jules Parfum — Luxuriöse Düfte zum fairen Preis",
    template: "%s | Jules Parfum",
  },
  description:
    "Luxuriöse Düfte zum fairen Preis. 30% Duftessenz, 0% Wasser, 100% vegan. Extrait de Parfum von Jules Parfum — Unabhängige Chogan Vertriebspartnerin.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Jules Parfum",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jules Parfum",
  url: "https://julesparfum.de",
  logo: "https://julesparfum.de/logos/jules-parfum-logo-original.png",
  description:
    "Luxuriöse Düfte zum fairen Preis. Extrait de Parfum mit 30% Duftessenz — direkt zu dir nach Hause. Unabhängige Chogan Vertriebspartnerin.",
  address: {
    "@type": "PostalAddress",
    postalCode: "04442",
    addressLocality: "Zwenkau",
    addressCountry: "DE",
  },
  sameAs: ["https://www.instagram.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:font-sans focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
