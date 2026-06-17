"use client";

import { useEffect, useRef, useState } from "react";

const HOUSES = [
  {
    key: "thebes",
    name: "Thebes",
    number: "01",
    tagline: "Passion, Courage, and Red Pride.",
    description:
      "As members of Thebes, students are driven by a fiery spirit and a commitment to leading by example. We champion resilience and teamwork, pushing every student to bring their absolute best to the sports field, the stage, and the classroom.",
    color: "#7B1A1A",
    photo: "/images/house-thebes-photo.jpg",
    logo: "/images/Thebes.svg",
  },
  {
    key: "siwa",
    name: "Siwa",
    number: "02",
    tagline: "Curiosity, Wisdom, and Golden Discovery.",
    description:
      "Inspired by the mystical Siwa Oasis, our house celebrates curiosity, creativity, and the spirit of exploration. We encourage every student to ask the bold questions, follow what fascinates them, and shape a life rich with discovery and the joy of learning.",
    color: "#C99320",
    photo: "/images/house-siwa-photo.jpg",
    logo: "/images/Siwa.svg",
  },
  {
    key: "karnak",
    name: "Karnak",
    number: "03",
    tagline: "Unity, Growth, and Green Strength.",
    description:
      "Drawing inspiration from the great temples of Karnak, our house channels community spirit and the collective pursuit of excellence. We grow stronger together — celebrating every member's contribution and lifting each other through every challenge across academics, sport, and the arts.",
    color: "#2D5C45",
    photo: "/images/house-karnak-photo.jpg",
    logo: "/images/Karnak.svg",
  },
  {
    key: "memphis",
    name: "Memphis",
    number: "04",
    tagline: "Wisdom, Loyalty, and Blue Excellence.",
    description:
      "Memphis stands for integrity and intellectual curiosity. Our house members form a deeply supportive community that values strategic thinking and unwavering loyalty, encouraging one another to reach new heights in all academic and extracurricular pursuits.",
    color: "#001B25",
    photo: "/images/house-memphis-photo.jpg",
    logo: "/images/Memphis.svg",
  },
];

const NAV_H = 64;
const PEEK_H = 56;
// Fraction of each per-card scroll slot used for the slide-in transition;
// the remainder is dwell time so the description is readable.
const TRANSITION_RATIO = 0.35;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function computeProgress(p: number, n: number): number {
  if (n <= 1) return 0;
  // p ∈ [0, 1] across the full section scroll.
  // Each card gets a slot of 1/n: card 0's slot is pure dwell;
  // card i ≥ 1 transitions from i-1→i in the first TRANSITION_RATIO of its slot, then dwells at i.
  const slot = 1 / n;
  const cardIdx = Math.min(n - 1, Math.floor(p / slot));
  if (cardIdx === 0) return 0;
  const slotPos = (p - cardIdx * slot) / slot;
  if (slotPos < TRANSITION_RATIO) {
    const t = slotPos / TRANSITION_RATIO;
    return cardIdx - 1 + easeOutCubic(t);
  }
  return cardIdx;
}

export default function HouseSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = height - vh;
      if (range <= 0) return;
      const p = Math.max(0, Math.min(1, -top / range));
      setProgress(computeProgress(p, HOUSES.length));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="house-system"
      className="bg-[#FAFAFA]"
      style={{ height: `${HOUSES.length * 110 + 30}svh` }}
    >
      <div
        className="sticky overflow-hidden"
        style={{ top: `${NAV_H}px`, height: `calc(100svh - ${NAV_H}px)` }}
      >
        <div className="section-padding pt-8 pb-6 h-full flex flex-col">
          <h2
            className="text-center mb-4 shrink-0"
            style={{
              fontSize: "28px",
              lineHeight: 1.2,
              fontWeight: 400,
              color: "#171717",
            }}
          >
            The House{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>System</span>
          </h2>

          <div className="relative flex-1 min-h-0 overflow-hidden rounded-[20px]">
            {HOUSES.map((house, i) => {
              const peek = i * PEEK_H;
              const slide = Math.max(0, Math.min(1, progress - (i - 1)));
              const translateY = (1 - slide) * 100;

              return (
                <div
                  key={house.key}
                  className="absolute left-0 right-0 rounded-[20px] overflow-hidden"
                  style={{
                    top: `${peek}px`,
                    bottom: 0,
                    background: house.color,
                    transform:
                      i === 0 ? "translateY(0)" : `translateY(${translateY}%)`,
                    zIndex: i + 1,
                    willChange: "transform",
                    boxShadow:
                      i === 0
                        ? "none"
                        : "0px -6px 18px rgba(0,0,0,0.18)",
                  }}
                >
                  {/* Header — always visible, sets PEEK_H height */}
                  <div
                    className="flex items-center gap-3 px-5"
                    style={{ height: `${PEEK_H}px` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={house.logo}
                      alt=""
                      aria-hidden
                      className="shrink-0"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      className="text-white flex-1 min-w-0"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      House of {house.name}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      {house.number}
                    </div>
                  </div>

                  {/* Body — tagline + photo + description */}
                  <div className="px-5 pb-5 text-white">
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.9)",
                        marginBottom: "10px",
                      }}
                    >
                      {house.tagline}
                    </div>
                    <div
                      className="rounded-[12px] overflow-hidden mb-3"
                      style={{ height: "150px" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={house.photo}
                        alt={`House of ${house.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {house.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
