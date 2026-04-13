const defaultLinks = {
  website: "https://theunfilterediitian.com/",
  whatsappCommunity: "https://chat.whatsapp.com/LwVTLSs0I4A4byXPtVKsMy?mode=gi_t",
  softwareDevelopment: "https://chat.whatsapp.com/EJafT2L3MlD8kIsqNeb9Q5?mode=gi_t",
  dataStructuresAlgorithms: "https://chat.whatsapp.com/JxRojeBCwNYF9hvIdz4tgl?mode=gi_t",
  modernAi: "https://chat.whatsapp.com/KIzq5s5Kd6hAaOrGYZjEXQ?mode=gi_t",
  instagram: "https://www.instagram.com/the_unfiltered_iitian/",
  youtube: "https://www.youtube.com/@theunfilterediitian",
  linkedin: "https://in.linkedin.com/in/theunfilterediitian",
  leetcodePlaylist: "https://www.youtube.com/playlist?list=PLvUq-YEK35km4EJyyLyNHHUK7dqayf_kO",
  mentorshipLive:
    "https://www.youtube.com/watch?v=wt2LwpHYC6k&list=PLvUq-YEK35klGgbeYLLpNvaBynjfsdznf&index=1",
  sweRoadmap:
    "https://www.youtube.com/watch?v=gK38GGahO1U&list=PLvUq-YEK35klGgbeYLLpNvaBynjfsdznf&index=2",
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
  mentorshipBooking: process.env.NEXT_PUBLIC_MENTORSHIP_URL ?? defaultLinks.whatsappCommunity,
  resumeReviewBooking: process.env.NEXT_PUBLIC_RESUME_REVIEW_URL ?? defaultLinks.whatsappCommunity,
  resourcesVault: process.env.NEXT_PUBLIC_RESOURCES_URL ?? "/courses",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? defaultLinks.instagram,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? defaultLinks.youtube,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? defaultLinks.linkedin,
  leetcodePlaylist:
    process.env.NEXT_PUBLIC_LEETCODE_PLAYLIST_URL ?? defaultLinks.leetcodePlaylist,
  mentorshipLive: defaultLinks.mentorshipLive,
  sweRoadmap: defaultLinks.sweRoadmap,
};

export type IconName =
  | "home"
  | "about"
  | "courses"
  | "sessions"
  | "contributors"
  | "website"
  | "whatsapp"
  | "instagram"
  | "youtube"
  | "linkedin";

export const navigationLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/courses", label: "Courses", icon: "courses" },
  { href: "/sessions", label: "Sessions", icon: "sessions" },
  { href: "/contributors", label: "Contributors", icon: "contributors" },
] satisfies Array<{ href: string; label: string; icon: IconName }>;

export const footerBottomLinks = [
  { href: "/courses", label: "Explore courses", icon: "courses" },
  { href: "/sessions", label: "View sessions", icon: "sessions" },
  { href: actionLinks.whatsappCommunity, label: "Join community", icon: "whatsapp" },
] satisfies Array<{ href: string; label: string; icon: IconName }>;

export const socialLinks = [
  { href: actionLinks.website, label: "Website", icon: "website" },
  { href: actionLinks.whatsappCommunity, label: "WhatsApp", icon: "whatsapp" },
  { href: actionLinks.instagram, label: "Instagram", icon: "instagram" },
  { href: actionLinks.youtube, label: "YouTube", icon: "youtube" },
  { href: actionLinks.linkedin, label: "LinkedIn", icon: "linkedin" },
] satisfies Array<{ href: string; label: string; icon: IconName }>;

export const footerQuickLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/courses", label: "Courses", icon: "courses" },
  { href: "/sessions", label: "Sessions", icon: "sessions" },
  { href: "/contributors", label: "Contributors", icon: "contributors" },
] satisfies Array<{ href: string; label: string; icon: IconName }>;

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
    secondaryLabel: "Join community",
    secondaryHref: actionLinks.whatsappCommunity,
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
    secondaryLabel: "Join community",
    secondaryHref: actionLinks.whatsappCommunity,
  },
];

export const recordedPlaylists = [
  {
    title: "Leetcode Daily Problems",
    tag: "Recorded playlist",
    description:
      "A YouTube playlist for students who want steady problem-solving practice beyond live batches.",
    href: actionLinks.leetcodePlaylist,
    label: "Watch playlist",
    thumbnail: "https://i.ytimg.com/vi/m_fwT0EZPYA/hqdefault.jpg",
  },
] satisfies Array<{
  title: string;
  tag: string;
  description: string;
  href: string;
  label: string;
  thumbnail: string;
}>;

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

export const previousSessions = [
  {
    title: "Real Talk, Tech & Career Advice: Weekly Mentorship LIVE with Raj Patel",
    tag: "Mentorship live",
    description:
      "A recorded mentorship conversation for students looking for practical tech and career direction.",
    href: actionLinks.mentorshipLive,
    label: "Watch session",
    thumbnail: "https://i.ytimg.com/vi/wt2LwpHYC6k/hqdefault.jpg",
  },
  {
    title: "From IIT to Industry | Real SWE Roadmap for Engineering Students",
    tag: "SWE roadmap",
    description:
      "A previous session focused on moving from engineering college learning into industry-ready software work.",
    href: actionLinks.sweRoadmap,
    label: "Watch session",
    thumbnail: "https://i.ytimg.com/vi/gK38GGahO1U/hqdefault.jpg",
  },
] satisfies Array<{
  title: string;
  tag: string;
  description: string;
  href: string;
  label: string;
  thumbnail: string;
}>;

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
