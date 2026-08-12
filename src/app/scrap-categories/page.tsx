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

      <section className="section-padding bg-paper">
        <div className="container-custom space-y-14">
          {groups.map((group) => (
            <div key={group}>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-700 tracking-widest uppercase text-copper">
                    {group}
                  </span>
                  <div className="flex-1 h-px bg-line" />
                </div>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
                {SCRAP_CATEGORIES.filter((c) => c.group === group).map((cat) => (
                  <StaggerItem key={cat.id}>
                    <div id={cat.id} className="border-t border-line pt-4">
                      <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}

          <ScrollReveal>
            <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="font-display text-xl uppercase tracking-wide text-ink font-700">
                  Have a different type of scrap?
                </p>
                <p className="text-sm text-muted mt-1">Contact us — we likely purchase it.</p>
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
