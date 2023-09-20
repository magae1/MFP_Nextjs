/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*" + "/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: "isLogIn",
            value: "True",
          },
        ],
        permanent: false,
        destination: "/",
      },
      {
        source: "/signup",
        has: [
          {
            type: "cookie",
            key: "isLogIn",
            value: "True",
          },
        ],
        permanent: false,
        destination: "/",
      },
      {
        source: "/account",
        missing: [
          {
            type: "cookie",
            key: "isLogIn",
            value: "True",
          },
        ],
        permanent: false,
        destination: "/",
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
