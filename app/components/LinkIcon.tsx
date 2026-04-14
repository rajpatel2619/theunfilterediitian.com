import type { ReactNode } from "react";
import type { IconName } from "../site-config";

const icons: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  courses: (
    <>
      <path d="M5 5.5h9.5A3.5 3.5 0 0 1 18 9v10H8.5A3.5 3.5 0 0 0 5 15.5z" />
      <path d="M5 5.5v12A3.5 3.5 0 0 1 8.5 14H18" />
      <path d="M9 8h5" />
    </>
  ),
  events: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M4 9h16" />
      <path d="M11 13.5h4M11 16.5h2.5" />
    </>
  ),
  contributors: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M3.8 19a5.2 5.2 0 0 1 10.4 0" />
      <path d="M14.2 16.2A4.5 4.5 0 0 1 20.5 19" />
    </>
  ),
  jobs: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M4 12h16M10 12v2h4v-2" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5a13 13 0 0 1 0 17M12 3.5a13 13 0 0 0 0 17" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M6.4 18.2 4.7 21l3.2-.9A8.5 8.5 0 1 0 3.5 12a8.4 8.4 0 0 0 2.9 6.2z" />
      <path d="M9.3 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.4-.1.6l-.4.5c-.1.1-.2.3-.1.5.5 1 1.4 1.9 2.5 2.5.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.6 0 .6-.4 1.4-.9 1.6-.7.3-2.7-.2-4.4-1.7-1.8-1.5-3-3.7-2.8-5.1.1-.4.4-.7.6-.8z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r=".6" />
    </>
  ),
  youtube: (
    <>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path d="m10.5 9.5 5 2.5-5 2.5z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10.5V17M8 7.5v.1M11.5 17v-6.5M11.5 13.5a3 3 0 0 1 6 0V17" />
    </>
  ),
};

export default function LinkIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
