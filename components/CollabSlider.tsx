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
    <section className="relative overflow-hidden py-16 px-10">
      <img src="/6829.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.3, zIndex: 0 }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.90)", zIndex: 1 }} />

      <div className="relative mx-auto" style={{ zIndex: 2, maxWidth: "1600px" }}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left — image slider */}
          <div className="w-full shrink-0" style={{ maxWidth: "480px" }}>
            <div style={{ border: "2px solid #D85A30", borderRadius: "16px", padding: "10px" }}>
              <div className="relative rounded-[10px] overflow-hidden" style={{ aspectRatio: "1/1" }}>
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
            <div className="flex justify-center flex-wrap gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="w-2.5 h-2.5 rounded-full border-none cursor-pointer p-0 transition-colors duration-200"
                  style={{ backgroundColor: i === current ? "#D85A30" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6 flex-1">

            <div>
              <Image src="/slwly/MDSW 1.png" alt="MuscleDepot x Slowly" width={160} height={40} style={{ width: "160px", height: "auto", objectFit: "contain" }} />
            </div>

            <h2 className="uppercase leading-tight" style={{ ...drukText, lineHeight: 1.05 }}>
              <span className="block" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "transparent", WebkitTextStroke: "2px #D85A30" }}>
                STRENGTH
              </span>
              <span className="block" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "#fff" }}>
                YOU CAN WEAR
              </span>
            </h2>

            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", maxWidth: "520px" }}>
              The First Collaboration Between <strong style={{ color: "#fff" }}>Muscle Depot And Slowly But Surely</strong> Is Finally Here. Built For Those Who Show Up, Put In The Work, And Trust The Process — Slowly But Surely.
            </p>

            <div>
              <a
                href="#"
                className="btn-glow inline-block"
                style={{ ...drukText, backgroundColor: "#D85A30", color: "#fff", padding: "12px 32px", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "4px", textDecoration: "none" }}
              >
                BUY ONE NOW
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
