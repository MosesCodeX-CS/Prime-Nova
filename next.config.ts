/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export
  trailingSlash: true, // required for GitHub Pages

  basePath: '/Prime-Nova',
  assetPrefix: '/Prime-Nova/',

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },

  experimental: {
    // ensure exported paths respect the basePath
    outputFileTracingRoot: __dirname,
  },
};

export default nextConfig;
