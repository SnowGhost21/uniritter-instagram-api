const LocatorService = require('../../services/LocatorService');
const PhotoRepository = LocatorService.getPhotoRepository();
const UserRepository = LocatorService.getUserRepository();
const mongoose = require('mongoose');
const ApiError = require('../utils/APIError');
const fs = require('fs');

module.exports = {
    get: async (data) => {
        try {
            const user = await UserRepository.findyById(data.userId);
            return user;
        }catch(err) {
            throw new ApiError({
                message: "Error find user",
                code: 500
            })
        }
        
    },
    putPhoto: async (data) => {
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
    },

    createUser: async (data) => {
        try {
            const name = data.name;
            const username = data.userName;
            const userId = new mongoose.mongo.ObjectId();

            const inserted = await UserRepository.createUser({
                _id: userId,
                name: name,
                username: username
            })

            const result = inserted;

            return result;
        } catch (err) {
            console.log(err);
            throw new ApiError({
                message: "Error create user",
                code: 500
            })
        }
    },
}