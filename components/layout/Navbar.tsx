"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about#history" },
      { label: "Director's Message", href: "/about#directors-message" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Values", href: "/about#values" },
      { label: "Accreditations", href: "/about#accreditations" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/american",
    children: [
      { label: "American School", href: "/academics/american" },
      { label: "Pre-School & Pre-K", href: "/academics/american/pre-school" },
      { label: "Kindergarten & G1", href: "/academics/american/kindergarten" },
      { label: "Elementary (G2-G5)", href: "/academics/american/elementary" },
      { label: "Middle School (G6-G8)", href: "/academics/american/middle-school" },
      { label: "High School (G9-G12)", href: "/academics/american/high-school" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Fees", href: "/admissions#fees" },
      { label: "Virtual Tour", href: "/admissions#tour" },
      { label: "Apply Now", href: "/admissions/apply" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "Leadership", href: "/student-life/leadership" },
      { label: "Arts & Creativity", href: "/student-life/arts" },
      { label: "Sports & Athletics", href: "/student-life/sports" },
      { label: "Experiential Learning", href: "/student-life/experiential-learning" },
    ],
  },
  {
    label: "Parents",
    href: "/parents",
    children: [
      { label: "Uniform & Dress Code", href: "/parents#uniform" },
      { label: "Parent Council", href: "/parents#council" },
      { label: "School Policies", href: "/parents#policies" },
      { label: "Parents App", href: "/parents#app" },
    ],
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      { label: "Alumni Council", href: "/alumni#council" },
      { label: "Making An Impact", href: "/alumni#impact" },
      { label: "Alumni in Shots", href: "/alumni#shots" },
      { label: "Register As Alumni", href: "/alumni#register" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "Performing Arts", href: "/facilities#performing-arts" },
      { label: "Playgrounds & Fields", href: "/facilities#outdoors" },
      { label: "Indoor Heated Pool", href: "/facilities#pool" },
      { label: "Libraries", href: "/facilities#libraries" },
    ],
  },
  {
    label: "Student Services",
    href: "/guidance",
    children: [
      { label: "Social & Emotional Counseling", href: "/guidance#counseling" },
      { label: "College Counseling", href: "/guidance#college" },
      { label: "Learning Support", href: "/guidance#support" },
    ],
  },
  {
    label: "Alsson El Kheir",
    href: "/elkheir",
    children: [
      { label: "Our History", href: "/elkheir#history" },
      { label: "Lasting Impact", href: "/elkheir#impact" },
      { label: "Past Cases", href: "/elkheir#cases" },
      { label: "Winter Drive", href: "/elkheir#winter" },
    ],
  },
  {
    label: "Events & Media",
    href: "/events",
    children: [
      { label: "Featured Events", href: "/events" },
      { label: "Media & News", href: "/media-news" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Open Positions", href: "/careers#positions" },
      { label: "Life At El Alsson", href: "/life" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedItem(null);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || menuOpen
            ? "bg-[#001B25] shadow-md"
            : "bg-[#001B25]/95 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="El Alsson International Schools"
              style={{ height: "40px", width: "109px", display: "block" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/44.png"
              alt="44 years"
              style={{ height: "38px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-10 h-10 flex items-center justify-center text-white rounded-lg
                       hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#001B25] flex flex-col transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Spacer for header */}
        <div className="h-16 shrink-0" />

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-left
                                 text-white text-[16px] font-medium border-b border-white/10"
                    >
                      {link.label}
                      <span
                        className={`text-[#0089B7] text-xl transition-transform duration-200 ${
                          expandedItem === link.label ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        expandedItem === link.label
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 py-2 space-y-0">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-2.5 text-[#99D0E2] text-[16px]
                                         border-b border-white/5 last:border-0
                                         hover:text-white transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center py-3 text-white text-[16px] font-medium
                               border-b border-white/10 hover:text-[#FFC53A] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/admissions/apply"
              className="btn-accent text-center block text-[16px]"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#virtual-tour"
              className="btn-ghost-white text-center block text-[16px]"
              onClick={() => setMenuOpen(false)}
            >
              Virtual Tour
            </Link>
          </div>
        </nav>

        {/* Footer strip inside menu */}
        <div className="px-5 py-5 border-t border-white/10">
          <p className="text-white/40 text-[12px]">
            © {new Date().getFullYear()} El Alsson International Schools
          </p>
        </div>
      </div>

      {/* Page offset so content isn't hidden behind fixed header */}
      <div className="h-16" />
    </>
  );
}
