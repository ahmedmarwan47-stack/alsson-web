import type { Metadata } from "next";
import Link from "next/link";
import SportGallery from "@/components/student-life/SportGallery";
import EnrichmentRotator from "@/components/student-life/EnrichmentRotator";
import InShotsSection from "@/components/ui/InShotsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";
import type { FacilityFeature } from "@/lib/stages";

export const metadata: Metadata = {
  title: "Arts & Culture — El Alsson School",
  description:
    "Our vibrant arts program — dramatic theatre, musical performances and visual arts — celebrates creativity and cultural expression.",
};

const PERFORMING_ARTS_PHOTOS = [
  { src: "/images/sl-arts-gallery-1.jpg", alt: "Performing arts at El Alsson" },
  { src: "/images/sl-arts-gallery-2.jpg", alt: "Theatre production at El Alsson" },
  { src: "/images/sl-arts-gallery-3.jpg", alt: "Music performance at El Alsson" },
  { src: "/images/sl-arts-gallery-4.jpg", alt: "Performing arts showcase" },
];

const CREATIVE_EVENTS: FacilityFeature[] = [
  {
    icon: "user-multiple",
    title: "Alumni Reunion",
    body: "Graduating Alssonians come together in a reunion day filled with fun, music, food, sports day games, giveaways and Alsson Alumni Souvenir items.",
    image: "/images/sl-events-photo.jpg",
  },
  {
    icon: "paint-board",
    title: "Art Exhibition",
    body: "An annual showcase of student work across painting, sculpture, photography and digital art — open to families and the wider community.",
    image: "/images/sl-arts-gallery-2.jpg",
  },
  {
    icon: "school",
    title: "Prophet's Birthday Celebrations",
    body: "A school-wide cultural event with performances, crafts and storytelling that celebrate tradition and bring our community together.",
    image: "/images/sl-arts-gallery-3.jpg",
  },
];

export default function ArtsPage() {
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
              Students Life - Arts &amp; Culture
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Cultivating
              <br />
              Creative Minds
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Our vibrant arts program provides a stage and a canvas for every
              talent. From dramatic theatre productions and musical performances
              to visual arts exhibitions, please take the time to discover how
              we celebrate creativity and cultural expression.
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
            src="/images/sl-arts-hero.jpg"
            alt="Cultivating creative minds at El Alsson"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Performing Arts ─────────────────────────────────────────────── */}
      <SportGallery
        id="performing-arts"
        eyebrow="Performing Arts"
        title="Performing Arts"
        lead="Creativity thrives at El Alsson. From annual high school musicals to elementary choir performances, students have opportunities to shine on our 500-seat main stage."
        photos={PERFORMING_ARTS_PHOTOS}
      />

      {/* ── Creative Events ─────────────────────────────────────────────── */}
      <EnrichmentRotator
        id="creative-events"
        title={
          <span className="block text-center">
            Creative <span style={{ color: "#0089B7", fontWeight: 700 }}>Events</span>
          </span>
        }
        lead="The education of students throughout El Alsson is supported and enhanced through a wide range of events. The list is too long to show them all, but examples include:"
        fallbackImage="/images/sl-events-photo.jpg"
        features={CREATIVE_EVENTS}
        ctaLabel="View All Events"
        ctaHref="/events"
      />

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
