import type { NextConfig } from "next";

// Configure Next.js for static export suitable for GitHub Pages.
// BASE_PATH is injected by the CI workflow for project pages (e.g., "/nextjs-app-monitor").
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Generate a fully static site in the `out` folder via `next export`.
  output: "export",
  // Ensure URLs work on GitHub Pages subpaths when BASE_PATH is set.
  basePath,
  // Trailing slashes improve compatibility with GitHub Pages for nested routes.
  trailingSlash: true,
  // If you later use next/image, unoptimized images are needed for static export.
  images: { unoptimized: true },
};

export default nextConfig;
