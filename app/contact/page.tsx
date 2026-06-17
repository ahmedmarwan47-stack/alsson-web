import ContactForm from "@/components/contact/ContactForm";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata = {
  title: "Contact Us — El Alsson International Schools",
  description:
    "Get in touch with El Alsson International Schools. Find our contact details, send us a message, and locate us on the map.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F2F9FB] section-padding pt-10 pb-10 text-center">
        <ScrollReveal>
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
            style={{ fontWeight: 400 }}
          >
            Contact Us
          </span>
          <h1
            className="text-[#0A0A0A]"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
          >
            Get in{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Touch</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-white section-padding pt-10 pb-12">
        <div className="flex flex-col gap-8">
          {/* Contact Details */}
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#FFF3D8" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3.5 4a1.5 1.5 0 011.5-1.5h1.5a1 1 0 01.95.684l.9 2.7a1 1 0 01-.23 1.02L6.87 8.16a10.04 10.04 0 004.97 4.97l1.756-1.25a1 1 0 011.02-.23l2.7.9a1 1 0 01.684.95V15a1.5 1.5 0 01-1.5 1.5A12.5 12.5 0 013.5 4z"
                      stroke="#CC9E2E"

                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[13px] text-[#737373] mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+20227732626"
                    className="block text-[15px] text-[#0A0A0A] font-medium hover:text-[#0089B7] transition-colors"
                  >
                    +2(027) 732 626
                  </a>
                  <a
                    href="tel:+201099865177"
                    className="block text-[15px] text-[#0A0A0A] font-medium hover:text-[#0089B7] transition-colors"
                  >
                    +2(010) 998 6517
                  </a>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#FFF3D8" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2.5"
                      y="4.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="#CC9E2E"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M2.5 7.5l7.5 4.5 7.5-4.5"
                      stroke="#CC9E2E"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[13px] text-[#737373] mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    E-Mail
                  </p>
                  {[
                    "info@elalsson.com",
                    "newgiza@elalsson.com",
                    "finance@elalsson.com",
                    "registrar@elalsson.com",
                  ].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-[14px] text-[#0089B7] hover:text-[#006E92] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Directions */}
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#FFF3D8" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"
                      stroke="#CC9E2E"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="8" r="2" stroke="#CC9E2E" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[13px] text-[#737373] mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    Directions
                  </p>
                  <p className="text-[15px] text-[#0A0A0A] leading-[1.55]">
                    4th Cairo-Alex Road
                    <br />
                    P.O. Box 19 Smart Village
                    <br />
                    Cairo, Egypt 12577
                  </p>
                  <p className="text-[13px] text-[#737373] mt-1.5 leading-[1.5]">
                    Admin offices open daily
                    <br />
                    7:30 am – 2:30 pm
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Find Your Way Here */}
      <section className="bg-[#FAFAFA] section-padding py-12">
        <ScrollReveal>
          <p className="text-[12px] font-bold text-[#0A0A0A] mb-2 tracking-wide uppercase">
            Location
          </p>
          <h2
            className="mb-3"
            style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
          >
            Find Your{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Way Here</span>
          </h2>
          <p className="text-[#525252] text-[15px] leading-[1.6] mb-6">
            Located in the heart of New Giza. Explore the map below for
            detailed directions and school information.
          </p>

          {/* Map embed */}
          <div className="rounded-[20px] overflow-hidden" style={{ height: "320px" }}>
            <iframe
              title="El Alsson International Schools location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9!2d30.9820!3d30.0626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585a1a1a1a1a1b%3A0x1!2sEl+Alsson+International+School!5e0!3m2!1sen!2seg!4v1"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Open in Maps button */}
          <a
            href="https://maps.google.com/?q=El+Alsson+International+School+Smart+Village+Cairo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-full
                       border border-[#262626] text-[#262626] text-[15px] font-medium
                       active:bg-[#F5F5F5] transition-colors"
            style={{ height: "52px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1.5a6 6 0 100 13A6 6 0 008 1.5z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M1.5 8h13M8 1.5C6.5 3.5 5.5 5.7 5.5 8s1 4.5 2.5 6.5M8 1.5C9.5 3.5 10.5 5.7 10.5 8s-1 4.5-2.5 6.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Open in Google Maps
          </a>
        </ScrollReveal>
      </section>

      {/* Pre-footer CTA */}
      <PreFooterCTA />
    </>
  );
}
