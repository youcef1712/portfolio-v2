"use client";

import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(12px)", transition: `all 0.5s ease ${delay}s` }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--foreground-secondary)" }}>{name}</span>
        <span style={{ fontSize: "13px", color: "var(--foreground-muted)", fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: "4px", borderRadius: "2px", background: "var(--background-tertiary)", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "2px", background: "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #8b5cf6))", width: inView ? `${level}%` : "0%", transition: `width 1s ease ${delay + 0.2}s` }} />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { t } = useLanguage();
  const { skills } = t;

  return (
    <section id="skills" style={{ padding: "120px 24px", background: "var(--background)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "64px", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(24px)", transition: "all 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>{skills.tag}</span>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1px", color: "var(--foreground)" }}>
            {skills.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {skills.categories.map((cat, catIndex) => (
            <div key={cat.category}
              style={{ padding: "32px", borderRadius: "14px", border: "1px solid var(--border)", background: "var(--background-secondary)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <span style={{ fontSize: "20px", color: "var(--accent)" }}>{cat.icon}</span>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.3px" }}>{cat.category}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={catIndex * 0.1 + si * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
