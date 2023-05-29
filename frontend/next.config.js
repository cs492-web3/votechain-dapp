/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");
const hompage = "https://cs492-web3.github.io/votechain-dapp/";
module.exports = withImages();

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  assetPrefix: process.env.NODE_ENV === "production" ? hompage : "",
  env: {},
};

module.exports = nextConfig;
