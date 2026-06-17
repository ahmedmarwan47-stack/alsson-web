"use client";

import { useRef, useState } from "react";

type Competition = {
  number: string;
  title: string;
  description: string;
  photo: string;
};

type CompetitionsSectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  competitions: Competition[];
  bg?: string;
};

const CARD_W = 268;
const GAP = 12;

export default function CompetitionsSection({
  id,
  eyebrow,
  title,
  lead,
  competitions,
  bg = "#FAFAFA",
}: CompetitionsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = competitions.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  const useSectionWrapper = !!(eyebrow || title || lead);

  return (
    <section
      id={id}
      className={useSectionWrapper ? "section-padding py-12" : ""}
      style={{ background: bg }}
    >
      {eyebrow && (
        <span
          className="inline-block bg-[#FFE8B0] text-[#1A1406] px-2.5 py-0.5 rounded-md mb-3"
          style={{ fontWeight: 400, fontSize: "13px" }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className="text-[#171717] mb-2"
          style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p className="text-[#525252] leading-[1.6]" style={{ fontSize: "15px" }}>
          {lead}
        </p>
      )}

      <div className="relative -mx-5 mt-6">
        <button
          onClick={() => scrollTo(idx - 1)}
          aria-label="Previous competition"
          className="absolute left-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            opacity: idx === 0 ? 0 : 1,
            pointerEvents: idx === 0 ? "none" : "auto",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12 5l-5 5 5 5"
              stroke="#001B25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory"
          style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
        >
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="snap-start shrink-0 rounded-[16px] overflow-hidden bg-white"
              style={{ width: `${CARD_W}px` }}
            >
              <div className="relative" style={{ height: "180px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={comp.photo}
                  alt={comp.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div
                  className="font-semibold mb-1"
                  style={{ fontSize: "13px", color: "#0089B7" }}
                >
                  {comp.number}
                </div>
                <div
                  className="font-medium mb-2"
                  style={{ fontSize: "17px", color: "#171717", lineHeight: 1.3 }}
                >
                  {comp.title}
                </div>
                <div style={{ fontSize: "13px", color: "#525252", lineHeight: 1.6 }}>
                  {comp.description}
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-5" aria-hidden />
        </div>

        <button
          onClick={() => scrollTo(idx + 1)}
          aria-label="Next competition"
          className="absolute right-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            opacity: idx === lastIdx ? 0 : 1,
            pointerEvents: idx === lastIdx ? "none" : "auto",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M8 5l5 5-5 5"
              stroke="#001B25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-5">
        {competitions.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to competition ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? "28px" : "8px",
              height: "8px",
              background: i === idx ? "#0089B7" : "#D4D4D4",
            }}
          />
        ))}
      </div>
    </section>
  );
}
