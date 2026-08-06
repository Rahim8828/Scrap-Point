import { OUR_PROCESS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function OurProcess() {
  return (
    <section className="section-padding bg-[#F8F8F8]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
                End-to-End Process
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Our
                <br />
                Procurement Process
              </h2>
            </div>
            <p className="text-sm text-[#5E5E5E] max-w-sm leading-relaxed">
              A systematic 8-step process ensures complete transparency,
              safety, and maximum value at every stage.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUR_PROCESS.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="group relative p-6 lg:p-7 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300 h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl font-black text-[#EBEBEB] group-hover:text-white/8 transition-colors leading-none select-none">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {i % 4 !== 3 && (
                    <div className="hidden lg:block w-5 h-px bg-[#E8E8E8] group-hover:bg-white/15 transition-colors" />
                  )}
                </div>
                <h3 className="text-[#1A1A1A] group-hover:text-white font-bold text-sm mb-2.5 leading-snug transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#5E5E5E] group-hover:text-white/55 text-xs leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
