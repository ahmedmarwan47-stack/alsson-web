"use client";

import { useMemo, useState } from "react";
import {
  CalendarEvent,
  CATEGORY_META,
  CATEGORY_ORDER,
  EventCategory,
  EVENTS,
  SchoolType,
  SCHOOL_TYPES,
  eventMatchesSchool,
  parseDate,
} from "@/lib/calendar";
import EventSheet from "./EventSheet";
import FilterDropdown from "./FilterDropdown";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* ─── Date helpers ─────────────────────────────────────────────────────── */

const ONE_DAY = 86400000;
const stripTime = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const isoFor = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function buildMonthMatrix(year: number, month: number): Date[][] {
  // Week starts Sunday (matches Figma). 6 weeks max.
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay()); // back to nearest Sunday

  const weeks: Date[][] = [];
  const cursor = new Date(start);
  while (weeks.length < 6) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
    // Stop once we've passed the month's last day and the row is fully post-month
    if (week[0].getMonth() !== month && week[6].getMonth() !== month) break;
  }
  return weeks;
}

/* Each event becomes one or more "segments" — one per week it spans. */
interface Segment {
  event: CalendarEvent;
  weekIndex: number;
  startCol: number;       // 0..6
  span: number;           // 1..7
  isLeftClipped: boolean; // true → event started before this week
  isRightClipped: boolean;
}

function buildSegments(events: CalendarEvent[], weeks: Date[][]): Segment[] {
  const out: Segment[] = [];
  weeks.forEach((week, wIdx) => {
    const weekStart = stripTime(week[0]).getTime();
    const weekEnd = stripTime(week[6]).getTime();
    events.forEach((ev) => {
      const evStart = stripTime(parseDate(ev.start)).getTime();
      const evEnd = stripTime(parseDate(ev.end)).getTime();
      if (evEnd < weekStart || evStart > weekEnd) return;
      const segStart = Math.max(evStart, weekStart);
      const segEnd = Math.min(evEnd, weekEnd);
      const startCol = Math.round((segStart - weekStart) / ONE_DAY);
      const span = Math.round((segEnd - segStart) / ONE_DAY) + 1;
      out.push({
        event: ev,
        weekIndex: wIdx,
        startCol,
        span,
        isLeftClipped: evStart < weekStart,
        isRightClipped: evEnd > weekEnd,
      });
    });
  });
  return out;
}

/* Greedy lane assignment per week — Apple-style stacking. */
function assignLanes(segments: Segment[], weeksCount: number): Map<Segment, number> {
  const lanes = new Map<Segment, number>();
  for (let w = 0; w < weeksCount; w++) {
    const inWeek = segments
      .filter((s) => s.weekIndex === w)
      .sort((a, b) => {
        // Longer & earlier-starting first → looks more Apple-like
        if (a.startCol !== b.startCol) return a.startCol - b.startCol;
        return b.span - a.span;
      });
    const occupancy: boolean[][] = []; // [lane][col]
    inWeek.forEach((seg) => {
      let lane = 0;
      while (true) {
        if (!occupancy[lane]) occupancy[lane] = new Array(7).fill(false);
        const free = occupancy[lane]
          .slice(seg.startCol, seg.startCol + seg.span)
          .every((v) => !v);
        if (free) {
          for (let c = seg.startCol; c < seg.startCol + seg.span; c++) {
            occupancy[lane][c] = true;
          }
          lanes.set(seg, lane);
          break;
        }
        lane++;
      }
    });
  }
  return lanes;
}

/* ─── Component ────────────────────────────────────────────────────────── */

const TODAY = new Date(2026, 11, 1); // demo "today" = Dec 1 2026 to match Figma

export default function Calendar() {
  const [year, setYear] = useState(TODAY.getFullYear());
  const [month, setMonth] = useState(TODAY.getMonth()); // 0-11
  const [schoolFilters, setSchoolFilters] = useState<SchoolType[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<EventCategory[]>([]);
  const [selected, setSelected] = useState<CalendarEvent | null>(null);

  const weeks = useMemo(() => buildMonthMatrix(year, month), [year, month]);

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((ev) => {
      if (schoolFilters.length > 0) {
        const ok = schoolFilters.some((s) => eventMatchesSchool(ev, s));
        if (!ok) return false;
      }
      if (categoryFilters.length > 0 && !categoryFilters.includes(ev.category)) {
        return false;
      }
      return true;
    });
  }, [schoolFilters, categoryFilters]);

  const segments = useMemo(
    () => buildSegments(filteredEvents, weeks),
    [filteredEvents, weeks]
  );
  const lanes = useMemo(() => assignLanes(segments, weeks.length), [segments, weeks.length]);

  /* Next major upcoming event banner (Winter Break style) */
  const nextBanner = useMemo(() => {
    const monthStart = stripTime(new Date(year, month, 1)).getTime();
    const inMonth = filteredEvents
      .map((ev) => ({ ev, start: stripTime(parseDate(ev.start)).getTime() }))
      .filter(({ ev, start }) => {
        const end = stripTime(parseDate(ev.end)).getTime();
        return end >= monthStart && (ev.category === "holiday" || ev.category === "trip" || ev.category === "event");
      })
      .sort((a, b) => a.start - b.start);
    return inMonth[0]?.ev ?? null;
  }, [filteredEvents, year, month]);

  const goMonth = (delta: number) => {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
  };

  /* ── Filter helpers ── */
  const toggleSchool = (id: SchoolType) =>
    setSchoolFilters((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  const toggleCategory = (id: EventCategory) =>
    setCategoryFilters((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  /* ── Active chips (school + category combined) ── */
  type Chip =
    | { kind: "school"; id: SchoolType; label: string }
    | { kind: "category"; id: EventCategory; label: string };
  const activeChips: Chip[] = [
    ...schoolFilters.map(
      (id): Chip => ({
        kind: "school",
        id,
        label: SCHOOL_TYPES.find((s) => s.id === id)?.label ?? id,
      })
    ),
    ...categoryFilters.map(
      (id): Chip => ({
        kind: "category",
        id,
        label: CATEGORY_META[id].label,
      })
    ),
  ];

  return (
    <section className="bg-white pt-10 pb-10">
      {/* ── Upcoming banner ───────────────────────────────────────── */}
      {nextBanner && (
        <div className="section-padding pb-4">
          <div
            className="flex items-start gap-2.5 rounded-2xl px-3 py-3"
            style={{ background: "#F2F9FB", border: "1px solid #CCE7F1" }}
          >
            <ClockIcon />
            <p
              className="text-[#001B25]"
              style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 500 }}
            >
              {bannerText(nextBanner)}
            </p>
          </div>
        </div>
      )}

      {/* ── Filters ────────────────────────────────────────────────── */}
      <div className="section-padding flex flex-col gap-2.5">
        <FilterDropdown
          label="School Type"
          options={SCHOOL_TYPES.map((s) => ({ id: s.id, label: s.label }))}
          selected={schoolFilters}
          onToggle={(id) => toggleSchool(id as SchoolType)}
        />
        <FilterDropdown
          label="Month"
          options={MONTH_NAMES.map((m, i) => ({ id: String(i), label: m }))}
          selected={[String(month)]}
          single
          onToggle={(id) => setMonth(Number(id))}
        />
        <FilterDropdown
          label="Events"
          options={CATEGORY_ORDER.map((c) => ({
            id: c,
            label: CATEGORY_META[c].label,
            swatch: CATEGORY_META[c].color,
          }))}
          selected={categoryFilters}
          onToggle={(id) => toggleCategory(id as EventCategory)}
        />
      </div>

      {/* ── Active chips ──────────────────────────────────────────── */}
      {activeChips.length > 0 && (
        <div className="section-padding pt-3 flex flex-wrap gap-1.5">
          {activeChips.map((chip) => (
            <button
              key={chip.kind + chip.id}
              onClick={() =>
                chip.kind === "school"
                  ? toggleSchool(chip.id)
                  : toggleCategory(chip.id)
              }
              className="inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-2 py-1 text-[12px] font-medium"
              style={{ background: "#E5F3F7", color: "#006E92" }}
            >
              {chip.label}
              <span className="text-[14px] leading-none">×</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Calendar grid ─────────────────────────────────────────── */}
      <div className="section-padding pt-4 pb-2">
        <div className="rounded-2xl border border-[#E5E5E5] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#E5E5E5]">
            <button
              onClick={() => goMonth(-1)}
              className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-[#F2F9FB] active:bg-[#E5F3F7]"
              aria-label="Previous month"
            >
              <ChevronIcon dir="left" />
            </button>
            <h3
              className="text-[#001B25] font-medium"
              style={{ fontSize: "17px", letterSpacing: "-0.01em" }}
            >
              {MONTH_NAMES[month]}{" "}
              <span style={{ color: "#737373", fontWeight: 400 }}>{year}</span>
            </h3>
            <button
              onClick={() => goMonth(1)}
              className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-[#F2F9FB] active:bg-[#E5F3F7]"
              aria-label="Next month"
            >
              <ChevronIcon dir="right" />
            </button>
          </div>

          {/* Weekday header */}
          <div className="grid grid-cols-7 border-b border-[#E5E5E5]">
            {WEEKDAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-center py-1.5 text-[10px] uppercase tracking-[0.06em] text-[#737373]"
                style={{ fontWeight: 500 }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Weeks — Apple-style with multi-day spanning bars */}
          {weeks.map((week, wIdx) => {
            const weekSegs = segments.filter((s) => s.weekIndex === wIdx);
            const maxLane = weekSegs.reduce(
              (m, s) => Math.max(m, lanes.get(s) ?? 0),
              -1
            );
            // Each bar = 14px tall + 2px gap. Number row ~24px. Min 80px.
            const minH = 80;
            const needed = 26 + (maxLane + 1) * 16 + 6;
            const rowHeight = Math.max(minH, needed);

            return (
              <div
                key={wIdx}
                className="relative border-b border-[#E5E5E5] last:border-b-0"
                style={{ height: rowHeight }}
              >
                {/* Day cells */}
                <div className="grid grid-cols-7 h-full">
                  {week.map((date) => {
                    const inMonth = date.getMonth() === month;
                    const isToday =
                      date.getFullYear() === TODAY.getFullYear() &&
                      date.getMonth() === TODAY.getMonth() &&
                      date.getDate() === TODAY.getDate();
                    return (
                      <div
                        key={isoFor(date)}
                        className="border-r border-[#F1F1F1] last:border-r-0 relative"
                        style={{
                          background: inMonth ? "#FFFFFF" : "#FFFCF5",
                        }}
                      >
                        <div className="flex items-center justify-end px-1.5 pt-1.5">
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 500,
                              color: inMonth ? "#262626" : "#A3A3A3",
                            }}
                          >
                            {date.getDate() === 1
                              ? `${MONTH_NAMES[date.getMonth()].slice(0, 3)} 1`
                              : date.getDate()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bars layer */}
                <div
                  className="absolute left-0 right-0 grid grid-cols-7 pointer-events-none"
                  style={{ top: 26, rowGap: 2 }}
                >
                  {weekSegs.map((seg) => {
                    const meta = CATEGORY_META[seg.event.category];
                    const lane = lanes.get(seg) ?? 0;
                    return (
                      <button
                        key={seg.event.id + "-" + wIdx}
                        onClick={() => setSelected(seg.event)}
                        className="pointer-events-auto text-left h-[14px] flex items-center px-1.5 overflow-hidden active:opacity-80 transition-opacity"
                        style={{
                          gridColumnStart: seg.startCol + 1,
                          gridColumnEnd: `span ${seg.span}`,
                          gridRow: lane + 1,
                          background: meta.color,
                          color: meta.textOnColor,
                          marginLeft: 3,
                          marginRight: 3,
                          borderTopLeftRadius: seg.isLeftClipped ? 0 : 3,
                          borderBottomLeftRadius: seg.isLeftClipped ? 0 : 3,
                          borderTopRightRadius: seg.isRightClipped ? 0 : 3,
                          borderBottomRightRadius: seg.isRightClipped ? 0 : 3,
                        }}
                      >
                        <span
                          className="truncate"
                          style={{ fontSize: "9.5px", lineHeight: 1, fontWeight: 600 }}
                        >
                          {seg.isLeftClipped ? `… ${seg.event.title}` : seg.event.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Legend ────────────────────────────────────────────────── */}
      <div className="section-padding pt-3">
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {CATEGORY_ORDER.map((c) => (
            <div key={c} className="inline-flex items-center gap-1.5">
              <span
                className="inline-block rounded"
                style={{ width: 12, height: 12, background: CATEGORY_META[c].color }}
              />
              <span className="text-[12px] text-[#262626]">
                {CATEGORY_META[c].label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom sheet ──────────────────────────────────────────── */}
      <EventSheet event={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ─── Banner text helper ──────────────────────────────────────────────── */

function bannerText(ev: CalendarEvent): string {
  const s = parseDate(ev.start);
  const e = parseDate(ev.end);
  const fmt = (d: Date) =>
    new Intl.DateTimeFormat("en-GB", { month: "short", day: "numeric" }).format(d);
  if (s.getTime() === e.getTime()) {
    return `${ev.title} — ${fmt(s)}`;
  }
  const days = Math.round((e.getTime() - s.getTime()) / ONE_DAY) + 1;
  const weeks = days >= 14 ? `(${Math.round(days / 7)} FULL WEEKS)` : "";
  return `${ev.title} : ${fmt(s)} - ${fmt(e)}${weeks ? " " + weeks : ""}`;
}

/* ─── Inline icons ────────────────────────────────────────────────────── */

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="#0089B7" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="#0089B7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="#001B25"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
