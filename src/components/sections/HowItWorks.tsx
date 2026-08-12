import { HOW_IT_WORKS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="label-text block mb-4">Simple Process</span>
            <h2 className="heading-lg text-ink">How It Works</h2>
            <p className="mt-4 body-lg">
              From first call to final payment — five clear steps, zero surprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="hidden lg:block">
          <StaggerContainer className="grid grid-cols-5 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="relative">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="absolute left-[2.5rem] top-4 right-0 h-px bg-line" />
                  )}
                  <div className="font-display text-copper text-3xl font-800 mb-4 relative z-10 bg-surface pr-3 inline-block">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="lg:hidden space-y-8">
          {HOW_IT_WORKS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="font-display text-copper text-2xl font-800 leading-none pt-0.5 w-10 shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <Link href="/request-inspection" id="how-it-works-cta" className="btn-primary inline-flex">
              Start the Process <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
