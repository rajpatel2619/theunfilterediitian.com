# The Unfiltered IITian

Website for The Unfiltered IITian, a WhatsApp-first student community with clear public pages, useful action links, and live student support.

## Getting Started

Install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Link Setup

Copy `.env.example` to `.env.local` and add the real links for the community, forms, resources, and social profiles:

```bash
cp .env.example .env.local
```

Available link variables:

- `NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL`
- `NEXT_PUBLIC_SOFTWARE_DEVELOPMENT_URL`
- `NEXT_PUBLIC_DSA_URL`
- `NEXT_PUBLIC_MODERN_AI_URL`
- `NEXT_PUBLIC_LIVE_COURSES_URL`
- `NEXT_PUBLIC_MENTORSHIP_URL`
- `NEXT_PUBLIC_RESUME_REVIEW_URL`
- `NEXT_PUBLIC_RESOURCES_URL`
- `NEXT_PUBLIC_WEBSITE_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_YOUTUBE_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_JOBS_URL`
- `NEXT_PUBLIC_LEETCODE_PLAYLIST_URL`
- `YOUTUBE_API_KEY`

If a mentorship or resume review link is not configured, the site sends visitors to the main WhatsApp community.

`YOUTUBE_API_KEY` is server-only. It lets the Courses page fetch YouTube channel playlists and playlist videos, and lets the Events page fetch video metadata from the YouTube Data API v3. If it is missing, the site uses the fallback video data in `app/site-config.ts`.

Keep real API keys in `.env.local` or Vercel environment variables. Do not commit them to `.env.example`.

## Useful Commands

```bash
npm run lint
npm run build
```

## Content

Live course cards are stored in `app/data/live-courses.json`. Update that file when you want to add, remove, or edit live courses.

Mentor cards on the Contributors page are stored in `app/data/contributors.json`. Add each mentor with `name`, `email`, `image`, `bio`, `expertiseDescription`, and `linkedinUrl`.

Most shared navigation, link, event, and fallback YouTube data lives in `app/site-config.ts`. Update that file when you want to change link labels, event types, or fallback playlist data.
