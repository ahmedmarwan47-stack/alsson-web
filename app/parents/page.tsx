import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import UniformToggle from "@/components/parents/UniformToggle";
import PoliciesGrid from "@/components/parents/PoliciesGrid";
import ParentsAppSection from "@/components/parents/ParentsAppSection";

export const metadata: Metadata = {
  title: "Parents — El Alsson International Schools",
  description:
    "Welcome to the El Alsson family — uniform & dress code, parent council, school policies and the Parents App.",
};

const UNIFORM_RULES = [
  { type: "check", text: "Veils must be short, and strictly navy blue or white." },
  { type: "check", text: "Boys must be clean-shaven with short hair." },
  { type: "check", text: "All belongings MUST be labeled." },
  { type: "alert", text: "No denim, jean-style trousers, or track pants." },
  { type: "alert", text: "No sandals or slip-on shoes." },
  { type: "alert", text: "No makeup, nail polish, dyed/braided hair, or non-uniform caps." },
  { type: "alert", text: "No jewelry (except a watch and small ear studs for girls)." },
];

const UNIFORM_NOTES = [
  {
    title: "Out of Uniform Pass",
    body: "If a child cannot wear the uniform for a valid reason, they must bring a note, show it at registration, and obtain a day-pass from the International Office.",
  },
  {
    title: "Senior Dress Code",
    body: "Seniors in Grades 11-12 and Years 12-13 follow a specific business-casual dress code communicated by leadership.",
  },
  {
    title: "PE Kit",
    body: "Students Grade 2 / Year 3 and up must attend PE in the proper school PE kit.",
  },
];

const COUNCIL_FEATURES = [
  {
    icon: "/images/icon-creativity.svg",
    title: "Meaningful Impact",
    body: "Contribute your time and expertise to directly enrich student programs and campus life.",
  },
  {
    icon: "/images/icon-distance-learning.svg",
    title: "Collaborative Growth",
    body: "Work hand-in-hand with educators to foster a supportive, thriving school environment.",
  },
];

/** Green check-circle / red alert-circle — 20px per the SVG icon scale rule. */
function RuleIcon({ type }: { type: string }) {
  const stroke = type === "check" ? "#3FAC33" : "#CA4141";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.5" />
      {type === "check" ? (
        <path
          d="M8 12.5l2.5 2.5L16 9.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M12 8v4.5M12 16h.01"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ParentsPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-[#F2F9FB] grid"
        style={{
          minHeight: "calc(100svh - 64px)",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <ScrollReveal>
          <div className="section-padding pt-8 pb-7 text-center">
            <span
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
              style={{ fontWeight: 400 }}
            >
              Beyond The Classes - Parents
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Welcome To The El Alsson Family
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              We hope your children enjoy their school life just as the 44 graduating classes who preceded them! This section clarifies essential information to help new parents navigate the start of the school year.
            </p>
            <div className="flex flex-col gap-3">
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
          </div>
        </ScrollReveal>
        <div className="w-full h-full overflow-hidden relative min-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/parents-hero.jpg"
            alt="El Alsson parents and students together on campus"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Uniform & Dress Code ─────────────────────────────────────────── */}
      <section id="uniform" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Uniform &{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Dress Code</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6">
            Students Grade 5 / Year 6 and lower wear the Junior uniform, while students Grade 6 / Year 7 and higher wear the Senior uniform.
          </p>
          <UniformToggle />
        </ScrollReveal>

        {/* The Rules */}
        <ScrollReveal>
          <h3
            className="text-[#171717] mt-10 mb-4"
            style={{ fontSize: "20px", lineHeight: "1.3", fontWeight: 700 }}
          >
            The Rules
          </h3>
          <ul className="flex flex-col gap-3">
            {UNIFORM_RULES.map((r) => (
              <li key={r.text} className="flex items-start gap-2.5">
                <RuleIcon type={r.type} />
                <span className="text-[#262626] text-[14px] leading-[1.55]">{r.text}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Exceptions & Notes */}
        <ScrollReveal>
          <h3
            className="text-[#171717] mt-10 mb-4"
            style={{ fontSize: "20px", lineHeight: "1.3", fontWeight: 700 }}
          >
            Exceptions & Notes
          </h3>
          <div className="bg-[#F5F5F5] rounded-[16px] p-5 flex flex-col gap-5">
            {UNIFORM_NOTES.map((n) => (
              <div key={n.title}>
                <p className="text-[#171717] text-[16px] font-medium mb-1">{n.title}</p>
                <p className="text-[#525252] text-[14px] leading-[1.55]">{n.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* On-Campus Uniform Shop */}
        <ScrollReveal>
          <div className="bg-[#F2F9FB] rounded-[16px] p-5 mt-6">
            <h3
              className="text-[#171717] mb-1.5"
              style={{ fontSize: "20px", lineHeight: "1.3", fontWeight: 700 }}
            >
              On-Campus Uniform Shop
            </h3>
            <p className="text-[#404040] text-[14px] leading-[1.55] mb-5">
              Open working days 8:00 AM – 2:40 PM. Custom larger sizes take up to 3 weeks to fulfill.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="w-full flex items-center justify-center rounded-full
                           bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-[#006E92] transition-colors"
                style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
              >
                View Size Chart
              </a>
              <a
                href="#"
                className="w-full flex items-center justify-center rounded-full
                           border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-white/60 transition-colors"
                style={{ height: "52px" }}
              >
                View Uniform Policy
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Parent Council ───────────────────────────────────────────────── */}
      <section id="council" className="bg-[#001B25] section-padding py-12">
        <ScrollReveal>
          <div className="rounded-[16px] overflow-hidden h-[280px] mb-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/parent-council.jpg"
              alt="El Alsson parent council members"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-2"
            style={{ fontWeight: 400 }}
          >
            El Alsson Parent Council
          </span>
          <h2
            className="text-[#FAFAFA] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Your Voice in Our{" "}
            <span style={{ color: "#FFC53A", fontWeight: 700 }}>School&apos;s Future</span>
          </h2>
          <p className="text-[#D4D4D4] text-[16px] leading-[1.6] mb-6">
            We are excited to build a strong, active, and engaged parent council to enrich our children&apos;s time here. Increasing the culture of volunteerism has a huge impact on school spirit and creates incredible community activities.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 rounded-full
                         bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Join the Council
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 rounded-full
                         border border-[#FAFAFA] text-[#FAFAFA] text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-white/10 transition-colors"
              style={{ height: "52px" }}
            >
              Presentation
              <DownloadIcon />
            </a>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/15 pt-7 flex flex-col gap-6">
          {COUNCIL_FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" aria-hidden className="w-12 h-12 shrink-0" />
                <div>
                  <p className="text-[#FAFAFA] text-[16px] font-medium mb-1">{f.title}</p>
                  <p className="text-[#D4D4D4] text-[14px] leading-[1.55]">{f.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── School Policies ──────────────────────────────────────────────── */}
      <section id="policies" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            School{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Policies</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6 text-center">
            Below are the key Whole School policies. Distinct academic policies for the British and American schools are available in their respective handbooks.
          </p>
          <PoliciesGrid />
        </ScrollReveal>
      </section>

      {/* ── Parents App (flying widgets + carousel) ─────────────────────── */}
      <ParentsAppSection />

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
