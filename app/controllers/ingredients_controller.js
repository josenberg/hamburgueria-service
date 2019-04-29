const { max, reduce } = require('ramda');

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

/**
 * Return the next id to be used in a insertion
 * @param {*} ingredients 
 */
const getNextID = (ingredients) => {
  const listOfIds = ingredients.map(ingredient => ingredient.id);
  return reduce(max, 0, listOfIds) + 1; 
};

const validadeIngredient = ({ name, displayName, price}) => (
  typeof name === 'string'
  && typeof displayName === 'string'
  && typeof price === 'number'
);

class IngredientsController {
  static get ingredients() {
    return ingredients;
  }

  static list(request, response) {
    return response.json(IngredientsController.ingredients);
  }

  static create(request, response) {
    let id = getNextID(IngredientsController.ingredients);

    const { name, displayName, price: requestPrice } = request.body;
    const price = parseFloat(requestPrice);

    if (!validadeIngredient({ name, displayName, price })) {
      throw 'Invalid Ingredient';
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
}

module.exports = IngredientsController;
