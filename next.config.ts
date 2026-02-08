import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/genoveq',
  assetPrefix: '/genoveq',
};

export default nextConfig;
