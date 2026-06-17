import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";

const EVENT_POSTS = [
  {
    slug: "grease-production",
    category: "Performing Arts",
    date: "22 Feb 2025",
    title: "Senior School Production: Grease",
    hero: "/images/event-hero-grease.jpg",
    content: [
      {
        type: "heading" as const,
        value: "What a Show!",
      },
      {
        type: "text" as const,
        value:
          "Grease: School Edition has officially wrapped, and what an incredible ride it was! From dazzling performances to toe-tapping tunes, our talented students brought the 50s to life in the most spectacular fashion. The energy, the passion, and the sheer dedication on that stage was truly something to behold.",
      },
      { type: "image" as const, value: "/images/event-hero-grease.jpg" },
      {
        type: "text" as const,
        value:
          "The cast poured their hearts into every scene. From the iconic opening number to the emotional finale, every student on stage demonstrated a level of confidence and artistry that filled the auditorium with pride. Parents, teachers, and guests gave a well-deserved standing ovation at every performance.",
      },
      {
        type: "grid" as const,
        value: ["/images/event-student-art.jpg", "/images/event-art-exhibition.jpg"],
      },
      {
        type: "text" as const,
        value:
          "Behind the scenes, the production was a monumental team effort. Set designers, costume makers, lighting technicians, and backstage crew — many of them students themselves — worked tirelessly over weeks to bring this vision to life. Their unseen contributions made every moment on stage possible.",
      },
      { type: "image" as const, value: "/images/event-graduation-2024.jpg" },
      {
        type: "text" as const,
        value:
          "We are beyond proud of every single student who took part in this production — on stage, off stage, and in the audience cheering their classmates on. Until next time, keep the Grease lightning spirit alive!",
      },
    ],
  },
  {
    slug: "art-exhibition",
    category: "Arts",
    date: "22 Feb 2025",
    title: "Art Exhibition in El Alsson Schools",
    hero: "/images/event-art-exhibition.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A vibrant celebration of student creativity displayed across the school's main hall during the annual spring exhibition. Students from all grades showcased paintings, sculptures, digital art, and mixed media projects that reflected their personal experiences and cultural heritage.",
      },
      { type: "image" as const, value: "/images/event-art-exhibition.jpg" },
      {
        type: "text" as const,
        value:
          "The exhibition was open to parents, staff, and the wider school community for three days. Art faculty guided visitors through the displays, highlighting the techniques and themes students explored throughout the year.",
      },
    ],
  },
  {
    slug: "prophets-birthday",
    category: "Cultural",
    date: "22 Feb 2025",
    title: "Prophet's Birthday Celebrations",
    hero: "/images/event-prophets-birthday.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A heartfelt gathering to celebrate the Prophet's birthday with the wider El Alsson community through music, recitation, and reflection. Students prepared special performances and shared the significance of the occasion with their classmates.",
      },
      { type: "image" as const, value: "/images/event-prophets-birthday.jpg" },
    ],
  },
  {
    slug: "graduation-2024",
    category: "Ceremony",
    date: "22 Feb 2025",
    title: "Graduation Ceremony of Class of 2024",
    hero: "/images/event-graduation-2024.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "An unforgettable evening honoring the achievements and milestones of our graduating class of 2024. Family, friends, and faculty gathered to celebrate the students who have made El Alsson proud throughout their journey.",
      },
      { type: "image" as const, value: "/images/event-graduation-2024.jpg" },
      {
        type: "text" as const,
        value:
          "The valedictorian speech brought tears to many eyes, while the class video montage captured years of growth, friendship, and academic achievement. Congratulations to each and every graduate — the world awaits!",
      },
    ],
  },
  {
    slug: "student-art",
    category: "Arts",
    date: "22 Feb 2025",
    title: "Celebration of Student Art Exhibition",
    hero: "/images/event-student-art.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "Students across all grades showcased their artistic talents in a spectacular end-of-year exhibition. The event featured over 300 pieces of student work spanning painting, photography, ceramics, and digital art.",
      },
      { type: "image" as const, value: "/images/event-student-art.jpg" },
    ],
  },
  {
    slug: "science-fair-2025",
    category: "Academic",
    date: "15 Sep 2025",
    title: "Annual Science Fair 2025",
    hero: "/images/event-art-exhibition.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "El Alsson's annual science fair returns with cutting-edge student projects spanning biology, physics, and environmental science. Teams competed for top honors while demonstrating innovative approaches to real-world problems.",
      },
    ],
  },
  {
    slug: "international-day",
    category: "Cultural",
    date: "20 Sep 2025",
    title: "International Day Celebration",
    hero: "/images/event-prophets-birthday.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A colorful celebration of our diverse school community with performances, food, and cultural exhibits from around the world. Over 45 nationalities were represented in the festivities.",
      },
    ],
  },
  {
    slug: "sports-day",
    category: "Athletic",
    date: "25 Sep 2025",
    title: "Senior School Sports Day",
    hero: "/images/event-graduation-2024.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A thrilling day of athletic competition across track, field, and team sports for all senior school students. Records were broken and sportsmanship was on full display.",
      },
    ],
  },
  {
    slug: "parent-teacher-conference",
    category: "Academic",
    date: "01 Oct 2025",
    title: "Parent-Teacher Conference",
    hero: "/images/event-student-art.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A valuable opportunity for parents and teachers to connect, discuss progress, and align on student goals for the term ahead. Individual sessions were available for all grade levels.",
      },
    ],
  },
];

function getAdjacentEvents(currentSlug: string) {
  const idx = EVENT_POSTS.findIndex((p) => p.slug === currentSlug);
  return {
    prev: idx > 0 ? EVENT_POSTS[idx - 1] : null,
    next: idx < EVENT_POSTS.length - 1 ? EVENT_POSTS[idx + 1] : null,
  };
}

function getReadAlso(currentSlug: string) {
  return EVENT_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

export function generateStaticParams() {
  return EVENT_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = EVENT_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Event Not Found" };
  return {
    title: `${post.title} — El Alsson International Schools`,
    description:
      post.content.find((b) => b.type === "text")?.value?.slice(0, 160) ?? "",
  };
}

export default async function SingleEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = EVENT_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentEvents(slug);
  const readAlso = getReadAlso(slug);

  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-10 text-center">
        <ScrollReveal>
          <p className="text-[#525252] text-[12px] uppercase tracking-[0.1em] mb-3">
            Featured Events
          </p>
          <h1
            className="text-[#0A0A0A] mb-4"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span
              className="inline-flex items-center px-3 py-0.5 rounded-full text-[12px] font-medium"
              style={{ background: "#FFE8B0", color: "#0A0A0A" }}
            >
              {post.category}
            </span>
            <span className="text-[12px] text-[#525252]">{post.date}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            className="rounded-[16px] overflow-hidden"
            style={{ height: "240px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Content ─────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <div className="flex flex-col gap-5">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-[#0A0A0A] font-medium mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    {block.value as string}
                  </h2>
                );
              }
              if (block.type === "text") {
                return (
                  <p
                    key={i}
                    className="text-[#525252] text-[15px] leading-[1.7]"
                  >
                    {block.value as string}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <div
                    key={i}
                    className="rounded-[16px] overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={block.value as string}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                );
              }
              if (block.type === "grid") {
                const images = block.value as string[];
                return (
                  <div key={i} className="grid grid-cols-2 gap-3">
                    {images.map((src, j) => (
                      <div
                        key={j}
                        className="rounded-[12px] overflow-hidden"
                        style={{ aspectRatio: "3/4" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Prev / Next ─────────────────────────────────────── */}
      <section className="bg-white section-padding py-6 border-t border-[#E5E5E5]">
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/events/${prev.slug}`}
              className="flex items-center gap-2 text-[#0089B7] text-[14px] font-medium active:opacity-70"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous Event
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/events/${next.slug}`}
              className="flex items-center gap-2 text-[#0089B7] text-[14px] font-medium active:opacity-70"
            >
              Next Event
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      {/* ── Read Also ───────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <ScrollReveal>
          <h2
            className="text-[#0A0A0A] font-medium mb-6"
            style={{ fontSize: "26px", lineHeight: "1.2" }}
          >
            Read Also
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          {readAlso.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <Link
                href={`/events/${p.slug}`}
                className="block active:opacity-90"
              >
                <div
                  className="rounded-[16px] overflow-hidden mb-3"
                  style={{ aspectRatio: "3/2" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.hero}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-[12px] font-medium"
                    style={{ background: "#FFE8B0", color: "#0A0A0A" }}
                  >
                    {p.category}
                  </span>
                  <span className="text-[12px] text-[#525252]">{p.date}</span>
                </div>
                <h3
                  className="text-[#0A0A0A] font-medium"
                  style={{ fontSize: "16px", lineHeight: "1.4" }}
                >
                  {p.title}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
