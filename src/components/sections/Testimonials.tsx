"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-xl mb-12">
            <span className="label-text block mb-4">Client Feedback</span>
            <h2 className="heading-lg text-ink">What Our Clients Say</h2>
            <p className="mt-4 body-lg">
              Trusted by plant managers and procurement heads across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        <div className="hidden lg:grid lg:grid-cols-2 gap-x-12 gap-y-10">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.06}>
              <blockquote className="border-l-2 border-copper pl-6">
                <p className="text-ink-soft text-base leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-5">
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-muted mt-0.5">
                    {t.role} · {t.company}
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>

        <div className="lg:hidden">
          <div className="border-l-2 border-copper pl-5 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                <p className="text-ink-soft text-base leading-relaxed">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>
                <footer className="mt-5">
                  <div className="font-semibold text-ink text-sm">
                    {TESTIMONIALS[current].name}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    {TESTIMONIALS[current].role} · {TESTIMONIALS[current].company}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-line flex items-center justify-center hover:border-steel transition-colors"
            >
              <ChevronLeft size={16} className="text-steel" />
            </button>
            <span className="text-xs font-semibold text-muted tracking-wider">
              {current + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-line flex items-center justify-center hover:border-steel transition-colors"
            >
              <ChevronRight size={16} className="text-steel" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
