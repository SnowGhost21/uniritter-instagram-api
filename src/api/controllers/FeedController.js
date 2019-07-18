const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');
const LocatorService = require('../../services/LocatorService');
const PhotoRepository = LocatorService.getPhotoRepository();

module.exports = {

    putImage: async(data) => {
        const image = data.image;
        const path = image.image.path;
        const userId = data.userId;
        const imageObject = await PhotoRepository.saveImage(path);
        const id = new mongoose.mongo.ObjectId();
        const photoUrl = imageObject.url;
        const createdAt = imageObject.created_at;

        const newPhoto = {
            _id: id,
            userId: userId,
            photoUrl: photoUrl,
            createdAt: createdAt
        };

        const result = await PhotoRepository.create(newPhoto);
        return result;
    }
}