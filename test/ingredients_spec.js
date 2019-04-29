const request = require('supertest');
const HttpStatus = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const chai = require('chai');

const should = chai.should();
const { expect } = chai;

class IngredientsSuite {
  static execute(app) {
    return describe('Ingredients Test Suite', () => {

      describe(`GET /ingredients`, () => {
        it('Should read all the initial ingredients', async () => {
          try {
            const response = await request(app)
              .get('/ingredients')
              .expect('Content-Type', /json/)
              .expect(HttpStatus.OK);
            response.body.forEach((ingredient) => {
              ingredient.name.should.be.a('string');
              ingredient.displayName.should.be.a('string');
              ingredient.price.should.be.a('number');
            });
            expect(response.body.length).to.equal(5);
            return response;
          } catch (error) {
            throw error;
          }
        });
      });

      describe(`POST /ingredients`, () => {
        it('should add a new ingredient', async () => {
          try {
            const newIngredient = {
              name: 'azeitona',
              displayName: 'Azeitona',
              price: 0.9,
            };

            const response = await request(app)
              .post('/ingredients')
              .send(newIngredient)
              .set('Content-Type', 'application/json')
              .type('form')
              .expect(HttpStatus.OK);

            expect(response.body.id).to.a('number');

            const getResponse = await request(app)
              .get('/ingredients')
              .expect(HttpStatus.OK);

            expect(getResponse.body.length).to.equal(6);

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
