const request = require('supertest');
const HttpStatus = require('http-status-codes');

const chai = require('chai');

const { expect } = chai;

class IngredientsSuite {
  static execute(app) {
    return describe('Cart Test Suite', () => {
      describe(`POST /cart`, () => {
        it('should be able to complete a order', async () => {
          try {
            const order = {
              items: [{
                ingredients: [1, 1, 2, 3, 4],
              }, {
                ingredients: [1, 1, 2, 3, 4],
              }, {
                ingredients: [1, 1, 2, 3, 4],
              }],
            };

            const response = await request(app)
              .post('/cart')
              .send(order)
              .set('Content-Type', 'application/json')
              .type('form')
              .expect(HttpStatus.OK);

            return response;
          } catch (error) {
            throw error;
          }
        });
      });

    });
  }
}

module.exports = IngredientsSuite;
