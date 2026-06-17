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
          <span
            className="inline-block -rotate-2 bg-[#FFE8B0] text-[#1A1406] text-[12px] px-3 py-1 rounded-md mb-1"
            style={{ fontWeight: 400 }}
          >
            Questions
          </span>

          <h1
            className="text-[#0A0A0A]"
            style={{ fontSize: "32px", lineHeight: "1.15", fontWeight: 500 }}
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
