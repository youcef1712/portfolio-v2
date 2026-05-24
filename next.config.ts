const repoName = "portfolio-v2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;