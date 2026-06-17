"use client";

import { useRef, useState } from "react";

const CARD_GAP = 16;

function getCardWidth() {
  if (typeof window === "undefined") return 300;
  return window.innerWidth - 80;
}

function PlayButton() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white" aria-hidden>
        <path d="M7 4l10 6-10 6V4z" />
      </svg>
    </div>
  );
}

function TestimonialCard({
  avatar,
  quote,
  name,
  role,
}: {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div
      className="shrink-0 snap-start bg-[#001B25] rounded-[12px] flex flex-col justify-between px-5 py-7 border border-white/10"
      style={{ width: "calc(100vw - 80px)", height: "360px" }}
    >
      <div className="flex flex-col gap-4">
        <div className="w-[86px] h-[86px] rounded-full overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <p className="text-[#FAFAFA] text-[14px] leading-[1.6]">"{quote}"</p>
      </div>
      <div>
        <p
          className="text-[#FAFAFA] text-[30px] leading-[1.2]"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {name}
        </p>
        <p className="text-[#FAFAFA]/70 text-[13px] leading-[1.5] mt-0.5">{role}</p>
      </div>
    </div>
  );
}

const CARDS = [
  { type: "testimonial", avatar: "/images/life-testimonial-1.jpg" },
  { type: "video" },
  { type: "testimonial", avatar: "/images/life-testimonial-3.jpg" },
  { type: "testimonial", avatar: "/images/life-testimonial-4.jpg" },
] as const;

const QUOTE = "Nothing compares to the community at El-Alsson. Here I don't feel I am working among colleagues, I feel I am working among family";
const NAME = "Kismet El Husseiny";
const ROLE = "Ex Alsson student and currently a G3 Class Teacher";

export default function VoicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = CARDS.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    if (!scrollRef.current) return;
    const cardW = getCardWidth();
    scrollRef.current.scrollTo({ left: clamped * (cardW + CARD_GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <div className="relative -mx-5">
      {/* Left arrow */}
      <button
        onClick={() => scrollTo(idx - 1)}
        aria-label="Previous testimonial"
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
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        style={{ paddingLeft: "20px", scrollPaddingLeft: "20px" }}
      >
        {CARDS.map((card, i) =>
          card.type === "video" ? (
            <div
              key={i}
              className="shrink-0 snap-start rounded-[12px] overflow-hidden relative"
              style={{ width: "calc(100vw - 80px)", height: "360px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/life-testimonial-video.jpg"
                alt="Testimonial video"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "70px" }}>
                <PlayButton />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-[#FAFAFA] text-[30px] leading-[1.2]"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {NAME}
                </p>
                <p className="text-white/70 text-[13px] leading-[1.5] mt-0.5">{ROLE}</p>
              </div>
            </div>
          ) : (
            <TestimonialCard
              key={i}
              avatar={card.avatar}
              quote={QUOTE}
              name={NAME}
              role={ROLE}
            />
          )
        )}
        <div className="shrink-0 w-5 h-px" aria-hidden />
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scrollTo(idx + 1)}
        aria-label="Next testimonial"
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
