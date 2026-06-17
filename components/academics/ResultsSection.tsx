"use client";

import { useState } from "react";
import ScrollReveal from "@/components/home/ScrollReveal";

const COMPARISON_BARS = [
  { label: "Global Avg.", value: 61.2, color: "#F5F5F5" },
  { label: "Egypt Avg.", value: 65.8, color: "#F5F5F5" },
  { label: "El Alsson Avg.", value: 72.7, color: "#FFC53A", highlight: true },
];

const YEARLY_BARS = [
  { year: "2021", value: 68 },
  { year: "2022", value: 66 },
  { year: "2023", value: 75 },
];

export default function ResultsSection() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      className="section-padding pt-12"
      style={{ background: "linear-gradient(to bottom, #E9F7FB, #FAFAFA)" }}
      id="results"
    >
      <ScrollReveal>
        <p className="text-center text-[13px] text-[#0A0A0A] mb-1">El-Alsson Results</p>
        <h2
          className="text-center mb-6"
          style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
        >
          OutPerforming{" "}
          <span style={{ color: "#0089B7", fontWeight: 700 }}>The Global Standards</span>
        </h2>
      </ScrollReveal>

      {/* Toggle pills */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-white rounded-full p-1 border border-[#E5E5E5]">
          {["Exam Scores", "AP Results"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveCard(i)}
              className={`px-4 py-1.5 text-[13px] rounded-full transition-colors ${
                activeCard === i ? "bg-[#0089B7] text-white" : "text-[#525252]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ScrollReveal delay={100}>
        {/* Fixed-height container so switching tabs never causes a height jump */}
        <div className="relative" style={{ height: "340px" }}>

          {/* Card 1: Exams Scoring 3 or Above */}
          <div
            className="absolute inset-0 bg-white rounded-[16px] border border-[#EEEEEE] p-5 flex flex-col transition-opacity duration-200"
            style={{
              opacity: activeCard === 0 ? 1 : 0,
              pointerEvents: activeCard === 0 ? "auto" : "none",
              boxShadow: "0px 8px 4px rgba(0,0,0,0.05), 0px 2px 2px rgba(0,0,0,0.06)",
            }}
          >
            <p className="text-[#0A0A0A] text-[16px] font-medium leading-[1.2] mb-1">
              Exams Scoring 3 or Above
            </p>
            <p className="text-[#0A0A0A] text-[12px] leading-[1.4] mb-4 opacity-70">
              El Alsson&apos;s passing rate compared to national and global averages.
            </p>

            <div className="flex-1 min-h-0 flex items-end justify-between gap-3">
              {COMPARISON_BARS.map((bar) => {
                const maxH = 150;
                const h = (bar.value / 80) * maxH;
                return (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 min-w-0">
                    {bar.highlight ? (
                      <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[12px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                        Highest
                      </span>
                    ) : (
                      <span className="h-[22px]" aria-hidden />
                    )}
                    <p
                      className={`text-[#0A0A0A] text-center ${bar.highlight ? "font-medium text-[20px]" : "text-[16px]"}`}
                    >
                      {bar.value}%
                    </p>
                    <div
                      className="w-full rounded-t-[8px]"
                      style={{ height: `${h}px`, backgroundColor: bar.color }}
                    />
                    <p className="text-[12px] text-[#0A0A0A] text-center leading-[1.2] whitespace-nowrap">
                      {bar.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: AP Students with 3+ Scores */}
          <div
            className="absolute inset-0 bg-white rounded-[16px] border border-[#EEEEEE] p-5 flex flex-col transition-opacity duration-200"
            style={{
              opacity: activeCard === 1 ? 1 : 0,
              pointerEvents: activeCard === 1 ? "auto" : "none",
              boxShadow: "0px 8px 4px rgba(0,0,0,0.05), 0px 2px 2px rgba(0,0,0,0.06)",
            }}
          >
            <p className="text-[#0A0A0A] text-[16px] font-medium leading-[1.2] mb-1">
              El Alsson AP Students with 3+ Scores
            </p>
            <p className="text-[#0A0A0A] text-[12px] leading-[1.4] mb-4 opacity-70">
              El Alsson&apos;s passing rate across the years.
            </p>

            <div className="flex-1 min-h-0 flex items-end justify-between gap-3">
              {YEARLY_BARS.map((bar) => {
                const maxH = 150;
                const h = (bar.value / 80) * maxH;
                return (
                  <div key={bar.year} className="flex-1 flex flex-col items-center gap-2">
                    <span className="h-[22px]" aria-hidden />
                    <p className="text-[#0A0A0A] text-[16px]">{bar.value}%</p>
                    <div
                      className="w-full rounded-t-[8px] bg-[#66B8D4]"
                      style={{ height: `${h}px` }}
                    />
                    <p className="text-[12px] text-[#0A0A0A] font-medium text-center leading-[1.2]">{bar.year}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* Boy + girl cutout — full photo, bottom flush with section end */}
      <div className="-mx-5 mt-8 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/global.jpg"
          alt="El Alsson students"
          className="relative z-10 select-none pointer-events-none"
          style={{ width: "280px", height: "auto", filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.2))" }}
        />
      </div>
    </section>
  );
}
