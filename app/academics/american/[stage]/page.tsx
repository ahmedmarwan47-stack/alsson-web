import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import FileCard from "@/components/ui/FileCard";
import StagePolicies from "@/components/academics/StagePolicies";
import StageFacilitiesEnrichment from "@/components/academics/StageFacilitiesEnrichment";
import StageGallery from "@/components/academics/StageGallery";
import { STAGES, getStageBySlug, getOtherStages } from "@/lib/stages";

export function generateStaticParams() {
  return STAGES.map((s) => ({ stage: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}): Promise<Metadata> {
  const { stage: slug } = await params;
  const stage = getStageBySlug(slug);
  if (!stage) return { title: "Not Found" };
  const clean = stage.title.replace(/\n/g, " ");
  return {
    title: `${clean} — American School — El Alsson`,
    description: stage.heroDescription,
  };
}

const STAGE_IMAGES: Record<string, string> = {
  "pre-school": "/images/stage-preschool.jpg",
  kindergarten: "/images/stage-kindergarten.jpg",
  elementary: "/images/stage-elementary.jpg",
  "middle-school": "/images/stage-middle.jpg",
  "high-school": "/images/stage-high.jpg",
};

export default async function StagePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage: slug } = await params;
  const stage = getStageBySlug(slug);
  if (!stage) notFound();

  const others = getOtherStages(slug);

  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-0 overflow-hidden">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
              style={{ fontWeight: 400 }}
            >
              American School
            </span>
            <h1
              className="text-[#0A0A0A] mb-3 whitespace-pre-line"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              {stage.title}
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] max-w-[360px]">
              {stage.heroDescription}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-col gap-3 mt-6">
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

        {/* Rotated overlapping photos */}
        <ScrollReveal delay={150}>
          <div className="flex items-center justify-center mt-8 -mx-5 pb-0" style={{ height: "200px" }}>
            {stage.heroPhotos.slice(0, 3).map((src, i) => {
              const rotations = [6, -5, 10];
              const offsets = ["-14px", "-14px", "0px"];
              return (
                <div
                  key={i}
                  className="shrink-0 rounded-[16px] overflow-hidden border-[3px] border-[#F2F9FB]"
                  style={{
                    width: "118px",
                    height: "160px",
                    transform: `rotate(${rotations[i]}deg)`,
                    marginRight: offsets[i],
                    zIndex: i,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Overview ────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10" id="overview">
        <ScrollReveal>
          <div className="rounded-[16px] overflow-hidden mb-5" style={{ height: "240px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stage.overviewImage}
              alt="Students learning"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            className="mb-4"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 700 }}
          >
            Overview
          </h2>
          <div className="flex flex-col gap-4">
            {stage.overviewText.map((p, i) => (
              <p key={i} className="text-[#525252] text-[15px] leading-[1.6]">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Facilities & Enrichment ────────────────────────── */}
      <StageFacilitiesEnrichment
        title={stage.facilitiesTitle}
        lead={stage.facilitiesLead}
        fallbackImage={stage.facilitiesImage}
        features={stage.facilitiesFeatures}
      />

      {/* ── Joining Our Programs ──────────────────────────── */}
      <section className="bg-[#001B25] section-padding py-12" id="programs">
        <ScrollReveal>
          <h2
            className="text-center mb-2"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            <span className="text-[#FAFAFA]">Joining Our </span>
            <span style={{ color: "#FFC53A", fontWeight: 700 }}>Programs</span>
          </h2>
          <p className="text-[#D4D4D4] text-[14px] text-center leading-[1.6] mb-6">
            Specific guidelines and environments tailored for {stage.title.includes("Pre-School") ? "3 and 4" : "each"} year olds.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {stage.programs.map((prog, pi) => (
            <ScrollReveal key={prog.title} delay={pi * 100}>
              <div className="bg-[#003749] rounded-[16px] p-5">
                <h3 className="text-[#FAFAFA] font-bold text-[20px] leading-[1.2] mb-1">
                  {prog.title}
                </h3>
                <p className="text-[#D4D4D4] text-[14px] mb-6">
                  {prog.subtitle}
                </p>

                <div className="flex flex-col gap-5">
                  {prog.features.map((feat) => (
                    <div key={feat.title} className="flex gap-3 items-start">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="shrink-0 mt-0.5"
                      >
                        <circle cx="12" cy="8" r="3" stroke="#FAFAFA" strokeWidth="1.5" />
                        <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <div>
                        <p className="text-[#FAFAFA] text-[15px] font-medium">
                          {feat.title}
                        </p>
                        <p className="text-[#D4D4D4] text-[14px] leading-[1.5]">
                          {feat.body}
                        </p>
                        {feat.note && (
                          <p className="text-[#FFC53A] text-[14px] mt-0.5">
                            {feat.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── More Academic Stages ──────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12" id="more-stages">
        <ScrollReveal>
          <h2
            className="text-center mb-6"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            More Academic{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Stages</span>
          </h2>
        </ScrollReveal>

        <StageGallery
          items={others.map((other) => ({
            slug: other.slug,
            title: other.title.replace(/\n/g, " "),
            img: STAGE_IMAGES[other.slug] || "/images/stage-preschool.jpg",
          }))}
          cardWidth={200}
          cardHeight={240}
        />
      </section>

      {/* ── Handbooks & Guides ───────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10" id="handbooks">
        <ScrollReveal>
          <h2
            className="text-center mb-2"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            Handbooks &{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Guides</span>
          </h2>
          <p className="text-[#525252] text-[14px] text-center leading-[1.6] mb-6">
            Everything you need to understand our American curriculum.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid grid-cols-2 gap-3">
            {stage.handbooks.map((h) => (
              <FileCard key={h.label} title={h.label} size={h.size} href="#" />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── School Policies ──────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10" id="policies">
        <ScrollReveal>
          <h2
            className="text-center mb-2"
            style={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}
          >
            School{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Policies</span>
          </h2>
          <p className="text-[#525252] text-[14px] text-center leading-[1.6] mb-6">
            Below are the key whole School policies. Distinct academic policies for the British and American schools are available in their respective handbooks.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <StagePolicies policies={stage.policies} />
        </ScrollReveal>
      </section>

      {/* ── Pre-footer CTA ───────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
