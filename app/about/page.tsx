import Image from "next/image";
import type { Metadata } from "next";
import styles from "../inner-page.module.css";

const values = [
  {
    title: "Straight language",
    description:
      "The community avoids polished confusion and keeps advice direct enough for students to use.",
  },
  {
    title: "Student pace",
    description:
      "Support is shaped around real student constraints: exams, college work, projects, and limited time.",
  },
  {
    title: "Action bias",
    description:
      "Every discussion should move toward a decision, a draft, a practice block, or a useful next step.",
  },
];

const highlights = [
  "Built for students who want honest direction, not motivational noise",
  "Designed around small decisions that compound into visible progress",
  "Organized enough to share publicly, flexible enough to stay community-led",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the purpose and principles behind The Unfiltered IITian student community.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>About</span>
          <h1>Built for students who want the unfiltered version of the next step.</h1>
          <p>
            The Unfiltered IITian exists to make student guidance clearer, more honest, and easier
            to act on.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/team-collab.jpg"
              alt="A collaborative group working together around laptops."
              fill
              className={styles.heroImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
            <div className={styles.heroImageNote}>
              <span className={styles.miniPill}>Community view</span>
              <p>The brand is simple: less performance, more useful direction.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>What shapes the community</h3>
            <ul>
              <li>Advice that sounds like a real person said it.</li>
              <li>Resources that point students toward action.</li>
              <li>Conversations that respect uncertainty without staying stuck.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Focus</span>
          <h2>The focus is clarity before scale.</h2>
          <p>
            The site keeps the outside structure clean while the community keeps the inside
            conversations alive.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value) => (
            <article className={styles.card} key={value.title}>
              <span className={styles.tag}>Core value</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Why Students Join</span>
          <h2>Students stay when the advice turns into movement.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.noteCard}>
            <span className={styles.miniPill}>Community highlights</span>
            <ul className={styles.list}>
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className={styles.infoCard}>
            <span className={styles.status}>TUI</span>
            <h3>The public site is the front door, not the whole community.</h3>
            <p>
              It gives visitors the map. The real energy comes from the students, hosts, and
              conversations that keep happening after they enter.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
