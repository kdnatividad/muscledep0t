import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "'DrukText', sans-serif",
  fontSize: "80px",
  fontWeight: 500,
  textTransform: "uppercase",
  lineHeight: 1.05,
};

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/headert.jpg"
        alt="hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95))",
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          MUSCLEDEP0T
        </p>

        <h1 style={drukText} className="text-white max-w-5xl">
          EVERYTHING STARTS FROM{" "}
          <span style={{ color: "#D85A30" }}>ZERO</span>
        </h1>

        <p className="text-sm text-white/60 uppercase tracking-wide max-w-lg mt-4">
          WELCOME TO MUSCLEDEP0T — YOUR LOCAL TRAINING GROUND FOR REAL PROGRESS.
          NO SHORTCUTS. JUST HARD WORK, DISCIPLINE, AND CONSISTENCY.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="#"
            className="bg-[#D85A30] text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-orange-700 transition-colors"
          >
            JOIN US NOW
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
