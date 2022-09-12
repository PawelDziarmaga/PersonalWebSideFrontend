/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [{ source: "/none", destination: "/", permanent: true }];
	},
};

module.exports = nextConfig;
