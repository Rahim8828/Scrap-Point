import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { SERVICES, SERVICE_DATA } from "@/lib/constants";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) return { title: "Service Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords.join(", "),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) notFound();

  const service = SERVICES.find((s) => s.slug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(data.title, data.metaDescription, `${COMPANY.website}/services/${slug}`)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Services", url: "/services" },
              { name: data.title, url: `/services/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(data.faqs)),
        }}
      />

      <PageHero
        label={service?.category}
        title={data.heroTitle}
        description={data.heroDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
        ctaText="Request Free Inspection"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Service Overview</span>
              <h2 className="heading-md text-[#1A1A1A] mb-5">{data.title} in Gujarat</h2>
              <p className="text-sm text-[#5E5E5E] leading-relaxed mb-8">{data.overview}</p>

              {/* Key features */}
              <h3 className="font-700 text-[#1A1A1A] text-sm mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {data.keyFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-[#5E5E5E] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#5E5E5E]">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Inquiry form */}
            <ScrollReveal delay={0.15}>
              <div className="lg:sticky lg:top-24">
                <h3 className="font-700 text-[#1A1A1A] mb-4">Request Inspection</h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Materials we buy */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-[#1A1A1A] mb-8 text-center">
              Materials We Purchase
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {data.materials.map((mat) => (
              <StaggerItem key={mat}>
                <div className="p-4 bg-white border border-[#E8E8E8] rounded-2xl text-center hover:border-[#1A1A1A] transition-colors">
                  <span className="text-xs font-600 text-[#1A1A1A]">{mat}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#111111] text-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-white font-black text-2xl mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
              Why Choose Us for {data.title}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-5">
            {data.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="p-6 border border-white/8 bg-white/4 rounded-2xl h-full">
                  <h3 className="text-white font-700 text-sm mb-2">{b.title}</h3>
                  <p className="text-[#888] text-xs leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-md text-[#1A1A1A] mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl">
                  <h3 className="font-700 text-[#1A1A1A] text-sm mb-2">{faq.question}</h3>
                  <p className="text-xs text-[#5E5E5E] leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
