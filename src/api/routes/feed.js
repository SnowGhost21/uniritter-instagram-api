const FeedController = require('../controllers/FeedController');

const feedRouter = (prefix, comm) => {
    comm.get(`/${prefix}/`, FeedController.get);
    comm.put(`/${prefix}/:userId/insertPhoto`, FeedController.putImage);
};

module.exports = feedRouter;