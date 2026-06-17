"use client";

import { useRef, useState } from "react";

const CARD_W = 280;
const GAP = 12;

/** YouTube-style play badge. */
function PlayBadge() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex items-center justify-center w-14 h-10 rounded-[10px] bg-[#FF0000] shadow-[0px_4px_12px_rgba(0,0,0,0.35)]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M5 3.5v9l8-4.5-8-4.5z" fill="white" />
        </svg>
      </span>
    </span>
  );
}

type Visit = { src: string; video: boolean };

export default function VisitsCarousel({ visits }: { visits: Visit[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = visits.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <div className="relative -mx-5">
      {/* Left arrow */}
      <button
        onClick={() => scrollTo(idx - 1)}
        aria-label="Previous photo"
        className="absolute left-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: idx === 0 ? 0 : 1,
          pointerEvents: idx === 0 ? "none" : "auto",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 5l-5 5 5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3"
        style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
      >
        {visits.map((v, i) => (
          <a
            key={i}
            href={v.video ? "#" : undefined}
            className="relative shrink-0 rounded-[12px] overflow-hidden snap-start"
            style={{ width: `${CARD_W}px`, height: "340px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.src}
              alt="El Alsson orphanage visit"
              className="w-full h-full object-cover object-center"
            />
            {v.video && (
              <>
                <span className="absolute inset-0 bg-black/30" />
                <PlayBadge />
              </>
            )}
          </a>
        ))}
        <div className="shrink-0 w-5" aria-hidden />
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scrollTo(idx + 1)}
        aria-label="Next photo"
        className="absolute right-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: idx === lastIdx ? 0 : 1,
          pointerEvents: idx === lastIdx ? "none" : "auto",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 5l5 5-5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {visits.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? "28px" : "8px",
              height: "8px",
              background: i === idx ? "#0089B7" : "#D4D4D4",
            }}
          />
        ))}
      </div>
    </div>
  );
}
