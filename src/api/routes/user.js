const UserController = require('../controllers/UserController');

const userRouter = (prefix, comm) => {
    comm.get(`/${prefix}/:userId`, UserController.get)
    comm.put(`/${prefix}/inserPhoto`, UserController.putPhoto);
    comm.post(`/${prefix}/createUser`, UserController.createUser);
}

module.exports = userRouter;