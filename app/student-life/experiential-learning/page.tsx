import type { Metadata } from "next";
import Link from "next/link";
import TripsGallery from "@/components/student-life/TripsGallery";
import CompetitionsSection from "@/components/student-life/CompetitionsSection";
import ExhibitionsSection from "@/components/student-life/ExhibitionsSection";
import EnrichmentRotator from "@/components/student-life/EnrichmentRotator";
import InShotsSection from "@/components/ui/InShotsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";
import type { FacilityFeature } from "@/lib/stages";

export const metadata: Metadata = {
  title: "Experiential Learning — El Alsson School",
  description:
    "Real-world learning experiences — international expeditions, local field trips, hands-on outdoor education — that foster independence and curiosity.",
};

const PRIMARY_EVENTS: FacilityFeature[] = [
  {
    icon: "file-02",
    title: "Book Week / Book Fairs",
    body: "A week-long celebration of reading with author visits, themed activities, costume days and a book fair that brings stories alive for every primary classroom.",
    image: "/images/sl-exp-events-primary.jpg",
  },
  {
    icon: "paint-board",
    title: "Environmental Week",
    body: "A week dedicated to environmentally friendly projects and activities — recycling drives, planting sessions, and lessons that grow awareness of our footprint.",
    image: "/images/sl-exp-events-primary.jpg",
  },
  {
    icon: "user-multiple",
    title: "Community Service Week & CAS Week",
    body: "Classes showcase the charity-type projects they completed that year, with guest speakers invited from senior projects and outside charity organisations.",
    image: "/images/sl-exp-events-primary.jpg",
  },
];

const SECONDARY_EVENTS: FacilityFeature[] = [
  {
    icon: "mortarboard-01",
    title: "Career Fair",
    body: "Industry professionals and alumni return to campus to share career paths, internship opportunities and real-world advice with senior students.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
  {
    icon: "chemistry-02",
    title: "El Alsson Shark Tank",
    body: "Students pitch original business ideas to a panel of entrepreneurs and judges, building skills in strategy, financial modeling and public speaking.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
  {
    icon: "school",
    title: "University Fair",
    body: "Representatives from local and international universities meet with students and families to map out admissions pathways, scholarships and degree options.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
  {
    icon: "user-multiple",
    title: "Charity Events",
    body: "Year-long student-led charity initiatives raise awareness and funds for causes that matter to our community, from underprivileged schools to environmental projects.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
  {
    icon: "file-02",
    title: "ALSMUN Conference",
    body: "Our annual Model United Nations conference brings together delegates from schools across the region to debate global issues, draft resolutions and practice diplomacy.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
  {
    icon: "file-02",
    title: "Social Sciences Exposition",
    body: "Senior students present long-form research projects in history, economics, psychology and sociology to a panel of teachers and external guests.",
    image: "/images/sl-exp-events-secondary.jpg",
  },
];

const TRIPS = [
  {
    photo: "/images/sl-trip-1.jpg",
    title: "Trips to the GEM",
    location: "Athletic",
    date: "Outdoors",
  },
  {
    photo: "/images/sl-trip-2.jpg",
    title: "Trips to Old Cairo",
    location: "Athletic",
    date: "Outdoors",
  },
  {
    photo: "/images/sl-trip-3.jpg",
    title: "Attending MUN Conferences",
    location: "Athletic",
    date: "Outdoors",
  },
  {
    photo: "/images/sl-trip-4.jpg",
    title: "Foreign Visits",
    location: "Athletic",
    date: "Outdoors",
  },
  {
    photo: "/images/sl-trip-5.jpg",
    title: "Residential visits",
    location: "Athletic",
    date: "Outdoors",
  },
];

const LEARNING_COMPETITIONS = [
  {
    number: "01",
    title: "Football Competitions",
    description:
      "One of the most touching aspects of our reunions is witnessing three generations of Alssonians coming together: the recent graduate, the proud parent, and the loving grandparent.",
    photo: "/images/sl-sports-competitions-2.jpg",
  },
  {
    number: "02",
    title: "Science Olympiad",
    description:
      "Students tackle complex scientific challenges and present research to a panel of judges.",
    photo: "/images/sl-sports-competitions-1.jpg",
  },
  {
    number: "03",
    title: "Mathematics Challenge",
    description:
      "A rigorous problem-solving competition that stretches mathematical thinking beyond the classroom.",
    photo: "/images/sl-sports-competitions-2.jpg",
  },
  {
    number: "04",
    title: "Entrepreneurship Pitch",
    description:
      "Students develop and pitch real business ideas, receiving mentorship from entrepreneurs.",
    photo: "/images/sl-sports-competitions-1.jpg",
  },
];

const EXHIBITIONS = [
  {
    tab: "Arts Exhibition",
    title: "Arts Exhibition",
    description:
      "This is one of our most prestigious and academically rigorous extracurriculars.",
    photo: "/images/sl-exp-exhibitions.jpg",
  },
  {
    tab: "Science Exhibition",
    title: "Science Exhibition",
    description:
      "Students showcase term-long research projects and prototypes to the wider school community.",
    photo: "/images/sl-exp-exhibitions.jpg",
  },
  {
    tab: "Community Service",
    title: "Community Service",
    description:
      "Year-long student-led community service projects with impact reports and presentations.",
    photo: "/images/sl-exp-exhibitions.jpg",
  },
  {
    tab: "Residential Visits",
    title: "Residential Visits",
    description:
      "Multi-day residential trips that combine academic study with real-world fieldwork.",
    photo: "/images/sl-exp-exhibitions.jpg",
  },
];

export default function ExperientialLearningPage() {
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
              Students Life - Experiential Learning
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Learning Beyond
              <br />
              The Classroom
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              We believe the world is our greatest classroom. From international
              expeditions and local field trips to hands-on outdoor education,
              please explore how these immersive experiences foster
              independence, curiosity, and real-world problem-solving.
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
            src="/images/sl-exp-hero.jpg"
            alt="Learning beyond the classroom at El Alsson"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
          />
        </div>
      </section>

      {/* ── Educational Events ──────────────────────────────────────────── */}
      <section
        className="section-padding pt-12 pb-4"
        style={{ background: "linear-gradient(to bottom, #E9F7FB, #FAFAFA)" }}
      >
        <ScrollReveal>
          <h2
            className="text-center mb-3"
            style={{
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: 400,
              color: "#171717",
            }}
          >
            Educational{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Events</span>
          </h2>
          <p
            className="text-center text-[#525252] leading-[1.6]"
            style={{ fontSize: "14px" }}
          >
            The education of students throughout El Alsson is supported and
            enhanced through a wide range of events. The list is too long to
            show them all, but examples include:
          </p>
        </ScrollReveal>
      </section>

      <EnrichmentRotator
        id="primary-events"
        eyebrow={
          <h3
            className="mb-3"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#171717",
              lineHeight: 1.3,
            }}
          >
            Primary / Elementary School
          </h3>
        }
        fallbackImage="/images/sl-exp-events-primary.jpg"
        features={PRIMARY_EVENTS}
        bg="#FAFAFA"
      />

      <EnrichmentRotator
        id="secondary-events"
        eyebrow={
          <h3
            className="mb-3"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#171717",
              lineHeight: 1.3,
            }}
          >
            Senior and Secondary School
          </h3>
        }
        fallbackImage="/images/sl-exp-events-secondary.jpg"
        features={SECONDARY_EVENTS}
        ctaLabel="View All Events"
        ctaHref="/events"
        bg="#FAFAFA"
      />

      {/* ── El Alsson Trips (dark) ──────────────────────────────────────── */}
      <TripsGallery
        id="trips"
        eyebrow=""
        title="El Alsson Trips"
        lead="Explore our state-of-the-art facilities designed to support academic, athletic, and artistic excellence."
        trips={TRIPS}
      />

      {/* ── Alsson Learning Competitions ────────────────────────────────── */}
      <section
        className="section-padding py-12"
        style={{ background: "linear-gradient(to bottom, #E9F7FB, #FAFAFA)" }}
      >
        <ScrollReveal>
          <h2
            className="text-center mb-6"
            style={{
              fontSize: "32px",
              lineHeight: "1.2",
              fontWeight: 700,
              color: "#171717",
            }}
          >
            Alsson Learning <span className="text-[#0089B7]">Competitions</span>
          </h2>
        </ScrollReveal>
        <CompetitionsSection
          id="learning-competitions"
          competitions={LEARNING_COMPETITIONS}
          bg="transparent"
        />
      </section>

      {/* ── El Alsson Exhibitions ───────────────────────────────────────── */}
      <ExhibitionsSection
        id="exhibitions"
        eyebrow=""
        title="El Alsson Exhibitions"
        exhibitions={EXHIBITIONS}
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
