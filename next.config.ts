import type { Configuration as WebpackConfig } from 'webpack';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.REPO_NAME || 'Prime-Nova';

// For GitHub Pages, we'll use a custom domain-like setup
const useCustomDomain = true;

const nextConfig: NextConfig = {
  // Required for static export
  output: 'export',
  distDir: 'out',
  
  // Use empty base path for custom domain-like setup
  basePath: useCustomDomain ? '' : `/${repoName}`,
  assetPrefix: useCustomDomain ? '' : `/${repoName}/`,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
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
    if (isProd && !useCustomDomain) {
      config.output = config.output || {};
      config.output.publicPath = `/${repoName}/`;
    }
    
    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: useCustomDomain ? '' : `/${repoName}`,
  },
};

export default nextConfig;
