// components/ImageGallery.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/plumbing-1.jpg", alt: "Teknisi memeriksa pompa air" },
  { src: "/plumbing-2.jpg", alt: "Peralatan pengeboran sumur" },
  { src: "/plumbing-3.jpg", alt: "Air bersih mengalir" },
  { src: "/plumbing-6.jpg", alt: "Tim teknisi profesional" },
  { src: "/plumbing-7.jpg", alt: "Tim teknisi profesional" },
  { src: "/plumbing-9.jpg", alt: "Tim teknisi profesional" },
  { src: "/plumbing-10.jpg", alt: "Tim teknisi profesional" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-[#E0F7FA] text-center">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#023E8A]">
          Galeri Pekerjaan Kami
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-16">
          Lihatlah dedikasi dan kualitas pekerjaan yang kami lakukan untuk
          kepuasan pelanggan.
        </p>

        {/* Slider Container */}
        <div className="max-w-2xl mx-auto">
          {/* Main Slider - Portrait Format */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg mb-6">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                className="absolute w-full h-full group"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 z-10 -translate-y-1/2 
                         bg-white/70 hover:bg-white rounded-full p-2
                         transition-colors focus:outline-none shadow-md"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 z-10 -translate-y-1/2 
                         bg-white/70 hover:bg-white rounded-full p-2
                         transition-colors focus:outline-none shadow-md"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Preview - Hidden on Mobile */}
          <div className="hidden md:flex gap-3 justify-center flex-wrap">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden 
                           transition-all duration-300 focus:outline-none
                           ${
                             index === currentIndex
                               ? "ring-4 ring-[#023E8A] scale-105"
                               : "ring-2 ring-gray-300 opacity-60 hover:opacity-100 hover:scale-105"
                           }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>

          {/* Dot Indicators for Mobile */}
          <div className="flex md:hidden gap-2 justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                           ${
                             index === currentIndex
                               ? "bg-[#023E8A] w-6"
                               : "bg-gray-400"
                           }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}