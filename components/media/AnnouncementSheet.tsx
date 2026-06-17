"use client";

import { useEffect, useRef } from "react";

interface Announcement {
  id: string;
  title: string;
  date: string;
  body: string;
}

interface AnnouncementSheetProps {
  announcement: Announcement | null;
  onClose: () => void;
}

export default function AnnouncementSheet({
  announcement,
  onClose,
}: AnnouncementSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!announcement) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [announcement]);

  useEffect(() => {
    if (!announcement) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [announcement, onClose]);

  if (!announcement) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-[fadeIn_200ms_ease-out]"
        style={{ animationFillMode: "both" }}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="relative w-full bg-[#FAFAFA] rounded-t-[16px] animate-[slideUp_300ms_cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: "85vh",
          animationFillMode: "both",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 w-9 h-9 rounded-full bg-[#E5E5E5] flex items-center justify-center active:bg-[#D4D4D4] transition-colors z-10"
          aria-label="Close announcement"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="#525252"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div
          className="overflow-y-auto px-7 pt-7 pb-8"
          style={{ maxHeight: "85vh" }}
        >
          {/* Title */}
          <h2
            className="text-[#171717] pr-10 mb-4"
            style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 500 }}
          >
            {announcement.title}
          </h2>

          {/* Date */}
          <div className="flex items-center gap-1.5 mb-8">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="3"
                stroke="#00526E"
                strokeWidth="1.5"
              />
              <path
                d="M8 2v4M16 2v4M3 10h18"
                stroke="#00526E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-[#00526E]"
              style={{ fontSize: "16px", lineHeight: "1.5" }}
            >
              {announcement.date}
            </span>
          </div>

          {/* Body */}
          <div
            className="text-[#262626] text-[16px] leading-[1.6]"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {announcement.body}
          </div>
        </div>

        {/* Drag handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[#D4D4D4]" />
      </div>
    </div>
  );
}
