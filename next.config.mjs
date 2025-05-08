/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
    },
    serverExternalPackages: ["@node-rs/argon2"],
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "utfs.io",
            pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
        }, ],
    },
    rewrites: () => {
        return [{
            source: "/hashtag/:tag",
            destination: "/search?q=%23:tag",
        }, ];
    },
    // 이 부분 추가
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.join(__dirname, 'src'),
        };
        return config;
    },
};

export default nextConfig;