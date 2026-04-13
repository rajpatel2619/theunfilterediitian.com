import Image from "next/image";
import type { Metadata } from "next";
import { actionLinks, externalAnchorProps, sessionTypes } from "../site-config";
import styles from "../inner-page.module.css";

const sessionNotes = [
  "Join mentorship rooms when you need academic, career, or college direction.",
  "Request a resume review before internships, projects, placements, or profile pushes.",
  "Follow course sessions when new live topics open inside the community.",
];

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Track live courses, mentorship sessions, resume review clinics, and community support calls.",
};

export default function SessionsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Sessions</span>
          <h1>Live rooms for mentorship, resume reviews, and focused learning.</h1>
          <p>
            Use this page to follow the live rhythm of The Unfiltered IITian: course sessions,
            office hours, review clinics, and student-focused conversations.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/team-collab.jpg"
              alt="A small team collaborating during a live working session."
              fill
              className={styles.heroImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
            <div className={styles.heroImageNote}>
              <span className={styles.miniPill}>Live rooms</span>
              <p>Mentorship, review clinics, and workshops stay easy to find.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Session focus</h3>
            <ul>
              <li>Topic-based live learning and workshop discussions.</li>
              <li>Mentorship for planning, decisions, and career direction.</li>
              <li>Resume and profile reviews with practical feedback.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Upcoming</span>
          <h2>Follow the session type that matches what you need today.</h2>
          <p>
            Each session can link to a WhatsApp announcement, booking form, calendar invite, or
            resource thread once the next room is scheduled.
          </p>
        </div>

        <div className={styles.timeline}>
          {sessionTypes.map((session) => (
            <article className={styles.timelineCard} key={session.title}>
              <span className={styles.timelineTime}>{session.time}</span>
              <h3>{session.title}</h3>
              <p className={styles.timelineText}>{session.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Join Live</span>
          <h2>Use the right link for course updates, mentorship, or resume review.</h2>
        </div>

        <div className={styles.grid}>
          {sessionNotes.map((note) => (
            <article className={styles.noteCard} key={note}>
              <span className={styles.miniPill}>Quick tip</span>
              <p>{note}</p>
            </article>
          ))}
        </div>

        <div className={styles.linkRow}>
          <a
            className={styles.primaryLink}
            href={actionLinks.mentorshipBooking}
            {...externalAnchorProps(actionLinks.mentorshipBooking)}
          >
            Book mentorship
          </a>
          <a
            className={styles.secondaryLink}
            href={actionLinks.resumeReviewBooking}
            {...externalAnchorProps(actionLinks.resumeReviewBooking)}
          >
            Request resume review
          </a>
        </div>
      </section>
    </div>
  );
}
