const cloudinary = require('cloudinary').v2;
const { cloudName, apiKey, apiSecret } = require('../../configuration/variables')

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
});

module.exports = {
    upload: (path) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(path, { resource_type: 'auto' }, (err, url) => {
                if (err) {
                    return reject(err);
                }
                resolve(url);
            })
        })
    }
}