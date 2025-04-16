/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com', 'fakestoreapi.com'],
  },
}

module.exports = nextConfig 