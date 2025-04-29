/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_MAKE_LOGO: process.env.NEXT_PUBLIC_MAKE_LOGO,
    NEXT_PUBLIC_MISTRAL_AI_LOGO:
      process.env.NEXT_PUBLIC_MISTRAL_AI_LOGO,
  },
  
};

export default nextConfig;
