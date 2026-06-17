"use client";

import { useState } from "react";
import FileCard from "@/components/ui/FileCard";

const POLICIES = [
  { label: "Child Protection Policy", size: "94 KB" },
  { label: "Anti-Bullying Policy", size: "88 KB" },
  { label: "Behaviour Policy", size: "112 KB" },
  { label: "Attendance Policy", size: "76 KB" },
  { label: "E-Safety Policy", size: "102 KB" },
  { label: "Health & Safety Policy", size: "124 KB" },
  { label: "Safeguarding Policy", size: "98 KB" },
  { label: "Inclusion Policy", size: "84 KB" },
  { label: "Academic Honesty Policy", size: "92 KB" },
  { label: "Mobile Phone Policy", size: "68 KB" },
  { label: "Complaints Policy", size: "80 KB" },
  { label: "Assessment Policy", size: "106 KB" },
];

const INITIAL_COUNT = 6;

/** School Policies download grid — Figma node 11470:38489.
 *  Shows the first 6 policies; View More reveals the rest. */
export default function PoliciesGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? POLICIES : POLICIES.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5">
        {visible.map((p) => (
          <FileCard key={p.label} href="#" as="a" title={p.label} size={p.size} />
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 w-full flex items-center justify-center gap-2 rounded-full
                     border border-[#262626] text-[#262626] text-[14px] font-medium
                     active:bg-[#F5F5F5] transition-colors"
          style={{ height: "52px" }}
        >
          View More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M8 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
