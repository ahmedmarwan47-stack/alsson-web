import ScrollReveal from "@/components/home/ScrollReveal";

type InShotsSectionProps = {
  /** Section anchor (e.g. "shots") */
  id?: string;
  /** Title before "in Shots", e.g. "El-Alsson", "Alumni" */
  titlePrefix: string;
  /** Six photo paths (renders 2 cols × 3 rows). Pass more — only first 6 used. */
  photos: string[];
  /** Lead under the heading */
  description?: string;
  /** Instagram handle URL used by the button */
  instagramUrl?: string;
  /** Instagram @ label shown on the button */
  instagramHandle?: string;
};

/** Standardized "In Shots" section — 2 cols × 3 rows photo grid + Instagram CTA.
 *  Used by home, alumni and guidance pages so the section stays identical across the site. */
export default function InShotsSection({
  id = "shots",
  titlePrefix,
  photos,
  description = "A glimpse into the daily inspiration, achievements, and spirit of our students.",
  instagramUrl = "https://www.instagram.com/elalsson_Official",
  instagramHandle = "@elalsson_Official",
}: InShotsSectionProps) {
  const gridPhotos = photos.slice(0, 6);

  return (
    <section id={id} className="bg-[#FAFAFA] section-padding py-12">
      <ScrollReveal>
        <div className="mb-5">
          <h2 className="mb-1" style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 400 }}>
            {titlePrefix} In{" "}
            <span style={{ color: "#0089B7", fontWeight: 700 }}>Shots</span>
          </h2>
          <p className="text-[#525252] text-[12px] leading-[1.5]">{description}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {gridPhotos.map((src, i) => (
            <div key={i} className="rounded-[12px] overflow-hidden" style={{ height: "120px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-full
                     text-white text-[16px] font-medium active:opacity-80"
          style={{
            height: "52px",
            background:
              "radial-gradient(circle at 20% 120%, #FFDD55 0%, #FF994A 25%, #FF543E 45%, #F14D59 60%, #E44675 75%, #C837AB 100%)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
            <circle cx="18" cy="6" r="1.5" fill="white" />
          </svg>
          {instagramHandle}
        </a>
      </ScrollReveal>
    </section>
  );
}
