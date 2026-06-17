import type { Metadata } from "next";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import VisitsCarousel from "@/components/elkheir/VisitsCarousel";

export const metadata: Metadata = {
  title: "Alsson El Kheir — El Alsson International Schools",
  description:
    "El Alsson charity activities — 21 years of orphanage visits, awareness campaigns, past cases and the annual winter clothes drive.",
};

const VIDEO_ROWS = [
  {
    id: "history",
    titleStart: "History of",
    titleHighlight: "Alsson El-Kheir",
    lead: "Our initial focus was on Manshaat Dahshur organization, which is responsible for caring for handicapped and special needs orphans with a group of dedicated British section students taking the initiative to build a bathroom for a destitute family living near our old campus.",
    videos: ["/images/elkheir-history-1.jpg", "/images/elkheir-history-2.jpg"],
  },
  {
    id: "effort",
    titleStart: "Continuing",
    titleHighlight: "Effort",
    lead: "We recognized the importance of emotional support and made it a priority to visit the orphanages regularly, engaging in activities such as teaching English, exploring art, playing music, and participating in various recreational pursuits alongside the orphans.",
    videos: ["/images/elkheir-effort-1.jpg", "/images/elkheir-effort-2.jpg"],
  },
];

const IMPACT_FEATURES = [
  {
    icon: "/images/icon-awareness.svg",
    title: "Awareness Campaigns",
    body: "Champion important causes, from breast cancer to autism awareness, creating a real-world impact.",
  },
  {
    icon: "/images/icon-contributions.svg",
    title: "Meaningful Contributions",
    body: "Every donation and volunteer hour directly supports local families and vital community projects.",
  },
];

const VISITS = [
  { src: "/images/elkheir-visit-1.jpg", video: false },
  { src: "/images/elkheir-visit-2.jpg", video: true },
  { src: "/images/elkheir-visit-3.jpg", video: false },
];

const CASES = [
  {
    name: "Fatima",
    img: "/images/elkheir-case-fatima.jpg",
    story:
      "Fatima received tuition support and a laptop from the El Kheir fund. Today, she is graduating at the top of her class.",
  },
  {
    name: "Yassin",
    img: "/images/elkheir-case-yassin.jpg",
    story:
      "The Alsson covered the costs of seven-year-old Yassin's urgent cardiac surgery. Today, he is healthy and back to playing football.",
  },
  {
    name: "Mahmoud",
    img: "/images/elkheir-case-mahmoud.jpg",
    story:
      "After losing his vending cart, students purchased Amm Mahmoud a new kiosk. Today, he can continue supporting his family.",
  },
  {
    name: "Um Mariam",
    img: "/images/elkheir-case-mariam.jpg",
    story:
      "The Charity Club funded a full year of vital dialysis treatments for Um Mariam's daughter. She now receives consistent care she needs.",
  },
];

/** YouTube-style play badge centered on video thumbnails. */
function PlayBadge() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex items-center justify-center w-14 h-10 rounded-[10px] bg-[#FF0000] shadow-[0px_4px_12px_rgba(0,0,0,0.35)]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M5 3.5v9l8-4.5-8-4.5z" fill="white" />
        </svg>
      </span>
    </span>
  );
}

/** Video thumbnail card — photo + 30% black overlay + play badge. */
function VideoCard({ src, height = 240 }: { src: string; height?: number }) {
  return (
    <a href="#" className="block relative rounded-[16px] overflow-hidden" style={{ height: `${height}px` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden className="w-full h-full object-cover object-center" />
      <span className="absolute inset-0 bg-black/30" />
      <PlayBadge />
    </a>
  );
}

export default function ElKheirPage() {
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
              Alsson El-Kheir
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              El Alsson Charity Activities
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              At El Alsson, hosting orphans has been a part of our journey since the very beginning. Over the past 21 years, we worked tirelessly to support the vulnerable individuals in our community, guided by a sense of compassion and a desire to create lasting change.
            </p>
            <a
              href="#impact"
              className="w-full flex items-center justify-center rounded-full
                         bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Donate Now
            </a>
          </div>
        </ScrollReveal>
        <div className="w-full h-full overflow-hidden relative min-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elkheir-hero.jpg"
            alt="El Alsson students at a charity field day"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── History + Continuing Effort video rows ───────────────────────── */}
      {VIDEO_ROWS.map((row) => (
        <section key={row.id} id={row.id} className="bg-[#FAFAFA] section-padding py-12">
          <ScrollReveal>
            <h2
              className="mb-3 text-center"
              style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
            >
              {row.titleStart}{" "}
              <span style={{ color: "#0089B7", fontWeight: 700 }}>{row.titleHighlight}</span>
            </h2>
            <p className="text-[#404040] text-[16px] leading-[1.6] mb-6 text-center">{row.lead}</p>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {row.videos.map((src, i) => (
              <ScrollReveal key={src} delay={i * 80}>
                <VideoCard src={src} height={260} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      ))}

      {/* ── Lasting Impact (dark) ────────────────────────────────────────── */}
      <section id="impact" className="bg-[#001B25] section-padding py-12">
        <ScrollReveal>
          <div className="rounded-[16px] overflow-hidden h-[280px] mb-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/elkheir-impact.jpg"
              alt="El Alsson students during a charity visit"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-2"
            style={{ fontWeight: 400 }}
          >
            Charity Events
          </span>
          <h2
            className="text-[#FAFAFA] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Alsson El-Kheir{" "}
            <span style={{ color: "#FFC53A", fontWeight: 700 }}>Lasting Impact</span>
          </h2>
          <p className="text-[#D4D4D4] text-[16px] leading-[1.6] mb-6">
            As a result, we fostered a deep bond between our students, parents, and the orphaned children, creating a support system that went beyond material needs.
          </p>

          <a
            href="#"
            className="w-full flex items-center justify-center gap-2 rounded-full mb-8
                       bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                       active:bg-[#006E92] transition-colors"
            style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
          >
            Donate Now
          </a>
        </ScrollReveal>

        <div className="border-t border-white/15 pt-7 flex flex-col gap-6">
          {IMPACT_FEATURES.map((f, i) => (
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

      {/* ── Orphanage Visits ─────────────────────────────────────────────── */}
      <section id="visits" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="text-[#171717] mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            Orphanage Visits
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6">
            As our efforts grew, we expanded our reach to include other orphanages such as Ahbab el Rahman in Kerdasa, Nour el Eman in Kafer ElGabel Mansoria, ElSabekoon in Kafer Ghataty, Dar Al Sabeel in Maadi, and Manshiet Dahshur special needs Orphans.
          </p>
        </ScrollReveal>

        <VisitsCarousel visits={VISITS} />
      </section>

      {/* ── Past Cases ───────────────────────────────────────────────────── */}
      <section id="cases" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-6 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Past{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Cases</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {CASES.map((c) => (
              <div key={c.name} className="flex flex-col">
                <div
                  className="rounded-[16px] overflow-hidden mb-2"
                  style={{ aspectRatio: "3/4" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-[#0A0A0A] text-[16px] font-medium mb-1">{c.name}</h3>
                <p className="text-[#525252] text-[12px] leading-[1.55]">{c.story}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="#"
            className="w-full flex items-center justify-center gap-2 rounded-full
                       border border-[#262626] text-[#262626] text-[14px] font-medium
                       active:bg-[#F5F5F5] transition-colors"
            style={{ height: "52px" }}
          >
            View More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </ScrollReveal>
      </section>

      {/* ── Winter Drive ─────────────────────────────────────────────────── */}
      <section id="winter" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <p className="text-[14px] text-[#0A0A0A] mb-1.5">Continuing Charity</p>
          <h2
            className="mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Winter{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Drive</span>
          </h2>
          <p className="text-[#0A0A0A] text-[16px] leading-[1.6] mb-6">
            As the season changes and the temperature drops, we are reminded of how important it is to support our community during these colder months. We are pleased to share our continued efforts in our annual Winter Clothes Drive.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <VideoCard src="/images/elkheir-winter-video.jpg" height={260} />
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="rounded-[8px] overflow-hidden h-[120px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/elkheir-winter-1.jpg"
                alt="Winter clothes drive collection"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-[8px] overflow-hidden h-[120px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/elkheir-winter-2.jpg"
                alt="Winter clothes drive volunteers"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
