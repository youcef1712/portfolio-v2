"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.15;
      currentY += (y - currentY) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 4%, transparent) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        mixBlendMode: "normal",
      }}
    />
  );
}
