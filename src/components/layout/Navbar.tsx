"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, SERVICE_CATEGORIES, CITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services",  mega: true, type: "services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations", dropdown: true, type: "locations" },
  { label: "Contact",   href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname    = usePathname();
  const timeoutRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const onEnter = (type: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(type);
  };
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden xl:block bg-[#111111] text-white/50 text-[11px] border-b border-white/8">
        <div className="container-custom flex items-center justify-between py-2 gap-4">
          <span className="shrink-0">Gujarat&apos;s Premier Industrial Scrap Procurement Company — Established {COMPANY.established}</span>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">{COMPANY.phoneDisplay}</a>
            <span className="w-px h-3 bg-white/20" />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
            <span className="w-px h-3 bg-white/20" />
            <span>GST: {COMPANY.gstin}</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-sm border-b border-[#E8E8E8]"
            : "bg-white border-b border-[#E8E8E8]"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group shrink-0">
              <span className="text-[1.15rem] font-black tracking-tight text-[#1A1A1A]">
                SCRAP POINT
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#AAAAAA] uppercase mt-px">
                Industrial Procurement
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => (link.mega || link.dropdown) ? onEnter(link.type!) : undefined}
                  onMouseLeave={onLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-150",
                      pathname === link.href || pathname.startsWith(link.href + "/") && link.href !== "/"
                        ? "text-[#1A1A1A] bg-[#F0F0F0]"
                        : "text-[#5E5E5E] hover:text-[#1A1A1A] hover:bg-[#F8F8F8]"
                    )}
                  >
                    {link.label}
                    {(link.mega || link.dropdown) && (
                      <ChevronDown
                        size={12}
                        className={cn(
                          "mt-px transition-transform duration-200 text-[#AAAAAA]",
                          activeMenu === link.type ? "rotate-180 text-[#5E5E5E]" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Services Mega Menu */}
                  <AnimatePresence>
                    {link.mega && activeMenu === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[820px]"
                        onMouseEnter={() => onEnter("services")}
                        onMouseLeave={onLeave}
                      >
                        <div
                          className="bg-white rounded-2xl border border-[#E8E8E8] p-6 grid grid-cols-3 gap-6"
                          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.09), 0 1px 0 rgba(0,0,0,0.03)" }}
                        >
                          {SERVICE_CATEGORIES.map((cat) => (
                            <div key={cat.category}>
                              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#AAAAAA] mb-3 pb-2 border-b border-[#F0F0F0]">
                                {cat.category}
                              </p>
                              <ul className="space-y-1">
                                {cat.items.map((svc) => (
                                  <li key={svc.slug}>
                                    <Link
                                      href={`/services/${svc.slug}`}
                                      className="block text-[12.5px] text-[#5E5E5E] hover:text-[#1A1A1A] py-0.5 hover:translate-x-0.5 transition-all duration-100"
                                    >
                                      {svc.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="col-span-3 pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                            <span className="text-[11px] text-[#AAAAAA]">
                              18 specialized services across Gujarat
                            </span>
                            <Link
                              href="/services"
                              className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1A1A1A] hover:gap-2.5 transition-all"
                            >
                              View All Services <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Locations Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeMenu === "locations" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[460px]"
                        onMouseEnter={() => onEnter("locations")}
                        onMouseLeave={onLeave}
                      >
                        <div
                          className="bg-white rounded-2xl border border-[#E8E8E8] p-5 grid grid-cols-3 gap-x-6 gap-y-1"
                          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.09)" }}
                        >
                          <p className="col-span-3 text-[10px] font-bold tracking-[0.15em] uppercase text-[#AAAAAA] mb-3 pb-2 border-b border-[#F0F0F0]">
                            Gujarat Coverage
                          </p>
                          {CITIES.map((city) => (
                            <Link
                              key={city.slug}
                              href={`/locations/${city.slug}`}
                              className="text-[12.5px] text-[#5E5E5E] hover:text-[#1A1A1A] py-1 transition-colors"
                            >
                              {city.name}
                            </Link>
                          ))}
                          <div className="col-span-3 pt-3 border-t border-[#F0F0F0] mt-1">
                            <Link
                              href="/locations"
                              className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1A1A1A] hover:gap-2.5 transition-all"
                            >
                              View All Locations <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#5E5E5E] hover:text-[#1A1A1A] transition-colors"
              >
                <Phone size={13} className="text-[#AAAAAA]" />
                {COMPANY.phoneDisplay}
              </a>
              <Link
                href="/request-inspection"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-[#1A1A1A] text-white text-[13px] font-bold rounded-xl hover:bg-[#111111] transition-all duration-200 shadow-sm shrink-0"
              >
                Request Inspection
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#F0F0F0] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-[#1A1A1A]" />
              ) : (
                <Menu size={20} className="text-[#1A1A1A]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden overflow-y-auto flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E8E8] shrink-0">
                <div>
                  <div className="text-base font-black text-[#1A1A1A]">SCRAP POINT</div>
                  <div className="text-[10px] text-[#AAAAAA] tracking-widest uppercase mt-px">Industrial Procurement</div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-[#F0F0F0]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                          pathname === link.href ? "bg-[#F0F0F0] text-[#1A1A1A]" : "text-[#1A1A1A] hover:bg-[#F8F8F8]"
                        )}
                      >
                        {link.label}
                      </Link>
                      {(link.mega || link.dropdown) && (
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === link.type ? null : link.type!)
                          }
                          className="p-3 hover:bg-[#F8F8F8] rounded-xl"
                        >
                          <ChevronDown
                            size={14}
                            className={cn(
                              "text-[#AAAAAA] transition-transform",
                              mobileExpanded === link.type ? "rotate-180" : ""
                            )}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.mega && mobileExpanded === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4"
                        >
                          <div className="py-2 space-y-0.5">
                            {SERVICE_CATEGORIES.map((cat) => (
                              <div key={cat.category} className="mb-3">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#AAAAAA] px-3 py-1.5">
                                  {cat.category}
                                </p>
                                {cat.items.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    className="block px-3 py-2 text-xs text-[#5E5E5E] hover:text-[#1A1A1A] hover:bg-[#F8F8F8] rounded-lg"
                                  >
                                    {svc.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      {link.dropdown && mobileExpanded === "locations" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4"
                        >
                          <div className="py-2 grid grid-cols-2 gap-0.5">
                            {CITIES.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/locations/${city.slug}`}
                                className="px-3 py-2 text-xs text-[#5E5E5E] hover:text-[#1A1A1A] hover:bg-[#F8F8F8] rounded-lg"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="p-4 space-y-3 border-t border-[#E8E8E8] shrink-0">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#1A1A1A]"
                >
                  <Phone size={14} />
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  href="/request-inspection"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-xl"
                >
                  Request Inspection
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
