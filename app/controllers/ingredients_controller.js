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

class IngredientsController {
  static get ingredients() {
    return ingredients;
  }

  static list(request, response) {
    // Setting metadata to headers
    return response.json(IngredientsController.ingredients);
  }
}

module.exports = IngredientsController;
