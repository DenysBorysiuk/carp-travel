/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [280, 480, 768, 1280, 1440, 1920],
  },
};

module.exports = nextConfig;
