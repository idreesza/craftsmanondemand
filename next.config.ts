import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.craftsmanondemand.com" }],
        destination: "https://craftsmanondemand.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
