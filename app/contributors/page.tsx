import Image from "next/image";
import type { Metadata } from "next";
import { getContributors } from "../lib/contributors";
import { externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the roles that keep The Unfiltered IITian organized, responsive, and useful.",
};

export default function ContributorsPage() {
  const contributors = getContributors();

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
            Mentors bring different strengths into the community so students can find clearer
            guidance, sharper feedback, and practical next steps.
          </p>
        </div>

        <div className={styles.grid}>
          {contributors.map((contributor) => (
            <article className={styles.card} key={contributor.name}>
              {contributor.image ? (
                <div className={styles.contributorImageFrame}>
                  <Image
                    src={contributor.image}
                    alt={`${contributor.name} mentor photo`}
                    fill
                    className={styles.contributorImage}
                    sizes="(max-width: 1080px) 100vw, 40vw"
                  />
                </div>
              ) : null}

              <span className={styles.tag}>Mentor</span>
              <h3>{contributor.name}</h3>
              {contributor.email ? (
                <a className={styles.contributorEmail} href={`mailto:${contributor.email}`}>
                  {contributor.email}
                </a>
              ) : null}

              <div className={styles.contributorBlock}>
                <span className={styles.mediaListTitle}>Bio</span>
                <p>{contributor.bio}</p>
              </div>

              <div className={styles.contributorBlock}>
                <span className={styles.mediaListTitle}>Expertise</span>
                <p>{contributor.expertiseDescription}</p>
              </div>

              {contributor.linkedinUrl ? (
                <div className={styles.contributorActions}>
                  <a
                    className={styles.primaryLink}
                    href={contributor.linkedinUrl}
                    {...externalAnchorProps(contributor.linkedinUrl)}
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
