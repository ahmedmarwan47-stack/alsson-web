"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const PREVIOUS_EVENTS = [
  { id: 1, date: "22 Feb 2025", title: "Art Exhibition in El Alsson Schools",    image: "/images/event-art-exhibition.jpg" },
  { id: 2, date: "22 Feb 2025", title: "Prophet's Birthday Celebrations",        image: "/images/event-prophets-birthday.jpg" },
  { id: 3, date: "22 Feb 2025", title: "Graduation Ceremony of Class of 2024",  image: "/images/event-graduation-2024.jpg" },
  { id: 4, date: "22 Feb 2025", title: "Celebration of Student Art Exhibition", image: "/images/event-student-art.jpg" },
];

const UPCOMING_EVENTS = [
  { id: 1, date: "15 Sep 2025", title: "Annual Science Fair 2025",              image: "/images/event-art-exhibition.jpg" },
  { id: 2, date: "20 Sep 2025", title: "International Day Celebration",         image: "/images/event-prophets-birthday.jpg" },
  { id: 3, date: "25 Sep 2025", title: "Senior School Sports Day",              image: "/images/event-graduation-2024.jpg" },
  { id: 4, date: "01 Oct 2025", title: "Parent-Teacher Conference",             image: "/images/event-student-art.jpg" },
];

const CARD_W = 200;
const GAP = 12;

export default function FeaturedEventsSection() {
  const [tab, setTab] = useState<"previous" | "upcoming">("previous");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const events = tab === "previous" ? PREVIOUS_EVENTS : UPCOMING_EVENTS;

  function scrollTo(newIdx: number) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: newIdx * (CARD_W + GAP), behavior: "smooth" });
    setIdx(newIdx);
  }

  function switchTab(newTab: "previous" | "upcoming") {
    setTab(newTab);
    setIdx(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }

  return (
    <section
      className="section-padding py-12"
      style={{ background: "linear-gradient(to bottom, #E0F8FF 12.4%, #FAFAFA 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <h2 style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
          Featured <span style={{ color: "#0089B7", fontWeight: 700 }}>Events</span>
        </h2>
        {/* Previous / Upcoming toggle */}
        <div
          className="flex items-center shrink-0 rounded-full border border-[#99D0E2] bg-white"
          style={{ padding: "2px" }}
        >
          {(["previous", "upcoming"] as const).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className="rounded-full px-3 py-0.5 text-[12px] font-medium transition-colors capitalize"
              style={tab === t ? { background: "#33A1C5", color: "#fff" } : { color: "#171717" }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <p className="text-[14px] text-[#525252] mb-5">
        {tab === "previous"
          ? "Relive the memorable events from our vibrant campus."
          : "Mark your calendars for these major upcoming highlights on campus."}
      </p>

      {/* Hero card */}
      <Link
        href="/events"
        className="relative rounded-[20px] overflow-hidden block mb-4 active:scale-[0.99] transition-transform"
        style={{ height: "260px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/event-hero-grease.jpg"
          alt="Senior School Production: Grease"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 39.62%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
          <p className="text-[#CCE7F1] text-[14px]">22 Feb 2025</p>
          <div>
            <p className="text-white font-medium mb-1" style={{ fontSize: "22px", lineHeight: "1.3" }}>
              Senior School Production: Grease
            </p>
            <p className="text-[#D4D4D4] text-[12px] leading-[1.5] line-clamp-2">
              Grease: School Edition has officially wrapped, and what an incredible ride it was!
              From dazzling performances to toe-tapping tunes, our talented students brought the 50s to life
            </p>
          </div>
        </div>
      </Link>

      {/* Cards carousel with arrows */}
      <div className="relative -mx-5">
        {/* Left arrow */}
        <button
          onClick={() => scrollTo(Math.max(idx - 1, 0))}
          className="absolute left-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{ top: "50%", transform: "translateY(-50%)", opacity: idx === 0 ? 0 : 1, pointerEvents: idx === 0 ? "none" : "auto" }}
          aria-label="Previous event"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5l-5 5 5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-5 pb-2 no-scrollbar"
        >
          {events.map((ev) => (
            <Link
              key={ev.id}
              href="/events"
              className="relative rounded-[16px] overflow-hidden shrink-0 block active:opacity-90"
              style={{ width: `${CARD_W}px`, height: "240px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ev.image}
                alt={ev.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 40%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="shrink-0">
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="#CCE7F1" strokeWidth="1.5" />
                    <path d="M6 2v3M14 2v3M2 9h16" stroke="#CCE7F1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[#CCE7F1] text-[12px]">{ev.date}</span>
                </div>
                <p className="text-white font-medium text-[16px] leading-[1.3]">{ev.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollTo(Math.min(idx + 1, events.length - 1))}
          className="absolute right-2 z-10 w-10 h-10 rounded-full bg-[#FFC53A] flex items-center justify-center shadow-md transition-opacity"
          style={{ top: "50%", transform: "translateY(-50%)", opacity: idx === events.length - 1 ? 0 : 1, pointerEvents: idx === events.length - 1 ? "none" : "auto" }}
          aria-label="Next event"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5l5 5-5 5" stroke="#001B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-6">
        <Link
          href="/events"
          className="w-full flex items-center justify-center gap-2 rounded-full
                     border border-[#262626] text-[#262626] text-[16px] font-medium
                     active:bg-[#F5F5F5] transition-colors"
          style={{ height: "52px" }}
        >
          View All Events
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
