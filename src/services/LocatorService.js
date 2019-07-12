const PhotoRepository = require('./repository/PhotoRepository');
const UserRepository = require('./repository/UserRepository');

module.exports = {
    getPhotoRepository: () => PhotoRepository,
    getUserRepository: () => new UserRepository(undefined)
};