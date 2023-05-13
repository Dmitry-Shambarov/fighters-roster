const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.sanity.io'] },
  async rewrites() {
    return [
      {
        source: '/post/:slug*',
        destination: '/post/[...slug]',
      },
    ];
  },
};

module.exports = nextConfig;
