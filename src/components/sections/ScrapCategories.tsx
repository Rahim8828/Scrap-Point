"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  Factory,
  Wrench,
  Boxes,
  Flame,
  Layers,
  Building2,
  HardHat,
  Scale
} from "lucide-react";
import { SCRAP_CATEGORIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CATEGORY_ICONS: Record<string, any> = {
  ferrous: Layers,
  "non-ferrous": Flame,
  aluminium: ShieldCheck,
  copper: Zap,
  brass: Scale,
  "stainless-steel": Layers,
  ms: Wrench,
  iron: Layers,
  machinery: CogIcon,
  factory: Factory,
  "plant-dismantling": Building2,
  warehouse: Boxes,
  electrical: Cpu,
  cable: Zap,
  equipment: Wrench,
  "metal-structures": HardHat,
  boilers: Flame,
  generators: Zap,
  transformers: Cpu,
  furniture: Boxes,
};

function CogIcon(props: any) {
  return (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

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
    <section className="section-padding bg-[#F8F8F8] relative overflow-hidden">
      {/* Background Radial Accent */}
      <div
        className="absolute top-0 right-1/4 w-[700px] h-[600px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(200,200,200,0.8) 0%, rgba(248,248,248,0) 70%)",
        }}
      />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E0E0E0] bg-white shadow-xs mb-5">
                <Sparkles size={14} className="text-[#5E5E5E]" />
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#1A1A1A]">
                  Industrial Materials We Purchase
                </span>
              </div>
              <h2
                className="font-black text-[#1A1A1A] leading-none tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", letterSpacing: "-0.03em" }}
              >
                Scrap Categories &amp; Materials
              </h2>
            </div>
            <p className="text-base text-[#5E5E5E] max-w-lg leading-relaxed">
              We purchase 20+ specialized industrial scrap categories directly from manufacturing plants, EPC projects, and corporate facilities across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        {/* Spacious Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar mb-12 border-b border-[#E0E0E0]">
            {GROUPS.map((group) => {
              const count =
                group === "All Materials"
                  ? SCRAP_CATEGORIES.length
                  : SCRAP_CATEGORIES.filter((c) => c.group === group).length;

              const isActive = activeGroup === group;

              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`relative flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#1A1A1A] text-white shadow-lg"
                      : "bg-white text-[#5E5E5E] hover:text-[#1A1A1A] hover:bg-[#EFEFEF] border border-[#E0E0E0]"
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-xs font-extrabold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F0F0F0] text-[#5E5E5E]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Dynamic Category Cards Grid — Max 3 Columns for Maximum Breathing Room */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const IconComponent = CATEGORY_ICONS[cat.id] || Factory;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  key={cat.id}
                >
                  <Link
                    href={`/scrap-categories#${cat.id}`}
                    className="group flex flex-col p-6 sm:p-7 lg:p-8 bg-white hover:bg-[#1A1A1A] border border-[#E0E0E0] hover:border-[#1A1A1A] rounded-3xl transition-all duration-300 shadow-xs hover:shadow-2xl h-full relative"
                  >
                    {/* Top Icon & Category Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] group-hover:bg-white/10 border border-[#E0E0E0] group-hover:border-white/10 flex items-center justify-center transition-colors">
                        <IconComponent
                          size={22}
                          className="text-[#1A1A1A] group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg bg-[#F0F0F0] group-hover:bg-white/10 text-[#5E5E5E] group-hover:text-white/80 transition-colors">
                        {cat.group}
                      </span>
                    </div>

                    {/* Category Title — Larger font */}
                    <h3 className="text-lg lg:text-xl font-black text-[#1A1A1A] group-hover:text-white transition-colors mb-3 leading-snug">
                      {cat.name}
                    </h3>

                    {/* Description — Readable 14px body text */}
                    <p className="text-sm text-[#5E5E5E] group-hover:text-white/75 leading-relaxed transition-colors flex-1 mb-8">
                      {cat.description}
                    </p>

                    {/* Card Footer — Generous spacing */}
                    <div className="pt-5 border-t border-[#F0F0F0] group-hover:border-white/10 flex items-center justify-between text-sm font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                      <span className="flex items-center gap-2 text-xs text-[#5E5E5E] group-hover:text-white/80 font-semibold">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                        Best Market Rates
                      </span>
                      <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform text-[#1A1A1A] group-hover:text-white font-bold">
                        <span>Details</span>
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Industrial Banner Callout */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 bg-[#1A1A1A] text-white rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-start gap-5 z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0">
                <Factory size={26} />
              </div>
              <div>
                <h4 className="text-xl lg:text-2xl font-black text-white mb-2">
                  Have Custom or Mixed Industrial Scrap Lots?
                </h4>
                <p className="text-sm text-white/80 max-w-2xl leading-relaxed">
                  We specialize in turnkey plant dismantling, factory clearances, heavy machinery removal, and bulk industrial scrap procurement across Gujarat.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto shrink-0 z-10">
              <Link
                href="/request-inspection"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#111111] text-sm font-bold rounded-2xl hover:bg-[#F5F5F5] transition-all shadow-lg"
              >
                Request On-Site Inspection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
