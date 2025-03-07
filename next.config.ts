import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    // this is for big size image uploading condition...
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
