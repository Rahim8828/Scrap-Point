import { CAPABILITIES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IndustrialCapabilities() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
                What We Handle
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Industrial
                <br />
                Capabilities
              </h2>
            </div>
            <p className="text-sm text-[#5E5E5E] max-w-sm leading-relaxed">
              From single machine removal to complete plant shutdown clearances —
              we handle industrial scrap at any scale.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((cap, i) => (
            <StaggerItem key={cap.title}>
              <div className="group flex gap-5 p-6 lg:p-7 rounded-2xl border border-[#E8E8E8] bg-[#F8F8F8] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300 h-full">
                {/* Index */}
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white group-hover:bg-white/10 border border-[#E8E8E8] group-hover:border-white/10 flex items-center justify-center text-[11px] font-black text-[#5E5E5E] group-hover:text-white/35 transition-all mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1A1A1A] group-hover:text-white font-bold text-sm mb-2.5 leading-snug transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-[#5E5E5E] group-hover:text-white/55 text-xs leading-relaxed transition-colors">
                    {cap.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:gap-3 transition-all border border-[#E8E8E8] hover:border-[#5E5E5E] px-7 py-3.5 rounded-xl bg-white"
            >
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
