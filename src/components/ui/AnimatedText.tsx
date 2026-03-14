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

    // DOM API statt innerHTML für XSS-Sicherheit
    el.textContent = "";
    parts.forEach((part) => {
      const outer = document.createElement("span");
      outer.style.display = "inline-block";
      outer.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.classList.add("animated-part");
      inner.style.display = "inline-block";
      inner.textContent = part === " " ? "\u00A0" : part;

      if (splitBy === "words") {
        // Leerzeichen nach jedem Wort anhängen
        outer.appendChild(inner);
        el.appendChild(outer);
        const space = document.createTextNode("\u00A0");
        el.appendChild(space);
      } else {
        outer.appendChild(inner);
        el.appendChild(outer);
      }
    });

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
