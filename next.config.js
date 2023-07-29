/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SMTP_USER: 'shop.arjunmnath@gmail.com',
        SMTP_PASSWORD: 'vqjanhayyrcdxkww',
        SMTP_HOST: 'smtp.gmail.com',
        SMTP_PORT: 465,
        // MONGODB_URI: "mongodb+srv://arjunmnath:P9nHi7uhF4nPeau8@shopapp.4n0kofc.mongodb.net/?retryWrites=true&w=majority",
        DB_NAME: "shopapp"
    }
}

module.exports = nextConfig
