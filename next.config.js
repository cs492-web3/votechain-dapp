/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");
const hompage = "https://cs492-web3.github.io/votechain-dapp";

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
