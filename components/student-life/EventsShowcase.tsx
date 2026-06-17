"use client";

import { useState } from "react";

type Event = {
  title: string;
  description: string;
  photo: string;
};

type EventsShowcaseProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  events: Event[];
  bg?: string;
};

export default function EventsShowcase({
  id,
  eyebrow,
  title,
  events,
  bg = "#FAFAFA",
}: EventsShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const useSectionWrapper = !!(eyebrow || title);

  return (
    <section
      id={id}
      className={useSectionWrapper ? "section-padding py-12" : ""}
      style={{ background: bg }}
    >
      {eyebrow && (
        <span
          className="inline-block bg-[#FFE8B0] text-[#1A1406] px-2.5 py-0.5 rounded-md mb-3"
          style={{ fontWeight: 400, fontSize: "13px" }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className="text-[#171717] mb-6"
          style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
        >
          {title}
        </h2>
      )}

      {/* Active photo — crossfade on change */}
      <div className="relative rounded-[16px] overflow-hidden mb-6" style={{ height: "260px" }}>
        {events.map((e, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={e.photo}
            alt={e.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === activeIdx ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Event rows */}
      <div className="flex flex-col">
        {events.map((e, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className="flex items-start gap-4 py-4 text-left border-t border-[#E5E5E5] last:border-b active:bg-[#F5F5F5] rounded-sm"
          >
            {/* Vertical accent bar */}
            <div className="shrink-0 mt-1" style={{ width: "3px", alignSelf: "stretch" }}>
              <div
                className="rounded-full h-full transition-colors duration-300"
                style={{ background: i === activeIdx ? "#FFC53A" : "#E5E5E5" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div
                className="font-medium mb-1 transition-colors duration-200"
                style={{
                  fontSize: "16px",
                  color: i === activeIdx ? "#0A0A0A" : "#737373",
                }}
              >
                <span
                  className="mr-2"
                  style={{ fontSize: "13px", color: "#0089B7", fontWeight: 600 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {e.title}
              </div>
              <div
                className="leading-[1.6] transition-all duration-300 overflow-hidden"
                style={{
                  fontSize: "14px",
                  color: "#525252",
                  maxHeight: i === activeIdx ? "120px" : "0",
                  opacity: i === activeIdx ? 1 : 0,
                }}
              >
                {e.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
