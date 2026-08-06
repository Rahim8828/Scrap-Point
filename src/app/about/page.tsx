import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";
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

      {/* Company story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Our Story</span>
              <h2 className="heading-md text-[#1A1A1A] mb-6">
                Built for the Industrial Sector
              </h2>
              <div className="space-y-4 text-sm text-[#5E5E5E] leading-relaxed">
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Factories Served" },
                  { value: "25+", label: "Cities in Gujarat" },
                  { value: "1000+", label: "MT Purchased" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center"
                  >
                    <div className="text-3xl font-black text-[#1A1A1A]">{stat.value}</div>
                    <div className="text-xs text-[#5E5E5E] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-[#1A1A1A] mb-10 text-center">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="p-6 bg-white border border-[#E8E8E8] rounded-2xl h-full">
                  <CheckCircle2 size={20} className="text-[#5E5E5E] mb-4" />
                  <h3 className="font-700 text-[#1A1A1A] text-sm mb-2">{v.title}</h3>
                  <p className="text-xs text-[#5E5E5E] leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we're different */}
      <section className="section-padding bg-[#111111] text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white font-black text-3xl mb-6" style={{ letterSpacing: "-0.02em" }}>
                We Are Not a Scrap Dealer.
                <br />
                We Are Your Procurement Partner.
              </h2>
              <p className="text-[#999] leading-relaxed text-sm">
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
