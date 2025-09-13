/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // enables static HTML export
  images: { 
    unoptimized: true, // needed for GitHub Pages
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
  trailingSlash: true,

  // 🔑 Needed for GitHub Pages
  basePath: "/prime-nova",   // repo name
  assetPrefix: "/prime-nova/", 
}

export default nextConfig;
