/**
 * Express Router
 */
const BurgerRouter = require('express').Router();

const IngredientsController = require('./controllers/ingredients_controller');
const MenuController = require('./controllers/menu_controller');
const RulesController = require('./controllers/rules_controller');

BurgerRouter.route('/ingredients')
  .get(IngredientsController.list)
  .post(IngredientsController.create);

BurgerRouter.route('/ingredients/:id')
  .put(IngredientsController.update);

BurgerRouter.route('/menu')
  .get(MenuController.list)
  .post(MenuController.create);

BurgerRouter.route('/menu/:id')
  .put(MenuController.update);

BurgerRouter.route('/rules')
  .get(RulesController.list);

module.exports = BurgerRouter;
