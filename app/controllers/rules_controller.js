const rules = [{
  // Light rule, to make light burgers cheaper
  id: 1,
  type: 'discount_percentage',
  with: [1],
  withoud: [2],
  value: 0.9,
}, {
  // Free meat burger every two burgers
  id: 2,
  type: 'free_item',
  ingredients: [3],
  value: 2,
}, {
  // Free chease every two chease
  id: 3,
  type: 'free_item',
  ingredients: [4],
  value: 2,
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
