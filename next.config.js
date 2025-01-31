/** @type {import('next').NextConfig} */

module.exports = {
  // Your existing module.exports
  target: 'serverless',
  future: {
    webpack5: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
