"use client";

import { useState, useEffect } from "react";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [fill, setFill] = useState(0);
  const [phase, setPhase] = useState<"filling" | "hold" | "wipe" | "done">(
    "filling"
  );

  useEffect(() => {
    if (phase !== "filling") return;

    const duration = 1800;
    const fps = 60;
    const interval = 1000 / fps;
    const increment = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      // ease-in-out curve for more organic feel
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setPhase("hold"), 200);
      }
      setFill(current);
    }, interval);

    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "hold") {
      const timeout = setTimeout(() => setPhase("wipe"), 600);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "wipe") {
      const timeout = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  const isExiting = phase === "wipe";

  return (
    <>
      <style>{`
        @keyframes preloader-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes preloader-line-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes preloader-dot-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
          transform: isExiting ? "translateY(-100%)" : "translateY(0)",
          transition: isExiting
            ? "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
        }}
      >
        {/* Subtle radial gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Decorative dots */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: `rgba(59,130,246,${0.15 + i * 0.1})`,
              top: `${30 + i * 20}%`,
              left: `${20 + i * 25}%`,
              animation: `preloader-dot-pulse ${1.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Main text container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* "Peroxia" with fill effect */}
          <div
            style={{
              position: "relative",
              fontSize: "clamp(72px, 12vw, 140px)",
              fontWeight: 900,
              letterSpacing: "-4px",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            {/* Ghost text — soft outline */}
            <span
              style={{
                color: "rgba(0,0,0,0.06)",
                display: "block",
              }}
            >
              Peroxia
            </span>

            {/* Shimmer highlight layer */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent 30%, rgba(59,130,246,0.08) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "preloader-shimmer 2s ease-in-out infinite",
              }}
            >
              Peroxia
            </span>

            {/* Fill text — blue gradient rising from bottom */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                clipPath: `inset(${100 - fill}% 0 0 0)`,
                transition: "clip-path 0.06s ease-out",
              }}
            >
              Peroxia
            </span>
          </div>

          {/* Tagline — fades in after fill starts */}
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.3)",
              opacity: fill > 20 ? 1 : 0,
              transform: fill > 20 ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Intelligent Software Solutions
          </div>
        </div>

        {/* Bottom progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${fill}%`,
              background: "linear-gradient(90deg, #2563eb, #06b6d4)",
              transition: "width 0.06s ease-out",
              boxShadow: "0 0 16px rgba(37,99,235,0.4)",
              animation: "preloader-line-glow 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}
