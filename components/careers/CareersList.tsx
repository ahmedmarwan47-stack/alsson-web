"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import { CAREERS, CAREER_CATEGORIES, type CareerCategory } from "@/lib/careers";

type Filter = "All" | CareerCategory;

const FILTERS: Filter[] = ["All", ...CAREER_CATEGORIES];

export default function CareersList() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? CAREERS : CAREERS.filter((j) => j.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap shrink-0"
                style={{
                  height: "36px",
                  background: isActive ? "#FFC53A" : "#F5F5F5",
                  color: isActive ? "#0A0A0A" : "#525252",
                  boxShadow: isActive
                    ? "0px 4px 6px -2px rgba(0,0,0,0.05), 0px 12px 16px -4px rgba(0,0,0,0.08)"
                    : "none",
                }}
              >
                {f === "All" ? "All Positions" : f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Job rows */}
      {filtered.length === 0 ? (
        <p className="text-[#737373] text-[14px] py-8 text-center">
          No open positions in this category right now.
        </p>
      ) : (
        <div className="flex flex-col divide-y divide-[#E5E5E5]">
          {filtered.map((job, i) => (
            <ScrollReveal key={job.slug} delay={i * 60}>
              <Link
                href={`/careers/${job.slug}`}
                className="flex items-start justify-between gap-4 py-6 group"
              >
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <p
                    className="text-[#0A0A0A] group-active:text-[#0089B7] transition-colors"
                    style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: 700 }}
                  >
                    {job.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[#00526E] text-[13px]">{job.school}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
                    <span className="text-[#00526E] text-[13px]">{job.type}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
                    <span className="text-[#00526E] text-[13px]">{job.posted}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
                    <span className="text-[#00526E] text-[13px]">{job.closes}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 mt-1">
                  <span className="text-[#262626] text-[14px] font-medium hidden sm:inline">
                    More Details
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 13L13 3M13 3H6M13 3V10"
                      stroke="#262626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      )}
    </>
  );
}
