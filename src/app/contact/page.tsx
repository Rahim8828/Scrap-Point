import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Scrap Point — Industrial Scrap Buyer Gujarat",
  description:
    "Contact Scrap Point for industrial scrap procurement in Gujarat. Call, WhatsApp, or email us. We respond within 2 hours. Serving 25+ cities across Gujarat.",
};

const CONTACT_ITEMS = [
  {
    Icon: Phone,
    label: "Phone / WhatsApp",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
  },
  {
    Icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    Icon: MapPin,
    label: "Address",
    value: COMPANY.address,
    href: "#",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Get In Touch With Our Procurement Team"
        description="Our team responds within 2 hours during business hours. Emergency inspections available for factory closures."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <span className="label-text block mb-3">Reach Us</span>
                  <h2 className="heading-md text-ink">We&apos;re Here to Help</h2>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    Whether you have a single machine or an entire factory to clear,
                    our team is ready to assist with professional service.
                  </p>
                </div>

                <div className="space-y-5">
                  {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 group"
                    >
                      <Icon size={16} className="text-copper mt-1 shrink-0" />
                      <div>
                        <div className="text-[10px] font-semibold tracking-widest uppercase text-muted mb-0.5">
                          {label}
                        </div>
                        <div className="text-sm font-semibold text-ink group-hover:text-copper transition-colors">
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="overflow-hidden border border-line h-48">
                  <iframe
                    src={COMPANY.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Scrap Point Location Map"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink font-700 mb-4">
                  Send Us an Inquiry
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
