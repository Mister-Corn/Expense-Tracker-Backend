.headers ON
.mode column

/* Basic Budget Query */
SELECT
    budgets.name AS Budget,
    budgets.amt_allocated AS Total_Amount,
    SUM(expenses.amount) AS Total_Expenses,
    budgets.amt_allocated - SUM(expenses.amount) AS Net_Amount
  FROM budgets
  JOIN expenses ON expenses.budget_id = budgets.id;