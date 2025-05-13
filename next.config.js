/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Important for static export (Netlify-compatible)
};

module.exports = nextConfig;
