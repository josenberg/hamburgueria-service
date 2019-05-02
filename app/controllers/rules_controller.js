const rules = [{
  // Light rule, to make light burgers cheaper
  id: 1,
  type: 'discount_percentage',
  with: [1],
  without: [2],
  value: 0.9,
  description: 'Se o seu lanche tem alface e não tem bacon, ganhe 10% de desconto.',
}, {
  // Free meat burger every two burgers
  id: 2,
  type: 'free_item',
  ingredient: 3,
  value: 2,
  description: 'A cada 3 porções de carne você só paga 2.',
}, {
  // Free chease every two chease
  id: 3,
  type: 'free_item',
  ingredient: 5,
  value: 2,
  description: 'A cada 3 porções de queijo você só paga 2',
}];

class RulesController {
  static get rules() {
    return rules;
  }

  static list(request, response) {
    return response.json(RulesController.rules);
  }
}

module.exports = RulesController;
