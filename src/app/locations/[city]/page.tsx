import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { CITIES, CITY_DATA, SCRAP_CATEGORIES } from "@/lib/constants";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
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

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Our Presence in {data.name}</span>
              <h2 className="heading-md text-ink mb-5">
                Industrial Scrap Procurement in {data.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-8">{data.overview}</p>

              <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-4">
                Industries We Serve in {data.name}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                {data.keyIndustries.map((ind) => (
                  <span key={ind} className="text-sm text-muted border-b border-line pb-0.5">
                    {ind}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-4">
                Industrial Areas We Cover
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {data.industrialAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin size={12} className="text-copper" />
                    <span className="text-sm text-muted">{area}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="lg:sticky lg:top-24">
                <h3 className="font-display text-xl uppercase tracking-wide text-ink font-700 mb-4">
                  Request Inspection in {data.name}
                </h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-ink mb-8">
              What We Purchase in {data.name}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
            {featuredScrap.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/scrap-categories#${cat.id}`}
                  className="group block border-t border-line pt-3 hover:border-copper transition-colors"
                >
                  <span className="text-sm font-600 text-ink group-hover:text-copper transition-colors">
                    {cat.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.25}>
            <div className="mt-8">
              <Link
                href="/scrap-categories"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink border-b border-copper pb-1 hover:text-copper transition-colors"
              >
                View All Categories <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-paper border-y border-line">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="heading-md text-ink mb-4">
                Who We Serve in {data.name}
              </h2>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                {data.majorClients.map((client) => (
                  <span key={client} className="text-sm text-muted">
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
