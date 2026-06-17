"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// Primary nav — matches Figma main navbar order exactly
const PRIMARY_NAV = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#history" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "El Alsson Values", href: "/about#values" },
      { label: "Accreditations & Memberships", href: "/about#accreditations" },
      { label: "Founder's Vision", href: "/about#directors-message" },
      { label: "Who's Who", href: "/about#staff" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/american",
    children: [
      { label: "American School", href: "/academics/american" },
      { label: "Early Childhood (PreS – PreK)", href: "/academics/american/pre-school" },
      { label: "Kindergarten & Grade 1", href: "/academics/american/kindergarten" },
      { label: "Elementary (Grades 2–5)", href: "/academics/american/elementary" },
      { label: "Middle School (Grades 6–8)", href: "/academics/american/middle-school" },
      { label: "High School (Grades 9–12)", href: "/academics/american/high-school" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions#process" },
      { label: "Open Days", href: "/admissions#open-days" },
      { label: "Age Comparison Chart", href: "/admissions#chart" },
      { label: "Info & Brochures", href: "/admissions#brochures" },
      { label: "Tuition & Fees", href: "/admissions#fees" },
      { label: "Reach Us", href: "/admissions#contact" },
    ],
  },
  // Facilities is a direct link in Figma — no dropdown
  { label: "Facilities", href: "/facilities" },
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
    label: "Students Life",
    href: "/student-life",
    children: [
      { label: "Leadership", href: "/student-life/leadership" },
      { label: "Arts & Creativity", href: "/student-life/arts" },
      { label: "Sports & Athletics", href: "/student-life/sports" },
      { label: "Experiential Learning", href: "/student-life/experiential-learning" },
    ],
  },
  // Guidance is a direct link in Figma — no dropdown
  { label: "Guidance & Students Services", href: "/guidance" },
  { label: "Calendar", href: "/calendar" },
];

// Utility links — Figma's top utility bar (Featured Events, Media & News, Alumni, FAQs, Employment, Contact Us)
const UTILITY_LINKS = [
  { label: "Featured Events", href: "/events" },
  { label: "Media & News", href: "/news" },
  { label: "Alumni", href: "/alumni" },
  { label: "FAQs", href: "/faqs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  // Desktop total height: 36px utility bar + 60px main bar = 96px
  // Mobile total height: 64px
  return (
    <>
      {/* ── DESKTOP UTILITY BAR ── */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#E5F3F7]">
        <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-end h-9 gap-6">
          {UTILITY_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#001B25] text-[12px] font-medium hover:text-[#0089B7] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-200
          lg:top-9 top-0
          ${scrolled || menuOpen ? "bg-[#001B25] shadow-md" : "bg-[#001B25]/95 backdrop-blur-sm"}`}
      >
        {/* DESKTOP nav row */}
        <div className="hidden lg:flex items-center h-[60px] px-8 max-w-screen-xl mx-auto gap-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 mr-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="El Alsson International Schools"
              style={{ height: "36px", width: "auto", display: "block" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/44.png"
              alt="44 years"
              style={{ height: "34px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Nav items */}
          <nav className="flex items-center gap-0 flex-1">
            {PRIMARY_NAV.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && openDropdown(item.label)}
                  onMouseLeave={() => hasChildren && closeDropdown()}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors
                      ${isOpen ? "text-[#FFC53A]" : "text-white/90 hover:text-white"}`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && (
                    <div
                      className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-black/5
                        min-w-[200px] py-2 transition-all duration-150
                        ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] text-[#262626] hover:bg-[#F0F9FC] hover:text-[#0089B7] transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Apply Now CTA */}
          <Link
            href="/admissions"
            className="ml-4 shrink-0 btn-accent text-[13px] px-5 py-2"
          >
            Apply Now
          </Link>
        </div>

        {/* MOBILE header row */}
        <div className="flex lg:hidden items-center justify-between px-5 h-16">
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

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE OVERLAY MENU ── */}
      <div
        className={`fixed inset-0 z-30 bg-[#001B25] flex flex-col lg:hidden transition-all duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Spacer for mobile header */}
        <div className="h-16 shrink-0" />

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          {/* Primary nav */}
          <ul className="space-y-1">
            {PRIMARY_NAV.map((link) => (
              <li key={link.label}>
                {"children" in link && link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedItem(expandedItem === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between py-3 text-left
                                 text-white text-[16px] font-medium border-b border-white/10"
                    >
                      {link.label}
                      <span
                        className={`text-[#0089B7] text-xl leading-none transition-transform duration-200
                          ${expandedItem === link.label ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-200
                        ${expandedItem === link.label ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <ul className="pl-4 py-2 space-y-0">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-2.5 text-[#99D0E2] text-[15px]
                                         border-b border-white/5 last:border-0 hover:text-white transition-colors"
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

          {/* Separator + utility links */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <p className="text-white/40 text-[11px] font-medium uppercase tracking-widest mb-3">
              More
            </p>
            <ul className="space-y-0">
              {UTILITY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center py-2.5 text-white/60 text-[15px]
                               border-b border-white/5 last:border-0 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/admissions"
              className="btn-accent text-center block text-[16px]"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </nav>

        <div className="px-5 py-5 border-t border-white/10">
          <p className="text-white/40 text-[12px]">
            © {new Date().getFullYear()} El Alsson International Schools
          </p>
        </div>
      </div>

      {/* Page offset — mobile: 64px header; desktop: 36px utility bar + 60px main nav = 96px */}
      <div className="h-16 lg:h-[96px]" />
    </>
  );
}
