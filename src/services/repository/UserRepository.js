const User = require('./models/User');
const ApiError = require('../../api/utils/ApiError');


module.exports = {
    createUser: async (user) =>  {
        const newUser = await User.create(user)
        return newUser;
    },

    findyById: async(userId) => {
        const user = await User.findById(userId);
        return user
    },

    getPhotosByUserId: async(userId) => {
        const user =  await User.findById(userId)
        return user.photos || []
    }
}