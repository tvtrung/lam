/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const isProduction = process.env.NODE_ENV === 'production';
const globImporter = require('node-sass-glob-importer');

let nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    loader: isProduction ? 'custom' : 'default',
    domains: ['swiperjs.com', 'localhost', 'admin-hdls-dev.lampart-vn.com', 'lampart-vn.com', 'hl-stg-admin.lampart-vn.com', 'lampart-vn.local','mid.lampart-vn.local','lam.data24.click'],
  },
  sassOptions: {
    importer: globImporter(),
  },
  output: 'standalone',
  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   }
  //   return config
  // },
  env: {
    HOST_URI: process.env.HOST_URI,
  },
};

// if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: true, openAnalyzer: false});
  nextConfig = withBundleAnalyzer(nextConfig);
// }

module.exports = nextConfig;
