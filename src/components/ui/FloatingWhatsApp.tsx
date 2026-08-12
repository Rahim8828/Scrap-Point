"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello! I would like to discuss industrial scrap procurement. Please provide details."
  );
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50 w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
      style={{ background: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle size={22} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
