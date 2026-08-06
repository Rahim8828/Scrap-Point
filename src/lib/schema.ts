import { COMPANY, FAQS, SERVICES, CITIES } from "./constants";

// ─── Organization Schema ──────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.website,
    logo: `${COMPANY.website}/logo.png`,
    description: COMPANY.description,
    foundingDate: COMPANY.established,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      addressCountry: "IN",
      postalCode: COMPANY.pincode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"],
        areaServed: "IN-GJ",
      },
    ],
    sameAs: Object.values(COMPANY.socialLinks),
    areaServed: {
      "@type": "State",
      name: "Gujarat",
      containedInPlace: { "@type": "Country", name: "India" },
    },
  };
}

// ─── Local Business Schema ────────────────────────────────────────────────────

export function localBusinessSchema(cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#business`,
    name: cityName ? `${COMPANY.name} — ${cityName}` : COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: cityName || COMPANY.city,
      addressRegion: COMPANY.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0225,
      longitude: 72.5714,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "RTGS, NEFT, Bank Transfer",
    areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
  };
}

// ─── FAQ Schema ───────────────────────────────────────────────────────────────

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Service Schema ───────────────────────────────────────────────────────────

export function serviceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    url,
    areaServed: {
      "@type": "State",
      name: "Gujarat",
    },
    serviceType: "Industrial Scrap Procurement",
  };
}

// ─── Breadcrumb Schema ────────────────────────────────────────────────────────

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.website}${item.url}`,
    })),
  };
}

// ─── Website Schema ───────────────────────────────────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.website,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${COMPANY.website}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
