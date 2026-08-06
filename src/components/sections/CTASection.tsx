import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="section-padding bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              Get Started Today
            </span>
            <h2
              className="text-white font-black leading-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}
            >
              Ready to Sell Your
              <br />
              Industrial Scrap?
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Schedule a free site inspection today. Our certified team will visit your
              facility, assess all materials, and provide a transparent instant quote.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/request-inspection"
                id="cta-book-inspection"
                className="group flex items-center gap-2.5 px-7 py-4 bg-white text-[#111111] font-bold text-sm rounded-2xl hover:bg-[#F0F0F0] transition-all duration-200"
                style={{ boxShadow: "0 8px 32px rgba(255,255,255,0.12)" }}
              >
                Book Free Inspection
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                id="cta-call-now"
                className="flex items-center gap-2.5 px-7 py-4 border border-white/15 bg-white/6 text-white font-semibold text-sm rounded-2xl hover:bg-white/10 hover:border-white/25 transition-all duration-200"
              >
                <Phone size={14} />
                {COMPANY.phoneDisplay}
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center gap-5 mt-9">
              {[
                "Free Inspection",
                "Same-Day Payment",
                "GST Compliant",
                "No Middlemen",
                "Pan Gujarat",
              ].map((point) => (
                <div key={point} className="flex items-center gap-1.5 text-xs text-white/35">
                  <CheckCircle2 size={12} className="text-emerald-500/60" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
