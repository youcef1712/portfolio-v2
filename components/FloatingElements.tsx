"use client";

const particles = [
  { size: 3, x: "12%", y: "18%", delay: 0, dur: 22, opacity: 0.15 },
  { size: 5, x: "85%", y: "25%", delay: 3, dur: 28, opacity: 0.1 },
  { size: 4, x: "70%", y: "70%", delay: 1, dur: 24, opacity: 0.12 },
  { size: 6, x: "25%", y: "75%", delay: 4, dur: 30, opacity: 0.08 },
  { size: 3, x: "55%", y: "15%", delay: 2, dur: 26, opacity: 0.1 },
  { size: 4, x: "40%", y: "85%", delay: 5, dur: 20, opacity: 0.12 },
  { size: 2, x: "92%", y: "55%", delay: 1, dur: 32, opacity: 0.15 },
  { size: 5, x: "8%", y: "50%", delay: 3, dur: 22, opacity: 0.08 },
  { size: 3, x: "65%", y: "40%", delay: 6, dur: 28, opacity: 0.1 },
  { size: 2, x: "35%", y: "30%", delay: 2, dur: 34, opacity: 0.12 },
];

const shapes = [
  { type: "ring", size: 40, x: "78%", y: "20%", delay: 0, dur: 35 },
  { type: "ring", size: 28, x: "15%", y: "65%", delay: 4, dur: 40 },
  { type: "cross", size: 16, x: "90%", y: "75%", delay: 2, dur: 30 },
  { type: "cross", size: 12, x: "22%", y: "30%", delay: 6, dur: 38 },
];

export function FloatingElements() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "var(--accent)",
            opacity: p.opacity,
            animation: `float-particle ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {shapes.map((s, i) =>
        s.type === "ring" ? (
          <div
            key={`s-${i}`}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: "50%",
              border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
              opacity: 0.5,
              animation: `float-particle ${s.dur}s ease-in-out ${s.delay}s infinite, spinSlow ${s.dur * 2}s linear infinite`,
            }}
          />
        ) : (
          <div
            key={`s-${i}`}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: 0.3,
              animation: `float-particle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="8" y1="0" x2="8" y2="16" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
              <line x1="0" y1="8" x2="16" y2="8" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
            </svg>
          </div>
        )
      )}
    </div>
  );
}
