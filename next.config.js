const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'],
  },
};
module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['react-syntax-highlighter'],
      },
    ],
  ],
  nextConfig
);
