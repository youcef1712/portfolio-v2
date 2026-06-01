"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Code2, Globe, Mail } from "lucide-react";
import { HeroPhoto } from "@/components/HeroPhoto";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={containerRef} id="hero"
      style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "var(--background)", "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}>

      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "15%", right: "8%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 5%, transparent), transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

      <div className="hero-inner" style={{ maxWidth: "1100px", width: "100%", padding: "0 24px", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "64px", alignItems: "center" }}>

        {/* Photo */}
        <div className="hero-photo-col" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", animation: "fadeIn 0.8s ease 0.1s forwards", opacity: 0 }}>
          <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <div className="hero-ring" style={{ position: "absolute", width: "310px", height: "310px", borderRadius: "50%", border: "1.5px dashed color-mix(in srgb, var(--accent) 35%, transparent)", animation: "spinSlow 18s linear infinite" }} />
            <div style={{ position: "absolute", width: "290px", height: "290px", borderRadius: "50%", background: "conic-gradient(from 0deg, var(--accent), color-mix(in srgb, var(--accent) 20%, transparent) 60%, var(--accent))", padding: "2px" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--background)" }} />
            </div>
            <div style={{ position: "absolute", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent), transparent 70%)", filter: "blur(24px)" }} />
            <div className="hero-photo-wrap" style={{ position: "relative", width: "260px", height: "260px", borderRadius: "50%", overflow: "hidden", border: "3px solid var(--background)", boxShadow: "0 0 0 2px var(--accent), 0 24px 60px color-mix(in srgb, var(--accent) 20%, transparent)", zIndex: 1, flexShrink: 0 }}>
              <HeroPhoto />
            </div>
          </div>

        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "16px", color: "var(--foreground)", animation: "fadeInUp 0.6s ease 0.2s forwards", opacity: 0 }}>
            {t.hero.title}<span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          <h2 style={{ fontSize: "clamp(16px, 2.2vw, 22px)", fontWeight: 500, color: "var(--foreground-secondary)", marginBottom: "20px", letterSpacing: "-0.2px", animation: "fadeInUp 0.6s ease 0.3s forwards", opacity: 0, lineHeight: 1.4 }}>
            {t.hero.subtitle1}
            <span style={{ margin: "0 10px", color: "var(--accent)", fontWeight: 700 }}>{t.hero.sep}</span>
            {t.hero.subtitle2}
          </h2>

          <p style={{ fontSize: "15px", color: "var(--foreground-muted)", maxWidth: "480px", marginBottom: "36px", lineHeight: 1.75, animation: "fadeInUp 0.6s ease 0.4s forwards", opacity: 0 }}>
            {t.hero.description}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px", animation: "fadeInUp 0.6s ease 0.5s forwards", opacity: 0 }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "12px 28px", borderRadius: "10px", background: "var(--accent)", color: "#ffffff", border: "none", fontSize: "15px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              {t.hero.cta_projects}
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "12px 28px", borderRadius: "10px", background: "transparent", color: "var(--foreground)", border: "1px solid var(--border-strong)", fontSize: "15px", fontWeight: 500, cursor: "pointer", transition: "all 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              {t.hero.cta_contact}
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", animation: "fadeInUp 0.6s ease 0.6s forwards", opacity: 0 }}>
            {[
              { icon: <Code2 size={18} />, label: "GitHub", href: "https://github.com/youcef1712" },
              { icon: <Globe size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/youcef-bendra-006aa5314/" },
              { icon: <Mail size={18} />, label: "Email", href: "mailto:walasb2001@gmail.com" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "10px", border: "1px solid var(--border)", color: "var(--foreground-muted)", textDecoration: "none", transition: "all 0.2s ease", background: "var(--background-secondary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--foreground-muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", animation: "fadeIn 1s ease 0.9s forwards", opacity: 0, transition: "color 0.2s ease" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}>
        <span style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{t.hero.scroll}</span>
        <ArrowDown size={14} style={{ animation: "fadeInUp 1s ease infinite alternate" }} />
      </button>
    </section>
  );
}
