'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmail: { msg: "must be a valid email" }
     }
    },
    password: {
     type: DataTypes.STRING,
     allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Listing, {
       foreignKey: "userId",
       as: "listings"
    });
  };
  return User;
};
