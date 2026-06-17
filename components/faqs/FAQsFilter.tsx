"use client";

import { useState } from "react";

const CATEGORIES = ["All FAQs", "Admissions", "Academics", "Education", "Students", "Parents"];

const FAQS: { q: string; a: string; category: string }[] = [
  // Admissions
  {
    q: "What is the admissions process at El Alsson?",
    a: "The process begins with submitting an online application through our website. Once reviewed, qualified applicants are invited for an assessment and interview. Our admissions team will then notify families of the outcome and guide them through enrollment steps including document submission and fee payment.",
    category: "Admissions",
  },
  {
    q: "What age does my child need to be to enroll?",
    a: "Children must turn 4 by September 1st to enter Pre-Kindergarten and 5 by September 1st for Kindergarten. American Elementary begins in Grade 1 at age 6. Please refer to our Age Comparison Chart on the Admissions page for the complete breakdown by grade level.",
    category: "Admissions",
  },
  {
    q: "What about the First Day of School?",
    a: "Orientation days are held prior to the official start of the academic year. New students receive a welcome pack with their schedule, locker assignment, and a school map. Parents are encouraged to attend the welcome morning to meet form teachers and ask questions.",
    category: "Admissions",
  },
  {
    q: "Is there an entrance exam for new students?",
    a: "Yes. Students applying for Grade 1 and above complete an age-appropriate academic assessment in English and Math. The assessment is not a pass/fail exam — it helps us understand each child's learning level so we can support them effectively from day one.",
    category: "Admissions",
  },
  // Academics
  {
    q: "What makes the American curriculum different?",
    a: "Our American program emphasizes critical thinking, individual voice, and practical application. Students learn to question and create. The curriculum is flexible enough to allow for personalization while maintaining academic standards recognized by universities worldwide.",
    category: "Academics",
  },
  {
    q: "When do students take the AP exams?",
    a: "AP courses are available in Grades 10 through 12. Exams are administered in May each year. Students receive preparation throughout the academic year, and our teachers have extensive experience guiding students to success on these standardized assessments.",
    category: "Academics",
  },
  {
    q: "Can students pursue both AP and IB?",
    a: "Yes. Many of our high school students take AP courses in Grades 10 and 11, then transition to the IB Diploma program in Grade 12. This dual pathway creates strong preparation for selective universities and demonstrates academic versatility.",
    category: "Academics",
  },
  {
    q: "How is student progress communicated?",
    a: "Parents receive detailed progress reports three times per year. Teachers are available for conferences, and our Parent Portal provides real-time access to grades and assignments. We believe in transparent communication about each student's academic and personal development.",
    category: "Academics",
  },
  // Education
  {
    q: "What about the School Uniform?",
    a: "El Alsson has a smart uniform policy that applies to all students from Pre-K through Grade 12. The uniform reflects the school's values of equality and professionalism. Specific uniform requirements vary by school stage — full details are available on the Parents page.",
    category: "Education",
  },
  {
    q: "Where do I get the Uniform from?",
    a: "The official El Alsson uniform is available exclusively from our On-Campus Uniform Shop. This ensures consistent quality and accurate sizing. The shop is open during school hours and at designated times during registration periods.",
    category: "Education",
  },
  {
    q: "What are Junior Uniforms and Senior Uniforms?",
    a: "Junior Uniforms are worn by students in Pre-K through Grade 5, while Senior Uniforms apply to Grades 6 through 12. The distinction reflects the different needs of younger and older students. Each set follows the same colour palette but has stage-appropriate styling.",
    category: "Education",
  },
  {
    q: "Do I need to label my child's uniform?",
    a: "Yes, labelling all uniform items with your child's name is strongly recommended. The school handles a large number of items in lost property each week, and clear labels help us return belongings quickly. Iron-on name labels are available at the Uniform Shop.",
    category: "Education",
  },
  // Students
  {
    q: "What extracurricular activities are available?",
    a: "We offer over 40 clubs and activities spanning sports, performing arts, robotics, debate, community service, and more. Students are encouraged to explore their interests and develop leadership skills outside the classroom. Most students participate in at least two activities.",
    category: "Students",
  },
  {
    q: "How are school houses organised?",
    a: "Every student is assigned to one of four school houses upon enrollment. Houses compete across academic, sports, and cultural events throughout the year. House membership builds a sense of community and friendly rivalry that many alumni remember as a highlight of their time at El Alsson.",
    category: "Students",
  },
  {
    q: "Is there a Model United Nations programme?",
    a: "Yes. El Alsson's MUN programme is one of the most active in Egypt, with students participating in national and international conferences annually. The programme develops public speaking, research, and diplomacy skills — and many participants have gone on to represent Egypt in global competitions.",
    category: "Students",
  },
  // Parents
  {
    q: "Are there parent-teacher meetings?",
    a: "Parent-Teacher Conference days are held three times per year following each reporting period. These are scheduled appointments allowing parents to meet every subject teacher. Additional one-on-one meetings can be arranged at any time by contacting the relevant teacher or the academic office.",
    category: "Parents",
  },
  {
    q: "Is there a school bus service?",
    a: "Yes. El Alsson operates a fleet of buses covering major areas across Greater Cairo and Giza. Bus routes and fees are published at the start of each academic year. Parents can also track bus locations in real time using the El Alsson Parents App.",
    category: "Parents",
  },
  {
    q: "What is the school calendar like?",
    a: "The academic year runs from September to June and follows a three-term structure. The calendar includes Egyptian national holidays, mid-term breaks, and end-of-term examinations. A full academic calendar is published before the start of each year and is accessible through the Parent Portal.",
    category: "Parents",
  },
];

export default function FAQsFilter() {
  const [activeCategory, setActiveCategory] = useState("All FAQs");
  const [open, setOpen] = useState<number | null>(null);

  const filtered =
    activeCategory === "All FAQs"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section className="bg-[#FAFAFA] section-padding py-12">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpen(null);
            }}
            className="px-4 rounded-full text-[14px] font-medium transition-colors"
            style={{
              height: "36px",
              background: activeCategory === cat ? "#FFC53A" : "#F5F5F5",
              color: activeCategory === cat ? "#0A0A0A" : "#525252",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="flex flex-col gap-3">
        {filtered.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={`${activeCategory}-${i}`}
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
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <path
                        d="M7 2v10M2 7h10"
                        stroke="#0A0A0A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
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
    </section>
  );
}
