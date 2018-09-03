'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amt_allocated: DataTypes.DECIMAL,
    owner_id: DataTypes.INTEGER
  }, {});
  // Budget.associate = function(models) {
  //   // associations can be defined here
  // };
  return Budget;
};