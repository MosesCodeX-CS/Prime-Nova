import type { Configuration as WebpackConfig } from 'webpack';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Prime-Nova';

const nextConfig: NextConfig = {
  output: 'export', // required for static export
  distDir: 'out',
  
  // Base path for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    path: isProd ? `/${repoName}/_next/image` : '/_next/image',
  },
  
  // Ensure static export works correctly
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  
  // Required for GitHub Pages
  trailingSlash: true,
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Webpack configuration for static export
  webpack: (config: WebpackConfig) => {
    // Add file-loader for assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

export default nextConfig;
