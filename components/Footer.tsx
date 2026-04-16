"use client";

import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const navLinks = ["About", "Memberships", "Services", "Store", "Stories"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "60px 40px 32px" }}>

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Image src="/md-orange.png" alt="MuscleDepot" width={90} height={90} style={{ width: "90px", height: "auto" }} />
            <p style={{ ...drukText, color: "rgba(255,255,255,0.4)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Everything Starts From Zero
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{ ...drukText, color: "rgba(255,255,255,0.7)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D85A30")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { src: "/tiktok-svgrepo-com.svg", label: "TikTok" },
              { src: "/instagram-svgrepo-com (2).svg", label: "Instagram" },
              { src: "/facebook-svgrepo-com.svg", label: "Facebook" },
            ].map(({ src, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "#D85A30" }}
              >
                <img src={src} alt={label} width={18} height={18} style={{ filter: "brightness(0) invert(1)" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)", marginBottom: "28px" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} MuscleDepot. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.05em" }}>
            Built by Grit.
          </p>
        </div>

      </div>
    </footer>
  );
}
