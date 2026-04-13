import Image from "next/image";
import type { Metadata } from "next";
import { courseTracks, externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Join The Unfiltered IITian courses for Software Development, Data Structures and Algorithms, and Modern AI.",
};

export default function CoursesPage() {
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
          <span className={styles.eyebrow}>All Courses</span>
          <h2>Open the group for the course you want to follow.</h2>
          <p>
            These buttons go directly to the dedicated WhatsApp groups you shared.
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
