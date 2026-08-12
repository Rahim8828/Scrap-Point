import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CITIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Scrap Buyer Locations in Gujarat | Scrap Point",
  description:
    "Scrap Point operates across 25+ cities in Gujarat. Find your nearest scrap procurement location — Ahmedabad, Surat, Vadodara, Rajkot, Bharuch, Jamnagar and more.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Gujarat Coverage"
        title="Industrial Scrap Procurement Across 25+ Cities"
        description="Our operations span all major industrial corridors, GIDC estates, and manufacturing hubs across Gujarat."
        breadcrumbs={[{ label: "Locations" }]}
      />

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {CITIES.map((city) => (
              <StaggerItem key={city.slug}>
                <Link
                  href={`/locations/${city.slug}`}
                  className="group block border-t border-line pt-5 hover:border-copper transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-lg uppercase tracking-wide text-ink group-hover:text-copper font-700 transition-colors">
                        {city.name}
                      </h2>
                      <p className="text-[11px] text-muted mt-0.5">{city.region}</p>
                      <p className="text-sm text-muted mt-2 line-clamp-2">{city.industries}</p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-muted group-hover:text-copper transition-colors shrink-0 mt-1"
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.25}>
            <div className="mt-12 pt-8 border-t border-line">
              <p className="font-display text-xl uppercase tracking-wide text-ink font-700 mb-2">
                Operating across all of Gujarat
              </p>
              <p className="text-sm text-muted max-w-2xl">
                Including Halol, Savli, Waghodia, Vijapur, Palanpur, Patan, Surendranagar,
                Anand, Nadiad, and all surrounding industrial zones
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
