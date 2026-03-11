"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 60,
  className = "",
}: ScrollRevealProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dirMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    };

    const { x, y } = dirMap[direction];

    const ctx = gsap.context(() => {
      gsap.from(el, {
        x,
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
