"use client";

import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function About() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" style={{ padding: "120px 24px", background: "var(--background)", position: "relative" }}>
      <div className="noise-overlay" />
      <div ref={ref} style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>{about.tag}</span>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.2, marginBottom: "24px", color: "var(--foreground)" }}>
                {about.heading1}
                <br />
                <span className="gradient-name" style={{ fontSize: "inherit", fontWeight: "inherit" }}>{about.heading2}</span>
              </h2>

              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--foreground-secondary)", marginBottom: "20px" }}>
                {about.p1}
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--foreground-muted)", marginBottom: "32px", fontStyle: "italic" }}>
                {about.p2}
              </p>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "12px 24px", borderRadius: "10px", background: "transparent",
                  color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                  fontSize: "14px", fontWeight: 600, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px color-mix(in srgb, var(--accent) 25%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "color-mix(in srgb, var(--accent) 40%, transparent)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {about.cta}
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {about.stats.map((stat, i) => (
                <div key={stat.label}
                  style={{
                    padding: "28px", borderRadius: "16px", border: "1px solid var(--border)",
                    background: "var(--background-secondary)", position: "relative", overflow: "hidden",
                    opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "var(--card-glow-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 20%, transparent))",
                    opacity: 0.6,
                  }} />
                  <div style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-2px", marginBottom: "6px", lineHeight: 1 }}>
                    <span className="gradient-name" style={{ fontSize: "inherit", fontWeight: "inherit" }}>
                      <AnimatedCounter value={stat.value} inView={inView} duration={2000 + i * 300} />
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--foreground-muted)", fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
