import Link from "next/link";

type Props = {
  href: string;
  title: string;
  size: string;
  /** Use <Link> by default; pass "a" for external/native anchor */
  as?: "Link" | "a";
};

/** Shared PDF/file download card — matches Figma node 11470:37608 "File Upload Cards [1.1]".
 *  Layout: PDF folded-paper icon with red "PDF" badge → filename + size → download arrow.
 *  Used by Brochures + Tuition Fees download blocks. */
export default function FileCard({ href, title, size, as = "Link" }: Props) {
  const className =
    "bg-white border border-[#F5F5F5] rounded-[16px] p-3 flex items-center gap-2.5 active:bg-[#FAFAFA] transition-colors min-w-0";

  const inner = (
    <>
      <PdfIcon />
      <div className="flex-1 min-w-0">
        <p
          className="text-[12px] font-medium text-black leading-[1.35]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </p>
        <p className="text-[12px] text-[#737373] leading-[1.5] mt-0.5">{size}</p>
      </div>
      <DownloadIcon />
    </>
  );

  if (as === "a") {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

/** PDF file format icon — sourced from Figma "File Format Icons [1.1]" placed in /public/images.
 *  The SVG is 40×40 square so it renders cleanly at any of the allowed icon sizes (16/20/24). */
function PdfIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/File Format Icons [1.1].svg"
      width={24}
      height={24}
      alt=""
      aria-hidden
      className="shrink-0"
    />
  );
}

/** Download arrow icon — sized 20px per the SVG icon scale rule (16/20/24). */
function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#737373]"
      aria-hidden
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
