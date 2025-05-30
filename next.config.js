/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to enable API routes and redirects
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;