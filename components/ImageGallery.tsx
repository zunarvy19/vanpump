// components/ImageGallery.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/plumbing-1.jpg", alt: "Teknisi memeriksa pompa air" },
  { src: "/plumbing-2.jpg", alt: "Peralatan pengeboran sumur" },
  { src: "/plumbing-3.jpg", alt: "Air bersih mengalir" },
  { src: "/plumbing-4.jpg", alt: "Tim teknisi profesional" },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ImageGallery() {
  return (
    <section className="py-24 px-6 bg-[#E0F7FA] text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#023E8A]">Galeri Pekerjaan Kami</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-16">
          Lihatlah dedikasi dan kualitas pekerjaan yang kami lakukan untuk kepuasan pelanggan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative w-full h-60 overflow-hidden rounded-xl shadow-lg group"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill // Mengisi seluruh area parent
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: "cover" }} // Menjaga rasio aspek dan mengisi container
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold px-4">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}