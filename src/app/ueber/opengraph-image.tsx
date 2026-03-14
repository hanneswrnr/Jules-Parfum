import { createOGImage, OG_SIZE } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Über mich — Jules Parfum";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OGImage() {
  return createOGImage({
    title: "Über Jules Parfum",
    subtitle: "Die Frau hinter dem Duft",
  });
}
