"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import AnnouncementSheet from "./AnnouncementSheet";

const TABS = ["News", "Gallery", "Articles", "Announcements"] as const;
type Tab = (typeof TABS)[number];

const POSTS: {
  slug: string;
  tag: "News" | "Articles";
  date: string;
  featured?: boolean;
  title: string;
  excerpt: string;
  image: string;
}[] = [
  {
    slug: "young-hercules-production",
    tag: "News",
    date: "September 9, 2025",
    featured: true,
    title: "Young Hercules, A Senior School Production Full Video",
    excerpt:
      "Representatives from top global universities will be on campus to meet with our Grade 11 and 12 students to discuss admissions and scholarships.",
    image: "/images/blog-featured-hercules.jpg",
  },
  {
    slug: "magic-walls",
    tag: "News",
    date: "September 9, 2025",
    title: "Magic on El Alsson Walls by Mohamed Rabie",
    excerpt:
      "An extraordinary mural project transforms the school's corridors into a vibrant gallery celebrating Egyptian heritage and student creativity.",
    image: "/images/blog-magic-walls.jpg",
  },
  {
    slug: "class-2025",
    tag: "News",
    date: "September 9, 2025",
    title: "Class of 2025 Last First Day At El Alsson",
    excerpt:
      "We are incredibly proud to announce that our graduating class of 2025 has achieved outstanding IB scores well above the global average.",
    image: "/images/blog-class-2025.jpg",
  },
  {
    slug: "belcash",
    tag: "News",
    date: "September 9, 2025",
    title: "El Alsson Schools NewGiza Signs with Belcash",
    excerpt:
      "The Board of Directors has officially signed a landmark partnership, expanding financial convenience for our school community.",
    image: "/images/blog-belcash.jpg",
  },
  {
    slug: "art-exhibition-2024",
    tag: "News",
    date: "September 11, 2025",
    title: "Annual Art Exhibition Class 2024 Opening",
    excerpt:
      "Students from all grades present their artwork in a vibrant exhibition celebrating creativity, innovation, and cultural expression.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "robotics-series",
    tag: "News",
    date: "September 12, 2025",
    title: "New Robotics Workshop Series Launches",
    excerpt:
      "A new workshop series fosters STEM skills through hands-on robotics challenges for middle and senior school students.",
    image: "/images/blog-magic-walls.jpg",
  },
  {
    slug: "ib-results-2025",
    tag: "News",
    date: "July 5, 2025",
    title: "El Alsson Students Shine in IB Diploma Results 2025",
    excerpt:
      "Our IB class of 2025 recorded an average score of 36 points — nearly 7 points above the global average — with six students achieving perfect 45s.",
    image: "/images/blog-class-2025.jpg",
  },
  {
    slug: "swimming-championship",
    tag: "News",
    date: "March 18, 2025",
    title: "Alsson Swim Team Claims Regional Championship Title",
    excerpt:
      "Our swimmers dominated the regional inter-school championship, securing gold medals across nine categories in the heated indoor pool.",
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "stem-lab-opening",
    tag: "News",
    date: "February 3, 2025",
    title: "State-of-the-Art STEM Innovation Lab Now Open",
    excerpt:
      "El Alsson NewGiza officially opened its new innovation lab equipped with 3D printers, laser cutters, and a dedicated AI research station.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "mun-conference",
    tag: "News",
    date: "January 20, 2025",
    title: "ALSMUN 2025 Welcomes 400 Delegates from 28 Schools",
    excerpt:
      "El Alsson hosted its annual Model UN conference, drawing students from across Egypt and the region to debate pressing global issues.",
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "article-mindfulness",
    tag: "Articles",
    date: "September 13, 2025",
    title: "Mindfulness and Meditation Sessions Begin",
    excerpt:
      "Weekly sessions designed to promote mental health, focus, and stress relief among students and staff throughout the school year.",
    image: "/images/blog-class-2025.jpg",
  },
  {
    slug: "article-stem",
    tag: "Articles",
    date: "September 10, 2025",
    title: "How STEM Education Is Shaping Our Future Leaders",
    excerpt:
      "A deep dive into El Alsson's approach to integrating science, technology, engineering, and math across all grade levels.",
    image: "/images/blog-belcash.jpg",
  },
  {
    slug: "article-bilingual",
    tag: "Articles",
    date: "August 25, 2025",
    title: "The Science Behind Bilingual Education at El Alsson",
    excerpt:
      "Research shows bilingual learners develop stronger cognitive flexibility. Here's how our dual-language curriculum is built around that insight.",
    image: "/images/blog-magic-walls.jpg",
  },
  {
    slug: "article-college-counseling",
    tag: "Articles",
    date: "August 10, 2025",
    title: "Inside El Alsson's College Counseling Programme",
    excerpt:
      "From Grade 9 to the final application click — our counselors walk every student through every step of the university admissions journey.",
    image: "/images/event-student-art.jpg",
  },
  {
    slug: "article-house-system",
    tag: "Articles",
    date: "July 28, 2025",
    title: "Why Our House System Builds More Than School Spirit",
    excerpt:
      "Houses aren't just about sports. We explore how El Alsson's four-house structure cultivates leadership, resilience, and a sense of belonging.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "article-reading-culture",
    tag: "Articles",
    date: "June 15, 2025",
    title: "Building a Reading Culture: Lessons from Our Libraries",
    excerpt:
      "How dedicated reading time, a student-led book club, and a freshly stocked library are turning El Alsson students into lifelong readers.",
    image: "/images/blog-belcash.jpg",
  },
];

const GALLERY_ALBUMS = [
  {
    slug: "gallery-production-2026",
    title: "Senior School Production 2026",
    photoCount: 35,
    image: "/images/blog-featured-hercules.jpg",
  },
  {
    slug: "gallery-football",
    title: "Alsson Football Competition",
    photoCount: 72,
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "gallery-art-exhibition",
    title: "Elementary Art Exhibition",
    photoCount: 48,
    image: "/images/event-student-art.jpg",
  },
  {
    slug: "gallery-alumni",
    title: "Alumni Gathering 2025",
    photoCount: 31,
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "gallery-mun",
    title: "ALSMUN Conference 2025",
    photoCount: 19,
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "gallery-council",
    title: "El-Alsson Parent Council 2026",
    photoCount: 52,
    image: "/images/blog-magic-walls.jpg",
  },
  {
    slug: "gallery-graduation-2025",
    title: "Graduation Ceremony Class of 2025",
    photoCount: 89,
    image: "/images/blog-class-2025.jpg",
  },
  {
    slug: "gallery-sports-day",
    title: "Senior School Sports Day 2025",
    photoCount: 64,
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "gallery-stem-lab",
    title: "STEM Innovation Lab Opening",
    photoCount: 27,
    image: "/images/blog-belcash.jpg",
  },
  {
    slug: "gallery-international-day",
    title: "International Day Celebration",
    photoCount: 113,
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "gallery-prophets-birthday",
    title: "Prophet's Birthday Celebration",
    photoCount: 44,
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "gallery-swimming",
    title: "Regional Swimming Championship",
    photoCount: 58,
    image: "/images/event-student-art.jpg",
  },
];

const ANNOUNCEMENTS = [
  {
    id: "landlines-down",
    title: "Landlines are temporarily down",
    date: "Sat 31 Mar 2026",
    tag: "Notice",
    readTime: "1 min read",
    excerpt:
      "We are currently experiencing a technical issue with our landlines. Please use the mobile lines provided below.",
    body: `Dear Parents,
We are currently experiencing a technical issue with our landlines. They keep intermittently going down and coming back online, causing disruptions in communications.

Until this issue is resolved, if you try calling us and the lines are down, please use the below mobile lines should you need to contact the school.

01001617746 Mrs Hala Hosny British Early Years and Primary
01001617747 Mrs Ola Omar American Early Childhood and Elementary
01065524260 / 01281212729 / 01050545672 Clinic
01281212342 Fees
01271155233 Admissions
01271155229 / 01017886557 Telephone Operators
01068811088 Bus Control
01281212637 British Secondary Office – Heba Haridy
01281212560 American Senior Office – Dina Omran

Apologies for any inconvenience`,
  },
  {
    id: "new-library-books",
    title: "New library books available now",
    date: "Wed 15 Jan 2026",
    tag: "Update",
    readTime: "1 min read",
    excerpt:
      "New fiction, non-fiction, and reference materials across all grade levels are now available for checkout at the library.",
    body: `Dear Parents,

We are excited to announce that new library books have arrived and are now available for checkout. The collection includes fiction, non-fiction, and reference materials across all grade levels.

Students can visit the library during their designated library periods or during break times. We encourage all students to explore the new collection.

Happy Reading!`,
  },
  {
    id: "spring-sports",
    title: "Spring sports registration open",
    date: "Mon 10 Feb 2026",
    tag: "Sports",
    readTime: "2 min read",
    excerpt:
      "Spring sports registration is now open for football, basketball, swimming, track & field, and tennis.",
    body: `Dear Parents,

Spring sports registration is now open. Please register your child for their preferred sport through the school portal by February 28th.

Available sports:
- Football
- Basketball
- Swimming
- Track & Field
- Tennis

Practices will begin on March 3rd. For more information, contact the PE department.`,
  },
  {
    id: "parent-teacher-conf",
    title: "Parent-teacher conferences scheduled",
    date: "Thu 20 Feb 2026",
    tag: "Academic",
    readTime: "1 min read",
    excerpt:
      "Book your 15-minute slot for Term 2 parent-teacher conferences through the school app.",
    body: `Dear Parents,

Parent-teacher conferences for Term 2 have been scheduled. Please book your time slot through the school app.

American School: February 25-26
British School: February 27-28

Each session is 15 minutes. Please arrive 5 minutes before your scheduled time.`,
  },
  {
    id: "early-dismissal",
    title: "Reminder: Early dismissal on Friday",
    date: "Wed 5 Mar 2026",
    tag: "Notice",
    readTime: "1 min read",
    excerpt:
      "School will dismiss early this Friday at 12:30 PM for staff professional development. After-school activities are cancelled.",
    body: `Dear Parents,

This is a reminder that school will dismiss early this Friday, March 7th, at 12:30 PM for staff professional development. Buses will depart at 12:45 PM.

After-school activities are cancelled for this day. Please make arrangements for early pickup if needed.`,
  },
  {
    id: "garden-planting",
    title: "School garden planting day",
    date: "Sat 15 Mar 2026",
    tag: "Event",
    readTime: "2 min read",
    excerpt:
      "Join us on Saturday, March 15th for our annual school garden planting day. RSVP by March 12th through the school app.",
    body: `Dear Parents,

Our annual school garden planting day is coming up! Students and families are welcome to join us on Saturday, March 15th from 9:00 AM to 12:00 PM.

Please bring gardening gloves. Tools, soil, and seeds will be provided. Light refreshments will be available.

RSVP through the school app by March 12th.`,
  },
  {
    id: "bus-route-update",
    title: "Updated bus routes for Term 3",
    date: "Sun 2 Mar 2026",
    tag: "Notice",
    readTime: "2 min read",
    excerpt:
      "Several bus routes have been adjusted for Term 3 due to road works near the campus entrance. Please review the updated schedule.",
    body: `Dear Parents,

Due to ongoing road works near the NewGiza campus entrance, we have adjusted several bus routes effective Monday, March 9th.

Affected routes: Lines 4, 7, 11, and 14.

Please check the school app for your child's updated pickup time and stop location. If you have questions, contact the bus coordinator at 01068811088.

We apologize for any inconvenience and thank you for your patience.`,
  },
  {
    id: "uniform-reminder",
    title: "Uniform compliance reminder — Term 3",
    date: "Mon 9 Feb 2026",
    tag: "Notice",
    readTime: "1 min read",
    excerpt:
      "As Term 3 begins, please ensure your child arrives in full school uniform including the correct PE kit on sports days.",
    body: `Dear Parents,

As we begin Term 3, we would like to remind all families that students are expected to arrive in full school uniform every day.

On PE days, students should wear the official Alsson sports kit. Trainers must be plain white or plain black.

Students not in compliance will be asked to change into spare uniform kept at the school office.

Thank you for your continued cooperation.`,
  },
  {
    id: "cafeteria-menu",
    title: "New cafeteria menu launches next week",
    date: "Thu 22 Jan 2026",
    tag: "Update",
    readTime: "1 min read",
    excerpt:
      "A refreshed cafeteria menu with expanded healthy options, allergen labelling, and a new hot breakfast service starts Monday.",
    body: `Dear Parents,

We are excited to announce that our cafeteria will launch a refreshed menu beginning Monday, January 26th.

Key updates:
- Expanded healthy options including daily salad bar
- Full allergen labelling on every item
- New hot breakfast service from 7:15 AM
- Weekly rotating specials

Menus will be published every Friday on the school app for the following week.`,
  },
  {
    id: "school-photo-day",
    title: "School photo day — Wednesday 12 Feb",
    date: "Mon 3 Feb 2026",
    tag: "Event",
    readTime: "1 min read",
    excerpt:
      "Individual and class photos will be taken on Wednesday, February 12th. Students should arrive in full uniform.",
    body: `Dear Parents,

School photo day is on Wednesday, February 12th. All students should arrive in full, neat school uniform.

Individual portraits will be taken in the morning. Class group photos will take place after break.

Order forms will be sent home this week. Online ordering is also available through the school app until February 10th.`,
  },
  {
    id: "locker-assignment",
    title: "Locker assignments — secondary school",
    date: "Tue 13 Jan 2026",
    tag: "Update",
    readTime: "1 min read",
    excerpt:
      "Secondary students can collect their locker assignments from the school office starting Thursday. Combination locks are available at the bookshop.",
    body: `Dear Secondary School Students and Parents,

Locker assignments for the new term are ready. Students can collect their assignment card from the school office starting Thursday, January 15th.

Combination locks (required) are available for purchase at the school bookshop for 75 EGP.

Please do not leave valuable items in lockers overnight. The school is not responsible for lost or stolen property.`,
  },
];

export default function MediaNewsList() {
  const searchParams = useSearchParams();
  const initialTab = TABS.includes(searchParams.get("tab") as Tab)
    ? (searchParams.get("tab") as Tab)
    : "News";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [openAnnouncement, setOpenAnnouncement] = useState<
    (typeof ANNOUNCEMENTS)[number] | null
  >(null);

  const handleCloseSheet = useCallback(() => setOpenAnnouncement(null), []);

  const featured = POSTS.find((p) => p.featured);
  const grid = POSTS.filter((p) => !p.featured && p.tag === activeTab);

  return (
    <>
      {/* ── Hero + tabs + featured card ─────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-10">
        <ScrollReveal>
          <div className="text-center mb-1">
            <span
              className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md"
              style={{ fontWeight: 400 }}
            >
              Stories
            </span>
          </div>

          <h1
            className="text-[#0A0A0A] text-center mb-3"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
          >
            Latest Media &amp; News
            <br />
            <span style={{ color: "#0089B7" }}>From Alsson</span>
          </h1>

          <p className="text-[#525252] text-[14px] leading-[1.6] text-center mb-6">
            Stay connected to the rhythm of Alsson. From academic milestones
            and arts performances to sports competitions and community
            gatherings, our calendar keeps you informed of what matters most.
          </p>
        </ScrollReveal>

        {/* Tab pills */}
        <div className="flex justify-center mb-7">
          <div
            className="inline-flex rounded-full border border-[#99D0E2] bg-white"
            style={{ padding: "3px", gap: "2px" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="rounded-full px-3 py-1 text-[13px] transition-colors whitespace-nowrap"
                style={
                  activeTab === tab
                    ? { background: "#33A1C5", color: "#fff", fontWeight: 500 }
                    : { color: "#171717" }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured article — only for News / Articles tabs */}
        {(activeTab === "News" || activeTab === "Articles") && featured && (
          <ScrollReveal delay={80}>
            <Link
              href={`/media-news/${featured.slug}`}
              className="block active:opacity-90"
            >
              <div
                className="rounded-[16px] overflow-hidden mb-3"
                style={{ height: "220px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-medium"
                  style={{ background: "#001B25", color: "#FAFAFA" }}
                >
                  Recently Posted
                </span>
                <span
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-medium"
                  style={{ background: "#FFE8B0", color: "#0A0A0A" }}
                >
                  {featured.tag}
                </span>
                <span className="text-[12px] text-[#525252]">
                  {featured.date}
                </span>
              </div>
              <h2
                className="text-[#0A0A0A] font-medium mb-1.5"
                style={{ fontSize: "20px", lineHeight: "1.3" }}
              >
                {featured.title}
              </h2>
              <p className="text-[#525252] text-[14px] leading-[1.55]">
                {featured.excerpt}
              </p>
            </Link>
          </ScrollReveal>
        )}
      </section>

      {/* ── News / Articles grid ────────────────────────────── */}
      {(activeTab === "News" || activeTab === "Articles") && (
        <section className="bg-[#FAFAFA] section-padding py-10">
          {grid.length === 0 ? (
            <p className="text-center text-[#525252] text-[14px] py-12">
              No {activeTab} posts yet. Check back soon!
            </p>
          ) : (
            <div className="flex flex-col gap-8">
              {grid.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 50}>
                  <Link
                    href={`/media-news/${post.slug}`}
                    className="block active:opacity-90"
                  >
                    <div
                      className="rounded-[16px] overflow-hidden mb-3"
                      style={{ aspectRatio: "3/2" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ background: "#FFE8B0", color: "#0A0A0A" }}
                      >
                        {post.tag}
                      </span>
                      <span className="text-[12px] text-[#525252]">
                        {post.date}
                      </span>
                    </div>
                    <h3
                      className="text-[#0A0A0A] font-medium mb-1.5"
                      style={{ fontSize: "18px", lineHeight: "1.35" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-[#525252] text-[14px] leading-[1.55] line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Gallery — 2-col overlay album grid ─────────────── */}
      {activeTab === "Gallery" && (
        <section className="bg-[#FAFAFA] section-padding py-10">
          <div className="grid grid-cols-2 gap-3">
            {GALLERY_ALBUMS.map((album, i) => (
              <ScrollReveal key={album.slug} delay={i * 50}>
                <Link
                  href={`/media-news/${album.slug}`}
                  className="relative rounded-[16px] overflow-hidden block active:opacity-90"
                  style={{ aspectRatio: "1/1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={album.image}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* 50% black overlay for text legibility */}
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
                  {/* Title — top left */}
                  <p
                    className="absolute top-0 left-0 right-0 p-3 text-white font-medium leading-[1.3]"
                    style={{ fontSize: "13px" }}
                  >
                    {album.title}
                  </p>
                  {/* Photo count badge — bottom right (matches Figma 11674:12600) */}
                  <div className="absolute bottom-2 right-2 flex items-center rounded-full bg-[#0089B7]" style={{ gap: "4px", paddingLeft: "2px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px" }}>
                    {/* Dark circle with album icon */}
                    <div className="flex items-center justify-center rounded-full bg-[#003749] shrink-0" style={{ width: "24px", height: "24px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/album-02.svg" alt="" width={16} height={16} />
                    </div>
                    <span className="text-white leading-[1.5] whitespace-nowrap" style={{ fontSize: "12px" }}>
                      {album.photoCount} Photos
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Announcements — homepage row layout ────────────── */}
      {activeTab === "Announcements" && (
        <section className="bg-[#FAFAFA] section-padding py-10">
          <div className="flex flex-col divide-y divide-[#E5E5E5]">
            {ANNOUNCEMENTS.map((ann, i) => (
              <ScrollReveal key={ann.id} delay={i * 50}>
                <button
                  onClick={() => setOpenAnnouncement(ann)}
                  className="w-full text-left py-5 group active:bg-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0 text-[#737373]"
                        >
                          <rect
                            x="1"
                            y="2.5"
                            width="14"
                            height="12.5"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M5 1v3M11 1v3M1 6.5h14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-[12px] text-[#737373]">
                          {ann.date}
                        </span>
                      </div>
                      <h3
                        className="text-[#0A0A0A] font-medium mb-2"
                        style={{ fontSize: "18px", lineHeight: "1.2" }}
                      >
                        {ann.title}
                      </h3>
                      <p className="text-[#525252] text-[14px] leading-[1.5] mb-3">
                        {ann.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium"
                          style={{ background: "#FFC53A", color: "#171717" }}
                        >
                          {ann.tag}
                        </span>
                        <span className="text-[12px] text-[#737373]">
                          &middot; {ann.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 mt-6 w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center group-active:bg-[#E5E5E5] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6 4l4 4-4 4"
                          stroke="#525252"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Announcement bottom sheet */}
      <AnnouncementSheet
        announcement={openAnnouncement}
        onClose={handleCloseSheet}
      />
    </>
  );
}
