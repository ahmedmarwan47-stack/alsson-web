"use client";

import { useRef, useState } from "react";

const PHOTOS = [
  { src: "/images/life-newgiza-1.jpg", alt: "New Giza community" },
  { src: "/images/life-newgiza-2.jpg", alt: "New Giza amenities" },
  { src: "/images/life-newgiza-3.jpg", alt: "New Giza green spaces" },
  { src: "/images/life-newgiza-4.jpg", alt: "New Giza lifestyle" },
];

const CARD_W = 260;
const GAP = 12;

export default function LifeGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = PHOTOS.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <div className="relative -mx-5 mt-6">
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

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory"
        style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="shrink-0 rounded-[12px] overflow-hidden snap-start"
            style={{ width: `${CARD_W}px`, height: "200px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="shrink-0 w-5 h-px" aria-hidden />
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
    </div>
  );
}
