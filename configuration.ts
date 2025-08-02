import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    production: {
        token: process.env.TELEGRAM_BOT_TOKEN_PROD || 'YOUR_PRODUCTION_TOKEN',
        endpoint: process.env.TELEGRAM_ENDPOINT_PROD || 'YOUR_PRODUCTION_ENDPOINT',
    },
    development: {
        token: process.env.TELEGRAM_BOT_TOKEN_DEV || 'YOUR_DEVELOPMENT_TOKEN',
        endpoint: process.env.TELEGRAM_ENDPOINT_DEV || 'http://localhost:3000',
    },
};

export default config;
