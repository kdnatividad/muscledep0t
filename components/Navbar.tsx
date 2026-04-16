import Image from "next/image";

const navLinks = ["About", "Memberships", "Services", "Store", "Stories"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <Image src="/md-orange.png" alt="MuscleDepot logo" width={70} height={70} />
      </div>

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white uppercase tracking-[0.15em] hover:text-[#D85A30] transition-colors [font-family:var(--font-druk)] text-[10px] font-normal"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#D85A30] hover:bg-orange-700 transition-colors"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
