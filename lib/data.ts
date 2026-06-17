// Placeholder data — shaped for easy CMS/API swap-in later.
// Replace each array / object with a fetch() or getServerSideProps call.

export const SCHOOLS = [
  {
    slug: "american-school",
    name: "American School",
    badge: "US Academic Standards",
    description: "Pre-S to Grade 12, culminating in the US High School Diploma and AP courses.",
    image: "/images/american-school.jpg",
    href: "/academics/american",
  },
  {
    slug: "british-school",
    name: "British School",
    badge: "Edexcel and Cambridge GCSE",
    description: "Foundation Stage 1 to A-Levels, following the National Curriculum for England with IGCSEs.",
    image: "/images/british-school.jpg",
    href: "/academics/british",
  },
  {
    slug: "ibdp",
    name: "IBDP",
    badge: "Two Year Program",
    description: "The International Baccalaureate Diploma Program will be offered for Grades 11–12.",
    image: "/images/ibdp-school.jpg",
    href: "/academics/ib",
  },
];

export const CURRICULA = [
  { label: "American", href: "/academics/american" },
  { label: "British", href: "/academics/british" },
  { label: "IB", href: "/academics/ib" },
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    date: "Sat 31 Mar 2026",
    tag: "Announcements",
    title: "Landlines are temporarily down",
    excerpt:
      "Dear Parents, We are currently experiencing a technical issue with our landlines. They keep intermittently going down and causing disruptions in communications.",
    readTime: "1min read",
  },
  {
    id: 2,
    date: "Sat 31 Mar 2026",
    tag: "Announcements",
    title: "School Closure Notice",
    excerpt:
      "Due to expected unstable weather conditions, the Ministry of Education has announced that all schools across Egypt will be closed on Wednesday and Thursday.",
    readTime: "3min read",
  },
  {
    id: 3,
    date: "Sat 31 Mar 2026",
    tag: "Announcements",
    title: "Graduation Class of 2026",
    excerpt:
      "Event starts on 26 June 2026 at 7:00 PM. Doors open at 6:15 PM. Please present your ticket upon arrival.",
    readTime: "1min read",
  },
];

export const FEATURED_EVENTS = [
  {
    id: 1,
    date: "28 Jun",
    month: "Jun",
    day: "28",
    title: "Graduation Ceremony 2026",
    location: "Main Campus Auditorium",
    tag: "Academic",
  },
  {
    id: 2,
    date: "15 Jul",
    month: "Jul",
    day: "15",
    title: "Open Day — New Academic Year",
    location: "Alsson School, 6th October City",
    tag: "Admissions",
  },
  {
    id: 3,
    date: "01 Sep",
    month: "Sep",
    day: "01",
    title: "First Day of School 2026–2027",
    location: "All Campuses",
    tag: "General",
  },
];

export const ACADEMICS_LEVELS = [
  {
    slug: "early-childhood",
    label: "Early Childhood",
    ageRange: "Ages 3–5",
    grades: "Pre-School & Pre-K",
    description:
      "Nurturing curiosity and foundational skills through play-based learning and structured exploration.",
    color: "#E5F3F7",
    accent: "#0089B7",
  },
  {
    slug: "elementary",
    label: "Elementary",
    ageRange: "Ages 6–11",
    grades: "Grades 1–5",
    description:
      "Building core academic competencies alongside creativity, critical thinking, and collaboration.",
    color: "#FFF3D8",
    accent: "#CC9E2E",
  },
  {
    slug: "middle-school",
    label: "Middle School",
    ageRange: "Ages 12–14",
    grades: "Grades 6–8",
    description:
      "A challenging curriculum that prepares students for the rigour of high school and beyond.",
    color: "#E5F3F7",
    accent: "#0089B7",
  },
  {
    slug: "high-school",
    label: "High School",
    ageRange: "Ages 15–18",
    grades: "Grades 9–12",
    description:
      "AP, IGCSE and IB pathways leading to university readiness and global opportunities.",
    color: "#FFF3D8",
    accent: "#CC9E2E",
  },
];

export const FACILITIES = [
  { label: "Science Labs", icon: "🔬" },
  { label: "Sports Complex", icon: "⚽" },
  { label: "Performing Arts", icon: "🎭" },
  { label: "Library & Media", icon: "📚" },
  { label: "STEM Centre", icon: "🤖" },
  { label: "Swimming Pool", icon: "🏊" },
];
