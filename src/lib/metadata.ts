import type { Metadata } from "next";
import { COMPANY } from "./constants";

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const baseUrl = COMPANY.website;
const defaultOgImage = `${baseUrl}/og-image.jpg`;

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = defaultOgImage,
  noIndex = false,
}: MetadataProps): Metadata {
  const fullTitle = title.includes(COMPANY.name)
    ? title
    : `${title} | ${COMPANY.name}`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "scrap buyer gujarat",
      "industrial scrap buyer",
      "scrap point",
      "factory scrap purchase",
      "industrial scrap gujarat",
      ...keywords,
    ].join(", "),
    authors: [{ name: COMPANY.name, url: baseUrl }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@scrappoint",
    },
    verification: {
      google: "your-google-verification-token",
    },
  };
}

export const defaultMetadata: Metadata = generateMetadata({
  title: `${COMPANY.name} — Gujarat's Premier Industrial Scrap Procurement Company`,
  description: COMPANY.description,
  keywords: [
    "industrial scrap buyer ahmedabad",
    "factory scrap purchase gujarat",
    "scrap dealer gujarat",
    "bulk scrap buyer",
    "plant dismantling gujarat",
  ],
  path: "/",
});
