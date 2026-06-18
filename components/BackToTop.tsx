"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 90,
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        border: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--background) 85%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "var(--foreground-muted)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
        e.currentTarget.style.boxShadow = "0 12px 40px color-mix(in srgb, var(--accent) 20%, transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--foreground-muted)";
        e.currentTarget.style.transform = visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
