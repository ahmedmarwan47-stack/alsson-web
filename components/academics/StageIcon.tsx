type IconName =
  | "football"
  | "file-02"
  | "file-01"
  | "chemistry-02"
  | "user-multiple"
  | "cardiogram-02"
  | "paint-board"
  | "school"
  | "location-01"
  | "mortarboard-01";

type Props = {
  name: IconName;
  size?: number;
  stroke?: string;
  className?: string;
};

export default function StageIcon({
  name,
  size = 20,
  stroke = "currentColor",
  className,
}: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "football":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 4l3 3-1.5 4.5L9 13l-2-3 2-3z" />
          <path d="M15 7l3.5 1M9 13l-3 1.5M13.5 11.5L17 15M9 13l1 4M12 4V2.5M3.5 12H2M20.5 12H22M12 21v1.5" />
        </svg>
      );
    case "file-02":
    case "file-01":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 16h6M9 10h2" />
        </svg>
      );
    case "chemistry-02":
      return (
        <svg {...common}>
          <path d="M9 3v6L4.5 17a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L15 9V3" />
          <path d="M8 3h8" />
          <path d="M6.5 14h11" />
          <circle cx="10" cy="17" r="0.8" fill={stroke} />
          <circle cx="14" cy="16" r="0.8" fill={stroke} />
        </svg>
      );
    case "user-multiple":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 15.5c1-.3 1.7-.5 2.5-.5 2.5 0 4.5 2 4.5 4.5" />
        </svg>
      );
    case "cardiogram-02":
      return (
        <svg {...common}>
          <path d="M3 12h3l2-5 4 10 2-5h7" />
        </svg>
      );
    case "paint-board":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1 1-2 2-2h2a3 3 0 0 0 3-3 9 9 0 0 0-9-11z" />
          <circle cx="7.5" cy="11" r="1.2" fill={stroke} stroke="none" />
          <circle cx="9" cy="7" r="1.2" fill={stroke} stroke="none" />
          <circle cx="13" cy="6" r="1.2" fill={stroke} stroke="none" />
          <circle cx="17" cy="9" r="1.2" fill={stroke} stroke="none" />
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <path d="M3 10l9-5 9 5-9 5-9-5z" />
          <path d="M7 12v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
          <path d="M21 10v5" />
        </svg>
      );
    case "location-01":
      return (
        <svg {...common}>
          <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "mortarboard-01":
      return (
        <svg {...common}>
          <path d="M2 9l10-4 10 4-10 4z" />
          <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
          <path d="M22 9v5" />
        </svg>
      );
  }
}
