import type { NextConfig } from 'next';

const repoName = 'Prime-Nova';

const nextConfig: NextConfig = {
  output: 'export',          // Static export
  distDir: 'out',            // Output folder
  basePath: `/${repoName}`,  // For GitHub Pages repo
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,       // Required for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true,       // Required for static export
  },
};

export default nextConfig;
