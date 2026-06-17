"use client";

import { useState } from "react";

type Exhibition = {
  tab: string;
  title: string;
  description: string;
  photo: string;
};

type ExhibitionsSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  exhibitions: Exhibition[];
};

export default function ExhibitionsSection({
  id,
  eyebrow,
  title,
  exhibitions,
}: ExhibitionsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = exhibitions[activeIdx];

  const titleParts = title.split(" ");
  const titlePrefix = titleParts.slice(0, -1).join(" ");
  const titleAccent = titleParts[titleParts.length - 1];

  function goPrev() {
    setActiveIdx((i) => (i === 0 ? exhibitions.length - 1 : i - 1));
  }
  function goNext() {
    setActiveIdx((i) => (i === exhibitions.length - 1 ? 0 : i + 1));
  }

  return (
    <section id={id} className="bg-[#FAFAFA] section-padding py-4">
      {/* Hero image card with overlay */}
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{ minHeight: "480px" }}
      >
        {/* Crossfading background images */}
        {exhibitions.map((ex, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={ex.photo}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === activeIdx ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
            }}
          />
        ))}
        {/* Dim overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />

        {/* Content layer */}
        <div
          className="relative flex flex-col justify-between p-6"
          style={{ minHeight: "480px" }}
        >
          {/* Progress bars */}
          <div className="flex items-center gap-2">
            {exhibitions.map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-full bg-[#FAFAFA] transition-opacity"
                style={{
                  height: "6px",
                  opacity: i === activeIdx ? 1 : 0.3,
                }}
              />
            ))}
          </div>

          {/* Title + active exhibition + arrows */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              {eyebrow && (
                <span
                  className="inline-block self-start bg-[#FFE8B0] text-[#1A1406] px-2.5 py-0.5 rounded-md"
                  style={{ fontWeight: 400, fontSize: "13px" }}
                >
                  {eyebrow}
                </span>
              )}
              <h2
                className="text-[#FAFAFA]"
                style={{ fontSize: "32px", lineHeight: 1.2, fontWeight: 700 }}
              >
                {titlePrefix && <span>{titlePrefix} </span>}
                <span className="text-[#FFC53A]">{titleAccent}</span>
              </h2>
              <div className="flex flex-col gap-1.5">
                <p
                  className="text-[#FAFAFA]"
                  style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {active.title}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "rgba(250,250,250,0.85)",
                  }}
                >
                  {active.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous exhibition"
                className="rounded-full border border-[#FAFAFA] flex items-center justify-center transition-colors active:bg-[rgba(255,255,255,0.1)]"
                style={{ width: "44px", height: "44px" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12 5l-5 5 5 5"
                    stroke="#FAFAFA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={goNext}
                aria-label="Next exhibition"
                className="rounded-full bg-[#FFC53A] border border-[#FFC53A] flex items-center justify-center transition-colors active:bg-[#E5AE2A]"
                style={{ width: "44px", height: "44px" }}
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
          </div>
        </div>
      </div>

      {/* White tabs card */}
      <div
        className="bg-[#FAFAFA] rounded-[24px] mt-3 p-2 flex flex-col gap-1"
        style={{
          border: "1px solid #EEEEEE",
          boxShadow:
            "0px 1px 1px rgba(0,0,0,0.04), 0px 3px 1.5px rgba(0,0,0,0.03), 0px 6px 2px rgba(0,0,0,0.02), 0px 11px 2px rgba(0,0,0,0.01)",
        }}
      >
        {exhibitions.map((ex, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="w-full flex items-center px-5 py-3 rounded-[16px] transition-colors text-left"
              style={{
                background: isActive ? "#003749" : "transparent",
                color: isActive ? "#FAFAFA" : "#0A0A0A",
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              {ex.tab}
            </button>
          );
        })}
      </div>
    </section>
  );
}
