import {
  ClipboardCheck, Zap, Scale, Banknote, FileText, Package, Truck, Users, MapPin, Building2,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  ClipboardCheck, Zap, Scale, Banknote, FileText, Package, Truck, Users, MapPin, Building2,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Subtle radial highlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40">
                  Our Advantage
                </span>
              </div>
              <h2
                className="text-white font-black leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Why Choose
                <br />
                Scrap Point?
              </h2>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              A decade of industrial expertise, transparent operations, and
              proven reliability make us Gujarat&apos;s most trusted procurement partner.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid — 2 cols mobile, 3 tablet, 4 desktop */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="group flex flex-col p-7 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/14 transition-all duration-300 h-full cursor-default">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white/6 flex items-center justify-center mb-5 group-hover:bg-white/12 transition-colors shrink-0">
                    {Icon && <Icon size={18} className="text-white/55" strokeWidth={1.5} />}
                  </div>
                  {/* Text */}
                  <h3 className="text-white font-bold text-sm mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
