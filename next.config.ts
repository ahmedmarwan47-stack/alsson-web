import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath only in production — dev server must not prefix public assets
  basePath: process.env.NODE_ENV === "production" ? "/alsson-web" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
