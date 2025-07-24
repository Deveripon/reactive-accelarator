import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} from "next/constants.js";
import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
    defaultShowCopyCode: true,
});

const nextConfigFunction = async (phase) => {
    const baseConfig = {
        reactStrictMode: true,
        images: {
            domains: [
                "images.unsplash.com",
                "avatars.githubusercontent.com",
                "github.com",
                "lh3.googleusercontent.com",
                "www.gravatar.com",
                "learnwithsumit.com",
            ],
        },
    };

    if (
        phase === PHASE_DEVELOPMENT_SERVER ||
        phase === PHASE_PRODUCTION_BUILD
    ) {
        const withPWA = (await import("@ducanh2912/next-pwa")).default({
            dest: "public",
            cacheOnFrontEndNav: true,
            aggressiveFrontEndNavCaching: true,
            reloadOnOnline: true,
            swcMinify: true,
            disable: process.env.NODE_ENV === "development",
            workboxOptions: {
                disableDevLogs: true,
            },
            fallbacks: {
                document: "/~offline",
            },
        });
        return withPWA(withNextra(baseConfig));
    }

    return withNextra(baseConfig);
};

export default nextConfigFunction;
