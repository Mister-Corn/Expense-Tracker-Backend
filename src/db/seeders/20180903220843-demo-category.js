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
   return queryInterface.bulkInsert('Categories',
   [
     {
       id: 1,
       name: 'Housing',
       description: 'Housing expenses, such as rent or mortgage.',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      id: 2,
      name: 'Utilities',
      description: 'Utility expenses, such as electricity & water.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Groceries',
      description: 'Expenses for food for later consumption and preparation.',
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
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
