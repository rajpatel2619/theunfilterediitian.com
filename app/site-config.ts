export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@theunfilterediitian.com";

export const actionLinks = {
  whatsappCommunity: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL ?? "/contact",
  liveCourseUpdates: process.env.NEXT_PUBLIC_LIVE_COURSES_URL ?? "/courses",
  mentorshipBooking: process.env.NEXT_PUBLIC_MENTORSHIP_URL ?? "/sessions",
  resumeReviewBooking: process.env.NEXT_PUBLIC_RESUME_REVIEW_URL ?? "/contact",
  resourcesVault: process.env.NEXT_PUBLIC_RESOURCES_URL ?? "/courses",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "/contact",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "/sessions",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "/contributors",
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
    title: "Live Topic Courses",
    tag: "Live cohorts",
    status: "Open intake",
    audience: "Students who want focused topic-by-topic learning",
    description:
      "Join live batches around specific topics, with clear study flow, practical examples, and space to ask doubts while the session is fresh.",
    highlights: ["Topic-based live classes", "Doubt support", "Shared notes and replay links"],
    primaryLabel: "Get course updates",
    primaryHref: actionLinks.liveCourseUpdates,
    secondaryLabel: "View resources",
    secondaryHref: actionLinks.resourcesVault,
  },
  {
    title: "Mentorship Circles",
    tag: "Guided sessions",
    status: "Weekly",
    audience: "Aspirants and college students looking for direction",
    description:
      "Live mentorship sessions for planning, career clarity, college choices, internships, and the next practical step in your journey.",
    highlights: ["Planning help", "Career direction", "Live Q and A"],
    primaryLabel: "Book mentorship",
    primaryHref: actionLinks.mentorshipBooking,
    secondaryLabel: "See sessions",
    secondaryHref: "/sessions",
  },
  {
    title: "Resume Review Clinics",
    tag: "Profile support",
    status: "Active",
    audience: "Students preparing for internships, projects, and placements",
    description:
      "Bring your resume for direct feedback on structure, project framing, achievements, keywords, and how your profile reads to reviewers.",
    highlights: ["Resume feedback", "Project positioning", "LinkedIn and profile guidance"],
    primaryLabel: "Request review",
    primaryHref: actionLinks.resumeReviewBooking,
    secondaryLabel: "Contact team",
    secondaryHref: "/contact",
  },
  {
    title: "Skill and Career Workshops",
    tag: "Practical learning",
    status: "Rolling",
    audience: "Learners who want hands-on sessions beyond exams",
    description:
      "Short live workshops around useful skills, projects, study systems, interview basics, and the decisions students face after joining college.",
    highlights: ["Hands-on topics", "Project ideas", "Career readiness"],
    primaryLabel: "Join workshop list",
    primaryHref: actionLinks.liveCourseUpdates,
    secondaryLabel: "Ask a question",
    secondaryHref: actionLinks.mentorshipBooking,
  },
];

export const quickActions = [
  {
    title: "WhatsApp Community",
    description:
      "Join The Unfiltered IITian community for live course alerts, session updates, resources, and student discussions.",
    href: actionLinks.whatsappCommunity,
    label: "Join community",
  },
  {
    title: "Live Course Updates",
    description:
      "Get notified when a new topic-based course, workshop, or live learning batch opens.",
    href: actionLinks.liveCourseUpdates,
    label: "Get updates",
  },
  {
    title: "Mentorship Sessions",
    description:
      "Use live mentorship rooms for planning, career direction, college guidance, and honest answers.",
    href: actionLinks.mentorshipBooking,
    label: "Book mentorship",
  },
  {
    title: "Resume Reviews",
    description:
      "Send your resume for practical feedback before internships, projects, placements, or profile building.",
    href: actionLinks.resumeReviewBooking,
    label: "Request review",
  },
];

export const sessionTypes = [
  {
    time: "Live",
    title: "Topic Course Sessions",
    description:
      "Focused live classes around current course topics, study systems, projects, and practical student problems.",
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
    role: "Live courses and topic workshops",
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
