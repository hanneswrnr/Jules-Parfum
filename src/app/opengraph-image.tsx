import { createOGImage, OG_SIZE } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Jules Parfum — Luxuriöse Düfte zum fairen Preis";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OGImage() {
  return createOGImage({
    title: "Jules Parfum",
    subtitle: "Luxuriöse Düfte zum fairen Preis",
    showStats: true,
  });
}
