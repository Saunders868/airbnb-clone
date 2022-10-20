/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "randomuser.me", "nominatim.openstreetmap.org", "images.unsplash.com", "d13k13wj6adfdf.cloudfront.net"],
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoic2F1bmRlcnM4NjgiLCJhIjoiY2w5aDhmdDllMDI1ZzN1bWV1eHNtbjRmdiJ9.-VG_OHgqc_r0RDplXGqwLQ'
  }
};

module.exports = nextConfig;
