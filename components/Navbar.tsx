import Image from "next/image";

const navLinks = ["About", "Memberships", "Services", "Store", "Stories"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center">
        <Image
          src="/md-orange.png"
          alt="MuscleDepot logo"
          width={126}
          height={70}
          style={{ width: "126px", height: "auto" }}
        />
      </div>

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white uppercase tracking-[0.15em] hover:text-[#D85A30] transition-colors text-[10px]"
              style={{ fontFamily: "'DrukText', sans-serif", fontWeight: 500 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
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
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
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
      </div>
    </nav>
  );
}
