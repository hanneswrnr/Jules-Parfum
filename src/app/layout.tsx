import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CookieConsentWrapper } from "@/components/cookie/CookieConsentWrapper";
import { PlausibleAnalytics } from "@/components/analytics/PlausibleAnalytics";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
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
  alternates: {
    canonical: "https://julesparfum.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Jules Parfum",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "5xc3K_8GrI5RWZtnUQAoE0pnth793J4IEh4LvGMdAS0",
  },
  other: {
    "geo.region": "DE-SN",
    "geo.placename": "Zwenkau, Sachsen, Deutschland",
    "geo.position": "51.2167;12.3333",
    "ICBM": "51.2167, 12.3333",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://julesparfum.de/#organization",
    name: "Jules Parfum",
    url: "https://julesparfum.de",
    logo: "https://julesparfum.de/logos/jules-parfum-logo-original.png",
    description:
      "Luxuriöse Düfte zum fairen Preis. Extrait de Parfum mit 30% Duftessenz — direkt zu dir nach Hause. Unabhängige Chogan Vertriebspartnerin.",
    telephone: "+491735231044",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Feldstr. 18",
      postalCode: "04442",
      addressLocality: "Zwenkau",
      addressRegion: "Sachsen",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+491735231044",
      contactType: "customer service",
      availableLanguage: "German",
    },
    sameAs: [
      "https://www.instagram.com/juliemchlk",
      "https://wa.me/491735231044",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://julesparfum.de/#localbusiness",
    name: "Jules Parfum",
    description:
      "Unabhängige Chogan Vertriebspartnerin — Extrait de Parfum mit 30% Duftessenz, 0% Wasser, 100% vegan. Persönliche Duftberatung in Zwenkau und online.",
    url: "https://julesparfum.de",
    telephone: "+491735231044",
    email: "julie.michalek22@gmail.com",
    image: "https://julesparfum.de/logos/jules-parfum-logo-original.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Feldstr. 18",
      postalCode: "04442",
      addressLocality: "Zwenkau",
      addressRegion: "Sachsen",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.2167,
      longitude: 12.3333,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "State", name: "Sachsen" },
      { "@type": "State", name: "Sachsen-Anhalt" },
      { "@type": "State", name: "Thüringen" },
      { "@type": "City", name: "Leipzig" },
      { "@type": "City", name: "Zwenkau" },
      { "@type": "Country", name: "Deutschland" },
    ],
    hasMap: "https://maps.google.com/maps?q=Feldstr.+18,+04442+Zwenkau",
    priceRange: "€€",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Extrait de Parfum",
        description:
          "30% Duftessenz, 0% Wasser, 100% vegan. Haltbarkeit 6–10 Stunden. Zertifiziert durch Biocertitalia.",
        category: "Parfum",
        brand: {
          "@type": "Brand",
          name: "Olfazeta by Chogan",
        },
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://julesparfum.de/#website",
    url: "https://julesparfum.de",
    name: "Jules Parfum",
    description: "Luxuriöse Extrait de Parfum zum fairen Preis",
    inLanguage: "de-DE",
    publisher: {
      "@id": "https://julesparfum.de/#organization",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://julesparfum.de/#person-julie",
    name: "Julie Michalek",
    givenName: "Julie",
    familyName: "Michalek",
    jobTitle: "Unabhängige Chogan Vertriebspartnerin",
    description:
      "Julie Michalek ist die Gründerin von Jules Parfum und unabhängige Chogan Vertriebspartnerin aus Zwenkau (Sachsen). Sie berät persönlich zu luxuriösen Extrait de Parfum Düften.",
    url: "https://julesparfum.de/ueber",
    sameAs: ["https://www.instagram.com/juliemchlk"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Feldstr. 18",
      postalCode: "04442",
      addressLocality: "Zwenkau",
      addressRegion: "Sachsen",
      addressCountry: "DE",
    },
    worksFor: {
      "@id": "https://julesparfum.de/#organization",
    },
  },
];

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
        <PlausibleAnalytics />
        <CookieConsentWrapper>
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
          <WhatsAppButton />
        </CookieConsentWrapper>
      </body>
    </html>
  );
}
