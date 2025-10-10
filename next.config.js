/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      // Add your CMS image domains here
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Required for static export
  },
  // Enable static exports for GitHub Pages
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Note: headers and redirects are not supported with static export
  // Security headers and redirects should be handled by GitHub Pages or CDN
};

module.exports = nextConfig;
