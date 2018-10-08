/*
Resource:
https://medium.com/riipen-engineering/testing-with-sequelize-cc51dafdfcf4
*/

// eslint-disable-next-line
const faker = require('faker');
const models = require('../..');
/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       An object to build the user from.
 */
const data = async (props = {}) => {
  const defaultProps = {
    name: faker.finance.accountName(),
    description: faker.lorem.words(5),
    amt_allocated: faker.finance.amount(1000,8000,2),
    owner_id: faker.random.number(100),
  };

  return Object.assign({}, defaultProps, props);
};

/**
 * Generates a user instance from the properties provided.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       A user instance
 */
module.exports = async (props = {}) =>
  models.Expense.create(await data(props));