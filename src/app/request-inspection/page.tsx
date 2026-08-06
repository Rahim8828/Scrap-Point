import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Free Industrial Scrap Inspection | Scrap Point Gujarat",
  description:
    "Request a free industrial scrap inspection from Scrap Point. Our team visits your factory or plant within 24 hours for a professional assessment and instant quote.",
};

const BENEFITS = [
  "Free on-site inspection within 24 hours",
  "Certified material assessment by experts",
  "Transparent itemised quotation",
  "Same-day payment after pickup",
  "Own loading team and logistics",
  "Full GST compliant documentation",
];

export default function RequestInspectionPage() {
  return (
    <>
      <PageHero
        label="Free Inspection"
        title="Request a Free Industrial Scrap Inspection"
        description="Our certified team visits your facility within 24 hours, assesses all materials, and provides a transparent itemised quote — completely free of charge."
        breadcrumbs={[{ label: "Request Inspection" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            {/* Left */}
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <span className="label-text block mb-3">What to Expect</span>
                  <h2 className="heading-md text-[#1A1A1A]">
                    Professional,
                    <br />
                    Zero-Cost Inspection
                  </h2>
                  <p className="text-sm text-[#5E5E5E] leading-relaxed mt-4">
                    There is no cost, no obligation, and no pressure. Our inspection is
                    a professional assessment designed to give you the full picture of
                    your scrap material value.
                  </p>
                </div>

                <ul className="space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#5E5E5E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5E5E5E]">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl">
                  <p className="text-xs text-[#5E5E5E] mb-2">Prefer to call directly?</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 font-700 text-[#1A1A1A] text-base"
                  >
                    <Phone size={16} />
                    {COMPANY.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#AAAAAA] mt-1">Available Mon–Sat, 9 AM–7 PM</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-700 text-[#1A1A1A] mb-4 text-base">
                  Fill in Your Details
                </h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
