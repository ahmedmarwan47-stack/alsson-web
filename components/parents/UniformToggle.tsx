"use client";

import { useState } from "react";

const TABS = ["Primary / Elementary", "Secondary / Senior"] as const;

/** Uniform catalog toggle — Figma node 11470:38384.
 *  The chart image fills the available screen width while preserving its
 *  intrinsic aspect ratio (no stretching). `h-auto` keeps it proportional. */
export default function UniformToggle() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex bg-[#E5E5E5] rounded-full p-0.5 mb-5">
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`flex-1 h-9 rounded-full transition-colors ${
              active === i ? "bg-[#33A1C5] text-white" : "text-[#171717]"
            }`}
            style={{ fontSize: "13px" }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="-mx-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/uniform-primary.png"
          alt={`${TABS[active]} uniform chart`}
          className="block w-full h-auto bg-white border-y border-[#EDEDED]"
        />
      </div>
      <p className="text-[#A3A3A3] mt-2.5 text-center" style={{ fontSize: "12px" }}>
        Pinch to zoom for more detail
      </p>
    </div>
  );
}
