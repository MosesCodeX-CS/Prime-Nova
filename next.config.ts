/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export

  images: {
    unoptimized: true, // disable Next.js image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },

  trailingSlash: true, // required for GitHub Pages

  // GitHub Pages config
  basePath: "/Prime-Nova",   // must match repo name exactly
  assetPrefix: "/Prime-Nova/",
};

export default nextConfig;
