import { ImageResponse } from "next/og";

interface OGImageOptions {
  title: string;
  subtitle: string;
  showStats?: boolean;
}

export const OG_SIZE = { width: 1200, height: 630 };

export function createOGImage({ title, subtitle, showStats = false }: OGImageOptions): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #FAF8F5 0%, #F5F0EB 50%, #EDE6DD 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Decorative top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #C9A96E, #D4B87A, #C9A96E)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#1A1814",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 2,
              background: "#C9A96E",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#1A1814",
              opacity: 0.6,
              letterSpacing: "0.05em",
            }}
          >
            {subtitle}
          </div>

          {/* Stats row (only on homepage) */}
          {showStats && (
            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 24,
              }}
            >
              {[
                { value: "30%", label: "Duftessenz" },
                { value: "0%", label: "Wasser" },
                { value: "100%", label: "Vegan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    padding: "16px 28px",
                    borderRadius: 16,
                    background: "rgba(201, 169, 110, 0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      color: "#C9A96E",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#1A1814",
                      opacity: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 14,
            color: "#1A1814",
            opacity: 0.3,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Extrait de Parfum — Unabhängige Chogan Vertriebspartnerin
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
