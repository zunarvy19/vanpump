"use client";
import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import Image from "next/image"; 

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#00B4D8] to-[#0077B6] text-white text-center py-28 md:py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Service Pompa Air & Pengeboran Sumur Profesional
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl text-sky-100">
            Kami melayani perbaikan pompa air, instalasi baru, serta pengeboran sumur dengan teknisi ahli dan bergaransi.
          </p>
          <a
            href="https://wa.me/628176426066" 
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0077B6] font-bold text-lg
                      py-3 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <Phone size={20} />
            <span>Hubungi Sekarang</span>
            <ChevronRight size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/plumbing-hero.jpg" 
            alt="Service Pompa Air dan Pengeboran Sumur"
            width={600} 
            height={400} 
            className="rounded-xl shadow-2xl max-w-full h-auto"
            priority 
          />
        </motion.div>
      </div>
    </section>
  );
}