import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import AgeComparisonChart from "@/components/admissions/AgeComparisonChart";
import FeesSection from "@/components/admissions/FeesSection";
import FileCard from "@/components/ui/FileCard";

export const metadata: Metadata = {
  title: "Admissions — El Alsson International Schools",
  description:
    "Join Our Community — application process, open days, age comparison, tuition fees, brochures and the admissions team at El Alsson.",
};

const STEPS = [
  {
    n: "Step 1",
    title: "Submit Online Application",
    body: "Complete the initial online application form and pay the non-refundable application fee.",
  },
  {
    n: "Step 2",
    title: "Upload Required Documents",
    body: "Upload clear copies of the following documents to the portal:",
    bullets: [
      "Student's computerized birth certificate",
      "Student's passport copy (and residency visa for non-Egyptians)",
      "Parents' ID/Passport copies",
      "6 passport-sized photos",
      "Original school reports from the previous 2 academic years",
    ],
  },
  {
    n: "Step 3",
    title: "Assessment & Interview",
    body: "Upon review of your documents, our admissions team will contact you to schedule an academic assessment (for primary/secondary) or a play-based observation (for early years), followed by a brief family interview.",
  },
  {
    n: "Step 4",
    title: "Offer & Enrollment",
    body: "Successful candidates will receive an official Offer of Acceptance. To secure your child's seat, the registration fee and first tuition installment must be paid within the deadline stated in the offer letter.",
    note: "All applications must be submitted through our secure online portal.",
  },
];

const OPEN_DAYS = [
  { weekday: "Tuesday", date: "November 21st", slots: [
    { label: "First Slot",  time: "9:00 AM sharp" },
    { label: "Second Slot", time: "12:00 PM sharp" },
  ]},
  { weekday: "Tuesday", date: "November 18th", slots: [
    { label: "First Slot",  time: "9:00 AM sharp" },
    { label: "Second Slot", time: "12:00 PM sharp" },
  ]},
];

const BROCHURES = [
  { label: "PreKindergarten - Admissions", size: "94 KB" },
  { label: "Elementary - Admissions",      size: "112 KB" },
  { label: "Middle School - Admissions",   size: "108 KB" },
  { label: "High School - Admissions",     size: "124 KB" },
];

const TEAM = [
  { name: "Mrs. Gihan Rashwan",  phone: "+202 38270800", img: "/images/admissions-staff-1.jpg" },
  { name: "Mrs. Hala Shoeib",    phone: "+202 38270800", img: "/images/admissions-staff-2.jpg" },
  { name: "Mrs. Magda Estafanos",phone: "+202 38270800", img: "/images/admissions-staff-3.jpg" },
  { name: "Mrs. Mona Elbiry",    phone: "+202 38270800", img: "/images/admissions-staff-4.jpg" },
];

const INFO_PILLS = [
  { icon: "globe",  text: "Visit our state-of-the-art campus in NewGiza" },
  { icon: "school", text: "Take a guided school tour" },
  { icon: "tie",    text: "Meet our dedicated education leaders" },
];

const SIDE_CARDS = [
  // Row 1 — light LEFT, dark RIGHT
  {
    icon: "bus",
    title: "Buses",
    body: "We run buses which cover all areas of the city and most of the new outlying areas.",
    theme: "light" as const,
    img: "/images/bus.png",
    imgStyle: "bus" as const,
  },
  {
    icon: "calendar",
    title: "School Year",
    body: "School begins in the 1st week of September and we provide a full academic year finishing mid to late June.",
    theme: "dark" as const,
  },
  // Row 2 — dark LEFT, light RIGHT
  {
    icon: "book",
    title: "Arabic and Religion",
    body: "The curriculum meets Ministry of Education requirements in Arabic, Religion and Social Studies. Foreign students attend Arabic as a 2nd Language classes.",
    theme: "dark" as const,
  },
  {
    icon: "uniform",
    title: "School Uniform",
    body: "The uniform is modern, comfortable and practical. Y12, Y13, G11 & G12 have an agreed dress code.",
    theme: "light" as const,
    img: "/images/admissions-uniform.jpg",
    imgStyle: "uniform" as const,
  },
];

function PillIcon({ name }: { name: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#0089B7", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a13.5 13.5 0 010 18M12 3a13.5 13.5 0 000 18" />
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <path d="M3 20V10l9-5 9 5v10" />
          <path d="M9 20v-6h6v6M3 20h18" />
        </svg>
      );
    case "tie":
      return (
        <svg {...common}>
          <path d="M9 3h6l-1 4 2 12-4 3-4-3 2-12-1-4z" />
        </svg>
      );
    default:
      return null;
  }
}

function CardIcon({ name, dark = false }: { name: string; dark?: boolean }) {
  const stroke = dark ? "#FFFFFF" : "#0089B7";
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 012-2h13v17H7a3 3 0 00-3 3V5z" />
          <path d="M19 18H7a3 3 0 00-3 3" />
        </svg>
      );
    case "bus":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M3 11h18M7 21v-2M17 21v-2" />
          <circle cx="8" cy="17" r="1.5" />
          <circle cx="16" cy="17" r="1.5" />
        </svg>
      );
    case "uniform":
      return (
        <svg {...common}>
          <path d="M7 4l5 3 5-3 4 4-3 3v10H6V11L3 8l4-4z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

/** calendar-plus-01 icon — matches Figma desktop Save to Calendar button */
function CalendarPlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M21 10V8a3 3 0 00-3-3H6a3 3 0 00-3 3v10a3 3 0 003 3h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 14v6M14 17h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AdmissionsPage() {
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
              Admissions
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Join Our Community
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              We believe the right school shapes not just what a child learns, but who they become. At Alsson, we welcome families seeking an education that spans continents and opens minds.
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
                           border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                           active:bg-white/60 transition-colors"
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
            src="/images/admissions-hero.jpg"
            alt="El Alsson students at lunch"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ── How to Apply / Process ───────────────────────────────────────── */}
      <section id="process" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            How to{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Apply</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6 text-center">
            Four straightforward steps to join our community. We accept applications year-round, subject to availability.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <Link
              href="/admissions/apply"
              className="w-full flex items-center justify-center rounded-full
                         bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Apply Now
            </Link>
            <a
              href="#"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#262626] text-[#262626] text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              Download Brochure
            </a>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 80}>
              <div className="bg-[#F5F5F5] rounded-[16px] p-5">
                <p className="text-[#0089B7] text-[12px] font-medium mb-2">{s.n}</p>
                <h3 className="text-[#0A0A0A] mb-2" style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: 500 }}>
                  {s.title}
                </h3>
                <p className="text-[#525252] text-[14px] leading-[1.55]">{s.body}</p>
                {s.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[#525252] text-[12px] leading-[1.5]">
                        <span className="text-[#0089B7] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0089B7] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <div className="mt-4 rounded-[12px] bg-[#E0F8FF] p-3">
                    <p className="text-[#003749] text-[12px] font-bold mb-1">Please Note</p>
                    <p className="text-[#003749] text-[12px] leading-[1.5]">{s.note}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Open Days ────────────────────────────────────────────────────── */}
      <section id="open-days" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Open Days{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>2026–2027</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-5 text-center">
            El Alsson NEWGIZA welcomes new parents into a tour of our campus and meet our school leaders in person.
          </p>

          <ul className="flex flex-col gap-2.5 mb-8">
            {INFO_PILLS.map((p) => (
              <li key={p.text} className="flex items-center gap-2.5 text-[#262626] text-[14px]">
                <PillIcon name={p.icon} />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {OPEN_DAYS.map((d, i) => (
            <ScrollReveal key={d.date} delay={i * 80}>
              <div className="bg-[#CCE7F1] rounded-[20px] p-5">
                <p className="text-[#003749] text-[16px] mb-1">{d.weekday}</p>
                <h3 className="text-[#0A0A0A] mb-5" style={{ fontSize: "28px", lineHeight: "1.15", fontWeight: 700 }}>
                  {d.date}
                </h3>

                <div className="flex flex-col gap-2.5">
                  {d.slots.map((s) => (
                    <div key={s.label} className="bg-[#E5F3F7] rounded-[12px] p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <CardIcon name="clock" />
                        <div className="min-w-0">
                          <p className="text-[#525252] text-[12px] leading-tight">{s.label}</p>
                          <p className="text-[#0A0A0A] text-[16px] font-medium leading-tight mt-0.5">{s.time}</p>
                        </div>
                      </div>
                      <button className="shrink-0 inline-flex items-center gap-1.5 text-[12px] text-[#003749] font-medium bg-white rounded-full pl-3 pr-2.5 py-1.5 border border-[#E5E5E5]">
                        Save
                        <CalendarPlusIcon />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Age Comparison Chart ─────────────────────────────────────────── */}
      <section id="chart" className="bg-gradient-to-b from-[#E9F7FB] to-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Age{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Comparison Chart</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6 text-center">
            To help you understand the different levels and ages, please look at the chart below.
          </p>
          <AgeComparisonChart />
        </ScrollReveal>

        {/* Side info cards — 2×2 grid on mobile (light/dark alternating per row) */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          {SIDE_CARDS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              {c.theme === "dark" ? (
                <div className="rounded-[16px] bg-[#00526E] p-4 text-white relative overflow-hidden h-full flex flex-col">
                  <div className="w-10 h-10 rounded-md bg-[#001B25] flex items-center justify-center mb-4 shrink-0">
                    <CardIcon name={c.icon} dark />
                  </div>
                  <h3 className="text-[16px] font-medium mb-1.5">{c.title}</h3>
                  <p className="text-[12px] leading-[1.5] text-white/85">{c.body}</p>
                </div>
              ) : (
                <div className="rounded-[16px] bg-[#CCE7F1] relative overflow-hidden h-full flex flex-col">
                  <div className="p-4 pb-2">
                    <h3 className="text-[#003749] text-[16px] font-medium mb-1.5">{c.title}</h3>
                    <p className="text-[#404040] text-[12px] leading-[1.5]">{c.body}</p>
                  </div>
                  {c.img && "imgStyle" in c && c.imgStyle === "bus" && (
                    <div className="mt-auto relative h-[80px] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.img}
                        alt=""
                        aria-hidden
                        className="absolute bottom-0 -left-4 h-full w-auto max-w-none pointer-events-none select-none"
                      />
                    </div>
                  )}
                  {c.img && "imgStyle" in c && c.imgStyle === "uniform" && (
                    <div className="mt-auto relative h-[140px] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.img}
                        alt=""
                        aria-hidden
                        className="absolute bottom-0 right-0 h-full w-auto pointer-events-none select-none object-contain"
                      />
                    </div>
                  )}
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Information & Brochures ──────────────────────────────────────── */}
      <section id="brochures" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Information &{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Brochures</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6 text-center">
            Choosing the right school is crucial. At El Alsson, we make this easy and welcoming. Explore our prospectuses to learn about our American and British curricula, values, and community.
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            {BROCHURES.map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 60}>
                <FileCard href="#" as="a" title={b.label} size={b.size} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Tuition & Fees ───────────────────────────────────────────────── */}
      <FeesSection />

      {/* ── Reach our admissions team ────────────────────────────────────── */}
      <section id="contact" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <p className="text-[12px] font-bold text-[#0A0A0A] mb-2 tracking-wide text-center">
            NEED MORE INFORMATION?
          </p>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Reach our{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>admissions team</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6 text-center">
            We are here to answer your questions and help you take the next step.
          </p>
        </ScrollReveal>

        {/* 2×2 team grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {TEAM.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 70}>
              <div className="relative rounded-[16px] overflow-hidden aspect-[3/4] flex flex-col justify-end p-2.5 bg-[#E5E5E5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-white rounded-[10px] p-2 text-center">
                  <p className="text-[#0A0A0A] text-[12px] font-medium leading-tight">{t.name}</p>
                  <p className="text-[#006E92] text-[12px] mt-0.5">{t.phone}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Email + Office — combined in one card */}
        <ScrollReveal>
          <div className="rounded-[16px] bg-[#F5F5F5] p-5 mb-4">
            {/* Email */}
            <div className="flex items-center gap-2.5 mb-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#006E92" strokeWidth="1.8" />
                <path d="M3 7l9 6 9-6" stroke="#006E92" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <h3 className="text-[#006E92] text-[16px] font-medium">Email</h3>
            </div>
            <a href="mailto:registrar@alsson.com" className="text-[#0A0A0A] text-[14px] underline">
              registrar@alsson.com
            </a>

            {/* Office Location */}
            <div className="flex items-center gap-2.5 mb-1.5 mt-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#006E92" strokeWidth="1.8" />
                <circle cx="12" cy="9" r="2.5" stroke="#006E92" strokeWidth="1.8" />
              </svg>
              <h3 className="text-[#006E92] text-[16px] font-medium">Office Location</h3>
            </div>
            <p className="text-[#0A0A0A] text-[14px] leading-[1.55]">
              Reach the main NEWGIZA road on Sahrawy passing by Andrea, keep going straight all the way till the end then turn left. Keep going straight and the school will be on your left.
            </p>
            <p className="text-[#0A0A0A] text-[14px] leading-[1.55] mt-2">
              Or via Palm Hills uphill road.
            </p>
          </div>

          <div className="rounded-[16px] overflow-hidden h-[200px] bg-[#E5E5E5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/admissions-map.jpg"
              alt="School location"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Pre-footer CTA ───────────────────────────────────────────────── */}
      <PreFooterCTA />
    </div>
  );
}
