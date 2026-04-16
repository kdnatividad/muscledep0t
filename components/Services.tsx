"use client";

import Image from "next/image";

const cards = [
  {
    image: "/services%201.jpg",
    icon: "/state-equipment.svg",
    alt: "equipment",
    title: "STATE-OF-THE-ART EQUIPMENT",
  },
  {
    image: "/services2.jpg",
    icon: "/expert-trainers.svg",
    alt: "trainers",
    title: "EXPERT PERSONAL TRAINERS",
  },
  {
    image: "/services%203.jpg",
    icon: "/wide-classes.svg",
    alt: "classes",
    title: "WIDE VARIETY OF CLASSES",
  },
  {
    image: "/services4.jpg",
    icon: "/clean.svg",
    alt: "facilities",
    title: "CLEAN, COMFORTABLE FACILITIES",
  },
];

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
};

export default function Services() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden" }}
      className="py-24 px-6 md:px-16"
    >
      <img src="/6829.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.85)", zIndex: 1 }} />
      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1600px", margin: "0 auto" }}>
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className="uppercase tracking-widest mb-4"
          style={{ ...drukText, color: "#D85A30", fontSize: "16px" }}
        >
          OUR SERVICES
        </p>
        <h2
          className="uppercase leading-tight"
          style={{ ...drukText, fontSize: "clamp(28px, 5.5vw, 70px)" }}
        >
          <span className="block text-white">EVERYTHING YOU NEED TO</span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #D85A30",
            }}
          >
            GET BETTER
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
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
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover dark overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{ backgroundColor: "rgba(0,0,0,0.65)", zIndex: 1 }}
            />

            {/* Centered content — visible on hover only */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ zIndex: 2 }}
            >
              <img
                src={card.icon}
                alt={card.alt}
                width={120}
                height={120}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p
                className="text-white uppercase tracking-wide text-center text-sm"
                style={drukText}
              >
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
