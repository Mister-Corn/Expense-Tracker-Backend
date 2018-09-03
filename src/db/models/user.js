'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    screen_name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Budget);
  };
  return User;
};