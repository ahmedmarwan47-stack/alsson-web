import FAQsFilter from "@/components/faqs/FAQsFilter";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata = {
  title: "FAQs — El Alsson International Schools",
  description:
    "Find answers to frequently asked questions about El Alsson's curricula, admissions, uniform, student life, and more.",
};

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAFA] section-padding pt-10 pb-8 text-center">
        <ScrollReveal>
          {/* Category pill */}
          <div className="inline-flex mb-4">
            <span
              className="inline-block text-[12px] font-medium px-3 py-1 rounded-md"
              style={{
                background: "#FFE8B0",
                color: "#1A1406",
                transform: "rotate(-2deg)",
                fontWeight: 400,
              }}
            >
              Questions
            </span>
          </div>

          <h1
            className="text-[#0A0A0A]"
            style={{ fontSize: "32px", lineHeight: "1.2", fontWeight: 500 }}
          >
            Frequently Asked
            <br />
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Questions</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Filter + Accordion */}
      <FAQsFilter />

      {/* Pre-footer CTA */}
      <PreFooterCTA />
    </>
  );
}
