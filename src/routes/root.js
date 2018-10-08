const knex = require('knex');
const bcrypt = require('bcrypt');
const HTTPstatus = require('../utils/HTTPstatus');
const knexConfig = require('../../knexfile');
const { generateToken } = require('../utils/jwtUtils');

const db = knex(knexConfig['development']);

const hash = function hashPassword (password) {
    return bcrypt.hashSync(password, 16);
};

module.exports = {
    GET: (req, res) => {
        res.status(HTTPstatus.OK).json({ msg: 'Api is running!' });
    },
    REGISTER: async (req, res) => {
        const { username, password } = req.body;
        try {
            await db('users').insert({ username, password: hash(password) });

            res.status(HTTPstatus.created).json({token: generateToken(username)});
        } catch (err) {
            console.log('REGISTER error:', err);
            res.status(HTTPstatus.internalServerError).json({ err });
        }
    },
    LOGIN: async (req, res) => {
        const {username, password} = req.body;
        try {
            const user = await db('users').where({ username });
            if(user && bcrypt.compareSync(password, user.password)){                                                
                res.status(HTTPstatus.OK).json({token: generateToken(username)});
            }else {
                res.status(HTTPstatus.notFound).json({err: "User not found"});
            }
        }catch (err) {
            console.log('LOGIN error:', err);
            res.status(HTTPstatus.internalServerError).json({err});            
        }
    }
};