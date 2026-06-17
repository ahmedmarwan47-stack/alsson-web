"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "What makes the American curriculum different?",
    a: "Our American program emphasizes critical thinking, individual voice, and practical application. Students learn to question and create. The curriculum is flexible enough to allow for personalization while maintaining academic standards recognized by universities worldwide.",
  },
  {
    q: "When do students take the AP exams?",
    a: "AP courses are available in grades 10 through 12. Exams are administered in May each year. Students receive preparation throughout the academic year, and our teachers have extensive experience guiding students to success on these standardized assessments.",
  },
  {
    q: "Can students pursue both AP and IB?",
    a: "Yes. Many of our high school students take AP courses in grades 10 and 11, then transition to the IB Diploma program in grade 12. This dual pathway creates strong preparation for selective universities and demonstrates academic versatility.",
  },
  {
    q: "What extracurricular activities are available?",
    a: "We offer over 40 clubs and activities spanning sports, performing arts, robotics, debate, community service, and more. Students are encouraged to explore their interests and develop leadership skills outside the classroom. Most students participate in at least two activities.",
  },
  {
    q: "How is student progress communicated?",
    a: "Parents receive detailed progress reports three times per year. Teachers are available for conferences, and our Parent Portal provides real-time access to grades and assignments. We believe in transparent communication about each student's academic and personal development.",
  },
];

export default function FAQsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#FAFAFA] section-padding py-12">
      {/* Header */}
      <p className="text-[12px] font-bold text-[#0A0A0A] mb-2 tracking-wide">Support</p>
      <h2 className="mb-2" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
        Frequently Asked{" "}
        <span style={{ color: "#0089B7", fontWeight: 700 }}>Questions</span>
      </h2>
      <p className="text-[#525252] text-[16px] leading-[1.5] mb-6">
        Find answers about our curricula, admissions, and student life.
      </p>

      {/* Accordion */}
      <div className="flex flex-col gap-3 mb-8">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-[20px] p-4 transition-colors duration-300"
              style={{ background: isOpen ? "#E5F3F7" : "#F5F5F5" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left"
              >
                <div className="flex items-center gap-3">
                  <p
                    className="flex-1 text-[16px] leading-[1.5] text-[#0A0A0A]"
                    style={{ fontWeight: 500 }}
                  >
                    {item.q}
                  </p>
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ background: isOpen ? "white" : "#E5E5E5" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <path d="M7 2v10M2 7h10" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-[#404040] text-[14px] leading-[1.6] mt-3 text-left">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/faqs"
        className="w-full flex items-center justify-center gap-2 rounded-full
                   border border-[#262626] text-[#262626] text-[16px] font-medium
                   active:bg-[#F5F5F5] transition-colors"
        style={{ height: "52px" }}
      >
        All FAQs
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
