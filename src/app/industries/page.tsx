import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((industry) => (
              <StaggerItem key={industry.id}>
                <div className="group bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl overflow-hidden card-hover h-full">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${industry.image}')` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h2 className="text-white font-700 text-sm">{industry.name}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[#5E5E5E] text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
