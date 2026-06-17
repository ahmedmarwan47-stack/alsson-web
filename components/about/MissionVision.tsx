"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    key: "Mission",
    image: "/images/mission-bg.jpg",
    statement:
      "Our students will think, create, contribute and take pride in themselves and society",
  },
  {
    key: "Vision",
    image: "/images/vision-bg.jpg",
    statement: "Developing Successful 21st Century Citizens",
  },
];

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevIdxRef = useRef(0);
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // scrollable distance within the sticky section
      const scrollable = height - vh;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -top / scrollable));
      const newIdx = progress >= 0.5 ? 1 : 0;
      if (newIdx !== prevIdxRef.current) {
        prevIdxRef.current = newIdx;
        setIdx(newIdx);
        setAnimKey((k) => k + 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Outer container is 200svh tall — gives scroll room for the sticky swap
    <div ref={containerRef} id="mission-vision" style={{ height: "200svh" }}>
      <div
        className="sticky top-0 overflow-hidden bg-[#001B25]"
        style={{ height: "100svh" }}
      >
        {/* Background photos — crossfade */}
        {SLIDES.map((s, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={s.key}
            src={s.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content — pt-16 clears the fixed navbar */}
        <div className="relative h-full flex flex-col justify-between section-padding pt-20 pb-12">
          <h2
            className="flex items-baseline gap-2.5"
            style={{ fontSize: "34px", lineHeight: "1.2" }}
          >
            <span className="text-[#FAFAFA] font-normal">Our</span>
            <span
              key={`word-${animKey}`}
              className="story-slide text-[#0089B7] font-medium"
            >
              {SLIDES[idx].key}
            </span>
          </h2>

          <div>
            <p
              key={`stmt-${animKey}`}
              className="story-slide text-[#FAFAFA] mb-6"
              style={{ fontSize: "26px", lineHeight: "1.3", fontWeight: 400 }}
            >
              {SLIDES[idx].statement}
            </p>

            {/* Progress dots */}
            <div className="flex gap-1.5">
              {SLIDES.map((s, i) => (
                <span
                  key={s.key}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === idx ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === idx ? "#0089B7" : "rgba(250,250,250,0.4)",
                  }}
                />
              ))}
            </div>

            {/* Scroll hint fades out when Vision is shown */}
            <p
              className="mt-4 text-[12px] flex items-center gap-1.5 transition-opacity duration-500"
              style={{
                color: "rgba(250,250,250,0.45)",
                opacity: idx === 0 ? 1 : 0,
              }}
              aria-hidden
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 17l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Scroll to discover our Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
