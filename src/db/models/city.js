'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
