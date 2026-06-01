"use client";

import { useInView } from "@/hooks/useInView";
import { ExternalLink, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function ProjectCard({ project, index }: { project: { title: string; description: string; tags: readonly string[]; accent: string ; link:string }; index: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref}
      style={{ padding: "28px", borderRadius: "14px", border: "1px solid var(--border)", background: "var(--background-secondary)", display: "flex", flexDirection: "column", gap: "16px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.6s ease ${(index % 3) * 0.1}s`, position: "relative", overflow: "hidden" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.accent; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 48px color-mix(in srgb, ${project.accent} 10%, transparent)`; const g = e.currentTarget.querySelector(".card-gradient") as HTMLElement; if (g) g.style.opacity = "1"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; const g = e.currentTarget.querySelector(".card-gradient") as HTMLElement; if (g) g.style.opacity = "0"; }}>
      <div className="card-gradient" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${project.accent}, color-mix(in srgb, ${project.accent} 40%, transparent))`, opacity: 0, transition: "opacity 0.3s ease" }} />

   <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `color-mix(in srgb, ${project.accent} 15%, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: project.accent, opacity: 0.8 }} />
  </div>

  <div style={{ display: "flex", gap: "8px" }}>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Code"
        style={{
          padding: "6px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "transparent",
          color: "var(--foreground-muted)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = project.accent;
          e.currentTarget.style.color = project.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--foreground-muted)";
        }}
      >
        <Code2 size={14} />
      </a>
    )}
  </div>
</div>

      <div>
        <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--foreground)", marginBottom: "8px", letterSpacing: "-0.3px" }}>{project.title}</h3>
        <p style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--foreground-secondary)" }}>{project.description}</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ padding: "3px 9px", borderRadius: "6px", fontSize: "12px", fontWeight: 500, color: "var(--foreground-muted)", background: "var(--background-tertiary)", border: "1px solid var(--border)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" style={{ padding: "120px 24px", background: "var(--background-secondary)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "64px", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(24px)", transition: "all 0.6s ease" }}>
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
          {projects.items.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
