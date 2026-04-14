import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getEventPlaylists, getPreviousEventVideos } from "../lib/youtube";
import {
  actionLinks,
  eventTypes,
  externalAnchorProps,
} from "../site-config";
import styles from "../inner-page.module.css";

const eventNotes = [
  "Bring one clear question so the live room can move faster.",
  "Use review clinics when you want feedback on a specific document or profile.",
  "Check the latest announcement before joining because slots can change by week.",
];

export const metadata: Metadata = {
  title: "Events",
  description:
    "Track mentorship events, open discussion rooms, and resume review clinics from The Unfiltered IITian.",
};

export default async function EventsPage() {
  const [eventPlaylists, previousEvents] = await Promise.all([
    getEventPlaylists(),
    getPreviousEventVideos(),
  ]);

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
          <span className={styles.eyebrow}>Live Playlists</span>
          <h2>Watch live event playlists in one place.</h2>
          <p>
            Mentorship and live discussion recordings stay here, separate from course playlists.
          </p>
        </div>

        <div className={styles.mediaGrid}>
          {eventPlaylists.map((playlist) => (
            <article className={styles.playlistCard} key={playlist.id}>
              <Link
                className={styles.mediaThumb}
                href={`/events/playlists/${playlist.id}`}
              >
                <Image
                  src={playlist.thumbnail}
                  alt={`${playlist.title} playlist thumbnail`}
                  fill
                  className={styles.mediaImage}
                  sizes="(max-width: 1080px) 100vw, 38vw"
                />
              </Link>

              <div className={styles.mediaBody}>
                <div className={styles.tagRow}>
                  <span className={styles.miniPill}>{playlist.tag}</span>
                  {playlist.videoCount ? (
                    <span className={styles.status}>{playlist.videoCount}</span>
                  ) : null}
                </div>
                <h3>{playlist.title}</h3>
                <p>{playlist.description}</p>
                <div className={styles.playlistActions}>
                  <Link
                    className={styles.playlistPrimaryAction}
                    href={`/events/playlists/${playlist.id}`}
                  >
                    View playlist
                  </Link>
                  <a
                    className={styles.playlistYoutubeAction}
                    href={playlist.href}
                    aria-label={`Open ${playlist.title} on YouTube`}
                    title="Open on YouTube"
                    {...externalAnchorProps(playlist.href)}
                  >
                    <svg
                      className={styles.youtubeActionIcon}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
                      <path d="m10.5 9.5 5 2.5-5 2.5z" />
                      <path d="M17 5h2v2M19 5l-4 4" />
                    </svg>
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
            <article className={styles.mediaCard} key={event.title}>
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

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Before Joining</span>
          <h2>Come prepared so the live time stays useful.</h2>
        </div>

        <div className={styles.grid}>
          {eventNotes.map((note) => (
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
            Join community for upcoming events
          </a>
          <a
            className={styles.secondaryLink}
            href={actionLinks.resumeReviewBooking}
            {...externalAnchorProps(actionLinks.resumeReviewBooking)}
          >
            Join community for review clinics
          </a>
        </div>
      </section>
    </div>
  );
}
