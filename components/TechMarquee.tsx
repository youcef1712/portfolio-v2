"use client";

const techs = [
  "Angular", "Spring Boot", "Java", "TypeScript", "JavaScript", "Python",
  "Docker", "AWS", "Git", "Linux", "React", "Next.js", "PostgreSQL",
  "HTML", "CSS", "C#", ".NET", "PHP", "MySQL",
];

export function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "24px 0",
        background: "var(--background-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(90deg, var(--background-secondary), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(270deg, var(--background-secondary), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "48px",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--foreground-muted)",
              whiteSpace: "nowrap",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              opacity: 0.6,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
