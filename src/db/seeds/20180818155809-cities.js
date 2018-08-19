'use strict';

let cities = [
   {
    name: "New York",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Boston",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Los Angeles",
    createdAt: new Date(),
    updatedAt: new Date(),
   }
 ]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Cities", cities, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Cities", null, {});
  }
};
