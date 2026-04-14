import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPlaylistDetails,
  getPlaylistVideos,
  isEventPlaylistId,
} from "../../../lib/youtube";
import { externalAnchorProps } from "../../../site-config";
import styles from "../../../inner-page.module.css";

type PlaylistPageProps = {
  params: Promise<{
    playlistId: string;
  }>;
};

export async function generateMetadata({ params }: PlaylistPageProps): Promise<Metadata> {
  const { playlistId } = await params;

  if (isEventPlaylistId(playlistId)) {
    return {
      title: "Playlist",
      description: "Watch recorded course videos from The Unfiltered IITian.",
    };
  }

  const playlist = await getPlaylistDetails(playlistId);

  return {
    title: playlist?.title ?? "Playlist",
    description:
      playlist?.description ??
      "Watch recorded videos from The Unfiltered IITian YouTube playlists.",
  };
}

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { playlistId } = await params;

  if (isEventPlaylistId(playlistId)) {
    notFound();
  }

  const [playlist, videos] = await Promise.all([
    getPlaylistDetails(playlistId),
    getPlaylistVideos(playlistId),
  ]);

  if (!playlist) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Playlist</span>
          <h1>{playlist.title}</h1>
          <p>{playlist.description}</p>
          <div className={styles.linkRow}>
            <a
              className={styles.primaryLink}
              href={playlist.href}
              {...externalAnchorProps(playlist.href)}
            >
              Open playlist on YouTube
            </a>
            <Link className={styles.secondaryLink} href="/courses">
              Back to courses
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.playlistHeroImageFrame}>
            <Image
              src={playlist.thumbnail}
              alt={`${playlist.title} playlist thumbnail`}
              fill
              className={styles.containedImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
          </div>
          <div className={styles.playlistHeroMeta}>
            <span className={styles.miniPill}>{playlist.videoCount ?? "Recorded videos"}</span>
            <p>Choose any video below and continue watching on YouTube.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Videos</span>
          <h2>Watch the full playlist one video at a time.</h2>
          <p>
            Each button opens the selected video directly on YouTube.
          </p>
        </div>

        {videos.length ? (
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <article className={styles.videoCard} key={video.id}>
                <a
                  className={styles.videoThumb}
                  href={video.href}
                  {...externalAnchorProps(video.href)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={`${video.title} video thumbnail`}
                    fill
                    className={styles.containedImage}
                    sizes="(max-width: 760px) 100vw, 28vw"
                  />
                </a>

                <div className={styles.videoCardBody}>
                  <span className={styles.miniPill}>Video {index + 1}</span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <a
                    className={styles.videoWatchLink}
                    href={video.href}
                    {...externalAnchorProps(video.href)}
                  >
                    Watch now
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No videos loaded yet.</h3>
            <p>
              Videos will appear here once the YouTube feed is connected.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
