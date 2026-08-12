import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(27,36,41,0.92) 0%, rgba(27,36,41,0.78) 55%, rgba(27,36,41,0.65) 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="font-display text-white uppercase tracking-wide text-5xl sm:text-6xl lg:text-7xl font-800 leading-none">
              Scrap Point
            </p>
            <div className="mt-4 h-[3px] w-14 bg-copper" />
            <h2 className="mt-6 font-display text-white/90 uppercase tracking-wide text-2xl sm:text-3xl font-600 max-w-lg leading-snug">
              Ready to sell your industrial scrap?
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed max-w-md">
              Book a free site inspection. Transparent quote, same-day payment, GST compliant.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-9">
              <Link
                href="/request-inspection"
                id="cta-book-inspection"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-copper text-white font-semibold text-sm rounded-lg hover:bg-copper-hover transition-colors"
              >
                Book Free Inspection
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                id="cta-call-now"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone size={14} />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
