import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["@splidejs/react-splide"],
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
