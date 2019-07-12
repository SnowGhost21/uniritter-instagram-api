const UserController = require('../controllers/UserController');

const userRouter = (prefix, comm) => {
    comm.get(`/${prefix}/`, UserController.get)
    comm.post(`/${prefix}/inserPhoto`, UserController.put);
}

module.exports = userRouter;