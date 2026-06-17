"use client";

import { useState } from "react";

type System = "american" | "british" | "egypt";

const ROWS: Array<{
  age: string;
  band: "Early Childhood" | "Elementary" | "Middle School" | "High School";
  american: string;
  british: string;
  egypt: string;
  bandKey: "ec" | "el" | "ms" | "hs";
  ukBand: string;
  ukKey: "ey" | "ks1" | "ks2" | "ks3" | "ks45";
}> = [
  { age: "3+",  band: "Early Childhood", bandKey: "ec", american: "Pre S & Pre School",   british: "FS1 Foundation Stage (IEYC)", egypt: "Nursery",     ukBand: "Early years", ukKey: "ey" },
  { age: "4+",  band: "Early Childhood", bandKey: "ec", american: "Pre K Pre-Kindergarten", british: "FS2 Foundation Stage (IEYC)", egypt: "KG1",        ukBand: "Early years", ukKey: "ey" },
  { age: "5+",  band: "Early Childhood", bandKey: "ec", american: "Kindergarten",         british: "Year 1 Key Stage 1 (IPC)",   egypt: "KG2",         ukBand: "Key Stage 1", ukKey: "ks1" },
  { age: "6+",  band: "Elementary",      bandKey: "el", american: "Grade 1",              british: "Year 2 Key Stage 1 (IPC)",   egypt: "Primary 1",   ukBand: "Key Stage 1", ukKey: "ks1" },
  { age: "7+",  band: "Elementary",      bandKey: "el", american: "Grade 2",              british: "Year 3 (IPC)",                egypt: "Primary 2",   ukBand: "Key Stage 2", ukKey: "ks2" },
  { age: "8+",  band: "Elementary",      bandKey: "el", american: "Grade 3",              british: "Year 4 (IPC)",                egypt: "Primary 3",   ukBand: "Key Stage 2", ukKey: "ks2" },
  { age: "9+",  band: "Elementary",      bandKey: "el", american: "Grade 4",              british: "Year 5 (IPC)",                egypt: "Primary 4",   ukBand: "Key Stage 2", ukKey: "ks2" },
  { age: "10+", band: "Elementary",      bandKey: "el", american: "Grade 5",              british: "Year 6 (IPC)",                egypt: "Primary 5",   ukBand: "Key Stage 2", ukKey: "ks2" },
  { age: "11+", band: "Middle School",   bandKey: "ms", american: "Grade 6",              british: "Year 7",                       egypt: "Primary 6",   ukBand: "Key Stage 3", ukKey: "ks3" },
  { age: "12+", band: "Middle School",   bandKey: "ms", american: "Grade 7",              british: "Year 8",                       egypt: "Prep 1",      ukBand: "Key Stage 3", ukKey: "ks3" },
  { age: "13+", band: "Middle School",   bandKey: "ms", american: "Grade 8",              british: "Year 9",                       egypt: "Prep 2",      ukBand: "Key Stage 3", ukKey: "ks3" },
  { age: "14+", band: "High School",     bandKey: "hs", american: "Grade 9",              british: "Year 10 Key Stage 4, IGCSE / GCSE", egypt: "Prep 3",      ukBand: "Key Stage 4 & 5", ukKey: "ks45" },
  { age: "15+", band: "High School",     bandKey: "hs", american: "Grade 10",             british: "Year 11 Key Stage 4, IGCSE / GCSE", egypt: "Secondary 1", ukBand: "Key Stage 4 & 5", ukKey: "ks45" },
  { age: "16+", band: "High School",     bandKey: "hs", american: "Grade 11 — IBDP DP1",  british: "Year 12 Key Stage 5, AS Level",     egypt: "Secondary 2", ukBand: "Key Stage 4 & 5", ukKey: "ks45" },
  { age: "17+", band: "High School",     bandKey: "hs", american: "Grade 12 — IBDP DP2",  british: "Year 13 Key Stage 5, A2 (full A Level)", egypt: "Secondary 3", ukBand: "Key Stage 4 & 5", ukKey: "ks45" },
];

const BAND_COLOR: Record<string, string> = {
  ec:   "#E5F3F7", // light blue
  el:   "#FFF9EB", // light yellow
  ms:   "#F0F7FA",
  hs:   "#FFF3D8",
};

const TABS: { key: System; label: string }[] = [
  { key: "american", label: "American" },
  { key: "british",  label: "British" },
  { key: "egypt",    label: "Egypt Equivalent" },
];

export default function AgeComparisonChart() {
  const [tab, setTab] = useState<System>("american");

  return (
    <div className="rounded-[16px] overflow-hidden bg-white border border-[#E5E5E5] shadow-sm">
      {/* Tab pills */}
      <div className="bg-[#FAFAFA] border-b border-[#E5E5E5] p-2 flex gap-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 text-[12px] font-medium rounded-full py-2 transition-colors ${
              tab === t.key
                ? "bg-[#0089B7] text-white"
                : "bg-transparent text-[#525252]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Header row */}
      <div className="grid grid-cols-[56px_88px_1fr] bg-[#0089B7] text-white text-[12px] font-medium">
        <div className="px-2 py-3 text-center">Age</div>
        <div className="px-2 py-3 text-center">Stage</div>
        <div className="px-3 py-3">
          {tab === "american" ? "American School"
            : tab === "british" ? "British School"
            : "National System"}
        </div>
      </div>

      {/* Data rows */}
      <div>
        {ROWS.map((r, i) => {
          const stage = tab === "british" ? r.ukBand : r.band;
          const stageKey = tab === "british" ? r.ukKey : r.bandKey;
          const value =
            tab === "american" ? r.american :
            tab === "british"  ? r.british  : r.egypt;
          return (
            <div
              key={i}
              className="grid grid-cols-[56px_88px_1fr] items-stretch border-t border-[#E5E5E5]"
            >
              <div className="px-2 py-3 text-[14px] font-medium text-[#0A0A0A] text-center flex items-center justify-center bg-[#FAFAFA]">
                {r.age}
              </div>
              <div
                className="px-2 py-3 flex items-center justify-center text-[12px] text-center text-[#0A0A0A] leading-tight"
                style={{ background: BAND_COLOR[stageKey] }}
              >
                {stage}
              </div>
              <div className="px-3 py-3 text-[12px] text-[#262626] leading-[1.4]">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
