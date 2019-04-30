const BurgerService = require('../app');

const IngredientsSpec = require('./ingredients_spec');
const MenuSpec = require('./menu_spec');
const RulesSpec = require('./rules_spec');

describe('Burger Service Test Suite', () => {
  let app;

  before('Start Express server', async () => {
    const burgerService = new BurgerService();

    try {
      const expressApp = burgerService.app;
      app = expressApp;
      return expressApp;
    } catch (error) {
      throw error;
    }
  });

  it('should pass all', () => {
    IngredientsSpec.execute(app);
    MenuSpec.execute(app);
    RulesSpec.execute(app);
  });
});
