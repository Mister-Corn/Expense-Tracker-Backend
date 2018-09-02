# Expense-Tracker-Backend

Backend for *Expense-Tracker* project.

---

## NPM Scripts

* `npm start`
  Runs eslint, which checks all `.js` files in `./src`, then runs `server.js`.
* `npm test`
  Runs `jest` with `--watch` and `--verbose` flags, and performs all tests in `src`.
* `npm run startmon`
  Same as `npm start`, but the server restarts whenever a server file changes. For development.
* `npm run sqlbudget`
  Opens the sqlite3 prompt on the `budgets.db` database. Only relevant in local development.