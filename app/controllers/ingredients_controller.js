const { isNil } = require('ramda');
const { getNextID } = require('../utilities/common');

const ingredients = [{
  id: 1,
  name: 'alface',
  displayName: 'Alface',
  price: 0.4,
}, {
  id: 2,
  name: 'bacon',
  displayName: 'Bacon',
  price: 2,
}, {
  id: 3,
  name: 'hamburguer_de_carne',
  displayName: 'Hambúrguer de carne',
  price: 3,
}, {
  id: 4,
  name: 'ovo',
  displayName: 'Ovo',
  price: 0.8,
}, {
  id: 5,
  name: 'queijo',
  displayName: 'Queijo',
  price: 1.5,
}];

const validadeIngredient = ({ name, displayName, price }) => (
  typeof name === 'string'
  && typeof displayName === 'string'
  && typeof price === 'number'
);

class IngredientsController {
  static get ingredients() {
    return ingredients;
  }

  static findById(id) {
    return IngredientsController.ingredients.find(ing => ing.id === Number(id));
  }

  static list(request, response) {
    return response.json(IngredientsController.ingredients);
  }

  static create(request, response) {
    const id = getNextID(IngredientsController.ingredients);

    const { name, displayName, price: requestPrice } = request.body;
    const price = parseFloat(requestPrice);

    if (!validadeIngredient({ name, displayName, price })) {
      throw new Error({ message: 'Ingredient not found' });
    }

    const newIngredient = {
      id,
      name,
      displayName,
      price,
    };

    IngredientsController.ingredients.push(newIngredient);
    return response.json(newIngredient);
  }

  static update(request, response) {
    const { id } = request.params;

    const ingredient = IngredientsController.findById(id);
    if (isNil(ingredient)) {
      throw new Error({ message: 'Ingredient not found' });
    }

    const { name, displayName, price: requestPrice } = request.body;
    const price = parseFloat(requestPrice);

    if (!isNil(name)) {
      ingredient.name = name;
    }

    if (!isNil(displayName)) {
      ingredient.displayName = displayName;
    }

    if (!isNil(price)) {
      ingredient.price = price;
    }

    return response.json(ingredient);
  }
}

module.exports = IngredientsController;
