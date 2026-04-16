"use client";

import Image from "next/image";
import { useState } from "react";
import { LucideMenu, LucideX } from "lucide-react";

const navLinks = ["About", "Memberships", "Services", "Store", "Stories"];

const drukWide: React.CSSProperties = {
  fontFamily: "var(--font-druktext), sans-serif",
  fontWeight: 500,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-black/50 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/md-orange.png"
            alt="MuscleDepot logo"
            width={126}
            height={70}
            style={{ width: "clamp(90px, 10vw, 126px)", height: "auto" }}
          />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-white uppercase tracking-[0.15em] hover:text-[#D85A30] transition-colors text-[10px]"
                style={drukWide}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Social icons — always visible */}
          <a
            href="#"
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
            aria-label="TikTok"
          >
            <Image
              src="/tiktok-svgrepo-com.svg"
              alt="TikTok"
              width={20}
              height={20}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <
            href="#"
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
            aria-label="Instagram"
          >
            <Image
              src="/instagram-svgrepo-com (2).svg"
              alt="Instagram"
              width={20}
              height={20}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
            aria-label="Facebook"
          >
            <Image
              src="/facebook-svgrepo-com.svg"
              alt="Facebook"
              width={20}
              height={20}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-white ml-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <LucideX size={24} /> : <LucideMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setOpen(false)}
              className="text-white uppercase tracking-[0.2em] text-2xl hover:text-[#D85A30] transition-colors"
              style={drukWide}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
