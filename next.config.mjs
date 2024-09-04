/** @type {import('next').NextConfig} */
import Dotenv from "dotenv-webpack";

const productionURL = "https://cs492-web3.github.io/votechain-dapp/";
const productionPath = "/votechain-dapp";

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  assetPrefix: process.env.NODE_ENV === "production" ? productionURL : "",
  env: {},
  basePath: process.env.NODE_ENV === "production" ? productionPath : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
