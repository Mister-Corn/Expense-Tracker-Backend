'use strict';
const express = require('express');

// Route handlers:
const root = require('./routes/root');

const server = express();

server.route('/').get(root.GET);

module.exports = server;
