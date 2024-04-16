/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'lavoiedubienetre.be',
            }
          ],
          permanent: true,
          destination: 'https://www.lavoiedubienetre.be/:path*'
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.lavoiedubienetre.be',
            }
          ],
          permanent: true,
          destination: 'https://www.lavoiedubienetre.be/:path*'
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: '(?!www\\.lavoiedubienetre\\.be).*'
            }
          ],
          permanent: true,
          destination: 'https://www.lavoiedubienetre.be/:path*'
        }
      ]
    },
  }
  
  module.exports = nextConfig;
  
