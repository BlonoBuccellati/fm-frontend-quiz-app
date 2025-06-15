import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // svgrをコンポーネントとして扱う
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: "@svgr/webpack",
    });
    return config;
  },
};

export default nextConfig;
