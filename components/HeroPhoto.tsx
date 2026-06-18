"use client";

import { useState } from "react";
import Image from "next/image";

function AvatarPlaceholder() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--background-secondary)",
      }}
    >
      {/* Subtle grid pattern */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Silhouette SVG */}
      <svg
        viewBox="0 0 200 220"
        style={{
          position: "absolute",
          bottom: 0,
          width: "75%",
          opacity: 0.12,
          fill: "var(--foreground)",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="75" rx="42" ry="48" />
        <path d="M 10 220 Q 10 140 100 140 Q 190 140 190 220 Z" />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))",
            border: "2px solid color-mix(in srgb, var(--accent) 30%, transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px color-mix(in srgb, var(--accent) 15%, transparent), inset 0 0 20px color-mix(in srgb, var(--accent) 5%, transparent)",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-2px",
              background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #f97316))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            YB
          </span>
        </div>
        <span style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--foreground-muted)",
          opacity: 0.6,
        }}>
          Developer
        </span>
      </div>
    </div>
  );
}

export function HeroPhoto() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const sources = ["/photo.png", "/photo.jpg", "/photo.jpeg", "/photo.webp"];

  const handleError = () => {
    if (srcIndex + 1 < sources.length) {
      setSrcIndex(srcIndex + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) return <AvatarPlaceholder />;

  return (
    <Image
      src={sources[srcIndex]}
      alt="Youcef Bendra"
      fill
      style={{ objectFit: "cover", objectPosition: "center top" }}
      priority
      onError={handleError}
    />
  );
}
