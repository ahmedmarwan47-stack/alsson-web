"use client";

import { useState } from "react";
import FileCard from "@/components/ui/FileCard";

type Curriculum = "american" | "british";

const FEE_TABLE: Record<
  Curriculum,
  Array<{ level: string; tuition: string; transport: string; total: string }>
> = {
  american: [
    { level: "PreS & PreK",   tuition: "EGP 217,000", transport: "EGP 48,000", total: "265,000" },
    { level: "Elementary",    tuition: "EGP 217,000", transport: "EGP 48,000", total: "265,000" },
    { level: "Middle School", tuition: "EGP 217,000", transport: "EGP 48,000", total: "265,000" },
    { level: "High School",   tuition: "EGP 217,000", transport: "EGP 48,000", total: "265,000" },
  ],
  british: [
    { level: "Foundation",    tuition: "EGP 235,000", transport: "EGP 48,000", total: "283,000" },
    { level: "Key Stage 1–2", tuition: "EGP 235,000", transport: "EGP 48,000", total: "283,000" },
    { level: "Key Stage 3",   tuition: "EGP 235,000", transport: "EGP 48,000", total: "283,000" },
    { level: "Key Stage 4–5", tuition: "EGP 235,000", transport: "EGP 48,000", total: "283,000" },
  ],
};

const INSTALLMENTS = [
  { label: "April (1st Installment)",    due: "6th April 2025",   deadline: "15th May 2025" },
  { label: "June (2nd Installment)",     due: "6th June 2025",    deadline: "15th July 2025" },
  { label: "October (3rd Installment)",  due: "6th October 2025", deadline: "15th November 2025" },
  { label: "December (4th Installment)", due: "6th December 2025", deadline: "15th January 2026" },
];

export default function FeesSection() {
  const [curr, setCurr] = useState<Curriculum>("american");

  return (
    <section id="fees" className="bg-[#FAFAFA] section-padding py-12">
      <p className="text-[12px] font-bold text-[#0A0A0A] mb-2 tracking-wide text-center">
        2026–2027 ACADEMIC YEAR
      </p>
      <h2
        className="mb-5 text-center"
        style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
      >
        Tuition &{" "}
        <span style={{ color: "#0089B7", fontWeight: 700 }}>Fees</span>
      </h2>

      {/* Segmented toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-white rounded-full p-1 border border-[#E5E5E5] shadow-sm">
          <button
            onClick={() => setCurr("american")}
            className={`flex items-center gap-2 px-4 py-2 text-[12px] rounded-full font-medium transition-colors ${
              curr === "american" ? "bg-[#0089B7] text-white" : "text-[#525252]"
            }`}
          >
            <span className="text-base">🇺🇸</span>
            American
          </button>
          <button
            onClick={() => setCurr("british")}
            className={`flex items-center gap-2 px-4 py-2 text-[12px] rounded-full font-medium transition-colors ${
              curr === "british" ? "bg-[#0089B7] text-white" : "text-[#525252]"
            }`}
          >
            <span className="text-base">🇬🇧</span>
            British
          </button>
        </div>
      </div>

      {/* Tuition table */}
      <div className="rounded-[16px] overflow-hidden bg-white border border-[#E5E5E5] shadow-sm mb-6">
        <div className="grid grid-cols-[1.1fr_1fr_0.9fr] bg-[#0A0A0A] text-white text-[12px] font-medium">
          <div className="px-3 py-3">Grade Level</div>
          <div className="px-3 py-3">Annual Tuition</div>
          <div className="px-3 py-3 text-right">Total</div>
        </div>
        {FEE_TABLE[curr].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.1fr_1fr_0.9fr] border-t border-[#E5E5E5] text-[12px]"
          >
            <div className="px-3 py-3 font-medium text-[#0A0A0A]">{row.level}</div>
            <div className="px-3 py-3 text-[#262626]">{row.tuition}</div>
            <div className="px-3 py-3 text-right font-medium text-[#0A0A0A]">
              {row.total}
            </div>
          </div>
        ))}
      </div>

      {/* Transport note */}
      <p className="text-[12px] text-[#737373] mb-8 text-center">
        Transportation: EGP 48,000 per year. Totals include transportation.
      </p>

      {/* Installment dates */}
      <div className="rounded-[16px] overflow-hidden bg-white border border-[#E5E5E5] shadow-sm mb-8">
        <div className="bg-[#0A0A0A] text-white px-4 py-3 text-[12px] font-medium">
          Installment Schedule
        </div>
        {INSTALLMENTS.map((row, i) => (
          <div
            key={i}
            className="px-4 py-3 border-t border-[#E5E5E5] flex items-start justify-between gap-3"
          >
            <div className="flex-1">
              <p className="text-[12px] font-medium text-[#0A0A0A] mb-1">
                {row.label}
              </p>
              <p className="text-[12px] text-[#525252]">Due: {row.due}</p>
            </div>
            <p className="text-[12px] text-[#C62828] font-medium whitespace-nowrap mt-0.5">
              Deadline {row.deadline}
            </p>
          </div>
        ))}
      </div>

      {/* Brochure downloads */}
      <div className="rounded-[16px] bg-[#F5F5F5] p-5">
        <h3 className="text-[16px] font-medium text-[#0A0A0A] mb-1">
          Our Full Tuition &amp; Fees Brochures
        </h3>
        <a
          href="#"
          className="text-[12px] text-[#0089B7] underline mb-4 inline-block"
        >
          View full fees by grade and year level
        </a>
        <div className="grid grid-cols-2 gap-2.5">
          <FileCard href="#" as="a" title="American School Fees" size="5.2 MB" />
          <FileCard href="#" as="a" title="British School Fees" size="5.2 MB" />
        </div>
      </div>
    </section>
  );
}
