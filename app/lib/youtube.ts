import "server-only";

import {
  previousEvents,
  recordedPlaylists,
  eventPlaylists,
  type PlaylistLink,
  type VideoLink,
} from "../site-config";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_REVALIDATE_SECONDS = 21600;
const YOUTUBE_CHANNEL_HANDLE = "@theunfilterediitian";
const MAX_CHANNEL_PLAYLISTS = 200;
const MAX_PLAYLIST_VIDEOS = 200;
const eventPlaylistIds = new Set(eventPlaylists.map((playlist) => playlist.id));

export function isEventPlaylistId(playlistId: string) {
  return eventPlaylistIds.has(playlistId);
}

type YouTubeThumbnail = {
  url?: string;
};

type YouTubeSnippet = {
  title?: string;
  description?: string;
  thumbnails?: Record<string, YouTubeThumbnail | undefined>;
  resourceId?: {
    videoId?: string;
  };
};

type YouTubePlaylist = {
  id?: string;
  snippet?: YouTubeSnippet;
  contentDetails?: {
    itemCount?: number;
  };
};

type YouTubeChannel = {
  id?: string;
};

type YouTubePlaylistItem = {
  snippet?: YouTubeSnippet;
  contentDetails?: {
    videoId?: string;
  };
};

type YouTubeVideo = {
  id?: string;
  snippet?: YouTubeSnippet;
};

type YouTubeListResponse<T> = {
  nextPageToken?: string;
  items?: T[];
};

function getYouTubeApiKey() {
  return process.env.YOUTUBE_API_KEY;
}

async function fetchFromYouTube<T>(
  resource: "channels" | "playlists" | "playlistItems" | "videos",
  params: Record<string, string>,
) {
  const apiKey = getYouTubeApiKey();

  if (!apiKey) {
    return null;
  }

  const url = new URL(`${YOUTUBE_API_BASE}/${resource}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: YOUTUBE_REVALIDATE_SECONDS,
        tags: ["youtube"],
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function getThumbnail(snippet: YouTubeSnippet | undefined, fallback: string) {
  return (
    snippet?.thumbnails?.maxres?.url ??
    snippet?.thumbnails?.standard?.url ??
    snippet?.thumbnails?.high?.url ??
    snippet?.thumbnails?.medium?.url ??
    snippet?.thumbnails?.default?.url ??
    fallback
  );
}

function getDescription(snippet: YouTubeSnippet | undefined, fallback: string) {
  const description = snippet?.description?.replace(/\s+/g, " ").trim();

  if (!description) {
    return fallback;
  }

  return description.length > 170 ? `${description.slice(0, 167).trim()}...` : description;
}

function videoHref(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function playlistHref(playlistId: string) {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}

function mapPlaylistVideo(item: YouTubePlaylistItem): VideoLink | null {
  const videoId = item.contentDetails?.videoId ?? item.snippet?.resourceId?.videoId;
  const title = item.snippet?.title;

  if (!videoId || !title || title === "Deleted video" || title === "Private video") {
    return null;
  }

  return {
    title,
    tag: "Playlist video",
    description: getDescription(item.snippet, "A recorded problem-solving video from the playlist."),
    href: videoHref(videoId),
    label: "Watch video",
    thumbnail: getThumbnail(item.snippet, `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`),
    id: videoId,
  };
}

function mapPlaylist(playlist: YouTubePlaylist, fallback?: PlaylistLink): PlaylistLink | null {
  if (!playlist.id || !playlist.snippet?.title) {
    return fallback ?? null;
  }

  const itemCount = playlist.contentDetails?.itemCount;

  return {
    id: playlist.id,
    title: fallback?.title ?? playlist.snippet.title,
    tag: fallback?.tag ?? "YouTube playlist",
    description:
      fallback?.description ??
      getDescription(playlist.snippet, "A recorded course playlist from The Unfiltered IITian."),
    href: playlistHref(playlist.id),
    label: fallback?.label ?? "View playlist",
    thumbnail: getThumbnail(playlist.snippet, fallback?.thumbnail ?? ""),
    videoCount: itemCount ? `${itemCount} videos` : fallback?.videoCount,
    videos: fallback?.videos ?? [],
  };
}

async function getChannelId() {
  const channelResponse = await fetchFromYouTube<YouTubeListResponse<YouTubeChannel>>("channels", {
    part: "id",
    forHandle: YOUTUBE_CHANNEL_HANDLE,
  });

  return channelResponse?.items?.[0]?.id;
}

async function getFallbackPlaylists(fallbackPlaylists: PlaylistLink[]): Promise<PlaylistLink[]> {
  return Promise.all(
    fallbackPlaylists.map(async (fallback) => {
      const [playlistResponse, playlistItemsResponse] = await Promise.all([
        fetchFromYouTube<YouTubeListResponse<YouTubePlaylist>>("playlists", {
          part: "snippet,contentDetails",
          id: fallback.id,
        }),
        fetchFromYouTube<YouTubeListResponse<YouTubePlaylistItem>>("playlistItems", {
          part: "snippet,contentDetails",
          playlistId: fallback.id,
          maxResults: "4",
        }),
      ]);

      const playlist = playlistResponse?.items?.[0];
      const videos =
        playlistItemsResponse?.items?.map(mapPlaylistVideo).filter((item): item is VideoLink =>
          Boolean(item),
        ) ?? fallback.videos;

      return {
        ...(mapPlaylist(playlist ?? {}, fallback) ?? fallback),
        videos,
      };
    }),
  );
}

export async function getRecordedLecturePlaylists(): Promise<PlaylistLink[]> {
  const channelId = await getChannelId();

  if (!channelId) {
    return getFallbackPlaylists(recordedPlaylists);
  }

  const playlistItems: YouTubePlaylist[] = [];
  let pageToken: string | undefined;

  do {
    const playlistResponse = await fetchFromYouTube<YouTubeListResponse<YouTubePlaylist>>(
      "playlists",
      {
        part: "snippet,contentDetails",
        channelId,
        maxResults: "50",
        ...(pageToken ? { pageToken } : {}),
      },
    );

    if (!playlistResponse?.items?.length) {
      break;
    }

    playlistItems.push(...playlistResponse.items);
    pageToken = playlistResponse.nextPageToken;
  } while (pageToken && playlistItems.length < MAX_CHANNEL_PLAYLISTS);

  const playlists = playlistItems
    .filter((playlist) => playlist.id && !eventPlaylistIds.has(playlist.id))
    .map((playlist) => mapPlaylist(playlist))
    .filter((playlist): playlist is PlaylistLink => Boolean(playlist));

  return playlists?.length ? playlists : getFallbackPlaylists(recordedPlaylists);
}

export async function getEventPlaylists(): Promise<PlaylistLink[]> {
  return getFallbackPlaylists(eventPlaylists);
}

export async function getPlaylistDetails(playlistId: string): Promise<PlaylistLink | null> {
  const fallback = [...recordedPlaylists, ...eventPlaylists].find(
    (playlist) => playlist.id === playlistId,
  );
  const playlistResponse = await fetchFromYouTube<YouTubeListResponse<YouTubePlaylist>>(
    "playlists",
    {
      part: "snippet,contentDetails",
      id: playlistId,
    },
  );

  const playlist = mapPlaylist(playlistResponse?.items?.[0] ?? {}, fallback);

  if (playlist) {
    return playlist;
  }

  return fallback ?? null;
}

export async function getPlaylistVideos(playlistId: string): Promise<VideoLink[]> {
  const videos: VideoLink[] = [];
  let pageToken: string | undefined;

  do {
    const response = await fetchFromYouTube<YouTubeListResponse<YouTubePlaylistItem>>(
      "playlistItems",
      {
        part: "snippet,contentDetails",
        playlistId,
        maxResults: "50",
        ...(pageToken ? { pageToken } : {}),
      },
    );

    if (!response?.items?.length) {
      break;
    }

    response.items.forEach((item) => {
      const video = mapPlaylistVideo(item);

      if (video) {
        videos.push(video);
      }
    });

    pageToken = response.nextPageToken;
  } while (pageToken && videos.length < MAX_PLAYLIST_VIDEOS);

  if (videos.length) {
    return videos;
  }

  const fallback = [...recordedPlaylists, ...eventPlaylists].find(
    (playlist) => playlist.id === playlistId,
  );
  return fallback?.videos ?? [];
}

export async function getPreviousEventVideos(): Promise<VideoLink[]> {
  const videoIds = previousEvents.map((event) => event.id).join(",");
  const videoResponse = await fetchFromYouTube<YouTubeListResponse<YouTubeVideo>>("videos", {
    part: "snippet",
    id: videoIds,
  });

  if (!videoResponse?.items?.length) {
    return previousEvents;
  }

  const videosById = new Map(videoResponse.items.map((video) => [video.id, video]));

  return previousEvents.map((fallback) => {
    const video = videosById.get(fallback.id);

    if (!video?.snippet) {
      return fallback;
    }

    return {
      ...fallback,
      title: video.snippet.title ?? fallback.title,
      description: getDescription(video.snippet, fallback.description),
      thumbnail: getThumbnail(video.snippet, fallback.thumbnail),
    };
  });
}
