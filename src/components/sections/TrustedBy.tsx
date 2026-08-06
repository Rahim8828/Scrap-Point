import { TRUSTED_BY } from "@/lib/constants";

export function TrustedBy() {
  const doubled = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="bg-white border-b border-[#E8E8E8] py-8 overflow-hidden">
      <div className="container-custom mb-5 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#CCCCCC]">
          Trusted By Industries Across Gujarat
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee" aria-hidden>
          {doubled.map((name, i) => (
            <div key={i} className="flex-shrink-0 mx-4">
              <div className="px-6 py-2.5 border border-[#EEEEEE] rounded-xl bg-white hover:border-[#CCCCCC] transition-colors cursor-default">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#AAAAAA] whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
