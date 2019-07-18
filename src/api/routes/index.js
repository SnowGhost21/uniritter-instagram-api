const userRouter = require('../routes/user');

const initRouters = (comm) => {
    userRouter('user', comm);
    comm.get('/', () => true);
};

module.exports = initRouters;