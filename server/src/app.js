const express = require('express');
const cors = require('cors');
const router = require('./server/router');
const ErrorHandlers = require('./server/handlerError/handler');

const app = express();

const createApp = () => {
  app.use(cors());
  app.use(express.json());
  app.use('/public', express.static('public'));
  app.use('/api', router);

  app.use(ErrorHandlers.tokenErrorHandler);
  app.use(ErrorHandlers.basicErrorHandler);
  app.use(ErrorHandlers.sequelizeErrorHandler);
  
  return app
};

module.exports = createApp;
