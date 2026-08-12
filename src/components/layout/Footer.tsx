import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES, CITIES } from "@/lib/constants";

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const footerServices = SERVICES.slice(0, 9);
const footerCities = CITIES.slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2 space-y-7">
            <div>
              <div className="font-display text-2xl font-800 tracking-wide text-white uppercase">
                Scrap Point
              </div>
              <div className="text-[10px] tracking-[0.18em] text-white/40 uppercase mt-1">
                Industrial Procurement
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Gujarat&apos;s premier B2B industrial scrap procurement company. Transparent
              pricing and instant payment since {COMPANY.established}.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-copper shrink-0" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-copper shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/65">
                <MapPin size={14} className="text-copper shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {[
                { href: COMPANY.socialLinks.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: COMPANY.socialLinks.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: COMPANY.socialLinks.instagram, Icon: InstagramIcon, label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 hover:border-copper/60 flex items-center justify-center transition-colors text-white/50 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-copper">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-[13px] text-white/50 hover:text-white transition-colors leading-snug block"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[11px] text-white/35 hover:text-white/60 transition-colors"
                >
                  View all 18 services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-copper">
              Locations
            </h3>
            <ul className="space-y-3">
              {footerCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-[13px] text-white/50 hover:text-white transition-colors block"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-[11px] text-white/35 hover:text-white/60 transition-colors"
                >
                  View all 14+ cities →
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-copper">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Scrap Categories", href: "/scrap-categories" },
                { label: "Locations", href: "/locations" },
                { label: "Contact", href: "/contact" },
                { label: "Request Inspection", href: "/request-inspection" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
