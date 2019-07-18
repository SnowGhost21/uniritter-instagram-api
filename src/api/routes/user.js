const UserController = require('../controllers/UserController');
const FeedController = require('../controllers/FeedController');

const userRouter = (prefix, comm) => {
    comm.get(`/${prefix}/:userId`, UserController.get)
    comm.put(`/${prefix}/:userId/insertPhoto`, FeedController.putImage);
    comm.post(`/${prefix}/createUser`, UserController.createUser);
    comm.get(`/${prefix}/:userId/feed`, UserController.getUserFeed);
}

module.exports = userRouter;