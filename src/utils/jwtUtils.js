const jwt = require('jsonwebtoken');

const secret = 'this is the development secret or whatever. very secure!!!';

const generateToken = function generateTokenWithJwt(username) {
    const options ={
        expiresIn: '1hr',
        jwtid: '1337'
    };

    const payload = {
        username
    };

    return jwt.sign(payload, secret, options);
};

const verifyToken = function verifyTokenWithJwt(token) {
    return jwt.verify(token, secret, function verifyCb(err, decoded) {
        if (err) {
            throw err;
        }
        else {
            return decoded;
        }
    });
};

module.exports = {
    generateToken,
    verifyToken
};
