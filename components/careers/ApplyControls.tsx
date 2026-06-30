"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type ApplyCtx = { open: () => void };
const Ctx = createContext<ApplyCtx | null>(null);

function useApply() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApply must be used inside <ApplyProvider>");
  return v;
}

/* ── Country data ──────────────────────────────────────────────────── */
type Country = { name: string; code: string; dial: string; flag: string };

const COUNTRIES: Country[] = [
  { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "UAE", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "Jordan", code: "JO", dial: "+962", flag: "🇯🇴" },
  { name: "Lebanon", code: "LB", dial: "+961", flag: "🇱🇧" },
  { name: "Libya", code: "LY", dial: "+218", flag: "🇱🇾" },
  { name: "Sudan", code: "SD", dial: "+249", flag: "🇸🇩" },
  { name: "Tunisia", code: "TN", dial: "+216", flag: "🇹🇳" },
  { name: "Morocco", code: "MA", dial: "+212", flag: "🇲🇦" },
  { name: "Algeria", code: "DZ", dial: "+213", flag: "🇩🇿" },
  { name: "Syria", code: "SY", dial: "+963", flag: "🇸🇾" },
  { name: "Iraq", code: "IQ", dial: "+964", flag: "🇮🇶" },
  { name: "Palestine", code: "PS", dial: "+970", flag: "🇵🇸" },
  { name: "Yemen", code: "YE", dial: "+967", flag: "🇾🇪" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "South Korea", code: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "Russia", code: "RU", dial: "+7", flag: "🇷🇺" },
  { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
];

const EG = COUNTRIES[0];

/* ── Form state ────────────────────────────────────────────────────── */
type FormState = {
  firstName: string;
  lastName: string;
  nationality: string;
  email: string;
  dialCode: Country;
  phone: string;
  linkedin: string;
  cvName: string;
  coverLetterName: string;
  photoName: string;
  additionalName: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  nationality: "",
  email: "",
  dialCode: EG,
  phone: "",
  linkedin: "",
  cvName: "",
  coverLetterName: "",
  photoName: "",
  additionalName: "",
};

function isValid(f: FormState) {
  return (
    f.firstName.trim().length > 0 &&
    f.lastName.trim().length > 0 &&
    f.nationality.length > 0 &&
    /^\S+@\S+\.\S+$/.test(f.email.trim()) &&
    f.phone.trim().length >= 4 &&
    f.cvName.length > 0
  );
}

/* ── Provider / bottom sheet ───────────────────────────────────────── */
export function ApplyProvider({
  jobTitle,
  children,
}: {
  jobTitle: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [dialOpen, setDialOpen] = useState(false);

  const cvRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const additionalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const valid = isValid(form);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleClose() {
    setOpen(false);
    setDialOpen(false);
    setTimeout(() => { setSubmitted(false); }, 350);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const subject = encodeURIComponent(`Application — ${jobTitle}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nNationality: ${form.nationality}\nEmail: ${form.email}\nPhone: ${form.dialCode.dial} ${form.phone}\nLinkedIn: ${form.linkedin || "—"}\nCV: ${form.cvName}\nCover Letter: ${form.coverLetterName || "—"}\nPhoto: ${form.photoName || "—"}\nAdditional: ${form.additionalName || "—"}`
    );
    window.location.href = `mailto:vacancies@alsson.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}

      {/* ── Bottom sheet ──────────────────────────────────────────── */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Scrim */}
        <button
          aria-label="Close apply form"
          onClick={handleClose}
          className="absolute inset-0 bg-black/55"
        />

        {/* Sheet */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-sheet-title"
          className={`absolute inset-x-0 bottom-0 bg-white rounded-t-[24px] flex flex-col
            shadow-[0_-12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out
            ${open ? "translate-y-0" : "translate-y-full"}`}
          style={{ maxHeight: "92svh" }}
        >
          {/* Drag handle */}
          <div className="pt-2.5 pb-1 flex flex-col items-center shrink-0">
            <span className="w-10 h-1 rounded-full bg-[#D4D4D4]" />
          </div>

          {/* Header */}
          <div className="px-5 pb-3 flex items-start justify-between gap-3 shrink-0">
            <div className="flex-1 min-w-0">
              <p id="apply-sheet-title" className="text-[#0A0A0A] text-[18px] font-bold leading-[1.3]">
                Apply Now
              </p>
              <p className="text-[#525252] text-[13px] mt-0.5 leading-[1.4] line-clamp-2">
                {jobTitle}
              </p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="shrink-0 w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#262626] active:bg-[#E5E5E5] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 5l8 8M13 5l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="h-px bg-[#E5E5E5] shrink-0" />

          {/* Body */}
          {submitted ? (
            <div className="px-5 py-10 text-center flex-1 overflow-y-auto">
              <div className="w-14 h-14 rounded-full bg-[#E5F3F7] flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5L10 17.5L19 7.5" stroke="#0089B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#0A0A0A] text-[18px] font-bold mb-2">Application ready</p>
              <p className="text-[#525252] text-[14px] leading-[1.55] max-w-[300px] mx-auto">
                Your email client has opened with your details pre-filled. Attach your files and send to complete your application.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 h-11 rounded-full bg-[#0089B7] text-white text-[14px] font-medium"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
              <div className="flex-1 min-h-0 overflow-y-auto px-5 pt-4 pb-5 space-y-4">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="First Name"
                    required
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                    placeholder="Ahmed"
                  />
                  <Field
                    label="Last Name"
                    required
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                    placeholder="Hassan"
                  />
                </div>

                {/* Nationality */}
                <NationalityField
                  value={form.nationality}
                  onChange={(v) => update("nationality", v)}
                />

                {/* Email */}
                <Field
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  placeholder="you@example.com"
                />

                {/* Phone with dial code */}
                <div>
                  <label className="block text-[#0A0A0A] text-[13px] font-medium mb-1.5">
                    Phone Number <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="flex gap-2">
                    {/* Dial code picker */}
                    <div className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setDialOpen((v) => !v)}
                        className="flex items-center gap-1.5 px-3 rounded-[12px] border border-[#E5E5E5] bg-white text-[14px] text-[#0A0A0A] active:bg-[#FAFAFA] transition-colors"
                        style={{ height: "44px", minWidth: "90px" }}
                      >
                        <span className="text-[18px] leading-none">{form.dialCode.flag}</span>
                        <span className="text-[13px] text-[#525252]">{form.dialCode.dial}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto shrink-0">
                          <path d="M3 4.5l3 3 3-3" stroke="#737373" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {dialOpen && (
                        <>
                          <button
                            type="button"
                            className="fixed inset-0 z-10"
                            aria-label="Close dial picker"
                            onClick={() => setDialOpen(false)}
                          />
                          <div
                            className="absolute left-0 z-20 mt-1 bg-white border border-[#E5E5E5] rounded-[12px] shadow-lg overflow-y-auto"
                            style={{ width: "220px", maxHeight: "240px", top: "100%" }}
                          >
                            {COUNTRIES.map((c) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => { update("dialCode", c); setDialOpen(false); }}
                                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-[#F5F5F5] active:bg-[#F0F0F0] transition-colors"
                              >
                                <span className="text-[18px] leading-none shrink-0">{c.flag}</span>
                                <span className="text-[13px] text-[#0A0A0A] flex-1 truncate">{c.name}</span>
                                <span className="text-[12px] text-[#737373] shrink-0">{c.dial}</span>
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Number input */}
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="100 000 0000"
                      className="flex-1 px-3 rounded-[12px] border border-[#E5E5E5] bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7]"
                      style={{ height: "44px" }}
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <Field
                  label="LinkedIn / Portfolio"
                  value={form.linkedin}
                  onChange={(v) => update("linkedin", v)}
                  placeholder="https://linkedin.com/in/…"
                />

                {/* CV upload */}
                <FileUpload
                  label="CV / Resume"
                  required
                  accept=".pdf,.doc,.docx"
                  hint="PDF, DOC, DOCX"
                  fileName={form.cvName}
                  inputRef={cvRef}
                  onChange={(name) => update("cvName", name)}
                />

                {/* Cover Letter upload */}
                <FileUpload
                  label="Cover Letter"
                  required
                  accept=".pdf,.doc,.docx"
                  hint="PDF, DOC, DOCX"
                  fileName={form.coverLetterName}
                  inputRef={coverRef}
                  onChange={(name) => update("coverLetterName", name)}
                />

                {/* Photo upload */}
                <FileUpload
                  label="Passport-sized Photo"
                  required
                  accept="image/*"
                  hint="JPG, PNG"
                  fileName={form.photoName}
                  inputRef={photoRef}
                  onChange={(name) => update("photoName", name)}
                />

                {/* Additional files */}
                <FileUpload
                  label="Additional Files"
                  accept=".pdf,.doc,.docx,image/*"
                  hint="Any supporting documents (optional)"
                  fileName={form.additionalName}
                  inputRef={additionalRef}
                  onChange={(name) => update("additionalName", name)}
                />

                <p className="text-[#737373] text-[12px] leading-[1.5]">
                  By submitting, your email client will open pre-filled with your application details. Attach your files before sending.
                </p>
              </div>

              {/* Sticky footer */}
              <div
                className="shrink-0 px-5 pt-3 pb-[max(env(safe-area-inset-bottom),16px)] bg-white border-t border-[#E5E5E5]"
                style={{ boxShadow: "0px -8px 24px rgba(0,0,0,0.06)" }}
              >
                <button
                  type="submit"
                  disabled={!valid}
                  className="w-full flex items-center justify-center gap-2 rounded-full text-white text-[14px] font-medium tracking-[0.05em] uppercase transition-colors"
                  style={{
                    height: "52px",
                    background: valid ? "#0089B7" : "#A3A3A3",
                    boxShadow: valid ? "0px 4px 8px 0px rgba(0,0,0,0.2)" : "none",
                    cursor: valid ? "pointer" : "not-allowed",
                  }}
                >
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Ctx.Provider>
  );
}

/* ── Nationality field ─────────────────────────────────────────────── */
const NATIONALITIES = COUNTRIES.map((c) => ({ label: c.name, flag: c.flag }));

function NationalityField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = NATIONALITIES.find((n) => n.label === value);

  return (
    <div>
      <label className="block text-[#0A0A0A] text-[13px] font-medium mb-1.5">
        Nationality <span className="text-[#E11D48]">*</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`w-full flex items-center gap-2 px-3 rounded-[12px] border text-[14px] text-left transition-colors active:bg-[#FAFAFA]
            ${value ? "border-[#E5E5E5] text-[#0A0A0A]" : "border-[#E5E5E5] text-[#A3A3A3]"}`}
          style={{ height: "44px" }}
        >
          {selected && <span className="text-[18px] leading-none shrink-0">{selected.flag}</span>}
          <span className="flex-1 truncate">{value || "Select nationality"}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#737373]">
            <path d="M3.5 5.25l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-10"
              aria-label="Close nationality picker"
              onClick={() => setOpen(false)}
            />
            <div
              className="absolute left-0 right-0 z-20 mt-1 bg-white border border-[#E5E5E5] rounded-[12px] shadow-lg overflow-y-auto"
              style={{ maxHeight: "240px", top: "100%" }}
            >
              {NATIONALITIES.map((n) => (
                <button
                  key={n.label}
                  type="button"
                  onClick={() => { onChange(n.label); setOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors
                    ${value === n.label ? "bg-[#F2F9FB] text-[#0089B7]" : "hover:bg-[#F5F5F5] active:bg-[#F0F0F0] text-[#0A0A0A]"}`}
                >
                  <span className="text-[18px] leading-none shrink-0">{n.flag}</span>
                  <span className="text-[13px]">{n.label}</span>
                  {value === n.label && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto shrink-0">
                      <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#0089B7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── File upload field ─────────────────────────────────────────────── */
function FileUpload({
  label,
  required,
  accept,
  hint,
  fileName,
  inputRef,
  onChange,
}: {
  label: string;
  required?: boolean;
  accept: string;
  hint: string;
  fileName: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (name: string) => void;
}) {
  return (
    <div>
      <label className="block text-[#0A0A0A] text-[13px] font-medium mb-1.5">
        {label} {required ? <span className="text-[#E11D48]">*</span> : <span className="text-[#737373] font-normal">(optional)</span>}
      </label>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0];
          onChange(f ? f.name : "");
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full flex items-center justify-between gap-2 px-4 rounded-[12px] border text-[14px] active:bg-[#FAFAFA] transition-colors text-left
          ${fileName ? "border-[#0089B7] bg-[#F2F9FB]" : "border-[#E5E5E5] bg-white"}`}
        style={{ height: "48px" }}
      >
        <span className={`truncate text-[14px] ${fileName ? "text-[#0A0A0A]" : "text-[#A3A3A3]"}`}>
          {fileName || hint}
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path
            d="M9 12V3M5.5 6.5L9 3l3.5 3.5M3.5 13.5h11"
            stroke="#0089B7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/* ── Simple text / email / tel field ──────────────────────────────── */
function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[#0A0A0A] text-[13px] font-medium mb-1.5">
        {label} {required && <span className="text-[#E11D48]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 rounded-[12px] border border-[#E5E5E5] bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7]"
        style={{ height: "44px" }}
      />
    </div>
  );
}

/* ── Apply Now button ─────────────────────────────────────────────── */
export function ApplyButton({ variant }: { variant: "hero" | "sticky" | "bottom" }) {
  const { open } = useApply();

  if (variant === "sticky") {
    return (
      <button
        type="button"
        onClick={open}
        className="shrink-0 flex items-center gap-1.5 rounded-full bg-[#0089B7] text-white text-[13px] font-medium active:bg-[#006E92] transition-colors px-4"
        style={{ height: "40px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
      >
        Apply Now
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={open}
      className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0089B7] text-white text-[14px] font-medium tracking-[0.05em] uppercase active:bg-[#006E92] transition-colors"
      style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}
    >
      Apply Now
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
