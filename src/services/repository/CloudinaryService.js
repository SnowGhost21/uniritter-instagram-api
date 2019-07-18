const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
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
        return;
    }
}