import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  compact?: boolean;
}

export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  ctaText,
  ctaHref = "/request-inspection",
  className,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-[#111111] text-white relative overflow-hidden",
        compact ? "py-14 lg:py-20" : "py-20 lg:py-28",
        className
      )}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #fff 0px,
            #fff 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0a0a0a]" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="text-xs text-[#777] hover:text-[#aaa] transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={10} className="text-[#555]" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-xs text-[#777] hover:text-[#aaa] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-xs text-[#aaa]">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Label */}
        {label && (
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#555]" />
            <span className="label-text text-[#777]">{label}</span>
          </div>
        )}

        {/* Title */}
        <h1
          className="text-white font-black leading-tight"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            letterSpacing: "-0.02em",
            maxWidth: "720px",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="mt-4 text-[#999] leading-relaxed"
            style={{ fontSize: "1.0625rem", maxWidth: "580px" }}
          >
            {description}
          </p>
        )}

        {/* CTA */}
        {ctaText && (
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111111] font-600 text-sm rounded-xl hover:bg-[#F0F0F0] transition-colors"
            >
              {ctaText}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
