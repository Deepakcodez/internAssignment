/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol : "https",
                hostname : 'myfastx.com',
                pathname: '/**',

            }
        ]
    }
};

export default nextConfig;
