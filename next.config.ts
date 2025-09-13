/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML export for GitHub Pages

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

  trailingSlash: true, // important for GitHub Pages routing

  // 🔑 Required for GitHub Pages
  basePath: "/Prime-Nova",   // must match your repo name EXACTLY (case-sensitive)
  assetPrefix: "/Prime-Nova/",
};

export default nextConfig;
