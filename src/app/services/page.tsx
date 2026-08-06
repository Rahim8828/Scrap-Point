import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Scrap Procurement Services | Scrap Point Gujarat",
  description:
    "Explore all 18 industrial scrap procurement services by Scrap Point. Factory scrap, plant dismantling, metal scrap, electrical scrap, warehouse clearance and more across Gujarat.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Complete Industrial Scrap Procurement Services"
        description="From single material pickups to full factory dismantling — 18 specialized services covering every industrial scrap procurement requirement across Gujarat."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-14">
          {SERVICE_CATEGORIES.map((cat, ci) => (
            <div key={cat.category}>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-[10px] font-700 tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#1A1A1A] text-white">
                    {cat.category}
                  </span>
                  <div className="flex-1 h-px bg-[#E8E8E8]" />
                </div>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc) => (
                  <StaggerItem key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group flex flex-col p-6 bg-[#F8F8F8] border border-[#E8E8E8] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] rounded-2xl transition-all duration-300 h-full"
                    >
                      <h3 className="text-[#1A1A1A] group-hover:text-white font-700 text-sm mb-2 transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-[#5E5E5E] group-hover:text-white/55 text-xs leading-relaxed transition-colors flex-1">
                        {svc.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-600 text-[#AAAAAA] group-hover:text-white/50 transition-colors">
                        Learn More <ArrowRight size={11} />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
