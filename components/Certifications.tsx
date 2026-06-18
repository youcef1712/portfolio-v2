"use client";

import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const { ref, inView } = useInView(0.15);
  const { t } = useLanguage();
  const { certifications } = t;

  return (
    <section
      style={{
        padding: "80px 24px 120px",
        background: "var(--background-secondary)",
        position: "relative",
      }}
    >
      <div className="noise-overlay" />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "2px",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {certifications.tag}
            </span>
            <span
              style={{
                width: "32px",
                height: "2px",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
          </div>

          <div
            className="certs-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${certifications.items.length}, 1fr)`,
              gap: "16px",
            }}
          >
            {certifications.items.map((cert, i) => (
              <div
                key={cert.title}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  background: "var(--background)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  position: "relative",
                  overflow: "hidden",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--card-glow-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 20%, transparent))",
                    opacity: 0.5,
                  }}
                />
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Award size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      marginBottom: "4px",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {cert.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--foreground-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {cert.provider}
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  style={{ color: "var(--foreground-muted)", opacity: 0.4 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
