import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/home/ScrollReveal";
import PreFooterCTA from "@/components/layout/PreFooterCTA";

const MEDIA_POSTS = [
  {
    slug: "young-hercules-production",
    tag: "News",
    date: "September 9, 2025",
    title: "Young Hercules, A Senior School Production Full Video",
    hero: "/images/blog-featured-hercules.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "Representatives from top global universities were on campus to meet with our Grade 11 and 12 students to discuss admissions, scholarships, and the incredible journey ahead. The event gave our students direct access to world-class institutions and the opportunity to explore their futures firsthand.",
      },
      { type: "image" as const, value: "/images/blog-featured-hercules.jpg" },
      {
        type: "text" as const,
        value:
          "This year's production of Young Hercules was nothing short of spectacular. The cast and crew poured months of dedication into bringing this timeless story to our stage. From stunning choreography to powerful vocals, every moment showcased the incredible talent within our school community.",
      },
      {
        type: "grid" as const,
        value: ["/images/event-student-art.jpg", "/images/event-art-exhibition.jpg"],
      },
      {
        type: "text" as const,
        value:
          "We are beyond proud of every single student who took part — on stage, backstage, and in the audience cheering their classmates on. These are the moments that define the El Alsson experience.",
      },
    ],
  },
  {
    slug: "magic-walls",
    tag: "News",
    date: "September 9, 2025",
    title: "Magic on El Alsson Walls by Mohamed Rabie",
    hero: "/images/blog-magic-walls.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "An extraordinary mural project has transformed the school's corridors into a vibrant gallery celebrating Egyptian heritage and student creativity. Artist Mohamed Rabie worked alongside our students to bring color and culture to every wall.",
      },
      { type: "image" as const, value: "/images/blog-magic-walls.jpg" },
      {
        type: "text" as const,
        value:
          "The project spanned three weeks, with students from all grade levels contributing to the design and execution of the murals. Each wall tells a unique story — from ancient Egyptian mythology to modern-day Cairo life.",
      },
    ],
  },
  {
    slug: "class-2025",
    tag: "News",
    date: "September 9, 2025",
    title: "Class of 2025 Last First Day At El Alsson",
    hero: "/images/blog-class-2025.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "We are incredibly proud to announce that our graduating class of 2025 has achieved outstanding scores well above the global average. Their dedication, hard work, and resilience have truly paid off.",
      },
      { type: "image" as const, value: "/images/blog-class-2025.jpg" },
      {
        type: "text" as const,
        value:
          "The class of 2025 gathered for one last first day — a bittersweet tradition that marks the beginning of their final year at El Alsson. Emotions ran high as students, teachers, and parents came together to celebrate this milestone.",
      },
    ],
  },
  {
    slug: "belcash",
    tag: "News",
    date: "September 9, 2025",
    title: "El Alsson Schools NewGiza Signs with Belcash",
    hero: "/images/blog-belcash.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "The Board of Directors has officially signed a landmark partnership with Belcash, expanding financial convenience for our school community. This partnership brings cashless payment solutions to campus.",
      },
      { type: "image" as const, value: "/images/blog-belcash.jpg" },
      {
        type: "text" as const,
        value:
          "Parents can now manage school-related payments through a streamlined digital platform, making fee payments, cafeteria purchases, and event registrations easier than ever before.",
      },
    ],
  },
  {
    slug: "art-exhibition-2024",
    tag: "News",
    date: "September 11, 2025",
    title: "Annual Art Exhibition Class 2024 Opening",
    hero: "/images/event-art-exhibition.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "Students from all grades presented their artwork in a vibrant exhibition celebrating creativity, innovation, and cultural expression. The exhibition featured paintings, sculptures, digital art, and mixed media from over 200 students.",
      },
      { type: "image" as const, value: "/images/event-art-exhibition.jpg" },
    ],
  },
  {
    slug: "robotics-series",
    tag: "News",
    date: "September 12, 2025",
    title: "New Robotics Workshop Series Launches",
    hero: "/images/blog-magic-walls.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A new workshop series fosters STEM skills through hands-on robotics challenges for middle and senior school students. The program introduces students to programming, mechanical engineering, and creative problem-solving.",
      },
    ],
  },
  {
    slug: "gallery-graduation",
    tag: "Gallery",
    date: "June 20, 2025",
    title: "Class of 2024 Graduation Ceremony",
    hero: "/images/event-graduation-2024.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A stunning gallery capturing all the highlights from this year's emotional and joyful graduation ceremony. Families, friends, and faculty gathered to celebrate the remarkable achievements of our graduating class.",
      },
      { type: "image" as const, value: "/images/event-graduation-2024.jpg" },
    ],
  },
  {
    slug: "gallery-student-art",
    tag: "Gallery",
    date: "May 15, 2025",
    title: "Student Art Exhibition Gallery",
    hero: "/images/event-student-art.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "Browse through incredible student artworks displayed across the school's main hall during the annual exhibition week.",
      },
    ],
  },
  {
    slug: "article-mindfulness",
    tag: "Articles",
    date: "September 13, 2025",
    title: "Mindfulness and Meditation Sessions Begin",
    hero: "/images/blog-class-2025.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "Weekly sessions designed to promote mental health, focus, and stress relief among students and staff throughout the school year. The program is led by certified mindfulness practitioners.",
      },
    ],
  },
  {
    slug: "article-stem",
    tag: "Articles",
    date: "September 10, 2025",
    title: "How STEM Education Is Shaping Our Future Leaders",
    hero: "/images/blog-belcash.jpg",
    content: [
      {
        type: "text" as const,
        value:
          "A deep dive into El Alsson's approach to integrating science, technology, engineering, and math across all grade levels. Our curriculum prepares students for the challenges and opportunities of tomorrow.",
      },
    ],
  },
];

function getAdjacentPosts(currentSlug: string) {
  const idx = MEDIA_POSTS.findIndex((p) => p.slug === currentSlug);
  return {
    prev: idx > 0 ? MEDIA_POSTS[idx - 1] : null,
    next: idx < MEDIA_POSTS.length - 1 ? MEDIA_POSTS[idx + 1] : null,
  };
}

function getReadAlso(currentSlug: string) {
  return MEDIA_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

export function generateStaticParams() {
  return MEDIA_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = MEDIA_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — El Alsson International Schools`,
    description:
      post.content.find((b) => b.type === "text")?.value?.slice(0, 160) ?? "",
  };
}

export default async function MediaPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = MEDIA_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const readAlso = getReadAlso(slug);

  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-8 pb-10 text-center">
        <ScrollReveal>
          <p className="text-[#525252] text-[12px] uppercase tracking-[0.1em] mb-3">
            Media &amp; News
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
              {post.tag}
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
              href={`/media-news/${prev.slug}`}
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
              Previous Post
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/media-news/${next.slug}`}
              className="flex items-center gap-2 text-[#0089B7] text-[14px] font-medium active:opacity-70"
            >
              Next Post
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
                href={`/media-news/${p.slug}`}
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
                    {p.tag}
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
