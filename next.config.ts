import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  /* Gli URL attuali di rifipack.it finiscono con "/": li manteniamo identici per non perdere posizionamento. */
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "www.rifipack.it", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "rifipack.it", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "secure.gravatar.com", pathname: "/avatar/**" },
      { protocol: "https", hostname: "0.gravatar.com", pathname: "/avatar/**" },
      { protocol: "https", hostname: "1.gravatar.com", pathname: "/avatar/**" },
      { protocol: "https", hostname: "2.gravatar.com", pathname: "/avatar/**" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
