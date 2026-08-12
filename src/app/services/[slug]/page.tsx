import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { SERVICES, SERVICE_DATA, COMPANY } from "@/lib/constants";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CheckCircle2 } from "lucide-react";

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

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <ScrollReveal>
              <span className="label-text block mb-3">Service Overview</span>
              <h2 className="heading-md text-ink mb-5">{data.title} in Gujarat</h2>
              <p className="text-sm text-muted leading-relaxed mb-8">{data.overview}</p>

              <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-4">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {data.keyFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="lg:sticky lg:top-24">
                <h3 className="font-display text-xl uppercase tracking-wide text-ink font-700 mb-4">
                  Request Inspection
                </h3>
                <InquiryForm variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-ink mb-8">Materials We Purchase</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
            {data.materials.map((mat) => (
              <StaggerItem key={mat}>
                <div className="border-t border-copper pt-3">
                  <span className="text-sm font-600 text-ink">{mat}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-paper">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-md text-ink mb-10">
              Why Choose Us for {data.title}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
            {data.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="border-t-2 border-copper pt-5 h-full">
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink font-700 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-md text-ink mb-8">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="divide-y divide-line border-y border-line">
            {data.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="py-6">
                  <h3 className="font-semibold text-ink text-sm mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
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
