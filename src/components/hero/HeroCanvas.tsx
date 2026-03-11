"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { HeroOverlay } from "./HeroOverlay";

const FRAME_COUNT = 192;
const SCROLL_HEIGHT_VH = 500;

function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvas: HTMLCanvasElement,
): void {
  const { width: cw, height: ch } = canvas;
  const { naturalWidth: iw, naturalHeight: ih } = img;

  // object-fit: cover Verhalten
  const scale = Math.max(cw / iw, ch / ih);
  const x = (cw - iw * scale) / 2;
  const y = (ch - ih * scale) / 2;

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, x, y, iw * scale, ih * scale);
}

export function HeroCanvas(): React.ReactElement {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);

  const { images, progress, isLoaded } = useImagePreloader(
    FRAME_COUNT,
    "/images/hero-sequence",
    "frame-",
    "jpg",
  );

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Aktuelles Frame nach Resize neu zeichnen
    const ctx = canvas.getContext("2d");
    if (ctx && images[currentFrameRef.current]) {
      drawFrame(ctx, images[currentFrameRef.current], canvas);
    }
  }, [images]);

  // Canvas Größe setzen
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Erstes Frame zeichnen sobald geladen
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(ctx, images[0], canvas);
  }, [isLoaded, images]);

  // GSAP ScrollTrigger für Frame-Scrubbing
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const frameObj = { frame: 0 };

    const gsapCtx = gsap.context(() => {
      gsap.to(frameObj, {
        frame: images.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
        onUpdate: () => {
          const index = Math.round(frameObj.frame);
          if (index !== currentFrameRef.current && images[index]) {
            currentFrameRef.current = index;
            requestAnimationFrame(() => {
              drawFrame(ctx, images[index], canvas);
            });
          }
        },
      });
    }, containerRef);

    return () => gsapCtx.revert();
  }, [isLoaded, images]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Loading Screen */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background">
            <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Jules Parfum
            </h2>
            <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <p className="mt-3 font-sans text-sm text-foreground/40">
              {Math.round(progress * 100)}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Text Overlay */}
        {isLoaded && <HeroOverlay />}
      </div>
    </section>
  );
}
