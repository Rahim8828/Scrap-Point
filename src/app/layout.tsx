import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyCallButton } from "@/components/ui/StickyCallButton";
import { COMPANY } from "@/lib/constants";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: `${COMPANY.name} — Gujarat's Premier Industrial Scrap Procurement Company`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords:
    "scrap buyer gujarat, industrial scrap buyer, factory scrap purchase, plant dismantling gujarat, scrap point",
  openGraph: {
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="font-sans bg-light-bg text-near-black antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCallButton />
      </body>
    </html>
  );
}
