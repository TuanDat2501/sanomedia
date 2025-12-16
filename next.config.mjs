/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    images: {
        unoptimized: true,
        disableStaticImages: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        serverComponentsExternalPackages: ["mongoose"],
    },
    
};

export default nextConfig;
