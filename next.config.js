/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BACKEND_URL}/api/:path*` + "/",
      },
      {
        source: "/media/:path*",
        destination: `${process.env.BACKEND_URL}/media/:path*`,
      },
      {
        source: "/admin/:path*",
        destination: `${process.env.BACKEND_URL}/admin/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
