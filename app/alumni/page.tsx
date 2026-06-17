import type { Metadata } from "next";
import ScrollReveal from "@/components/home/ScrollReveal";
import CouncilGrid from "@/components/alumni/CouncilGrid";
import InShotsSection from "@/components/ui/InShotsSection";

export const metadata: Metadata = {
  title: "Alumni — El Alsson International Schools",
  description:
    "Calling all El Alsson alumni — reconnect with your roots, join the EA Alumni Council, relive reunion memories and register as an Alsson alumni.",
};

const IMPACT_PHOTOS = [
  { src: "/images/alumni-impact-1.jpg", rotate: "rotate-0" },
  { src: "/images/alumni-impact-2.jpg", rotate: "rotate-2" },
  { src: "/images/alumni-impact-3.jpg", rotate: "-rotate-2" },
];

const SHOTS = [
  "/images/alumni-insta-1.jpg",
  "/images/alumni-insta-2.jpg",
  "/images/alumni-insta-3.jpg",
  "/images/alumni-insta-4.jpg",
  "/images/alumni-insta-5.jpg",
  "/images/alumni-insta-6.jpg",
];

const GRAD_YEARS = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => 2026 - i);

/** Dropdown chevron for the styled selects — 16px per the SVG icon scale rule. */
function SelectChevron() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="#171717" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FORM_INPUT_CLASS =
  "w-full h-12 px-4 rounded-[6px] bg-[rgba(245,245,245,0.8)] border border-[#E5E5E5] " +
  "text-[#171717] text-[16px] placeholder-[#525252] outline-none focus:border-[#0089B7]";

export default function AlumniPage() {
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
              El Alsson Connected
            </span>
            <h1
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
            >
              Calling All
              <br />
              El Alsson Alumni!
            </h1>
            <p className="text-[#525252] text-[16px] leading-[1.55] mb-6">
              Since our founding in 1982, El Alsson has grown into a vibrant community. Reconnect with your roots, former teachers, and old classmates.
            </p>
            <a
              href="#register"
              className="w-full flex items-center justify-center rounded-full
                         bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase
                         active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Register As Alumni
            </a>
          </div>
        </ScrollReveal>
        <div className="w-full h-full overflow-hidden relative min-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/alumni-hero.jpg"
            alt="El Alsson alumni gathered at a reunion"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ── EA Alumni Council ────────────────────────────────────────────── */}
      <section id="council" className="bg-gradient-to-b from-[#E9F7FB] to-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-3 text-center"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            EA Alumni{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Council</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-3 text-center">
            Established in 2013, each graduating class has a representative connecting the group.
          </p>
          <p className="text-[#262626] text-[14px] leading-[1.6] mb-7 text-center">
            If you are interested in representing your class, please email{" "}
            <a href="mailto:marketing@alsson.com" className="font-medium text-[#006E92]">
              marketing@alsson.com
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CouncilGrid />
        </ScrollReveal>
      </section>

      {/* ── Alumni Making An Impact ──────────────────────────────────────── */}
      <section id="impact" className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2
            className="mb-4"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Alumni Making An{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Impact</span>
          </h2>
          <p className="text-[#404040] text-[16px] leading-[1.6] mb-3">
            So far, we&apos;ve cherished two incredible alumni reunion events—one at our beloved Haraneya campus and another at our NEWGIZA campus in 2022. These gatherings are not just a chance to catch up with old classmates; they also provide a heartwarming opportunity to reconnect with former teachers and relive fond memories.
          </p>
          <p className="text-[#404040] text-[16px] leading-[1.6] mb-8">
            One of the most touching aspects of our reunions is witnessing three generations of Alssonians coming together: the recent graduate, the proud parent, and the loving grandparent. It&apos;s a beautiful reminder of our strong community ties and the legacy we continue to build.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 py-2">
          {IMPACT_PHOTOS.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 80}>
              <div className={`rounded-[16px] overflow-hidden h-[280px] ${p.rotate}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt="El Alsson alumni reunion moment"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Alumni in Shots (Instagram) ──────────────────────────────────── */}
      <InShotsSection titlePrefix="Alumni" photos={SHOTS} />

      {/* ── Register As An Alsson Alumni ─────────────────────────────────── */}
      <section id="register" className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <div className="bg-[#FFC53A] rounded-[20px] p-5">
            <h2
              className="text-[#171717] mb-2"
              style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
            >
              Register As
              <br />
              <span style={{ fontWeight: 700 }}>An Alsson Alumni</span>
            </h2>
            <p className="text-[#171717] text-[16px] leading-[1.55] mb-6">
              Stay connected with the Alsson community, attend events and inspire current students.
            </p>

            <form className="bg-white/20 rounded-[16px] p-4 flex flex-col gap-3" action="#">
              <input type="text" name="fullName" placeholder="Full Name" className={FORM_INPUT_CLASS} />
              <input type="tel" name="mobile" placeholder="Mobile Number" className={FORM_INPUT_CLASS} />
              <input type="email" name="email" placeholder="E-mail Address" className={FORM_INPUT_CLASS} />

              <div className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="#171717" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="5" stroke="#171717" strokeWidth="1.6" />
                  <circle cx="18" cy="6" r="1.5" fill="#171717" />
                </svg>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram Username"
                  className={`${FORM_INPUT_CLASS} pl-11`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <select name="school" defaultValue="" className={`${FORM_INPUT_CLASS} appearance-none pr-9`}>
                    <option value="" disabled>School</option>
                    <option value="american">American School</option>
                    <option value="british">British School</option>
                  </select>
                  <SelectChevron />
                </div>
                <div className="relative">
                  <select name="gradYear" defaultValue="" className={`${FORM_INPUT_CLASS} appearance-none pr-9`}>
                    <option value="" disabled>Graduation Year</option>
                    {GRAD_YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input type="text" name="company" placeholder="Company / University" className={FORM_INPUT_CLASS} />
                <input type="text" name="jobTitle" placeholder="Job Title" className={FORM_INPUT_CLASS} />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center rounded-full mt-1
                           bg-[#0089B7] text-white text-[16px] font-medium
                           active:bg-[#006E92] transition-colors"
                style={{ height: "48px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
              >
                Submit
              </button>
              <p className="text-[#404040] text-[12px] leading-[1.5] text-center">
                We will keep your information private, strictly for El Alsson administrators.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
