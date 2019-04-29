/**
 * Modules
 */
const express = require('express');
const helmet = require('helmet');

/**
 * Routes
 */
const BurgerRouter = require('./routes');

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

    // Configure routes
    this._app.use(BurgerRouter);
  }

  get app() {
    return this._app;
  }
}

module.exports = BurgerService;
