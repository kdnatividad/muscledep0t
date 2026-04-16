const textStyle: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "clamp(28px, 4vw, 60px)",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  lineHeight: 1,
};

function MarqueeItem() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2rem", paddingRight: "2rem" }}>
      <span style={textStyle}>MUSCLE DEPOT.</span>
      <img src="/md-white.png" alt="" style={{ height: "36px", width: "36px", objectFit: "contain", flexShrink: 0 }} />
      <span style={textStyle}>BE THE BEST VERSION YOU COULD EVER BE</span>
      <img src="/md-white.png" alt="" style={{ height: "36px", width: "36px", objectFit: "contain", flexShrink: 0 }} />
    </span>
  );
}

export default function MarqueeBanner() {
  return (
    <div
      style={{
        backgroundColor: "#D85A30",
        overflow: "hidden",
        paddingTop: "10px",
        paddingBottom: "10px",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          animation: "marquee-scroll 35s linear infinite",
        }}
      >
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </div>
  );
}
