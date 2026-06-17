"use client";

import { useRef, useState } from "react";
import ScrollReveal from "@/components/home/ScrollReveal";

const MILESTONES = [
  {
    year: "1982",
    title: "The Founding of El Alsson",
    description:
      "El Alsson opened its doors with one promise — an education for life, shaped by character as much as academics. From day one, the school stood for something genuinely different.",
    image: "/images/about-campus.jpg",
  },
  {
    year: "2001",
    title: "Launching the British Section",
    description:
      "Listening to parents who wanted an international route, El Alsson launched its British Section, bringing IGCSE and A-Level programmes to campus for the very first time.",
    image: "/images/about-students.jpg",
  },
  {
    year: "2006",
    title: "Adding the American Section",
    description:
      "Responding to parents frustrated with the national track, El Alsson introduced its American Section and became El Alsson British & American International School.",
    image: "/images/story-2006.jpg",
  },
  {
    year: "2017",
    title: "A New Home in NewGiza",
    description:
      "El Alsson moved to a purpose-built campus in NewGiza — a fresh chapter with world-class facilities and open spaces designed to inspire curiosity and collaboration.",
    image: "/images/facility-classrooms.jpg",
  },
  {
    year: "2023",
    title: "Becoming an IB World School",
    description:
      "El Alsson earned IB World School status, completing a three-curriculum offering and connecting its students to a global community of IB learners for the first time.",
    image: "/images/facility-libraries.jpg",
  },
];

export default function StoryTimeline() {
  const [idx, setIdx] = useState(2);
  const touchStartX = useRef<number | null>(null);

  function navigate(newIdx: number) {
    setIdx(Math.max(0, Math.min(newIdx, MILESTONES.length - 1)));
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) {
      navigate(delta > 0 ? idx + 1 : idx - 1);
    }
    touchStartX.current = null;
  }

  return (
    <section id="history" className="bg-[#FAFAFA] py-12">
      <ScrollReveal className="section-padding">
        <h2
          className="text-center mb-8"
          style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
        >
          Our <span style={{ color: "#0089B7", fontWeight: 700 }}>Story</span>
        </h2>
      </ScrollReveal>

      {/* Sliding track — all slides live in the DOM, translateX moves the view */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${idx * 100}%)`,
            transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {MILESTONES.map((m) => (
            <div key={m.year} className="w-full shrink-0 section-padding">
              <p
                className="text-[#0A0A0A] mb-4"
                style={{ fontSize: "56px", lineHeight: "1.1", fontWeight: 400 }}
              >
                {m.year}
              </p>
              <div className="rounded-[16px] overflow-hidden h-[240px] mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#262626] font-medium text-[20px] leading-[1.3] mb-3">
                {m.title}
              </h3>
              <p className="text-[#404040] text-[16px] leading-[1.6]">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <div className="section-padding flex justify-end gap-4 mt-5">
        <button
          onClick={() => navigate(idx - 1)}
          disabled={idx === 0}
          aria-label="Previous milestone"
          className="w-12 h-12 rounded-full bg-[#FFC53A] flex items-center justify-center
                     shadow-sm transition-opacity disabled:opacity-40 active:bg-[#FFD161]"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M13.5 5.5L8 11l5.5 5.5"
              stroke="#0A0A0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate(idx + 1)}
          disabled={idx === MILESTONES.length - 1}
          aria-label="Next milestone"
          className="w-12 h-12 rounded-full bg-[#FFC53A] flex items-center justify-center
                     shadow-sm transition-opacity disabled:opacity-40 active:bg-[#FFD161]"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M8.5 5.5L14 11l-5.5 5.5"
              stroke="#0A0A0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Timeline scrubber — rounded connectors, tighter spacing */}
      <div className="section-padding flex items-end gap-0.5 mt-6">
        <div className="flex-1 h-[2px] rounded-full bg-[#0089B7] mb-[7px]" />
        {MILESTONES.map((m, i) => (
          <div key={m.year} className="contents">
            <button
              onClick={() => navigate(i)}
              className="flex flex-col items-center gap-1 shrink-0 px-0.5"
            >
              <span
                className="text-[12px] leading-[1.3] transition-colors"
                style={{
                  color: i === idx ? "#00526E" : "#0089B7",
                  fontWeight: i === idx ? 500 : 400,
                }}
              >
                {m.year}
              </span>
              {i === idx ? (
                <span className="w-4 h-4 rounded-full border-2 border-[#00526E] bg-[#FAFAFA] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00526E]" />
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0089B7] mb-[5px]" />
              )}
            </button>
            <div className="flex-1 h-[2px] rounded-full bg-[#0089B7] mb-[7px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
