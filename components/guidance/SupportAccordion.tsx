"use client";

import { useState } from "react";

const DEPARTMENTS = [
  {
    number: "01",
    title: "American School (Grades 1-8)",
    paragraphs: [
      "The Learning Support Services Department at El Alsson American International School caters to the needs of students in Grades 1-8 who have mild learning disabilities and/or who have trouble accessing the curriculum due to English language deficiencies or need for specific teaching styles. The department's goal is to equip and develop these students so they can cope with the demands of the American curriculum independently by the end of Grade 8.",
      "A student is eligible for Learning Support services if s/he:\na. has a mild, identified learning disability and/or,\nb. has deficiencies in English language skills which hinder access to the curriculum.",
    ],
    pills: [
      "Cognitive and achievement testing",
      "Individualized Educational Plans (IEPs)",
      "Extra time and laptop accommodations",
      "1-on-1 and small group instruction",
    ],
    img: "/images/guidance-support.jpg",
  },
  {
    number: "02",
    title: "British Primary School",
    paragraphs: [
      "The British Primary SEN department focuses on early identification and intervention, supporting pupils with additional learning needs within the EYFS and National Curriculum frameworks. Specialists work alongside class teachers so every child can access learning with confidence.",
    ],
    pills: [
      "Early screening and identification",
      "Individual support plans",
      "In-class and small group support",
      "Regular parent partnership meetings",
    ],
    img: "/images/guidance-individual.jpg",
  },
  {
    number: "03",
    title: "British Secondary School",
    paragraphs: [
      "From Year 7 through IGCSE and A Level, the Secondary Learning Support team helps students develop independent study strategies and arranges formal exam access accommodations, coordinating closely with subject teachers, parents, and exam boards.",
    ],
    pills: [
      "Exam access arrangements",
      "Study skills coaching",
      "Subject-specific intervention",
      "Sixth Form transition support",
    ],
    img: "/images/guidance-wellbeing.jpg",
  },
];

/** Learning Support Services accordion — Figma node 11470:40006.
 *  Open item: dark blue #003749 with white text + light pills + photo.
 *  Closed items: light rows with blue numbers. Grid-rows height animation (Pattern 6). */
export default function SupportAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // 01 open per the design

  return (
    <div className="-mx-5">
      {DEPARTMENTS.map((d, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={d.number}
            className="transition-colors duration-300"
            style={{ background: isOpen ? "#003749" : "transparent" }}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-5 text-left gap-3"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span
                  className="text-[16px] shrink-0 transition-colors"
                  style={{ color: isOpen ? "#E5F3F7" : "#0089B7" }}
                >
                  {d.number}
                </span>
                <span
                  className="text-[16px] leading-[1.35] font-medium transition-colors"
                  style={{ color: isOpen ? "#FAFAFA" : "#0A0A0A" }}
                >
                  {d.title}
                </span>
              </span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke={isOpen ? "#FAFAFA" : "#0A0A0A"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 flex flex-col gap-4">
                  {d.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="text-[#FAFAFA] text-[14px] leading-[1.6] whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {d.pills.map((pill) => (
                      <span key={pill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCE7F1] shrink-0" />
                        <span className="text-[#CCE7F1] text-[12px] font-medium">{pill}</span>
                      </span>
                    ))}
                  </div>
                  {d.img && (
                    <div className="rounded-[16px] overflow-hidden h-[200px] mt-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.img}
                        alt={`${d.title} learning support`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
