import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function CoverageSection() {
  return (
    <section className="section-padding bg-[#F8F8F8]">
      <div className="container-custom">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
                Pan Gujarat Coverage
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                We Operate
                <br />
                Across Gujarat
              </h2>
            </div>
            <p className="text-sm text-[#5E5E5E] max-w-sm leading-relaxed">
              Active procurement operations in 25+ cities covering all major
              GIDC industrial estates, ports, and manufacturing corridors.
            </p>
          </div>
        </ScrollReveal>

        {/* City Grid — max 5 columns so cards have breathing room */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CITIES.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={`/locations/${city.slug}`}
                className="group flex flex-col items-start p-5 bg-white border border-[#E8E8E8] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] rounded-2xl transition-all duration-300 h-full"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8F8F8] group-hover:bg-white/10 border border-[#E8E8E8] group-hover:border-white/10 flex items-center justify-center mb-3 transition-all">
                  <MapPin
                    size={14}
                    className="text-[#5E5E5E] group-hover:text-white/60 transition-colors"
                  />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A] group-hover:text-white transition-colors leading-tight mb-0.5">
                  {city.name}
                </span>
                <span className="text-[11px] text-[#AAAAAA] group-hover:text-white/40 transition-colors">
                  {city.region}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Extended coverage note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 lg:p-7 bg-white border border-[#E8E8E8] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-[#5E5E5E]" />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] text-sm mb-1">
                  Also covering all surrounding industrial areas
                </p>
                <p className="text-xs text-[#5E5E5E] leading-relaxed">
                  Including Halol, Savli, Waghodia, Palanpur, Unjha, Kalol, Vijapur and all GIDC estates
                </p>
              </div>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] border border-[#E8E8E8] hover:border-[#5E5E5E] px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap flex-shrink-0"
            >
              View All Locations <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
