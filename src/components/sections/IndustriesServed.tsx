import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function IndustriesServed() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <span className="label-text block mb-4">Target Industries</span>
            <h2 className="heading-lg text-ink">Industries We Serve</h2>
            <p className="mt-4 body-lg max-w-md">
              Professional scrap procurement across Gujarat&apos;s major industrial sectors.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.id}>
              <article className="group">
                <div className="relative h-44 sm:h-48 overflow-hidden bg-surface">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${industry.image}')` }}
                  />
                  <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors duration-300" />
                </div>
                <h3 className="mt-4 font-display text-ink uppercase tracking-wide text-xl font-700 group-hover:text-copper transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {industry.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.25}>
          <div className="mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-copper pb-1 hover:text-copper transition-colors"
            >
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
