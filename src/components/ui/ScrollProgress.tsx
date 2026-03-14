"use client";

import { useEffect, useState } from "react";

export function ScrollProgress(): React.ReactElement {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll(): void {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min((scrollTop / docHeight) * 100, 100));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-[100] h-[3px]">
      <div
        className="h-full rounded-r-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(to right, #c9a96e, #e8d5b0, #c9a96e)",
          boxShadow: "0 0 10px rgba(201,169,110,0.5), 0 0 4px rgba(201,169,110,0.3)",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
}
