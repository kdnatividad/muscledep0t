import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

export default function About() {
  return (
    <section
      style={{ backgroundColor: "#000000" }}
      className="py-20 px-6 md:px-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mx-auto" style={{ maxWidth: "1600px" }}>

        {/* Left — image */}
        <div className="w-full md:w-1/2 shrink-0">
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden" }}>
            <Image
              src="/about.jpg"
              alt="About MuscleDepot"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {/* Label */}
          <p
            style={{ ...drukText, color: "#D85A30", fontSize: "16px", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            BUILT FOR REAL PROGRESS
          </p>

          {/* Heading */}
          <h2 style={{ ...drukText, fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.05, textTransform: "uppercase", margin: 0 }}>
            <span style={{ color: "#fff", display: "block" }}>BUILT FOR REAL</span>
            <span style={{ color: "transparent", WebkitTextStroke: "2px #D85A30", display: "block" }}>PROGRESS</span>
          </h2>

          {/* Body */}
          <p style={{ color: "#fff", fontSize: "16px", fontWeight: 600, lineHeight: 1.6 }}>
            MucleDep0t Is Built For People Who Want Real Change.
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.75 }}>
            From Beginners To Experienced Lifters, We Focus On Helping You Stay Consistent And Improve Week By Week. Whether Your Goal Is To Gain Muscle, Lose Fat, Or Build Discipline — This Is Your Place.
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.75 }}>
            We Don&apos;t Promise Overnight Results.<br />
            We Build Habits That Actually Last.
          </p>

          {/* Button */}
          <div>
            <a
              href="#"
              className="btn-glow"
              style={{
                ...drukText,
                display: "inline-block",
                backgroundColor: "#D85A30",
                color: "#fff",
                padding: "14px 32px",
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
