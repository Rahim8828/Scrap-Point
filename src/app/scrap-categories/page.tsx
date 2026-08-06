import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SCRAP_CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scrap Categories | What We Purchase | Scrap Point Gujarat",
  description:
    "Scrap Point purchases 20+ categories of industrial scrap including ferrous, non-ferrous, copper, aluminium, brass, stainless steel, machinery, electrical and cable scrap.",
};

const groups = Array.from(new Set(SCRAP_CATEGORIES.map((c) => c.group)));

export default function ScrapCategoriesPage() {
  return (
    <>
      <PageHero
        label="Scrap Categories"
        title="20+ Types of Industrial Scrap We Purchase"
        description="From ferrous metals to heavy industrial equipment — we buy it all at competitive market rates with transparent pricing."
        breadcrumbs={[{ label: "Scrap Categories" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          {groups.map((group) => (
            <div key={group}>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-700 tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#1A1A1A] text-white">
                    {group}
                  </span>
                  <div className="flex-1 h-px bg-[#E8E8E8]" />
                </div>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {SCRAP_CATEGORIES.filter((c) => c.group === group).map((cat) => (
                  <StaggerItem key={cat.id}>
                    <div
                      id={cat.id}
                      className="group p-5 bg-[#F8F8F8] border border-[#E8E8E8] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] rounded-2xl transition-all duration-300 h-full"
                    >
                      <h3 className="font-700 text-[#1A1A1A] group-hover:text-white text-sm mb-2 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#5E5E5E] group-hover:text-white/55 leading-relaxed transition-colors">
                        {cat.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}

          <ScrollReveal>
            <div className="mt-6 p-6 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <p className="font-700 text-[#1A1A1A] text-sm">Have a different type of scrap?</p>
                <p className="text-xs text-[#5E5E5E] mt-1">Contact us — we likely purchase it.</p>
              </div>
              <Link href="/contact" className="btn-primary text-sm whitespace-nowrap">
                Contact Us <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
