/*
Resource:
https://medium.com/riipen-engineering/testing-with-sequelize-cc51dafdfcf4
*/
const models = require('..');

module.exports = async function destroy() {
    return await Promise.all(
        Object.keys(models).map((key) => {
            if (['sequelize', 'Sequelize'].includes(key)) return null;

            return models[key].destroy({ where: {}, force: true });
        })
    );
};