import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ResultsSection from "@/components/academics/ResultsSection";
import StageGallery from "@/components/academics/StageGallery";
import UniversityMap from "@/components/academics/UniversityMap";

export const metadata: Metadata = {
  title: "American School — El Alsson International Schools",
  description:
    "American Education Redefined — a rigorous, student-centered curriculum aligned with AERO standards, preparing students for global universities through AP courses.",
};

const STATS = [
  { value: "+20", label: "Years Of Experience" },
  { value: "1270", label: "Students Every Year" },
  { value: "420", label: "Staff Members" },
  { value: "165", label: "Full Time Teachers" },
];

const STAGES = [
  {
    slug: "pre-school",
    title: "Pre-School and Pre-Kindergarten",
    img: "/images/stage-preschool.jpg",
  },
  {
    slug: "kindergarten",
    title: "Kindergarten and Grade 1",
    img: "/images/stage-kindergarten.jpg",
  },
  {
    slug: "elementary",
    title: "Elementary School (G2-G5)",
    img: "/images/stage-elementary.jpg",
  },
  {
    slug: "middle-school",
    title: "Middle School (G6-G8)",
    img: "/images/stage-middle.jpg",
  },
  {
    slug: "high-school",
    title: "High School (G9-G12)",
    img: "/images/stage-high.jpg",
  },
];


export default function AmericanSchoolPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col bg-[#F2F9FB] overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        <div className="section-padding pt-8 pb-6 flex flex-col items-center text-center">
          <ScrollReveal>
            <span
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
              style={{ fontWeight: 400 }}
            >
              American School
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              American Education Redefined
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] max-w-[360px] mx-auto">
              A rigorous, student-centered curriculum aligned with AERO standards,
              preparing students for global universities through AP courses.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="w-full self-stretch">
            <div className="flex flex-col gap-3 w-full mt-6">
              <Link
                href="/admissions/apply"
                className="w-full flex items-center justify-center rounded-full
                           bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-[#006E92] transition-colors"
                style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
              >
                Apply Now
              </Link>
              <Link
                href="/admissions#tour"
                className="w-full flex items-center justify-center rounded-full
                           border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-white/60 transition-colors"
                style={{ height: "52px" }}
              >
                Start Virtual Tour
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="w-full flex-1 overflow-hidden relative" style={{ minHeight: "240px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/american-hero.jpg"
            alt="American School students"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <div className="grid grid-cols-2 gap-6">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div>
                <p className="text-[#0A0A0A] font-medium" style={{ fontSize: "36px", lineHeight: 1.1 }}>
                  {s.value}
                </p>
                <p className="text-[#525252] text-[14px] mt-1">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── El Alsson Difference ─────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-3">
        <ScrollReveal>
          <div className="relative rounded-[20px] overflow-hidden" style={{ minHeight: "560px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/american-difference.jpg"
              alt="Students learning"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              className="relative z-10 flex flex-col justify-end p-5 min-h-[560px]"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 60%, transparent 80%)" }}
            >
              <p className="text-[#FAFAFA] text-[14px] mb-1">Our Legacy of Excellence</p>
              <h2 style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }} className="text-[#FAFAFA]">
                El Alsson{" "}
                <span style={{ color: "#0089B7", fontWeight: 700 }}>Difference</span>
              </h2>
              <p className="text-[#FAFAFA] text-[14px] leading-[1.6] mt-3 opacity-90">
                The curriculum of the American International School is modeled on a
                typical American school program and meets leading US academic
                standards including the Common Core State Standards for English
                Language Arts, Literacy and Mathematics, and the Next Generation
                Science Standards and the C3 Social Studies Standards.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Academic Stages ──────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12" id="stages">
        <ScrollReveal>
          <h2
            className="text-center mb-2"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            Academic{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Stages</span>
          </h2>
          <p className="text-[#525252] text-[14px] text-center leading-[1.6] mb-6">
            From the early years to high school graduation, we guide students at every step.
          </p>
        </ScrollReveal>

        <StageGallery items={STAGES} />
      </section>

      {/* ── Outperforming The Global Standards ────────────────── */}
      <ResultsSection />

      {/* ── University Matriculation ─────────────────────────── */}
      <section
        className="section-padding pt-12 pb-12"
        id="matriculation"
        style={{ background: "linear-gradient(to bottom, #004B67, #001B25)" }}
      >
        <ScrollReveal>
          <h2
            className="text-center mb-2 text-[#FAFAFA]"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            El Alsson University{" "}
            <span style={{ color: "#FFC53A", fontWeight: 700 }}>Matriculation</span>
          </h2>
          <p className="text-[#A3A3A3] text-[14px] text-center leading-[1.6] mb-6">
            Congratulations to all of our AP students on their results!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <UniversityMap />
        </ScrollReveal>
      </section>

      {/* ── Pre-footer CTA ───────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
