import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio-api.internal.wabisabitech.in/share-india',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'minio-api.internal.wabisabitech.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ghost.shareindiainsurance.com',
        port: '',
        pathname: '/**',
      },
      {
        // Ghost CMS (local dev) serves feature images from /content/images/**
        protocol: 'http',
        hostname: 'localhost',
        port: '2368',
        pathname: '/**',
      },
      {
        // Ghost default/sample post images
        protocol: 'https',
        hostname: 'static.ghost.org',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/corporate',
        destination: '/corporate-insurance',
        permanent: true,
      },
      {
        source: '/corporate/marine-transit',
        destination: '/corporate-insurance/marine-transit-insurance',
        permanent: true,
      },
      {
        source: '/industries/real-estate',
        destination: '/industries/real-estate-industry',
        permanent: true,
      },
      {
        source: '/our-story',
        destination: '/about#our-story',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
