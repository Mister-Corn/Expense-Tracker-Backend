const knex = require('knex');
const knexConfig = require('../../knexfile');
const HTTPstatus = require('../utils/HTTPstatus');

const { verifyToken } = require('../utils/jwtUtils');

const db = knex(knexConfig['development']);


async function GET_BUDGETS(req, res) {
    const { token } = req.headers.authorization;
    try {
        const decodedToken = verifyToken(token);
        const { username } = decodedToken;
        const budgets = await db('budgets').where({ username });
        res.status(HTTPstatus.OK).json({ budgets });
    } catch (err){
        res.status(HTTPstatus.badRequest).json({ err: err });
    }
}

// async function GET_SUMMARY(req, res) {
//     const { token } = req.headers.authorization;
    

// }

module.exports = {
    GET_BUDGETS,
};

