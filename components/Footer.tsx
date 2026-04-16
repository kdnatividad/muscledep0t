"use client";

import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.55)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
};

const colHeading: React.CSSProperties = {
  ...drukText,
  color: "#fff",
  fontSize: "15px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "20px",
};

const socials = [
  { src: "/tiktok-svgrepo-com.svg", label: "TikTok", href: "https://www.tiktok.com/@muscledep0t" },
  { src: "/instagram-svgrepo-com (2).svg", label: "Instagram", href: "https://www.instagram.com/muscledep0t/" },
  { src: "/facebook-svgrepo-com.svg", label: "Facebook", href: "https://www.facebook.com/muscledep0t" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>

      {/* Top — logo + tagline */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "40px 40px 32px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <Image src="/md-orange.png" alt="MuscleDepot" width={90} height={90} style={{ width: "90px", height: "auto" }} />
        <p style={{ ...drukText, color: "#fff", fontSize: "clamp(16px, 2vw, 26px)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          EVERYTHING STARTS FROM ZERO.
        </p>
      </div>

      {/* Middle — columns + stay connected */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="flex flex-col md:flex-row">

        {/* Link columns */}
        <div style={{ flex: 1, padding: "40px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="border-b border-white/8 md:border-b-0 md:border-r md:border-white/8">

          {/* About Us */}
          <div>
            <p style={colHeading}>About Us</p>
            {["Our Mission", "Our Trainers", "Memberships", "Partnerships"].map((l) => (
              <a key={l} href="#" style={linkStyle}>{l}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={colHeading}>Services</p>
            {["Personal Training", "Group Classes", "Equipment", "Facilities"].map((l) => (
              <a key={l} href="#" style={linkStyle}>{l}</a>
            ))}
          </div>

          {/* Useful Links */}
          <div>
            <p style={colHeading}>Useful Links</p>
            {["Privacy Policy", "FAQ", "Contact Us", "Store"].map((l) => (
              <a key={l} href="#" style={linkStyle}>{l}</a>
            ))}
          </div>
        </div>

        {/* Stay Connected */}
        <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }} className="w-full md:w-[220px]">
          <p style={{ ...drukText, color: "#fff", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.15em" }}>Stay Connected</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {socials.map(({ src, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "#D85A30" }}>
                <img src={src} alt={label} width={18} height={18} style={{ filter: "brightness(0) invert(1)" }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lower — get help + find us */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="flex flex-col md:flex-row">

        {/* Get Help */}
        <div style={{ flex: 1, padding: "40px" }} className="border-b border-white/8 md:border-b-0 md:border-r md:border-white/8">
          <p style={colHeading}>Get Help</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.8 }}>MuscleDepot Gym</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.8 }}>Del Rosario St, Tuguegarao City, Cagayan</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.8, marginTop: "8px" }}>
            <strong style={{ color: "#fff" }}>Email:</strong> muscledep0t.ph@gmail.com
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.8 }}>
            <strong style={{ color: "#fff" }}>Telephone:</strong> 0917 160 6725
          </p>
          <div style={{ marginTop: "16px" }}>
            <p style={{ ...drukText, color: "#D85A30", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Hours</p>
            {[
              ["Mon – Thu, Fri", "6 AM – 10:30 PM"],
              ["Saturday", "6 AM – 10:30 PM"],
              ["Sunday", "10 AM – 8 PM"],
            ].map(([day, hours]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginBottom: "4px" }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px" }}>{day}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>{hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Find Us */}
        <div style={{ flex: 2, minWidth: "320px", padding: "40px" }}>
          <p style={colHeading}>Find Us</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", marginBottom: "4px" }}>Del Rosario St, Tuguegarao City, Cagayan</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", marginBottom: "16px" }}>0917 160 6725</p>
          <div style={{ width: "100%", height: "180px", borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.0!2d121.7277!3d17.6133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3381b031b8f8b8b1%3A0x0!2sDel+Rosario+St%2C+Tuguegarao+City%2C+Cagayan!5e0!3m2!1sen!2sph!4v1"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#111", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ ...drukText, color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em" }}>© {new Date().getFullYear()}</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
          <a href="#" style={{ ...drukText, color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", textDecoration: "none" }}>CONTACT US</a>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ ...drukText, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", cursor: "pointer", padding: 0 }}>
            BACK TO TOP
          </button>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", letterSpacing: "0.08em" }}>BUILT BY GRIT.</p>
      </div>

    </footer>
  );
}
