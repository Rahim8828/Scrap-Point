import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function CoverageSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="label-text block mb-4">Pan Gujarat Coverage</span>
            <h2 className="heading-lg text-ink">We Operate Across Gujarat</h2>
            <p className="mt-4 body-lg max-w-md">
              Active procurement in 25+ cities covering GIDC estates, industrial zones, and ports.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-x-4 gap-y-6">
          {CITIES.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={`/locations/${city.slug}`}
                className="group block"
              >
                <span className="block font-display text-lg uppercase tracking-wide text-ink font-700 group-hover:text-copper transition-colors">
                  {city.name}
                </span>
                <span className="block text-[11px] text-muted mt-0.5">
                  {city.region}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.25}>
          <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-muted max-w-lg">
              Also covering Halol, Savli, Waghodia, Palanpur, Unjha, Kalol, and surrounding GIDC estates.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-copper pb-1 hover:text-copper transition-colors shrink-0"
            >
              View Full Coverage <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
