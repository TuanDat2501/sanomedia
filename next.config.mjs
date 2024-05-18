/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized:false,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
