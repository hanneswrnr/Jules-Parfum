import { createOGImage, OG_SIZE } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Produkte — Jules Parfum";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OGImage() {
  return createOGImage({
    title: "Unsere Düfte",
    subtitle: "Über 140 Extrait de Parfum Kreationen",
  });
}
