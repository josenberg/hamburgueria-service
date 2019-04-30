const { isNil, isEmpty } = require('ramda');

const IngredientsController = require('./ingredients_controller');

const oldOrders = [];

const validateCart = (items) => {
  if (isEmpty(items)) {
    return false;
  }
  return !items.some(item => (
    item.ingredients.some(ingredient => isNil(IngredientsController.findById(ingredient)))
  ));
};

class CartController {
  static get oldOrders() {
    return oldOrders;
  }

  static create(request, response) {
    const { items } = request.body;

    if (!validateCart(items)) {
      throw new Error({ message: 'Invalid MenuItem' });
    }

    CartController.oldOrders.push(oldOrders);
    return response.json(items);
  }
}

module.exports = CartController;
