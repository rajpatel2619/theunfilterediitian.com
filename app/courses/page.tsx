import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getLiveCourses } from "../lib/live-courses";
import { getRecordedLecturePlaylists } from "../lib/youtube";
import { externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Join The Unfiltered IITian courses and recorded lecture playlists for Software Development, DSA, Modern AI, and problem solving.",
};

export default async function CoursesPage() {
  const liveCourses = getLiveCourses();
  const playlists = await getRecordedLecturePlaylists();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Courses</span>
          <h1>Three focused course groups for builders and problem solvers.</h1>
          <p>
            Join the course group that matches your current goal: software development, DSA, or
            modern AI.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/workspace-tools.jpg"
              alt="A clean workspace with laptop, phone, and notebook."
              fill
              className={styles.heroImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
            <div className={styles.heroImageNote}>
              <span className={styles.miniPill}>Live learning</span>
              <p>Each course has its own WhatsApp group so updates stay focused.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Course groups</h3>
            <ul>
              <li>Software Development for project-building skills.</li>
              <li>Data Structures and Algorithms for coding fundamentals.</li>
              <li>Modern AI for ML, DL, and LLM concepts.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Live Courses</span>
          <h2>Open the live course group for the topic you want to follow.</h2>
          <p>
            These live courses use dedicated WhatsApp groups for announcements, links, and cohort
            updates.
          </p>
        </div>

        <div className={styles.grid}>
          {liveCourses.map((course) => (
            <article className={styles.card} key={course.title}>
              <div className={styles.tagRow}>
                <span className={styles.tag}>{course.tag}</span>
                <span className={styles.status}>{course.status}</span>
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <ul className={styles.list}>
                {course.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.liveCourseActions}>
                <a
                  className={styles.primaryLink}
                  href={course.primaryHref}
                  {...externalAnchorProps(course.primaryHref)}
                >
                  {course.primaryLabel}
                </a>
                <a
                  className={styles.secondaryLink}
                  href={course.secondaryHref}
                  {...externalAnchorProps(course.secondaryHref)}
                >
                  {course.secondaryLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Other Courses</span>
          <h2>Browse recorded playlists from The Unfiltered IITian YouTube channel.</h2>
          <p>
            Each playlist opens into a detail page with the videos and direct YouTube watch links.
          </p>
        </div>

        <div className={styles.mediaGrid}>
          {playlists.map((playlist) => (
            <article className={styles.playlistCard} key={playlist.title}>
              <Link
                className={styles.mediaThumb}
                href={`/courses/playlists/${playlist.id}`}
              >
                <Image
                  src={playlist.thumbnail}
                  alt={`${playlist.title} playlist thumbnail`}
                  fill
                  className={styles.mediaImage}
                  sizes="(max-width: 1080px) 100vw, 38vw"
                />
              </Link>

              <div className={styles.mediaBody}>
                <div className={styles.tagRow}>
                  <span className={styles.miniPill}>{playlist.tag}</span>
                  {playlist.videoCount ? (
                    <span className={styles.status}>{playlist.videoCount}</span>
                  ) : null}
                </div>
                <h3>{playlist.title}</h3>
                <p>{playlist.description}</p>
                <div className={styles.playlistActions}>
                  <Link
                    className={styles.playlistPrimaryAction}
                    href={`/courses/playlists/${playlist.id}`}
                  >
                    View playlist
                  </Link>
                  <a
                    className={styles.playlistYoutubeAction}
                    href={playlist.href}
                    aria-label={`Open ${playlist.title} on YouTube`}
                    title="Open on YouTube"
                    {...externalAnchorProps(playlist.href)}
                  >
                    <svg
                      className={styles.youtubeActionIcon}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
                      <path d="m10.5 9.5 5 2.5-5 2.5z" />
                      <path d="M17 5h2v2M19 5l-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
