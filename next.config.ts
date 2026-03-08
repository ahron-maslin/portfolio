import type {NextConfig} from 'next';

const isStaticExport = process.env.GITHUB_ACTIONS || process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: !!isStaticExport,
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'unavatar.io', pathname: '/**' },
    ],
  },
  output: isStaticExport ? 'export' : 'standalone',
  trailingSlash: isStaticExport ? true : false,
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = { ignored: /.*/ };
    }
    return config;
  },
  async headers() {
    if (isStaticExport) return [];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-CTF-Clue', value: 'Part 4: Almost there! Decode this base64 string to find the final flag: L2h1bWFucy50eHQ=' }
        ],
      },
    ];
  },
};

export default nextConfig;
