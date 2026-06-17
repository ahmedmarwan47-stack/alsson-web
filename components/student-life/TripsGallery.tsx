"use client";

import { useRef, useState } from "react";

type Trip = {
  photo: string;
  title: string;
  location?: string;
  date?: string;
};

type TripsGalleryProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  trips: Trip[];
};

const CARD_W = 236;
const GAP = 12;

export default function TripsGallery({
  id,
  eyebrow,
  title,
  lead,
  trips,
}: TripsGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = trips.length - 1;

  function scrollTo(newIdx: number) {
    const clamped = Math.max(0, Math.min(newIdx, lastIdx));
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setIdx(clamped);
  }

  // Split title to color the last word yellow (Figma pattern: "El Alsson Trips" with yellow Trips)
  const titleParts = title.split(" ");
  const titlePrefix = titleParts.slice(0, -1).join(" ");
  const titleAccent = titleParts[titleParts.length - 1];

  return (
    <section id={id} className="bg-[#001B25] section-padding py-12">
      {eyebrow && (
        <span
          className="inline-block bg-[#FFE8B0] text-[#1A1406] px-2.5 py-0.5 rounded-md mb-3"
          style={{ fontWeight: 400, fontSize: "13px" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="mb-2"
        style={{ fontSize: "32px", lineHeight: "1.2", fontWeight: 700, color: "#FAFAFA" }}
      >
        {titlePrefix && <span>{titlePrefix} </span>}
        <span className="text-[#FFC53A]">{titleAccent}</span>
      </h2>
      {lead && (
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
          {lead}
        </p>
      )}

      <div className="relative -mx-5 mt-6">
        <button
          onClick={() => scrollTo(idx - 1)}
          aria-label="Previous trip"
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
          {trips.map((trip, i) => (
            <div
              key={i}
              className="snap-start shrink-0 relative rounded-[16px] overflow-hidden"
              style={{ width: `${CARD_W}px`, height: "300px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={trip.photo}
                alt={trip.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,27,37,0.92) 0%, rgba(0,27,37,0.3) 55%, transparent 100%)",
                }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {(trip.location || trip.date) && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {trip.location && (
                      <span
                        className="px-2.5 py-0.5 rounded-full"
                        style={{
                          fontSize: "11px",
                          background: "rgba(255,255,255,0.15)",
                          color: "white",
                        }}
                      >
                        {trip.location}
                      </span>
                    )}
                    {trip.date && (
                      <span
                        className="px-2.5 py-0.5 rounded-full"
                        style={{
                          fontSize: "11px",
                          background: "rgba(255,197,58,0.2)",
                          color: "#FFC53A",
                        }}
                      >
                        {trip.date}
                      </span>
                    )}
                  </div>
                )}
                <div
                  className="text-white font-medium"
                  style={{ fontSize: "16px", lineHeight: 1.3 }}
                >
                  {trip.title}
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-5" aria-hidden />
        </div>

        <button
          onClick={() => scrollTo(idx + 1)}
          aria-label="Next trip"
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
        {trips.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to trip ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? "28px" : "8px",
              height: "8px",
              background: i === idx ? "#FFC53A" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
