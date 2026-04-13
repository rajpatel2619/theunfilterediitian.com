import Image from "next/image";
import type { Metadata } from "next";
import { contributorRoles } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the roles that keep The Unfiltered IITian organized, responsive, and useful.",
};

export default function ContributorsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Contributors</span>
          <h1>The roles behind the work that keep the community steady.</h1>
          <p>
            This page explains who keeps the system moving: direction, hosting, review, and support.
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
              <p>Clear roles make it easier for students to know who does what.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Who contributes</h3>
            <ul>
              <li>People who shape the calendar.</li>
              <li>People who run rooms and resources.</li>
              <li>People who handle review and access support.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Team</span>
          <h2>The community works better when responsibilities are visible.</h2>
          <p>
            Replace these role cards with real names whenever you want the site to show individual
            contributors.
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
