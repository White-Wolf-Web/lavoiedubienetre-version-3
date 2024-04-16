/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          permanent: true,
          destination: 'https://www.lavoiedubienetre.be/:path*'
        },
       
      ]
    },
  }
  
  module.exports = nextConfig;
  
