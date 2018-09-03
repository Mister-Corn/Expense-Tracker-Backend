'use strict';

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Expenses',
    [
      {
        id: 1,
        name: 'Rent',
        date: new Date(),
        description: 'Rent for September 2018',
        amount: 1200.00,
        budget_id: 1,
        cat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Electricity',
        date: new Date(),
        description: 'Electricity Bill - September 2018',
        amount: 75.00,
        budget_id: 1,
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Groceries',
        date: new Date(),
        description: 'Groceries - September 2018',
        amount: 500.00,
        budget_id: 1,
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Expenses', null, {});
  }
};
