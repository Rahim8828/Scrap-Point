"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-[#F8F8F8] overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-3">
                Client Feedback
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.025em" }}
              >
                What Our
                <br />
                Clients Say
              </h2>
            </div>
            <p className="text-sm text-[#5E5E5E] max-w-xs leading-relaxed">
              Trusted by plant managers, procurement heads, and industrial facility owners across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: 3 + 2 layout */}
        <div className="hidden lg:block space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <TestimonialCard t={t} />
              </ScrollReveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {TESTIMONIALS.slice(3).map((t, i) => (
              <ScrollReveal key={t.name} delay={(i + 3) * 0.1}>
                <TestimonialCard t={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E8E8E8]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.25 }}
              >
                <TestimonialCard t={TESTIMONIALS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Slider controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-xl border border-[#E8E8E8] flex items-center justify-center hover:border-[#5E5E5E] transition-colors"
            >
              <ChevronLeft size={15} className="text-[#5E5E5E]" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-5 bg-[#1A1A1A]" : "w-1.5 bg-[#CCCCCC]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-xl border border-[#E8E8E8] flex items-center justify-center hover:border-[#5E5E5E] transition-colors"
            >
              <ChevronRight size={15} className="text-[#5E5E5E]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div className="p-7 bg-white border border-[#E8E8E8] rounded-2xl h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <Quote size={24} className="text-[#EBEBEB] mb-4 shrink-0" />
      <p className="text-[#5E5E5E] text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-[#F0F0F0]">
        <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-bold text-[#1A1A1A] text-sm">{t.name}</div>
          <div className="text-[11px] text-[#AAAAAA]">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}
