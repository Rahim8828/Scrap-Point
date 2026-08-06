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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
      style={{ background: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "#25D366" }}
        animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
      />
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
