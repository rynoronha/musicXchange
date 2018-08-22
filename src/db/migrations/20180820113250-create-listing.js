'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrument: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      until: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pickup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cityId: {
         type: Sequelize.INTEGER,
         onDelete: "CASCADE", // delete post if parent city is deleted
         allowNull: false,    // validation to prevent null value
         references: {        // association information
           model: "Cities",   // table name
           key: "id",         // attribute to use
           as: "cityId"      // reference as topicId
         }
       },
       userId: {
         type: Sequelize.INTEGER,
         onDelete: 'CASCADE',
         allowNull: false,
         references: {
           model: 'Users',
           key: 'id',
           as: 'userId'
         }
       }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};
