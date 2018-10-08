const HTTPstatus = require('../utils/HTTPstatus');

module.exports = {
    GET: (req, res) => {
        res.status(HTTPstatus.OK).json({ msg: 'Api is running!' });
    }
};