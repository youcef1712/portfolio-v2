"use client";

import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Briefcase } from "lucide-react";

function TimelineCard({
  item,
  index,
}: {
  item: {
    period: string;
    title: string;
    company: string;
    description: string;
    tags: readonly string[];
    type: "education" | "work";
  };
  index: number;
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "24px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      {/* Timeline dot & line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          paddingTop: "4px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "14px",
            background: "color-mix(in srgb, var(--accent) 10%, transparent)",
            border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            flexShrink: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          {item.type === "education" ? (
            <GraduationCap size={20} />
          ) : (
            <Briefcase size={18} />
          )}
        </div>
        <div
          style={{
            width: "2px",
            flex: 1,
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 25%, transparent), transparent)",
            marginTop: "8px",
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          padding: "28px",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          background: "var(--background-secondary)",
          marginBottom: "24px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.transform = "translateX(6px)";
          e.currentTarget.style.boxShadow = "var(--card-glow-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.transform = "translateX(0)";
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.5px",
              padding: "4px 12px",
              borderRadius: "100px",
              background: "color-mix(in srgb, var(--accent) 8%, transparent)",
              border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
            }}
          >
            {item.period}
          </span>
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--foreground)",
            marginBottom: "4px",
            letterSpacing: "-0.3px",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--accent)",
            fontWeight: 500,
            marginBottom: "12px",
            opacity: 0.8,
          }}
        >
          {item.company}
        </p>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--foreground-secondary)",
            marginBottom: "16px",
          }}
        >
          {item.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--foreground-muted)",
                background: "var(--background-tertiary)",
                border: "1px solid var(--border)",
                letterSpacing: "0.2px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        background: "var(--background-secondary)",
        position: "relative",
      }}
    >
      <div className="noise-overlay" />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "16px",
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
              {experience.tag}
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
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--foreground)",
            }}
          >
            {experience.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div>
          {experience.items.map((item, i) => (
            <TimelineCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
