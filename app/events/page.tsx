import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import EventsList from "@/components/events/EventsList";
import PreFooterCTA from "@/components/layout/PreFooterCTA";

export const metadata: Metadata = {
  title: "Featured Events — El Alsson International Schools",
  description:
    "From arts performances and sports tournaments to cultural celebrations and academic milestones — don't miss a moment of life at El Alsson.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero text ─────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-0 text-center">
        <ScrollReveal>
          <span
            className="-rotate-2 inline-block bg-[#FFE8B0] text-[#1A1406] px-3 py-0.5 rounded-md mb-2 text-[13px]"
            style={{ fontWeight: 400 }}
          >
            Events
          </span>
          <h1
            className="text-[#0A0A0A] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            El Alsson{" "}
            <span style={{ color: "#0089B7" }}>Featured Events</span>
          </h1>
          <p className="text-[#525252] text-[14px] leading-[1.6] mb-7">
            From arts performances and sports tournaments to cultural
            celebrations and academic milestones — don&apos;t miss a moment of
            life at El Alsson.
          </p>
          <div className="flex flex-col gap-3 mb-8">
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

      {/* ── Events list (Previous / Upcoming tabs + cards) ─────── */}
      <EventsList />

      <PreFooterCTA />
    </div>
  );
}
