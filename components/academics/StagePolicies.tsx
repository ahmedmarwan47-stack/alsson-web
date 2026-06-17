"use client";

import { useState } from "react";
import FileCard from "@/components/ui/FileCard";

export default function StagePolicies({
  policies,
}: {
  policies: { label: string; size: string }[];
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? policies : policies.slice(0, 6);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((p) => (
          <FileCard key={p.label} title={p.label} size={p.size} href="#" />
        ))}
      </div>
      {!showAll && policies.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full flex items-center justify-center gap-2 mt-4 py-3 text-[14px] text-[#525252] border border-[#E5E5E5] rounded-full active:bg-[#F5F5F5] transition-colors"
        >
          View More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
