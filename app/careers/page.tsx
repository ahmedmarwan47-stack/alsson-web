import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import { CAREERS } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers — El Alsson International Schools",
  description:
    "Explore rewarding opportunities within a collaborative international school community where educators grow, inspire, and make a lasting impact.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-10 text-center">
        <ScrollReveal>
          {/* Pill */}
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
            style={{ fontWeight: 400 }}
          >
            Join Our Team
          </span>

          {/* Heading */}
          <h1
            className="text-[#0A0A0A] mb-3"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
          >
            Open Positions At El Alsson
          </h1>

          {/* Lead */}
          <p className="text-[#525252] text-[16px] leading-[1.55] mb-6 max-w-[560px] mx-auto">
            Explore rewarding opportunities within a collaborative international school community
            where educators grow, inspire, and make a lasting impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full">
              <a
                href="#positions"
                className="w-full flex items-center justify-center rounded-full
                           bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-[#006E92] transition-colors"
                style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
              >
                View Open Positions
              </a>
              <Link
                href="/admissions#tour"
                className="w-full flex items-center justify-center rounded-full
                           border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-white/60 transition-colors"
                style={{ height: "52px" }}
              >
                Start Virtual Tour
              </Link>
            </div>
        </ScrollReveal>
      </section>

      {/* ── Open Positions ────────────────────────────────────────────────── */}
      <section id="positions" className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <p className="text-[13px] font-bold text-[#0A0A0A] mb-2 tracking-wide">OPEN POSITIONS</p>
          <h2 className="mb-6" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
            Current{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Vacancies</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col divide-y divide-[#E5E5E5]">
          {CAREERS.map((job, i) => (
            <ScrollReveal key={job.slug} delay={i * 80}>
              <Link
                href={`/careers/${job.slug}`}
                className="flex items-start justify-between gap-4 py-6 group"
              >
                <div className="flex flex-col gap-2 flex-1">
                  <p
                    className="text-[#0A0A0A] group-active:text-[#0089B7] transition-colors"
                    style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: 700 }}
                  >
                    {job.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[#00526E] text-[13px]">{job.school}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
                    <span className="text-[#00526E] text-[13px]">{job.type}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
                    <span className="text-[#00526E] text-[13px]">{job.posted}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 mt-1">
                  <span className="text-[#262626] text-[14px] font-medium">More Details</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Life At El Alsson ─────────────────────────────────────────────── */}
      <section id="life" className="bg-[#FAFAFA] section-padding pb-12">
        <ScrollReveal>
          <div className="relative rounded-[20px] overflow-hidden" style={{ height: "360px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/careers-life.jpg"
              alt="Life At El Alsson"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay — bottom-left per Figma */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(60deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 65%)",
              }}
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-3">
              <div>
                <p className="text-[#FAFAFA] text-[13px] leading-[1.5] mb-1">
                  More Than a Workplace
                </p>
                <h2 className="text-[#FAFAFA]" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
                  Life At El Alsson
                </h2>
              </div>
              <p className="text-[#FAFAFA] text-[14px] leading-[1.6] max-w-[280px]">
                Discover a collaborative environment where educators are empowered to grow, innovate,
                and make a meaningful impact every day.
              </p>
              <Link
                href="/life"
                className="inline-flex items-center gap-2 border border-[#FAFAFA] rounded-full text-[#FAFAFA] text-[14px] font-medium active:bg-white/10 transition-colors"
                style={{ height: "44px", paddingLeft: "20px", paddingRight: "20px" }}
              >
                Explore Life At El Alsson
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
