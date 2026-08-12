"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href={`tel:${COMPANY.phone}`}
      className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-copper text-white font-semibold text-sm leading-none"
      >
        <Phone size={15} />
        Call Now — {COMPANY.phoneDisplay}
      </a>
    </div>
  );
}
