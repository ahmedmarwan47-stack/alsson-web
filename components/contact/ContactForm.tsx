"use client";

import { useState } from "react";

const INQUIRY_TYPES = ["Psychology", "Info", "Secretary", "Admissions"];

export default function ContactForm() {
  const [inquiry, setInquiry] = useState("Admissions");

  return (
    <div
      className="bg-white rounded-[20px] p-5 border border-[#E5E5E5]"
      style={{ boxShadow: "0px 4px 20px 0px rgba(0,0,0,0.07)" }}
    >
      {/* Inquiry Purpose tabs */}
      <p className="text-[13px] font-medium text-[#0A0A0A] mb-3">
        Select Inquiry Purpose
      </p>
      <div className="flex gap-2 flex-wrap mb-6">
        {INQUIRY_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setInquiry(type)}
            className="px-4 rounded-full text-[13px] font-medium transition-colors border"
            style={{
              height: "34px",
              background: inquiry === type ? "#0A0A0A" : "transparent",
              color: inquiry === type ? "#fff" : "#525252",
              borderColor: inquiry === type ? "#0A0A0A" : "#D4D4D4",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Form fields */}
      <form className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="full-name"
            className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-[12px] border border-[#E5E5E5] px-4 text-[15px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7] transition-colors"
            style={{ height: "48px" }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+20 000 000 0000"
            className="w-full rounded-[12px] border border-[#E5E5E5] px-4 text-[15px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7] transition-colors"
            style={{ height: "48px" }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-[12px] border border-[#E5E5E5] px-4 text-[15px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7] transition-colors"
            style={{ height: "48px" }}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here…"
            className="w-full rounded-[12px] border border-[#E5E5E5] px-4 py-3 text-[15px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none focus:border-[#0089B7] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-full
                     bg-[#0089B7] text-white text-[15px] font-medium
                     active:bg-[#006E92] transition-colors mt-1"
          style={{
            height: "52px",
            boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.15)",
          }}
        >
          Submit Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M8 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
