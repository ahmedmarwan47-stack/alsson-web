"use client";

import { useState } from "react";

type Member = {
  img: string;
  name: string;
  year: string;
  email: string;
};

const MEMBERS: Member[] = [
  { img: "/images/alumni-council-1.jpg", name: "Yara Hassan",    year: "Class of 2008", email: "yara.hassan@alumni.alsson.com" },
  { img: "/images/alumni-council-2.jpg", name: "Omar El-Sherif", year: "Class of 2010", email: "omar.elsherif@alumni.alsson.com" },
  { img: "/images/alumni-council-3.jpg", name: "Layla Mansour",  year: "Class of 2012", email: "layla.mansour@alumni.alsson.com" },
  { img: "/images/alumni-council-4.jpg", name: "Karim Adel",     year: "Class of 2014", email: "karim.adel@alumni.alsson.com" },
  { img: "/images/alumni-council-5.jpg", name: "Salma Younes",   year: "Class of 2016", email: "salma.younes@alumni.alsson.com" },
  { img: "/images/alumni-council-6.jpg", name: "Ziad Farouk",    year: "Class of 2018", email: "ziad.farouk@alumni.alsson.com" },
  { img: "/images/alumni-council-7.jpg", name: "Nour Ibrahim",   year: "Class of 2020", email: "nour.ibrahim@alumni.alsson.com" },
  { img: "/images/alumni-council-8.jpg", name: "Tarek Saleh",    year: "Class of 2022", email: "tarek.saleh@alumni.alsson.com" },
];

const INITIAL_COUNT = 4;

/** EA Alumni Council photo grid — Figma node 11470:39574.
 *
 *  Desktop has a hover state revealing the member's name, class year and email.
 *  On mobile (no hover) the user taps a card to reveal the same overlay; an
 *  "info" affordance on each card hints at the interaction. Tapping the active
 *  card again — or any other card — toggles the overlay. */
export default function CouncilGrid() {
  const [showAll, setShowAll] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const visible = showAll ? MEMBERS : MEMBERS.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((m, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={m.img}
              type="button"
              onClick={() => setActiveIdx(isActive ? null : i)}
              aria-expanded={isActive}
              aria-label={`${m.name} — ${m.year}. Tap to ${isActive ? "hide" : "show"} contact details.`}
              className="relative block w-full text-left rounded-[16px] overflow-hidden aspect-[3/4] bg-[#E6E6E6]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0089B7]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.img}
                alt={`EA Alumni Council member ${m.name}`}
                className="w-full h-full object-cover object-center"
              />

              {/* Resting state — subtle "tap for info" pill, bottom-left */}
              <span
                aria-hidden
                className={`absolute bottom-2 left-2 flex items-center gap-1
                            bg-black/55 backdrop-blur-sm text-white rounded-full pl-1 pr-2 py-0.5
                            transition-opacity duration-200 ${isActive ? "opacity-0" : "opacity-100"}`}
                style={{ fontSize: "12px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
                  <path d="M12 11v5M12 8v.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Tap
              </span>

              {/* Active overlay — gradient + name / year / email */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-3
                            transition-opacity duration-250 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,27,37,0) 35%, rgba(0,27,37,0.85) 75%, rgba(0,27,37,0.95) 100%)",
                }}
              >
                <p className="text-white font-medium leading-tight mb-0.5" style={{ fontSize: "14px" }}>
                  {m.name}
                </p>
                <p className="text-[#FFC53A] leading-tight mb-1.5" style={{ fontSize: "12px" }}>
                  {m.year}
                </p>
                <a
                  href={`mailto:${m.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/90 underline decoration-white/50 break-all leading-tight"
                  style={{ fontSize: "12px" }}
                >
                  {m.email}
                </a>
              </div>
            </button>
          );
        })}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 w-full flex items-center justify-center gap-2 rounded-full
                     border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                     active:bg-[#F5F5F5] transition-colors"
          style={{ height: "52px" }}
        >
          Show More Members
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
