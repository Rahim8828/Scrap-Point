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
    <section className="section-padding bg-paper relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(74,92,104,0.06) 0%, transparent 45%), linear-gradient(to bottom, transparent, rgba(194,97,42,0.04))",
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <span className="label-text block mb-4">Our Advantage</span>
            <h2 className="heading-lg text-ink">Why Choose Scrap Point?</h2>
            <p className="mt-4 body-lg max-w-md">
              A decade of industrial expertise, transparent operations, and proven reliability across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="h-full">
                  <div className="mb-4 text-copper">
                    {Icon && <Icon size={22} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
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
