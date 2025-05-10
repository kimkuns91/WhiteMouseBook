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
            pathname: `/**`,
        }, {
            protocol: "https",
            hostname: "3gmtn0alvu.ufs.sh",
            pathname: "/**",
        }, {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "/**",
        }],
    },
    rewrites: () => {
        return [{
            source: "/hashtag/:tag",
            destination: "/search?q=%23:tag",
        }, ];
    },
};

export default nextConfig;