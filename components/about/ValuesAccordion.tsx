"use client";

import { useState } from "react";
import ScrollReveal from "@/components/home/ScrollReveal";

const VALUES = [
  {
    number: "01",
    title: "Think Critically & Independently",
    points: [
      "Questioning with confidence",
      "Forming and defending opinions",
      "Evaluating information thoughtfully",
      "Making independent decisions",
    ],
  },
  {
    number: "02",
    title: "Learn With Curiosity & Purpose",
    points: [
      "Developing analytical and reasoning skills",
      "Encouraging independent thought",
      "Building real-world problem-solving abilities",
      "Fostering a lifelong love of discovery",
    ],
  },
  {
    number: "03",
    title: "Care For Each Other & Our World",
    points: [
      "Practising empathy and kindness daily",
      "Serving the community through Alsson El Kheir",
      "Caring for our environment",
      "Leading with integrity and respect",
    ],
  },
];

export default function ValuesAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // 02 open, like the design

  return (
    <section id="values" className="bg-[#FAFAFA] section-padding py-12">
      <div className="rounded-[16px] overflow-hidden h-[260px] mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/values-photo.jpg" alt="El Alsson students" className="w-full h-full object-cover" />
      </div>

      <ScrollReveal>
        <h2 className="mb-2" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
          El Alsson <span style={{ color: "#0089B7", fontWeight: 700 }}>Values</span>
        </h2>
        <p className="text-[#525252] text-[16px] leading-[1.6] mb-6">
          The principles that shape our community and guide every student&rsquo;s journey
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-3">
        {VALUES.map((value, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={value.number}
              className="rounded-[8px] transition-colors"
              style={{ background: isOpen ? "#F0F0F0" : "transparent" }}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className="text-[16px] shrink-0 transition-colors"
                    style={{ color: isOpen ? "#0089B7" : "#737373", fontWeight: isOpen ? 500 : 400 }}
                  >
                    {value.number}
                  </span>
                  <span
                    className="text-[16px] leading-[1.4] font-medium transition-colors"
                    style={{ color: isOpen ? "#0A0A0A" : "#737373" }}
                  >
                    {value.title}
                  </span>
                </span>
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none"
                  className="shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M6 9l6 6 6-6" stroke={isOpen ? "#0A0A0A" : "#737373"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <ul className="list-disc pl-12 pr-4 pb-4 flex flex-col gap-1">
                    {value.points.map((point) => (
                      <li key={point} className="text-[#171717] text-[16px] leading-[1.5]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
