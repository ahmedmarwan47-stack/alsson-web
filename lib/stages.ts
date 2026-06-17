export interface StageFeature {
  icon: "football" | "file" | "chemistry" | "users" | "heart" | "paint" | "school" | "location" | "mortarboard";
  title: string;
  body: string;
  note?: string;
}

export interface ProgramCard {
  title: string;
  subtitle: string;
  features: StageFeature[];
}

export type FacilityIcon =
  | "football"
  | "file-02"
  | "chemistry-02"
  | "paint-board"
  | "school"
  | "mortarboard-01"
  | "user-multiple";

export interface FacilityFeature {
  title: string;
  body: string;
  icon: FacilityIcon;
  image?: string;
}

export interface StageData {
  slug: string;
  title: string;
  heroDescription: string;
  heroPhotos: string[];
  overviewImage: string;
  overviewText: string[];
  facilitiesTitle: string;
  facilitiesLead: string;
  facilitiesImage: string;
  facilitiesFeatures: FacilityFeature[];
  programs: ProgramCard[];
  handbooks: { label: string; size: string }[];
  policies: { label: string; size: string }[];
}

export const STAGES: StageData[] = [
  {
    slug: "pre-school",
    title: "Pre-School &\nPre-Kindergarten",
    heroDescription:
      "The Early Childhood program provides a safe, nurturing, and stimulating environment where children take their first structured steps into learning. Through a carefully balanced mix of play-based inquiry and explicit instruction, we focus on developing foundational literacy, numeracy, and fine motor skills.",
    heroPhotos: [
      "/images/stage-hero-1.jpg",
      "/images/stage-hero-2.jpg",
      "/images/stage-hero-3.jpg",
      "/images/stage-hero-4.jpg",
    ],
    overviewImage: "/images/stage-overview.jpg",
    overviewText: [
      "This is a time of rapid growth when children are acquiring positive attitudes towards school and the love of learning which supports a successful school career; so your choice of school is critical at this time.",
      "At El Alsson School we follow the US Early Learning Standards and Developmentally Appropriate methods for Early Childhood Education. Learning in Pre-School and Pre-K is fun and curriculum goals are achieved through purposeful, well-planned play and practical activities which are both child-initiated and teacher-directed.",
    ],
    facilitiesTitle: "Facilities & Enrichment",
    facilitiesLead:
      "Throughout Early Childhood, we provide a caring, happy, and stimulating learning environment that encourages children to grow in independence, fulfill their potential, and develop gross motor skills.",
    facilitiesImage: "/images/stage-facilities.jpg",
    facilitiesFeatures: [
      {
        title: "Outdoor Play",
        body: "Play areas are designed to accommodate art and craft facilities, sand, water, role-play and action-learning opportunities.",
        icon: "football",
        image: "/images/stage-facilities.jpg",
      },
      {
        title: "Specialist Lessons",
        body: "Students take part in specialist Arabic, PE, Computer Science, Library and Music lessons.",
        icon: "file-02",
        image: "/images/stage-overview.jpg",
      },
      {
        title: "Technology",
        body: "Students also have access to the Primary School Computer Suite as well as laptops and/or iPads in their classrooms.",
        icon: "chemistry-02",
        image: "/images/stage-hero-3.jpg",
      },
    ],
    programs: [
      {
        title: "Entering Pre-School",
        subtitle: "Aged 3+ by October 1st",
        features: [
          { icon: "users", title: "Small Class Sizes", body: "15 children per class." },
          { icon: "heart", title: "High Level of Care", body: "An Adult:child ratio of 1:5" },
          {
            icon: "paint",
            title: "Dedicated Pre-School Unit",
            body: "A bright, open-plan teaching area with colorful furnishings and resources.",
          },
          {
            icon: "school",
            title: "Accommodates 3 or 4 classes",
            body: "And features its very own bathroom facilities tailored for young children.",
          },
        ],
      },
      {
        title: "Entering Pre-Kindergarten",
        subtitle: "Aged 4+ by October 1st",
        features: [
          {
            icon: "file",
            title: "Prerequisite:",
            body: "Must have completed at least one year of Nursery education",
            note: "A report is required",
          },
          { icon: "users", title: "Class Configuration", body: "Up to 24 students per class." },
          {
            icon: "mortarboard",
            title: "Dedicated Staffing",
            body: "Every class has a qualified teacher and a full-time teaching assistant.",
          },
          {
            icon: "location",
            title: "Environment",
            body: "Based in colorful classrooms positioned around our activity courtyard.",
          },
        ],
      },
    ],
    handbooks: [
      { label: "Pre-School Handbook", size: "94 KB" },
      { label: "Pre-K Handbook", size: "94 KB" },
      { label: "Early Years Guide", size: "94 KB" },
      { label: "Parent Orientation", size: "94 KB" },
    ],
    policies: [
      { label: "Attendance Policy", size: "94 KB" },
      { label: "Behavior Policy", size: "94 KB" },
      { label: "Health & Safety Policy", size: "94 KB" },
      { label: "Anti-Bullying Policy", size: "94 KB" },
      { label: "Safeguarding Policy", size: "94 KB" },
      { label: "Assessment Policy", size: "94 KB" },
      { label: "Inclusion Policy", size: "94 KB" },
      { label: "Communication Policy", size: "94 KB" },
      { label: "Homework Policy", size: "94 KB" },
      { label: "Uniform Policy", size: "94 KB" },
      { label: "Digital Learning Policy", size: "94 KB" },
      { label: "Field Trip Policy", size: "94 KB" },
    ],
  },
  {
    slug: "kindergarten",
    title: "Kindergarten\nand Grade 1",
    heroDescription:
      "Building on early childhood foundations, our Kindergarten and Grade 1 program introduces more structured learning while maintaining a nurturing environment that fosters curiosity and confidence.",
    heroPhotos: [
      "/images/stage-hero-2.jpg",
      "/images/stage-hero-1.jpg",
      "/images/stage-hero-4.jpg",
      "/images/stage-hero-3.jpg",
    ],
    overviewImage: "/images/stage-overview.jpg",
    overviewText: [
      "The transition from Early Childhood to Kindergarten and Grade 1 is a significant milestone. Our program ensures a smooth journey by blending structured academics with creative exploration.",
      "Students develop core literacy and numeracy skills through the US Common Core Standards while engaging in hands-on science, social studies, and arts activities that build critical thinking and collaboration.",
    ],
    facilitiesTitle: "Facilities & Enrichment",
    facilitiesLead:
      "Our Kindergarten and Grade 1 classrooms are purpose-built to support active, hands-on learning with dedicated specialist areas.",
    facilitiesImage: "/images/stage-facilities.jpg",
    facilitiesFeatures: [
      {
        title: "Learning Spaces",
        body: "Classrooms feature learning centers with literacy, math, science, and creative arts stations.",
        icon: "school",
        image: "/images/stage-facilities.jpg",
      },
      {
        title: "Specialist Lessons",
        body: "Students receive instruction in Arabic, PE, Computer Science, Library, Music, and Art.",
        icon: "file-02",
        image: "/images/stage-overview.jpg",
      },
      {
        title: "Technology Integration",
        body: "Interactive smartboards and age-appropriate educational software enhance every lesson.",
        icon: "chemistry-02",
        image: "/images/stage-hero-2.jpg",
      },
    ],
    programs: [
      {
        title: "Entering Kindergarten",
        subtitle: "Aged 5+ by October 1st",
        features: [
          { icon: "users", title: "Class Size", body: "Up to 24 students per class." },
          { icon: "heart", title: "Dedicated Staff", body: "A class teacher and a full-time teaching assistant." },
          { icon: "paint", title: "Curriculum", body: "US Common Core aligned literacy and math foundations." },
          { icon: "school", title: "Campus", body: "Dedicated wing with playground access and specialist rooms." },
        ],
      },
      {
        title: "Entering Grade 1",
        subtitle: "Aged 6+ by October 1st",
        features: [
          {
            icon: "file",
            title: "Prerequisite:",
            body: "Must have completed Kindergarten or equivalent.",
            note: "Previous school report required",
          },
          { icon: "users", title: "Class Configuration", body: "Up to 24 students per class." },
          { icon: "mortarboard", title: "Academic Focus", body: "Structured reading, writing, and math programs." },
          { icon: "location", title: "Environment", body: "Bright classrooms with dedicated reading corners and maker spaces." },
        ],
      },
    ],
    handbooks: [
      { label: "KG Handbook", size: "102 KB" },
      { label: "Grade 1 Handbook", size: "98 KB" },
      { label: "Reading Guide", size: "86 KB" },
      { label: "Parent Orientation", size: "94 KB" },
    ],
    policies: [
      { label: "Attendance Policy", size: "94 KB" },
      { label: "Behavior Policy", size: "94 KB" },
      { label: "Health & Safety Policy", size: "94 KB" },
      { label: "Anti-Bullying Policy", size: "94 KB" },
      { label: "Safeguarding Policy", size: "94 KB" },
      { label: "Assessment Policy", size: "94 KB" },
      { label: "Inclusion Policy", size: "94 KB" },
      { label: "Communication Policy", size: "94 KB" },
      { label: "Homework Policy", size: "94 KB" },
      { label: "Uniform Policy", size: "94 KB" },
      { label: "Digital Learning Policy", size: "94 KB" },
      { label: "Field Trip Policy", size: "94 KB" },
    ],
  },
  {
    slug: "elementary",
    title: "Elementary School\n(G2-G5)",
    heroDescription:
      "Our Elementary program deepens academic skills in literacy, mathematics, science, and social studies while nurturing creativity, collaboration, and critical thinking.",
    heroPhotos: [
      "/images/stage-hero-3.jpg",
      "/images/stage-hero-4.jpg",
      "/images/stage-hero-1.jpg",
      "/images/stage-hero-2.jpg",
    ],
    overviewImage: "/images/stage-overview.jpg",
    overviewText: [
      "Elementary School at El Alsson builds confident, independent learners. Students follow a rigorous American curriculum aligned with Common Core standards.",
      "Our inquiry-based approach encourages students to ask questions, investigate, and develop a love for learning that extends beyond the classroom.",
    ],
    facilitiesTitle: "Facilities & Enrichment",
    facilitiesLead:
      "Elementary students have access to state-of-the-art science labs, a dedicated library, and expansive outdoor play areas.",
    facilitiesImage: "/images/stage-facilities.jpg",
    facilitiesFeatures: [
      { title: "Science Labs", body: "Hands-on experiments in purpose-built labs spark curiosity and scientific thinking.", icon: "chemistry-02", image: "/images/stage-facilities.jpg" },
      { title: "Arts Program", body: "Visual arts, music, and drama foster creative expression and confidence.", icon: "paint-board", image: "/images/stage-overview.jpg" },
      { title: "Sports & PE", body: "A comprehensive athletics program including swimming, football, and gymnastics.", icon: "football", image: "/images/stage-hero-3.jpg" },
    ],
    programs: [
      {
        title: "Elementary Program",
        subtitle: "Grades 2 through 5",
        features: [
          { icon: "users", title: "Class Size", body: "Up to 24 students per class." },
          { icon: "mortarboard", title: "Core Subjects", body: "ELA, Math, Science, and Social Studies daily." },
          { icon: "paint", title: "Enrichment", body: "Arabic, French, PE, Art, Music, and Library." },
          { icon: "school", title: "Assessment", body: "Standardized testing with MAP Growth assessments." },
        ],
      },
    ],
    handbooks: [
      { label: "Elementary Handbook", size: "112 KB" },
      { label: "Curriculum Guide", size: "98 KB" },
      { label: "Assessment Policy", size: "86 KB" },
      { label: "Parent Orientation", size: "94 KB" },
    ],
    policies: [
      { label: "Attendance Policy", size: "94 KB" },
      { label: "Behavior Policy", size: "94 KB" },
      { label: "Health & Safety Policy", size: "94 KB" },
      { label: "Anti-Bullying Policy", size: "94 KB" },
      { label: "Safeguarding Policy", size: "94 KB" },
      { label: "Assessment Policy", size: "94 KB" },
      { label: "Inclusion Policy", size: "94 KB" },
      { label: "Communication Policy", size: "94 KB" },
      { label: "Homework Policy", size: "94 KB" },
      { label: "Uniform Policy", size: "94 KB" },
      { label: "Digital Learning Policy", size: "94 KB" },
      { label: "Field Trip Policy", size: "94 KB" },
    ],
  },
  {
    slug: "middle-school",
    title: "Middle School\n(G6-G8)",
    heroDescription:
      "Middle School bridges elementary foundations and high school rigor. Students explore diverse subjects, develop study skills, and begin shaping their academic interests.",
    heroPhotos: [
      "/images/stage-hero-4.jpg",
      "/images/stage-hero-3.jpg",
      "/images/stage-hero-2.jpg",
      "/images/stage-hero-1.jpg",
    ],
    overviewImage: "/images/stage-overview.jpg",
    overviewText: [
      "Middle School is a transformative period where students transition from guided learners to independent thinkers. Our curriculum challenges students academically while supporting their social-emotional growth.",
      "Students explore a broad curriculum including honors-level courses in core subjects, world languages, and a robust electives program in arts, technology, and athletics.",
    ],
    facilitiesTitle: "Facilities & Enrichment",
    facilitiesLead:
      "Middle School students enjoy dedicated science labs, technology suites, and a wide range of extracurricular facilities.",
    facilitiesImage: "/images/stage-facilities.jpg",
    facilitiesFeatures: [
      { title: "STEM Program", body: "Advanced science labs and coding workshops build future-ready skills.", icon: "chemistry-02", image: "/images/stage-facilities.jpg" },
      { title: "Student Council", body: "Leadership opportunities through student government and community service.", icon: "user-multiple", image: "/images/stage-overview.jpg" },
      { title: "Athletics", body: "Competitive sports teams in football, basketball, swimming, and track & field.", icon: "football", image: "/images/stage-hero-4.jpg" },
    ],
    programs: [
      {
        title: "Middle School Program",
        subtitle: "Grades 6 through 8",
        features: [
          { icon: "users", title: "Class Size", body: "Up to 24 students per class." },
          { icon: "mortarboard", title: "Core Subjects", body: "ELA, Math, Science, Social Studies with honors tracks." },
          { icon: "paint", title: "Electives", body: "Art, Music, Drama, Technology, and World Languages." },
          { icon: "school", title: "Advisory Program", body: "Dedicated advisor for academic and personal guidance." },
        ],
      },
    ],
    handbooks: [
      { label: "Middle School Handbook", size: "108 KB" },
      { label: "Course Catalog", size: "124 KB" },
      { label: "Advisory Guide", size: "86 KB" },
      { label: "Parent Orientation", size: "94 KB" },
    ],
    policies: [
      { label: "Attendance Policy", size: "94 KB" },
      { label: "Behavior Policy", size: "94 KB" },
      { label: "Health & Safety Policy", size: "94 KB" },
      { label: "Anti-Bullying Policy", size: "94 KB" },
      { label: "Safeguarding Policy", size: "94 KB" },
      { label: "Assessment Policy", size: "94 KB" },
      { label: "Inclusion Policy", size: "94 KB" },
      { label: "Communication Policy", size: "94 KB" },
      { label: "Homework Policy", size: "94 KB" },
      { label: "Uniform Policy", size: "94 KB" },
      { label: "Digital Learning Policy", size: "94 KB" },
      { label: "Field Trip Policy", size: "94 KB" },
    ],
  },
  {
    slug: "high-school",
    title: "High School\n(G9-G12)",
    heroDescription:
      "Our High School program prepares students for university success through a rigorous American curriculum with Advanced Placement courses and comprehensive college counseling.",
    heroPhotos: [
      "/images/stage-hero-2.jpg",
      "/images/stage-hero-4.jpg",
      "/images/stage-hero-3.jpg",
      "/images/stage-hero-1.jpg",
    ],
    overviewImage: "/images/stage-overview.jpg",
    overviewText: [
      "High School at El Alsson culminates in the US High School Diploma with the option of Advanced Placement (AP) courses. Students are prepared for admission to top universities worldwide.",
      "Our college counseling program, AP course offerings, and extracurricular leadership opportunities ensure every graduate is ready for the next chapter of their academic journey.",
    ],
    facilitiesTitle: "Facilities & Enrichment",
    facilitiesLead:
      "High School students access advanced science labs, a media center, dedicated AP classrooms, and extensive athletic facilities.",
    facilitiesImage: "/images/stage-facilities.jpg",
    facilitiesFeatures: [
      { title: "AP Courses", body: "Over 15 AP subject offerings across sciences, humanities, and arts.", icon: "mortarboard-01", image: "/images/stage-facilities.jpg" },
      { title: "College Counseling", body: "Dedicated counselors guide university applications from Grade 9.", icon: "school", image: "/images/stage-overview.jpg" },
      { title: "Leadership", body: "Model United Nations, National Honor Society, and community service programs.", icon: "user-multiple", image: "/images/stage-hero-1.jpg" },
    ],
    programs: [
      {
        title: "High School Program",
        subtitle: "Grades 9 through 12",
        features: [
          { icon: "users", title: "Class Size", body: "Up to 24 students per class." },
          { icon: "mortarboard", title: "Diploma", body: "US High School Diploma with AP designation." },
          { icon: "paint", title: "AP Courses", body: "15+ AP subjects available across all disciplines." },
          { icon: "school", title: "College Prep", body: "SAT prep, university fairs, and application support." },
        ],
      },
    ],
    handbooks: [
      { label: "High School Handbook", size: "124 KB" },
      { label: "AP Course Guide", size: "118 KB" },
      { label: "College Prep Guide", size: "96 KB" },
      { label: "Parent Orientation", size: "94 KB" },
    ],
    policies: [
      { label: "Attendance Policy", size: "94 KB" },
      { label: "Behavior Policy", size: "94 KB" },
      { label: "Health & Safety Policy", size: "94 KB" },
      { label: "Anti-Bullying Policy", size: "94 KB" },
      { label: "Safeguarding Policy", size: "94 KB" },
      { label: "Assessment Policy", size: "94 KB" },
      { label: "Inclusion Policy", size: "94 KB" },
      { label: "Communication Policy", size: "94 KB" },
      { label: "Homework Policy", size: "94 KB" },
      { label: "Uniform Policy", size: "94 KB" },
      { label: "Digital Learning Policy", size: "94 KB" },
      { label: "Field Trip Policy", size: "94 KB" },
    ],
  },
];

export function getStageBySlug(slug: string): StageData | undefined {
  return STAGES.find((s) => s.slug === slug);
}

export function getOtherStages(currentSlug: string) {
  return STAGES.filter((s) => s.slug !== currentSlug);
}
