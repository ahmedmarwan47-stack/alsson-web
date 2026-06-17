"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export type StageItem = {
  slug: string;
  title: string;
  img: string;
};

type Props = {
  items: StageItem[];
  cardWidth?: number;
  cardHeight?: number;
};

const GAP = 12;

export default function StageGallery({
  items,
  cardWidth = 220,
  cardHeight = 280,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = items.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: clamped * (cardWidth + GAP),
      behavior: "smooth",
    });
    setIdx(clamped);
  }

  function onScroll() {
    if (!scrollRef.current) return;
    const left = scrollRef.current.scrollLeft;
    const nextIdx = Math.round(left / (cardWidth + GAP));
    if (nextIdx !== idx) setIdx(nextIdx);
  }

  return (
    <div className="relative -mx-5">
      {/* Left arrow */}
      <button
        onClick={() => scrollTo(idx - 1)}
        aria-label="Previous stage"
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
        onScroll={onScroll}
        className="flex gap-3 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory"
        style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/academics/american/${item.slug}`}
            className="snap-start shrink-0 block"
            style={{ width: `${cardWidth}px` }}
          >
            <div
              className="relative rounded-[12px] overflow-hidden"
              style={{ height: `${cardHeight}px` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.title.replace(/\n/g, " ")}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 flex items-end"
                style={{
                  height: "120px",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))",
                }}
              >
                <p className="text-[#FAFAFA] text-[15px] font-medium leading-[1.3]">
                  {item.title.replace(/\n/g, " ")}
                </p>
              </div>
            </div>
          </Link>
        ))}
        <div className="shrink-0 w-5" aria-hidden />
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scrollTo(idx + 1)}
        aria-label="Next stage"
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

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to stage ${i + 1}`}
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
