import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

import nextra from "nextra";
/** @type {import('next').NextConfig} */
const baseConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
};

const nextConfigFunction = async (phase) => {
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
        return withPWA(nextra({
            theme: 'nextra-theme-docs',
            themeConfig: './theme.config.jsx'
        })(baseConfig));
    }

    return nextra({
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.jsx'
    })(baseConfig);
};

export default nextConfigFunction;
