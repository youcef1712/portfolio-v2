"use client";

import { useCallback, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    tags: readonly string[];
    accent: string;
    link: string;
  };
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (typeof window !== "undefined" && !window.matchMedia("(pointer: coarse)").matches) {
      const px = (x / rect.width - 0.5) * 6;
      const py = (y / rect.height - 0.5) * -6;
      cardRef.current.style.transform = `perspective(800px) rotateX(${py}deg) rotateY(${px}deg) translateY(-6px) scale(1.02)`;
    }

    spotlightRef.current.style.opacity = "1";
    spotlightRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, color-mix(in srgb, ${project.accent} 10%, transparent), transparent 50%)`;
  }, [project.accent]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !spotlightRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    cardRef.current.style.borderColor = "var(--border)";
    cardRef.current.style.boxShadow = "none";
    spotlightRef.current.style.opacity = "0";
    const g = cardRef.current.querySelector(".card-gradient") as HTMLElement;
    if (g) g.style.opacity = "0.4";
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = project.accent;
    cardRef.current.style.boxShadow = `0 0 0 1px ${project.accent}, 0 24px 48px color-mix(in srgb, ${project.accent} 14%, transparent)`;
    const g = cardRef.current.querySelector(".card-gradient") as HTMLElement;
    if (g) g.style.opacity = "1";
  }, [project.accent]);

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(index % 3) * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(index % 3) * 0.1}s` }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "28px", borderRadius: "16px", border: "1px solid var(--border)",
          background: "var(--background-secondary)", display: "flex", flexDirection: "column",
          gap: "16px", position: "relative", overflow: "hidden",
          transition: "transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          willChange: "transform", height: "100%",
        }}
      >
        {/* Spotlight glow */}
        <div
          ref={spotlightRef}
          style={{
            position: "absolute", inset: 0, borderRadius: "inherit",
            opacity: 0, transition: "opacity 0.3s ease", pointerEvents: "none", zIndex: 0,
          }}
        />

        <div className="card-gradient" style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: `linear-gradient(90deg, ${project.accent}, color-mix(in srgb, ${project.accent} 30%, transparent))`,
          opacity: 0.4, transition: "opacity 0.3s ease", zIndex: 1,
        }} />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1 }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "14px",
            background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
            border: `1px solid color-mix(in srgb, ${project.accent} 20%, transparent)`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <div style={{ width: "16px", height: "16px", borderRadius: "5px", background: project.accent, opacity: 0.8 }} />
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Code"
              style={{
                padding: "8px", borderRadius: "10px", border: "1px solid var(--border)",
                background: "transparent", color: "var(--foreground-muted)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s ease", textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.stopPropagation(); e.currentTarget.style.borderColor = project.accent; e.currentTarget.style.color = project.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-muted)"; }}
            >
              <Code2 size={15} />
            </a>
          )}
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--foreground)", marginBottom: "8px", letterSpacing: "-0.3px" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--foreground-secondary)" }}>
            {project.description}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", position: "relative", zIndex: 1 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 500,
              color: "var(--foreground-muted)", background: "var(--background-tertiary)",
              border: "1px solid var(--border)", letterSpacing: "0.2px",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" style={{ padding: "120px 24px", background: "var(--background-secondary)", position: "relative" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div ref={headerRef} style={{
          textAlign: "center", marginBottom: "64px",
          opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>{projects.tag}</span>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1px", color: "var(--foreground)" }}>
            {projects.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {projects.items.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
