import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // Khasai dherai external sources bata images chhan bhane extra domain pani thapna milchha
    ],
  },
};

export default nextConfig;
