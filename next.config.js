const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 反向代理
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 匹配所有以 api 开头的请求(也就是后端接口请求)
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
  images: {
    // 随机图: https://source.unsplash.com/collection/94734566/1920x1080&quot
    domains: ['unsplash.com'],
    unoptimized: true, // 不优化图片
  },
};

module.exports = nextConfig;
