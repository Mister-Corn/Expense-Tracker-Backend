const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'test',
  username: 'admin',
  password: null,
  dialect: 'sqlite',
  storage: 'test.db',
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });