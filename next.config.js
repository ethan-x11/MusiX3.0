/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'angartwork.akamaized.net' ,
      'resources.tidal.com' ,
      'i.scdn.co' ,
      'encrypted-tbn1.gstatic.com'
    ],
    Loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
