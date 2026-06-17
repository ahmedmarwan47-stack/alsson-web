import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import SupportAccordion from "@/components/guidance/SupportAccordion";
import InShotsSection from "@/components/ui/InShotsSection";

export const metadata: Metadata = {
  title: "Guidance & Student Services — El Alsson International Schools",
  description:
    "Supporting every student's academic journey, emotional wellbeing, and future — counseling, college guidance, and learning support services at El Alsson.",
};

const COUNSELING_ROWS = [
  {
    title: "Individual Counseling",
    body: "One-on-one sessions with a qualified School Counselor to support students through personal challenges including anxiety, family transitions, social difficulties, self-esteem, grief, and identity. Students may self-refer or be referred by a teacher or parent.",
    img: "/images/guidance-individual.jpg",
  },
  {
    title: "Group & Peer Programs",
    body: "Structured small-group sessions targeting social skill development, conflict resolution, and building resilience. Peer mentoring connects older students with younger students navigating school transitions, fostering a genuine culture of care across the community.",
    img: "/images/guidance-group.jpg",
  },
  {
    title: "Wellbeing Workshops & Crisis Support",
    body: "Proactive workshops on stress management, exam anxiety, digital wellbeing, and healthy relationships delivered across all year groups. In urgent situations, our counselors act quickly to assess, support, and coordinate with parents and external mental health professionals when needed.",
    img: "/images/guidance-wellbeing.jpg",
  },
];

const COLLEGE_FEATURES = [
  {
    icon: "/images/icon-creativity.svg",
    title: "University Fairs",
    body: "Meet representatives from leading universities worldwide at our annual on-campus fairs and info sessions.",
  },
  {
    icon: "/images/icon-distance-learning.svg",
    title: "Application Support",
    body: "Personalised help with applications, essays, references, and standardized test planning from Grade 9 onward.",
  },
];

const SHOTS = [
  "/images/alumni-insta-1.jpg",
  "/images/alumni-insta-2.jpg",
  "/images/alumni-insta-3.jpg",
  "/images/alumni-insta-4.jpg",
  "/images/alumni-insta-5.jpg",
  "/images/alumni-insta-6.jpg",
];

export default function GuidancePage() {
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
              Student Wellbeing
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Guidance &
              <br />
              Student Services
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Supporting every student&apos;s academic journey, emotional wellbeing, and future — from personalised learning plans to university placement.
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
            src="/images/guidance-hero.jpg"
            alt="El Alsson students with a school counselor"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Social & Emotional Counseling ────────────────────────────────── */}
      <section id="counseling" className="bg-[#FAFAFA] py-12">
        <ScrollReveal>
          <div className="section-padding text-center mb-8">
            <h2
              className="mb-3"
              style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
            >
              Social & Emotional{" "}
              <span style={{ color: "#0089B7", fontWeight: 700 }}>Counseling</span>
            </h2>
            <p className="text-[#404040] text-[16px] leading-[1.6]">
              Our School Counselors provide a safe, confidential space for students to develop the social and emotional skills they need — in school and in life.
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-[#F5F5F5] section-padding py-8 flex flex-col gap-10">
          {COUNSELING_ROWS.map((row, i) => (
            <ScrollReveal key={row.title} delay={i * 80}>
              <div>
                <div className="rounded-[16px] overflow-hidden h-[240px] mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={row.img}
                    alt={row.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3
                  className="text-[#171717] mb-2"
                  style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: 500 }}
                >
                  {row.title}
                </h3>
                <p className="text-[#404040] text-[14px] leading-[1.6]">{row.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── College Counseling (dark) ────────────────────────────────────── */}
      <section id="college" className="bg-[#001B25] section-padding py-12">
        <ScrollReveal>
          <div className="rounded-[16px] overflow-hidden h-[280px] mb-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guidance-college.jpg"
              alt="El Alsson graduate celebrating university acceptance"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-2"
            style={{ fontWeight: 400 }}
          >
            College Counseling
          </span>
          <h2
            className="text-[#FAFAFA] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Your Path{" "}
            <span style={{ color: "#FFC53A", fontWeight: 700 }}>To University</span>
          </h2>
          <p className="text-[#D4D4D4] text-[16px] leading-[1.6] mb-8">
            Comprehensive, personalised guidance from Grade 9 through to university placement — helping every student find the institution and programme that is right for them.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/15 pt-7 flex flex-col gap-6">
          {COLLEGE_FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" aria-hidden className="w-12 h-12 shrink-0 object-contain" />
                <div>
                  <p className="text-[#FAFAFA] text-[16px] font-medium mb-1">{f.title}</p>
                  <p className="text-[#D4D4D4] text-[14px] leading-[1.55]">{f.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Learning Support Services ────────────────────────────────────── */}
      <section id="support" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <div className="text-center mb-7">
            <h2
              className="mb-3"
              style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
            >
              Learning Support{" "}
              <span style={{ color: "#0089B7", fontWeight: 700 }}>Services</span>
            </h2>
            <p className="text-[#404040] text-[16px] leading-[1.6]">
              El Alsson is dedicated to inclusive education, ensuring students with mild learning disabilities or English language needs reach their full potential. Our dedicated departments coordinate closely with teachers and parents.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <SupportAccordion />
        </ScrollReveal>
      </section>

      {/* ── El-Alsson In Shots (Instagram) ───────────────────────────────── */}
      <InShotsSection titlePrefix="El-Alsson" photos={SHOTS} />

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
