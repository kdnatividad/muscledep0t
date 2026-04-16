"use client";

import { useState } from "react";
import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const slides = [
  { image: "/slwly/slwly.jpg" },
  { image: "/slwly/slwly2.jpg" },
  { image: "/slwly/slwly3.jpg" },
  { image: "/slwly/slwly4.jpg" },
  { image: "/slwly/slwly5.jpg" },
  { image: "/slwly/slwly6.jpg" },
  { image: "/slwly/slwly7.jpg" },
  { image: "/slwly/slwly8.jpg" },
  { image: "/slwly/slwly9.jpg" },
  { image: "/slwly/slwly10.jpg" },
  { image: "/slwly/slwly11.jpg" },
  { image: "/slwly/slwly12.jpg" },
  { image: "/slwly/slwly13.jpg" },
  { image: "/slwly/slwly14.jpg" },
  { image: "/slwly/slwly15.jpg" },
  { image: "/slwly/slwly16.jpg" },
  { image: "/slwly/slwly17.jpg" },
  { image: "/slwly/slwly18.jpg" },
];

export default function CollabSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <section style={{ backgroundColor: "#000", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left — image slider */}
          <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "480px" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", border: "2px solid #D85A30" }}>
              <Image
                key={current}
                src={slides[current].image}
                alt={`Slide ${current + 1}`}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Anniversary Collection label */}
              <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 2 }}>
                <p style={{ ...drukText, color: "#D85A30", fontSize: "clamp(24px, 4vw, 36px)", textTransform: "uppercase", lineHeight: 1.05, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                  1st<br />Anniversary<br />Collection
                </p>
              </div>
            </div>

            {/* Dot navigation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: i === current ? "#D85A30" : "rgba(255,255,255,0.3)",
                    padding: 0,
                    transition: "background-color 0.2s",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div style={{ flex: 1 }}>
            {/* Collab line */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Image src="/md-orange.png" alt="MuscleDepot" width={32} height={32} style={{ width: "32px", height: "auto" }} />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", letterSpacing: "0.05em" }}>×</span>
              <Image src="/slwly/MDSW 1.png" alt="Slowly" width={80} height={28} style={{ width: "80px", height: "auto", objectFit: "contain" }} />
            </div>

            {/* Heading */}
            <h2 style={{ ...drukText, textTransform: "uppercase", lineHeight: 1.05, margin: "0 0 20px" }}>
              <span style={{ display: "block", fontSize: "clamp(40px, 6vw, 80px)", color: "transparent", WebkitTextStroke: "2px #D85A30" }}>
                STRENGTH
              </span>
              <span style={{ display: "block", fontSize: "clamp(40px, 6vw, 80px)", color: "#fff" }}>
                YOU CAN WEAR
              </span>
            </h2>

            {/* Description */}
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.75, maxWidth: "520px", marginBottom: "32px" }}>
              The First Collaboration Between <strong style={{ color: "#fff" }}>Muscle Depot And Slowly But Surely</strong> Is Finally Here. Built For Those Who Show Up, Put In The Work, And Trust The Process — Slowly But Surely.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="btn-glow"
              style={{ ...drukText, display: "inline-block", backgroundColor: "#D85A30", color: "#fff", padding: "14px 36px", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "4px", textDecoration: "none" }}
            >
              BUY ONE NOW
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
