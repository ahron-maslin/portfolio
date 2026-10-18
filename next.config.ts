import type {NextConfig} from 'next';

const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: !!isStaticExport,
  },
  output: isStaticExport ? 'export' : 'standalone',
  trailingSlash: isStaticExport ? true : false,
  transpilePackages: ['motion'],
};

export default nextConfig;
