'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amt_allocated: DataTypes.DECIMAL,
    owner_id: DataTypes.INTEGER
  }, {});
  Budget.associate = function(models) {
    Budget.belongsTo(models.User);
    Budget.hasMany(models.Expense);
  };
  return Budget;
};