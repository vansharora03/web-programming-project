import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any hostname
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
};

export default nextConfig;