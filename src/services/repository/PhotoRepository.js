const Photo = require('./models/Photo');
const ApiError = require('../../api/utils/ApiError');

module.exports = {
    create: (photo) => Photo.create(photo)
};