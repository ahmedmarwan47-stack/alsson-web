const APP_FEATURES = [
  {
    img: "/images/app-feat-updates.jpg",
    title: "Real-Time Updates",
    video: "#",
  },
  {
    img: "/images/app-feat-fees.jpg",
    title: "Next Fee Installment",
    video: "#",
  },
  {
    img: "/images/app-feat-pickup.jpg",
    title: "Pickup & Attendance",
    video: "#",
  },
];

/** Floating widget — rotated card around the phone mockup, tappable to view video. */
function FloatingWidget({
  feature,
  style,
  rotate,
}: {
  feature: (typeof APP_FEATURES)[number];
  style: React.CSSProperties;
  rotate: number;
}) {
  return (
    <a
      href={feature.video}
      className="absolute bg-white rounded-[14px] p-2 flex items-center gap-2
                 shadow-[0px_8px_22px_-6px_rgba(0,0,0,0.45)] active:scale-95 transition-transform"
      style={{ ...style, transform: `${style.transform ?? ""} rotate(${rotate}deg)` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={feature.img}
        alt=""
        aria-hidden
        className="rounded-[10px] object-cover shrink-0"
        style={{ width: "44px", height: "44px" }}
      />
      <div className="min-w-0">
        <p className="text-[#001B25] font-medium leading-tight" style={{ fontSize: "12px" }}>
          {feature.title}
        </p>
        <span className="text-[#006E92] underline leading-tight" style={{ fontSize: "12px" }}>
          View Video
        </span>
      </div>
    </a>
  );
}

export default function ParentsAppSection() {
  return (
    <section
      id="app"
      className="relative overflow-hidden py-12"
      style={{ background: "linear-gradient(180deg, #004B67 38%, #001B25 92%)" }}
    >
      {/* Header */}
      <div className="section-padding text-center">
        <span
          className="inline-block bg-[#FFE8B0] text-[#1A1406] px-3 py-1 rounded-md mb-2"
          style={{ fontWeight: 400, fontSize: "12px" }}
        >
          Parents App
        </span>
        <h2
          className="text-white mb-5"
          style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}
        >
          Everything Parents Need, In{" "}
          <span style={{ color: "#FFC53A", fontWeight: 500 }}>One App</span>
        </h2>

        {/* Store buttons */}
        <div className="flex gap-3 w-full mb-8">
          <a
            href="#"
            className="flex-1 flex items-center justify-center gap-2 bg-black rounded-[8px] py-2.5 active:opacity-80"
          >
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
              <path
                d="M14.94 11.64c-.02-2.33 1.9-3.46 1.99-3.51-1.09-1.59-2.78-1.8-3.38-1.83-1.43-.15-2.81.85-3.54.85-.74 0-1.87-.83-3.08-.81-1.58.02-3.04.93-3.86 2.35-1.65 2.87-.42 7.12 1.19 9.44.79 1.14 1.73 2.42 2.96 2.38 1.19-.05 1.64-.77 3.08-.77 1.43 0 1.84.77 3.09.74 1.28-.02 2.09-1.16 2.87-2.31.91-1.32 1.28-2.61 1.3-2.68-.03-.01-2.5-.96-2.52-3.81l-.1.06zM12.55 4.48c.65-.8 1.09-1.9.97-3-.94.04-2.08.63-2.76 1.42-.6.7-1.13 1.82-.99 2.89 1.05.08 2.13-.53 2.78-1.31z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-white leading-tight" style={{ fontSize: "12px" }}>
                Download on the
              </span>
              <span className="text-white font-medium leading-tight" style={{ fontSize: "12px" }}>
                App Store
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center gap-2 bg-[#FAFAFA] rounded-[8px] py-2.5 active:opacity-80"
          >
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M1.16 1.04C.93 1.29.8 1.66.8 2.14v15.72c0 .48.13.85.36 1.1l.06.06L9.7 10.6v-.2L1.22.98l-.06.06z" fill="#00C3FF" />
              <path d="M12.53 13.44L9.7 10.6v-.2l2.83-2.84.06.04 3.35 1.9c.96.54.96 1.43 0 1.98l-3.35 1.9-.06.06z" fill="#FFBC00" />
              <path d="M12.59 13.38L9.7 10.5 1.16 19.04c.32.33.84.37 1.43.04l9.99-5.7z" fill="#F33D51" />
              <path d="M12.59 7.62l-10-5.7C2 1.56 1.48 1.6 1.16 1.93L9.7 10.5l2.89-2.88z" fill="#00EE76" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[#0A0A0A] leading-tight" style={{ fontSize: "12px" }}>
                Get it on
              </span>
              <span className="text-[#0A0A0A] font-medium leading-tight" style={{ fontSize: "12px" }}>
                Google Play
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Phone mockup with flying widgets */}
      <div className="relative mx-auto" style={{ height: "440px", maxWidth: "380px" }}>
        {/* Decorative rings */}
        <div
          aria-hidden
          className="absolute rounded-full border border-white/10"
          style={{ width: "340px", height: "340px", top: "50px", left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          aria-hidden
          className="absolute rounded-full border border-white/15"
          style={{ width: "280px", height: "280px", top: "80px", left: "50%", transform: "translateX(-50%)" }}
        />

        {/* Phone mockup */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "30px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/parents-app-phone.png"
            alt="El Alsson Parents App on a phone"
            className="block h-auto"
            style={{ width: "230px" }}
          />
        </div>

        {/* Flying widgets */}
        <FloatingWidget
          feature={APP_FEATURES[0]}
          rotate={-6}
          style={{ top: "20px", left: "8px", width: "180px" }}
        />
        <FloatingWidget
          feature={APP_FEATURES[1]}
          rotate={5}
          style={{ top: "180px", right: "6px", width: "180px" }}
        />
        <FloatingWidget
          feature={APP_FEATURES[2]}
          rotate={-3}
          style={{ bottom: "10px", left: "16px", width: "190px" }}
        />
      </div>
    </section>
  );
}
