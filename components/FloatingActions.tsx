"use client";

import { Phone } from "lucide-react";

export default function FloatingActions() {
  const phoneNumber = "628176426066";
  const waMessage = "Halo PRabu Teknik, saya ingin tanya seputar service pompa air/sumur bor.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Call */}
      <div className="group relative flex items-center justify-end">
        <span className="absolute right-16 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Telepon Kami
        </span>
        <a
          href={`tel:+${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-110 transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone size={24} className="animate-pulse" />
        </a>
      </div>

      {/* WhatsApp */}
 <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    window.gtag?.("event", "conversion", {
      send_to: "AW-18321962739/agp_CPWv9dlcEPPty6BE",
      event_callback: () => {
        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            waMessage
          )}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
    });

    // Fallback kalau callback tidak terpanggil
    setTimeout(() => {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          waMessage
        )}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 800);
  }}
  className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
  aria-label="WhatsApp Us"
>
  ...
</a>
    </div>
  );
}
