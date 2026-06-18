export function WaveDivider({
  from = "primary",
  to = "secondary",
  flip = false,
}: {
  from?: "primary" | "secondary";
  to?: "primary" | "secondary";
  flip?: boolean;
}) {
  const bgFrom =
    from === "primary" ? "var(--background)" : "var(--background-secondary)";
  const bgTo =
    to === "primary" ? "var(--background)" : "var(--background-secondary)";

  return (
    <div
      style={{
        position: "relative",
        height: "60px",
        background: bgFrom,
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M0,24 C240,55 480,8 720,32 C960,56 1200,12 1440,28 L1440,60 L0,60 Z"
          fill={bgTo}
        />
      </svg>
    </div>
  );
}
