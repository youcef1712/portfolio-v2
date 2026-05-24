"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, t, toggleLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "#about",      label: t.nav.about },
    { href: "#skills",     label: t.nav.skills },
    { href: "#projects",   label: t.nav.projects },
    { href: "#contact",    label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["about", "experience", "skills", "projects", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const isDark = mounted ? theme === "dark" : true;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const btnBase: React.CSSProperties = {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    background: "var(--background-secondary)",
    color: "var(--foreground-secondary)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    width: "36px",
    height: "36px",
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.5px", color: "var(--foreground)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            WB<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop */}
          <div className="wb-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleNavClick(link.href)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 12px", fontSize: "14px", fontWeight: 500, borderRadius: "8px", transition: "all 0.2s ease", color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--foreground-secondary)" }}
                onMouseEnter={(e) => { if (activeSection !== link.href.replace("#","")) { (e.target as HTMLElement).style.color = "var(--foreground)"; (e.target as HTMLElement).style.backgroundColor = "var(--background-tertiary)"; } }}
                onMouseLeave={(e) => { if (activeSection !== link.href.replace("#","")) { (e.target as HTMLElement).style.color = "var(--foreground-secondary)"; (e.target as HTMLElement).style.backgroundColor = "transparent"; } }}>
                {link.label}
              </button>
            ))}

            {/* Lang toggle */}
            <button onClick={toggleLocale} aria-label="Switch language"
              style={{ ...btnBase, marginLeft: "4px", fontSize: "12px", fontWeight: 700, width: "auto", padding: "6px 10px", letterSpacing: "0.5px", gap: "4px" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-secondary)"; }}>
              <span style={{ opacity: locale === "fr" ? 1 : 0.4 }}>FR</span>
              <span style={{ color: "var(--border-strong)" }}>|</span>
              <span style={{ opacity: locale === "en" ? 1 : 0.4 }}>EN</span>
            </button>

            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Changer de thème"
              style={{ ...btnBase, marginLeft: "4px" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-secondary)"; }}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="wb-mobile-nav" style={{ display: "none", alignItems: "center", gap: "8px" }}>
            <button onClick={toggleLocale} aria-label="Switch language"
              style={{ ...btnBase, fontSize: "11px", fontWeight: 700, width: "auto", padding: "6px 8px" }}>
              {locale === "fr" ? "EN" : "FR"}
            </button>
            <button onClick={toggleTheme} aria-label="Changer de thème" style={btnBase}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={btnBase}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)", padding: "8px 24px 16px" }}>
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}
              style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "12px 0", fontSize: "15px", fontWeight: 500, color: activeSection === link.href.replace("#","") ? "var(--accent)" : "var(--foreground-secondary)", borderBottom: "1px solid var(--border)" }}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
