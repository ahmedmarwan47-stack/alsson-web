/* ─── El Alsson Term Dates 2026-2027 — calendar data ──────────────────────── */

export type EventCategory =
  | "sports"
  | "event"
  | "trip"
  | "educational"
  | "open-day"
  | "holiday";

export interface CategoryMeta {
  label: string;
  color: string;
  textOnColor: string;
}

export const CATEGORY_META: Record<EventCategory, CategoryMeta> = {
  sports:        { label: "Sports",                 color: "#FFC53A", textOnColor: "#1A1406" },
  event:         { label: "Event / Concert / Show", color: "#6AE05A", textOnColor: "#0A2A06" },
  trip:          { label: "Trips",                  color: "#B228B2", textOnColor: "#FFFFFF" },
  educational:   { label: "Educational",            color: "#6BECFF", textOnColor: "#012B33" },
  "open-day":    { label: "Open Days",              color: "#97633A", textOnColor: "#FFFFFF" },
  holiday:       { label: "Holidays",               color: "#DB6E47", textOnColor: "#FFFFFF" },
};

export const CATEGORY_ORDER: EventCategory[] = [
  "sports",
  "event",
  "trip",
  "educational",
  "open-day",
  "holiday",
];

export type SchoolType =
  | "whole"
  | "american-pre"
  | "american-elem"
  | "american-mid"
  | "american-high"
  | "british-prim"
  | "british-sec";

export const SCHOOL_TYPES: { id: SchoolType; label: string }[] = [
  { id: "whole",         label: "Whole School" },
  { id: "american-pre",  label: "American Pre-School" },
  { id: "american-elem", label: "American Elementary" },
  { id: "american-mid",  label: "American Middle School" },
  { id: "american-high", label: "American High School" },
  { id: "british-prim",  label: "British Primary" },
  { id: "british-sec",   label: "British Secondary" },
];

export interface CalendarEvent {
  id: string;
  title: string;
  category: EventCategory;
  schools: SchoolType[];     // "whole" implies all
  start: string;             // ISO YYYY-MM-DD (inclusive)
  end: string;               // ISO YYYY-MM-DD (inclusive)
  location?: string;
  description?: string;
  allDay?: boolean;
  time?: string;             // human-readable e.g. "09:00 — 11:00"
}

/* The full academic year 2026/27. Built around the Dec 2026 sample shown in
   the design (Winter Break: Dec 23 - Jan 6) plus realistic surrounding terms. */
export const EVENTS: CalendarEvent[] = [
  /* ── September 2026 ─────────────────────────────────────────────────── */
  {
    id: "first-day-2026",
    title: "First Day of School",
    category: "event",
    schools: ["whole"],
    start: "2026-09-07", end: "2026-09-07",
    location: "All Campuses",
    description: "Welcome back! Classes begin for all students across the American and British divisions.",
    allDay: true,
  },
  {
    id: "open-day-sept",
    title: "Open Day — Prospective Families",
    category: "open-day",
    schools: ["whole"],
    start: "2026-09-19", end: "2026-09-19",
    location: "Sheikh Zayed Campus",
    description: "Tour the campus, meet our teachers and discover everything El Alsson has to offer. Registration required.",
    time: "10:00 — 13:00",
  },
  {
    id: "g6-orientation",
    title: "G6 / Y7 Orientation Camp",
    category: "trip",
    schools: ["american-mid", "british-sec"],
    start: "2026-09-23", end: "2026-09-25",
    location: "Ain Sokhna",
    description: "Three-day team-building camp for our newest Middle School and Senior students.",
  },

  /* ── October 2026 ───────────────────────────────────────────────────── */
  {
    id: "armed-forces-day",
    title: "Armed Forces Day",
    category: "holiday",
    schools: ["whole"],
    start: "2026-10-06", end: "2026-10-06",
    description: "National holiday — school closed.",
    allDay: true,
  },
  {
    id: "swim-gala-oct",
    title: "Inter-House Swim Gala",
    category: "sports",
    schools: ["american-elem", "british-prim"],
    start: "2026-10-15", end: "2026-10-15",
    location: "Indoor Heated Pool",
    description: "Annual house competition across all primary year groups. Spectators welcome.",
    time: "13:30 — 16:00",
  },
  {
    id: "mid-term-break",
    title: "Mid-Term Break",
    category: "holiday",
    schools: ["whole"],
    start: "2026-10-19", end: "2026-10-23",
    description: "School closed for the autumn mid-term break.",
    allDay: true,
  },

  /* ── November 2026 ──────────────────────────────────────────────────── */
  {
    id: "book-fair-2026",
    title: "Scholastic Book Fair",
    category: "educational",
    schools: ["whole"],
    start: "2026-11-02", end: "2026-11-06",
    location: "Main Library",
    description: "Our beloved book fair returns — a week of browsing, reading and bringing new stories home.",
  },
  {
    id: "parents-eve-mid",
    title: "Parent-Teacher Conferences — Middle School",
    category: "educational",
    schools: ["american-mid", "british-sec"],
    start: "2026-11-12", end: "2026-11-12",
    location: "Senior Building",
    description: "Booking links will be shared via the Parents App the week before.",
    time: "15:00 — 19:00",
  },
  {
    id: "mun-2026",
    title: "ALSMUN — Annual Model UN Conference",
    category: "educational",
    schools: ["american-high", "british-sec"],
    start: "2026-11-19", end: "2026-11-21",
    location: "Senior Auditorium",
    description: "Three days of debate, diplomacy and discovery. 400+ delegates from 28 schools across Egypt.",
  },
  {
    id: "open-day-nov",
    title: "Open Day — Whole School",
    category: "open-day",
    schools: ["whole"],
    start: "2026-11-28", end: "2026-11-28",
    location: "Both Campuses",
    description: "Saturday Open Day with simultaneous tours across American and British divisions.",
    time: "10:00 — 14:00",
  },

  /* ── December 2026 (visible in Figma) ───────────────────────────────── */
  {
    id: "labour-day",
    title: "Labour Day",
    category: "sports",
    schools: ["whole"],
    start: "2026-12-01", end: "2026-12-01",
    location: "Sports Hall",
    description: "Students celebrate workers and trades with a curated activity day.",
    time: "09:00 — 13:00",
  },
  {
    id: "g1-albania",
    title: "G1 Albania Trip",
    category: "trip",
    schools: ["american-elem"],
    start: "2026-12-01", end: "2026-12-03",
    location: "Tirana, Albania",
    description: "Grade 1 cultural exchange trip — three days exploring partner schools in Tirana.",
  },
  {
    id: "appreciation-day",
    title: "Appreciation Day",
    category: "event",
    schools: ["whole"],
    start: "2026-12-04", end: "2026-12-04",
    location: "Main Hall",
    description: "An afternoon honouring teachers, support staff and the wider Alsson community.",
    time: "12:00 — 15:00",
  },
  {
    id: "junior-show",
    title: "\"What a Knight\" Junior Performance",
    category: "event",
    schools: ["american-elem", "british-prim"],
    start: "2026-12-05", end: "2026-12-08",
    location: "Performing Arts Theatre",
    description: "Four nights of our Junior School winter production. Tickets on sale via the Parents App.",
    time: "18:30 — 20:30",
  },
  {
    id: "pts-y7-13",
    title: "Yrs 7-13 PTS (No Y7 to Y13 students at school)",
    category: "educational",
    schools: ["british-sec"],
    start: "2026-12-05", end: "2026-12-05",
    location: "Senior Building",
    description: "Parent-Teacher conferences for Years 7 to 13. No students on campus that day.",
    time: "09:00 — 16:00",
  },
  {
    id: "winter-concert-26",
    title: "Winter Concert — Voices of Alsson",
    category: "event",
    schools: ["whole"],
    start: "2026-12-17", end: "2026-12-17",
    location: "Main Auditorium",
    description: "Choir and orchestra unite for an evening of seasonal music. Doors open at 18:00.",
    time: "18:30 — 20:00",
  },
  {
    id: "christmas-vacation",
    title: "Christmas Vacation",
    category: "event",
    schools: ["whole"],
    start: "2026-12-25", end: "2027-01-06",
    description: "School closed — Winter Break. Classes resume Thursday 7 January.",
    allDay: true,
  },

  /* ── January 2027 ───────────────────────────────────────────────────── */
  {
    id: "term-2-begins",
    title: "Term 2 Begins",
    category: "educational",
    schools: ["whole"],
    start: "2027-01-07", end: "2027-01-07",
    description: "Classes resume after the Winter Break.",
    allDay: true,
  },
  {
    id: "basketball-finals",
    title: "Inter-House Basketball Finals",
    category: "sports",
    schools: ["american-mid", "american-high", "british-sec"],
    start: "2027-01-22", end: "2027-01-22",
    location: "Sports Hall",
    description: "Senior boys and girls finals — Thebes, Siwa, Karnak and Memphis go head to head.",
    time: "14:00 — 18:00",
  },
  {
    id: "stem-fair",
    title: "STEM Innovation Fair",
    category: "educational",
    schools: ["whole"],
    start: "2027-01-28", end: "2027-01-29",
    location: "STEM Lab",
    description: "Two days of student-led projects across biology, physics, engineering and environmental science.",
  },

  /* ── February 2027 ──────────────────────────────────────────────────── */
  {
    id: "prophet-birthday",
    title: "Prophet's Birthday",
    category: "holiday",
    schools: ["whole"],
    start: "2027-02-15", end: "2027-02-15",
    description: "National holiday — school closed.",
    allDay: true,
  },
  {
    id: "spring-musical",
    title: "Senior School Musical Production",
    category: "event",
    schools: ["american-high", "british-sec"],
    start: "2027-02-25", end: "2027-02-27",
    location: "Performing Arts Theatre",
    description: "Three nights of our flagship Senior production. A spectacle months in the making.",
    time: "19:00 — 21:30",
  },

  /* ── March 2027 ─────────────────────────────────────────────────────── */
  {
    id: "swim-champ-27",
    title: "Regional Swimming Championship",
    category: "sports",
    schools: ["whole"],
    start: "2027-03-04", end: "2027-03-05",
    location: "Indoor Heated Pool",
    description: "El Alsson hosts the regional inter-school championship across all age categories.",
  },
  {
    id: "g5-luxor",
    title: "G5 Luxor & Aswan Trip",
    category: "trip",
    schools: ["american-elem"],
    start: "2027-03-10", end: "2027-03-13",
    location: "Luxor & Aswan",
    description: "Four-day cultural and historical trip down the Nile for Grade 5.",
  },
  {
    id: "open-day-march",
    title: "Open Day — Whole School",
    category: "open-day",
    schools: ["whole"],
    start: "2027-03-21", end: "2027-03-21",
    location: "Both Campuses",
    description: "Spring Open Day for prospective families. Registration recommended.",
    time: "10:00 — 14:00",
  },
  {
    id: "spring-break",
    title: "Spring Break",
    category: "holiday",
    schools: ["whole"],
    start: "2027-03-25", end: "2027-04-08",
    description: "School closed for the Spring Break.",
    allDay: true,
  },

  /* ── April 2027 ─────────────────────────────────────────────────────── */
  {
    id: "sinai-liberation",
    title: "Sinai Liberation Day",
    category: "holiday",
    schools: ["whole"],
    start: "2027-04-25", end: "2027-04-25",
    description: "National holiday — school closed.",
    allDay: true,
  },

  /* ── May 2027 ───────────────────────────────────────────────────────── */
  {
    id: "labour-day-27",
    title: "Labour Day",
    category: "holiday",
    schools: ["whole"],
    start: "2027-05-01", end: "2027-05-01",
    description: "National holiday — school closed.",
    allDay: true,
  },
  {
    id: "art-exhibition",
    title: "Spring Art Exhibition",
    category: "event",
    schools: ["whole"],
    start: "2027-05-10", end: "2027-05-14",
    location: "Main Gallery",
    description: "A week-long celebration of student creativity from KG to Year 13.",
  },
  {
    id: "sports-day",
    title: "Whole-School Sports Day",
    category: "sports",
    schools: ["whole"],
    start: "2027-05-20", end: "2027-05-20",
    location: "Main Fields",
    description: "Track, field and team competition. Parents welcome from 09:30.",
    time: "09:00 — 14:00",
  },

  /* ── June 2027 ──────────────────────────────────────────────────────── */
  {
    id: "graduation-27",
    title: "Graduation — Class of 2027",
    category: "event",
    schools: ["american-high", "british-sec"],
    start: "2027-06-18", end: "2027-06-18",
    location: "Main Auditorium",
    description: "Cap, gown and a standing ovation. The Class of 2027 receives their diplomas.",
    time: "18:00 — 20:30",
  },
  {
    id: "last-day-27",
    title: "Last Day of School",
    category: "event",
    schools: ["whole"],
    start: "2027-06-24", end: "2027-06-24",
    description: "Final day of the 2026-27 academic year. Have a great summer!",
    allDay: true,
  },
  {
    id: "summer-break",
    title: "Summer Break",
    category: "holiday",
    schools: ["whole"],
    start: "2027-06-25", end: "2027-09-05",
    description: "School closed for summer. New year begins September 2027.",
    allDay: true,
  },
];

/* ─── Helpers ──────────────────────────────────────────────────────────── */

export function parseDate(iso: string): Date {
  // Treat ISO as local-midnight to avoid timezone drift on the day boundary.
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatRange(start: string, end: string): string {
  const s = parseDate(start);
  const e = parseDate(end);
  const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-GB", opts).format(d);
  if (s.getTime() === e.getTime()) {
    return fmt(s, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  }
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  if (sameMonth) {
    return `${fmt(s, { day: "numeric" })} – ${fmt(e, { day: "numeric", month: "short", year: "numeric" })}`;
  }
  return `${fmt(s, { day: "numeric", month: "short" })} – ${fmt(e, { day: "numeric", month: "short", year: "numeric" })}`;
}

export function eventMatchesSchool(ev: CalendarEvent, school: SchoolType): boolean {
  if (school === "whole") return true;
  return ev.schools.includes("whole") || ev.schools.includes(school);
}

/** Build an .ics file body (RFC 5545) for a single all-day or scheduled event. */
export function buildIcs(ev: CalendarEvent): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const toIcsDate = (iso: string) => iso.replace(/-/g, "");
  const dtStamp = (() => {
    const d = new Date();
    return (
      d.getUTCFullYear() +
      pad(d.getUTCMonth() + 1) +
      pad(d.getUTCDate()) +
      "T" +
      pad(d.getUTCHours()) +
      pad(d.getUTCMinutes()) +
      pad(d.getUTCSeconds()) +
      "Z"
    );
  })();

  // All-day events: DTSTART;VALUE=DATE, DTEND exclusive = day after end
  const endNext = new Date(parseDate(ev.end).getTime() + 86400000);
  const endNextIso = `${endNext.getFullYear()}${pad(endNext.getMonth() + 1)}${pad(endNext.getDate())}`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//El Alsson//Calendar//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${ev.id}@alsson.com`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART;VALUE=DATE:${toIcsDate(ev.start)}`,
    `DTEND;VALUE=DATE:${endNextIso}`,
    `SUMMARY:${escapeIcs(ev.title)}`,
    ev.location ? `LOCATION:${escapeIcs(ev.location)}` : "",
    ev.description ? `DESCRIPTION:${escapeIcs(ev.description)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  return lines.join("\r\n");
}

function escapeIcs(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}
