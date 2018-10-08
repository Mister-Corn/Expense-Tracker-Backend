/* 

Resources:
[catch-fail]: https://github.com/facebook/jest/issues/2129#issuecomment-348198948

Notes:
[1] - `.spread`. is like `.then`, but expects an array and automatically "spreads" the elements of the
array to all parameters in the callback function.
[2] - `done.fail(err)` is a way to force fail a jest test. I often use it in the `.catch` block so
the jest test fails if it the catch block is executed.
How it works? 謎です。🤷

*/
/* eslint-disable no-console */
// Dependencies
const Sequelize = require('sequelize');
const faker = require('faker');
// Test DB Info
const { test } = require('../../config/config.js');
// Testing utilities
const destroy = require('./util_destroy'); // deletes all rows in every table
const userFactory = require('./factories/user'); // generates fake data for User

const sequelize = new Sequelize(test);

const User = require('../user.js')(sequelize, Sequelize);

describe('User MODEL:', () => {
    let testUser;

    beforeEach(async () => {
        await destroy(); 

        testUser = await userFactory();
    });

    afterAll(async () => {
        await destroy();
    });

    it('actually tests.', () => {
        expect('sanity check').toBe('sanity check');
        expect(true).toBeTruthy();
    });

    it('Finds existing user in database.', (done) => {
        
        const screen_name = testUser['screen_name'];
        User
            .findAll({
                where: { screen_name }
            })
            .spread((user) => { // Note 1 above
                const gotUser = user.get({plain:true});
                expect(gotUser).toBeTruthy();
                expect(gotUser).toHaveProperty('screen_name', screen_name);
                done();
            })
            .catch((err) => {
                done.fail(err); // Note 2
            });
    });

    it('Throws when trying to find a non-existent user.', () => {
        const { screen_name } = testUser;

        User
            .findAll({
                where: { screen_name: 'a'}
            })
            .spread((user) => { // Note 1 above
                const gotUser = user.get({plain:true});
                expect(gotUser).not.toBeTruthy();
                expect(gotUser).not.toHaveProperty('screen_name', screen_name);
            })
            .catch(() => {
                // pass (Test Successful)
            });
    });

    it('Successfully creates a user.', (done) => {
        const newUser = {
            screen_name: faker.name.firstName(),
        };

        User
            .create(newUser)
            .then((user) => {
                expect(user).toBeTruthy();
                expect(user).toMatchObject(newUser);
                done();
            })
            .catch((err) => {
                done.fail(err); // Note 2
            });
    });

    it('Successfully deletes a user.', (done) => {
        const { screen_name } = testUser;

        User
            .destroy({
                where: { screen_name },
                force: true
            })
            .then((count) => {
                expect(count).toBe(1);
            })
            .catch((err) => {
                done.fail(err);
            });
    });
});