"use client";

import { useState } from "react";
import ScrollReveal from "@/components/home/ScrollReveal";

const CATEGORIES = ["All", "Leadership", "American", "British", "Administration"] as const;
type Category = (typeof CATEGORIES)[number];

const STAFF = [
  { name: "Karim Rogers",    role: "CEO",                       email: "krogers@alsson.com",    category: "Leadership",     image: "/images/staff-1.jpg" },
  { name: "Sarah Mitchell",  role: "American School Principal", email: "smitchell@alsson.com",  category: "American",       image: "/images/staff-2.jpg" },
  { name: "James Whitfield", role: "British School Principal",  email: "jwhitfield@alsson.com", category: "British",        image: "/images/staff-3.jpg" },
  { name: "Dina Hassan",     role: "Head of Admissions",        email: "dhassan@alsson.com",    category: "Administration", image: "/images/staff-4.jpg" },
  { name: "Omar El Shamy",   role: "Deputy Director",           email: "oelshamy@alsson.com",   category: "Leadership",     image: "/images/staff-3.jpg" },
  { name: "Emily Carter",    role: "Elementary Coordinator",    email: "ecarter@alsson.com",    category: "American",       image: "/images/staff-4.jpg" },
  { name: "Oliver Bennett",  role: "Head of Secondary",         email: "obennett@alsson.com",   category: "British",        image: "/images/staff-1.jpg" },
  { name: "Mona Khalil",     role: "Operations Manager",        email: "mkhalil@alsson.com",    category: "Administration", image: "/images/staff-2.jpg" },
];

const INITIAL_VISIBLE = 4;

export default function StaffSection() {
  const [category, setCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = category === "All" ? STAFF : STAFF.filter((s) => s.category === category);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <section className="bg-[#F5F5F5] section-padding py-12">
      <ScrollReveal>
        <h2 className="text-center mb-2" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
          Staff In <span style={{ color: "#0089B7", fontWeight: 700 }}>Action</span>
        </h2>
        <p className="text-[#525252] text-[16px] leading-[1.5] text-center mb-6">
          The people who make Alsson work every day
        </p>
      </ScrollReveal>

      {/* Filter chips — wrap naturally, no scrollable container */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setShowAll(false);
            }}
            className="px-4 py-1.5 text-[12px] font-medium rounded-full border transition-colors"
            style={
              category === c
                ? { background: "#0089B7", borderColor: "#0089B7", color: "#fff" }
                : { background: "#fff", borderColor: "#D4D4D4", color: "#525252" }
            }
          >
            {c}
          </button>
        ))}
      </div>

      {/* 2-column staff grid */}
      <div className="grid grid-cols-2 gap-3">
        {visible.map((person) => (
          <div
            key={person.email}
            className="relative rounded-[16px] overflow-hidden flex flex-col justify-end p-2 bg-[#E5E5E5]"
            style={{ aspectRatio: "3/4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={person.image}
              alt={person.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <a
              href={`mailto:${person.email}`}
              className="relative bg-white rounded-[10px] px-2.5 py-2 flex items-center justify-between gap-1.5"
            >
              <span className="min-w-0">
                <span className="block text-[#0A0A0A] font-medium text-[12px] leading-[1.4] truncate">
                  {person.name}
                </span>
                <span className="block text-[#737373] text-[12px] leading-[1.4] truncate">
                  {person.role}
                </span>
              </span>
              <span className="w-7 h-7 rounded-full bg-[#E5E5E5] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* View More */}
      {filtered.length > INITIAL_VISIBLE && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full flex items-center justify-center gap-2 rounded-full mt-5
                     border border-[#262626] text-[#262626] text-[16px] font-medium bg-white
                     active:bg-[#F5F5F5] transition-colors"
          style={{ height: "52px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          View More
        </button>
      )}
    </section>
  );
}
