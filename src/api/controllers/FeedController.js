const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');
const LocatorService = require('../../services/LocatorService');
const UserRepository = LocatorService.getUserRepository();

module.exports = {
    get: async () => {
        const user = await UserRepository.findById("id");
        if (user) {
            return user.photos || [];
        } else {
            return new ApiError({
                message: "Not found",
                code: 404
            });
        }
    }
}