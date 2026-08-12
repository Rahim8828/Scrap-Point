import { CAPABILITIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IndustrialCapabilities() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <span className="label-text block mb-4">What We Handle</span>
            <h2 className="heading-lg text-ink">Industrial Capabilities</h2>
            <p className="mt-4 body-lg max-w-md">
              From single machine removal to complete plant shutdown clearances.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {CAPABILITIES.map((cap, i) => (
            <StaggerItem key={cap.title}>
              <div className="flex gap-4">
                <span className="font-display text-copper text-sm font-700 pt-1 shrink-0 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.25}>
          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-copper pb-1 hover:text-copper transition-colors"
            >
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
