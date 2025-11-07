/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable caching in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig

