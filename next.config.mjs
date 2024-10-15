import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

import nextra from "nextra";
/** @type {import('next').NextConfig} */
const config = {};
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});




const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import('@ducanh2912/next-pwa')).default({
      dest: 'public',
      cacheOnFrontEndNav: true,
      aggressiveFrontEndNavCaching: true,
      reloadOnOnline: true,
      swcMinify: true,
      disable: process.env.NODE_ENV === 'development',
      // disable: false,
      workboxOptions: {
        disableDevLogs: true,
      },
      fallbacks: {
        // Failed page requests fallback to this.
        document: '/~offline',
      },
    })
    return withPWA(withNextra(config))
  }
  return nextConfig
}
export default nextConfigFunction

