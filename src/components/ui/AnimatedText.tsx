"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface AnimatedTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export function AnimatedText({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps): React.ReactElement {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Text in Wörter/Zeichen splitten
    const text = el.textContent || "";
    const parts =
      splitBy === "words" ? text.split(" ") : text.split("");

    el.innerHTML = parts
      .map(
        (part) =>
          `<span class="inline-block overflow-hidden"><span class="animated-part inline-block">${part}${splitBy === "words" ? "&nbsp;" : ""}</span></span>`,
      )
      .join("");

    const spans = el.querySelectorAll(".animated-part");

    const ctx = gsap.context(() => {
      gsap.from(spans, {
        y: "110%",
        opacity: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        stagger: splitBy === "words" ? 0.05 : 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [children, delay, splitBy]);

  return (
    // @ts-expect-error — dynamic tag element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
