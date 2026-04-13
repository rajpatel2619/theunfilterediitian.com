import Image from "next/image";
import type { Metadata } from "next";
import styles from "../inner-page.module.css";

const values = [
  {
    title: "Practical guidance",
    description:
      "Students get direct answers, honest direction, and support that turns confusion into a next step.",
  },
  {
    title: "Live learning",
    description:
      "Courses, workshops, and live rooms give students a place to learn actively instead of only collecting links.",
  },
  {
    title: "Profile support",
    description:
      "Resume reviews, project framing, and profile feedback help students prepare for internships and career opportunities.",
  },
];

const highlights = [
  "Live courses and topic workshops inside an active WhatsApp community",
  "Mentorship sessions for planning, career direction, and honest student questions",
  "Resume reviews and profile feedback for internships, projects, and placements",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how The Unfiltered IITian supports students through live courses, mentorship, resume reviews, and community learning.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>About</span>
          <h1>A WhatsApp-first learning community for students who want practical direction.</h1>
          <p>
            The Unfiltered IITian brings live topic courses, mentorship sessions, resume reviews,
            and student-focused resources into one community built around action.
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
              <p>Live learning and honest guidance stay close to the students who need them.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>What the community helps with</h3>
            <ul>
              <li>Joining live courses and useful topic sessions.</li>
              <li>Getting mentorship for study, college, and career decisions.</li>
              <li>Improving resumes, projects, and profile presentation.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Focus</span>
          <h2>Focused support across learning, decisions, and career readiness.</h2>
          <p>
            The community is for students who want structure, useful sessions, and real feedback
            without losing momentum in scattered messages.
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
          <h2>Students join when they want clarity, accountability, and practical feedback.</h2>
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
            <h3>The Unfiltered IITian keeps learning and guidance connected.</h3>
            <p>
              Course updates, mentorship rooms, resume review slots, and community links stay close
              together so students can act when the opportunity is open.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
