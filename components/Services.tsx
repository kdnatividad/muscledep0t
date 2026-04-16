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
      style={{ backgroundColor: "#0a0a0a" }}
      className="py-24 px-6 md:px-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className="text-sm uppercase tracking-widest mb-4"
          style={{ ...drukText, color: "#D85A30" }}
        >
          OUR SERVICES
        </p>
        <h2
          className="uppercase leading-tight"
          style={{ ...drukText, fontSize: "clamp(36px, 5vw, 64px)" }}
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#D85A30")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "transparent")
            }
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Default overlay */}
            <div
              className="absolute inset-0 transition-all duration-300 group-hover:opacity-0"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            />

            {/* Hover label */}
            <p
              className="absolute top-3 left-3 text-xs uppercase opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ ...drukText, color: "#D85A30" }}
            >
              VIEW SERVICE
            </p>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-6 px-4 gap-3">
              <img
                src={card.icon}
                alt={card.alt}
                width={40}
                height={40}
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
    </section>
  );
}
