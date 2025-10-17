// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#023E8A] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h3 className="font-bold text-xl mb-4">PRabu Teknik</h3>
          <p className="text-sky-200">
            Penyedia jasa service pompa air dan pengeboran sumur terpercaya dengan teknisi ahli dan garansi di setiap pekerjaan.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li><Link href="#layanan" className="hover:text-sky-300 transition-colors">Layanan Kami</Link></li>
            <li><Link href="#testimoni" className="hover:text-sky-300 transition-colors">Testimoni</Link></li>
            <li><Link href="#kontak" className="hover:text-sky-300 transition-colors">Hubungi Kami</Link></li>
          </ul>
        </div>
        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="font-bold text-xl mb-4">Informasi Kontak</h3>
          <p className="text-sky-200">Tangerang, Banten, Indonesia</p>
          <p className="text-sky-200">
            WhatsApp: 
            <a href="https://wa.me/628176426066" className="hover:text-sky-300 transition-colors font-semibold">+62 817-6426-066</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-sky-800 mt-12 pt-6">
        <p className="text-sm text-sky-300">
          © {new Date().getFullYear()} PRabu Teknik. All rights reserved.
        </p>
        <p className="text-sm text-sky-300">
          Managed by <a href="https://instagram.com/zunarvy" className="hover:text-sky-300 transition-colors font-semibold"><span className="text-white">Zunarvy</span></a>
        </p>
      </div>
    </footer>
  );
}