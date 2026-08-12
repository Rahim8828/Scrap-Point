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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            {/* Left: contact info */}
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <span className="label-text block mb-3">Reach Us</span>
                  <h2 className="heading-md text-[#1A1A1A]">
                    We&apos;re Here to Help
                  </h2>
                  <p className="text-sm text-[#5E5E5E] leading-relaxed mt-3">
                    Whether you have a single machine or an entire factory to clear,
                    our team is ready to assist with professional service.
                  </p>
                </div>

                <div className="space-y-4">
                  {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-4 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl hover:border-[#5E5E5E] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#5E5E5E]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-widest uppercase text-[#AAAAAA] mb-0.5">
                          {label}
                        </div>
                        <div className="text-sm font-semibold text-[#1A1A1A]">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] h-48">
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

            {/* Right: form */}
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-bold text-xl text-[#1A1A1A] mb-4">Send Us an Inquiry</h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
