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
- `NEXT_PUBLIC_LEETCODE_PLAYLIST_URL`

If a mentorship or resume review link is not configured, the site sends visitors to the main WhatsApp community.

## Useful Commands

```bash
npm run lint
npm run build
```

## Content

Most shared navigation, link, course, session, and contributor data lives in `app/site-config.ts`. Update that file when you want to change courses, link labels, session types, or contributor roles.
