"use client";

import { useState } from "react";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  highlight?: boolean;
  external?: boolean;
  children?: { label: string; href: string }[];
};

const FOOTER_SECTIONS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "El Alsson School",
    links: [
      { label: "Homepage", href: "/" },
      { label: "About", href: "/about" },
      { label: "Facilities", href: "/facilities" },
      { label: "Parents", href: "/parents" },
      { label: "Guidance & Students Services", href: "/guidance" },
      { label: "School Calendar", href: "/calendar" },
    ],
  },
  {
    heading: "Academics",
    links: [
      {
        label: "American School",
        href: "/academics/american",
        children: [
          { label: "Explore American School", href: "/academics/american" },
          { label: "Early Childhood (PreS – PreK)", href: "/academics/american/pre-school" },
          { label: "Kindergarten & Grade 1", href: "/academics/american/kindergarten" },
          { label: "Elementary (Grades 2–5)", href: "/academics/american/elementary" },
          { label: "Middle School (Grades 6–8)", href: "/academics/american/middle-school" },
          { label: "High School (Grades 9–12)", href: "/academics/american/high-school" },
        ],
      },
      {
        label: "British School",
        href: "/academics/british",
        children: [
          { label: "Explore British School", href: "/academics/british" },
          { label: "Early Years (FS1 – FS2)", href: "/academics/british/early-years" },
          { label: "Primary (Years 1–6)", href: "/academics/british/primary" },
          { label: "Secondary (Years 7–11)", href: "/academics/british/secondary" },
          { label: "Sixth Form (Years 12–13)", href: "/academics/british/sixth-form" },
        ],
      },
      {
        label: "IB Diploma Programme",
        href: "/academics/ibdp",
        children: [
          { label: "Explore IBDP", href: "/academics/ibdp" },
          { label: "IBDP Year 1", href: "/academics/ibdp/year-1" },
          { label: "IBDP Year 2", href: "/academics/ibdp/year-2" },
        ],
      },
    ],
  },
  {
    heading: "Students Life",
    links: [
      { label: "Leadership", href: "/student-life/leadership" },
      { label: "Arts & Creativity", href: "/student-life/arts" },
      { label: "Sports & Athletics", href: "/student-life/sports" },
      { label: "Experiential Learning", href: "/student-life/experiential-learning" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions#process" },
      { label: "Open Days", href: "/admissions#open-days" },
      { label: "Tuition & Fees", href: "/admissions#fees" },
      { label: "Apply Now", href: "/admissions", highlight: true, external: true },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Featured Events", href: "/events" },
      { label: "Media & News", href: "/news" },
      { label: "Life At El Alsson", href: "/life" },
      { label: "Alumni", href: "/alumni" },
      { label: "Careers", href: "/careers" },
      { label: "Alsson El Kheir", href: "/elkheir" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(to bottom, #001B25, #003346)" }}
    >
      {/* Newsletter */}
      <div className="px-5 pt-10 pb-6">
        <div className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/full-logo.png"
            alt="El Alsson International Schools"
            style={{ height: "52px", width: "auto", display: "block" }}
          />
        </div>

        <div className="mb-8">
          <p className="text-white font-medium text-[16px] mb-3">
            Stay Updated With Our News
          </p>
          <div className="flex items-center gap-2 bg-white rounded-full p-1.5">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 min-w-0 bg-transparent text-[#0A0A0A] text-[14px] px-3 py-1.5 outline-none placeholder:text-[#A3A3A3]"
            />
            <button
              className="shrink-0 rounded-full bg-[#0089B7] text-white text-[14px] font-medium px-4 py-2 active:bg-[#006E92] transition-colors"
              style={{ boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-white/60 text-[12px] mt-2 px-1">
            We respect your privacy and only send what matters.
          </p>
        </div>

        {/* Accordion link groups */}
        <div className="border-t border-white/10">
          {FOOTER_SECTIONS.map((section) => {
            const isOpen = expanded === section.heading;
            return (
              <div key={section.heading} className="border-b border-white/10">
                <button
                  onClick={() =>
                    setExpanded(isOpen ? null : section.heading)
                  }
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-[#FFC53A] text-[14px] font-medium">
                    {section.heading}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 shrink-0"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.6}
                    />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-4 space-y-2.5 pl-1">
                      {section.links.map((link) => {
                        const hasChildren = link.children && link.children.length > 0;
                        const subKey = `${section.heading}::${link.label}`;
                        const subOpen = expandedSub === subKey;
                        if (hasChildren) {
                          return (
                            <li key={link.label}>
                              <button
                                onClick={() => setExpandedSub(subOpen ? null : subKey)}
                                className="w-full flex items-center justify-between text-[14px] text-white/80 hover:text-white transition-colors"
                              >
                                <span>{link.label}</span>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
                                >
                                  <path
                                    d="M3.5 5.25l3.5 3.5 3.5-3.5"
                                    stroke="#FFC53A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                              <div
                                className="grid transition-[grid-template-rows] duration-200 ease-out"
                                style={{ gridTemplateRows: subOpen ? "1fr" : "0fr" }}
                              >
                                <div className="overflow-hidden">
                                  <ul className="pl-3 pt-2 pb-1 space-y-2 border-l border-white/10">
                                    {link.children!.map((grand) => (
                                      <li key={grand.label}>
                                        <Link
                                          href={grand.href}
                                          className="block text-[13px] text-white/55 hover:text-white transition-colors pl-3"
                                        >
                                          {grand.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </li>
                          );
                        }
                        return (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className={`text-[14px] flex items-center gap-1.5 transition-colors ${
                                link.highlight
                                  ? "text-[#FFC53A] hover:text-[#FFD161]"
                                  : "text-white/60 hover:text-white"
                              }`}
                            >
                              {link.label}
                              {link.external && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                                  <path d="M3 9l6-6M4.5 3h4.5v4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact info */}
        <div className="mt-6 space-y-3">
          <a href="mailto:info@alsson.com" className="flex items-center gap-2 text-white/80 text-[14px]">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            info@alsson.com
          </a>
          <a href="tel:01271155229" className="flex items-center gap-2 text-white/80 text-[14px]">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
              <path d="M3 4.5A1.5 1.5 0 014.5 3h2.1a1 1 0 01.95.68l.8 2.4a1 1 0 01-.27 1.03l-1.3 1.3a10.06 10.06 0 004.8 4.8l1.3-1.3a1 1 0 011.03-.27l2.4.8a1 1 0 01.68.95v2.1a1.5 1.5 0 01-1.5 1.5C8.94 17 3 11.06 3 4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            01271155229 &bull; 01271155229
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {[
            { label: "Facebook", href: "#", icon: <path fill="currentColor" d="M10 2C5.58 2 2 5.58 2 10c0 3.95 2.87 7.23 6.63 7.85v-5.55H6.42V10h2.21V8.15c0-2.18 1.3-3.39 3.29-3.39.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V10h2.42l-.39 2.3h-2.03v5.55C15.13 17.23 18 13.95 18 10c0-4.42-3.58-8-8-8z" /> },
            { label: "Instagram", href: "https://www.instagram.com/elalsson_Official", icon: <><rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="14.5" cy="5.5" r="1" fill="currentColor" /></> },
            { label: "X", href: "#", icon: <path d="M3 3l5.5 7L3 17h1.5l4.75-6.1L13.5 17H17l-5.75-7.35L16.5 3H15l-4.5 5.75L6.5 3H3z" fill="currentColor" /> },
            { label: "LinkedIn", href: "#", icon: <><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M6.5 8.5v5M6.5 6v.01M9 13.5v-3c0-1.1.9-2 2-2s2 .9 2 2v3M9 8.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></> },
            { label: "YouTube", href: "#", icon: <><rect x="2" y="4.5" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M8.5 7.5l4 2.5-4 2.5z" fill="currentColor" /></> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                         text-white/70 hover:bg-[#0089B7] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#000E12] px-5 py-3">
        <p className="text-[#A3A3A3] text-[12px] mb-1.5">
          &copy; {new Date().getFullYear()} Alsson International Schools. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="text-[#A3A3A3] text-[12px] hover:text-white/70 transition-colors">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-[#A3A3A3] text-[12px] hover:text-white/70 transition-colors">
            Terms of service
          </Link>
          <Link href="/cookies" className="text-[#A3A3A3] text-[12px] hover:text-white/70 transition-colors">
            Cookie settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
