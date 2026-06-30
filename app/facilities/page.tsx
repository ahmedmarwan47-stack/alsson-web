import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import FacilityGallery, { type Album } from "@/components/facilities/FacilityGallery";

export const metadata: Metadata = {
  title: "Facilities — El Alsson International Schools",
  description:
    "Beyond the classroom — state-of-the-art classrooms, playgrounds and fields, an indoor heated pool, and libraries at El Alsson NEWGIZA.",
};

const GALLERIES: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  albums: Album[];
}[] = [
  {
    id: "sports-recreation",
    eyebrow: "Sports & Recreation",
    title: "Built to Move",
    lead: "From the indoor heated pool to padel courts, football fields and our dance and fitness studios — spaces designed for every athlete, every level, every season.",
    albums: [
      { img: "/images/facility-album-3a.jpg", pill: "Indoor Heated Pool", count: "38 Photos" },
      { img: "/images/facility-album-2a.jpg", pill: "Football Courts", count: "84 Photos" },
      { img: "/images/facility-album-2b.jpg", pill: "Padel Tennis Courts", count: "46 Photos" },
      { img: "/images/facility-album-3b.jpg", pill: "Indoor Sports Courts", count: "54 Photos" },
      { img: "/images/facility-album-2c.jpg", pill: "Playgrounds", count: "29 Photos" },
      { img: "/images/facility-album-2d.jpg", pill: "Basketball Courts", count: "72 Photos" },
      { img: "/images/facility-album-3c.jpg", pill: "Fitness Studio", count: "23 Photos" },
      { img: "/images/facility-album-3d.jpg", pill: "Dance", count: "61 Photos" },
    ],
  },
  {
    id: "learning-spaces",
    eyebrow: "Learning Spaces",
    title: "Built to Learn",
    lead: "State-of-the-art classrooms, dedicated science labs, a robotics workshop, and two architecturally designed libraries serving as vibrant hubs for research and collaboration.",
    albums: [
      { img: "/images/facility-album-1a.jpg", pill: "State of the Art", count: "42 Photos" },
      { img: "/images/facility-album-1b.jpg", pill: "Science Labs", count: "58 Photos" },
      { img: "/images/facility-album-1c.jpg", pill: "Robotics Lab", count: "31 Photos" },
      { img: "/images/facility-album-1d.jpg", pill: "Libraries", count: "67 Photos" },
    ],
  },
  {
    id: "student-wellbeing",
    eyebrow: "Student Wellbeing",
    title: "Built to Care",
    lead: "On-site medical clinics staffed throughout the school day, ensuring our students stay safe, healthy, and supported.",
    albums: [
      { img: "/images/facility-album-4a.jpg", pill: "Clinics", count: "12 Photos" },
    ],
  },
  {
    id: "arts-performing-arts",
    eyebrow: "Arts & Performing Arts",
    title: "Built to Perform",
    lead: "A 260-seat theatre, drama studio, radio studio, music rooms, amphitheater and multipurpose halls — the stage is always set at El Alsson.",
    albums: [
      { img: "/images/facility-album-4b.jpg", pill: "260 Seat Theatre", count: "33 Photos" },
      { img: "/images/facility-album-4c.jpg", pill: "Drama Studio", count: "55 Photos" },
      { img: "/images/facility-album-4d.jpg", pill: "Music Rooms", count: "41 Photos" },
      { img: "/images/facility-album-3d.jpg", pill: "Amphitheater", count: "27 Photos" },
      { img: "/images/facility-album-4a.jpg", pill: "Radio Studio", count: "18 Photos" },
      { img: "/images/facility-album-4b.jpg", pill: "Multipurpose Halls", count: "22 Photos" },
    ],
  },
  {
    id: "transportation",
    eyebrow: "Transportation",
    title: "Built to Connect",
    lead: "A fully-managed bus fleet and dedicated pick-up zones make the daily journey to and from El Alsson safe, smooth, and on time.",
    albums: [
      { img: "/images/facility-album-2c.jpg", pill: "Bus Fleet", count: "16 Photos" },
      { img: "/images/facility-album-2d.jpg", pill: "Pick-up Zone", count: "9 Photos" },
    ],
  },
  {
    id: "campus-operations",
    eyebrow: "Campus Operations",
    title: "Built to Support",
    lead: "Engineering workshops, on-campus daycare for staff families, and a dedicated Teacher Resources Center — the operational backbone of campus life.",
    albums: [
      { img: "/images/facility-album-1d.jpg", pill: "Engineering", count: "14 Photos" },
      { img: "/images/facility-album-1c.jpg", pill: "Daycare", count: "21 Photos" },
      { img: "/images/facility-album-1b.jpg", pill: "Teacher Resources Center", count: "17 Photos" },
    ],
  },
];

export default function FacilitiesPage() {
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
              Facilities
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Beyond The Classroom
            </h1>
            <p className="text-[#525252] leading-[1.55] mb-6" style={{ fontSize: "15px" }}>
              Discover the vibrant community, and deeply-rooted traditions that shape the unforgettable El Alsson School experience.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/admissions/apply"
                className="w-full flex items-center justify-center rounded-full
                           bg-[#0089B7] text-white font-medium tracking-[0.05em] uppercase
                           active:bg-[#006E92] transition-colors"
                style={{ height: "52px", fontSize: "14px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
              >
                Apply Now
              </Link>
              <Link
                href="/admissions#tour"
                className="w-full flex items-center justify-center rounded-full
                           border border-[#262626] text-[#262626] font-medium tracking-[0.05em] uppercase
                           active:bg-white/60 transition-colors"
                style={{ height: "52px", fontSize: "14px" }}
              >
                Start Virtual Tour
              </Link>
            </div>
          </div>
        </ScrollReveal>
        <div className="w-full h-full overflow-hidden relative min-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/facilities-hero.jpg"
            alt="El Alsson students performing on stage"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Gallery sections (each is its own arrow-driven carousel) ─────── */}
      {GALLERIES.map((g) => (
        <FacilityGallery key={g.id} {...g} />
      ))}

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
