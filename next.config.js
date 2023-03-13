/** @type {import('next').NextConfig} */

/*
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/

module.exports = {
  async rewrites() {
    return [
      {
        source: '/verify/:id',
        destination: '/api/verify?id=:id',
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};