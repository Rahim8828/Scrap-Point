"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { COMPANY, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
        }}
      />

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px #34d399" }} />
              <span className="text-xs font-medium text-white/75 tracking-widest uppercase">
                Gujarat&apos;s Premier Industrial Scrap Buyer
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-white font-black leading-none"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            We Buy Your
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
              }}
            >
              Industrial
            </span>{" "}
            Scrap
            <br />
            <span className="text-white/90">Across Gujarat</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            className="mt-7 text-white/60 leading-relaxed max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          >
            Professional B2B scrap procurement for factories, manufacturing plants,
            warehouses and industrial facilities. Transparent pricing. Instant payment.
            GST compliant.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-3.5 mt-9 items-center"
          >
            <Link
              href="/request-inspection"
              id="hero-cta-primary"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-white text-[#111111] font-bold text-sm rounded-2xl hover:bg-[#F0F0F0] transition-all duration-200 shadow-xl"
            >
              Request Free Inspection
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              id="hero-cta-call"
              className="inline-flex items-center gap-2.5 px-7 py-4 border border-white/25 bg-white/10 backdrop-blur-md text-white font-bold text-sm rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            >
              <Phone size={15} />
              {COMPANY.phoneDisplay}
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-x-6 gap-y-2.5 mt-8"
          >
            {[
              "Free Site Inspection",
              "Instant Payment",
              "GST Billing",
              "Pan Gujarat Operations",
              "No Hidden Charges",
            ].map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-xs text-white/45">
                <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                {point}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-20 lg:mt-24"
        >
          <div
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="px-6 py-6 lg:py-7 text-center"
              >
                <div
                  className="text-white font-black mb-1"
                  style={{
                    fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-xs font-medium tracking-wide mt-1.5 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
