const path = require('path');

require('dotenv-safe').load({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example')
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        uri: process.env.MONGO_URI
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'cloudName',
    apiKey: process.env.CLOUDINARY_API_KEY  || 'apiKey',
    apiSecret: process.env.CLOUDINARY_API_SECRET || 'apiSecret'

}