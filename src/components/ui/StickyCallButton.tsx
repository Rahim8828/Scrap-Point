"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <a
        href={`tel:${COMPANY.phone}`}
        className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#222222] text-white font-600 text-sm"
        style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.15)" }}
      >
        <Phone size={16} fill="white" strokeWidth={0} />
        Call Now — {COMPANY.phoneDisplay}
      </a>
    </div>
  );
}
