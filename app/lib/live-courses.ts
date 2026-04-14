import liveCourseData from "../data/live-courses.json";
import { actionLinks } from "../site-config";

type CourseLinkKey =
  | "softwareDevelopment"
  | "dataStructuresAlgorithms"
  | "modernAi"
  | "whatsappCommunity";

type LiveCourseData = {
  title: string;
  tag: string;
  status: string;
  audience: string;
  description: string;
  highlights: string[];
  primaryLabel: string;
  linkKey: CourseLinkKey;
  secondaryLabel: string;
  secondaryHref?: string;
  secondaryLinkKey?: CourseLinkKey;
};

export type LiveCourse = Omit<
  LiveCourseData,
  "linkKey" | "secondaryHref" | "secondaryLinkKey"
> & {
  primaryHref: string;
  secondaryHref: string;
};

function resolveCourseLink(linkKey: CourseLinkKey) {
  return actionLinks[linkKey];
}

export function getLiveCourses(): LiveCourse[] {
  return (liveCourseData as LiveCourseData[]).map((course) => ({
    title: course.title,
    tag: course.tag,
    status: course.status,
    audience: course.audience,
    description: course.description,
    highlights: course.highlights,
    primaryLabel: course.primaryLabel,
    primaryHref: resolveCourseLink(course.linkKey),
    secondaryLabel: course.secondaryLabel,
    secondaryHref: course.secondaryHref
      ?? resolveCourseLink(course.secondaryLinkKey ?? "whatsappCommunity"),
  }));
}
