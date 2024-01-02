const { userAgentFromString } = require("next/server");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "userAgentFromString.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
