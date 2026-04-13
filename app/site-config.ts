export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@theunfilterediitian.com";

const defaultLinks = {
  website: "https://theunfilterediitian.com/",
  whatsappCommunity: "https://chat.whatsapp.com/LwVTLSs0I4A4byXPtVKsMy?mode=gi_t",
  softwareDevelopment: "https://chat.whatsapp.com/EJafT2L3MlD8kIsqNeb9Q5?mode=gi_t",
  dataStructuresAlgorithms: "https://chat.whatsapp.com/JxRojeBCwNYF9hvIdz4tgl?mode=gi_t",
  modernAi: "https://chat.whatsapp.com/KIzq5s5Kd6hAaOrGYZjEXQ?mode=gi_t",
  instagram: "https://www.instagram.com/the_unfiltered_iitian/",
  youtube: "https://www.youtube.com/@theunfilterediitian",
  linkedin: "https://in.linkedin.com/in/theunfilterediitian",
};

export const actionLinks = {
  website: process.env.NEXT_PUBLIC_WEBSITE_URL ?? defaultLinks.website,
  whatsappCommunity: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL ?? defaultLinks.whatsappCommunity,
  softwareDevelopment:
    process.env.NEXT_PUBLIC_SOFTWARE_DEVELOPMENT_URL ?? defaultLinks.softwareDevelopment,
  dataStructuresAlgorithms:
    process.env.NEXT_PUBLIC_DSA_URL ?? defaultLinks.dataStructuresAlgorithms,
  modernAi: process.env.NEXT_PUBLIC_MODERN_AI_URL ?? defaultLinks.modernAi,
  liveCourseUpdates: process.env.NEXT_PUBLIC_LIVE_COURSES_URL ?? defaultLinks.whatsappCommunity,
  mentorshipBooking: process.env.NEXT_PUBLIC_MENTORSHIP_URL ?? "/sessions",
  resumeReviewBooking: process.env.NEXT_PUBLIC_RESUME_REVIEW_URL ?? "/contact",
  resourcesVault: process.env.NEXT_PUBLIC_RESOURCES_URL ?? "/courses",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? defaultLinks.instagram,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? defaultLinks.youtube,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? defaultLinks.linkedin,
  email: `mailto:${contactEmail}`,
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/sessions", label: "Sessions" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  { href: actionLinks.website, label: "Website" },
  { href: actionLinks.whatsappCommunity, label: "WhatsApp" },
  { href: actionLinks.instagram, label: "Instagram" },
  { href: actionLinks.youtube, label: "YouTube" },
  { href: actionLinks.linkedin, label: "LinkedIn" },
];

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/sessions", label: "Sessions" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

export const courseTracks = [
  {
    title: "Software Development",
    tag: "Live course",
    status: "Open intake",
    audience: "Students who want to build real software projects",
    description:
      "A practical track for learning how software is planned, built, shipped, and improved through real development habits.",
    highlights: ["Project structure", "Frontend and backend basics", "Build-to-ship thinking"],
    primaryLabel: "Join Software Development",
    primaryHref: actionLinks.softwareDevelopment,
    secondaryLabel: "Contact for details",
    secondaryHref: "/contact",
  },
  {
    title: "Data Structures and Algorithms",
    tag: "Problem solving",
    status: "Open intake",
    audience: "Students preparing for interviews and stronger coding fundamentals",
    description:
      "A structured room for sharpening patterns, implementation discipline, and the problem-solving rhythm needed for technical rounds.",
    highlights: ["Core data structures", "Pattern practice", "Interview-style thinking"],
    primaryLabel: "Join DSA",
    primaryHref: actionLinks.dataStructuresAlgorithms,
    secondaryLabel: "See live rooms",
    secondaryHref: "/sessions",
  },
  {
    title: "Modern AI - ML, DL and LLMs",
    tag: "AI track",
    status: "Open intake",
    audience: "Students who want a modern path into applied AI",
    description:
      "A guided track for understanding machine learning, deep learning, and LLMs with a practical view of how modern AI is used.",
    highlights: ["ML foundations", "Deep learning concepts", "LLM workflows"],
    primaryLabel: "Join Modern AI",
    primaryHref: actionLinks.modernAi,
    secondaryLabel: "Ask a question",
    secondaryHref: "/contact",
  },
];

export const quickActions = [
  {
    title: "Community Entry",
    description:
      "Use the WhatsApp community as the main place for fresh announcements and student conversations.",
    href: actionLinks.whatsappCommunity,
    label: "Join community",
  },
  {
    title: "Software Development",
    description:
      "Open the dedicated WhatsApp group for the Software Development course.",
    href: actionLinks.softwareDevelopment,
    label: "Join course",
  },
  {
    title: "DSA",
    description:
      "Open the dedicated WhatsApp group for Data Structures and Algorithms.",
    href: actionLinks.dataStructuresAlgorithms,
    label: "Join DSA",
  },
  {
    title: "Modern AI",
    description:
      "Open the dedicated WhatsApp group for ML, DL, and LLM learning.",
    href: actionLinks.modernAi,
    label: "Join AI track",
  },
];

export const sessionTypes = [
  {
    time: "Live",
    title: "Open Discussion Rooms",
    description:
      "Short community rooms for student questions that do not need a full course batch.",
  },
  {
    time: "Weekly",
    title: "Mentorship Office Hours",
    description:
      "Open mentorship rooms for planning, next-step decisions, college choices, internships, and personal strategy.",
  },
  {
    time: "Review",
    title: "Resume Review Clinics",
    description:
      "Structured feedback on resumes, profile positioning, projects, achievements, and recruiter-facing clarity.",
  },
];

export const contributorRoles = [
  {
    name: "Lead Mentor",
    role: "Community direction and live mentorship",
    description:
      "Shapes the session calendar, guides learners through career and academic decisions, and keeps the community focused on useful outcomes.",
  },
  {
    name: "Course Host",
    role: "Cohorts and workshops",
    description:
      "Runs live topic sessions, coordinates materials, and helps students move from passive notes to active practice.",
  },
  {
    name: "Resume Reviewer",
    role: "Profile and career feedback",
    description:
      "Reviews resumes, project descriptions, LinkedIn profiles, and internship-facing narratives with direct practical feedback.",
  },
  {
    name: "Community Support",
    role: "Onboarding, links, and student help",
    description:
      "Keeps joining links, resource access, session reminders, and student questions moving smoothly inside the community.",
  },
];

export function externalAnchorProps(href: string) {
  if (!href.startsWith("http")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
