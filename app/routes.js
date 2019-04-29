/**
 * Express Router
 */
const BurgerRouter = require('express').Router();

const IngredientsController = require('./controllers/ingredients_controller');

BurgerRouter.route('/ingredients')
  .get(IngredientsController.list);


module.exports = BurgerRouter;
