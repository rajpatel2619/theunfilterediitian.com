import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sessions",
        destination: "/events",
        permanent: false,
      },
      {
        source: "/sessions/playlists/:playlistId",
        destination: "/events/playlists/:playlistId",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
