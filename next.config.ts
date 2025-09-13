import type { NextConfig } from 'next';

const repoName = 'Prime-Nova'; // must match your GitHub repo exactly
const useCustomDomain = false; // true only if you have a custom domain

const nextConfig: NextConfig = {
  output: 'export',           // required for static export
  distDir: 'out',             // folder for exported site
  basePath: useCustomDomain ? '' : `/${repoName}`,
  assetPrefix: useCustomDomain ? '' : `/${repoName}/`,
  trailingSlash: true,        // required for GitHub Pages routing
  reactStrictMode: true,
  images: {
    unoptimized: true,        // required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: useCustomDomain ? '' : `/${repoName}`,
  },
};

export default nextConfig;
