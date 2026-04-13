import Image from "next/image";
import type { Metadata } from "next";
import { contributorRoles } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the mentors, course hosts, reviewers, and support roles behind The Unfiltered IITian community.",
};

export default function ContributorsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Contributors</span>
          <h1>The mentors, hosts, and reviewers who keep the community useful.</h1>
          <p>
            The Unfiltered IITian runs on people who teach live, answer student questions, review
            profiles, and keep the community moving toward practical outcomes.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/community-hero.jpg"
              alt="A student working on a laptop, representing the learner community."
              fill
              className={styles.heroImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
            <div className={styles.heroImageNote}>
              <span className={styles.miniPill}>People behind it</span>
              <p>Live courses and mentorship work best when the right people are visible.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Who contributes</h3>
            <ul>
              <li>Mentors who guide decisions and career direction.</li>
              <li>Course hosts who run live topic sessions.</li>
              <li>Reviewers who improve resumes and profiles.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Team</span>
          <h2>Every strong student community needs clear roles behind the work.</h2>
          <p>
            These roles help students know where guidance, courses, reviews, and onboarding support
            come from inside The Unfiltered IITian.
          </p>
        </div>

        <div className={styles.grid}>
          {contributorRoles.map((contributor) => (
            <article className={styles.card} key={contributor.name}>
              <span className={styles.tag}>Contributor</span>
              <h3>{contributor.name}</h3>
              <span className={styles.miniPill}>{contributor.role}</span>
              <p>{contributor.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
