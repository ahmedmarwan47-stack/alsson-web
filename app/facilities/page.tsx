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
    id: "performing-arts",
    eyebrow: "Performing Arts",
    title: "State of the Art",
    lead: "Experience learning in our state-of-the-art classrooms, designed to be spacious, well-lit, and accommodating up to 24 students for an optimal educational experience!",
    albums: [
      { img: "/images/facility-album-1a.jpg", label: "Junior", count: "42 Photos" },
      { img: "/images/facility-album-1b.jpg", label: "Senior", count: "58 Photos" },
      { img: "/images/facility-album-1c.jpg", label: "Junior", count: "31 Photos" },
      { img: "/images/facility-album-1d.jpg", label: "Senior", count: "67 Photos" },
    ],
  },
  {
    id: "outdoors",
    eyebrow: "Outdoors",
    title: "Playgrounds and Fields",
    lead: "Unleash the fun at our children's playground and expansive junior and senior fields, featuring a large football field, paddle tennis courts, and basketball courts.",
    albums: [
      { img: "/images/facility-album-2a.jpg", label: "Junior", count: "84 Photos" },
      { img: "/images/facility-album-2b.jpg", label: "Senior", count: "46 Photos" },
      { img: "/images/facility-album-2c.jpg", label: "Junior", count: "29 Photos" },
      { img: "/images/facility-album-2d.jpg", label: "Senior", count: "72 Photos" },
    ],
  },
  {
    id: "pool",
    eyebrow: "Athletic",
    title: "Indoor Heated Pool",
    lead: "Dive into excellence with our indoor heated pool, offering a opportunity for students to enhance their swimming skills and enjoy aquatic activities.",
    albums: [
      { img: "/images/facility-album-3a.jpg", label: "Junior", count: "38 Photos" },
      { img: "/images/facility-album-3b.jpg", label: "Senior", count: "54 Photos" },
      { img: "/images/facility-album-3c.jpg", label: "Junior", count: "23 Photos" },
      { img: "/images/facility-album-3d.jpg", label: "Senior", count: "61 Photos" },
    ],
  },
  {
    id: "libraries",
    eyebrow: "Educational",
    title: "Libraries & Research Hubs",
    lead: "Two fully-stocked, architecturally designed libraries serving as vibrant hubs for collaborative learning, debate, and research.",
    albums: [
      { img: "/images/facility-album-4a.jpg", label: "Junior", count: "47 Photos" },
      { img: "/images/facility-album-4b.jpg", label: "Senior", count: "33 Photos" },
      { img: "/images/facility-album-4c.jpg", label: "Junior", count: "55 Photos" },
      { img: "/images/facility-album-4d.jpg", label: "Senior", count: "41 Photos" },
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
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] px-3 py-1 rounded-md mb-1"
              style={{ fontWeight: 400, fontSize: "13px" }}
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
            className="absolute inset-0 w-full h-full object-cover object-center"
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
