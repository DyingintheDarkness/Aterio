/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    PASSWORD: process.env.PASSWORD,
    SECRET: process.env.SECRET,
  },
};

module.exports = nextConfig;
