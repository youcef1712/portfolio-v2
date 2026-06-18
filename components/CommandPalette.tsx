"use client";

import { useState, useEffect, useRef } from "react";
import { Search, User, Briefcase, Code2, FolderOpen, Mail, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const commands: Command[] = [
    { id: "about", label: "À propos", icon: <User size={16} />, action: () => scrollTo("about"), keywords: ["about", "propos", "qui"] },
    { id: "experience", label: "Parcours", icon: <Briefcase size={16} />, action: () => scrollTo("experience"), keywords: ["parcours", "experience", "formation"] },
    { id: "skills", label: "Compétences", icon: <Code2 size={16} />, action: () => scrollTo("skills"), keywords: ["skills", "competences", "tech"] },
    { id: "projects", label: "Projets", icon: <FolderOpen size={16} />, action: () => scrollTo("projects"), keywords: ["projets", "projects", "work"] },
    { id: "contact", label: "Contact", icon: <Mail size={16} />, action: () => scrollTo("contact"), keywords: ["contact", "email", "message"] },
    { id: "theme", label: theme === "dark" ? "Mode clair" : "Mode sombre", icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />, action: () => { setTheme(theme === "dark" ? "light" : "dark"); setOpen(false); }, keywords: ["theme", "dark", "light", "sombre", "clair"] },
    { id: "lang", label: locale === "fr" ? "Switch to English" : "Passer en Français", icon: <Globe size={16} />, action: () => { toggleLocale(); setOpen(false); }, keywords: ["language", "langue", "english", "francais", "fr", "en"] },
    { id: "top", label: "Retour en haut", icon: <Search size={16} />, action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }, keywords: ["top", "haut", "home"] },
  ];

  const filtered = query.trim()
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.keywords.some((k) => k.includes(query.toLowerCase()))
      )
    : commands;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selected]) {
      filtered[selected].action();
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "min(20vh, 200px)",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "520px",
          margin: "0 24px",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          background: "var(--background)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", borderBottom: "1px solid var(--border)" }}>
          <Search size={16} style={{ color: "var(--foreground-muted)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Rechercher..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "15px",
              color: "var(--foreground)",
              fontFamily: "inherit",
            }}
          />
          <kbd style={{
            padding: "2px 8px",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            fontSize: "11px",
            color: "var(--foreground-muted)",
            fontFamily: "var(--font-mono)",
          }}>
            ESC
          </kbd>
        </div>
        <div style={{ maxHeight: "320px", overflowY: "auto", padding: "8px" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "24px", textAlign: "center", fontSize: "14px", color: "var(--foreground-muted)" }}>
              Aucun résultat
            </div>
          ) : (
            filtered.map((cmd, i) => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  background: i === selected ? "var(--background-tertiary)" : "transparent",
                  color: i === selected ? "var(--foreground)" : "var(--foreground-secondary)",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={() => setSelected(i)}
              >
                <span style={{ color: i === selected ? "var(--accent)" : "var(--foreground-muted)" }}>{cmd.icon}</span>
                {cmd.label}
              </button>
            ))
          )}
        </div>
        <div style={{
          padding: "10px 16px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: "16px",
          fontSize: "11px",
          color: "var(--foreground-muted)",
        }}>
          <span>↑↓ naviguer</span>
          <span>↵ sélectionner</span>
          <span>esc fermer</span>
        </div>
      </div>
    </div>
  );
}
