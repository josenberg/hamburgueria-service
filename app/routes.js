/**
 * Express Router
 */
const BurgerRouter = require('express').Router();

const IngredientsController = require('./controllers/ingredients_controller');

BurgerRouter.route('/ingredients')
  .get(IngredientsController.list)
  .post(IngredientsController.create);

BurgerRouter.route('/ingredients/:id')
  .put(IngredientsController.update);


module.exports = BurgerRouter;
