import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import Calendar from "@/components/calendar/Calendar";

export const metadata: Metadata = {
  title: "Calendar — Term Dates 2026/27 — El Alsson International Schools",
  description:
    "Plan your year with Alsson International Schools. View all academic dates, holidays, sports events and arts performances in one place — with Add to Calendar on every entry.",
};

export default function CalendarPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-7 text-center">
        <ScrollReveal>
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
            style={{ fontWeight: 400 }}
          >
            Calendar
          </span>
          <h1
            className="text-[#0A0A0A] mb-3"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
          >
            Term Dates{" "}
            <span style={{ color: "#0089B7" }}>2026 - 2027</span>
          </h1>
          <p className="text-[#525252] text-[14px] leading-[1.55] mb-6">
            Plan your year with Alsson International Schools. View all academic
            dates, holidays, sports events and arts performances in one place —
            with &ldquo;Add to Calendar&rdquo; on every entry. Never miss a date.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/admissions/apply"
              className="w-full flex items-center justify-center rounded-full
                         bg-[#0089B7] text-white font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{
                height: "52px",
                fontSize: "14px",
                boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
              }}
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#tour"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#262626] text-[#262626] font-medium tracking-[0.05em] uppercase
                         active:bg-white/60 transition-colors"
              style={{ height: "52px", fontSize: "14px" }}
            >
              Start Virtual Tour
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Calendar ─────────────────────────────────────────────── */}
      <Calendar />

      <PreFooterCTA />
    </div>
  );
}
