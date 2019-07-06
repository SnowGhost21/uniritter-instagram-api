const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const ApiError = require('../utils/ApiError');
const {
    env
  } = require('../../configuration/variables');

  const handler = (err, req, res, next) => {
    const response = {
      code: err.status,
      message: err.message || httpStatus[err.status],
      errors: err.errors,
      stack: err.stack
    };
  
    if (env !== 'development') {
      delete response.stack;
    }
  
    res.status(err.status);
    res.json(response);
  };
  exports.handler = handler;
  
  /**
   * If error is not an instanceOf APIError, convert it.
   * @public
   */
  exports.converter = (err, req, res, next) => {
    let convertedError = err;
  
    if (err instanceof expressValidation.ValidationError) {
      convertedError = new ApiError({
        message: 'Erro de Validação',
        errors: err.errors,
        status: err.status,
        stack: err.stack
      });
    } else if (!(err instanceof ApiError)) {
      convertedError = new ApiError({
        message: err.message,
        status: err.status,
        stack: err.stack
      });
    }
  
    return handler(convertedError, req, res, next);
  };
  
  /**
   * Catch 404 and forward to error handler
   * @public
   */
  exports.notFound = (err, req, res, next) => {
    err = new ApiError({
      message: 'Not found',
      status: httpStatus.NOT_FOUND
    });
    return handler(err, req, res, next);
  };
  