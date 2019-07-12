const LocatorService = require('../../services/LocatorService');
const PhotoRepository = LocatorService.getPhotoRepository();
const mongoose = require('mongoose');
const ApiError = require('../utils/APIError');
const fs = require('fs');

module.exports = {
    get: async() => {
        return {}
    },
    put: async (req, res) => {
        try {
            const inserted = await Promise.all(
                PhotoRepository.create({
                    _id: new mongoose.mongo.ObjectId(),
                })
            )

            return {}
        } catch (err) {
            throw new ApiError({
                message: err,
                code: 500
            })
        }
    }
}