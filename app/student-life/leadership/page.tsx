import type { Metadata } from "next";
import Link from "next/link";
import InShotsSection from "@/components/ui/InShotsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Leadership & Services — El Alsson School",
  description:
    "Giving back and taking charge are at the heart of our community — Model United Nations, Student Council, and local charity drives.",
};

export default function LeadershipPage() {
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
              Students Life - Leadership &amp; Services
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Empowering Tomorrow&apos;s Leaders
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Giving back and taking charge are at the heart of our community.
              From the Student Council and Model United Nations to local charity
              drives, please explore how our students develop crucial leadership
              skills while making a meaningful difference.
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
            src="/images/sl-leadership-hero.jpg"
            alt="Empowering tomorrow's leaders at El Alsson"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ── Model United Nations (MUN) ──────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <div className="rounded-[16px] overflow-hidden mb-6" style={{ height: "260px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sl-mun-photo.jpg"
              alt="Model United Nations at El Alsson"
              className="w-full h-full object-cover"
            />
          </div>
          <h2
            className="text-[#0A0A0A] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            Model United Nations (MUN)
          </h2>
          <p className="text-[#404040] text-[16px] leading-[1.6] mb-6">
            This is one of our most prestigious and academically rigorous
            extracurriculars. Students step into the shoes of diplomats,
            debating complex global issues from climate change to international
            security.
          </p>

          {/* "Anyone interested?" callout — left-border bar */}
          <div className="border-l border-[#525252] pl-4 py-2">
            <p
              className="text-[#171717] mb-2"
              style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.5 }}
            >
              Anyone interested in knowing more?
            </p>
            <p className="text-[#404040] leading-[1.6]" style={{ fontSize: "14px" }}>
              You can talk to Ms Heba Hassan from the American School or email
              her on{" "}
              <a
                href="mailto:hhassan@alsson.com"
                className="font-medium text-[#0089B7] underline"
              >
                hhassan@alsson.com
              </a>{" "}
              and/or Ms Hanan Alfred from the British School on{" "}
              <a
                href="mailto:halfred@alsson.com"
                className="font-medium text-[#0089B7] underline"
              >
                halfred@alsson.com
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Student Council — Raising Awareness Through ────────────────── */}
      <section className="bg-[#001B25] section-padding py-12">
        <ScrollReveal>
          <div
            className="rounded-[16px] overflow-hidden mb-6 -mx-5"
            style={{ height: "300px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sl-council-photo.jpg"
              alt="Student Council at El Alsson"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-3"
            style={{ fontWeight: 400 }}
          >
            Raising Awareness Through
          </span>
          <h2
            className="mb-3"
            style={{
              fontSize: "32px",
              lineHeight: "1.2",
              fontWeight: 500,
              color: "#FAFAFA",
            }}
          >
            <span className="block">El Alsson</span>
            <span className="block text-[#FFC53A]" style={{ fontWeight: 700 }}>
              Student Council
            </span>
          </h2>
          <p
            className="leading-[1.6] mb-6"
            style={{ fontSize: "15px", color: "#D4D4D4" }}
          >
            Student Council members lead community projects to raise awareness
            of school needs and help organize social events. These experiences
            teach valuable skills beyond regular education while benefiting the
            school and peers.
          </p>

          {/* Divider */}
          <div
            className="w-full mb-6"
            style={{ height: "1px", background: "rgba(255,255,255,0.15)" }}
          />

          {/* 2 icon items — stacked vertically on mobile */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sl-council-icon-impact.svg"
                alt=""
                style={{ width: "44px", height: "44px" }}
                className="shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p
                  className="mb-1"
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "#FAFAFA",
                    lineHeight: 1.4,
                  }}
                >
                  Meaningful Impact
                </p>
                <p
                  className="leading-[1.6]"
                  style={{ fontSize: "14px", color: "#D4D4D4" }}
                >
                  Contribute your time and expertise to directly enrich student
                  programs and campus life.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sl-council-icon-growth.svg"
                alt=""
                style={{ width: "44px", height: "44px" }}
                className="shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p
                  className="mb-1"
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "#FAFAFA",
                    lineHeight: 1.4,
                  }}
                >
                  Collaborative Growth
                </p>
                <p
                  className="leading-[1.6]"
                  style={{ fontSize: "14px", color: "#D4D4D4" }}
                >
                  Work hand-in-hand with educators to foster a supportive,
                  thriving school environment.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

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
