"use client";

import Image from "next/image";

const drukText: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

const socials = [
  { src: "/tiktok-svgrepo-com.svg",             label: "TikTok",     href: "https://www.tiktok.com/@muscledep0t" },
  { src: "/instagram-svgrepo-com (2).svg",       label: "Instagram",  href: "https://www.instagram.com/muscledep0t/" },
  { src: "/facebook-svgrepo-com.svg",            label: "Facebook",   href: "https://www.facebook.com/muscledep0t" },
];

const linkCols = [
  { heading: "About Us",      links: ["Our Mission", "Our Trainers", "Memberships", "Partnerships"] },
  { heading: "Services",      links: ["Personal Training", "Group Classes", "Equipment", "Facilities"] },
  { heading: "Useful Links",  links: ["Privacy Policy", "FAQ", "Contact Us", "Store"] },
];

const hours = [
  ["Mon – Thu, Fri", "6 AM – 10:30 PM"],
  ["Saturday",       "6 AM – 10:30 PM"],
  ["Sunday",         "10 AM – 8 PM"],
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>

      {/* Top — logo + tagline */}
      <div
        className="flex items-center justify-between flex-wrap gap-4 px-4 sm:px-8 md:px-12 lg:px-16 py-10 mx-auto"
        style={{ maxWidth: "1600px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Image src="/md-orange.png" alt="MuscleDepot" width={90} height={90} style={{ width: "90px", height: "auto" }} />
        <p style={{ ...drukText, color: "#fff", fontSize: "clamp(16px, 2vw, 26px)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          EVERYTHING STARTS FROM ZERO.
        </p>
      </div>

      {/* Middle — link columns + stay connected */}
      <div
        className="flex flex-col md:flex-row mx-auto"
        style={{ maxWidth: "1600px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Link columns */}
        <div
          className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10 border-b border-white/8 md:border-b-0 md:border-r md:border-white/8"
        >
          {linkCols.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-2">
              <p className="mb-4" style={{ ...drukText, color: "#fff", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {heading}
              </p>
              {links.map((l) => (
                <a key={l} href="#" className="block" style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Stay Connected */}
        <div className="flex flex-col items-center justify-center gap-4 p-10 w-full md:w-55">
          <p style={{ ...drukText, color: "#fff", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Stay Connected
          </p>
          <div className="flex gap-2">
            {socials.map(({ src, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ backgroundColor: "#D85A30" }}>
                <img src={src} alt={label} width={18} height={18} style={{ filter: "brightness(0) invert(1)" }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lower — get help + find us */}
      <div
        className="flex flex-col md:flex-row mx-auto"
        style={{ maxWidth: "1600px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Get Help */}
        <div className="flex-1 p-10 border-b border-white/8 md:border-b-0 md:border-r md:border-white/8">
          <p className="mb-6" style={{ ...drukText, color: "#fff", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Get Help
          </p>
          <div className="flex flex-col gap-1">
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>MuscleDepot Gym</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>Del Rosario St, Tuguegarao City, Cagayan</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
              <strong style={{ color: "#fff" }}>Email:</strong> muscledep0t.ph@gmail.com
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
              <strong style={{ color: "#fff" }}>Telephone:</strong> 0917 160 6725
            </p>
          </div>
          <div className="mt-6">
            <p className="mb-2" style={{ ...drukText, color: "#D85A30", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Hours
            </p>
            <div className="flex flex-col gap-1">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px" }}>{day}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Find Us */}
        <div className="flex-2 p-10">
          <p className="mb-6" style={{ ...drukText, color: "#fff", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Find Us
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px" }} className="mb-1">
            Del Rosario St, Tuguegarao City, Cagayan
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px" }} className="mb-4">
            0917 160 6725
          </p>
          <div className="w-full rounded-lg overflow-hidden" style={{ height: "180px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.0!2d121.7277!3d17.6133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3381b031b8f8b8b1%3A0x0!2sDel+Rosario+St%2C+Tuguegarao+City%2C+Cagayan!5e0!3m2!1sen!2sph!4v1"
              width="100%" height="180"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-2 px-4 sm:px-8 md:px-12 lg:px-16 py-4 text-center sm:text-left" style={{ backgroundColor: "#111" }}>
        <div className="flex items-center flex-wrap gap-4">
          <span style={{ ...drukText, color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
          <a href="#" style={{ ...drukText, color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", textDecoration: "none" }}>
            CONTACT US
          </a>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ ...drukText, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", cursor: "pointer", padding: 0 }}
          >
            BACK TO TOP
          </button>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", letterSpacing: "0.08em" }}>BUILT BY GRIT.</p>
      </div>

    </footer>
  );
}
