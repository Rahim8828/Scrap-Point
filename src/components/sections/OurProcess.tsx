import { OUR_PROCESS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function OurProcess() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <span className="label-text block mb-4">End-to-End</span>
            <h2 className="heading-lg text-ink">Our Procurement Process</h2>
            <p className="mt-4 body-lg max-w-md">
              Eight systematic steps for transparency, safety, and maximum value.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {OUR_PROCESS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="border-t-2 border-copper pt-5 h-full">
                <span className="font-display text-4xl text-steel/25 font-800 leading-none">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-ink font-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
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
