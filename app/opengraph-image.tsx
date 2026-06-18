import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Youcef Bendra — Développeur Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            YB
          </div>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#fafafa",
            letterSpacing: "-2px",
            marginBottom: "12px",
          }}
        >
          Youcef Bendra
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#ef4444",
            marginBottom: "32px",
          }}
        >
          Développeur Full Stack
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Angular", "Spring Boot", "Java", "TypeScript", "Docker"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: "1px solid #27272a",
                  background: "#18181b",
                  color: "#a1a1aa",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
