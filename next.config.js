/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
};
const withVideos = require("next-videos");
module.exports = nextConfig;
