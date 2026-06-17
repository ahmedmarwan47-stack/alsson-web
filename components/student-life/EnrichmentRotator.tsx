"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/home/ScrollReveal";
import StageIcon from "@/components/academics/StageIcon";
import type { FacilityFeature } from "@/lib/stages";

const ROTATION_MS = 4500;

type Props = {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  lead?: string;
  fallbackImage: string;
  features: FacilityFeature[];
  ctaLabel?: string;
  ctaHref?: string;
  bg?: string;
  pyTop?: number;
  pyBottom?: number;
  titleSize?: number;
  titleWeight?: number;
};

export default function EnrichmentRotator({
  id,
  eyebrow,
  title,
  lead,
  fallbackImage,
  features,
  ctaLabel,
  ctaHref,
  bg,
  pyTop = 48,
  pyBottom = 48,
  titleSize = 28,
  titleWeight = 400,
}: Props) {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((p) => (p + 1) % features.length);
      setProgressKey((k) => k + 1);
    }, ROTATION_MS);
    return () => window.clearInterval(t);
  }, [features.length, progressKey]);

  function selectFeature(i: number) {
    if (i === active) return;
    setActive(i);
    setProgressKey((k) => k + 1);
  }

  const segmentPct = 100 / features.length;
  const baseFill = active * segmentPct;

  return (
    <section
      id={id}
      className="section-padding"
      style={{
        background: bg ?? "linear-gradient(to bottom, #E9F7FB, #FAFAFA)",
        paddingTop: `${pyTop}px`,
        paddingBottom: `${pyBottom}px`,
      }}
    >
      <ScrollReveal>
        {eyebrow}
        {title && (
          <h2
            className="mb-2"
            style={{
              fontSize: `${titleSize}px`,
              lineHeight: 1.2,
              fontWeight: titleWeight,
            }}
          >
            {title}
          </h2>
        )}
        {lead && (
          <p className="text-[#525252] text-[14px] leading-[1.6] mb-6">
            {lead}
          </p>
        )}
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div
          className="relative rounded-[16px] overflow-hidden mb-6"
          style={{ height: "220px" }}
        >
          {features.map((feat, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={feat.image || fallbackImage}
              alt={feat.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === active ? 1 : 0,
                transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          ))}
        </div>
      </ScrollReveal>

      <div className="flex gap-4">
        <div className="w-[4px] bg-[#E5E5E5] rounded-full shrink-0 self-stretch relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#0089B7] rounded-full"
            style={{ height: `${baseFill}%` }}
          />
          <div
            key={progressKey}
            className="absolute left-0 w-full bg-[#0089B7] rounded-full stage-progress-fill"
            style={{
              top: `${baseFill}%`,
              ["--seg" as string]: `${segmentPct}%`,
              ["--ms" as string]: `${ROTATION_MS}ms`,
            }}
          />
        </div>

        <div className="flex flex-col gap-6 flex-1">
          {features.map((feat, i) => {
            const isActive = i === active;
            return (
              <button
                key={feat.title}
                onClick={() => selectFeature(i)}
                className="text-left transition-opacity"
                style={{ opacity: isActive ? 1 : 0.45 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: isActive ? "#FFC53A" : "#E5E5E5",
                    }}
                  >
                    <StageIcon name={feat.icon} size={20} stroke="#001B25" />
                  </div>
                  <div>
                    <p className="text-[#0A0A0A] text-[16px] font-medium leading-[1.3]">
                      {feat.title}
                    </p>
                    <p className="text-[#525252] text-[14px] leading-[1.5] mt-1">
                      {feat.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {ctaLabel && ctaHref && (
        <ScrollReveal delay={200}>
          <Link
            href={ctaHref}
            className="w-full flex items-center justify-center rounded-full border border-[#262626] text-[#262626] text-[15px] font-medium active:bg-[#F5F5F5] transition-colors mt-8"
            style={{ height: "52px" }}
          >
            {ctaLabel}
          </Link>
        </ScrollReveal>
      )}
    </section>
  );
}
