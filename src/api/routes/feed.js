const FeedController = require('../controllers/FeedController');

const feedRouter = (prefix, comm) => {
    comm.get(`/${prefix}/`, FeedController.get);
};

module.exports = feedRouter;