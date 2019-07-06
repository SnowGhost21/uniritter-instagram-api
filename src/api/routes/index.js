const feedRoute = require('../routes/feed');

const initRouters = (comm) => {
    feedRoute('feed', comm);
};

module.exports = initRouters;