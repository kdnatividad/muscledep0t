"use client";

import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const trainers = [
  {
    image: "/coach-josh.jpg",
    name: "COACH JOSH",
    description: "FOCUSED ON SIZE, STRENGTH, AND STAGE-LEVEL CONDITIONING. COACH JOSH BRINGS REAL BODYBUILDING EXPERIENCE AND NO-BS TRAINING TO HELP YOU PUSH PAST LIMITS.",
  },
  {
    image: "/coach-boodz.jpg",
    name: "COACH BOODZ",
    description: "COMPETITIVE ATHLETE AND DEDICATED COACH WHO TRAINS YOU TO PERFORM AT YOUR BEST. DISCIPLINED, TECHNICAL, AND RESULTS-DRIVEN.",
  },
];

function TrainerCard({ trainer }: { trainer: typeof trainers[0] }) {
  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
      style={{ aspectRatio: "3/4", border: "2px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(216,90,48,0.45)";
        e.currentTarget.style.boxShadow = "0 0 20px 4px rgba(216,90,48,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Image
        src={trainer.image}
        alt={trainer.name}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />

      {/* Default gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.75) 100%)" }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
      />

      {/* Default name — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 group-hover:opacity-0 transition-opacity duration-300" style={{ zIndex: 2 }}>
        <p style={{ ...drukText, color: "#fff", fontSize: "20px", textTransform: "uppercase" }}>
          {trainer.name}
        </p>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col justify-end gap-3 px-5 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: 3 }}>
        <p style={{ ...drukText, color: "#fff", fontSize: "26px", textTransform: "uppercase", lineHeight: 1.1 }}>
          {trainer.name}
        </p>
        <p className="leading-relaxed uppercase" style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", letterSpacing: "0.03em" }}>
          {trainer.description}
        </p>
        <div>
          <a
            href="#"
            className="btn-glow inline-block"
            style={{ ...drukText, backgroundColor: "#D85A30", color: "#fff", padding: "10px 24px", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "4px", textDecoration: "none" }}
          >
            HIRE COACH
          </a>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-4"
      style={{ aspectRatio: "3/4", backgroundColor: "#D85A30", border: "2px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(216,90,48,0.45)";
        e.currentTarget.style.boxShadow = "0 0 20px 4px rgba(216,90,48,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Image src="/md-white.png" alt="MuscleDepot" width={100} height={100} style={{ objectFit: "contain" }} />
      <p style={{ ...drukText, color: "#fff", fontSize: "20px", textTransform: "uppercase" }}>
        COACH SAMPLE
      </p>
    </div>
  );
}

export default function Trainers() {
  return (
    <section style={{ backgroundColor: "#000000" }} className="py-16 px-6 md:px-16">
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>

        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <h2
            className="uppercase leading-tight shrink-0"
            style={{ ...drukText, fontSize: "clamp(24px, 5vw, 64px)", lineHeight: 1 }}
          >
            <span style={{ color: "#fff" }}>OUR PERSONAL </span>
            <span style={{ color: "#D85A30" }}>TRAINERS</span>
          </h2>
          <div className="flex-1 h-0.5 hidden sm:block" style={{ backgroundColor: "#D85A30" }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
          <PlaceholderCard />
        </div>

      </div>
    </section>
  );
}
