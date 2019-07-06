const {
    port,
    env
} = require('./configuration/variables');
const app = require('./configuration/core');
const mongoose = require('./configuration/mongoose');

// open mongoose connection
console.log('Connecting to database...');

if (env === 'test') {
    mongoose.connectTest();
} else {
    mongoose.connect();
}

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.info(`Server started on port : ${port}`));
}

module.exports = app;