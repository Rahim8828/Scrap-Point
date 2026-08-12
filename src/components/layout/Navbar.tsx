"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, SERVICE_CATEGORIES, CITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true, type: "services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations", dropdown: true, type: "locations" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
      <div className="hidden xl:block bg-ink text-white/55 text-[11px] border-b border-white/10">
        <div className="container-custom flex items-center justify-between py-2 gap-4">
          <span className="shrink-0">
            Gujarat&apos;s Premier Industrial Scrap Procurement — Est. {COMPANY.established}
          </span>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
              {COMPANY.phoneDisplay}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-paper/95 backdrop-blur-xl shadow-nav border-b border-line"
            : "bg-paper border-b border-line"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" className="flex flex-col leading-none group shrink-0">
              <span className="font-display text-[1.35rem] font-800 tracking-wide text-ink uppercase">
                Scrap Point
              </span>
              <span className="text-[9px] font-semibold tracking-[0.18em] text-muted uppercase mt-0.5">
                Industrial Procurement
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.mega || link.dropdown ? onEnter(link.type!) : undefined
                  }
                  onMouseLeave={onLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors duration-150",
                      pathname === link.href ||
                        (pathname.startsWith(link.href + "/") && link.href !== "/")
                        ? "text-ink bg-surface"
                        : "text-muted hover:text-ink hover:bg-surface/70"
                    )}
                  >
                    {link.label}
                    {(link.mega || link.dropdown) && (
                      <ChevronDown
                        size={12}
                        className={cn(
                          "mt-px transition-transform duration-200",
                          activeMenu === link.type ? "rotate-180 text-copper" : "text-muted"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.mega && activeMenu === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[820px]"
                        onMouseEnter={() => onEnter("services")}
                        onMouseLeave={onLeave}
                      >
                        <div className="bg-paper border border-line p-6 grid grid-cols-3 gap-6 shadow-premium">
                          {SERVICE_CATEGORIES.map((cat) => (
                            <div key={cat.category}>
                              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-copper mb-3 pb-2 border-b border-line">
                                {cat.category}
                              </p>
                              <ul className="space-y-1">
                                {cat.items.map((svc) => (
                                  <li key={svc.slug}>
                                    <Link
                                      href={`/services/${svc.slug}`}
                                      className="block text-[12.5px] text-muted hover:text-ink py-0.5 transition-colors"
                                    >
                                      {svc.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="col-span-3 pt-4 border-t border-line flex items-center justify-between">
                            <span className="text-[11px] text-muted">
                              18 specialized services across Gujarat
                            </span>
                            <Link
                              href="/services"
                              className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink hover:text-copper transition-colors"
                            >
                              View All Services <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {link.dropdown && activeMenu === "locations" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[460px]"
                        onMouseEnter={() => onEnter("locations")}
                        onMouseLeave={onLeave}
                      >
                        <div className="bg-paper border border-line p-5 grid grid-cols-3 gap-x-6 gap-y-1 shadow-premium">
                          <p className="col-span-3 text-[10px] font-bold tracking-[0.14em] uppercase text-copper mb-3 pb-2 border-b border-line">
                            Gujarat Coverage
                          </p>
                          {CITIES.map((city) => (
                            <Link
                              key={city.slug}
                              href={`/locations/${city.slug}`}
                              className="text-[12.5px] text-muted hover:text-ink py-1 transition-colors"
                            >
                              {city.name}
                            </Link>
                          ))}
                          <div className="col-span-3 pt-3 border-t border-line mt-1">
                            <Link
                              href="/locations"
                              className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink hover:text-copper transition-colors"
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

            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink transition-colors"
              >
                <Phone size={13} className="text-copper" />
                {COMPANY.phoneDisplay}
              </a>
              <Link
                href="/request-inspection"
                className="px-5 py-2.5 bg-copper text-white text-[13px] font-semibold rounded-lg hover:bg-copper-hover transition-colors shrink-0"
              >
                Request Inspection
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-ink" />
              ) : (
                <Menu size={20} className="text-ink" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-ink/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-paper z-50 lg:hidden overflow-y-auto flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-line shrink-0">
                <div>
                  <div className="font-display text-lg font-800 text-ink uppercase tracking-wide">
                    Scrap Point
                  </div>
                  <div className="text-[10px] text-muted tracking-widest uppercase mt-px">
                    Industrial Procurement
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-surface"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex-1 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                          pathname === link.href
                            ? "bg-surface text-ink"
                            : "text-ink hover:bg-surface"
                        )}
                      >
                        {link.label}
                      </Link>
                      {(link.mega || link.dropdown) && (
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === link.type ? null : link.type!
                            )
                          }
                          className="p-3 hover:bg-surface rounded-md"
                        >
                          <ChevronDown
                            size={14}
                            className={cn(
                              "text-muted transition-transform",
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
                                <p className="text-[10px] font-bold tracking-widest uppercase text-copper px-3 py-1.5">
                                  {cat.category}
                                </p>
                                {cat.items.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    className="block px-3 py-2 text-xs text-muted hover:text-ink hover:bg-surface rounded-md"
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
                                className="px-3 py-2 text-xs text-muted hover:text-ink hover:bg-surface rounded-md"
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

              <div className="p-4 space-y-3 border-t border-line shrink-0">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-surface border border-line rounded-lg text-sm font-semibold text-ink"
                >
                  <Phone size={14} />
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  href="/request-inspection"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-copper text-white text-sm font-semibold rounded-lg"
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
