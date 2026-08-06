import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { CITIES, CITY_DATA, SCRAP_CATEGORIES } from "@/lib/constants";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = CITY_DATA[city];
  if (!data) return { title: "Location Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords.join(", "),
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = CITY_DATA[city];
  if (!data) notFound();

  const cityInfo = CITIES.find((c) => c.slug === city);
  const featuredScrap = SCRAP_CATEGORIES.slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(data.name)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Locations", url: "/locations" },
              { name: `Scrap Buyer in ${data.name}`, url: `/locations/${city}` },
            ])
          ),
        }}
      />

      <PageHero
        label={`${cityInfo?.region || "Gujarat"} Operations`}
        title={data.heroTitle}
        description={data.heroDescription}
        breadcrumbs={[
          { label: "Locations", href: "/locations" },
          { label: data.name },
        ]}
        ctaText={`Request Inspection in ${data.name}`}
      />

      {/* Overview + Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Our Presence in {data.name}</span>
              <h2 className="heading-md text-[#1A1A1A] mb-5">
                Industrial Scrap Procurement in {data.name}
              </h2>
              <p className="text-sm text-[#5E5E5E] leading-relaxed mb-8">{data.overview}</p>

              {/* Key industries */}
              <h3 className="font-700 text-[#1A1A1A] text-sm mb-4">
                Industries We Serve in {data.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.keyIndustries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1.5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-full text-xs font-500 text-[#5E5E5E]"
                  >
                    {ind}
                  </span>
                ))}
              </div>

              {/* Industrial areas */}
              <h3 className="font-700 text-[#1A1A1A] text-sm mb-4">
                Industrial Areas We Cover
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {data.industrialAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#5E5E5E]" />
                    <span className="text-xs text-[#5E5E5E]">{area}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="lg:sticky lg:top-24">
                <h3 className="font-700 text-[#1A1A1A] mb-4">
                  Request Inspection in {data.name}
                </h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-[#1A1A1A] mb-8 text-center">
              What We Purchase in {data.name}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {featuredScrap.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/scrap-categories#${cat.id}`}
                  className="group p-4 bg-white border border-[#E8E8E8] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] rounded-2xl transition-all text-center"
                >
                  <span className="text-xs font-600 text-[#1A1A1A] group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <div className="mt-5 text-center">
              <Link
                href="/scrap-categories"
                className="inline-flex items-center gap-1.5 text-sm font-600 text-[#222222] border border-[#E8E8E8] px-5 py-2.5 rounded-xl hover:border-[#5E5E5E] transition-colors"
              >
                View All Categories <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Major clients */}
      <section className="section-padding bg-[#111111] text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-white font-black text-2xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                Who We Serve in {data.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {data.majorClients.map((client) => (
                  <span
                    key={client}
                    className="px-4 py-2 border border-white/12 bg-white/4 rounded-full text-xs text-[#CCCCCC]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
