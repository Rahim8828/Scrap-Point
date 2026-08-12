"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex items-end min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-4.5rem)] xl:min-h-[calc(100svh-6.75rem)]">
      {/* Full-bleed industrial image */}
      <div className="absolute inset-0 overflow-hidden">
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
              "linear-gradient(105deg, rgba(15,22,28,0.90) 0%, rgba(15,22,28,0.62) 45%, rgba(15,22,28,0.40) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,22,28,0.82) 0%, rgba(15,22,28,0.35) 42%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full pt-24 pb-28 md:pb-16 lg:pb-20 lg:pt-28">
        <div className="max-w-3xl">
          {/* Brand — hero-level signal */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white uppercase"
            style={{
              fontSize: "clamp(2.35rem, 8vw, 5.25rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Scrap Point
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-3 sm:mt-4 h-[3px] w-14 sm:w-16 bg-[#C2612A] origin-left"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-5 text-white/95 font-display uppercase"
            style={{
              fontSize: "clamp(1.05rem, 2.2vw, 1.65rem)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              lineHeight: 1.3,
              maxWidth: "28ch",
            }}
          >
            Industrial scrap procurement across Gujarat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="mt-3 sm:mt-4 text-white/70 max-w-md leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
          >
            Transparent pricing, on-site inspection, and same-day payment for
            factories, plants, and warehouses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mt-6 sm:mt-7"
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
