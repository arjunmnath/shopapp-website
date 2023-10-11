/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SMTP_USER: 'shop.arjunmnath@gmail.com',
        SMTP_PASSWORD: 'vqjanhayyrcdxkww',
        SMTP_HOST: 'smtp.gmail.com',
        SMTP_PORT: 465,
        MONGODB_URI: "mongodb+srv://arjunmnath:P9nHi7uhF4nPeau8@shopapp.4n0kofc.mongodb.net/?retryWrites=true&w=majority",
        MONGODB_URI_VERCEL: "mongodb+srv://vercel-admin-user:V2lO4TksYL6nY4UX@shopapp.4n0kofc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        DB_NAME: "shopapp"
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      }
}

module.exports = nextConfig
