export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "85vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "0",
          opacity: "0.3",
        }}
      >
        <source src="/muscledepot-hero.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "1",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: "2",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "DrukText, sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: "0 0 24px",
          }}
        >
          EVERYTHING STARTS
          <br />
          FROM <span style={{ color: "#D85A30" }}>ZERO</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            maxWidth: "520px",
            marginBottom: "32px",
          }}
        >
          WELCOME TO MUSCLEDEP0T — YOUR LOCAL TRAINING GROUND FOR REAL PROGRESS.
          NO SHORTCUTS. JUST HARD WORK, DISCIPLINE, AND CONSISTENCY.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              backgroundColor: "#D85A30",
              color: "#fff",
              padding: "14px 32px",
              fontFamily: "DrukText, sans-serif",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            JOIN US NOW
          </a>
          <a
            href="#"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              padding: "14px 32px",
              fontFamily: "DrukText, sans-serif",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderRadius: "4px",
              border: "1px solid #fff",
              textDecoration: "none",
            }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
