import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import { CAREERS } from "@/lib/careers";

export function generateStaticParams() {
  return CAREERS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = CAREERS.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} — El Alsson Careers`,
    description: `Apply for ${job.title} at El Alsson International Schools. ${job.school} · ${job.type}.`,
  };
}

export default async function SingleCareerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = CAREERS.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F9FB] section-padding pt-12 pb-10">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Pill */}
          <div className="flex items-center justify-center" style={{ marginBottom: "-4px" }}>
            <span
              className="inline-block bg-[#FFE8B0] text-[#1A1406] text-[14px] rounded-md px-3 py-1"
              style={{ transform: "rotate(-2deg)", fontWeight: 400 }}
            >
              Job Details
            </span>
          </div>

          {/* Job title */}
          <h1
            className="text-[#0A0A0A]"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 500 }}
          >
            {job.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="text-[#00526E] text-[14px]">{job.school}</span>
            <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
            <span className="text-[#00526E] text-[14px]">{job.type}</span>
            <span className="w-1 h-1 rounded-full bg-[#00526E] shrink-0" />
            <span className="text-[#00526E] text-[14px]">{job.posted}</span>
          </div>

          {/* Apply CTA */}
          <a
            href={`mailto:vacancies@alsson.com?subject=Application — ${job.title}`}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0089B7] text-white text-[15px] font-medium active:bg-[#006E92] transition-colors"
            style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
          >
            APPLY NOW
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Sticky sub-header ─────────────────────────────────────────────── */}
      <div
        className="bg-[#E5F3F7] section-padding py-4 sticky top-16 z-10"
        style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.06)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p
              className="text-[#0A0A0A] truncate"
              style={{ fontSize: "15px", fontWeight: 700, lineHeight: "1.3" }}
            >
              {job.title}
            </p>
            <p className="text-[#00526E] text-[12px] truncate mt-0.5">
              {job.school} · {job.type}
            </p>
          </div>
          <a
            href={`mailto:vacancies@alsson.com?subject=Application — ${job.title}`}
            className="shrink-0 flex items-center gap-1.5 rounded-full bg-[#0089B7] text-white text-[13px] font-medium active:bg-[#006E92] transition-colors px-4"
            style={{ height: "40px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
          >
            Apply Now
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Job Content ───────────────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding py-10">
        <div className="flex flex-col gap-10">

          {/* Application instructions callout */}
          <ScrollReveal>
            <div
              className="bg-white rounded-[16px] p-5 flex flex-col gap-4"
              style={{ borderLeft: "3px solid #006E92" }}
            >
              <p className="text-[#0A0A0A] text-[16px] leading-[1.5]" style={{ fontWeight: 500 }}>
                {job.callout.heading}
              </p>
              <div className="text-[#404040] text-[15px] leading-[1.6] flex flex-col gap-3">
                <p>{job.callout.body}</p>
                <ol className="list-decimal pl-5 flex flex-col gap-2">
                  {job.callout.steps.map((step, i) => (
                    <li key={i}>
                      {step.includes("vacancies@alsson.com") ? (
                        <>
                          {step.split("vacancies@alsson.com")[0]}
                          <a
                            href="mailto:vacancies@alsson.com"
                            className="text-[#006E92] font-medium"
                          >
                            vacancies@alsson.com
                          </a>
                          {step.split("vacancies@alsson.com")[1]}
                        </>
                      ) : (
                        step
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>

          {/* You will need */}
          <ScrollReveal delay={80}>
            <div className="flex flex-col gap-4">
              <h2 style={{ fontSize: "22px", fontWeight: 500, lineHeight: "1.3" }}>
                You will need:
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-[#404040] text-[15px] leading-[1.6]">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Skills & Knowledge */}
          <ScrollReveal delay={160}>
            <div className="flex flex-col gap-4">
              <h2 style={{ fontSize: "22px", fontWeight: 500, lineHeight: "1.3" }}>
                Skills and Knowledge:
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-[#404040] text-[15px] leading-[1.6]">
                {job.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Apply CTA bottom */}
          <ScrollReveal delay={200}>
            <a
              href={`mailto:vacancies@alsson.com?subject=Application — ${job.title}`}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0089B7] text-white text-[15px] font-medium active:bg-[#006E92] transition-colors"
              style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="mt-5 flex flex-col gap-2 items-center">
              <p className="text-[#737373] text-[13px] text-center">
                Send your application to{" "}
                <a href="mailto:vacancies@alsson.com" className="text-[#006E92] font-medium">
                  vacancies@alsson.com
                </a>
              </p>
              <Link
                href="/careers"
                className="flex items-center gap-1 text-[#525252] text-[13px]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M8 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all positions
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
