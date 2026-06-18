"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function EasterEgg() {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let seq: string[] = [];
    const onKeyDown = (e: KeyboardEvent) => {
      seq.push(e.key);
      seq = seq.slice(-KONAMI.length);
      if (seq.length === KONAMI.length && seq.every((k, i) => k === KONAMI[i])) {
        setTriggered(true);
        setTimeout(() => setTriggered(false), 4000);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!triggered) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          padding: "32px 48px",
          borderRadius: "20px",
          background: "var(--background)",
          border: "2px solid var(--accent)",
          boxShadow: "0 0 60px color-mix(in srgb, var(--accent) 30%, transparent), 0 24px 80px rgba(0,0,0,0.4)",
          textAlign: "center",
          animation: "easter-egg-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎮</div>
        <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent)", marginBottom: "4px" }}>
          Konami Code!
        </div>
        <div style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>
          Tu as trouvé le secret 🤫
        </div>
      </div>
    </div>
  );
}
