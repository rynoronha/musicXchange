'use strict';

let listings = [
   {
    instrument: "Digital Piano",
    description: "Brand new!",
    price: 40,
    until: "Dec 25th",
    pickup: "Contact owner directly",
    cityId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Guitar",
    description: "Gibson, bought a year ago but good as new",
    price: 20,
    until: "Anytime",
    pickup: "Will deliver to your address",
    cityId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Violin",
    description: "Brand new, bought a few weeks ago",
    price: 15,
    until: "Anytime",
    pickup: "Will deliver to your address",
    cityId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Digital Piano",
    description: "Yamaha, 2009 model",
    price: 25,
    until: "Anytime",
    pickup: "Contact owner directly",
    cityId: 2,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Electric Guitar",
    description: "Brand new!",
    price: 25,
    until: "Oct 1st",
    pickup: "Contact owner for address",
    cityId: 2,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Flute",
    description: "Brand new!",
    price: 10,
    until: "Anytime",
    pickup: "Contact owner directly",
    cityId: 2,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Keyboard",
    description: "small midi keyboard",
    price: 15,
    until: "Anytime",
    pickup: "Contact owner directly",
    cityId: 3,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Guitar",
    description: "2015 model, great condition",
    price: 15,
    until: "Anytime",
    pickup: "Contact owner for address",
    cityId: 3,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    instrument: "Harmonica",
    description: "D scale",
    price: 5,
    until: "Nov 2st",
    pickup: "Will deliver to your address",
    cityId: 3,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
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
  return queryInterface.bulkInsert("Listings", listings, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  return queryInterface.bulkDelete("Listings", null, {});
  }
};
