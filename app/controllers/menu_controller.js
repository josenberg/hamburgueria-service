const { isNil } = require('ramda');
const { getNextID } = require('../utilities/common');

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

const validateMenuItem = ({ name, displayName, ingredients }) => {
  if (typeof name !== 'string' || typeof displayName !== 'string') {
    return false;
  }
  return ingredients.length > 0
    && !ingredients.some(ingredient => isNil(IngredientsController.findById(ingredient)));
};

class MenuController {
  static get menu() {
    return menu;
  }

  static list(request, response) {
    const completeMenu = MenuController.menu.map(menuItem => ({
      ...menuItem,
      ingredients: menuItem.ingredients.map(id => IngredientsController.findById(id)),
    }));
    return response.json(completeMenu);
  }

  static findById(id) {
    return MenuController.menu.find(menuItem => menuItem.id === Number(id));
  }

  static create(request, response) {
    const id = getNextID(IngredientsController.ingredients);

    const { name, displayName, ingredients } = request.body;
    if (!validateMenuItem({ name, displayName, ingredients })) {
      throw new Error({ message: 'Invalid MenuItem' });
    }

    const newMenuItem = {
      id,
      name,
      displayName,
      ingredients,
    };

    MenuController.menu.push(newMenuItem);
    return response.json(newMenuItem);
  }

  static update(request, response) {
    const { id } = request.params;

    const menuItem = MenuController.findById(id);
    if (isNil(menuItem)) {
      throw new Error({ message: 'MenuItem not found' });
    }

    const { name, displayName, ingredients } = request.body;

    if (!isNil(name)) {
      menuItem.name = name;
    }

    if (!isNil(displayName)) {
      menuItem.displayName = displayName;
    }

    if (!isNil(ingredients)) {
      menuItem.ingredients = ingredients;
    }

    return response.json(menuItem);
  }
}

module.exports = MenuController;
