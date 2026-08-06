import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CITIES } from "@/lib/constants";
import { MapPin, ArrowRight } from "lucide-react";

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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((city) => (
              <StaggerItem key={city.slug}>
                <Link
                  href={`/locations/${city.slug}`}
                  className="group flex items-start gap-4 p-6 bg-[#F8F8F8] border border-[#E8E8E8] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] rounded-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white group-hover:bg-white/10 border border-[#E8E8E8] group-hover:border-white/10 flex items-center justify-center transition-all">
                    <MapPin size={16} className="text-[#5E5E5E] group-hover:text-white/60 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-700 text-[#1A1A1A] group-hover:text-white text-sm mb-0.5 transition-colors">
                      Scrap Buyer in {city.name}
                    </h2>
                    <p className="text-[10px] text-[#AAAAAA] group-hover:text-white/40 transition-colors mb-2">
                      {city.region}
                    </p>
                    <p className="text-xs text-[#5E5E5E] group-hover:text-white/55 transition-colors line-clamp-1">
                      {city.industries}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-[#CCCCCC] group-hover:text-white/40 transition-colors flex-shrink-0 mt-1" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 p-6 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center">
              <p className="font-700 text-[#1A1A1A] text-sm mb-1">
                Operating across all of Gujarat
              </p>
              <p className="text-xs text-[#5E5E5E]">
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
