'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    budget_id: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER
  }, {});
  Expense.associate = function(models) {
    Expense.belongsTo(models.Budget);
    Expense.belongsTo(models.Category);
  };
  return Expense;
};