"use client";

import { Code2, Globe, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: <Code2 size={16} />, label: "GitHub", href: "https://github.com/youcef1712" },
    { icon: <Globe size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/youcef-bendra-006aa5314/" },
    { icon: <Mail size={16} />, label: "Email", href: "mailto:proetuyoucef@gmail.com" },
  ];

  return (
    <footer style={{ padding: "48px 24px 32px", borderTop: "1px solid var(--border)", background: "var(--background)", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.3,
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", marginBottom: "40px", alignItems: "start" }}>
          {/* Brand */}
          <div>
            <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--foreground)", display: "block", marginBottom: "8px" }}>
              YB<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: 1.6 }}>
              {t.footer.copy}
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--foreground-secondary)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    fontSize: "13px", color: "var(--foreground-muted)", padding: "2px 0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--foreground-secondary)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Social</h4>
            <div style={{ display: "flex", gap: "8px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    border: "1px solid var(--border)", background: "var(--background-secondary)",
                    color: "var(--foreground-muted)", display: "flex", alignItems: "center",
                    justifyContent: "center", textDecoration: "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--foreground-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)", paddingTop: "20px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "var(--foreground-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
            © {new Date().getFullYear()} Youcef Bendra · {t.footer.made_with}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              padding: "8px 16px", borderRadius: "10px", border: "1px solid var(--border)",
              background: "transparent", color: "var(--foreground-muted)", fontSize: "13px",
              fontWeight: 500, cursor: "pointer", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--foreground-muted)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.footer.back_top}
          </button>
        </div>
      </div>
    </footer>
  );
}
