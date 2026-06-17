export interface CareerPosition {
  slug: string;
  title: string;
  school: string;
  type: string;
  posted: string;
  callout: {
    heading: string;
    body: string;
    steps: string[];
  };
  requirements: string[];
  skills: string[];
}

export const CAREERS: CareerPosition[] = [
  {
    slug: "accounting-teacher-british-2026",
    title: "Accounting Teacher — British School 2026/2027",
    school: "British School",
    type: "Full-time Permanent",
    posted: "Posted Apr 10, 2026",
    callout: {
      heading: "Interviews will take place on a rolling basis, following receipt of applications.",
      body: "Please email your CV",
      steps: [
        "Letter of application and a passport-sized photo to vacancies@alsson.com",
        "Please include the names of 2 referees, one of whom should be your current or most recent employer",
      ],
    },
    requirements: [
      "Qualified Teacher Status",
      "A proven track record of outstanding teaching",
      "Desirable: Experience as a Designated Safeguarding Lead (DSL) or Deputy DSL.",
      "A Teaching qualification that meets the requirements of your home-country (B.Ed, PGCE, GDE etc)",
      "Minimum 3 years post-qualification teaching experience in similar role and subject area.",
      "The willingness and ability to build positive relationships with students, staff and parents.",
    ],
    skills: [
      "Experience of modeled creative acting styles and techniques encompassing varied history genres and performance techniques.",
      "Experience of working with highly aspirational and able students is essential",
      "Excellent interpersonal skills with both adults and children.",
      "Willingness and ability to work as part of a team.",
      "Ability to communicate effectively both verbally and in writing.",
      "Ability to prioritize and organize your own work.",
      "Ability to work effectively to a high standard, on occasion, under pressure, meeting deadlines.",
      "Knowledge of Health and Safety & Safeguarding/Child Protection procedures and their application.",
      "Knowledge of computers and ability to use ICT tools for record-keeping and as an instructional tool.",
      "Ability to act as a secondary form tutor and offer enrichment and extracurricular activities.",
    ],
  },
  {
    slug: "math-teacher-american-2026",
    title: "Mathematics Teacher — American School 2026/2027",
    school: "American School",
    type: "Full-time Permanent",
    posted: "Posted Apr 8, 2026",
    callout: {
      heading: "Interviews will take place on a rolling basis, following receipt of applications.",
      body: "Please email your CV",
      steps: [
        "Letter of application and a passport-sized photo to vacancies@alsson.com",
        "Please include the names of 2 referees, one of whom should be your current or most recent employer",
      ],
    },
    requirements: [
      "Qualified Teacher Status",
      "A proven track record of outstanding teaching in Mathematics",
      "Desirable: Experience as a Designated Safeguarding Lead (DSL) or Deputy DSL.",
      "A Teaching qualification that meets the requirements of your home-country (B.Ed, PGCE, GDE etc)",
      "Minimum 3 years post-qualification teaching experience in similar role and subject area.",
      "The willingness and ability to build positive relationships with students, staff and parents.",
    ],
    skills: [
      "Deep subject knowledge of Mathematics curriculum across multiple grade levels.",
      "Experience of working with highly aspirational and able students is essential.",
      "Excellent interpersonal skills with both adults and children.",
      "Willingness and ability to work as part of a team.",
      "Ability to communicate effectively both verbally and in writing.",
      "Ability to prioritize and organize your own work.",
      "Ability to work effectively to a high standard, on occasion, under pressure, meeting deadlines.",
      "Knowledge of Health and Safety & Safeguarding/Child Protection procedures and their application.",
      "Knowledge of computers and ability to use ICT tools for record-keeping and as an instructional tool.",
      "Ability to act as a secondary form tutor and offer enrichment and extracurricular activities.",
    ],
  },
  {
    slug: "science-teacher-british-2026",
    title: "Science Teacher — British School 2026/2027",
    school: "British School",
    type: "Full-time Permanent",
    posted: "Posted Apr 5, 2026",
    callout: {
      heading: "Interviews will take place on a rolling basis, following receipt of applications.",
      body: "Please email your CV",
      steps: [
        "Letter of application and a passport-sized photo to vacancies@alsson.com",
        "Please include the names of 2 referees, one of whom should be your current or most recent employer",
      ],
    },
    requirements: [
      "Qualified Teacher Status",
      "A proven track record of outstanding teaching in the Sciences",
      "Desirable: Experience as a Designated Safeguarding Lead (DSL) or Deputy DSL.",
      "A Teaching qualification that meets the requirements of your home-country (B.Ed, PGCE, GDE etc)",
      "Minimum 3 years post-qualification teaching experience in similar role and subject area.",
      "The willingness and ability to build positive relationships with students, staff and parents.",
    ],
    skills: [
      "Specialist knowledge in Biology, Chemistry, or Physics at IGCSE and A-Level.",
      "Experience of working with highly aspirational and able students is essential.",
      "Excellent interpersonal skills with both adults and children.",
      "Willingness and ability to work as part of a team.",
      "Ability to communicate effectively both verbally and in writing.",
      "Ability to prioritize and organize your own work.",
      "Ability to work effectively to a high standard, on occasion, under pressure, meeting deadlines.",
      "Knowledge of Health and Safety & Safeguarding/Child Protection procedures and their application.",
      "Knowledge of computers and ability to use ICT tools for record-keeping and as an instructional tool.",
      "Ability to act as a secondary form tutor and offer enrichment and extracurricular activities.",
    ],
  },
  {
    slug: "english-teacher-american-2026",
    title: "English Language Arts Teacher — American School 2026/2027",
    school: "American School",
    type: "Full-time Permanent",
    posted: "Posted Apr 1, 2026",
    callout: {
      heading: "Interviews will take place on a rolling basis, following receipt of applications.",
      body: "Please email your CV",
      steps: [
        "Letter of application and a passport-sized photo to vacancies@alsson.com",
        "Please include the names of 2 referees, one of whom should be your current or most recent employer",
      ],
    },
    requirements: [
      "Qualified Teacher Status",
      "A proven track record of outstanding teaching in English Language Arts",
      "Desirable: Experience as a Designated Safeguarding Lead (DSL) or Deputy DSL.",
      "A Teaching qualification that meets the requirements of your home-country (B.Ed, PGCE, GDE etc)",
      "Minimum 3 years post-qualification teaching experience in similar role and subject area.",
      "The willingness and ability to build positive relationships with students, staff and parents.",
    ],
    skills: [
      "Strong command of English language, literature, and composition at all secondary levels.",
      "Experience of working with highly aspirational and able students is essential.",
      "Excellent interpersonal skills with both adults and children.",
      "Willingness and ability to work as part of a team.",
      "Ability to communicate effectively both verbally and in writing.",
      "Ability to prioritize and organize your own work.",
      "Ability to work effectively to a high standard, on occasion, under pressure, meeting deadlines.",
      "Knowledge of Health and Safety & Safeguarding/Child Protection procedures and their application.",
      "Knowledge of computers and ability to use ICT tools for record-keeping and as an instructional tool.",
      "Ability to act as a secondary form tutor and offer enrichment and extracurricular activities.",
    ],
  },
];
