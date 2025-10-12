// components/Testimonial.tsx
"use client"
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Pengerjaannya sangat cepat dan rapi. Pompa air saya yang tadinya mati total sekarang sudah normal kembali. Sangat direkomendasikan!",
        name: "Andi Wijaya",
        role: "Pemilik Rumah",
    },
    {
        quote: "Timnya profesional dan ramah. Proses pengeboran sumur berjalan lancar dan hasilnya memuaskan, airnya jernih. Terima kasih banyak!",
        name: "Siti Aminah",
        role: "Pengusaha Kost",
    },
    {
        quote: "Layanannya memuaskan, ada garansi jadi lebih tenang. Responnya juga cepat saat dihubungi untuk konsultasi. Terbaik!",
        name: "Budi Santoso",
        role: "Manajer Restoran",
    },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonial() {
    return (
        <section className="py-24 px-6 bg-slate-50 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#023E8A]">Apa Kata Pelanggan Kami</h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-16">
                    Kami bangga dapat memberikan solusi terbaik yang dipercaya oleh banyak pelanggan.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                         <motion.div
                            key={i}
                            className="bg-white p-8 rounded-xl shadow-lg text-left"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                         >
                            <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                            <div className="flex items-center">
                                <div>
                                    <p className="font-bold text-[#023E8A]">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}