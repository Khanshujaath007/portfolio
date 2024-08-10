// await import("./src/env.js"); // Comment this line out if not needed
import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

/**
 * @type {import('next').NextConfig}
 */
// @ts-ignore
const config = withPWA({
  reactStrictMode: true,
  
  output: 'export', // Ensure this line is here for static export
  
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

export default config;
