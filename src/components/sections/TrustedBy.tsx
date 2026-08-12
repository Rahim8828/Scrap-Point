import { TRUSTED_BY, STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustedBy() {
  const doubled = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="bg-paper border-b border-line">
      {/* Stats — moved out of hero */}
      <div className="container-custom py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 py-2">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left lg:pl-4 lg:border-l border-line first:border-l-0 first:pl-0">
              <div
                className="font-display text-ink uppercase"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line py-7 overflow-hidden">
        <div className="container-custom mb-4 text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
            Trusted across Gujarat industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-paper to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-paper to-transparent" />

          <div className="animate-marquee" aria-hidden>
            {doubled.map((name, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-6 mx-2">
                <span className="text-sm font-semibold tracking-[0.12em] uppercase text-steel/70 whitespace-nowrap">
                  {name}
                </span>
                <span className="text-copper/40 text-lg leading-none" aria-hidden>
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
