import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'utfs.io',
        }, ],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
        };
        return config;
    },
};

export default nextConfig;