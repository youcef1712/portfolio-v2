"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Code2, Globe, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { HeroPhoto } from "@/components/HeroPhoto";
import { TextRotator } from "@/components/TextRotator";
import { FloatingElements } from "@/components/FloatingElements";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      containerRef.current.style.setProperty("--mouse-x", `${x}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
    >
      <div ref={parallaxRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <div className="aurora-bg" />
        <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div className="noise-overlay" />
        <FloatingElements />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--accent) 7%, transparent), transparent 70%)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="hero-inner"
        style={{
          maxWidth: "1100px",
          width: "100%",
          padding: "0 24px",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Photo */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}
        >
          <div
            style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s ease" }}
            onMouseMove={(e) => {
              if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
              const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
              e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
            }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)"; }}
          >
            <div className="hero-ring" style={{ position: "absolute", width: "310px", height: "310px", borderRadius: "50%", border: "1.5px dashed color-mix(in srgb, var(--accent) 25%, transparent)", animation: "spinSlow 30s linear infinite" }} />
            <div style={{ position: "absolute", width: "290px", height: "290px", borderRadius: "50%", background: "conic-gradient(from 0deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent) 60%, var(--accent))", padding: "2px" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--background)" }} />
            </div>
            <div style={{ position: "absolute", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)", filter: "blur(24px)" }} />
            <div className="hero-photo-wrap" style={{ position: "relative", width: "260px", height: "260px", borderRadius: "50%", overflow: "hidden", border: "3px solid var(--background)", boxShadow: "0 0 0 2px var(--accent), 0 24px 60px color-mix(in srgb, var(--accent) 18%, transparent)", zIndex: 1, flexShrink: 0 }}>
              <HeroPhoto />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div {...fadeUp(0.15)}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "100px",
              background: "color-mix(in srgb, #22c55e 8%, transparent)",
              border: "1px solid color-mix(in srgb, #22c55e 20%, transparent)",
              marginBottom: "24px",
            }}>
              <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", animation: "pulse-dot 2s ease-in-out infinite", opacity: 0.6 }} />
                <span style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
              </span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#22c55e", letterSpacing: "0.3px" }}>
                {t.hero.available}
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="gradient-name"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.0, marginBottom: "16px" }}
          >
            {t.hero.title}<span style={{ color: "var(--accent)" }}>.</span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.35)}
            style={{
              fontSize: "clamp(17px, 2.2vw, 23px)",
              fontWeight: 500,
              color: "var(--foreground-secondary)",
              marginBottom: "20px",
              letterSpacing: "-0.2px",
              lineHeight: 1.4,
            }}
          >
            <TextRotator texts={t.hero.roles} interval={3000} />
          </motion.h2>

          <motion.p
            {...fadeUp(0.45)}
            style={{ fontSize: "15px", color: "var(--foreground-muted)", maxWidth: "480px", marginBottom: "36px", lineHeight: 1.8 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="hero-badges"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "13px 28px", borderRadius: "12px", background: "var(--accent)", color: "#ffffff",
                border: "none", fontSize: "15px", fontWeight: 600, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
                animation: "glow-pulse 3s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 12px 32px color-mix(in srgb, var(--accent) 40%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)";
              }}
            >
              {t.hero.cta_projects}
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "13px 28px", borderRadius: "12px", background: "transparent",
                color: "var(--foreground)", border: "1px solid var(--border-strong)",
                fontSize: "15px", fontWeight: 500, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 5%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {t.hero.cta_contact}
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "13px 24px", borderRadius: "12px", background: "transparent",
                color: "var(--foreground-muted)", border: "1px solid var(--border)",
                fontSize: "14px", fontWeight: 500, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--foreground-muted)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Download size={15} />
              {t.hero.cta_cv}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.65)} style={{ display: "flex", gap: "10px" }}>
            {[
              { icon: <Code2 size={17} />, label: "GitHub", href: "https://github.com/youcef1712" },
              { icon: <Globe size={17} />, label: "LinkedIn", href: "https://www.linkedin.com/in/youcef-bendra-006aa5314/" },
              { icon: <Mail size={17} />, label: "Email", href: "mailto:proetuyoucef@gmail.com" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "42px", height: "42px", borderRadius: "12px",
                  border: "1px solid var(--border)", color: "var(--foreground-muted)",
                  textDecoration: "none", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  background: "color-mix(in srgb, var(--background-secondary) 80%, transparent)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 8px 24px color-mix(in srgb, var(--accent) 20%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--foreground-muted)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer", color: "var(--foreground-muted)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          transition: "color 0.2s ease", zIndex: 2,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500 }}>
          {t.hero.scroll}
        </span>
        <ArrowDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
      </motion.button>
    </section>
  );
}
