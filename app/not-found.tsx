import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        padding: "24px",
        textAlign: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(80px, 15vw, 160px)",
          fontWeight: 800,
          letterSpacing: "-6px",
          lineHeight: 1,
          background:
            "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 50%, var(--foreground) 100%)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "gradient-shift 6s ease infinite",
        }}
      >
        404
      </div>
      <p
        style={{
          fontSize: "18px",
          color: "var(--foreground-secondary)",
          maxWidth: "400px",
          lineHeight: 1.6,
        }}
      >
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "8px",
          padding: "13px 28px",
          borderRadius: "12px",
          background: "var(--accent)",
          color: "#ffffff",
          fontSize: "15px",
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow:
            "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
