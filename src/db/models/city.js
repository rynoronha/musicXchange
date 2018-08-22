'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.hasMany(models.Listing, {
       foreignKey: "cityId",
       as: "listings"
    });
  };
  return City;
};
