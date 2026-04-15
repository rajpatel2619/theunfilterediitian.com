import nextLiveSessionData from "../data/next-live-sessions.json";

export type NextLiveSession = {
  id?: string;
  title: string;
  tag: string;
  status?: string;
  description: string;
  date: string;
  time: string;
  thumbnail: string;
  youtubeLabel: string;
  youtubeHref: string;
};

export function getNextLiveSessions(): NextLiveSession[] {
  return nextLiveSessionData as NextLiveSession[];
}

export const nextLiveSessions = getNextLiveSessions();
