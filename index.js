const PORT = 9000;

const BurgerService = require('./app');

const burgerService = new BurgerService();

burgerService.app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server successfully started on port: ${PORT}`);
});
