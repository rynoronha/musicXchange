'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    instrument: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    until: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pickup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cityId: {
       type: DataTypes.INTEGER,
       allowNull: false
    },
    userId: {
       type: DataTypes.INTEGER,
       allowNull: false
    }
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.City, {
       foreignKey: "cityId",
       onDelete: "CASCADE"
    });
    Listing.belongsTo(models.User, {
       foreignKey: "userId",
       onDelete: "CASCADE"
    });
  };
  return Listing;
};
