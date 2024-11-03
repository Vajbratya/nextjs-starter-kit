/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'seo-heist.s3.amazonaws.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'github.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'ansubkhan.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'utfs.io',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'i.ibb.co',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'avatar.vercel.sh',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/**'
    }]
  }
};
module.exports = nextConfig;