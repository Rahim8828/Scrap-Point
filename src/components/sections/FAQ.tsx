"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left sticky header */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#AAAAAA] mb-4">
                FAQ
              </span>
              <h2
                className="font-black text-[#1A1A1A] leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="text-sm text-[#5E5E5E] leading-relaxed mb-6" style={{ maxWidth: 260 }}>
                Everything you need to know about working with Scrap Point for your industrial scrap needs.
              </p>
              <div className="p-4 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl">
                <p className="text-xs text-[#AAAAAA] mb-2">Still have questions?</p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm font-bold text-[#1A1A1A] hover:text-[#5E5E5E] transition-colors"
                >
                  {COMPANY.phoneDisplay}
                </a>
                <p className="text-[11px] text-[#AAAAAA] mt-1">Mon–Sat 9 AM–7 PM</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right accordion */}
          <div className="space-y-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={i} delay={i * 0.035}>
                  <div
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#1A1A1A] bg-[#1A1A1A] shadow-lg"
                        : "border-[#E8E8E8] bg-white hover:border-[#CCCCCC]"
                    }`}
                  >
                    <button
                      id={`faq-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm font-semibold leading-snug transition-colors ${
                          isOpen ? "text-white" : "text-[#1A1A1A]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          isOpen ? "bg-white/12" : "bg-[#F8F8F8]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={13} className="text-white" />
                        ) : (
                          <Plus size={13} className="text-[#5E5E5E]" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-sm text-white/65 leading-relaxed">
                            {faq.answer}
                          </div>
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
