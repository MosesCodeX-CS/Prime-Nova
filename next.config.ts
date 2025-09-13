/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export

  images: {
    unoptimized: true, // disable Next.js image optimization
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },

  trailingSlash: true, // required for GitHub Pages

  // GitHub Pages config
  basePath: process.env.NODE_ENV === 'production' ? '/Prime-Nova' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Prime-Nova/' : undefined,

  experimental: {
    // ensure exported paths respect the basePath
    outputFileTracingRoot: __dirname,
  },
};

export default nextConfig;
