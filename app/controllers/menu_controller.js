const IngredientsController = require('./ingredients_controller');

const menu = [{
  id: 1,
  name: 'xbacon',
  displayName: 'X-Bacon',
  ingredients: [2, 3, 5],
}, {
  id: 2,
  name: 'xburger',
  displayName: 'X-Burger',
  ingredients: [3, 5],
}, {
  id: 3,
  name: 'xegg',
  displayName: 'X-Egg',
  ingredients: [3, 4, 5],
}, {
  id: 4,
  name: 'xeggbacon',
  displayName: 'X-Egg Bacon',
  ingredients: [2, 3, 4, 5],
}];

class BurgersController {
  static get menu() {
    return menu;
  }

  static list(request, response) {
    const completeMenu = BurgersController.menu.map(menuItem => ({
      ...menuItem,
      ingredients: menuItem.ingredients.map(id => IngredientsController.findById(id)),
    }));
    return response.json(completeMenu);
  }
}

module.exports = BurgersController;
