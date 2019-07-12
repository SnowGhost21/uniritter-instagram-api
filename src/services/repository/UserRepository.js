const User = require('./models/User');
const ApiError = require('../../api/utils/ApiError');

class UserRepository {
    constructor(presenceService) {
        this.presenceService = presenceService;
    }

    async findById(userId) {

        try {
            if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                return User.findById(userId) || {};
            } else {
                throw new ApiError({
                    message: "Error",
                    code: 404
                })
            }
            
        } catch (err) {
            throw new ApiError({
                message: err,
                code: 404
            });
        }

    }

    async getPhotosByUserId(userId) {

        try {
            if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                return this.findById(userId).photos || []
            } else {
                return [];
            }

        } catch (err) {
            throw new ApiError({
                message: "Photos not found",
                code: 404
            });
        }
    }
}

module.exports = UserRepository;