import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import StoryTimeline from "@/components/about/StoryTimeline";
import MissionVision from "@/components/about/MissionVision";
import ValuesAccordion from "@/components/about/ValuesAccordion";
import StaffSection from "@/components/about/StaffSection";

export const metadata: Metadata = {
  title: "About Us — El Alsson International Schools",
  description:
    "Education for Life — the story of El Alsson. Our history, mission, values, accreditations, and the people who make Alsson work every day.",
};

const ACCREDITATION_LOGOS = [
  { src: "/images/accred-1.png", alt: "Accreditation partner" },
  { src: "/images/accred-2.png", alt: "Accreditation partner" },
  { src: "/images/accred-3.png", alt: "Accreditation partner" },
  { src: "/images/accred-4.png", alt: "Accreditation partner" },
  { src: "/images/accred-5.png", alt: "Accreditation partner" },
];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  // track is duplicated so the -50% translate loops seamlessly
  const logos = [...ACCREDITATION_LOGOS, ...ACCREDITATION_LOGOS];
  return (
    <div className="relative overflow-hidden">
      <div className={`marquee-track items-center ${reverse ? "reverse" : ""}`}>
        {logos.map((logo, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={`${logo.src}-${i}`}
            src={logo.src}
            alt={i < ACCREDITATION_LOGOS.length ? logo.alt : ""}
            aria-hidden={i >= ACCREDITATION_LOGOS.length}
            className="h-10 w-auto shrink-0 object-contain"
          />
        ))}
      </div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-[#FAFAFA] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-[#FAFAFA] to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[78svh] flex flex-col overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-hero.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div className="relative flex-1 flex flex-col justify-end section-padding pb-10 pt-28">
          <p className="text-[#FAFAFA] text-[16px] leading-[1.5] mb-3">About Us</p>
          <h1
            className="text-[#FAFAFA] mb-7"
            style={{ fontSize: "34px", lineHeight: "1.2", fontWeight: 500 }}
          >
            Education for Life
            <br />
            The Story of El Alsson
          </h1>
          <div className="flex flex-col gap-3">
            <Link
              href="/admissions/apply"
              className="w-full flex items-center justify-center rounded-full bg-[#0089B7]
                         text-white text-[16px] font-medium tracking-[0.64px] uppercase
                         h-14 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)]
                         active:bg-[#006E92] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#tour"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#FAFAFA] text-[#FAFAFA]
                         text-[16px] font-medium tracking-[0.64px] uppercase
                         h-14 active:bg-white/10 transition-colors"
            >
              Start Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Story timeline (client island) ───────────────────────────── */}
      <StoryTimeline />

      {/* ── Mission / Vision toggle (client island) ──────────────────────── */}
      <MissionVision />

      {/* ── El Alsson Values (client island) ─────────────────────────────── */}
      <ValuesAccordion />

      {/* ── Facilities — same section as home ────────────────────────────── */}
      <FacilitiesSection />

      {/* ── Accreditations & Memberships ─────────────────────────────────── */}
      <section id="accreditations" className="bg-[#FAFAFA] py-12 overflow-hidden">
        <ScrollReveal>
          <div className="section-padding text-center mb-8">
            <h2 className="mb-3" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 700 }}>
              Accreditations &amp; Memberships
            </h2>
            <p className="text-[#525252] text-[16px] leading-[1.6]">
              El Alsson maintains the highest international standards, verified by the
              world&rsquo;s leading educational bodies.
            </p>
          </div>
          <div className="flex flex-col gap-7 mb-8">
            <LogoRow />
            <LogoRow reverse />
          </div>
          <div className="section-padding">
            <Link
              href="/about/accreditation-report"
              className="w-full flex items-center justify-center gap-2 rounded-full
                         border border-[#262626] text-[#262626] text-[14px] font-medium bg-white
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              View our latest BSO Accreditation Report
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── The Founder's Vision ─────────────────────────────────────────── */}
      <section
        id="directors-message"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #001B25 0%, #003346 100%)" }}
      >
        <div className="section-padding pt-12">
          <ScrollReveal>
            {/* quote mark */}
            <svg width="56" height="42" viewBox="0 0 93 70" fill="none" className="mb-6" aria-hidden>
              <path
                opacity="0.4"
                d="M34.1422 0V9.67105C28.471 11.2061 23.4512 14.1612 19.0828 18.5362C14.7911 22.8344 12.6452 27.0175 12.6452 31.0855C12.6452 34.0789 13.7182 35.5757 15.864 35.5757C16.4005 35.5757 17.4734 35.3454 19.0828 34.8849C20.6922 34.4243 22.1867 34.1941 23.5661 34.1941C28.9308 34.1941 33.0692 36.0362 35.9815 39.7204C38.9703 43.3278 40.4648 47.2423 40.4648 51.4638C40.4648 56.7599 38.6638 61.1732 35.0618 64.7039C31.5365 68.2346 27.2831 70 22.3016 70C15.4042 70 9.96292 67.5055 5.97775 62.5164C1.99258 57.4507 0 50.9265 0 42.9441C0 33.5033 3.02719 24.7149 9.08158 16.5789C15.136 8.44298 23.4895 2.91667 34.1422 0ZM86.6774 0V9.67105C81.466 11.0526 76.5612 13.8542 71.9629 18.0757C67.4413 22.2971 65.1805 26.6338 65.1805 31.0855C65.1805 34.0789 66.2534 35.5757 68.3993 35.5757C68.8591 35.5757 69.8937 35.3454 71.5031 34.8849C73.1125 34.4243 74.6069 34.1941 75.9864 34.1941C81.4277 34.1941 85.6045 36.0362 88.5167 39.7204C91.5056 43.3278 93 47.2423 93 51.4638C93 56.5296 91.2373 60.9046 87.712 64.5888C84.2633 68.1963 79.9716 70 74.8368 70C67.9394 70 62.4981 67.5055 58.513 62.5164C54.5278 57.4507 52.5352 50.9265 52.5352 42.9441C52.5352 33.5033 55.5624 24.7149 61.6168 16.5789C67.6712 8.44298 76.0247 2.91667 86.6774 0Z"
                fill="#0089B7"
              />
            </svg>
            <h2 className="text-white mb-5" style={{ fontSize: "32px", lineHeight: "1.2", fontWeight: 700 }}>
              The Founder&rsquo;s{" "}
              <span style={{ color: "#FFC53A" }}>Vision</span>
            </h2>
            <p className="text-white text-[16px] leading-[1.6] mb-4">
              A good school is about teaching the whole child &ndash; helping students grow into
              thoughtful, capable, and confident people.
            </p>
            <p className="text-white text-[16px] leading-[1.6] mb-5">
              El Alsson was built on this philosophy. Alongside strong academics, our founders
              believed in character, confidence, and compassion. They introduced extracurricular
              activities, clubs, sports, music, drama, trips, and leadership opportunities &ndash;
              all as essential parts of a real education. They believed schools should nurture
              honesty, morals, responsibility, and the ability to listen to others and lead with
              kindness.
            </p>
            <p className="text-[#FFC53A] text-[16px] leading-[1.5]">
              This vision has guided every step of El Alsson&rsquo;s journey.
            </p>
          </ScrollReveal>
        </div>
        {/* Founder photo — full bleed below the text block */}
        <div className="relative mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/founder.png"
            alt="The founder of El Alsson"
            className="w-full h-[380px] object-cover object-center"
          />
          {/* soft top blend into the section background */}
          <div
            className="absolute inset-x-0 top-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #001B25, transparent)" }}
          />
        </div>
      </section>

      {/* ── Staff In Action (client island) ──────────────────────────────── */}
      <StaffSection />

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />

    </div>
  );
}
