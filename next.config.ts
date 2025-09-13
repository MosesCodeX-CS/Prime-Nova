import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = ''; // Empty for root deployment

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
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
