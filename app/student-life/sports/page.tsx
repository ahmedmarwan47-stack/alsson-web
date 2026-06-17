import type { Metadata } from "next";
import Link from "next/link";
import SportGallery from "@/components/student-life/SportGallery";
import CompetitionsSection from "@/components/student-life/CompetitionsSection";
import HouseSystem from "@/components/student-life/HouseSystem";
import InShotsSection from "@/components/ui/InShotsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Sports & Wellbeing — El Alsson School",
  description:
    "Physical health and mental wellbeing are cornerstones of the Alssonian experience — athletics, intramural sports, and mindfulness programs.",
};

const BASKETBALL_PHOTOS = [
  { src: "/images/sl-basketball-1.jpg", alt: "Basketball at El Alsson" },
  { src: "/images/sl-basketball-2.jpg", alt: "Basketball team practice" },
  { src: "/images/sl-basketball-3.jpg", alt: "Basketball game" },
  { src: "/images/sl-basketball-4.jpg", alt: "Basketball training" },
];

const FOOTBALL_PHOTOS = [
  { src: "/images/sl-football-1.jpg", alt: "Football at El Alsson" },
  { src: "/images/sl-football-2.jpg", alt: "Football team" },
  { src: "/images/sl-football-3.jpg", alt: "Football practice" },
  { src: "/images/sl-football-4.jpg", alt: "Football match" },
];

const SPORTS_COMPETITIONS = [
  {
    number: "01",
    title: "Football Competitions",
    description:
      "One of the most touching aspects of our reunions is witnessing three generations of Alssonians coming together: the recent graduate, the proud parent, and the loving grandparent. It's a beautiful reminder of our strong community ties and the legacy we continue to build.",
    photo: "/images/sl-sports-competitions-2.jpg",
  },
  {
    number: "02",
    title: "Basketball Competitions",
    description:
      "From inter-house leagues to invitational tournaments across Egypt, our basketball teams play through a packed competitive calendar. Athletes train year-round on conditioning, shooting and team plays, learning to lead under pressure, communicate on court, and balance individual flair with collective effort.",
    photo: "/images/sl-sports-competitions-1.jpg",
  },
  {
    number: "03",
    title: "Swimming Competitions",
    description:
      "Our annual swimming gala and inter-school meets give students a chance to test themselves in the pool against the best in the region. Across freestyle, breaststroke, butterfly and relay events, swimmers chase personal bests, refine technique under expert coaches, and learn that real improvement comes from showing up every day.",
    photo: "/images/sl-sports-competitions-2.jpg",
  },
  {
    number: "04",
    title: "Athletics & Track",
    description:
      "Sports day and inter-house athletics challenge every student to find their personal best across sprints, distance, field events and relays. With a calendar of inter-school meets and consistent coaching support, our athletes build raw speed, endurance and the mental toughness to perform when the moment matters.",
    photo: "/images/sl-sports-competitions-1.jpg",
  },
];

export default function SportsPage() {
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
              Students Life - Sports &amp; Wellbeing
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Championing Health and Excellence
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Physical health and mental wellbeing are cornerstones of the
              Alssonian experience. From athletics and intramural sports to
              campus mindfulness programs, please browse our offerings to see
              how we build resilient, active, and balanced students.
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
                           border border-[#262626] text-[#262626] text-[14px] tracking-[0.05em] uppercase
                           active:bg-[#0000000A] transition-colors"
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
            src="/images/sl-sports-hero.jpg"
            alt="Championing health and excellence at El Alsson"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Basket Ball ─────────────────────────────────────────────────── */}
      <SportGallery
        id="basketball"
        eyebrow="Basket Ball"
        title="Basket Ball"
        lead="At El Alsson, we believe in the power of sports to foster teamwork, resilience, and a healthy lifestyle. Our Physical Education classes provide students with opportunities to engage in a variety of activities, utilizing our extensive facilities."
        photos={BASKETBALL_PHOTOS}
      />

      {/* ── Football ────────────────────────────────────────────────────── */}
      <SportGallery
        id="football"
        eyebrow="Football"
        title="Football"
        lead="Unleash the fun at our children's playground and expansive junior and senior fields, featuring a large football field, paddle tennis courts, and basketball courts."
        photos={FOOTBALL_PHOTOS}
      />

      {/* ── Alsson Sports Competitions ──────────────────────────────────── */}
      <section
        className="section-padding py-12"
        style={{ background: "linear-gradient(to bottom, #E9F7FB, #FAFAFA)" }}
      >
        <ScrollReveal>
          <h2
            className="text-center mb-2"
            style={{
              fontSize: "32px",
              lineHeight: "1.2",
              fontWeight: 700,
              color: "#171717",
            }}
          >
            Alsson Sports <span className="text-[#0089B7]">Competitions</span>
          </h2>
        </ScrollReveal>
        <CompetitionsSection
          id="sports-competitions"
          eyebrow=""
          title=""
          competitions={SPORTS_COMPETITIONS}
          bg="transparent"
        />
      </section>

      {/* ── House System (scroll-driven stacked cards) ──────────────────── */}
      <HouseSystem />

      <InShotsSection
        titlePrefix="El-Alsson"
        photos={[
          "/images/insta-1.jpg",
          "/images/insta-2.jpg",
          "/images/insta-3.jpg",
          "/images/insta-4.jpg",
          "/images/insta-5.jpg",
          "/images/insta-6.jpg",
        ]}
      />

      <PreFooterCTA />
    </div>
  );
}
