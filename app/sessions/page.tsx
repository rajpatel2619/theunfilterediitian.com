import Image from "next/image";
import type { Metadata } from "next";
import { actionLinks, externalAnchorProps, sessionTypes } from "../site-config";
import styles from "../inner-page.module.css";

const sessionNotes = [
  "Bring one clear question so the live room can move faster.",
  "Use review clinics when you want feedback on a specific document or profile.",
  "Check the latest announcement before joining because slots can change by week.",
];

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Track mentorship office hours, open discussion rooms, and resume review clinics from The Unfiltered IITian.",
};

export default function SessionsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Sessions</span>
          <h1>Live rooms for questions that need a human answer.</h1>
          <p>
            Sessions are separate from course tracks. They are built for decisions, doubts, profile
            feedback, and conversations that work better live.
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
              <p>Pick the room format before you open the booking or community link.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Session focus</h3>
            <ul>
              <li>Planning and decision support.</li>
              <li>Resume, project, and profile review formats.</li>
              <li>Open Q and A for questions that do not fit a course.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Upcoming</span>
          <h2>Choose the room by the kind of answer you need.</h2>
          <p>
            Each session type can connect to a booking form, community announcement, calendar invite,
            or review request link.
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
          <span className={styles.eyebrow}>Before Joining</span>
          <h2>Come prepared so the live time stays useful.</h2>
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
