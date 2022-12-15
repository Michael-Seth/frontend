/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
// This is to access a remote image but still use the built-in Next.js Image Optimization API
