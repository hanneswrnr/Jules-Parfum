"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

const navLinks = [
  { label: "Katalog", href: "/katalog" },
  { label: "Qualität", href: "/#qualitaet" },
  { label: "Über mich", href: "/#ueber" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header(): React.ReactElement {
  const headerRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  // Einblende-Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // Subtiler Glow-Puls
      gsap.to(glowRef.current, {
        boxShadow:
          "0 0 30px rgba(201,169,110,0.3), 0 0 60px rgba(201,169,110,0.1), inset 0 0 20px rgba(201,169,110,0.04)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2 md:top-7"
    >
      {/* Desktop: Ovaler Header — breiter + dicker */}
      <div
        ref={glowRef}
        className="hidden items-center gap-3 rounded-full border border-accent/30 bg-background/85 py-3 pr-4 pl-4 shadow-[0_0_25px_rgba(201,169,110,0.2),0_0_50px_rgba(201,169,110,0.07)] backdrop-blur-xl md:flex"
      >
        {/* Logo — Scale + Glow auf Hover */}
        <a
          href="/"
          className="relative h-12 w-12 shrink-0 overflow-visible rounded-full transition-all duration-500 hover:scale-125 hover:shadow-[0_0_20px_rgba(201,169,110,0.5),0_0_40px_rgba(201,169,110,0.25)]"
        >
          <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-accent/20 transition-all duration-500 hover:ring-accent/60">
            <Image
              src="/logos/jules-parfum-logo-original.png"
              alt="Jules Parfum Logo"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </a>

        {/* Trennlinie */}
        <div className="h-6 w-[1px] bg-accent/20" />

        {/* Navigation Tabs — größer mit modernem Hover */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-5 py-2.5 font-sans text-[15px] tracking-wide text-foreground/60 transition-all duration-300 hover:text-foreground"
              onMouseEnter={() => setActiveHover(link.href)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Animated background pill */}
              <span
                className={`absolute inset-0 rounded-full bg-accent/10 transition-all duration-500 ease-out ${
                  activeHover === link.href
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
              />
              {/* Underline glow */}
              <span
                className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent transition-all duration-500 ease-out ${
                  activeHover === link.href ? "w-6 opacity-100" : "w-0 opacity-0"
                }`}
              />
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Trennlinie */}
        <div className="h-6 w-[1px] bg-accent/20" />

        {/* CTA */}
        <a
          href="/#kontakt"
          className="rounded-full bg-foreground px-7 py-3 font-sans text-[15px] font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
        >
          Jetzt anfragen
        </a>
      </div>

      {/* Mobile: Kompakter Oval-Header — etwas größer */}
      <div className="md:hidden">
        <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-background/85 py-2.5 pr-3.5 pl-3.5 shadow-[0_0_25px_rgba(201,169,110,0.2),0_0_50px_rgba(201,169,110,0.07)] backdrop-blur-xl">
          {/* Logo */}
          <a href="/" className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/20">
            <Image
              src="/logos/jules-parfum-logo-original.png"
              alt="Jules Parfum Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </a>

          {/* Brand Name */}
          <span className="font-serif text-base font-light tracking-tight text-foreground">
            Jules Parfum
          </span>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-accent/15 hover:scale-110"
            aria-label="Menu"
          >
            <div className="relative h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300 ${
                  isMobileOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full bg-foreground transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300 ${
                  isMobileOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`mt-3 overflow-hidden rounded-2xl border border-accent/20 bg-background/95 shadow-[0_0_25px_rgba(201,169,110,0.12)] backdrop-blur-xl transition-all duration-500 ${
            isMobileOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-xl px-5 py-3.5 font-sans text-base text-foreground/70 transition-all duration-300 hover:bg-accent/10 hover:text-foreground hover:pl-7"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 rounded-full bg-foreground px-6 py-3.5 text-center font-sans text-base font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
            >
              Jetzt anfragen
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
