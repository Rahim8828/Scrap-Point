import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function CoverageSection() {
  return (
    <section className="section-padding bg-[#F8F8F8]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label-text block mb-3">Pan Gujarat Coverage</span>
              <h2 className="heading-lg text-[#1A1A1A]">
                We Operate
                <br />
                Across Gujarat
              </h2>
            </div>
            <p className="body-lg max-w-sm text-sm">
              Active procurement operations in 25+ cities covering all
              major GIDC estates, industrial zones, and ports.
            </p>
          </div>
        </ScrollReveal>

        {/* City Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {CITIES.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={`/locations/${city.slug}`}
                className="group flex flex-col items-start p-4 bg-white border border-[#E8E8E8] hover:border-[#222222] hover:bg-[#1A1A1A] rounded-2xl transition-all duration-300"
              >
                <MapPin
                  size={15}
                  className="text-[#5E5E5E] group-hover:text-white/60 mb-2.5 transition-colors"
                />
                <span className="text-sm font-700 text-[#1A1A1A] group-hover:text-white transition-colors leading-tight">
                  {city.name}
                </span>
                <span className="text-[10px] text-[#AAAAAA] group-hover:text-white/40 mt-0.5 transition-colors">
                  {city.region}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional coverage note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 bg-white border border-[#E8E8E8] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                <MapPin size={17} className="text-[#5E5E5E]" />
              </div>
              <div>
                <p className="font-700 text-[#1A1A1A] text-sm">
                  Also covering all surrounding industrial areas
                </p>
                <p className="text-xs text-[#5E5E5E] mt-0.5">
                  Including Halol, Savli, Waghodia, Palanpur, Unjha, Kalol, and all GIDC estates
                </p>
              </div>
            </div>
            <Link
              href="/locations"
              className="flex items-center gap-1.5 text-sm font-600 text-[#222222] border border-[#E8E8E8] hover:border-[#5E5E5E] px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              View Full Coverage <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
