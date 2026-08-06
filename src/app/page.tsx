import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { ScrapCategories } from "@/components/sections/ScrapCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OurProcess } from "@/components/sections/OurProcess";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { IndustrialCapabilities } from "@/components/sections/IndustrialCapabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY, FAQS } from "@/lib/constants";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${COMPANY.name} — Gujarat's Premier Industrial Scrap Procurement Company`,
  description:
    "We purchase bulk industrial scrap from factories, manufacturing plants, warehouses and corporate facilities across Gujarat. Transparent pricing, quick inspections, instant payment.",
  keywords:
    "scrap buyer gujarat, industrial scrap buyer ahmedabad, factory scrap purchase gujarat, scrap point, industrial scrap company, plant dismantling gujarat",
  openGraph: {
    title: `${COMPANY.name} — Industrial Scrap Procurement Company`,
    description:
      "Gujarat's premier B2B industrial scrap buyer. 500+ factories served. 25+ cities. Instant payment. GST compliant.",
    url: COMPANY.website,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Hero />
      <TrustedBy />
      <IndustriesServed />
      <ScrapCategories />
      <WhyChooseUs />
      <HowItWorks />
      <OurProcess />
      <CoverageSection />
      <IndustrialCapabilities />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
