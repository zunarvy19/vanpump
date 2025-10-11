// app/page.tsx
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import ImageGallery from "@/components/ImageGallery"; // Import komponen baru
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="layanan">
        <ServiceSection />
      </div>
      <div id="galeri"> {/* Menambahkan ID untuk navigasi jika diperlukan */}
        <ImageGallery />
      </div>
      <div id="testimoni">
        <Testimonial />
      </div>
      <div id="kontak">
        <ContactForm />
      </div>
    </>
  );
}