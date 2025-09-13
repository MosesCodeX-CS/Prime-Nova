import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix to serve from root
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Ensure static export works correctly
  trailingSlash: true,
};

export default nextConfig;
