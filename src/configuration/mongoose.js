const mongoose = require('mongoose');
const { mongo, env } = require('./variables');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/


exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1
  });
  return mongoose.connection;
};

exports.connectTest = () => {
  const mongoTestServer = new MongodbMemoryServer();

  mongoTestServer
    .getConnectionString()
    .then(url => {
      mongoose.connect(url, {
        keepAlive: 1
      });

      return mongoose.connection;
    });
};
