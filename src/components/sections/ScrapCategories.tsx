"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SCRAP_CATEGORIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const GROUPS = [
  "All Materials",
  "Metal Scrap",
  "Industrial Scrap",
  "Electrical Scrap",
  "Heavy Industrial",
];

export function ScrapCategories() {
  const [activeGroup, setActiveGroup] = useState("All Materials");

  const filteredCategories =
    activeGroup === "All Materials"
      ? SCRAP_CATEGORIES
      : SCRAP_CATEGORIES.filter((c) => c.group === activeGroup);

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 0%, rgba(194,97,42,0.08), transparent 60%)",
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="label-text block mb-4">Materials We Purchase</span>
            <h2 className="heading-lg text-ink">Scrap Categories</h2>
            <p className="mt-4 body-lg max-w-lg">
              20+ industrial scrap categories purchased directly from plants, EPC projects, and facilities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar mb-10 border-b border-line">
            {GROUPS.map((group) => {
              const isActive = activeGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`relative px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {group}
                  {isActive && (
                    <motion.span
                      layoutId="scrap-tab"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-copper"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                key={cat.id}
              >
                <Link
                  href={`/scrap-categories#${cat.id}`}
                  className="group block border-t border-line pt-5 hover:border-copper transition-colors"
                >
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-copper">
                    {cat.group}
                  </span>
                  <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-ink group-hover:text-copper transition-colors font-700">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:gap-2.5 transition-all">
                    Details <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 pt-10 border-t border-line flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h4 className="font-display text-2xl uppercase tracking-wide text-ink font-700">
                Custom or mixed industrial lots?
              </h4>
              <p className="mt-2 text-sm text-muted max-w-xl leading-relaxed">
                We handle plant dismantling, factory clearances, heavy machinery removal, and bulk procurement.
              </p>
            </div>
            <Link
              href="/request-inspection"
              className="btn-primary shrink-0"
            >
              Request On-Site Inspection <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
