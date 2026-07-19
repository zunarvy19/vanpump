// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRabu Teknik | Service Pompa Air & Pengeboran Sumur Profesional",
  icons: {
    icon: "/prabulogo.png",
  },
  description:
    "Jasa service pompa air, servis jet pump, sanyo, dan pengeboran sumur profesional. Layanan cepat, bergaransi, dan teknisi panggilan berpengalaman di area Jabodetabek.",
  keywords: [
    "service pompa air",
    "pengeboran sumur",
    "servis pompa air",
    "jasa bor sumur",
    "perbaikan pompa air",
    "tukang pompa air terdekat",
    "service pompa air panggilan",
    "service sanyo",
    "service jet pump",
    "tukang air jabodetabek",
    "jasa sumur bor terdekat",
  ],
  authors: [{ name: "PRabu Teknik" }],
  creator: "PRabu Teknik",
  publisher: "PRabu Teknik",
  robots: "index, follow",
  openGraph: {
    title: "PRabu Teknik | Service Pompa Air & Pengeboran Sumur Profesional",
    description: "Jasa service pompa air dan pengeboran sumur profesional. Layanan cepat, bergaransi, dan teknisi panggilan di area Jabodetabek.",
    url: "https://prabuteknik.zvy.my.id", 
    siteName: "PRabu Teknik",
    images: [
      {
        url: "/plumbing-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Service Pompa Air PRabu Teknik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRabu Teknik | Service Pompa Air Profesional",
    description: "Jasa service pompa air dan pengeboran sumur profesional bergaransi di area Jabodetabek.",
    images: ["/plumbing-hero.jpg"],
  },
  alternates: { canonical: "https://prabuteknik.zvy.my.id" }, 
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18321962739"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18321962739');
            `,
          }}
        />
        {/* JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PRabu Teknik",
              image: "https://prabuteknik.zvy.my.id/prabulogo.png",
              description: "Jasa service pompa air, sanyo, jet pump dan pengeboran sumur profesional. Layanan cepat, bergaransi, dan teknisi panggilan di area Jabodetabek.",
              url: "https://prabuteknik.zvy.my.id",
              telephone: "+628176426066",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jabodetabek",
                addressCountry: "ID"
              },
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -6.2088,
                  longitude: 106.8456
                },
                geoRadius: "50000"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}