# Expense-Tracker-Backend

Backend for *Expense-Tracker* project.

**Technologies**
* Express
* Sequelize
* Sqlite3/PostgreSQL

---

## NPM Scripts

* `npm start`<br/>
  Runs eslint, which checks all `.js` files in `./src`, then runs `server.js`.
* `npm test`<br/>
  Runs `jest` with `--watch` and `--verbose` flags, and performs all tests in `src`.
* `npm run startmon`<br/>
  Same as `npm start`, but the server restarts whenever a server file changes. For development.
* `npm run sqlbudget`<br/>
  Opens the sqlite3 prompt on the `budgets.db` database. Only relevant in local development.
