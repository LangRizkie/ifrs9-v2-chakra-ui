import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	assetPrefix: '/ifrs9-static',
	experimental: {
		optimizePackageImports: ['@chakra-ui/react']
	},
	reactStrictMode: false,
	rewrites: async () => ({
		beforeFiles: [
			{
				destination: '/_next/:path+',
				source: '/ifrs9-static/_next/:path+'
			}
		]
	})
}

export default nextConfig
