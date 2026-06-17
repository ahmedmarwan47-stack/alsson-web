import Link from "next/link";
import { SCHOOLS, ANNOUNCEMENTS } from "@/lib/data";
import FeaturedEventsSection from "@/components/home/FeaturedEventsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import ElKheirSection from "@/components/home/ElKheirSection";
import FAQsSection from "@/components/home/FAQsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";
import AboutTextReveal from "@/components/home/AboutTextReveal";
import InShotsSection from "@/components/ui/InShotsSection";

// ─── Inline data ─────────────────────────────────────────────────────────────

const BLOG_POSTS = [
  {
    id: 1,
    tag: "News",
    date: "September 9, 2025",
    title: "Young Hercules, A Senior School Production Full Video",
    excerpt: "Representatives from top global universities will be on campus to meet with our Grade 11 and 12 students to discuss admissions and scholarships.",
    image: "/images/blog-featured-hercules.jpg",
  },
  {
    id: 2,
    tag: "Articles",
    date: "September 9, 2025",
    title: "Magic on El Alsson Walls by Mohamed Rabie",
    excerpt: "Representatives from top global universities will be on campus to discuss admissions and scholarships.",
    image: "/images/blog-magic-walls.jpg",
  },
  {
    id: 3,
    tag: "News",
    date: "September 9, 2025",
    title: "Class of 2025 Last First Day At El Alsson",
    excerpt: "We are incredibly proud to announce that our graduating class of 2024 has achieved an average IB score well above the global average.",
    image: "/images/blog-class-2025.jpg",
  },
  {
    id: 4,
    tag: "Articles",
    date: "September 9, 2025",
    title: "El Alsson Schools NewGiza Signs with Belcash",
    excerpt: "The Board of Directors has officially opened the newly expanded Early Years center, featuring immersive play-based learning experiences.",
    image: "/images/blog-belcash.jpg",
  },
];

// 6 photos (removed last 2 for cleaner mobile grid)
const INSTA_PHOTOS = [
  "/images/insta-1.jpg",
  "/images/insta-2.jpg",
  "/images/insta-3.jpg",
  "/images/insta-4.jpg",
  "/images/insta-5.jpg",
  "/images/insta-6.jpg",
];

const APP_FEATURES = [
  "Real-time grades and attendance tracking",
  "Full academic calendar with smart alerts",
  "Direct messaging with teachers and admin",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center hero-image-zoom"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%), " +
              "linear-gradient(58deg, rgba(0,198,255,0.2) 17%, rgba(242,249,251,0) 70%)",
          }}
        />
        <div className="relative flex-1 flex flex-col justify-end section-padding pb-10 pt-24">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 self-start"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/book-icon.svg" alt="" className="w-5 h-5 shrink-0" />
            <p className="text-[16px] leading-[1.5] text-[#FAFAFA]">
              <span className="font-semibold">Challenging</span>
              {" "}our students to{" "}
              <span className="font-semibold">think critically.</span>
            </p>
          </div>
          <h1
            className="text-[#FAFAFA] mb-6"
            style={{ fontSize: "36px", lineHeight: "1.2", fontWeight: 700 }}
          >
            A Community Built For Curiosity
          </h1>
          <div className="flex flex-col gap-3">
            <Link
              href="/admissions/apply"
              className="w-full flex items-center justify-center rounded-full bg-[#0089B7]
                         text-white text-[16px] font-medium tracking-[0.64px] uppercase
                         h-14 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)]
                         active:bg-[#006E92] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#tour"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#FAFAFA] text-[#FAFAFA]
                         text-[16px] font-medium tracking-[0.64px] uppercase
                         h-14 active:bg-white/10 transition-colors"
            >
              Start Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── Select Your School ───────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] section-padding py-12">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase text-[#737373] text-center mb-2">
            Your Path Forward
          </p>
          <h2 className="text-center mb-8" style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
            Select Your{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>School to Explore</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {SCHOOLS.map((school, i) => (
            <ScrollReveal key={school.slug} delay={i * 100}>
              <Link
                href={school.href}
                className="relative rounded-[16px] overflow-hidden block h-[260px] active:scale-[0.98] transition-transform"
                style={{ boxShadow: "0px 12px 16px 0px rgba(0,0,0,0.08), 0px 4px 6px 0px rgba(0,0,0,0.03)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={school.image}
                  alt={school.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[12px] text-[#FAFAFA]"
                    style={{ background: "#003749" }}
                  >
                    {school.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium mb-1" style={{ fontSize: "22px", lineHeight: "1.2" }}>
                    {school.name}
                  </h3>
                  <p className="text-[#E5E5E5] text-[14px] leading-[1.4]">{school.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Join Our Community ───────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <p className="text-[12px] font-bold text-[#0A0A0A] mb-2 tracking-wide">Admissions</p>
          <h2 className="mb-4" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
            Join Our{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Community</span>
          </h2>
          <p className="text-[#525252] text-[16px] leading-[1.6] mb-6">
            We believe the right school shapes not just what a child learns, but who they become.
            At Alsson, we welcome families seeking an education that spans continents and opens minds.
          </p>
          <Link
            href="/admissions"
            className="w-full flex items-center justify-center rounded-full
                       border border-[#262626] text-[#262626] text-[16px] font-medium
                       active:bg-[#F5F5F5] transition-colors mb-8"
            style={{ height: "52px" }}
          >
            Explore Admissions
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="relative mb-4">
            <div className="rounded-[16px] overflow-hidden h-[280px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-students.jpg"
                alt="El Alsson students"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* EA monogram — overlaps the photo from the bottom-right */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ea-pattern.png"
              alt=""
              aria-hidden
              className="absolute pointer-events-none select-none drop-shadow-xl"
              style={{
                bottom: "-28px",
                right: "-10px",
                width: "120px",
                height: "auto",
              }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="flex flex-wrap gap-3">
            {["45+ Student Nationalities", "150+ Extracurricular Activities"].map((stat) => (
              <div
                key={stat}
                className="inline-flex items-center gap-2 border border-[#D4D4D4] rounded-full px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0089B7] shrink-0" />
                <span className="text-[14px] text-[#404040]">{stat}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── About El-Alsson ──────────────────────────────────────────────── */}
      <section className="bg-white section-padding py-12">
        <ScrollReveal>
          <p className="text-[12px] font-bold text-[#0A0A0A] text-center mb-3 tracking-wide">
            About El-Alsson
          </p>
        </ScrollReveal>
        <AboutTextReveal />
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-10">
            <Link
              href="/about"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#262626] text-[#262626] text-[16px] font-medium
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              Know More
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: "/images/stat-experience.png",    value: "40+", label: "Years Of Experience" },
            { icon: "/images/stat-curricula.png",     value: "3",   label: "Curricula" },
            { icon: "/images/stat-campus.png",        value: "14",  label: "Acre Campus" },
            { icon: "/images/stat-nationalities.png", value: "40+", label: "Nationalities" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={150 + i * 80}>
              <div className="flex flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={stat.icon} alt="" className="w-16 h-16 object-contain" />
                <p className="text-[#0A0A0A] font-medium text-[32px] leading-[1.1]">{stat.value}</p>
                <p className="text-[#0A0A0A] text-[14px] text-center leading-[1.4]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Important Announcements ──────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2 className="mb-8" style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
            Important{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Announcements</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col divide-y divide-[#E5E5E5]">
          {ANNOUNCEMENTS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <Link href="/media-news?tab=Announcements" className="block py-5 group">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#737373]">
                        <rect x="1" y="2.5" width="14" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M5 1v3M11 1v3M1 6.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[12px] text-[#737373]">{item.date}</span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-medium mb-2" style={{ fontSize: "20px", lineHeight: "1.2" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#525252] text-[14px] leading-[1.5] mb-3">{item.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium"
                        style={{ background: "#FFC53A", color: "#171717" }}
                      >
                        {item.tag}
                      </span>
                      <span className="text-[12px] text-[#737373]">&middot; {item.readTime}</span>
                    </div>
                  </div>
                  <div className="shrink-0 mt-6 w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center group-active:bg-[#E5E5E5] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-6">
            <Link
              href="/media-news?tab=Announcements"
              className="w-full flex items-center justify-center rounded-full
                         border border-[#262626] text-[#262626] text-[16px] font-medium
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              View All Announcements
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Featured Events (client island) ─────────────────────────────── */}
      <FeaturedEventsSection />

      {/* ── El Alsson Facilities (client island) ─────────────────────────── */}
      <FacilitiesSection />

      {/* ── Media & News ─────────────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <h2 className="text-center mb-8" style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
            Media &amp;{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>News</span>
          </h2>
        </ScrollReveal>

        {/* Featured post */}
        <ScrollReveal>
          <Link href="/media-news" className="block mb-8 active:opacity-90">
            <div className="rounded-[16px] overflow-hidden mb-3" style={{ height: "220px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="inline-flex items-center px-3 py-0.5 rounded-full text-[12px] font-medium"
                style={{ background: "#001B25", color: "#FAFAFA" }}
              >
                Recently Posted
              </span>
              <span
                className="inline-flex items-center px-3 py-0.5 rounded-full text-[12px] font-medium"
                style={{ background: "#FFE8B0", color: "#0A0A0A" }}
              >
                {BLOG_POSTS[0].tag}
              </span>
              <span className="text-[12px] text-[#737373]">{BLOG_POSTS[0].date}</span>
            </div>
            <h3 className="text-[#0A0A0A] font-medium mb-1.5" style={{ fontSize: "20px", lineHeight: "1.3" }}>
              {BLOG_POSTS[0].title}
            </h3>
            <p className="text-[#525252] text-[14px] leading-[1.5]">{BLOG_POSTS[0].excerpt}</p>
          </Link>
        </ScrollReveal>

        {/* 3 article cards — side-by-side, image stretches to match text height */}
        <div className="flex flex-col gap-5">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 80}>
              <Link href="/media-news" className="flex gap-3 items-stretch active:opacity-90">
                <div
                  className="rounded-[12px] overflow-hidden shrink-0"
                  style={{ width: "110px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium"
                      style={{ background: "#FFE8B0", color: "#0A0A0A" }}
                    >
                      {post.tag}
                    </span>
                    <span className="text-[12px] text-[#737373]">{post.date}</span>
                  </div>
                  <p className="text-[#0A0A0A] font-medium text-[14px] leading-[1.3] mb-1">{post.title}</p>
                  <p className="text-[#525252] text-[12px] leading-[1.4] line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8">
            <Link
              href="/media-news"
              className="w-full flex items-center justify-center gap-2 rounded-full
                         border border-[#262626] text-[#262626] text-[16px] font-medium
                         active:bg-[#F5F5F5] transition-colors"
              style={{ height: "52px" }}
            >
              Read All
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Alsson El Kheir (client island) ──────────────────────────────── */}
      <ElKheirSection />

      {/* ── El-Alsson In Shots (Instagram) ───────────────────────────────── */}
      <InShotsSection titlePrefix="El-Alsson" photos={INSTA_PHOTOS} />

      {/* ── Stay Connected / App CTA ─────────────────────────────────────── */}
      <section className="section-padding py-10">
        <ScrollReveal>
          <div
            className="rounded-[20px] overflow-hidden relative"
            style={{
              background: "linear-gradient(68deg, rgba(153,208,226,0.4) 1%, rgba(153,208,226,1) 99%)",
            }}
          >
            {/* Phone mockup — bottom-right, transparent PNG clips to card */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/parentsapp.png"
              alt=""
              aria-hidden
              className="absolute bottom-0 right-0 pointer-events-none select-none"
              style={{ height: "300px", width: "auto" }}
            />

            {/* Content */}
            <div className="relative p-6">
              <h2 className="mb-3" style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
                Stay Connected to Your{" "}
                <span style={{ color: "#0089B7", fontWeight: 700 }}>Child&apos;s Journey</span>
              </h2>
              <p className="text-[#0A0A0A] text-[14px] leading-[1.6] mb-5">
                Access academic progress, receive real-time notifications, view the school calendar,
                and manage payments directly from your smartphone.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {APP_FEATURES.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="shrink-0 rounded-[8px] flex items-center justify-center"
                      style={{ width: "34px", height: "34px", background: "#E5F3F7" }}
                    >
                      {i === 0 && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="1.5" y="3" width="15" height="13" rx="2" stroke="#0089B7" strokeWidth="1.4" />
                          <path d="M5 1.5v3M13 1.5v3M1.5 7.5h15" stroke="#0089B7" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="7" stroke="#0089B7" strokeWidth="1.4" />
                          <path d="M9 8.5v4M9 5.5v1" stroke="#0089B7" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M2 3.5A1.5 1.5 0 013.5 2h11A1.5 1.5 0 0116 3.5v8A1.5 1.5 0 0114.5 13H6L2 17V3.5z" stroke="#0089B7" strokeWidth="1.4" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <p className="text-[#404040] text-[14px] leading-[1.5]">{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/app"
                className="w-full flex items-center justify-center gap-2 rounded-full
                           bg-[#0089B7] text-white text-[16px] font-medium
                           shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)]
                           active:bg-[#006E92] transition-colors mb-4"
                style={{ height: "52px" }}
              >
                Know More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Store buttons — full width to match Know More button */}
              <div className="flex gap-3 w-full">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 bg-black rounded-[8px] py-2.5 active:opacity-80"
                >
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                    <path d="M14.94 11.64c-.02-2.33 1.9-3.46 1.99-3.51-1.09-1.59-2.78-1.8-3.38-1.83-1.43-.15-2.81.85-3.54.85-.74 0-1.87-.83-3.08-.81-1.58.02-3.04.93-3.86 2.35-1.65 2.87-.42 7.12 1.19 9.44.79 1.14 1.73 2.42 2.96 2.38 1.19-.05 1.64-.77 3.08-.77 1.43 0 1.84.77 3.09.74 1.28-.02 2.09-1.16 2.87-2.31.91-1.32 1.28-2.61 1.3-2.68-.03-.01-2.5-.96-2.52-3.81l-.1.06zM12.55 4.48c.65-.8 1.09-1.9.97-3-.94.04-2.08.63-2.76 1.42-.6.7-1.13 1.82-.99 2.89 1.05.08 2.13-.53 2.78-1.31z" fill="white" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] leading-tight">Download on the</span>
                    <span className="text-white text-[12px] font-medium leading-tight">App Store</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FAFAFA] rounded-[8px] py-2.5 active:opacity-80 border border-[#E5E5E5]"
                >
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M1.16 1.04C.93 1.29.8 1.66.8 2.14v15.72c0 .48.13.85.36 1.1l.06.06L9.7 10.6v-.2L1.22.98l-.06.06z" fill="#00C3FF" />
                    <path d="M12.53 13.44L9.7 10.6v-.2l2.83-2.84.06.04 3.35 1.9c.96.54.96 1.43 0 1.98l-3.35 1.9-.06.06z" fill="#FFBC00" />
                    <path d="M12.59 13.38L9.7 10.5 1.16 19.04c.32.33.84.37 1.43.04l9.99-5.7z" fill="#F33D51" />
                    <path d="M12.59 7.62l-10-5.7C2 1.56 1.48 1.6 1.16 1.93L9.7 10.5l2.89-2.88z" fill="#00EE76" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[#0A0A0A] text-[12px] leading-tight">Get it on</span>
                    <span className="text-[#0A0A0A] text-[12px] font-medium leading-tight">Google Play</span>
                  </div>
                </a>
              </div>

              {/* Spacer so content doesn't overlap the phone mockup */}
              <div style={{ height: "300px" }} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQs (client island) ─────────────────────────────────────────── */}
      <FAQsSection />

      {/* ── Pre-footer CTA "Ready to Join El-Alsson" ─────────────────────── */}
      <PreFooterCTA />

    </div>
  );
}
