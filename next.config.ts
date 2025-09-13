import type { Configuration as WebpackConfig } from 'webpack';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.REPO_NAME || 'Prime-Nova';

const nextConfig: NextConfig = {
  // Required for static export
  output: 'export',
  distDir: 'out',
  
  // Base path for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  
  // Required for static export
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
    
    // Ensure proper public path for assets
    if (isProd) {
      config.output = config.output || {};
      config.output.publicPath = `/${repoName}/`;
    }
    
    return config;
  },
  
  // Environment variables
  env: {
    // This will be available in the browser
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

export default nextConfig;
