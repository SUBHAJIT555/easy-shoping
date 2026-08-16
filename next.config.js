const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
}

// Rewrites are ignored by `output: 'export'`. Only attach them in `next dev`.
if (process.env.NODE_ENV === 'development') {
  nextConfig.rewrites = async () => ({
    beforeFiles: [
      {
        source: '/api/submit.php',
        destination: 'http://localhost/ecom/api/submit.php',
      },
    ],
    afterFiles: [],
    fallback: [],
  })
}

module.exports = nextConfig
