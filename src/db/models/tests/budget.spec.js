/* eslint-disable no-console */
const Sequelize = require('sequelize');
// Test DB Info
const { test } = require('../../config/config.js');
// Testing utilities
const destroy = require('./util_destroy'); // deletes all rows in every table
const userFactory = require('./factories/user'); // generates fake data for User
const budgetFactory = require('./factories/budget'); // generates fake data for Budget

const sequelize = new Sequelize(test);

const budgetDb = require('../budget.js')(sequelize, Sequelize);

describe('Budget MODEL:', () => {
    let testUser;
    let testBudget;

    beforeEach(async () => {
        await destroy(); 

        testUser = await userFactory();
        testBudget = await budgetFactory({ owner_id: testUser.id });
    });

    afterAll(async () => {
        await destroy();
    });

    it('actually tests.', () => {
        expect('sanity check').toBe('sanity check');
        expect(true).toBeTruthy();
    });

    it('Finds an existing budget by title.', (done) => {
        budgetDb.findOne({
                where: { title: testBudget.title } 
        })
            .then((budget) => {
                expect(budget).toBeTruthy();
                expect(budget).not.toMatchObject(testBudget);
            })
            .catch((err) => {
                done.fail(err);
            });
        done();
    });

    it('Finds an exiting budget by id.', (done) => {
        const existingBudget = {
            name: 'Monthly Budget',
            description: 'Budget for the Month.',
            amt_allocated: 6000.00,
            owner_id: 1
        };

        budgetDb.findById(1)
            .then((budget) => {
                expect(budget).toBeTruthy();
                expect(budget).not.toMatchObject(existingBudget);
            })
            .catch((err) => {
                done.fail(err);
            });
        done();
    });
});