// components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nama = (form[0] as HTMLInputElement).value;
    const telp = (form[1] as HTMLInputElement).value;
    const pesan = (form[2] as HTMLTextAreaElement).value;

    const nomorTujuan = "6289676570369";
    const text = `Nama: ${nama}%0ANo HP: ${telp}%0APesan atau Kendala: ${pesan}`;
    window.open(`https://wa.me/${nomorTujuan}?text=${text}`, "_blank");

    setStatus("Pesan Anda diarahkan ke WhatsApp! ✅");
    form.reset();
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#023E8A]">Butuh Bantuan Cepat?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Isi form di bawah ini atau hubungi kami langsung via WhatsApp untuk respon lebih cepat.
        </p>
        <div className="max-w-lg mx-auto bg-slate-50 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    placeholder="Nama Anda"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition text-gray-700"
                />
                <input
                    type="tel"
                    placeholder="Nomor Telepon / WhatsApp"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition text-gray-700"
                />
                <textarea
                    placeholder="Jelaskan keluhan atau kebutuhan Anda..."
                    rows={5}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition text-gray-700"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-[#0077B6] text-white px-6 py-3 rounded-lg hover:bg-[#023E8A] 
                              transition font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                    Kirim Pesan
                </button>
                {status && <p className="mt-4 text-green-700 font-semibold">{status}</p>}
            </form>
        </div>
      </div>
    </section>
  );
}