const Photo = require('./models/Photo');
const ApiError = require('../../api/utils/ApiError');
const CloudnaryService = require('./CloudinaryService');

module.exports = {
    create: (photo) => Photo.create(photo),

    saveImage: async (path) => {
        const imageUrl = await CloudnaryService.upload(path);
        return imageUrl;
    }

};