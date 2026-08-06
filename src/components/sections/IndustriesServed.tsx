import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function IndustriesServed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
                Target Industries
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Industries We
                <br />
                Serve
              </h2>
            </div>
            <p className="text-sm text-[#5E5E5E] max-w-xs leading-relaxed">
              Professional scrap procurement across all major industrial
              sectors operating across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.id}>
              <div className="group bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-default">
                {/* Image block */}
                <div
                  className="h-44 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url('${industry.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  {/* Name on image */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 to-transparent">
                    <h3 className="text-white font-bold text-sm leading-snug">{industry.name}</h3>
                  </div>
                </div>
                {/* Description */}
                <div className="p-5">
                  <p className="text-[#5E5E5E] text-xs leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] border border-[#E8E8E8] hover:border-[#5E5E5E] px-7 py-3.5 rounded-xl bg-white transition-colors"
            >
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
