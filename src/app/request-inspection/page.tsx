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

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <span className="label-text block mb-3">What to Expect</span>
                  <h2 className="heading-md text-ink">
                    Professional,
                    <br />
                    Zero-Cost Inspection
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mt-4">
                    There is no cost, no obligation, and no pressure. Our inspection is
                    a professional assessment designed to give you the full picture of
                    your scrap material value.
                  </p>
                </div>

                <ul className="space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-copper flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-line">
                  <p className="text-xs text-muted mb-2">Prefer to call directly?</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 font-700 text-ink text-base hover:text-copper transition-colors"
                  >
                    <Phone size={16} className="text-copper" />
                    {COMPANY.phoneDisplay}
                  </a>
                  <p className="text-xs text-muted mt-1">Available Mon–Sat, 9 AM–7 PM</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide text-ink font-700 mb-4">
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
