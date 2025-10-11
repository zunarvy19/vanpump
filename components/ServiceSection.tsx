// components/ServiceSection.tsx
"use client";
import { Wrench, Droplets, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Service Pompa Air",
    desc: "Perbaikan segala jenis kerusakan pompa air (mati total, air kecil, dll) dengan jaminan hasil maksimal.",
  },
  {
    icon: <Droplets size={32} />,
    title: "Pengeboran Sumur",
    desc: "Layanan bor sumur dalam & dangkal untuk mendapatkan sumber air bersih dengan mesin modern.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Garansi & Perawatan",
    desc: "Setiap pekerjaan dilengkapi garansi resmi dan kami menyediakan opsi perawatan berkala.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceSection() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#023E8A]">Layanan Unggulan Kami</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-16">
          Solusi lengkap untuk semua kebutuhan air bersih Anda, dari perbaikan hingga instalasi baru.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl 
                         hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex justify-center items-center h-16 w-16 bg-sky-100 text-[#0077B6] rounded-full mx-auto mb-6">
                {s.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#023E8A]">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}