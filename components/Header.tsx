// components/Header.tsx
"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  const navLinkClasses = 
    "relative text-gray-700 transition-colors hover:text-[#0077B6] " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:w-full after:bg-[#0077B6] " +
    "after:origin-left after:scale-x-0 after:transition-transform " +
    "after:duration-300 hover:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-[#023E8A]">
          PRabu Teknik
        </Link>
        <nav className="hidden md:flex gap-8 items-center"> 
          <Link href="#layanan" className={navLinkClasses}>
            Layanan
          </Link>
          <Link href="#galeri" className={navLinkClasses}>
            Galeri
          </Link>
          <Link href="#testimoni" className={navLinkClasses}>
            Testimoni
          </Link>
          <Link href="#kontak" className={navLinkClasses}>
            Kontak
          </Link>
        </nav>
        <a
          href="https://wa.me/6289676570369"
          className="bg-[#0077B6] text-white px-4 py-2 rounded-full flex items-center gap-2
                    hover:bg-[#023E8A] transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <Phone size={16} />
          <span className="font-semibold">Hubungi Kami</span>
        </a>
      </div>
    </header>
  );
}