"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ padding: "32px 24px", borderTop: "1px solid var(--border)", background: "var(--background)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px", color: "var(--foreground)" }}>
          WB<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>
          © {new Date().getFullYear()} Youcef Bendra. {t.footer.copy}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid var(--border)", background: "transparent", color: "var(--foreground-muted)", fontSize: "13px", cursor: "pointer", transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-muted)"; }}>
          {t.footer.back_top}
        </button>
      </div>
    </footer>
  );
}
