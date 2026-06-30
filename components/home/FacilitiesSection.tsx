"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";

const FACILITIES_DATA = [
  {
    id: 1,
    title: "Sports & Recreation",
    tags: [
      "Indoor Heated Pool",
      "Dance",
      "Fitness Studio",
      "Outdoors",
      "Indoor Sports Courts",
      "Viewing Room",
      "Playgrounds",
      "Padel Tennis Courts",
      "Football Courts",
      "Basketball Courts",
    ],
    image: "/images/facility-sports-hall.jpg",
  },
  {
    id: 2,
    title: "Learning Spaces",
    tags: ["State of the Art", "Science Labs", "Robotics Lab", "Libraries"],
    image: "/images/facility-classrooms.jpg",
  },
  {
    id: 3,
    title: "Student Wellbeing",
    tags: ["Clinics"],
    image: "/images/facility-libraries.jpg",
  },
  {
    id: 4,
    title: "Arts & Performing Arts",
    tags: [
      "260 Seat Theatre",
      "Drama Studio",
      "Radio Studio",
      "Music Rooms",
      "Amphitheater",
      "Multipurpose Small Halls",
    ],
    image: "/images/facility-theatre.jpg",
  },
  {
    id: 5,
    title: "Transportation",
    tags: [],
    image: "/images/facility-playgrounds.jpg",
  },
  {
    id: 6,
    title: "Campus Operations",
    tags: ["Engineering", "Daycare", "Teacher Resources Center"],
    image: "/images/facility-classrooms.jpg",
  },
];

const CARD_W = 260;
const CARD_W_ACTIVE = 300;

export default function FacilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [idx, setIdx] = useState(0);

  function scrollTo(newIdx: number) {
    // flushSync forces React to update DOM immediately so offsetLeft is accurate
    flushSync(() => setIdx(newIdx));
    const el = cardRefs.current[newIdx];
    if (!el || !scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: Math.max(0, el.offsetLeft - 20), // 20 = px-5 container padding
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-[#001B25] section-padding py-12">
      <h2 className="mb-2" style={{ fontSize: "26px", lineHeight: "1.2" }}>
        <span className="text-[#FAFAFA] font-normal">El Alsson Facilities</span>
        <br />
        <span style={{ color: "#FFC53A", fontWeight: 700 }}>Built for Curiosity</span>
      </h2>
      <p className="text-[#D4D4D4] text-[14px] leading-[1.5] mb-5">
        Explore our state-of-the-art facilities designed to support academic, athletic, and artistic excellence.
      </p>
      <Link
        href="/facilities"
        className="w-full flex items-center justify-center gap-2 rounded-full
                   border border-[#FAFAFA] text-[#FAFAFA] text-[16px] font-medium
                   active:bg-white/10 transition-colors mb-8"
        style={{ height: "52px" }}
      >
        Explore All Facilities
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Carousel with arrows */}
      <div className="relative -mx-5">
        {/* Left arrow */}
        <button
          onClick={() => scrollTo(Math.max(idx - 1, 0))}
          className="absolute left-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{ top: "50%", transform: "translateY(-50%)", opacity: idx === 0 ? 0 : 1, pointerEvents: idx === 0 ? "none" : "auto" }}
          aria-label="Previous facility"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5l-5 5 5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-5 pb-3 no-scrollbar"
          style={{ isolation: "isolate" }}
        >
          {FACILITIES_DATA.map((fac, index) => {
            const isActive = index === idx;
            return (
              /* Outer shell — width expands on active so CSS gap-3 stays genuinely 12px */
              <div
                key={fac.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="relative shrink-0"
                style={{
                  width: isActive ? `${CARD_W_ACTIVE}px` : `${CARD_W}px`,
                  height: "420px",
                  transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* Inner card — fills outer shell, clips content */}
                <div
                  className="absolute inset-0 rounded-[12px] overflow-hidden flex flex-col justify-end"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 80%)" }}
                  />
                  <div className="relative p-4 flex flex-col gap-2.5">
                    {fac.tags.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap">
                        {fac.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-normal whitespace-nowrap"
                            style={{ background: "#FFC53A", color: "#000" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-[#FAFAFA] font-medium text-[20px] leading-[1.3]">{fac.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollTo(Math.min(idx + 1, FACILITIES_DATA.length - 1))}
          className="absolute right-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{ top: "50%", transform: "translateY(-50%)", opacity: idx === FACILITIES_DATA.length - 1 ? 0 : 1, pointerEvents: idx === FACILITIES_DATA.length - 1 ? "none" : "auto" }}
          aria-label="Next facility"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5l5 5-5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {FACILITIES_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? "28px" : "8px",
              height: "8px",
              background: i === idx ? "#FFC53A" : "#D4D4D4",
            }}
          />
        ))}
      </div>
    </section>
  );
}
