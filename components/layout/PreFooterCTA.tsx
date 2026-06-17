import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";

/** Yellow "Ready to Join El-Alsson" conversion block — placed above the Footer
 *  on every page that is a conversion target. */
export default function PreFooterCTA() {
  return (
    <section className="bg-[#FFC53A] overflow-hidden">
      <ScrollReveal>
        <div className="px-5 pt-10">
          {/* Now Enrolling pill */}
          <div className="inline-flex items-center gap-2 border border-[#0A0A0A] rounded-full px-4 py-1.5 bg-[#FFC53A] mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path
                d="M4 4.5A1.5 1.5 0 015.5 3H18a2 2 0 012 2v13.5a.5.5 0 01-.5.5H6a2 2 0 00-2 2V4.5z"
                stroke="#0A0A0A"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M4 19a2 2 0 002 2h13.5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[#0A0A0A] text-[12px] font-medium">Now Enrolling for 2026</span>
          </div>

          {/* Headline */}
          <h2
            className="text-[#0A0A0A] mb-3"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
          >
            Ready to Join El-Alsson
          </h2>
          <p className="text-[#0A0A0A]/80 text-[16px] leading-[1.55] mb-6">
            Begin your journey with us. Explore our admissions process and discover what sets us apart.
          </p>

          {/* Full-width buttons */}
          <div className="flex flex-col gap-3 mb-2">
            <Link
              href="/admissions/apply"
              className="w-full flex items-center justify-center rounded-full
                         bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#tour"
              className="w-full flex items-center justify-center rounded-full
                         bg-white text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              Start Virtual Tour
            </Link>
          </div>
        </div>

        {/* Boy cutout — below the buttons, centered */}
        <div className="flex justify-center items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/student-cta.png"
            alt=""
            aria-hidden
            className="pointer-events-none select-none block"
            style={{ height: "320px", width: "auto" }}
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
