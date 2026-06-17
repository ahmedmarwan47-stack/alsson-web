"use client";

import { useEffect, useState } from "react";
import {
  CalendarEvent,
  CATEGORY_META,
  buildIcs,
  formatRange,
} from "@/lib/calendar";

interface Props {
  event: CalendarEvent | null;
  onClose: () => void;
}

export default function EventSheet({ event, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (event) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(t);
    }
  }, [event]);

  if (!mounted && !event) return null;

  const ev = event;
  const meta = ev ? CATEGORY_META[ev.category] : null;
  const isOpen = Boolean(event);

  const handleShare = async () => {
    if (!ev) return;
    const shareUrl = `${window.location.origin}/calendar?event=${ev.id}`;
    const shareData = {
      title: `${ev.title} — El Alsson`,
      text: `${ev.title} • ${formatRange(ev.start, ev.end)}${
        ev.location ? ` • ${ev.location}` : ""
      }`,
      url: shareUrl,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareUrl}`);
        setToast("Link copied");
        setTimeout(() => setToast(null), 1800);
      }
    } catch {
      /* user dismissed */
    }
  };

  const handleAddToCalendar = () => {
    if (!ev) return;
    const ics = buildIcs(ev);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ev.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setToast("Added to calendar");
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-200"
        style={{
          background: "rgba(0,27,37,0.55)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[61] transition-transform duration-250"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <div
          className="bg-white rounded-t-[20px] overflow-hidden"
          style={{ boxShadow: "0 -8px 24px rgba(0,0,0,0.18)" }}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-2.5 pb-1">
            <span
              className="block rounded-full"
              style={{ width: 36, height: 4, background: "#D4D4D4" }}
            />
          </div>

          {ev && meta && (
            <div className="px-5 pb-6 pt-2">
              {/* Category strip */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em]"
                  style={{ background: meta.color, color: meta.textOnColor }}
                >
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: meta.textOnColor,
                      opacity: 0.75,
                    }}
                  />
                  {meta.label}
                </span>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-[#F2F9FB] active:bg-[#E5F3F7]"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="#001B25"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Title */}
              <h3
                className="text-[#0A0A0A] mb-3"
                style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: 600 }}
              >
                {ev.title}
              </h3>

              {/* Meta rows */}
              <div className="flex flex-col gap-2.5 mb-5">
                <Row icon={<DateIcon />} label="Date" value={formatRange(ev.start, ev.end)} />
                {ev.time && <Row icon={<ClockIcon />} label="Time" value={ev.time} />}
                {ev.allDay && !ev.time && <Row icon={<ClockIcon />} label="Time" value="All day" />}
                {ev.location && (
                  <Row icon={<PinIcon />} label="Location" value={ev.location} />
                )}
              </div>

              {/* Description */}
              {ev.description && (
                <p
                  className="text-[#525252] mb-5"
                  style={{ fontSize: "14px", lineHeight: "1.55" }}
                >
                  {ev.description}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={handleAddToCalendar}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0089B7] text-white uppercase tracking-[0.05em] font-medium active:bg-[#006E92]"
                  style={{
                    height: 52,
                    fontSize: 14,
                    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.18)",
                  }}
                >
                  <PlusIcon /> Add to Calendar
                </button>
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-[#262626] text-[#262626] uppercase tracking-[0.05em] font-medium active:bg-white/60"
                  style={{ height: 52, fontSize: 14 }}
                >
                  <ShareIcon /> Share Event
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="fixed left-1/2 z-[62] -translate-x-1/2 rounded-full px-4 py-2 text-white text-[13px] font-medium"
          style={{ bottom: "calc(100% - 100%)", top: 80, background: "rgba(0,27,37,0.92)" }}
        >
          {toast}
        </div>
      )}
    </>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1">
        <div className="text-[11px] uppercase tracking-[0.06em] text-[#737373] mb-0.5">
          {label}
        </div>
        <div className="text-[14px] text-[#0A0A0A] font-medium">{value}</div>
      </div>
    </div>
  );
}

function DateIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="#0089B7" strokeWidth="1.6" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="#0089B7" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="#0089B7" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="#0089B7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"
        stroke="#0089B7"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="#0089B7" strokeWidth="1.6" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="white" strokeWidth="1.7" />
      <path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v13m0-13l-4 4m4-4l4 4M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
