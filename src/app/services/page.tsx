import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SERVICE_CATEGORIES } from "@/lib/constants";
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

      <section className="section-padding bg-paper">
        <div className="container-custom space-y-14">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-copper whitespace-nowrap shrink-0">
                    {cat.category}
                  </span>
                  <div className="flex-1 h-px bg-line" />
                </div>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                {cat.items.map((svc) => (
                  <StaggerItem key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group block border-t border-line pt-5 hover:border-copper transition-colors h-full"
                    >
                      <h3 className="font-display text-lg uppercase tracking-wide text-ink group-hover:text-copper font-700 mb-2 transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {svc.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight size={12} />
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
