import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This will ignore ESLint errors during builds (local + Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
