const LocatorService = require('../../services/LocatorService.js');
const PhotoRepository = LocatorService.getPhotoRepository();
const UserRepository = LocatorService.getUserRepository();
const mongoose = require('mongoose');
const ApiError = require('../utils/ApiError.js');
const md5 = require('md5');

module.exports = {
    get: async (data) => {
        try {
            const user = await UserRepository.findById(data.userId);
            return user;
        } catch (err) {
            throw new ApiError({
                message: err.message,
                code: 500
            })
        }

    },

    createUser: async (data) => {
        try {
            const name = data.name;
            const username = data.username;
            const userId = new mongoose.mongo.ObjectId();
            const password = data.password;
            const md5Password = md5(password);

            const inserted = await UserRepository.createUser({
                _id: userId,
                name: name,
                username: username,
                password: md5Password
            });

            const result = await UserRepository.findById(userId);

            return result;
        } catch (err) {
            throw new ApiError({
                message: "Error create user",
                code: 500
            })
        }
    },

    login: async (data) => {
        const username = data.username;
        const password = data.password;

        const result = await UserRepository.findOne({
            username,
            password
        });

        if (result) {
            return result;
        }

        return new ApiError({
            status: 404,
            message: 'User not found'
        });
    },

    getUserFeed: async (data) => {
        const userId = data.userId;

        try {
            const user = await UserRepository.findById(userId);
            if (user && user.feed) {
                return user.feed;
            }

            return new ApiError({
                status: 404,
                message: 'User not found'
            })
        } catch (err) {
            return new ApiError({
                status: 500,
                message: err.message
            })
        }

    }
}