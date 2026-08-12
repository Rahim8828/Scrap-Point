"use client";

import { useState } from "react";
import { FAQS, COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <div className="lg:sticky lg:top-24">
              <span className="label-text block mb-4">FAQ</span>
              <h2 className="heading-lg text-ink">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm text-muted leading-relaxed max-w-[280px]">
                Everything you need to know about working with Scrap Point.
              </p>
              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-xs text-muted mb-1">Still have questions?</p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm font-semibold text-ink hover:text-copper transition-colors"
                >
                  {COMPANY.phoneDisplay}
                </a>
                <p className="text-[11px] text-muted mt-1">Mon–Sat 9 AM–7 PM</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={i} delay={i * 0.03}>
                  <div>
                    <button
                      id={`faq-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-ink leading-snug pr-2">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 text-copper">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm text-muted leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
