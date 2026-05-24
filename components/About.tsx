"use client";

import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" style={{ padding: "120px 24px", background: "var(--background)" }}>
      <div ref={ref} style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>{about.tag}</span>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.2, marginBottom: "24px", color: "var(--foreground)" }}>
                {about.heading1}
                <br />
                <span style={{ color: "var(--accent)" }}>{about.heading2}</span>{" "}{about.heading1}
              </h2>

              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--foreground-secondary)", marginBottom: "20px" }}>
                {about.p1}
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--foreground-secondary)", marginBottom: "32px" }}>
                {about.p2}
              </p>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ padding: "11px 24px", borderRadius: "8px", background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
                {about.cta}
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {about.stats.map((stat, i) => (
                <div key={stat.label}
                  style={{ padding: "24px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--background-secondary)", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${0.1 + i * 0.1}s` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--accent)", letterSpacing: "-1px", marginBottom: "4px" }}>{stat.value}</div>
                  <div style={{ fontSize: "13px", color: "var(--foreground-muted)", fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
