import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries We Serve | Scrap Point — Industrial Scrap Buyer Gujarat",
  description:
    "Scrap Point serves 12+ major industries across Gujarat including textile, pharma, automobile, chemical, engineering, power, and construction for industrial scrap procurement.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries We Serve"
        title="Industrial Scrap Procurement Across All Major Sectors"
        description="Our expertise spans 12 key industry categories operating across Gujarat's industrial landscape."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {INDUSTRIES.map((industry) => (
              <StaggerItem key={industry.id}>
                <article className="group">
                  <div
                    className="aspect-[16/10] bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url('${industry.image}')` }}
                  >
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors" />
                  </div>
                  <h2 className="mt-4 font-display text-xl uppercase tracking-wide text-ink font-700 group-hover:text-copper transition-colors">
                    {industry.name}
                  </h2>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
