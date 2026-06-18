"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { ScrollProgress } from "@/components/ScrollProgress";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, t, toggleLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const updateIndicator = useCallback(() => {
    const activeIdx = navLinks.findIndex(
      (l) => l.href.replace("#", "") === activeSection
    );
    if (activeIdx >= 0 && navBtnRefs.current[activeIdx] && navContainerRef.current) {
      const btn = navBtnRefs.current[activeIdx]!;
      const container = navContainerRef.current;
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, navLinks]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["about", "experience", "skills", "projects", "contact"];
      let found = false;
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection("");
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
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "color-mix(in srgb, var(--background-secondary) 80%, transparent)",
    backdropFilter: "blur(8px)",
    color: "var(--foreground-secondary)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    width: "36px",
    height: "36px",
  };

  return (
    <>
      <ScrollProgress />
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 75%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid color-mix(in srgb, var(--border) 50%, transparent)" : "1px solid transparent",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--foreground)",
              background: "none", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            YB<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop */}
          <div className="wb-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div ref={navContainerRef} style={{ display: "flex", alignItems: "center", gap: "4px", position: "relative" }}>
              {/* Sliding indicator */}
              <div style={{
                position: "absolute",
                bottom: "0px",
                height: "2px",
                borderRadius: "1px",
                background: "var(--accent)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
                boxShadow: "0 0 8px color-mix(in srgb, var(--accent) 40%, transparent)",
              }} />

              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    ref={(el) => { navBtnRefs.current[i] = el; }}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      padding: "8px 14px", fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      borderRadius: "10px",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      color: isActive ? "var(--accent)" : "var(--foreground-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "var(--foreground)";
                        (e.target as HTMLElement).style.backgroundColor = "var(--background-tertiary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "var(--foreground-secondary)";
                        (e.target as HTMLElement).style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <button onClick={toggleLocale} aria-label="Switch language"
              style={{ ...btnBase, marginLeft: "8px", fontSize: "12px", fontWeight: 700, width: "auto", padding: "6px 12px", letterSpacing: "0.5px", gap: "6px" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-secondary)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              <span style={{ opacity: locale === "fr" ? 1 : 0.4 }}>FR</span>
              <span style={{ color: "var(--border-strong)" }}>|</span>
              <span style={{ opacity: locale === "en" ? 1 : 0.4 }}>EN</span>
            </button>

            <button onClick={toggleTheme} aria-label="Changer de thème" style={{ ...btnBase, marginLeft: "4px" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "scale(1.05) rotate(12deg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-secondary)"; e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="wb-mobile-nav" style={{ display: "none", alignItems: "center", gap: "8px" }}>
            <button onClick={toggleLocale} aria-label="Switch language" style={{ ...btnBase, fontSize: "11px", fontWeight: 700, width: "auto", padding: "6px 8px" }}>
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
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          backgroundColor: "color-mix(in srgb, var(--background) 92%, transparent)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)", padding: "8px 24px 16px",
        }}>
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}
              style={{
                display: "block", width: "100%", textAlign: "left", background: "none",
                border: "none", cursor: "pointer", padding: "14px 0", fontSize: "15px", fontWeight: 500,
                color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--foreground-secondary)",
                borderBottom: "1px solid var(--border)", transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
