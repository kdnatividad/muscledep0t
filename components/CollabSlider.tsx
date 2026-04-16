"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: "80px 40px", position: "relative", overflow: "hidden" }}>
      <img src="/6829.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.90)", zIndex: 1 }} />
      <div style={{ maxWidth: "1600px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left — image slider */}
          <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "480px" }}>
            <div style={{ border: "2px solid #D85A30", borderRadius: "16px", padding: "10px" }}>
              <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  key={current}
                  src={slides[current].image}
                  alt={`Slide ${current + 1}`}
                  fill
                  className="object-cover object-center"
                  priority
                  style={{ animation: "fade-in 0.5s ease forwards" }}
                />
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
            <div style={{ marginBottom: "16px" }}>
              <Image src="/slwly/MDSW 1.png" alt="MuscleDepot x Slowly" width={160} height={40} style={{ width: "160px", height: "auto", objectFit: "contain" }} />
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
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.75, maxWidth: "520px", marginBottom: "32px" }}>
              The First Collaboration Between <strong style={{ color: "#fff" }}>Muscle Depot And Slowly But Surely</strong> Is Finally Here. Built For Those Who Show Up, Put In The Work, And Trust The Process — Slowly But Surely.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="btn-glow"
              style={{ ...drukText, display: "inline-block", backgroundColor: "#D85A30", color: "#fff", padding: "14px 36px", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "4px", textDecoration: "none" }}
            >
              BUY ONE NOW
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
