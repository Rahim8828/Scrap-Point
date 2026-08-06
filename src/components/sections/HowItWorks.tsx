import { HOW_IT_WORKS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
              Simple Process
            </span>
            <h2
              className="font-black text-[#1A1A1A] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              How It Works
            </h2>
            <p className="text-sm text-[#5E5E5E] leading-relaxed max-w-md mx-auto">
              From your first call to final payment — a transparent 5-step
              process with zero surprises at every stage.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block">
          <StaggerContainer className="grid grid-cols-5 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="flex flex-col items-center text-center">
                  {/* Number + connector row */}
                  <div className="relative w-full flex items-center justify-center mb-6">
                    {/* Connector line (not on first or last) */}
                    {i < HOW_IT_WORKS.length - 1 && (
                      <div className="absolute left-1/2 top-5 w-full h-px bg-[#E8E8E8] z-0" />
                    )}
                    <div className="relative z-10 w-10 h-10 rounded-2xl bg-[#1A1A1A] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#5E5E5E] text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-0">
          {HOW_IT_WORKS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.08}>
              <div className="flex gap-5 pb-8 relative">
                {/* Vertical connector */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="absolute left-5 top-10 w-px h-full bg-[#E8E8E8]" />
                )}
                {/* Number bubble */}
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#1A1A1A] text-white font-black text-sm flex items-center justify-center shadow-sm z-10">
                  {step.step}
                </div>
                <div className="pt-1.5 flex-1">
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#5E5E5E] text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link href="/request-inspection" id="how-it-works-cta" className="btn-primary inline-flex">
              Start the Process <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
