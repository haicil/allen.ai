import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',          // emit a static site into out/
  basePath: '/allen.ai',     // repo name — Pages serves from this sub-path
  trailingSlash: true,       // emit projects/host/index.html, not projects/host.html
  images: { unoptimized: true },
}

export default nextConfig
