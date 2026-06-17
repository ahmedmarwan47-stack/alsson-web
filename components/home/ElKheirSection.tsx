"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ElKheirSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealed(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Grid layout is the base — transform shifts photos into fan when not revealed
  const transition = "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease";

  return (
    <section ref={sectionRef} className="section-padding py-12 overflow-hidden" style={{ background: "#006E92" }}>

      {/* Photos: always in grid, animate FROM fan via transform */}
      <div className="relative mb-8" style={{ height: "280px" }}>

        {/* Photo 3 — large top (front of fan) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/elkheir-3.jpg"
          alt=""
          aria-hidden
          className="absolute rounded-[12px] object-cover"
          style={{
            top: 0, left: 0, width: "100%", height: "55%",
            zIndex: 3,
            transition,
            transform: revealed
              ? "none"
              : "translateY(40%) rotate(-5.12deg) scale(0.88)",
            boxShadow: revealed ? "none" : "0 8px 24px rgba(0,0,0,0.25)",
          }}
        />

        {/* Photo 1 — bottom-left (back of fan) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/elkheir-1.jpg"
          alt=""
          aria-hidden
          className="absolute rounded-[12px] object-cover"
          style={{
            bottom: 0, left: 0, width: "48%", height: "41%",
            zIndex: 1,
            transition,
            transitionDelay: revealed ? "120ms" : "0ms",
            transform: revealed
              ? "none"
              : "translate(26%, -66%) rotate(-11.9deg) scale(0.88)",
          }}
        />

        {/* Photo 2 — bottom-right (middle of fan) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/elkheir-2.jpg"
          alt=""
          aria-hidden
          className="absolute rounded-[12px] object-cover"
          style={{
            bottom: 0, right: 0, width: "48%", height: "41%",
            zIndex: 2,
            transition,
            transitionDelay: revealed ? "240ms" : "0ms",
            transform: revealed
              ? "none"
              : "translate(-26%, -66%) rotate(7.96deg) scale(0.88)",
          }}
        />
      </div>

      {/* Content */}
      <h2 className="mb-3" style={{ fontSize: "32px", lineHeight: "1.2", fontWeight: 700 }}>
        <span className="text-[#FAFAFA]">Alsson </span>
        <span style={{ color: "#FFC53A" }}>El Kheir</span>
      </h2>
      <p className="text-[#E5E5E5] text-[16px] leading-[1.5] mb-6">
        Empowering our students to lead with empathy. Support our student-led philanthropic
        initiatives and make a tangible difference in our local communities today.
      </p>
      <Link
        href="/elkheir"
        className="w-full flex items-center justify-center gap-2 rounded-full
                   bg-white text-[#262626] text-[16px] font-medium
                   active:bg-[#F5F5F5] transition-colors"
        style={{ height: "52px" }}
      >
        Explore Alsson El Kheir
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
