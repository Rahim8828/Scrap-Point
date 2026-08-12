"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Full-bleed industrial image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image-motion"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,22,28,0.88) 0%, rgba(15,22,28,0.55) 48%, rgba(15,22,28,0.35) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,22,28,0.75) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full pb-16 pt-32 sm:pb-20 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          {/* Brand — hero-level signal */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white uppercase"
            style={{
              fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              lineHeight: 0.92,
            }}
          >
            Scrap Point
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-5 h-[3px] w-16 bg-[#C2612A] origin-left"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-white/95 font-display uppercase"
            style={{
              fontSize: "clamp(1.35rem, 2.8vw, 2rem)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              lineHeight: 1.25,
              maxWidth: "28ch",
            }}
          >
            Industrial scrap procurement across Gujarat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="mt-5 text-white/65 max-w-md leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
          >
            Transparent pricing, on-site inspection, and same-day payment for
            factories, plants, and warehouses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mt-9"
          >
            <Link
              href="/request-inspection"
              id="hero-cta-primary"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C2612A] text-white font-semibold text-sm rounded-lg hover:bg-[#A85222] transition-colors"
            >
              Request Free Inspection
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              id="hero-cta-call"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              {COMPANY.phoneDisplay}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
