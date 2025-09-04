import 'dotenv/config';

// Types
import type ms from 'ms'


const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV ,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ,
    MONGO_URI: process.env.MONGO_URI,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY as ms.StringValue,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY as ms.StringValue,
    WHITELIST_ADMINS_EMAIL:[
        'vic@gmail.com',
        
    ]
}

export default config;