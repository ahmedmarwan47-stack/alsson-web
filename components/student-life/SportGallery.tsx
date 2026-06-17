"use client";

import { useRef, useState } from "react";

type Photo = { src: string; alt?: string };

type SportGalleryProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  photos: Photo[];
  bg?: string;
};

const CARD_W = 220;
const GAP = 12;

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div
      className="relative shrink-0 rounded-[12px] overflow-hidden"
      style={{ width: `${CARD_W}px`, height: "280px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt ?? ""}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function SportGallery({
  id,
  eyebrow,
  title,
  lead,
  photos,
  bg = "#FAFAFA",
}: SportGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = photos.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <section id={id} className="section-padding py-12" style={{ background: bg }}>
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
          {photos.map((photo, i) => (
            <div key={i} className="snap-start">
              <PhotoCard photo={photo} />
            </div>
          ))}
          <div className="shrink-0 w-5" aria-hidden />
        </div>

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
        {photos.map((_, i) => (
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
    </section>
  );
}
