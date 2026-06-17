"use client";

import { useEffect, useRef, useState } from "react";

const STATIC = "At El Alsson, education has been founded on 1982 and always been about more than grades. From the very beginning, ";
const ANIMATED = "our founders, Mrs. Soumaya Amr and Mr. Colin Rogers, believed that schools should prepare children not only for exams, but for life.";
const CHARS = ANIMATED.split("");
const N = CHARS.length;

export default function AboutTextReveal() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (rect.top - wh * 0.35) / (wh * 0.45)));
      setProgress(p);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <p ref={ref} className="text-[16px] leading-[1.6] text-center mb-6">
      <span style={{ color: "#0A0A0A" }}>{STATIC}</span>
      {CHARS.map((char, i) => {
        const charP = Math.max(0, Math.min(1, progress * N * 1.1 - i));
        const v = Math.round(163 - charP * 153);
        return (
          <span key={i} style={{ color: `rgb(${v},${v},${v})` }}>
            {char}
          </span>
        );
      })}
    </p>
  );
}
