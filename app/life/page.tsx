import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import FileCard from "@/components/ui/FileCard";
import LifeGallery from "@/components/life/LifeGallery";
import VoicesCarousel from "@/components/life/VoicesCarousel";

export const metadata: Metadata = {
  title: "Life At El Alsson — International Schools New Giza",
  description:
    "Join a passionate family of international educators at our flagship 14-acre campus in New Giza. Teach, inspire, and call it home.",
};

function PlayButton() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white" aria-hidden>
        <path d="M7 4l10 6-10 6V4z" />
      </svg>
    </div>
  );
}

export default function LifePage() {
  return (
    <div className="flex flex-col">

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB]">
        <ScrollReveal>
          <div className="section-padding pt-8 pb-7 text-center">
            {/* Pill */}
            <span
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
              style={{ fontWeight: 400 }}
            >
              Life At El‑Alsson
            </span>

            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Teach. Inspire, Call It Home.
            </h1>

            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Join a passionate family of international educators at our flagship 14-acre campus
              in New Giza. Experience a career that enriches both you and your students as nothing
              compares to the community at El-Alsson.
            </p>

            <Link
              href="/admissions#tour"
              className="w-full flex items-center justify-center rounded-full border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase active:bg-white/60 transition-colors"
              style={{ height: "52px" }}
            >
              Start Virtual Tour
            </Link>
          </div>
        </ScrollReveal>

        {/* Full-bleed hero photo */}
        <div className="w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/life-hero.jpg"
            alt="Life at El Alsson campus"
            className="w-full block object-cover hero-image-zoom"
            style={{ height: "240px" }}
          />
        </div>
      </section>

      {/* ── 2. The New Giza Experience ──────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <h2
            className="text-[#171717] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            The New Giza Experience
          </h2>
          <p className="text-[#525252] text-[15px] leading-[1.6]">
            With over 30,000 residents, the development features a world-quality golf course, a
            bustling business park, shopping centers packed with restaurants and nightlife, a
            300-bed hospital, two hotels, a university, and an elite sports club.
          </p>
        </ScrollReveal>
        <LifeGallery />
      </section>

      {/* ── 3. Philosophy of El Alsson Family ───────────────────────────────── */}
      <section className="bg-[#001B25] section-padding py-10">
        <ScrollReveal>
          <h2 className="mb-3" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
            <span className="block text-[#FAFAFA]">Philosophy of</span>
            <span className="block text-[#FFC53A]" style={{ fontWeight: 700 }}>El Alsson Family</span>
          </h2>
          <p className="text-[#D4D4D4] text-[15px] leading-[1.6] mb-8">
            Teaching here means something. The students arrive ready to learn, the colleagues
            understand the work, and the school backs what you believe in.
          </p>
        </ScrollReveal>

        {/* Video card */}
        <ScrollReveal delay={80}>
          <div className="rounded-[12px] overflow-hidden relative" style={{ height: "300px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/life-philosophy-video.jpg"
              alt="Working at El-Alsson"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ paddingBottom: "80px" }}
            >
              <PlayButton />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-[18px] leading-[1.3]" style={{ fontWeight: 700 }}>
                Watch: Working At El-Alsson
              </p>
              <p className="text-white text-[13px] leading-[1.5] mt-1.5">
                Hear it from Mrs. Alma El Abd describing the family atmosphere, warm environment
                and how her directors are always supporting her.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 4. Inspire The Next Generation ──────────────────────────────────── */}
      <section className="bg-[#001B25] section-padding py-10">
        <ScrollReveal>
          <h2 className="mb-3" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
            <span className="text-[#FAFAFA]">Inspire The Next </span>
            <span className="text-[#FFC53A]" style={{ fontWeight: 700 }}>Generation</span>
          </h2>
          <p className="text-[#D4D4D4] text-[15px] leading-[1.6] mb-6">
            At El Alsson, our educators are the heart of our community. We foster a collaborative,
            deeply supportive environment where passionate teachers from around the globe come to
            thrive and shape the leaders of tomorrow.
          </p>
          <Link
            href="/careers"
            className="w-full flex items-center justify-center gap-2 rounded-full border border-[#FAFAFA] text-[#FAFAFA] text-[15px] font-medium active:bg-white/10 transition-colors"
            style={{ height: "48px" }}
          >
            View Open Positions
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>

        {/* 2×2 photo grid with stat pill */}
        <ScrollReveal delay={80}>
          <div className="relative mt-8">
            <div className="grid grid-cols-2 gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/life-inspire-1.jpg" alt="El Alsson teachers" className="w-full rounded-[12px] object-cover" style={{ height: "170px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/life-inspire-2.jpg" alt="El Alsson students" className="w-full rounded-[12px] object-cover" style={{ height: "170px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/life-inspire-3.jpg" alt="El Alsson community" className="w-full rounded-[12px] object-cover" style={{ height: "170px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/life-inspire-4.jpg" alt="El Alsson campus life" className="w-full rounded-[12px] object-cover" style={{ height: "170px" }} />
            </div>
            {/* Stat pill — centered over the grid, rotated */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(5deg)",
              }}
            >
              <div
                className="bg-[#FFC53A] border-2 border-[#001B25] rounded-full flex flex-col items-center justify-center"
                style={{ width: "96px", height: "96px" }}
              >
                <p className="text-[#000E12] text-[22px] leading-[1.2]" style={{ fontWeight: 500 }}>+165</p>
                <p className="text-[#000E12] text-[14px] leading-[1.2]">Teachers</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 5. Voices of El Alsson ──────────────────────────────────────────── */}
      <section
        className="py-10"
        style={{ background: "linear-gradient(180deg, #E9F7FB 0%, #FAFAFA 100%)" }}
      >
        <div className="section-padding mb-7">
          <ScrollReveal>
            <h2
              className="text-[#171717] mb-2"
              style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
            >
              Voices of El Alsson
            </h2>
            <p className="text-[#525252] text-[15px] leading-[1.6]">
              Don't just take our word for it. Discover what it's truly like to live, work, and
              grow within the El Alsson family.
            </p>
          </ScrollReveal>
        </div>

        <div className="section-padding">
          <VoicesCarousel />
        </div>
      </section>

      {/* ── 6. Everything You Need To Know ──────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <h2
            className="text-[#171717] text-center mb-8"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Everything You Need To Know
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <FileCard href="#" title="Egypt safer than US and UK" size="94 KB" as="a" />
            <FileCard href="#" title="New Expatriate Teachers' Information" size="94 KB" as="a" />
            <FileCard href="#" title="Employment FAQs" size="94 KB" as="a" />
            <FileCard href="#" title="Cost of Living Guide" size="94 KB" as="a" />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
