/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

module.exports = nextConfig;
