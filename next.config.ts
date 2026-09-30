import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Le registre est servi en statique depuis public/r : un client shadcn le lit en CORS.
    async headers() {
        return [
            {
                source: '/r/:path*',
                headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
            },
        ];
    },
};

export default nextConfig;
