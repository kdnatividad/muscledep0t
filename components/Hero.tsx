const drukWide = (size: string): React.CSSProperties => ({
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
  fontSize: size,
  textTransform: "uppercase",
  lineHeight: 1.05,
});

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <source src="/muscledepot-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.97) 100%)",
        zIndex: 1,
      }} />

      {/* Hero content */}
      <div
        style={{ position: "relative", zIndex: 2 }}
        className="flex h-full flex-col items-center justify-center text-center px-6 md:px-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          MUSCLEDEP0T
        </p>

        {/* Mobile heading */}
        <h1
          style={drukWide("42px")}
          className="text-white max-w-5xl md:hidden"
        >
          EVERYTHING STARTS
          <br />
          FROM <span style={{ color: "#D85A30" }}>ZERO</span>
        </h1>

        {/* Desktop heading */}
        <h1
          style={drukWide("80px")}
          className="text-white max-w-5xl hidden md:block"
        >
          EVERYTHING STARTS
          <br />
          FROM <span style={{ color: "#D85A30" }}>ZERO</span>
        </h1>

        <p className="text-xs md:text-sm text-white/60 uppercase tracking-wide max-w-xs md:max-w-lg mt-4">
          WELCOME TO MUSCLEDEP0T — YOUR LOCAL TRAINING GROUND FOR REAL PROGRESS.
          NO SHORTCUTS. JUST HARD WORK, DISCIPLINE, AND CONSISTENCY.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-8 w-full max-w-xs md:max-w-none md:w-auto">
          <a
            href="#"
            className="w-full md:w-auto bg-[#D85A30] text-white px-6 py-3 rounded uppercase tracking-wide hover:bg-orange-700 transition-colors text-center"
            style={{ fontFamily: "var(--font-druktext), sans-serif", fontWeight: 500 }}
          >
            JOIN US NOW
          </a>
          <a
            href="#"
            className="w-full md:w-auto border border-white text-white px-6 py-3 rounded uppercase tracking-wide hover:bg-white hover:text-black transition-colors text-center"
            style={{ fontFamily: "var(--font-druktext), sans-serif", fontWeight: 500 }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
