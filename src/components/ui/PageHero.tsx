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
        "relative overflow-hidden bg-ink text-white",
        compact ? "py-14 lg:py-18" : "py-18 lg:py-24",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(194,97,42,0.25), transparent 55%), linear-gradient(135deg, #1B2429 0%, #243039 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        {breadcrumbs && (
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="text-xs text-white/45 hover:text-white/70 transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={10} className="text-white/30" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-xs text-white/45 hover:text-white/70 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-xs text-white/70">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {label && (
          <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-copper mb-4">
            {label}
          </span>
        )}

        <h1 className="font-display text-white uppercase tracking-wide font-800 leading-tight max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-white/55 leading-relaxed max-w-xl" style={{ fontSize: "1.05rem" }}>
            {description}
          </p>
        )}

        {ctaText && (
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-copper text-white font-semibold text-sm rounded-lg hover:bg-copper-hover transition-colors"
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
