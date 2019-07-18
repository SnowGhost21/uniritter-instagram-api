const express = require('express');
const http = require('http');
const morgan = require('morgan');
const { logs } = require('./variables');
const bodyParser = require('body-parser');
const error = require('../api/middlewares/error');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('../api/routes');
const CommunicationService = require('../services/CommunicationService');
const comm = new CommunicationService();
const formidable = require('express-formidable');

const app = express();
const server = new http.createServer(app);

app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

app.use(formidable());

//Routes
comm.setRouter(app);
routes(comm);

module.exports = server;