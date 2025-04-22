import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['*'], // Allow any domain for images
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