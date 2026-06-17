"use client";

import { useRef, useState } from "react";

export type Album = {
  img: string;
  label: "Junior" | "Senior";
  count: string;
};

type FacilityGalleryProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  albums: Album[];
};

const CARD_W = 220;
const GAP = 12;

/** Photo-album icon — 16px per the SVG icon scale rule. */
function AlbumIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" strokeWidth="1.6" />
      <path
        d="M4 15l4-4 5 5M14 13l2-2 4 4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="9" r="1.3" fill="white" />
    </svg>
  );
}

function AlbumCard({ album }: { album: Album }) {
  const pillDark = album.label === "Junior";
  return (
    <a
      href="#"
      className="relative shrink-0 h-[320px] rounded-[12px] overflow-hidden
                 flex flex-col justify-between p-3 active:opacity-90"
      style={{ width: `${CARD_W}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={album.img}
        alt={`${album.label} photo album`}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <span
        className={`relative self-start px-3 py-0.5 rounded-full font-medium ${
          pillDark ? "bg-[#00526E] text-white" : "bg-[#FFC53A] text-black"
        }`}
        style={{ fontSize: "12px" }}
      >
        {album.label}
      </span>
      <span
        className="relative self-end flex items-center gap-1.5 bg-[#0089B7] rounded-full pl-0.5 pr-2.5 py-0.5"
      >
        <span className="w-6 h-6 rounded-full bg-[#003749] flex items-center justify-center">
          <AlbumIcon />
        </span>
        <span className="text-white" style={{ fontSize: "12px" }}>
          {album.count}
        </span>
      </span>
    </a>
  );
}

/** Facility gallery — horizontal scroll carousel with prev/next arrows and
 *  consistent screen-edge padding (Pattern 7 + arrows like home facilities). */
export default function FacilityGallery({ id, eyebrow, title, lead, albums }: FacilityGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = albums.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <section id={id} className="bg-[#FAFAFA] section-padding py-12">
      <span
        className="inline-block bg-[#FFE8B0] text-[#1A1406] px-2.5 py-0.5 rounded-md mb-3"
        style={{ fontWeight: 400, fontSize: "13px" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-[#171717] mb-2"
        style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
      >
        {title}
      </h2>
      <p className="text-[#525252] leading-[1.6] mb-6" style={{ fontSize: "15px" }}>
        {lead}
      </p>

      <div className="relative -mx-5">
        {/* Left arrow */}
        <button
          onClick={() => scrollTo(idx - 1)}
          aria-label="Previous album"
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

        {/* Scroll container — padding-left + scroll-padding-left keep the first card
            off the edge AND ensure snap-mandatory honours the inset. */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory"
          style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
        >
          {albums.map((album, i) => (
            <div key={i} className="snap-start">
              <AlbumCard album={album} />
            </div>
          ))}
          <div className="shrink-0 w-5" aria-hidden />
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollTo(idx + 1)}
          aria-label="Next album"
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

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {albums.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to album ${i + 1}`}
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
