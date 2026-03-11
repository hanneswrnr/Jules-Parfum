"use client";

import { useLenis } from "@/hooks/useLenis";

export function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  useLenis();
  return <>{children}</>;
}
