"use client";

import { useEffect, useRef, useState } from "react";

interface Option {
  id: string;
  label: string;
  swatch?: string;
}

interface Props {
  label: string;
  options: Option[];
  selected: string[];
  single?: boolean;
  onToggle: (id: string) => void;
}

export default function FilterDropdown({
  label,
  options,
  selected,
  single,
  onToggle,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const summaryLabel =
    selected.length === 0
      ? label
      : single
      ? options.find((o) => o.id === selected[0])?.label ?? label
      : selected.length === 1
      ? options.find((o) => o.id === selected[0])?.label ?? label
      : `${label} (${selected.length})`;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between rounded-lg border border-[#D4D4D4] bg-white px-3.5 h-[44px] text-left active:bg-[#FAFAFA]"
        style={{ fontSize: "14px" }}
      >
        <span
          className={selected.length > 0 ? "text-[#0A0A0A] font-medium" : "text-[#737373]"}
        >
          {summaryLabel}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#525252"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-1 z-30 rounded-lg bg-white border border-[#E5E5E5] shadow-lg max-h-[260px] overflow-y-auto"
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = selected.includes(opt.id);
            return (
              <button
                key={opt.id}
                onClick={() => {
                  onToggle(opt.id);
                  if (single) setOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left hover:bg-[#F2F9FB] active:bg-[#E5F3F7]"
                role="option"
                aria-selected={isSelected}
              >
                {!single && (
                  <span
                    className="shrink-0 inline-flex items-center justify-center rounded"
                    style={{
                      width: 16,
                      height: 16,
                      border: `1.5px solid ${isSelected ? "#0089B7" : "#A3A3A3"}`,
                      background: isSelected ? "#0089B7" : "transparent",
                    }}
                  >
                    {isSelected && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5l2.5 2.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                )}
                {opt.swatch && (
                  <span
                    className="shrink-0 rounded"
                    style={{ width: 12, height: 12, background: opt.swatch }}
                  />
                )}
                <span
                  className="flex-1"
                  style={{
                    fontSize: "14px",
                    color: isSelected ? "#0089B7" : "#171717",
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {opt.label}
                </span>
                {single && isSelected && (
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5l2.5 2.5L9.5 3.5"
                      stroke="#0089B7"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
