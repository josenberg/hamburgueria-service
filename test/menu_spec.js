const request = require('supertest');
const HttpStatus = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const chai = require('chai');

const should = chai.should();
const { expect } = chai;

class IngredientsSuite {
  static execute(app) {
    return describe('Menu Test Suite', () => {
      describe(`GET /menu`, () => {
        it('Should return all the Menu Items with ingredients', async () => {
          try {
            const response = await request(app)
              .get('/menu')
              .expect('Content-Type', /json/)
              .expect(HttpStatus.OK);

            expect(response.body).to.have.lengthOf(4);

            response.body.forEach(({ name, displayName, ingredients }) => {
              name.should.be.a('string');
              displayName.should.be.a('string');
              ingredients.should.be.a('array');
              expect(ingredients).to.have.lengthOf.at.least(1);
            });
            return response;
          } catch (error) {
            throw error;
          }
        });
      });

      describe(`PUT /menu`, () => {
        it('should change the name and price and the ingredients of a menu item', async () => {
          try {
            const dataToUpdate = {
              displayName: 'X-Princesa',
              ingredients: [1, 2, 3, 4, 5],
            };

            const response = await request(app)
              .put('/menu/1')
              .send(dataToUpdate)
              .set('Content-Type', 'application/json')
              .type('form')
              .expect(HttpStatus.OK);

            expect(response.body.displayName).to.equal('X-Princesa');
            expect(response.body.ingredients.length).to.equal(5);
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
