/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "randomuser.me", "nominatim.openstreetmap.org", "images.unsplash.com", "d13k13wj6adfdf.cloudfront.net"],
  },
};

module.exports = nextConfig;
