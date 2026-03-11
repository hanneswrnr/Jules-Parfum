import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jules Parfum — Finde deinen Signatur-Duft",
  description:
    "Luxuriöse Düfte zum fairen Preis. 30% Duftessenz, 0% Wasser, 100% vegan. Extrait de Parfum von Jules Parfum — Unabhängige Chogan Vertriebspartnerin.",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
