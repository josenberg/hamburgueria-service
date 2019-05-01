/**
 * Modules
 */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * Routes
 */
const BurgerRouter = require('./routes');

const CORS_OPTIONS = {
  origin: '*',
  exposedHeaders: [
    'total-count',
    'prev-offset',
    'next-offset',
    'current-page',
    'total-pages',
    'total-orders',
    'total-org-orders',
    'total-pending-orders',
  ],
  optionsSuccessStatus: 200,
};

/**
 * Burger service is reponsible for the configurations and
 * middlewares needed for express
 *
 * @class BurgerService
 */
class BurgerService {
  constructor() {
    // initilize express
    this._app = express();

    // Add a little more security with helmet
    this._app.use(helmet());
    this._app.use(cors(CORS_OPTIONS));
    this._app.use(bodyParser.urlencoded({
      extended: true,
    }));


    // Configure routes
    this._app.use(BurgerRouter);
  }

  get app() {
    return this._app;
  }
}

module.exports = BurgerService;
