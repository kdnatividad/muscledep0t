import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

export default function About() {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* Left — image */}
        <div className="w-full">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/about.jpg"
              alt="About MuscleDepot"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col gap-6 overflow-hidden">
          <p
            style={{
              ...drukText,
              color: "#D85A30",
              fontSize: "16px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            WHO WE ARE
          </p>

          <div style={{ overflow: "hidden" }}>
            <h2
              className="uppercase leading-tight"
              style={{
                ...drukText,
                fontSize: "clamp(28px, 5vw, 72px)",
                lineHeight: 1.05,
              }}
            >
              <span style={{ color: "#fff", display: "block" }}>
                MORE THAN A GYM. THIS IS
              </span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #D85A30",
                  display: "block",
                }}
              >
                MUSCLEDEPOT
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p
              className="leading-relaxed"
              style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}
            >
              MucleDep0t Is Built For People Who Want Real Change.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px" }}
            >
              From Beginners To Experienced Lifters, We Focus On Helping You
              Stay Consistent And Improve Week By Week. Whether Your Goal Is To
              Gain Muscle, Lose Fat, Or Build Discipline — This Is Your Place.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px" }}
            >
              We Don&apos;t Promise Overnight Results.
              <br />
              We Build Habits That Actually Last.
            </p>
          </div>

          <div className="mt-2">
            <a
              href="#"
              className="btn-glow inline-block"
              style={{
                ...drukText,
                backgroundColor: "#D85A30",
                color: "#fff",
                padding: "12px 32px",
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
