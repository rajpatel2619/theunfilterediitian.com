import Image from "next/image";
import type { Metadata } from "next";
import { getNextLiveSessions } from "../lib/next-live-sessions";
import { getPreviousEventVideos } from "../lib/youtube";
import { eventTypes, externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Track mentorship events, open discussion rooms, and resume review clinics from The Unfiltered IITian.",
};

export default async function EventsPage() {
  const nextLiveSessions = getNextLiveSessions();
  const previousEvents = await getPreviousEventVideos();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Events</span>
          <h1>Live rooms for questions that need a human answer.</h1>
          <p>
            Events are separate from course tracks. They are built for decisions, doubts, profile
            feedback, and conversations that work better live.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/team-collab.jpg"
              alt="A small team collaborating during a live working event."
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
            <h3>Event focus</h3>
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
          <span className={styles.eyebrow}>Next Live Sessions</span>
          <h2>Track next live sessions in one place.</h2>
          <p>
            Keep the upcoming mentorship details here, separate from course playlists and past recordings.
          </p>
        </div>

        <div className={styles.mediaGrid}>
          {nextLiveSessions.map((session) => (
            <article className={styles.playlistCard} key={session.title}>
              <a
                className={styles.mediaThumb}
                href={session.youtubeHref}
                aria-label={`Open ${session.title}`}
                {...externalAnchorProps(session.youtubeHref)}
              >
                <Image
                  src={session.thumbnail}
                  alt={`${session.title} session thumbnail`}
                  fill
                  className={styles.mediaImage}
                  sizes="(max-width: 1080px) 100vw, 38vw"
                />
              </a>

              <div className={styles.mediaBody}>
                <div className={styles.tagRow}>
                  <span className={styles.miniPill}>{session.tag}</span>
                  {session.status ? (
                    <span className={styles.status}>{session.status}</span>
                  ) : null}
                </div>
                <h3>{session.title}</h3>
                <p>{session.description}</p>
                <div className={styles.sessionSchedule}>
                  <div className={styles.sessionScheduleItem}>
                    <span>Date</span>
                    <strong>{session.date}</strong>
                  </div>
                  <div className={styles.sessionScheduleItem}>
                    <span>Time</span>
                    <strong>{session.time}</strong>
                  </div>
                </div>
                <div className={styles.sessionActions}>
                  <a
                    className={styles.primaryLink}
                    href={session.youtubeHref}
                    {...externalAnchorProps(session.youtubeHref)}
                  >
                    {session.youtubeLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Upcoming</span>
          <h2>Choose the room by the kind of answer you need.</h2>
          <p>
            Each event type can connect to a booking form, community announcement, calendar invite,
            or review request link.
          </p>
        </div>

        <div className={styles.timeline}>
          {eventTypes.map((event) => (
            <article className={styles.timelineCard} key={event.title}>
              <span className={styles.timelineTime}>{event.time}</span>
              <h3>{event.title}</h3>
              <p className={styles.timelineText}>{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Previous Events</span>
          <h2>Watch recent recordings before you join the next live room.</h2>
          <p>
            These recordings give students a quick way to catch up on mentorship and roadmap
            conversations.
          </p>
        </div>

        <div className={styles.mediaGrid}>
          {previousEvents.map((event) => (
            <article className={styles.playlistCard} key={event.title}>
              <a
                className={styles.mediaThumb}
                href={event.href}
                {...externalAnchorProps(event.href)}
              >
                <Image
                  src={event.thumbnail}
                  alt={`${event.title} event thumbnail`}
                  fill
                  className={styles.mediaImage}
                  sizes="(max-width: 1080px) 100vw, 38vw"
                />
              </a>

              <div className={styles.mediaBody}>
                <span className={styles.miniPill}>{event.tag}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <a
                  className={styles.secondaryLink}
                  href={event.href}
                  {...externalAnchorProps(event.href)}
                >
                  {event.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
