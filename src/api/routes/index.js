const userRouter = require('../routes/user');

const initRouters = (comm) => {
    feedRoute('feed', comm);
    userRouter('user', comm);
    comm.get('/', () => true);
};

module.exports = initRouters;