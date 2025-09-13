import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig } from 'webpack';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.REPO_NAME || 'Prime-Nova';
const useCustomDomain = true; // set to false if using GitHub Pages repo URL

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  distDir: 'out',

  // Base path and asset prefix
  basePath: useCustomDomain ? '' : `/${repoName}`,
  assetPrefix: useCustomDomain ? '' : `/${repoName}/`,

  // Images
  images: {
    unoptimized: true, // Required for static export
  },

  // Add trailing slash for GitHub Pages
  trailingSlash: true,

  // React strict mode
  reactStrictMode: true,

  // Webpack config
  webpack: (config: WebpackConfig) => {
    // Safely add asset/resource rules
    if (config.module) {
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      });
    }

    // Set public path for GitHub Pages
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
