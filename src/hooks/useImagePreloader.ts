"use client";

import { useState, useEffect, useRef } from "react";

interface PreloaderResult {
  images: HTMLImageElement[];
  progress: number;
  isLoaded: boolean;
}

export function useImagePreloader(
  frameCount: number,
  basePath: string,
  filePrefix: string,
  fileExtension: string,
): PreloaderResult {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let loaded = 0;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    const promises = Array.from({ length: frameCount }, (_, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedImages[i] = img;
          loaded++;
          setProgress(loaded / frameCount);
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setProgress(loaded / frameCount);
          resolve();
        };
        const frameNumber = String(i + 1).padStart(4, "0");
        img.src = `${basePath}/${filePrefix}${frameNumber}.${fileExtension}`;
      });
    });

    Promise.all(promises).then(() => {
      imagesRef.current = loadedImages.filter(Boolean);
      setIsLoaded(true);
    });
  }, [frameCount, basePath, filePrefix, fileExtension]);

  return { images: imagesRef.current, progress, isLoaded };
}
