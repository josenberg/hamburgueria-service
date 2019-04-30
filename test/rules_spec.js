const request = require('supertest');
const HttpStatus = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const chai = require('chai');

const should = chai.should();
const { expect } = chai;

const isValidRule = ruleType => (
  ruleType === 'discount_percentage' || ruleType === 'free_item'
);

class IngredientsSuite {
  static execute(app) {
    return describe('Rules Test Suite', () => {
      describe(`GET /rules`, () => {
        it('Should return all the rules', async () => {
          try {
            const response = await request(app)
              .get('/rules')
              .expect('Content-Type', /json/)
              .expect(HttpStatus.OK);

            expect(response.body).to.have.lengthOf(3);

            response.body.forEach(({ type }) => {
              expect(type).to.be.oneOf(['discount_percentage', 'free_item']);
            });

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
