/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: false,

  images: {
    domains: ["i.seadn.io", "github.com"],
  },
};

module.exports = nextConfig;
