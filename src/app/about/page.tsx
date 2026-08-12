import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Scrap Point — Gujarat Industrial Scrap Buyer",
  description:
    "Learn about Scrap Point — Gujarat's premier industrial scrap procurement company. Our story, values, team, and commitment to transparent, professional procurement.",
};

const VALUES = [
  { title: "Transparency", description: "Every transaction documented with certified weighing, market-rate pricing, and full GST invoicing." },
  { title: "Professionalism", description: "Our team of certified procurement specialists approaches every project with industrial expertise." },
  { title: "Reliability", description: "500+ satisfied industrial clients built on consistent pricing, timely payment, and dependable service." },
  { title: "Compliance", description: "All operations GST compliant, environmentally responsible, and following all regulatory requirements." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Gujarat's Trusted Industrial Scrap Procurement Partner"
        description="Since 2015, Scrap Point has been building long-term relationships with Gujarat's industrial sector through professional, transparent, and efficient scrap procurement services."
        breadcrumbs={[{ label: "About Us" }]}
        ctaText="Request Inspection"
      />

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Our Story</span>
              <h2 className="heading-md text-ink mb-6">
                Built for the Industrial Sector
              </h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  Scrap Point was founded in Ahmedabad in 2015 with a singular mission:
                  to bring professionalism, transparency, and efficiency to industrial
                  scrap procurement in Gujarat. We saw an industry dominated by
                  informal practices and opacity — and set out to change it.
                </p>
                <p>
                  Today, we serve 500+ factories, plants, warehouses, and corporate
                  facilities across 25+ cities in Gujarat. Our clients range from
                  multinational pharmaceutical companies to local engineering SMEs —
                  each receiving the same professional, transparent service.
                </p>
                <p>
                  We are not a scrap dealer. We are an industrial procurement company
                  — and that distinction matters in every interaction we have with
                  our clients.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "500+", label: "Factories Served" },
                  { value: "25+", label: "Cities in Gujarat" },
                  { value: "1000+", label: "MT Purchased" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="border-t-2 border-copper pt-4">
                    <div className="font-display text-3xl font-800 text-ink uppercase tracking-wide">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-ink mb-10">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div>
                  <CheckCircle2 size={20} className="text-copper mb-4" />
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-paper border-y border-line">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="heading-md text-ink mb-5">
                We Are Not a Scrap Dealer.
                <br />
                We Are Your Procurement Partner.
              </h2>
              <p className="text-muted leading-relaxed text-sm max-w-2xl">
                The difference is in how we operate. Certified weighing, transparent pricing,
                proper GST documentation, own logistics fleet, professional teams, and
                payment on the same day — every time, for every client.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
