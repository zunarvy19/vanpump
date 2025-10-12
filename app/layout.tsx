// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy Pompa | Service Pompa Air & Pengeboran Sumur Profesional",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Jasa service pompa air dan pengeboran sumur profesional. Layanan cepat, bergaransi, dan didukung teknisi berpengalaman di area Jabodetabek.",
  keywords: [
    "service pompa air",
    "pengeboran sumur",
    "servis pompa air",
    "jasa bor sumur",
    "perbaikan pompa air",
  ],
  openGraph: {
    title: "Dummy Pompa | Service Pompa Air & Pengeboran Sumur Profesional",
    description: "Layanan cepat, bergaransi, dan didukung teknisi berpengalaman.",
    url: "https://dummypompa.vercel.app", 
    siteName: "Dummy Pompa",
    locale: "id_ID",
    type: "website",
  },
  alternates: { canonical: "https://dummypompa.vercel.app" }, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}