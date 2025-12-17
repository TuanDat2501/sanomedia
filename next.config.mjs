/** @type {import('next').NextConfig} */
const nextConfig = {
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
