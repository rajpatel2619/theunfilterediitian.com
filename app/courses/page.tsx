import Image from "next/image";
import type { Metadata } from "next";
import { courseTracks, externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore live courses, topic workshops, mentorship circles, and resume review clinics inside The Unfiltered IITian community.",
};

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Courses</span>
          <h1>Live courses and workshops for students who want practical progress.</h1>
          <p>
            The Unfiltered IITian runs live sessions across different topics, from skill building
            and study systems to mentorship, resume reviews, and career-ready profile work.
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
              <p>Find current topics, join course updates, and follow the next useful session.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>What you can join</h3>
            <ul>
              <li>Live topic courses and short workshops.</li>
              <li>Mentorship rooms for direction and planning.</li>
              <li>Resume review clinics for internships and placements.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>All Courses</span>
          <h2>Pick a track and follow the link that matches your next step.</h2>
          <p>
            Course cards can point to WhatsApp invites, interest forms, calendars, resources, or
            booking links depending on how each live cohort is running.
          </p>
        </div>

        <div className={styles.grid}>
          {courseTracks.map((course) => (
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

              <div className={styles.linkRow}>
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
    </div>
  );
}
