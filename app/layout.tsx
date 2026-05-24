import type { Metadata } from "next";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-cta";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Yumma Catering | Catering Rumahan, Wedding & Event",
    template: "%s | Yumma Catering"
  },
  description: site.description,
  openGraph: {
    title: "Yumma Catering",
    description: site.description,
    type: "website",
    locale: "id_ID",
    siteName: "Yumma Catering",
    images: [
      {
        url: "/images/hero/hero-catering.jpg",
        width: 1200,
        height: 630,
        alt: "Yumma Catering premium food spread"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumma Catering",
    description: site.description
  },
  keywords: ["catering rumahan", "catering wedding", "catering Indonesia", "sweet corner", "vendor event"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Caterer",
    name: "Yumma Catering",
    description: site.description,
    servesCuisine: "Indonesian",
    areaServed: "Indonesia",
    acceptsReservations: true,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    sameAs: [site.instagram, site.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yumma Catering Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daily home catering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding catering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sweet corner" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate catering" } }
      ]
    }
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileStickyCta />
          <Chatbot />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
