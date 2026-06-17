"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";

const PREVIOUS_EVENTS = [
  {
    slug: "grease-production",
    date: "22 Feb 2025",
    category: "Performing Arts",
    title: "Senior School Production: Grease",
    excerpt:
      "Grease: School Edition has officially wrapped, and what an incredible ride it was! Our talented students brought the 50s to life with dazzling performances and toe-tapping tunes.",
    image: "/images/event-hero-grease.jpg",
  },
  {
    slug: "art-exhibition",
    date: "15 Feb 2025",
    category: "Arts",
    title: "Art Exhibition in El Alsson Schools",
    excerpt:
      "A vibrant celebration of student creativity displayed across the school's main hall during the annual spring exhibition.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "prophets-birthday",
    date: "10 Feb 2025",
    category: "Cultural",
    title: "Prophet's Birthday Celebrations",
    excerpt:
      "A heartfelt gathering to celebrate the Prophet's birthday with the wider El Alsson community through music, recitation, and reflection.",
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "graduation-2024",
    date: "20 Jun 2024",
    category: "Ceremony",
    title: "Graduation Ceremony of Class of 2024",
    excerpt:
      "An unforgettable evening honoring the achievements and milestones of our graduating class of 2024.",
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "student-art",
    date: "5 Jun 2024",
    category: "Arts",
    title: "Celebration of Student Art Exhibition",
    excerpt:
      "Students across all grades showcased their artistic talents in a spectacular end-of-year exhibition.",
    image: "/images/event-student-art.jpg",
  },
  {
    slug: "mun-2025",
    date: "20 Jan 2025",
    category: "Academic",
    title: "ALSMUN 2025 — Annual Model UN Conference",
    excerpt:
      "Over 400 delegates from 28 schools across Egypt converged on campus for two days of debate, diplomacy, and discovery.",
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "swimming-championship-2025",
    date: "18 Mar 2025",
    category: "Athletic",
    title: "Regional Swimming Championship 2025",
    excerpt:
      "El Alsson's swim team brought home nine gold medals at the regional inter-school championship held in our indoor heated pool.",
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "stem-lab-launch",
    date: "3 Feb 2025",
    category: "Academic",
    title: "STEM Innovation Lab Grand Opening",
    excerpt:
      "Students, parents, and faculty gathered to celebrate the official opening of our new state-of-the-art STEM Innovation Lab.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "winter-concert-2024",
    date: "12 Dec 2024",
    category: "Performing Arts",
    title: "Winter Concert — Voices of Alsson",
    excerpt:
      "The school choir and orchestra joined forces for an evening of seasonal music that left the audience on their feet.",
    image: "/images/event-student-art.jpg",
  },
];

const UPCOMING_EVENTS = [
  {
    slug: "science-fair-2025",
    date: "15 Sep 2025",
    category: "Academic",
    title: "Annual Science Fair 2025",
    excerpt:
      "El Alsson's annual science fair returns with cutting-edge student projects spanning biology, physics, and environmental science.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "international-day",
    date: "20 Sep 2025",
    category: "Cultural",
    title: "International Day Celebration",
    excerpt:
      "A colorful celebration of our diverse school community with performances, food, and cultural exhibits from around the world.",
    image: "/images/event-prophets-birthday.jpg",
  },
  {
    slug: "sports-day",
    date: "25 Sep 2025",
    category: "Athletic",
    title: "Senior School Sports Day",
    excerpt:
      "A thrilling day of athletic competition across track, field, and team sports for all senior school students.",
    image: "/images/event-graduation-2024.jpg",
  },
  {
    slug: "parent-teacher-conference",
    date: "01 Oct 2025",
    category: "Academic",
    title: "Parent-Teacher Conference",
    excerpt:
      "A valuable opportunity for parents and teachers to connect, discuss progress, and align on student goals for the term ahead.",
    image: "/images/event-student-art.jpg",
  },
  {
    slug: "open-day-2025",
    date: "10 Oct 2025",
    category: "Community",
    title: "El Alsson Open Day — Welcome Prospective Families",
    excerpt:
      "Tour the campus, meet our teachers, and discover everything El Alsson has to offer. Families are warmly invited to register.",
    image: "/images/event-art-exhibition.jpg",
  },
  {
    slug: "young-hercules-2025",
    date: "18 Nov 2025",
    category: "Performing Arts",
    title: "Senior School Musical Production 2025",
    excerpt:
      "Auditions are complete and rehearsals are underway. Join us for three nights of student theatre that will blow you away.",
    image: "/images/blog-featured-hercules.jpg",
  },
  {
    slug: "book-fair-2025",
    date: "5 Nov 2025",
    category: "Academic",
    title: "Annual Scholastic Book Fair",
    excerpt:
      "The school's beloved book fair returns for a week of reading, browsing, and bringing new stories home. All ages welcome.",
    image: "/images/event-student-art.jpg",
  },
  {
    slug: "graduation-2025",
    date: "19 Jun 2026",
    category: "Ceremony",
    title: "Graduation Ceremony — Class of 2025",
    excerpt:
      "Celebrate the remarkable journey of our graduating class as they step forward into the next chapter of their lives.",
    image: "/images/event-graduation-2024.jpg",
  },
];

export default function EventsList() {
  const [tab, setTab] = useState<"previous" | "upcoming">("previous");
  const events = tab === "previous" ? PREVIOUS_EVENTS : UPCOMING_EVENTS;
  const featured = events[0];
  const rest = events.slice(1);

  return (
    <>
      {/* ── Featured hero card + toggle ─────────────────────── */}
      <section
        className="section-padding pt-8 pb-10"
        style={{ background: "linear-gradient(to bottom, #E0F8FF 0%, #F2F9FB 100%)" }}
      >
        {/* Tab toggle */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex rounded-full border border-[#99D0E2] bg-white"
            style={{ padding: "3px", gap: "2px" }}
          >
            {(["previous", "upcoming"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="rounded-full px-4 py-1 text-[13px] font-medium transition-colors capitalize"
                style={
                  tab === t
                    ? { background: "#33A1C5", color: "#fff" }
                    : { color: "#171717" }
                }
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured card — full-width overlay card */}
        <ScrollReveal>
          <Link
            href={`/events/${featured.slug}`}
            className="relative rounded-[20px] overflow-hidden block active:opacity-90"
            style={{ height: "280px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 45%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                  style={{ background: "#FFE8B0", color: "#0A0A0A" }}
                >
                  {featured.category}
                </span>
                <span className="text-[#CCE7F1] text-[12px]">{featured.date}</span>
              </div>
              <p
                className="text-white font-medium mb-1.5"
                style={{ fontSize: "20px", lineHeight: "1.3" }}
              >
                {featured.title}
              </p>
              <p className="text-[#D4D4D4] text-[12px] leading-[1.5] line-clamp-2">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Remaining events — 2-col overlay photo grid ─────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <div className="grid grid-cols-2 gap-3">
          {rest.map((ev, i) => (
            <ScrollReveal key={ev.slug} delay={i * 60}>
              <Link
                href={`/events/${ev.slug}`}
                className="relative rounded-[16px] overflow-hidden block active:opacity-90"
                style={{ aspectRatio: "3/4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 45%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="14" rx="2" stroke="#CCE7F1" strokeWidth="1.5" />
                      <path d="M6 2v3M14 2v3M2 9h16" stroke="#CCE7F1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[#CCE7F1] text-[11px]">{ev.date}</span>
                  </div>
                  <p
                    className="text-white font-medium leading-[1.3]"
                    style={{ fontSize: "14px" }}
                  >
                    {ev.title}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
