import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  basePath: '/ranran-ai-portfolio',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
