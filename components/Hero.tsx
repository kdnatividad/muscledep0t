const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const btnBase: React.CSSProperties = {
  ...drukText,
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  borderRadius: "4px",
  textDecoration: "none",
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: "85vh" }}>
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: 0 }}
      >
        <source src="/muscledepot-hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.95) 100%)" }}
      />

      <div
        className="relative h-full flex flex-col items-center justify-center text-center px-6 mx-auto w-full"
        style={{ zIndex: 2, maxWidth: "1600px" }}
      >
        <h1
          className="uppercase mb-4 md:mb-6"
          style={{ ...drukText, fontSize: "clamp(28px, 8vw, 80px)", color: "#fff", lineHeight: 1.1 }}
        >
          EVERYTHING STARTS
          <br />
          FROM <span style={{ color: "#D85A30" }}>ZERO</span>
        </h1>

        <p
          className="mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(14px, 3.5vw, 18px)", letterSpacing: "0.08em", textTransform: "uppercase", maxWidth: "520px" }}
        >
          WELCOME TO MUSCLEDEP0T — YOUR LOCAL TRAINING GROUND FOR REAL PROGRESS.
          NO SHORTCUTS. JUST HARD WORK, DISCIPLINE, AND CONSISTENCY.
        </p>

        <div className="flex flex-row justify-center gap-3 w-full max-w-sm sm:max-w-none">
          <a
            href="#"
            className="btn-glow flex-1 sm:flex-none text-center"
            style={{ ...btnBase, backgroundColor: "#D85A30", color: "#fff", padding: "12px 32px" }}
          >
            JOIN US NOW
          </a>
          <a
            href="#"
            className="flex-1 sm:flex-none text-center"
            style={{ ...btnBase, backgroundColor: "transparent", color: "#fff", padding: "12px 32px", border: "1px solid #fff" }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
